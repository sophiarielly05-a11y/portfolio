import Link from "next/link";
import TextLink from "./TextLink";

const navItems = [
  { label: "Work", href: "#selected-work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 px-6 py-4 backdrop-blur-md sm:px-10 sm:py-6 lg:px-16">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link
          href="/"
          className="rounded-sm font-display text-xl text-accent outline-hidden focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] sm:text-2xl"
        >
          Kept
        </Link>
        <nav className="flex gap-4 text-base sm:gap-8">
          {navItems.map((item) => (
            <TextLink key={item.href} href={item.href}>
              {item.label}
            </TextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
