# CAK3D-Creations

Business/portfolio website for **CAK3D-Creations** — CAK3D's creative technology workshop.

This repo is intentionally separate from `real-cak3d.github.io` so the original GitHub profile page can stay intact while this site is deployed independently on Vercel.

## What the site is

A business-style portfolio for active CAK3D projects:

- Map-Pi trail/hiking app
- Home Inventory NFC family app
- Ibby Auto Works service/business app direction
- MyPetID pet profile and NFC safety platform
- Raspberry Pi/device dashboards
- Discord bots and automation lanes
- DayZ/creative tech roots
- Home Assistant / smart-home experiments
- Hermes agent command center workflows
- NukeBox local app lab and Windows-hosted previews
- Knowledge-base, wiki, and project documentation systems

## Deploying on Vercel

Recommended project name:

```text
CAK3D-Creations
```

Suggested Vercel settings:

- Framework preset: **Other** / static
- Build command: leave empty, or use `node scripts/validate-site.mjs`
- Output directory: `.`
- Install command: leave empty

The repo includes `vercel.json` for clean URLs and static hosting.

## Local verification

```bash
node scripts/validate-site.mjs
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Payment boundary

This site is Stripe-ready in presentation only. Do **not** put Stripe secret keys in this repo or in browser JavaScript.

Use one of these production-safe paths later:

- Stripe Payment Links for simple checkout buttons.
- Vercel API routes/serverless functions to create Checkout Sessions.
- Supabase Edge Functions for checkout/session/webhook logic.

See [`docs/stripe-vercel-notes.md`](docs/stripe-vercel-notes.md).
