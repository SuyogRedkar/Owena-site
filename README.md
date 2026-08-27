# Souza Designers & Construction — Next.js website

A responsive brochure/portfolio website built with Next.js, TypeScript and CSS. Consultation and enquiry submissions are sent directly by email via Resend; there is no database and uploaded consultation files are not persisted by the application.

## Run locally

1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill in the Resend values.
4. `npm run dev`
5. Open `http://localhost:3000`.

## Email setup

Create a Resend account, verify the sending domain/address, and set:

- `RESEND_API_KEY`
- `FROM_EMAIL` — a verified sender on your domain
- `TO_EMAIL` — the business inbox

The API uses Node.js runtime because it processes multipart form uploads and creates email attachments in memory.

## Images

The sample portfolio uses Unsplash remote images purely as placeholders. Replace them with the company's own licensed images before production. For a simple site, these can live in `public/images` and be referenced locally.

## Security/production notes

- Add CAPTCHA/Cloudflare Turnstile and rate limiting before public launch to reduce spam.
- Consider SPF, DKIM and DMARC on the sending domain.
- The consultation endpoint rejects total uploads over 10 MB.
- Uploaded files are held in memory during request processing and attached to the outgoing email; there is no application database or object-storage upload.
- For production, consider validating MIME types/file signatures and adding stronger anti-abuse controls.
