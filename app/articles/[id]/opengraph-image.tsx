import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getArticle, slugs } from "@/app/_lib/articles";

export const alt = "SAWS article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/logo.png"))).toString("base64")}`;

export function generateStaticParams() {
  return slugs.map((id) => ({ id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { metadata } = await getArticle(id);

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-between bg-[#f3f0e7] text-[#3a3227] p-20 border-b-[16px] border-[#ba603e]">
        <div tw="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={88} height={88} tw="rounded-full" />
          <div tw="flex flex-col ml-5">
            <span tw="text-4xl">SAWS</span>
            <span tw="text-2xl text-[#6e6458]">Spice and Wellness Society</span>
          </div>
        </div>
        <div tw="flex flex-col">
          <span tw="text-7xl leading-tight">{metadata.title}</span>
          <span tw="mt-6 text-3xl text-[#ba603e]">{metadata.author}</span>
        </div>
      </div>
    ),
    size,
  );
}
