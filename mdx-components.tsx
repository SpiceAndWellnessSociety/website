import type { MDXComponents } from "mdx/types";
import Figure from "@/app/_components/Figure";

const components = {
  h2: (props) => <h2 className="mt-10 mb-3 text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-2 text-xl font-semibold" {...props} />,
  p: (props) => <p className="my-4 leading-7" {...props} />,
  // scroll-mt keeps footnote jump targets clear of the fixed navbar
  a: (props) => (
    <a
      className="text-ccspice underline underline-offset-2 scroll-mt-32"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-4 pl-6 list-disc space-y-1" {...props} />,
  ol: (props) => <ol className="my-4 pl-6 list-decimal space-y-1" {...props} />,
  li: (props) => <li className="scroll-mt-32" {...props} />,
  section: (props) => (
    <section
      className="mt-12 border-t border-ccgarlic-dark text-sm"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 pl-4 border-l-4 border-ccginger italic"
      {...props}
    />
  ),
  Figure,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
