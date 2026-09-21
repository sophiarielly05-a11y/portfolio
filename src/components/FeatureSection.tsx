import type { ComponentPropsWithoutRef } from "react";
import Section from "./Section";

type FeatureSectionProps = ComponentPropsWithoutRef<typeof Section>;

export default function FeatureSection({
  className = "",
  children,
  ...props
}: FeatureSectionProps) {
  return (
    <Section className={`bg-pink ${className}`} {...props}>
      {children}
    </Section>
  );
}
