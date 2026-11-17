import type { MDXComponents } from "mdx/types";
import Figure from "@/app/_components/Figure";
import { slugify } from "@/app/_lib/util";

// keep generated ids (e.g. the footnotes heading); slug the rest to match getHeadings
const components = {
  Figure,
  h2: (props) => (
    <h2 id={typeof props.children === "string" ? slugify(props.children) : undefined} {...props} />
  ),
  h3: (props) => (
    <h3 id={typeof props.children === "string" ? slugify(props.children) : undefined} {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
