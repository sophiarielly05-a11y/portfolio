import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type PillButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
};

const variantClasses: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  primary: "bg-accent text-white",
  secondary: "border border-ink text-ink",
};

const sizeClasses: Record<NonNullable<PillButtonProps["size"]>, string> = {
  default: "px-6 py-3 text-base",
  sm: "px-5 py-2 text-sm",
};

export default function PillButton({
  className = "",
  variant = "primary",
  size = "default",
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full font-medium outline-hidden transition-opacity hover:opacity-90 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] motion-reduce:transition-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
