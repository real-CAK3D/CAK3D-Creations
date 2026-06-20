# Stripe + Vercel notes

CAK3D-Creations is planned as a business/portfolio site that may later sell services, builds, digital downloads, support, or subscriptions.

## Current status

The current website is static and safe to deploy on Vercel. It does not create Stripe Checkout Sessions yet.

## Safe payment options

### Option 1: Stripe Payment Links

Fastest path for simple payments. Create products/prices in Stripe and paste public Payment Link URLs into buttons.

Pros:
- no backend required
- no Stripe secret key in repo
- easy to manage manually

Cons:
- less custom checkout logic
- limited dynamic pricing/intake behavior

### Option 2: Vercel API route

Use a serverless function such as `/api/create-checkout-session` that reads `STRIPE_SECRET_KEY` from Vercel environment variables.

The browser calls the API route; the API route talks to Stripe.

Never expose:

```text
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
restricted keys
service-role keys
```

### Option 3: Supabase Edge Function

Useful if product metadata, customer records, or app entitlements live in Supabase.

## Required future environment variables

Store only in Vercel/Supabase secret stores, not GitHub source:

```text
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Only publishable keys may be exposed to the frontend. Secret keys must never be committed.

## Webhook reminder

If selling anything that changes access, subscriptions, downloads, or support status, use verified Stripe webhooks on the server side.
