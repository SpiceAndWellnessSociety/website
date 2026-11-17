import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import MobileMenu from "./MobileMenu";

export const NavLinks = [
  { label: "Recipes", href: "/cookbook" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 mx-auto px-2.5 py-1 z-50 pt-7 bg-ccivory">
      <div className="xl:px-10 w-full flex flex-wrap gap-1 justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            className="w-10 md:w-11 aspect-square rounded-full"
          />
          <div className="flex flex-col gap-0">
            <p className="font-bold md:text-lg leading-5">SAWS</p>
            <span className="text-sm md:text-base leading-4">
              Spice and Wellness Society
            </span>
          </div>
        </Link>
        <div className="hidden md:flex flex-row gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity px-1.5"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <MobileMenu links={NavLinks} />
      </div>
    </nav>
  );
}
