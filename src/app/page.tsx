import EyebrowLabel from "@/components/EyebrowLabel";
import TextLink from "@/components/TextLink";
import PillButton from "@/components/PillButton";
import Section from "@/components/Section";
import FeatureSection from "@/components/FeatureSection";
import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import QuoteCard from "@/components/QuoteCard";
import ImageFrame from "@/components/ImageFrame";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { services } from "@/data/services";

const proofPoints = [
  { accent: "17+", rest: "automations built" },
  { accent: "XX%", rest: "average open rate" },
  { accent: "Award-shortlisted", rest: "campaign" },
  { accent: "Emarsys", rest: "specialist" },
];

const results = [
  {
    value: "17+",
    label: "Automated journeys",
    context:
      "A full customer and dealer lifecycle built in Emarsys, replacing manual sends.",
  },
  {
    value: "XX%",
    label: "Average open rate",
    context: "Lifecycle comms opened well above industry benchmarks.",
  },
  {
    value: "3",
    label: "Intent-based segments",
    context:
      "Audiences built from real customer data and buying intent, not guesswork.",
  },
  {
    value: "1",
    label: "Award-shortlisted campaign",
    context: "An EOFY campaign recognised at the Finder Innovation Awards.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit and map",
    summary: "Understand the customer, the data and the gaps.",
    bullets: ["Lifecycle audit", "Segmentation review", "Journey mapping"],
  },
  {
    number: "02",
    title: "Build and launch",
    summary: "Turn the map into working flows and sends.",
    bullets: ["Automation build", "Copy and design", "QA and testing"],
  },
  {
    number: "03",
    title: "Measure and improve",
    summary: "Report against what matters and iterate.",
    bullets: [
      "Open, click and revenue reporting",
      "A/B testing",
      "Ongoing optimisation",
    ],
  },
];

const testimonials = [
  {
    quote:
      "[Add a quote from a manager about the impact of the work.]",
    name: "[Add name]",
    role: "[Add role and company]",
  },
  {
    quote:
      "[Add a quote from a client or stakeholder about results delivered.]",
    name: "[Add name]",
    role: "[Add role and company]",
  },
  {
    quote:
      "[Add a quote from a colleague about ways of working together.]",
    name: "[Add name]",
    role: "[Add role and company]",
  },
];

const faqItems = [
  {
    question: "What do you actually do?",
    answer:
      "I build and run email marketing: lifecycle flows, newsletters, review automations, and the segmentation behind them.",
  },
  {
    question: "What platforms do you work in?",
    answer:
      "Primarily Emarsys, and I adapt to your stack. [edit to list the platforms you actually work in]",
  },
  {
    question: "How do you price?",
    answer:
      "Per project or a monthly retainer, scoped to the work, quoted after a quick call.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Flows can be live within a couple of weeks; retention gains compound over the following months.",
  },
  {
    question: "Can you work with my in-house team?",
    answer: "Yes, I can own email end to end or plug in alongside your team.",
  },
];

const contactBullets = [
  "A look at where your email is leaking revenue",
  "A clear first move",
  "A no-pressure quote",
];

