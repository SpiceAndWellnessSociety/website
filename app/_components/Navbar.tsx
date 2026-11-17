import Image from "next/image";
import Link from "next/link";
import { AtSymbolIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import logo from "@/public/logo.png";
import MobileMenu from "./MobileMenu";

export const NavLinks = [
  { label: "Recipes", href: "/cookbook" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    target: "_blank",
    Icon: AtSymbolIcon,
  },
  { label: "Email", href: "/contact", Icon: EnvelopeIcon },
];

const instagram = Socials[0];

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
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex flex-row gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity px-1.5 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={instagram.href}
            target={instagram.target}
            aria-label={instagram.label}
            className="w-10 h-10 flex items-center justify-center rounded-md opacity-70 hover:opacity-100 transition-opacity"
          >
            <instagram.Icon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <MobileMenu links={NavLinks} />
      </div>
    </nav>
  );
}
