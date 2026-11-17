import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { getArticles } from "@/app/_lib/articles";
import Pagination from "@/app/_components/Pagination";
import SearchBar from "@/app/_components/SearchBar";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Articles | SAWS",
  description:
    "Articles on heart health, food, and wellness in the South Asian community from the Spice and Wellness Society.",
};

const PER_PAGE = 10;
const list = "flex flex-col";

export default async function Page() {
  const articles = await getArticles();

  const cards = articles.map((article) => {
    const date = new Date(article.date).toLocaleDateString("en-US", {
      dateStyle: "medium",
      timeZone: "UTC",
    });
    return (
      <li key={article.slug}>
        {/* the whole row is the link so the date and rail hover states click through too */}
        <Link href={`/articles/${article.slug}`} className="group flex outline-none">
          <time
            dateTime={article.date}
            className="hidden md:block w-32 shrink-0 pt-7 pr-6 text-right text-sm text-ccgarlic-light group-hover:text-ccdark-tone group-focus-visible:text-ccdark-tone transition-colors"
          >
            {date}
          </time>
          {/* timeline rail with a dot per article */}
          <div className="hidden sm:block relative w-px shrink-0 bg-ccgarlic-dark">
            <span className="absolute top-8 -left-1.5 size-3 rounded-full bg-ccivory ring-2 ring-ccgarlic-dark group-hover:bg-ccspice group-hover:ring-ccspice group-focus-visible:bg-ccspice group-focus-visible:ring-ccspice transition-colors" />
          </div>
          <div className="flex-1 my-2 sm:ml-6 p-5 rounded-md ring-1 ring-transparent group-hover:bg-white/60 group-hover:ring-ccgarlic-dark group-focus-visible:bg-white/60 group-focus-visible:ring-2 group-focus-visible:ring-ccspice transition">
            <time
              dateTime={article.date}
              className="md:hidden block mb-1 text-sm text-ccgarlic-light"
            >
              {date}
            </time>
            <h2 className="text-xl md:text-2xl font-bold group-hover:text-ccspice group-focus-visible:text-ccspice transition-colors">
              {article.title}
            </h2>
            <p className="mt-2 text-ccgarlic-light">{article.blurb}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm">
              <span>{article.author}</span>
              <span aria-hidden="true">•</span>
              <span>{article.readTime} min read</span>
            </p>
            <span className="mt-4 flex items-center gap-1 text-sm font-bold text-ccspice">
              Read more
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-5 pt-32 pb-16">
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Articles</h1>
          <p className="mt-3 text-lg text-ccgarlic-light">
            Reads on heart health, food, and culture.
          </p>
        </div>
        <div className="md:w-80">
          <SearchBar placeholder="Search articles..." />
        </div>
      </header>
      {/* search params only exist in the browser, so the static HTML shows page one */}
      <Suspense fallback={<ol className={list}>{cards.slice(0, PER_PAGE)}</ol>}>
        <Pagination perPage={PER_PAGE} className={list}>
          {cards}
        </Pagination>
      </Suspense>
    </main>
  );
}
