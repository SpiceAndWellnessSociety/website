import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spice and Wellness Society",
  description:
    "UNC student org focused on heart health in the South Asian community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-[overlay]`}
    >
      <body className="min-h-full flex flex-col bg-ccivory text-ccdark-tone font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
