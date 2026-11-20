import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  FireIcon,
  HeartIcon,
  LightBulbIcon,
  MegaphoneIcon,
  NewspaperIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Partnerships from "./_components/Partnerships";
import Team from "./_components/Team";
import { Socials } from "./_components/Navbar";
import { Mandala } from "./_components/Ornaments";

const instagram = Socials[0];

const focus =
  "outline-none focus-visible:ring-2 focus-visible:ring-cccarrot focus-visible:ring-offset-4 focus-visible:ring-offset-ccivory";
const button = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${focus}`;
const link = `inline-flex items-center gap-1 font-semibold text-cccarrot underline underline-offset-4 hover:no-underline rounded-sm ${focus}`;
const source =
  "underline underline-offset-2 text-ccivory hover:no-underline rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ccivory";
const h2 = "text-3xl md:text-4xl font-bold text-balance";

const steps = [
  {
    title: "Education & awareness",
    body: "Campaigns that explain why heart disease hits South Asian families harder, and what helps.",
    Icon: MegaphoneIcon,
  },
  {
    title: "Free heart screenings",
    body: "Free screenings so students and community members can know their numbers early.",
    Icon: HeartIcon,
  },
  {
    title: "Cooking demonstrations",
    body: "Live demos showing how everyday spices and staples make heart-healthy meals.",
    Icon: FireIcon,
  },
  {
    title: "Recipe creation",
    body: "Lighter takes on the dishes we grew up with, written up for our cookbook.",
    Icon: BookOpenIcon,
  },
  {
    title: "Wellness & mental well-being",
    body: "Activities that care for the mind as well as the heart, drawing on yoga and meditation.",
    Icon: SparklesIcon,
  },
  {
    title: "Myths & traditions",
    body: "Dispelling common food and health myths while preserving the cultural traditions behind them.",
    Icon: LightBulbIcon,
  },
];

const paths = [
  {
    title: "Cook with us",
    body: "Heart-healthy South Asian recipes from our cooking demos.",
    cta: "Browse recipes",
    href: "/cookbook",
    Icon: FireIcon,
  },
  {
    title: "Read & learn",
    body: "Research-backed pieces on diet, culture, and heart health.",
    cta: "Read articles",
    href: "/articles",
    Icon: NewspaperIcon,
  },
  {
    title: "Stay in the loop",
    body: "Event announcements, screening dates, and behind-the-scenes cooking.",
    cta: "Check out our Instagram",
    href: instagram.href,
    Icon: instagram.Icon,
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
        className="max-w-screen-xl mx-auto px-5 xl:px-10 pt-32 md:pt-40 pb-20 md:pb-28 grid md:grid-cols-[1.3fr_1fr] items-center gap-10"
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
        <Mandala className="turn-on-scroll -order-1 md:order-none w-40 md:w-full max-w-md mx-auto text-ccspice" />
      </section>

      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-24 max-w-screen-xl mx-auto px-5 xl:px-10 pb-20 md:pb-28 grid lg:grid-cols-2 gap-6 lg:gap-16"
      >
        <h2 id="about-title" className={h2}>
          A student-led home for South Asian wellness at UNC
        </h2>
        <div className="flex flex-col items-start gap-4 text-lg leading-relaxed text-ccgarlic-light">
          <p>
            We dive into health issues common in the South Asian community,
            like heart health and diabetes, and help combat them through
            cultural practices and daily habits.
          </p>
          <p>
            Spices like turmeric, cumin, and ginger have been used for
            centuries for their medicinal properties. We teach members to cook
            healthy dishes with them, debunk common food myths, explore
            practices like Ayurveda, yoga, and meditation, and promote mental
            health along the way.
          </p>
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
        {/* pinned visual; each step's view timeline brings its icon forward */}
        <div className="sticky top-24 md:top-0 md:self-start z-10 md:h-screen flex items-center justify-center py-4 bg-ccivory md:bg-transparent">
          <div className="relative size-32 md:size-96 grid place-items-center">
            <Mandala className="absolute inset-0 size-full text-ccspice/50" />
            <span className="relative grid place-items-center size-14 md:size-32 rounded-full bg-ccivory text-cccarrot">
              <HeartIcon className="step-fallback size-7 md:size-14" aria-hidden="true" />
              {steps.map(({ title, Icon }, i) => (
                <Icon
                  key={title}
                  aria-hidden="true"
                  style={{ animationTimeline: `--step-${i}` }}
                  className="step-layer absolute size-7 md:size-14"
                />
              ))}
            </span>
          </div>
        </div>
        <ol className="flex flex-col md:py-[25vh]">
          {steps.map(({ title, body }, i) => (
            <li
              key={title}
              style={{ viewTimelineName: `--step-${i}` }}
              className="step-text min-h-[40vh] md:min-h-[60vh] flex flex-col justify-center gap-3"
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
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-henna opacity-25" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-4 bg-vine" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-4 bg-vine" />
        <div className="reveal max-w-screen-xl mx-auto px-5 xl:px-10 flex flex-col gap-12">
          <h2 id="explore-title" className={`${h2} text-center`}>
            Find your way in
          </h2>
          <ul className="grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-ccginger/50">
            {paths.map(({ title, body, cta, href, Icon, external }) => (
              <li
                key={title}
                className="grid grid-cols-[4rem_1fr] gap-x-5 gap-y-2 justify-items-start md:flex md:flex-col md:items-center md:text-center md:gap-3 md:px-10"
              >
                <span className="row-span-3 relative grid place-items-center size-16 md:size-20 text-cccarrot">
                  <Mandala className="absolute inset-0 size-full text-ccspice/60" />
                  <Icon className="relative size-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <p className="text-ccgarlic-light leading-relaxed max-w-xs">{body}</p>
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
