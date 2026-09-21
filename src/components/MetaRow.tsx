import Container from "./Container";

const metaItems = ["Kept", "CRM and email", "Brisbane, AU", "Est 2026"];

export default function MetaRow() {
  return (
    <div className="w-full border-b border-ink/10 bg-background py-2">
      <Container className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.1em] text-warm-grey">
        {metaItems.map((item, index) => (
          <span key={item} className="flex items-center gap-3">
            {index > 0 && <span aria-hidden="true">★</span>}
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
