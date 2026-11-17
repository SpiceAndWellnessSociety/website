"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { cn } from "@/app/_lib/util";

const btn =
  "size-9 sm:size-10 flex items-center justify-center rounded-lg transition-colors";

export default function Pagination({
  children,
  perPage,
  className,
}: {
  children: React.ReactNode[];
  perPage: number;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const total = children.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const page = Math.min(Math.max(Math.floor(Number(searchParams.get("p"))) || 1, 1), pages);
  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, total);

  const href = (p: number) => {
    const params = new URLSearchParams(searchParams);
    if (p === 1) params.delete("p");
    else params.set("p", String(p));
    return params.size ? `${pathname}?${params}` : pathname;
  };

  // first, last, and the current page's neighbors; gaps become an ellipsis
  const shown = Array.from({ length: pages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === pages || Math.abs(n - page) <= 1,
  );

  const arrow = (to: number, label: string, Icon: typeof ChevronLeftIcon) =>
    to < 1 || to > pages ? (
      <span aria-label={label} aria-disabled="true" className={cn(btn, "opacity-30")}>
        <Icon className="size-5" />
      </span>
    ) : (
      <Link href={href(to)} aria-label={label} className={cn(btn, "hover:bg-white/60")}>
        <Icon className="size-5" />
      </Link>
    );

  return (
    <>
      <ol className={className}>{children.slice(start, end)}</ol>
      {pages > 1 && (
        <nav aria-label="Pagination" className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-ccgarlic-light">
            Showing <span className="font-bold">{start + 1}–{end}</span> of{" "}
            <span className="font-bold">{total}</span>
          </p>
          <div className="flex items-center sm:gap-1">
            {arrow(page - 1, "Previous page", ChevronLeftIcon)}
            {shown.map((n, i) => (
              <span key={n} className="flex items-center sm:gap-1">
                {n - (shown[i - 1] ?? n) > 1 && (
                  <span className={cn(btn, "text-ccgarlic-light")}>…</span>
                )}
                <Link
                  href={href(n)}
                  aria-label={`Page ${n}`}
                  aria-current={n === page ? "page" : undefined}
                  className={cn(
                    btn,
                    n === page
                      ? "bg-ccspice text-ccivory font-bold"
                      : "hover:bg-white/60",
                  )}
                >
                  {n}
                </Link>
              </span>
            ))}
            {arrow(page + 1, "Next page", ChevronRightIcon)}
          </div>
        </nav>
      )}
    </>
  );
}
