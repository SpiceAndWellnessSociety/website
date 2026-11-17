"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";

type NavLink = { label: string; href: string };

// Renders as a fragment so the button and panel become flex items of the
// parent nav row (which uses flex-wrap). The panel takes basis-full, so it
// wraps onto its own line below the logo/button, inside the nav.
export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden rounded-md w-10 h-10 flex items-center justify-center p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current"
      >
        {open ? (
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Bars2Icon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {open && (
        // Absolute to the fixed nav, so it starts below the nav and dims only the page
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="md:hidden absolute inset-x-0 top-full h-dvh bg-black/40"
        />
      )}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden basis-full flex flex-col items-start gap-2 pt-3"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-end block w-full underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity px-1.5"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
