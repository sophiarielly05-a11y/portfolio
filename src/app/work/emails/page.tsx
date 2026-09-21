import type { Metadata } from "next";
import Section from "@/components/Section";
import EmailGallery from "@/components/EmailGallery";
import { emails } from "@/data/emails";

export const metadata: Metadata = {
  title: "Emails — Kept",
  description: "A gallery of lifecycle, nurture and trade emails.",
};

export default function EmailsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <h1 className="text-5xl leading-none sm:text-6xl">Emails</h1>
        <p className="mt-6 max-w-xl text-lg text-warm-grey">
          A working gallery of lifecycle, nurture and trade emails built for
          e-commerce and retail brands.
        </p>
        <div className="mt-12">
          <EmailGallery emails={emails} />
        </div>
      </Section>
    </main>
  );
}
