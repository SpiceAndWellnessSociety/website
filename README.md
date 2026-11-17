# SAWS (Spice and Wellness Society) Website

Website for a UNC student org focused on heart health in the South Asian community: cookbook, articles, team.

## Stack

- Next.js (App Router, TypeScript), Tailwind (with `@tailwindcss/typography` for articles), `@next/mdx` + `remark-gfm`
- Icons: Heroicons (`@heroicons/react`)
- Planned: Supabase (Postgres, Google OAuth for admins, Storage) for recipes and admin auth
- Hosted on Vercel Hobby

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

Before opening a PR: `npm run lint`, `npm run typecheck`, `npm run build`.

## Layout

- `app/`: routes. Non-route code lives in `_`-prefixed folders (`_components`, `_lib`, `_db`).
- `content/`: articles as `.mdx` files. The file name is the slug (`/articles/<slug>`).
- `public/`: static assets (`articles/` images, `partners/` logos).

## Writing an article

Add `content/<slug>.mdx` and export its metadata at the top:

```mdx
export const metadata = {
  title: "Article title",
  author: "Author name",
  blurb: "One-sentence summary.",
  date: "2026-11-03",
};
```

- Citations: GFM footnotes. Write `text[^1]` and `[^1]: Source.` at the bottom; numbering and back-links are automatic.
- Images: `<Figure src="/articles/x.png" width={1200} height={600} alt="..." caption="..." />`. Put the file in `public/articles/`.
- Read time is computed from the word count.

## Known issues

- Lint and typecheck currently fail: `app/cookbook/` pages are empty stubs, `MobileMenu.tsx` calls `setState` in an effect, and ESLint also scans `.claude/worktrees/`.

## Contributing

Work happens on branches with PRs to `main`; see [AGENTS.md](AGENTS.md) for the rules agents (and people) follow.
