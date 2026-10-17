# Vache Thomassian — Private Legal Consultant

A premium, editorial-style personal portfolio website for Vache Thomassian, a private legal consultant — built with React, Vite, JavaScript and JSX. The site communicates professionalism, discretion, and personalized service through deep navy and ivory tones, warm antique-gold accents, elegant serif typography, and a clean, accessible layout. This is a solo practice, not a law firm.

## Features

- **Home** — Refined hero, four-value introduction, services overview, and a contact CTA.
- **About** — Personal introduction to Vache Thomassian with clearly marked placeholders for verified biography, qualifications, and jurisdiction.
- **Services** — Four configurable service categories. Each service's "Discuss This Service" button deep-links to the contact form and preselects the relevant inquiry type.
- **Contact** — Accessible inquiry form with validation, loading, success, and error states. Includes a clear warning against submitting confidential information.
- **Privacy & Disclaimer** — Editable privacy policy covering the inquiry form, EmailJS, and Tawk.to, plus a prominent legal disclaimer.
- **Header** — Sticky, responsive navigation with a monogram logo, mobile hamburger menu, and a "Get in Touch" button.
- **Footer** — Name and short description, navigation, services, contact CTA, configurable email/phone, and copyright with the current year.
- **Live chat** — Optional Tawk.to widget, loaded only when configured.
- **SEO & accessibility** — Per-page titles, meta description, semantic HTML, keyboard-friendly controls, skip link, and reduced-motion support.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

## Configuration

Copy the example environment file and fill in any values you have:

```bash
cp .env.example .env
```

### EmailJS (contact form)

The contact form uses [`@emailjs/browser`](https://www.emailjs.com/) to deliver inquiries by email.

1. Create an EmailJS account and add an **Email Service** (e.g. Gmail, SMTP).
2. Create an **Email Template** that accepts these variables:
   - `from_name` — the submitter's full name
   - `reply_to` — the submitter's email
   - `phone` — optional phone number
   - `inquiry_type` — selected type of inquiry
   - `preferred_contact` — Email / Phone / Either
   - `message` — the brief message
3. In **Account → API Keys**, copy your **Public Key**.
4. Set these in `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

If any of these are missing, the form displays a **demo-mode notice** and will not pretend an email was delivered. EmailJS public keys are designed for client-side use; never place secret credentials in the frontend.

### Tawk.to (live chat)

Live chat is optional and only loads when configured.

1. Create a property in the [Tawk.to dashboard](https://dashboard.tawk.to/).
2. From the property's **Administration → Property Settings → Chat Widget**, copy the **Property ID** (the long hash in the embed URL) and the **Widget ID** (use `default` for the default widget).
3. Set in `.env`:
   ```
   VITE_TAWK_PROPERTY_ID=your_property_id
   VITE_TAWK_WIDGET_ID=default
   ```

If `VITE_TAWK_PROPERTY_ID` is empty, the widget script is not injected and the site shows a discreet note in the contact page instead. Live chat is intended for brief, preliminary inquiries — not emergency legal advice or confidential case details.

### Optional contact details

To display email and/or phone in the footer and contact page:

```
VITE_CONTACT_EMAIL=contact@example.com
VITE_CONTACT_PHONE=+1-555-0100
```

Leave blank to show a tasteful "to be provided" placeholder.

## Editing services

Service categories are defined in `src/lib/site.js` in the `services` array. Each entry has an `id`, `title`, `short` description (cards), a longer `description` (services detail page), and an `icon` name. To add, remove, or rename a service, edit that array — the home overview, services page, contact form inquiry dropdown, and footer links all update automatically.

## Important notes

- The site **does not** publish invented credentials, testimonials, case results, or professional memberships. Placeholders are used wherever Vache must supply verified information.
- Submitting the inquiry form does **not** establish a lawyer-client relationship. The disclaimer on the Privacy page makes this explicit.
- Vache should review and replace all bracketed placeholder content (biography, qualifications, jurisdiction, retention policy, contact details) before publishing.

## Build

```bash
npm run build
```

Produces an optimized build in `dist/`.

## Tech stack

- React 18 + Vite
- React Router (client-side routing)
- Lucide React (icons)
- EmailJS (contact form delivery)
- Tawk.to (optional live chat)
- Modern CSS (custom properties, grid, flexbox)
