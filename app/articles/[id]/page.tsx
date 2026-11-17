import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  };
}

export default async function Page({ params }: PageProps<"/articles/[id]">) {
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
        <h1 className="text-4xl md:text-5xl font-bold">{metadata.title}</h1>
        <p className="mt-3 text-lg text-ccgarlic-light">{metadata.blurb}</p>
        <p className="mt-4 text-sm">
          {metadata.author} · <time dateTime={metadata.date}>{date}</time> ·{" "}
          {readTime(id)} min read
        </p>
      </header>
      <Post />
    </article>
  );
}
