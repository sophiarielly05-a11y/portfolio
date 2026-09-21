import type { Metadata } from "next";
import Section from "@/components/Section";
import EyebrowLabel from "@/components/EyebrowLabel";
import TextLink from "@/components/TextLink";
import ImageFrame from "@/components/ImageFrame";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Kept",
  description:
    "Lifecycle automation, newsletters, reviews and segmentation for e-commerce and retail brands.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <h1 className="text-5xl leading-none sm:text-6xl">Services</h1>
        <p className="mt-6 max-w-xl text-lg text-ink">
          Everything I build, from the first welcome email to the
          segmentation behind every send.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col gap-16 sm:gap-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-8 sm:items-center sm:gap-12 ${
                index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
            >
              <ImageFrame label="Email mockup" className="sm:w-1/2" />
              <div className="w-full sm:w-1/2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tag} className="flex items-center gap-4">
                      {tagIndex > 0 && (
                        <span
                          aria-hidden="true"
                          className="h-3 w-px bg-ink/15"
                        />
                      )}
                      <EyebrowLabel>{tag}</EyebrowLabel>
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-3xl sm:text-4xl">{service.title}</h3>
                <p className="mt-4 text-lg text-ink">{service.body}</p>
                <TextLink href="#" className="mt-6 inline-block">
                  How it works
                </TextLink>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
