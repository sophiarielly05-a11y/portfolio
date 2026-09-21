import Image from "next/image";
import Label from "./Label";
import type { EmailItem } from "@/data/emails";

type EmailCardProps = {
  email: EmailItem;
  onOpen: () => void;
};

export default function EmailCard({ email, onOpen }: EmailCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-ink/10 bg-cream text-left outline-hidden transition-shadow hover:shadow-lg focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px]"
    >
      <div className="relative h-64 w-full overflow-hidden bg-ink/5">
        <Image
          src={email.src}
          alt={email.title || `${email.category} email screenshot`}
          width={email.width}
          height={email.height}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="p-4">
        <Label className="text-xs">{email.category}</Label>
        {email.title && (
          <p className="mt-2 font-medium text-ink">{email.title}</p>
        )}
      </div>
    </button>
  );
}
