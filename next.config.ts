import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    // show the footnotes heading (hidden with sr-only by default)
    remarkRehypeOptions: {
      footnoteLabel: "References",
      footnoteLabelProperties: {},
    },
  },
});
// Merge MDX config with Next.js config
export default withMDX(nextConfig);
