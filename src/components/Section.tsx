"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import Container from "./Container";

type SectionProps = ComponentPropsWithoutRef<"section">;

export default function Section({
  className = "",
  children,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  // Default to visible: content already on screen (or scrolled past) at mount
  // must never be stuck invisible. Only content starting below the viewport
  // gets hidden and animated in as the user scrolls down to it.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const isBelowViewport = node.getBoundingClientRect().top >= window.innerHeight;
    if (!isBelowViewport) return;

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full py-16 transition-all duration-700 ease-out motion-reduce:translate-y-0! motion-reduce:opacity-100! motion-reduce:transition-none sm:py-24 lg:py-32 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
