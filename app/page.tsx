import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  FireIcon,
  HeartIcon,
  LightBulbIcon,
  MegaphoneIcon,
  NewspaperIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Partnerships from "./_components/Partnerships";
import { Socials } from "./_components/Navbar";
import {
  Divider,
  HennaPattern,
  Mandala,
  FloralSpray,
  Paisley,
  Toran,
} from "./_components/Ornaments";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const instagram = Socials[0];

const focus =
  "outline-none focus-visible:ring-2 focus-visible:ring-cccarrot focus-visible:ring-offset-4 focus-visible:ring-offset-ccivory";
const button = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${focus}`;

const work = [
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
    label: "Recipes",
    title: "Cook with us",
    body: "Heart-healthy South Asian recipes from our cooking demos.",
    href: "/cookbook",
    Icon: FireIcon,
  },
  {
    label: "Articles",
    title: "Read & learn",
    body: "Research-backed pieces on diet, culture, and heart health.",
    href: "/articles",
    Icon: NewspaperIcon,
  },
  {
    label: "About",
    title: "Meet the club",
    body: "Who we are, where these traditions come from, and how to join.",
    href: "/articles/about-us",
    Icon: UserGroupIcon,
  },
  {
    label: "Instagram",
    title: "Follow along",
    body: "Event announcements, screening dates, and behind-the-scenes cooking.",
    href: instagram.href,
    Icon: instagram.Icon,
    external: true,
  },
];

function Heading({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cccarrot">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display font-bold text-4xl md:text-5xl leading-tight text-balance"
      >
        {children}
      </h2>
      <Divider className="w-56 md:w-64 text-ccspice" />
    </div>
  );
}

export default function Home() {
  return (
    <main className={`${display.variable} flex-1 w-full overflow-x-clip`}>
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32"
      >
        <HennaPattern
          id="henna-hero"
          className="absolute inset-0 -z-10 size-full text-ccginger opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_45%,var(--ccivory)_40%,transparent_80%)]" />
        <div className="max-w-screen-xl mx-auto px-5 xl:px-10 grid md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.15fr_1fr] items-center gap-12 md:gap-8 lg:gap-12">
          <div className="relative flex flex-col items-start gap-6">
            <p className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-cccarrot">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              UNC Chapel Hill student organization
            </p>
            <h1
              id="hero-title"
              className="font-display font-bold text-5xl sm:text-6xl md:text-[3.5rem] lg:text-7xl leading-[1.05] text-balance"
            >
              Heart health, rooted in{" "}
              <span className="text-cccarrot italic">tradition</span>.
            </h1>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-ccgarlic-light">
              The Spice and Wellness Society is committed to cardiovascular
              health in the South Asian community, through education, free
              heart screenings, and the spices and recipes we grew up with.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/cookbook"
                className={`${button} bg-cccarrot text-ccivory hover:bg-ccdark-tone`}
              >
                Explore recipes
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/articles"
                className={`${button} border border-ccdark-tone/40 hover:border-ccdark-tone hover:bg-ccdark-tone hover:text-ccivory`}
              >
                Read articles
              </Link>
              <Link
                href={instagram.href}
                target={instagram.target}
                rel="noopener noreferrer"
                className={`${button} px-4 text-cccarrot hover:text-ccdark-tone underline-offset-4 hover:underline`}
              >
                <instagram.Icon className="size-5" aria-hidden="true" />
                Follow on Instagram
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-72 sm:max-w-sm md:max-w-lg mx-auto md:mr-0 aspect-square">
            <Mandala className="size-full text-ccspice motion-safe:animate-[spin_240s_linear_infinite]" />
            <FloralSpray className="absolute -left-[16%] -bottom-[10%] w-[58%] text-ccginger" />
            <FloralSpray className="absolute -right-[10%] -top-[8%] w-[42%] rotate-180 text-ccginger" />
            <Paisley className="absolute right-0 bottom-0 w-[14%] rotate-12 text-cccarrot/70" />
          </div>
        </div>
        <Toran
          id="toran-hero"
          className="absolute bottom-0 inset-x-0 h-8 w-full text-ccspice scale-y-[-1]"
        />
      </section>

      <section
        aria-labelledby="why-title"
        className="relative isolate overflow-hidden bg-ccdark-tone text-ccivory py-16 md:py-20"
      >
        <HennaPattern
          id="henna-why"
          className="absolute inset-0 -z-10 size-full text-ccginger opacity-20"
        />
        <div className="max-w-screen-lg mx-auto px-5 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="relative shrink-0 size-44 sm:size-52 md:size-60 grid place-items-center">
            <Mandala className="absolute inset-0 size-full text-ccginger" />
            <p className="relative grid place-items-center size-24 md:size-28 rounded-full bg-ccdark-tone font-display font-bold text-5xl md:text-6xl">
              4&times;
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2
              id="why-title"
              className="font-display font-bold text-3xl md:text-4xl leading-tight text-balance"
            >
              South Asians are four times more likely to experience heart
              issues.
            </h2>
            <p className="text-lg leading-relaxed text-ccgarlic-dark max-w-2xl">
              Genetic, historical, and environmental factors all play a part.
              We meet that risk where it lives: in our kitchens, our families,
              and the traditions we share.
            </p>
            <p className="text-sm leading-relaxed text-ccgarlic-dark max-w-2xl border-t border-ccginger/40 pt-4">
              Among young South Asians, one in four heart attacks happens
              before age 40 (
              <a
                href="https://stanfordhealthcare.org/medical-clinics/stanford-south-asian-translational-heart-initiative/conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-ccivory hover:no-underline rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ccivory"
              >
                Stanford Health Care
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              ).{" "}
              <Link
                href="/articles/curry-carbs-and-cholesterol-rethinking-tradition-in-todays-society"
                className="underline underline-offset-2 text-ccivory hover:no-underline rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ccivory"
              >
                Read why the risk is higher
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="max-w-screen-xl mx-auto px-5 xl:px-10 py-20 md:py-28 flex flex-col gap-12"
      >
        <Heading id="work-title" eyebrow="What we do">
          Spice, science, and community
        </Heading>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {work.map(({ title, body, Icon }) => (
            <li
              key={title}
              className="relative flex flex-col gap-4 rounded-2xl border border-ccgarlic-dark bg-white/50 p-6 md:p-7"
            >
              <span className="grid place-items-center size-12 rounded-full bg-ccivory text-cccarrot ring-1 ring-ccginger outline-2 outline-dotted outline-offset-4 outline-ccginger/70">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-2xl leading-tight">{title}</h3>
              <p className="text-ccgarlic-light leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="explore-title"
        className="relative isolate overflow-hidden py-20 md:py-28 border-y border-ccgarlic-dark"
      >
        <HennaPattern
          id="henna-explore"
          className="absolute inset-0 -z-10 size-full text-ccginger opacity-25"
        />
        <div className="max-w-screen-xl mx-auto px-5 xl:px-10 flex flex-col gap-12">
          <Heading id="explore-title" eyebrow="Get involved">
            Find your way in
          </Heading>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-xs sm:max-w-none mx-auto w-full">
            {paths.map(({ label, title, body, href, Icon, external }) => (
              <li key={label} className="flex">
                <Link
                  href={href}
                  aria-label={
                    external ? "Open Instagram (opens in a new tab)" : `Go to ${label}`
                  }
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`group flex-1 flex flex-col items-center text-center gap-3 rounded-t-full rounded-b-2xl border border-ccginger bg-ccivory p-2 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ccdark-tone/10 motion-reduce:hover:translate-y-0 ${focus}`}
                >
                  <span className="flex-1 w-full flex flex-col items-center gap-3 rounded-t-full rounded-b-xl border border-dashed border-ccginger/70 px-5 pt-10 pb-6">
                    <span className="relative grid place-items-center size-20">
                      <Mandala className="absolute inset-0 size-full text-ccspice/70 transition-transform duration-700 motion-safe:group-hover:rotate-45" />
                      <Icon className="relative size-7 text-cccarrot" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cccarrot">
                      {label}
                    </span>
                    <span className="font-display font-bold text-3xl">
                      {title}
                    </span>
                    <span className="text-ccgarlic-light leading-relaxed">
                      {body}
                    </span>
                    <span className="mt-auto pt-2 inline-flex items-center gap-1 text-sm font-bold text-cccarrot group-hover:underline underline-offset-4">
                      {external ? "Open Instagram" : `Go to ${label}`}
                      {external ? (
                        <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                      ) : (
                        <ArrowRightIcon className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-12 max-w-screen-xl mx-auto px-5 xl:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-20"
      >
        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-56 sm:max-w-sm aspect-[4/5] sm:aspect-[3/4] rounded-t-full border border-ccginger p-3"
        >
          <div className="relative size-full overflow-hidden rounded-t-full border border-dashed border-ccginger/70 bg-ccdark-tone">
            <HennaPattern
              id="henna-about"
              className="absolute inset-0 size-full text-ccginger opacity-40"
            />
            <Mandala className="absolute left-1/2 top-[38%] w-[85%] -translate-x-1/2 -translate-y-1/2 text-ccivory/80" />
            <Paisley className="absolute bottom-6 left-6 w-14 -rotate-12 text-ccgarlic-dark" />
            <Paisley className="absolute bottom-6 right-6 w-14 rotate-12 -scale-x-100 text-ccgarlic-dark" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cccarrot">
            About us
          </p>
          <h2
            id="about-title"
            className="font-display font-bold text-4xl md:text-5xl leading-tight text-balance"
          >
            A student-led home for South Asian wellness at UNC
          </h2>
          <Divider className="w-56 text-ccspice -ml-2" />
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
              practices like Ayurveda, yoga, and meditation, and promote
              mental health along the way.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/articles/about-us"
              className={`${button} bg-cccarrot text-ccivory hover:bg-ccdark-tone`}
            >
              Learn about the club
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={instagram.href}
              target={instagram.target}
              rel="noopener noreferrer"
              className={`${button} border border-ccdark-tone/40 hover:border-ccdark-tone hover:bg-ccdark-tone hover:text-ccivory`}
            >
              <instagram.Icon className="size-5" aria-hidden="true" />
              Instagram
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="px-5">
        <Divider className="mx-auto w-64 text-ccspice" />
      </div>
      <Partnerships />
    </main>
  );
}