const caseStudies = [
  {
    category: "Lifecycle & Automation",
    heading: "Building a lifecycle from scratch",
    summary:
      "17+ automated journeys across customer and partner lifecycles for a national marketplace.",
    challenge:
      "A large audience but mostly manual, one-size-fits-all sends, with enquiries and leads going cold before they converted.",
    approach:
      "Designed and built a full lifecycle system of 17+ automations across customer enquiry flows, post-enquiry nurture, and partner journeys from onboarding to deal follow-up, with audiences segmented from behavioural data.",
    result:
      "Automated coverage across the entire customer and partner journey, replacing manual sends.",
    resultNote:
      "[Add a metric: engagement lift, hours saved per week, or conversion improvement.]",
  },
  {
    category: "Newsletters",
    heading: "A newsletter people actually open",
    summary:
      "Rebuilding a flat partner newsletter into a data-led format, plus a sharper customer newsletter voice.",
    challenge:
      "A fortnightly partner newsletter that read like an internal memo, and a customer newsletter that needed a stronger brand voice.",
    approach:
      "Rebuilt the partner newsletter into a data-led thought-leadership format with performance splits, category trends and regional data, and reworked the customer newsletter's voice and structure.",
    result: "Adopted as the new format with director-level sign-off.",
    resultNote:
      "[Add open-rate and click-rate change once you have the figures.]",
  },
  {
    category: "Reviews & Social Proof",
    heading: "Turning buyers into reviewers",
    summary:
      "An automated post-purchase flow that grows public reviews and trust at the point of decision.",
    challenge:
      "Plenty of happy customers, but not enough public reviews to reassure new buyers when they were deciding.",
    approach:
      "Built an automated post-purchase review-collection flow into Trustpilot, timed to the moment satisfaction peaks, with a follow-up for people who did not open the first send.",
    result: "",
    resultNote:
      "[Add: review volume before vs after, average rating, and response rate.]",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex min-h-dvh flex-col justify-center py-16">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <EyebrowLabel tone="heading" variant="highlight">
                CRM & email strategy
              </EyebrowLabel>
              <h1 className="mt-6 text-[clamp(3rem,11vw,8rem)] leading-[0.85] text-accent">
                <span className="block">Sophia</span>
                <span className="block">Rielly</span>
              </h1>
              <p className="mt-8 max-w-md text-lg text-warm-grey">
                Lifecycle email and automation for e-commerce and retail
                brands. Flows, newsletters, reviews and win-backs that grow
                revenue from the audience you already have.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
                <PillButton href="#selected-work">See the work</PillButton>
                <TextLink href="mailto:sophia.rielly05@gmail.com">
                  Start a project
                </TextLink>
              </div>
            </div>
            <ImageFrame label="Portrait" aspect="4/5" className="w-full" />
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2">
            {proofPoints.map((point, index) => (
              <span key={point.rest} className="flex items-center gap-6">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-3.5 w-px bg-ink/15 sm:block"
                  />
                )}
                <EyebrowLabel>
                  <span className="text-accent">{point.accent}</span>{" "}
                  {point.rest}
                </EyebrowLabel>
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Marquee text="CRM ✦ Email ✦ Lifecycle ✦ Automation ✦ Newsletters ✦" />

      <FeatureSection id="results">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl">
            Results that compound
          </h2>
          <p className="max-w-xl text-lg text-ink">
            The impact behind the lifecycle systems and campaigns below.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl border border-ink/10 bg-white p-8 sm:p-10"
            >
              <p className="font-display text-5xl text-accent sm:text-6xl">
                {result.value}
              </p>
              <EyebrowLabel as="p" className="mt-4">
                {result.label}
              </EyebrowLabel>
              <p className="mt-2 text-base text-warm-grey">
                {result.context}
              </p>
            </div>
          ))}
        </div>
      </FeatureSection>

      <Section id="selected-work">
        <EyebrowLabel as="h2" tone="heading">
          Selected Work
        </EyebrowLabel>
        <div className="mt-10 flex flex-col gap-20">
          {caseStudies.map((study, index) => (
            <article
              key={study.heading}
              className={`max-w-2xl rounded-2xl border border-ink/10 bg-white p-8 sm:p-10 ${index % 2 === 1 ? "sm:ml-auto" : ""}`}
            >
              <EyebrowLabel tone="heading">{study.category}</EyebrowLabel>
              <h3 className="mt-4 text-3xl sm:text-4xl">{study.heading}</h3>
              <p className="mt-4 text-lg text-ink">{study.summary}</p>
              <div className="mt-8 space-y-6">
                <div>
                  <EyebrowLabel>Challenge</EyebrowLabel>
                  <p className="mt-1 text-base text-warm-grey">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <EyebrowLabel>Approach</EyebrowLabel>
                  <p className="mt-1 text-base text-warm-grey">
                    {study.approach}
                  </p>
                </div>
                <div>
                  <EyebrowLabel>Result</EyebrowLabel>
                  <p className="mt-1 text-base text-warm-grey">
                    {study.result ? `${study.result} ` : null}
                    {study.resultNote && (
                      <span className="italic text-warm-grey/70">
                        {study.resultNote}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="services">
        <div className="rounded-2xl border border-ink/10 bg-white p-8 sm:p-10">
          <EyebrowLabel as="h2" tone="heading">
            Services
          </EyebrowLabel>
          <p className="mt-4 max-w-xl text-lg text-ink">
            Lifecycle flows, newsletters, reviews and the segmentation behind
            them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-ink">
            {services.map((service, index) => (
              <span key={service.title} className="flex items-center gap-6">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-4 w-px bg-ink/15 sm:block"
                  />
                )}
                {service.title}
              </span>
            ))}
          </div>
          <TextLink href="/services" className="mt-8 inline-block">
            See all services →
          </TextLink>
        </div>
      </Section>

      <Section id="how-i-work">
        <EyebrowLabel as="h2" tone="heading">
          How I Work
        </EyebrowLabel>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {processSteps.map((step) => (
            <div key={step.number}>
              <p className="font-display text-3xl text-accent sm:text-4xl">
                {step.number}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl">{step.title}</h3>
              <p className="mt-2 text-base text-ink">{step.summary}</p>
              <ul className="mt-4 space-y-2">
                {step.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-warm-grey"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="testimonials">
        <EyebrowLabel as="h2" tone="heading">
          Testimonials
        </EyebrowLabel>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <QuoteCard
              key={index}
              quote={testimonial.quote}
              attribution={`${testimonial.name} — ${testimonial.role}`}
            />
          ))}
        </div>
      </Section>

      <Section id="about">
        <EyebrowLabel as="h2" tone="heading">
          About
        </EyebrowLabel>
        <div className="mt-8 flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl flex-1 space-y-6 text-lg text-ink">
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
          <ImageFrame label="Photo" className="shrink-0 sm:w-48" />
        </div>
      </Section>

      <Section id="faq">
        <EyebrowLabel as="h2" tone="heading">
          FAQ
        </EyebrowLabel>
        <div className="mt-10">
          <Faq items={faqItems} />
        </div>
      </Section>

      <Section id="contact">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-5xl leading-none sm:text-6xl lg:text-7xl">
            Let&apos;s talk
          </h2>
          <p className="max-w-md text-lg text-ink">
            Tell me where email is falling short and I&apos;ll tell you where
            to start.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <EyebrowLabel>What you&apos;ll get</EyebrowLabel>
            <ul className="mt-4 space-y-3 text-lg text-warm-grey">
              {contactBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>

      <FeatureSection>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 rounded-2xl border border-ink/10 bg-white p-8 text-center sm:p-12">
          <p className="font-display text-2xl text-accent sm:text-3xl lg:text-4xl">
            Your list is already worth more than it&apos;s earning.
          </p>
          <PillButton href="mailto:sophia.rielly05@gmail.com">
            Start a project
          </PillButton>
        </div>
      </FeatureSection>
    </main>
  );
}
