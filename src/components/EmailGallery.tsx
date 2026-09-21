"use client";

import { useMemo, useState } from "react";
import EmailCard from "./EmailCard";
import Lightbox from "./Lightbox";
import type { EmailItem } from "@/data/emails";

const ALL = "All";

type EmailGalleryProps = {
  emails: EmailItem[];
};

export default function EmailGallery({ emails }: EmailGalleryProps) {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    emails.forEach((email) => seen.add(email.category));
    return [ALL, ...Array.from(seen)];
  }, [emails]);

  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === ALL
        ? emails
        : emails.filter((email) => email.category === activeCategory),
    [emails, activeCategory],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium outline-hidden transition-colors focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] ${
                isActive
                  ? "border-accent bg-accent text-ink"
                  : "border-ink/15 text-warm-grey hover:border-ink/40"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((email, index) => (
          <EmailCard
            key={email.src}
            email={email}
            onOpen={() => setOpenIndex(index)}
          />
        ))}
      </div>

      {openIndex !== null && filtered[openIndex] && (
        <Lightbox
          email={filtered[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
