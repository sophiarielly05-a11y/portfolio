"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export default function Section({
  className = "",
  children,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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
      className={`w-full px-6 py-16 transition-all duration-700 ease-out motion-reduce:translate-y-0! motion-reduce:opacity-100! motion-reduce:transition-none sm:px-10 sm:py-24 lg:px-16 lg:py-32 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}
