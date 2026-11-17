import fs from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";

export type ArticleMeta = {
  title: string;
  author: string;
  blurb: string;
  date: string;
};

const dir = path.join(process.cwd(), "content");

export const slugs = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.slice(0, -4));

export async function getArticle(slug: string) {
  const mod: { default: MDXContent; metadata: ArticleMeta } = await import(
    `@/content/${slug}.mdx`
  );
  return mod;
}

export function readTime(slug: string) {
  const text = fs
    .readFileSync(path.join(dir, `${slug}.mdx`), "utf-8")
    // drop import/export blocks, JSX tags, and expressions so only prose is counted
    .replace(/^(import|export) [\s\S]*?\n\s*\n/gm, "")
    .replace(/<[^>]*>|\{[^}]*\}/g, "");
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

export async function getArticles() {
  const articles = await Promise.all(
    slugs.map(async (slug) => ({
      ...(await getArticle(slug)).metadata,
      slug,
      readTime: readTime(slug),
    })),
  );
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}
