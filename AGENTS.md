# Project notes

- This site is standalone (not synced with AI Studio). Edit it directly in this repo.
- Hosting: Vercel. `vite.config.ts` sets the Nitro preset to `vercel`, so `bun run build`
  (or `npm run build`) writes a ready-to-serve `.vercel/output` folder.
- Pushes to `main` deploy to production once the repo is imported in Vercel.
