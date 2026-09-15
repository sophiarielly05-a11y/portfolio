import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link>;

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-ink outline-hidden transition-opacity hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] motion-reduce:transition-none ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
