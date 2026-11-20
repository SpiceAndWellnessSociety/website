import Image from "next/image";
import sahc from "@/public/partners/south-asian-heart-center.png";
import uncSom from "@/public/partners/unc-school-of-medicine.png";
import ccps from "@/public/partners/carolina-center-for-public-service.png";

const Partners = [
  { src: sahc, alt: "South Asian Heart Center at El Camino Hospital logo" },
  { src: uncSom, alt: "UNC School of Medicine logo" },
  {
    src: ccps,
    alt: "Carolina Center for Public Service logo: Connecting Carolina and Communities",
  },
];

// Trailing padding equals the gap so the seam matches logo spacing; min-w-screen avoids an empty tail
const group =
  "flex shrink-0 min-w-screen justify-around items-center gap-12 pr-12";

function Logos() {
  return Partners.map((p) => (
    <Image
      key={p.alt}
      src={p.src}
      alt={p.alt}
      className="h-10 md:h-12 w-auto shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300"
    />
  ));
}

export default function Partnerships() {
  return (
    <section
      aria-labelledby="partners-title"
      className="w-full max-w-screen-xl mx-auto py-12 flex flex-col items-center gap-8"
    >
      <h2 id="partners-title" className="font-display font-bold text-4xl md:text-5xl">
        Partnerships
      </h2>
      <div className="hidden md:flex motion-reduce:flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
        <Logos />
      </div>
      <div className="md:hidden motion-reduce:hidden w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className={group}>
            <Logos />
          </div>
          <div aria-hidden className={group}>
            <Logos />
          </div>
        </div>
      </div>
    </section>
  );
}
