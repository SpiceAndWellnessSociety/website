export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Post } = await import(`@/content/${id}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ id: "welcome" }, { id: "about" }];
}

export const dynamicParams = false;
