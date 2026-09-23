# Publishing this site

This is a static HTML site. Vercel detects it automatically; no build command or framework setting is required.

## Before publishing

Replace the placeholder G&S information with verified factory facts, real product photographs, a business email address, and a working RFQ form destination. The current contact page is an RFQ brief, not a form that submits enquiries.

## GitHub

1. Create an empty repository named `gs-custom-socks-website` on GitHub. Do not initialize it with a README, `.gitignore`, or license.
2. From this folder, push the `main` branch to the repository.

## Vercel

1. Import the GitHub repository at https://vercel.com/new.
2. Leave the framework preset as **Other** and the build command blank.
3. Deploy. Every later push to `main` will update production.

## Namecheap domain

1. In the Vercel project, add both your root domain (for example, `example.com`) and `www.example.com` in **Settings → Domains**.
2. Use the exact DNS records displayed by Vercel in Namecheap's **Advanced DNS** panel. Typically, the root domain uses an **A** record and `www` uses a **CNAME** record.
3. Make one domain primary and redirect the other to it. Vercel issues HTTPS automatically once DNS verification succeeds.

Do not remove MX, TXT, or other records used for email or existing services.
