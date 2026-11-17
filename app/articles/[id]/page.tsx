import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getArticle, readTime, slugs } from "@/app/_lib/articles";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return slugs.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[id]">): Promise<Metadata> {
  const { id } = await params;
  if (!slugs.includes(id)) notFound();
  const { metadata } = await getArticle(id);
  return {
    title: `${metadata.title} | SAWS`,
    description: metadata.blurb,
    authors: [{ name: metadata.author }],
    openGraph: {
      type: "article",
      title: metadata.title,
      description: metadata.blurb,
      url: `/articles/${id}`,
      siteName: "Spice and Wellness Society",
      publishedTime: metadata.date,
      authors: [metadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.blurb,
    },
  };
}

// params is read inside Suspense so the shared App Shell stays URL-independent
export default function Page({ params }: PageProps<"/articles/[id]">) {
  return (
    <Suspense>
      <Article params={params} />
    </Suspense>
  );
}

async function Article({
  params,
}: Pick<PageProps<"/articles/[id]">, "params">) {
  const { id } = await params;
  if (!slugs.includes(id)) notFound();
  const { default: Post, metadata } = await getArticle(id);
  const date = new Date(metadata.date).toLocaleDateString("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  });

  return (
    <article>
      <header className="mb-10 pb-6 border-b border-ccgarlic-dark">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm">
          <Link
            href="/articles"
            className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            Articles
          </Link>
          <span aria-hidden="true" className="opacity-50">/</span>
          <Link
            href={`/articles/${id}`}
            aria-current="page"
            className="truncate underline underline-offset-2 hover:text-ccspice transition-colors"
          >
            {metadata.title}
          </Link>
        </nav>
        <time dateTime={metadata.date} className="block mb-1 text-sm text-ccgarlic-light">
          {date}
        </time>
        <h1 className="text-4xl md:text-5xl font-bold">{metadata.title}</h1>
        <p className="mt-3 text-lg text-ccgarlic-light">{metadata.blurb}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-2 text-sm">
          <span>{metadata.author}</span>
          <span aria-hidden="true">•</span>
          <span>{readTime(id)} min read</span>
        </p>
      </header>
      {/* scroll-mt clears the fixed navbar; text emoji lets ↩ take the link color */}
      <div className="prose prose-stone prose-a:text-ccspice [&_[id]]:scroll-mt-32 [&_[data-footnote-ref]]:no-underline [&_[data-footnote-backref]]:no-underline [&_[data-footnote-backref]]:[font-variant-emoji:text] [&_.footnotes]:text-sm">
        <Post />
      </div>
    </article>
  );
}
