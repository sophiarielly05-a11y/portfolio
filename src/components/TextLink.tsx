import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type TextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export default function TextLink({
  className = "",
  children,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={`rounded-sm text-ink underline decoration-1 underline-offset-4 outline-hidden transition-colors hover:text-accent focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] motion-reduce:transition-none ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
