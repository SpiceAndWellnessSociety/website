import Image, { type ImageProps } from "next/image";

export default function Figure({
  caption,
  alt,
  ...props
}: ImageProps & { caption: React.ReactNode }) {
  return (
    <figure className="my-8">
      <Image
        alt={alt}
        sizes="(min-width: 768px) 65ch, 100vw"
        className="w-full h-auto rounded-lg"
        {...props}
      />
      <figcaption className="mt-2 text-sm text-center text-ccgarlic-light">
        {caption}
      </figcaption>
    </figure>
  );
}
