export default function ArticleLayout({ children }: LayoutProps<"/articles/[id]">) {
  return <main id="main" className="flex-1 w-full max-w-prose mx-auto px-5 pt-32 pb-16">{children}</main>;
}
