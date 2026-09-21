import type { ElementType, ComponentPropsWithoutRef } from "react";

type LabelProps = {
  as?: ElementType;
  tone?: "heading" | "muted";
} & ComponentPropsWithoutRef<"span">;

const toneClasses: Record<NonNullable<LabelProps["tone"]>, string> = {
  heading: "text-ink",
  muted: "text-warm-grey",
};

export default function Label({
  as: Component = "span",
  tone = "muted",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Component
      className={`font-body [font-variant-caps:all-small-caps] tracking-wide ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
