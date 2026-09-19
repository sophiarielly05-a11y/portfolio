"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { EmailItem } from "@/data/emails";

type LightboxProps = {
  email: EmailItem;
  onClose: () => void;
};

export default function Lightbox({ email, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={email.title || `${email.category} email screenshot`}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/85 backdrop-blur-sm"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed top-4 right-4 z-10 rounded-sm text-background outline-hidden focus-visible:[outline:2px_solid_var(--color-background)] focus-visible:[outline-offset:4px] sm:top-6 sm:right-6"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </svg>
      </button>
      <div className="flex justify-center px-6 py-16 sm:px-10">
        <div
          onClick={(event) => event.stopPropagation()}
          className="w-full max-w-2xl"
        >
          <Image
            src={email.src}
            alt={email.title || `${email.category} email screenshot`}
            width={email.width}
            height={email.height}
            className="w-full rounded-lg"
          />
          {email.caption && (
            <p className="mt-4 text-center text-base text-background/90">
              {email.caption}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
