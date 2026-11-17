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
- Each agent works on one issue in its own branch off `main`. Never commit or push to `main` directly unless the maintainer explicitly says to.
- Before opening a PR, run `npm run lint`, `npm run typecheck`, and `npm run build`, and check the change in the running app (desktop and mobile widths). All must pass.
- Commit as you go with concise conventional commit messages (e.g. `feat: add footer`).
- No attribution anywhere: no `Co-Authored-By` trailers, "Generated with Claude Code" lines, or session links in commits or PRs.
- When done, open a PR to `main` with a short summary and how it was validated. The maintainer reviews and merges; don't merge yourself.
- To update a PR with new `main`, merge `origin/main` into the branch and push normally. No rebases or force-pushes.
- Stay in scope: one feature per PR. Unrelated work goes in a separate branch and PR.

## How the maintainer works with agents

- Usually one coordinator session plus feature agents, each owning an area (e.g. front-end components, articles) in its own worktree. The coordinator relays tasks, approvals, and review feedback.
- The maintainer reviews PRs and sends feedback in rounds; push follow-up commits to the same PR. When the maintainer says to merge, the coordinator merges.
- Front-end: server components by default; put `"use client"` only on the smallest interactive subcomponent (e.g. `Navbar` is server, `MobileMenu` is client).
- Only when the maintainer explicitly asks, read the maintainer's earlier repos (`Aryn-G/roboraptors-web`, `Aryn-G/thinking-edu`, `Aryn-G/loops`) and match their style. Don't do this by default.
- Give short, direct summaries. Flag pre-existing failures separately from your own changes.
- If the work needs a migration applied or env vars set before the build can pass, stop and say so.
- Don't add dependencies beyond the stack without asking.
- The repo is public. Never commit secrets. Keep them in `.env.local` and list variable names in `.env.example`.
- Never run commands against the remote Supabase project (no `db push`). Migrations are applied manually by the maintainer.

## Stack

- Next.js (App Router, TypeScript, ESLint), npm, Tailwind (+ `@tailwindcss/typography`), `@next/mdx` + `remark-gfm`
- Icons come from Tailwind's Heroicons (`@heroicons/react`)
- Articles: `.mdx` files in `content/` with an exported `metadata` object; citations are GFM footnotes; images use `Figure`
- Planned (not installed yet): Supabase (Postgres, Auth with Google OAuth, Storage), `@supabase/supabase-js`, `@supabase/ssr`, `zod`, `supabase` CLI as a dev dependency
- Hosted on Vercel Hobby
## Architecture rules

- Public pages are statically generated. Fetch public data with a cookie-less Supabase client using the anon key so pages stay static.
- Admin writes go through server actions that call `revalidatePath` on affected public pages.
- RLS: anyone can read published rows; only admins can write. Admin = email in the `admins` table, checked by a SQL `is_admin()` function used in policies. Storage writes follow the same rule.
- No public user accounts. Only allowlisted admins sign in.
