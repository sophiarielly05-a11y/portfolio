type QuoteCardProps = {
  quote: string;
  attribution: string;
};

export default function QuoteCard({ quote, attribution }: QuoteCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-pink p-8 sm:p-10">
      <p className="font-display text-2xl leading-tight text-ink sm:text-3xl">
        {quote}
      </p>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-ink/70">
        {attribution}
      </p>
    </div>
  );
}
