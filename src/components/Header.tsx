"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TextLink from "./TextLink";
import Button from "./Button";
import Container from "./Container";

const navItems = [
  { label: "Work", href: "/#selected-work" },
  { label: "Emails", href: "/work/emails" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink/10 bg-background py-4 sm:py-6">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="rounded-sm font-display text-xl text-accent outline-hidden focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] sm:text-2xl"
        >
          Kept
        </Link>

        <nav className="hidden items-center gap-8 text-base sm:flex">
          {navItems.map((item) => (
            <TextLink key={item.href} href={item.href}>
              {item.label}
            </TextLink>
          ))}
          <Button href="/#contact" variant="nav">
            Start a project
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-sm p-2 text-ink outline-hidden focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] sm:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {isMenuOpen && (
        <Container>
          <nav
            id="mobile-nav"
            className="mt-4 flex flex-col items-start gap-4 border-t border-ink/10 pt-4 text-base sm:hidden"
          >
            {navItems.map((item) => (
              <TextLink key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </TextLink>
            ))}
            <Button href="/#contact" variant="nav" onClick={closeMenu}>
              Start a project
            </Button>
          </nav>
        </Container>
      )}
    </header>
  );
}
