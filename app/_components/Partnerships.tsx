import Image from "next/image";
import sahc from "@/public/partners/south-asian-heart-center.png";
import uncSom from "@/public/partners/unc-school-of-medicine.png";
import ccps from "@/public/partners/carolina-center-for-public-service.png";

const Partners = [
  { src: sahc, alt: "South Asian Heart Center at El Camino Hospital logo" },
  {
    src: uncSom,
    alt: "UNC Chapel Hill School of Medicine logo with interlocking NC",
  },
  {
    src: ccps,
    alt: "Carolina Center for Public Service logo: Connecting Carolina and Communities",
  },
];

function Logos({ hidden }: { hidden?: boolean }) {
  return Partners.map((p) => (
    <Image
      key={p.alt}
      src={p.src}
      alt={p.alt}
      aria-hidden={hidden}
      className="h-10 md:h-12 w-auto shrink-0 mx-6 md:mx-8 grayscale hover:grayscale-0 transition-[filter]"
    />
  ));
}

export default function Partnerships() {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-12 flex flex-col items-center gap-8">
      <h2 className="font-bold text-2xl md:text-3xl">Partnerships</h2>
      <div className="hidden md:flex motion-reduce:flex flex-wrap justify-center items-center gap-y-6">
        <Logos />
      </div>
      {/* Two sets per half so a half always spans the viewport below md; -50% loops seamlessly */}
      <div className="md:hidden motion-reduce:hidden w-full overflow-hidden">
        <div className="flex w-max items-center animate-marquee">
          <Logos />
          {[1, 2, 3].map((i) => (
            <Logos key={i} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
