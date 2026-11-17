import Image, { type ImageProps } from "next/image";

export default function Figure({
  caption,
  alt,
  ...props
}: ImageProps & { caption: React.ReactNode }) {
  return (
    // breaks out of the text column, up to 56rem wide but never past the page padding
    <figure className="my-8 mx-[calc(50%-min(28rem,50vw-1.25rem))]">
      <Image
        alt={alt}
        sizes="(min-width: 936px) 896px, 100vw"
        className="w-full h-auto rounded-lg"
        {...props}
      />
      <figcaption className="mt-2 text-sm text-center text-ccgarlic-light">
        {caption}
      </figcaption>
    </figure>
  );
}
