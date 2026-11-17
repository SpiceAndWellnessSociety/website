import Link from "next/link";
import { NavLinks, Socials } from "./Navbar";

export default async function Footer() {
  // Cached so the year is computed at prerender instead of blocking it
  "use cache";
  return (
    <footer className="mt-auto w-full max-w-screen-xl mx-auto px-2.5 xl:px-10 py-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-start border-t border-ccgarlic-dark pt-6">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-start">
          <p className="font-bold md:text-lg leading-5">SAWS</p>
          <span className="text-sm md:text-base leading-4">
            Spice and Wellness Society
          </span>
          <span className="text-sm opacity-70 max-w-xs pt-1">
            Heart health in the South Asian community at UNC.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[{ label: "Home", href: "/" }, ...NavLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity px-1.5 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-2 justify-between items-center pt-6 text-sm">
        <span className="opacity-70">
          &copy; {new Date().getFullYear()} Spice and Wellness Society
        </span>
        <div className="flex gap-2">
          {Socials.map(({ label, href, target, Icon }) => (
            <Link
              key={label}
              href={href}
              target={target}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-md opacity-70 hover:opacity-100 transition-opacity"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
