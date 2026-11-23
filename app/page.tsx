import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Partnerships from "./_components/Partnerships";
import Team from "./_components/Team";
import { Socials } from "./_components/Navbar";
import { Mandala } from "./_components/Ornaments";
// Photos from Unsplash (free under the Unsplash License), resized and recompressed:
// banana-leaf-meal: unsplash.com/photos/yCIcDyKm440, Saktheeswaran Govindarajan
// spices: unsplash.com/photos/uaHShoIDGeo, Marion Botella
// spice-market: unsplash.com/photos/2TBqJwt6wDY, Jack Sparrow
// vegetables: unsplash.com/photos/i8WCZpehUIs, Urja Bhatt
// stir-fry: unsplash.com/photos/APDMfLHZiRA, Kevin McCutcheon
// dosa: unsplash.com/photos/5oF7d_hPJG4, Paul
// chai: unsplash.com/photos/gXYwwTQ_tZw, Ajoy Das
// thali: unsplash.com/photos/4pT9e68P_mU, Zoshua Colah
// steel-thali: unsplash.com/photos/dncjnYtmWHo, Zoshua Colah
// curry-bowls: unsplash.com/photos/aq8v45EwCa0, Chetanya Sharma
// curries: unsplash.com/photos/ZN-TT10kf4o, Andy Hay
import bananaLeafMeal from "@/public/landing/banana-leaf-meal.jpg";
import spices from "@/public/landing/spices.jpg";
import spiceMarket from "@/public/landing/spice-market.jpg";
import vegetables from "@/public/landing/vegetables.jpg";
import stirFry from "@/public/landing/stir-fry.jpg";
import dosa from "@/public/landing/dosa.jpg";
import chai from "@/public/landing/chai.jpg";
import thali from "@/public/landing/thali.jpg";
import steelThali from "@/public/landing/steel-thali.jpg";
import curryBowls from "@/public/landing/curry-bowls.jpg";
import curries from "@/public/landing/curries.jpg";

const instagram = Socials[0];

const focus =
  "outline-none focus-visible:ring-2 focus-visible:ring-cccarrot focus-visible:ring-offset-4 focus-visible:ring-offset-ccivory";
