<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Spice and Wellness Society (SAWS)

Website for a UNC student org focused on heart health in the South Asian community: cookbook, articles, team.

## How to work

- Every line is reviewed. Keep code minimal and direct. No speculative abstractions, single-use helpers, or unused code.
- Comments: sparse. Only where the "why" isn't obvious, one line max. No JSDoc, no comments restating the code.
- After each step, run `npm run lint`, `npm run typecheck`, and `npm run build`, give a short summary, then stop and ask for approval. Don't commit before approval. Once approved, commit with the conventional commit message the maintainer provides, then move on to the next step.
- If a step needs a migration applied or env vars set before the build can pass, stop and say so.
- Don't add dependencies beyond the stack without asking.
- The repo is public. Never commit secrets. Keep them in `.env.local` and list variable names in `.env.example`.
- Never run commands against the remote Supabase project (no `db push`). Migrations are applied manually by the maintainer.

## Stack

- Next.js (App Router, TypeScript, ESLint), npm, Tailwind, `@next/mdx`
- Supabase: Postgres, Auth (Google OAuth), Storage
- Deps: `@supabase/supabase-js`, `@supabase/ssr`, `zod`, `supabase` CLI as a dev dependency
- Hosted on Vercel Hobby

## Architecture rules

- Public pages are statically generated. Fetch public data with a cookie-less Supabase client using the anon key so pages stay static.
- Admin writes go through server actions that call `revalidatePath` on affected public pages.
- RLS: anyone can read published rows; only admins can write. Admin = email in the `admins` table, checked by a SQL `is_admin()` function used in policies. Storage writes follow the same rule.
- No public user accounts. Only allowlisted admins sign in.
