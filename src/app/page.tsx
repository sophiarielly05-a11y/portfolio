import Link from "next/link";
import Label from "@/components/Label";
import TextLink from "@/components/TextLink";
import Button from "@/components/Button";
import Section from "@/components/Section";

const services = [
  {
    title: "Lifecycle and automation",
    body: "Welcome, post-purchase, nurture, win-back and abandoned-flow journeys, mapped and built end to end. B2C and B2B.",
  },
  {
    title: "Newsletters",
    body: "Customer newsletters and trade or partner newsletters that build brand and earn clicks, not just announce things.",
  },
  {
    title: "Reviews and social proof",
    body: "Automated review-collection flows (such as Trustpilot) that turn happy buyers into ratings and testimonials.",
  },
  {
    title: "Segmentation and strategy",
    body: "Audience segments built from your data, so the right message reaches the right person.",
  },
  {
    title: "One-off campaigns",
    body: "Launches, sales and seasonal sends, planned and written.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex min-h-dvh flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <Label>CRM & Email Strategy</Label>
          <h1 className="mt-6 text-6xl leading-[0.85] text-accent sm:text-8xl lg:text-9xl">
            <span className="block">Sophia</span>
            <span className="block">Rielly</span>
          </h1>
          <p className="mt-8 max-w-md text-lg text-ink/80">
            Lifecycle email and automation for e-commerce and retail brands.
            Flows, newsletters, reviews and win-backs that grow revenue from
            the audience you already have.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Button href="#selected-work">See the work</Button>
            <TextLink href="mailto:sophia.rielly05@gmail.com">
              Start a project
            </TextLink>
          </div>
        </div>
      </section>

      <Section id="selected-work" className="bg-accent/5">
        <Label as="h2" className="text-base">
          Selected Work
        </Label>
        <div className="mt-8 flex flex-col gap-6">
          <TextLink href="#">Case study one</TextLink>
          <TextLink href="#">Case study two</TextLink>
          <TextLink href="#">Case study three</TextLink>
        </div>
      </Section>

      <Section id="services">
        <Label as="h2" className="text-base">
          Services
        </Label>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="font-body text-xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-ink/80">{service.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" className="bg-accent/5">
        <Label as="h2" className="text-base">
          About
        </Label>
        <div className="mt-8 flex flex-col-reverse gap-10 sm:flex-row sm:items-start">
          <div className="flex-1 space-y-6 text-lg text-ink/80">
            <p>
              I&apos;m Sophia, a CRM and email marketer who builds lifecycle
              systems for retail brands. For the last few years I&apos;ve run
              email and automation for a national marketplace: architecting
              dozens of customer and partner journeys, rebuilding newsletters
              into something people actually read, and turning first-time
              buyers into repeat ones.
            </p>
            <p>
              I care about two things equally. The data underneath (clean
              segments, the right trigger at the right moment) and the brand
              voice on top (emails that sound human, not like a discount
              robot). If you&apos;ve got an audience and a list that
              isn&apos;t pulling its weight, that&apos;s the gap I close.
            </p>
          </div>
          <div className="flex aspect-[4/5] w-full shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-ink/5 sm:w-48">
            <Label className="text-ink/40">Photo</Label>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <h2 className="text-5xl leading-none sm:text-6xl lg:text-7xl">
          Let&apos;s talk
        </h2>
        <p className="mt-6 max-w-md text-lg text-ink/80">
          Got a list that could be doing more? Tell me about your brand and
          where email is falling short, and I&apos;ll come back with where
          I&apos;d start.
        </p>
        <Link
          href="mailto:sophia.rielly05@gmail.com"
          className="mt-8 inline-block rounded-sm text-2xl break-words text-accent underline decoration-2 underline-offset-8 outline-hidden transition-opacity hover:opacity-80 focus-visible:[outline:2px_solid_var(--color-ink)] focus-visible:[outline-offset:4px] motion-reduce:transition-none sm:text-4xl lg:text-5xl"
        >
          sophia.rielly05@gmail.com
        </Link>
      </Section>
    </main>
  );
}
