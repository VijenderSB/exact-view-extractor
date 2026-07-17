const items = [
  { k: "25+", v: "Years of experience" },
  { k: "5,000+", v: "Knee & hip procedures" },
  { k: "MS · MCh", v: "Orthopaedic qualifications" },
  { k: "Delhi NCR", v: "Multi-hospital affiliation" },
  { k: "4 States", v: "Patients served across region" },
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
