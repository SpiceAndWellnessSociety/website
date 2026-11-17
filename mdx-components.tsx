import type { MDXComponents } from "mdx/types";
import Figure from "@/app/_components/Figure";

const components = { Figure } satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
