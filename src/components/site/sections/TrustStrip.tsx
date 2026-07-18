const items = [
  { k: "32+", v: "Years of experience" },
  { k: "30,000+", v: "Surgeries performed" },
  { k: "1,500+", v: "Hip & knee replacements" },
  { k: "MS · MCh", v: "Dundee, Scotland (UK)" },
  { k: "Delhi NCR", v: "Max Patparganj & partners" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page grid grid-cols-2 md:grid-cols-5 gap-y-8">
        {items.map((it) => (
          <div key={it.v} className="py-8 md:py-10 px-2 text-center md:border-r last:border-r-0 border-border">
            <div className="font-display text-2xl md:text-3xl text-gradient-brand">{it.k}</div>
            <div className="mt-1.5 text-xs md:text-sm text-muted-foreground tracking-wide">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
