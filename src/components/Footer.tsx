import TextLink from "./TextLink";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
      <div className="flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}
