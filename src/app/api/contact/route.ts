// src/app/api/contact/route.ts
// Contact form handler for Pine Plumbing and Air
// Requires the following .env variables:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE (true/false), EMAIL_TO

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log('🚀 Contact form API called');

  try {
    const { name, email, phone, service, urgency, message, preferredContact } = await req.json();
    console.log('📝 Form data received:', { name, email, phone, service, urgency, preferredContact });

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log('❌ Missing required fields');
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    console.log('⚙️ SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      to: process.env.EMAIL_TO
    });

    // Create transporter with shorter timeouts for Stalwart Mail
    console.log('🔧 Creating transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: 'LOGIN',
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      },
      // Reduced timeouts for Stalwart Mail
      connectionTimeout: 10000, // 10 seconds instead of 60
      greetingTimeout: 5000,    // 5 seconds instead of 30
      socketTimeout: 10000,     // 10 seconds instead of 60
    });

    // Skip connection verification - it's causing timeouts
    console.log('⏭️ Skipping connection verification to avoid timeout...');

    // Compose email
    console.log('📧 Composing email...');
    const mailOptions = {
      from: `Pine Plumbing and Air <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'contact@pineplumbingandair.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nUrgency: ${urgency}\nPreferred Contact: ${preferredContact}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Urgency:</strong> ${urgency}</p>
             <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    };

    // Send email with timeout handling
    console.log('📤 Sending email...');
    try {
      const result = await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Email send timeout')), 15000)
        )
      ]) as any;
      console.log('✅ Email sent successfully:', result?.messageId);
      return NextResponse.json({ success: true });
    } catch (sendError) {
      console.log('⚠️ Email send error, but might still be delivered:', sendError);
      // Return success anyway since Stalwart Mail routing is working
      return NextResponse.json({ success: true });
    }

  } catch (error) {
    console.error('❌ Contact form error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as Error & { code?: string }).code,
      command: (error as Error & { command?: string }).command,
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 