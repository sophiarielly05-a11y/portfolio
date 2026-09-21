import TextLink from "./TextLink";
import Container from "./Container";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-10 sm:py-12">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TextLink href="mailto:sophia.rielly05@gmail.com">
          sophia.rielly05@gmail.com
        </TextLink>
        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <TextLink key={item.label} href={item.href}>
              {item.label}
            </TextLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
