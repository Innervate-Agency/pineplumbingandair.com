import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log('🚀 Contact form API called');

  try {
    const { name, email, phone, service, urgency, message, preferredContact } = await req.json();

    // Validate required fields
    if (!name || !phone || !message) {
      console.log('❌ Missing required fields');
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // This transporter configuration is robust for an internal Docker network.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      // 'secure' should be false for internal, non-TLS communication.
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Keep TLS relaxation if needed for Docker networking.
      tls: {
        rejectUnauthorized: false,
      },
      // Generous timeouts for the connection to Stalwart.
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 10000,     // 10 seconds
    });

    const mailOptions = {
      from: `Pine Plumbing and Air <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Website Contact: ${name} - ${service || 'General Inquiry'}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email || 'Not provided'}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service || 'N/A'}</p>
             <p><strong>Urgency:</strong> ${urgency || 'N/A'}</p>
             <p><strong>Preferred Contact:</strong> ${preferredContact || 'N/A'}</p>
             <hr>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    console.log('📤 Handing off email to mail server...');
    // This promise resolves once Stalwart ACCEPTS the email, not when it's delivered. This is the key.
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email accepted by mail server for delivery:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });

  } catch (error) {
    console.error('❌ Contact form API error:', error);
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any).code,
      command: (error as any).command,
    };
    console.error('Error details:', errorDetails);

    return NextResponse.json({ error: 'Failed to send message.', details: errorDetails.message }, { status: 500 });
  }
}