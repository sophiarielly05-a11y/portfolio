import type { ElementType, ComponentPropsWithoutRef } from "react";

type LabelProps = {
  as?: ElementType;
} & ComponentPropsWithoutRef<"span">;

export default function Label({
  as: Component = "span",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Component
      className={`font-body [font-variant-caps:all-small-caps] tracking-wide text-ink/70 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
