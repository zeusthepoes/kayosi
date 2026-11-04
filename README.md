# Kayosi Trading CC website

A responsive, dependency-light static website starter built from the supplied Kayosi prototype and aligned to Kayosi Trading CC's known business focus: corporate branding, PPE supply, and commercial/industrial shelving and racking.

## Before publishing — required content checks
The prototype contained unverified details (including Johannesburg contact information, company registration/VAT numbers, certifications, client logos, project counts, contract values, prices and product stock). Those claims have intentionally **not** been copied.

Please confirm and add:
- Confirmed contact details supplied by the owner: office 032 586 0429; mobile 061 466 6596; additional mobile 072 680 5373; email kayositrading@telkomsa.net. An earlier physical address record is incomplete ("3 Dawood Close, Unit …") and must not be published until the full address is verified.
- Company registration and VAT details (only if you want them displayed).
- Current B-BBEE status, CIDB grading, ISO certifications and any other credentials, with valid evidence.
- Actual supplier/brand partnerships and approved customer references.
- Approved product catalogue, product specifications and current pricing (if prices are to be public).
- Any delivery areas, installation scope, warranties and service commitments.

The contact panel is deliberately marked "to be confirmed". Do not publish until the official contact details and enquiry process have been added.

## Local preview
Open `index.html` in a browser, or serve this folder with any static HTTP server.

## Hosting and security
This is a static site: it has no login, database, payment processing, server-side form handler or exposed API keys. That keeps the attack surface small. The included `_headers` file is intended for **Cloudflare Pages** and sets baseline browser security headers. GitHub Pages does not provide general custom response-header configuration for a repository site; if you keep GitHub Pages hosting, put a suitable CDN/reverse proxy in front (for example Cloudflare) and verify that the headers are actually returned by the public domain.

The Content Security Policy permits Google Fonts only for CSS/fonts. For a strict self-hosted deployment, download and self-host the fonts, then remove the Google Fonts origins from `_headers` and the `@import` in `styles.css`.

## Production checklist
1. Connect a domain with registrar account MFA enabled; use HTTPS only.
2. Deploy via Cloudflare Pages (or another host that supports response headers); add `_headers` to the published root.
3. Verify headers on the production hostname and test the CSP in report-only mode before enforcement if adding third-party services.
4. Add a server-side quote form only when required. Use a reputable form provider or a serverless endpoint with server-side validation, rate limiting, bot protection, CSRF protections where applicable, minimal data retention and POPIA-compliant privacy notices. Never put email/API credentials in browser JavaScript.
5. Enable MFA/passkeys on GitHub, hosting, DNS and email accounts; use least-privilege access and separate deploy credentials.
6. Protect the repository's default branch, require reviewed changes, enable secret scanning/dependency alerts, and use a deployment workflow with pinned actions.
7. Keep domain/DNS records, dependencies and content maintained; back up the repository and review access regularly.
8. Run accessibility, mobile, link, performance and security-header checks before launch; commission an independent penetration test if the site later adds accounts, payments, customer portals or sensitive data.

## Important
Security controls reduce risk; they cannot guarantee that a website will never be compromised. Hosting configuration, domain/DNS security, account security and ongoing maintenance are part of the protection.


## Business information governance
Use relevant business information the owner provides in future conversations to update this website and its source content. Keep a distinction between:
- current confirmed services and capabilities;
- historical projects/contracts (label with dates and do not imply they are active);
- proposed or planned projects (do not present as operating facilities or existing capabilities);
- supplier relationships (do not call a supplier a formal partner unless the relationship is confirmed);
- public-source information (verify identity and date, and do not publish sensitive or misleading details).

Do not add personal, unrelated, confidential, financial-account or sensitive information to the public website. Do not publish unverified certifications, customer logos, testimonials, contract values or contact details.
