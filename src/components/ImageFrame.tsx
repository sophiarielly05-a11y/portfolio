type ImageFrameProps = {
  aspect?: string;
  label?: string;
  className?: string;
};

export default function ImageFrame({
  aspect = "4/5",
  label = "Image",
  className = "",
}: ImageFrameProps) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-background ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span className="font-mono text-xs uppercase tracking-[0.1em] text-warm-grey">
        {label}
      </span>
    </div>
  );
}