const button = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${focus}`;
const link = `inline-flex items-center gap-1 font-semibold text-cccarrot underline underline-offset-4 hover:no-underline rounded-sm ${focus}`;
const source =
  "underline underline-offset-2 text-ccivory hover:no-underline rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ccivory";
const h2 = "text-3xl md:text-4xl font-bold text-balance";
const photo = "rounded-md object-cover";

const steps = [
  {
    title: "Education & awareness",
    body: "Campaigns that explain why heart disease hits South Asian families harder, and what helps.",
    src: spiceMarket,
    alt: "Bowls of ground spices heaped high at a market stall",
  },
  {
    title: "Free heart screenings",
    body: "Free screenings so students and community members can know their numbers early.",
    src: vegetables,
    alt: "Fresh green chilies, ginger, and peppers in bowls at a market",
  },
  {
    title: "Cooking demonstrations",
    body: "Live demos showing how everyday spices and staples make heart-healthy meals.",
    src: stirFry,
    alt: "Hands stirring vegetables in a skillet with a wooden spatula",
  },
  {
    title: "Recipe creation",
    body: "Lighter takes on the dishes we grew up with, written up for our cookbook.",
    src: dosa,
    alt: "A crisp dosa served with sambar and bowls of chutney",
  },
  {
    title: "Wellness & mental well-being",
    body: "Activities that care for the mind as well as the heart, drawing on yoga and meditation.",
    src: chai,
    alt: "Chai being poured into small clay cups",
  },
  {
    title: "Myths & traditions",
    body: "Dispelling common food and health myths while preserving the cultural traditions behind them.",
    src: thali,
    alt: "A vegetarian Tamil thali with rice and small bowls of curries",
  },
];

const paths = [
  {
    title: "Cook with us",
    body: "Heart-healthy South Asian recipes from our cooking demos.",
    cta: "Browse recipes",
    href: "/cookbook",
    src: steelThali,
    alt: "A steel thali with rice, dal, papad, and vegetable curries",
  },
  {
    title: "Read & learn",
    body: "Research-backed pieces on diet, culture, and heart health.",
    cta: "Read articles",
    href: "/articles",
    src: curryBowls,
    alt: "Bowls of curry and rice surrounded by whole spices",
  },
  {
    title: "Stay in the loop",
    body: "Event announcements, screening dates, and behind-the-scenes cooking.",
    cta: "Check out our Instagram",
    href: instagram.href,
    src: curries,
    alt: "Two pans of vegetable curry beside a bowl of rice",
    external: true,
  },
];

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 w-full overflow-x-clip outline-none">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-ccdark-tone focus:px-5 focus:py-2 focus:font-semibold focus:text-ccivory"
      >
        Skip to content
      </a>

      <section
        aria-labelledby="hero-title"
        className="max-w-screen-xl mx-auto px-5 xl:px-10 pt-28 md:pt-40 pb-20 md:pb-28 grid md:grid-cols-[1fr_1fr] items-center gap-10 md:gap-16"
      >
        <div className="flex flex-col items-start gap-6">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block">Heart health,</span> rooted in tradition.
          </h1>
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-ccgarlic-light">
            The Spice and Wellness Society is a UNC Chapel Hill student
            organization committed to cardiovascular health in the South Asian
            community, through education, free heart screenings, and the spices
            and recipes we grew up with.
          </p>
          <div className="grid w-full lg:flex lg:w-auto gap-3">
            <Link href="/cookbook" className={`${button} bg-cccarrot text-ccivory hover:bg-ccdark-tone`}>
              Explore recipes
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={instagram.href}
              target={instagram.target}
              rel="noopener noreferrer"
              className={`${button} border border-ccdark-tone/40 hover:border-ccdark-tone hover:bg-ccdark-tone hover:text-ccivory`}
            >
              <instagram.Icon className="size-5" aria-hidden="true" />
              Check out our Instagram
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </div>
        </div>
        <div className="relative isolate -order-1 md:order-none">
          <Mandala className="turn-on-scroll absolute -z-10 -bottom-10 -left-10 w-32 md:w-44 text-ccspice/40" />
          <Image
            src={bananaLeafMeal}
            alt="A South Indian meal served on a banana leaf: rice, papad, sambar, and vegetable sides"
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`${photo} w-full aspect-[3/2] md:aspect-square`}
          />
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-24 max-w-screen-xl mx-auto px-5 xl:px-10 pb-20 md:pb-28 grid md:grid-cols-[2fr_3fr] items-center gap-10 md:gap-16"
      >
        <Image
          src={spices}
          alt="Cinnamon sticks, star anise, turmeric, and chili powder spread on a wooden board"
          placeholder="blur"
          sizes="(min-width: 768px) 40vw, 100vw"
          className={`reveal ${photo} w-full aspect-[3/2] md:aspect-[4/5]`}
        />
        <div className="flex flex-col items-start gap-5">
          <h2 id="about-title" className={h2}>
            A student-led home for South Asian wellness at UNC
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-ccgarlic-light max-w-prose">
            <p>
              We dive into health issues common in the South Asian community,
              like heart health and diabetes, and help combat them through
              cultural practices and daily habits.
            </p>
            <p>
              Spices like turmeric, cumin, and ginger have been used for
              centuries for their medicinal properties. We teach members to
              cook healthy dishes with them, debunk common food myths, explore
              practices like Ayurveda, yoga, and meditation, and promote mental
              health along the way.
            </p>
          </div>
          <Link href="/articles/about-us" className={link}>
            Read more about the club
            <ArrowRightIcon className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="why-title" className="relative bg-ccdark-tone text-ccivory py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-full h-[22px] bg-toran -scale-y-100" />
        <div aria-hidden="true" className="absolute inset-x-0 top-full h-[22px] bg-toran" />
        <div className="reveal max-w-screen-lg mx-auto px-5 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="relative shrink-0 size-48 md:size-60 grid place-items-center">
            <Mandala className="absolute inset-0 size-full text-ccginger" />
            <p className="relative grid place-items-center size-24 rounded-full bg-ccdark-tone text-5xl font-bold tabular-nums [text-box:trim-both_cap_alphabetic]">
              4&times;
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 id="why-title" className={h2}>
              South Asians have four times the risk of heart disease of the
              general population.
            </h2>
            <p className="text-sm text-ccgarlic-dark">
              Source:{" "}
              <a
                href="https://stanfordhealthcare.org/medical-clinics/stanford-south-asian-translational-heart-initiative/conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                className={source}
              >
                Stanford Health Care, South Asian Translational Heart Initiative
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <p className="text-lg leading-relaxed text-ccgarlic-dark max-w-2xl">
              Genetic, historical, and environmental factors all play a part.
              We meet that risk where it lives: in our kitchens, our families,
              and the traditions we share.
            </p>
            <p className="text-sm leading-relaxed text-ccgarlic-dark max-w-2xl border-t border-ccginger/40 pt-4">
              One in four heart attacks among South Asians happens before age
              40 (
              <a
                href="https://www.southasianheartcenter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={source}
              >
                South Asian Heart Center
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              ).{" "}
              <Link
                href="/articles/curry-carbs-and-cholesterol-rethinking-tradition-in-todays-society"
                className={source}
              >
                Read why the risk is higher
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        style={{ timelineScope: steps.map((_, i) => `--step-${i}`).join(",") }}
        className="max-w-screen-xl mx-auto px-5 xl:px-10 pt-28 md:pt-36 pb-12 flex flex-col md:grid md:grid-cols-2 gap-x-16"
      >
        <h2 id="work-title" className={`${h2} md:col-span-2`}>
          What we do
        </h2>
        {/* pinned photo; each step's view timeline fades its photo in over the one before */}
        <div className="sticky top-24 md:top-28 md:self-start z-10 md:h-[calc(100vh-7rem)] flex items-center py-4 bg-ccivory md:bg-transparent">
          <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[min(75vh,40rem)] overflow-hidden rounded-md">
            {steps.map(({ title, src, alt }, i) => (
              <Image
                key={title}
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                style={i ? { animationTimeline: `--step-${i}` } : undefined}
                className={`object-cover ${i ? "step-layer" : ""}`}
              />
            ))}
          </div>
        </div>
        <ol className="flex flex-col md:py-[25vh]">
          {steps.map(({ title, body }, i) => (
            <li
              key={title}
              style={{ viewTimelineName: `--step-${i}` }}
              className="step-text min-h-[35vh] md:min-h-[60vh] flex flex-col justify-center gap-3"
            >
              <span className="text-sm font-semibold tabular-nums text-ccspice">
                {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
              <p className="text-lg leading-relaxed text-ccgarlic-light max-w-md">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="explore-title" className="relative py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-henna opacity-20" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-4 bg-vine" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-4 bg-vine" />
        <div className="reveal max-w-screen-xl mx-auto px-5 xl:px-10 flex flex-col gap-12">
          <h2 id="explore-title" className={h2}>
            Find your way in
          </h2>
          <ul className="grid md:grid-cols-3 gap-8">
            {paths.map(({ title, body, cta, href, src, alt, external }) => (
              <li
                key={title}
                className="grid grid-cols-[6rem_1fr] md:grid-cols-1 gap-x-5 gap-y-2 items-start justify-items-start"
              >
                <Image
                  src={src}
                  alt={alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 6rem"
                  className={`${photo} row-span-3 w-full aspect-square md:aspect-[4/3] md:mb-3`}
                />
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <p className="text-ccgarlic-light leading-relaxed">{body}</p>
                <Link
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={link}
                >
                  {cta}
                  {external ? (
                    <>
                      <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  ) : (
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Team />
      <Partnerships />
    </main>
  );
}
