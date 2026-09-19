import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "default" | "nav";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "px-6 py-3 text-base text-ink",
  nav: "px-5 py-2 text-sm text-white",
};

export default function Button({
  className = "",
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full bg-accent font-medium outline-hidden transition-opacity hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] motion-reduce:transition-none ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
