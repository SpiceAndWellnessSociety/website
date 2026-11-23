import Image, { type StaticImageData } from "next/image";
import groupPhoto from "@/public/team/group.webp";

type Member = { name: string; role: string; photo?: StaticImageData };

const team: { committee: string; members: Member[] }[] = [
  {
    committee: "Executive",
    members: [
      { name: "Krish Patel", role: "President" },
      { name: "Vivek Gottumukkala", role: "President" },
    ],
  },
  {
    committee: "Community Engagement",
    members: [
      { name: "Shruti Bommareddy", role: "Director" },
      { name: "Sia Mehta", role: "Officer" },
      { name: "Yug Shah", role: "Officer" },
      { name: "Saadhvi Prakash", role: "Officer" },
    ],
  },
  {
    committee: "Software",
    members: [
      { name: "Aryan Gera", role: "Director" },
      { name: "Poorvi Chekuru", role: "Officer" },
    ],
  },
  {
    committee: "Education",
    members: [
      { name: "Saibah Istila", role: "Director" },
      { name: "Deepti Niranjan", role: "Director" },
      { name: "Vidur Jain", role: "Officer" },
      { name: "Kirannoor Kaur", role: "Officer" },
      { name: "Athishaya Srinivasan", role: "Officer" },
    ],
  },
  {
    committee: "Fundraising",
    members: [
      { name: "Jani Ganesh", role: "Director" },
      { name: "Drithi Gowda", role: "Director" },
      { name: "Geethika Thanneeru", role: "Officer" },
      { name: "Neal Wasudev", role: "Officer" },
    ],
  },
  {
    committee: "Finance",
    members: [{ name: "Savith Tata", role: "Director" }],
  },
  {
    committee: "Outreach",
    members: [
      { name: "Tanvi Peddireddi", role: "Director" },
      { name: "Roshini Selvakumar", role: "Officer" },
      { name: "Tarini Nallavolu", role: "Officer" },
    ],
  },
  {
    committee: "Marketing",
    members: [
      { name: "Ariana Patel", role: "Director" },
      { name: "Riya Rajesh", role: "Officer" },
      { name: "Shravya Gokaraju", role: "Officer" },
    ],
  },
];

// Headshots show only once every member has one; until then the group photo stands in
const headshots = team.every((c) => c.members.every((m) => m.photo));

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="scroll-mt-24 max-w-screen-xl mx-auto px-5 xl:px-10 pt-20 md:pt-28 pb-12 flex flex-col gap-10"
    >
      <h2 id="team-title" className="text-3xl md:text-4xl font-bold">
        Meet the team
      </h2>
      {!headshots && (
        <Image
          src={groupPhoto}
          alt="The SAWS team, about two dozen students in red, white, and denim, standing on the wide stone steps of a columned campus library; two of them high-five in the middle."
          sizes="(min-width: 1280px) 1200px, 100vw"
          placeholder="blur"
          className="w-full aspect-[4/3] md:aspect-[2/1] object-cover object-[50%_75%] rounded-md"
        />
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        {team.map(({ committee, members }) => (
          <div key={committee} className="flex flex-col gap-3 border-t border-ccgarlic-dark pt-4">
            <h3 className="text-xl md:text-2xl font-bold">{committee}</h3>
            <ul className="flex flex-col gap-2">
              {members.map(({ name, role, photo }) => (
                <li key={name} className="flex items-center gap-3">
                  {headshots && photo && (
                    <Image src={photo} alt="" className="size-12 rounded-md object-cover" />
                  )}
                  <span className="flex flex-col">
                    <span>{name}</span>
                    <span className="text-sm text-ccgarlic-light">{role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
