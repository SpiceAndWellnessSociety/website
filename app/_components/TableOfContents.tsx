"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/_lib/util";

type Heading = { level: number; title: string; id: string };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const onScroll = () => {
      // last heading scrolled past the fixed navbar, or the last one at page bottom
      const bottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 1;
      const passed = headings.filter(
        ({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) < 140,
      );
      setActive((bottom ? headings : passed).at(-1)?.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  return (
    <ul className="border-l border-ccgarlic-dark text-sm">
      {headings.map(({ level, title, id }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={cn(
              "-ml-px block border-l py-1.5 pr-2",
              level === 3 ? "pl-7" : "pl-4",
              id === active
                ? "border-ccspice text-ccspice font-medium"
                : "border-transparent text-ccgarlic-light hover:text-ccdark-tone",
            )}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
