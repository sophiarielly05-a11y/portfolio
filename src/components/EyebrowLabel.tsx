import type { ElementType, ComponentPropsWithoutRef } from "react";

type EyebrowLabelProps = {
  as?: ElementType;
  tone?: "heading" | "muted";
  variant?: "plain" | "highlight";
} & ComponentPropsWithoutRef<"span">;

const toneClasses: Record<NonNullable<EyebrowLabelProps["tone"]>, string> = {
  heading: "text-ink",
  muted: "text-warm-grey",
};

const variantClasses: Record<
  NonNullable<EyebrowLabelProps["variant"]>,
  string
> = {
  plain: "",
  highlight: "inline-block rounded-full bg-pink px-3 py-1",
};

export default function EyebrowLabel({
  as: Component = "span",
  tone = "muted",
  variant = "plain",
  className = "",
  children,
  ...props
}: EyebrowLabelProps) {
  return (
    <Component
      className={`font-mono text-xs uppercase tracking-[0.1em] ${toneClasses[tone]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
