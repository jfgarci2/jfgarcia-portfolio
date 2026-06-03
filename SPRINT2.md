# Sprint 2 — Setup guide

## Dashboard live links

1. Copy `.env.example` to `.env.local`
2. Paste sanitized Power BI "Publish to web" URLs:

```env
NEXT_PUBLIC_AMVA_PERMISOS_URL=https://...
NEXT_PUBLIC_AMVA_SANCIONATORIOS_URL=https://...
NEXT_PUBLIC_AMVA_ARBOLES_URL=https://...
NEXT_PUBLIC_DAP_JURIDICO_URL=https://...
NEXT_PUBLIC_DAP_ANYWHERE_URL=https://...
NEXT_PUBLIC_DAP_MESAS_POT_URL=https://...
```

Buttons appear on case study pages only when a URL is set.

## Project screenshots

Add WebP images (16:9) to replace mock previews:

- `public/work/amva.webp`
- `public/work/medellin-dap.webp`
- `public/work/rag-pot-medellin.webp`
- (optional) other slugs: `devimed`, `bioexplora`, etc.

## Profile assets

- Headshot: `public/headshot.jpg` (square, ≥400px)
- CV PDF: `public/cv-jose-fernando-garcia.pdf`

## Open-data demo

When your demo is published:

```env
NEXT_PUBLIC_OPEN_DATA_DEMO_URL=https://...
```

Or use the placeholder page: `/demos/open-data`

## Case study URLs

- `/work/amva`
- `/work/medellin-dap`
- `/work/rag-pot-medellin`

Spanish: prefix `/es` (e.g. `/es/work/amva`).

## Deploy (Vercel)

```bash
cd jfgarcia-portfolio
npx vercel
```

Set environment variables in the Vercel dashboard. Point `NEXT_PUBLIC_SITE_URL` to your production domain.
