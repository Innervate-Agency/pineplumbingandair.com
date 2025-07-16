# Email Setup Guide for Pine Plumbing & Air

## Quick Setup with Resend (Recommended)

1. **Sign up for Resend** (free tier available):
   - Go to https://resend.com
   - Sign up for a free account
   - You get 100 emails/day free, 3,000/month

2. **Get your API key**:
   - Go to https://resend.com/api-keys
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Add to your environment**:
   Create a `.env.local` file in your project root:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Verify domain (optional but recommended)**:
   - Go to https://resend.com/domains
   - Add your domain `pineplumbingandair.com`
   - Follow DNS verification steps
   - This allows sending from `contact@pineplumbingandair.com`

## How it works

- Contact forms now use Resend API instead of SMTP
- Much more reliable than traditional email servers
- Automatic bounce/complaint handling
- Better deliverability rates
- No server configuration needed

## Testing

Once set up, all contact forms on the site will work:
- Hero section contact form
- Contact page form
- Any other forms that use the `/api/contact` endpoint

## Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify your API key is correct in `.env.local`
- Make sure `.env.local` is in your `.gitignore` file
- Restart your development server after adding environment variables

## Alternative: Use your Stalwart Mail server

If you prefer to use your existing mail server, you can modify the contact route to use SMTP instead of Resend. Let me know if you'd like me to set that up instead. 