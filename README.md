# Alejandro de la Mora

AI Solutions Architect | Enterprise AI Outcomes

A responsive, print-friendly professional résumé built with Next.js.

## Development

Use Node.js 20.9 or later.

```sh
npm ci
npm test
npm run dev
```

## Production

```sh
npm run build
```

The static website is generated in `out/`. Deploy with Vercel or any static host.

The **Download PDF** button opens the browser print dialog. Choose **Save as PDF**.

Content is stored in `app/resume.json`; certificate verification links are in `app/certifications.json`.
