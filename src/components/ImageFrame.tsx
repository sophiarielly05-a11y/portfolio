import Image from "next/image";

type ImageFrameProps = {
  aspect?: string;
  label?: string;
  className?: string;
  src?: string;
  alt?: string;
};

export default function ImageFrame({
  aspect = "4/5",
  label = "Image",
  className = "",
  src,
  alt,
}: ImageFrameProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-background ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || label}
          fill
          className="object-cover object-top"
        />
      ) : (
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-warm-grey">
          {label}
        </span>
      )}
    </div>
  );
}
