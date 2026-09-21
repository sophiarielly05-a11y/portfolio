type MarqueeProps = {
  text: string;
  font?: "display" | "mono";
};

export default function Marquee({ text, font = "display" }: MarqueeProps) {
  const itemClassName =
    font === "display"
      ? "font-display text-3xl text-ink sm:text-4xl"
      : "font-mono text-xl uppercase tracking-[0.1em] text-ink sm:text-2xl";

  const items = Array.from({ length: 8 }, (_, index) => (
    <span key={index} className={`mx-6 whitespace-nowrap ${itemClassName}`}>
      {text}
    </span>
  ));

  return (
    <div className="w-full overflow-hidden bg-pink py-6">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] motion-reduce:animate-none">
        <div className="flex shrink-0">{items}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
