# Project notes

- This site is standalone (not synced with AI Studio). Edit it directly in this repo.
- Hosting: Vercel. `vite.config.ts` sets the Nitro preset to `vercel`, so `bun run build`
  (or `npm run build`) writes a ready-to-serve `.vercel/output` folder.
- Pushes to `main` deploy to production once the repo is imported in Vercel.

## SEO
- Site URL for canonical tags, Open Graph, JSON-LD and the sitemap comes from `SITE_URL` (Vercel env var)
  or, if unset, Vercel's production domain. After connecting a custom domain, redeploy once.
- Service pages: `SERVICE_PAGES` in `src/lib/seo-content.ts` → `/services/:slug`.
  City pages: `AREA_PAGES` in the same file → `/service-areas/:slug`. Both are added to the sitemap automatically.
- Per-page tags come from `pageHead()` in `src/lib/seo.ts`; site-wide LocalBusiness schema lives in `src/routes/__root.tsx`.
- `/sitemap.xml` and `/robots.txt` are server routes in `src/routes/`.
