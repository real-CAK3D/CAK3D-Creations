# Vercel deployment checklist

1. Import GitHub repo `real-CAK3D/CAK3D-Creations` into Vercel.
2. Set project name to `CAK3D-Creations` if available.
3. Use static settings:
   - Framework: Other/static
   - Build command: empty or `node scripts/validate-site.mjs`
   - Output directory: `.`
4. Deploy.
5. Verify:
   - `/` returns 200
   - styles load
   - project cards render
   - docs links are reachable or intentionally treated as raw GitHub docs
6. When payments are added, use Vercel env vars for Stripe secrets.
