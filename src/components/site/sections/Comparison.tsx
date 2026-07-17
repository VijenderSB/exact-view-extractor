const rows = [
  { k: "Preoperative planning", r: "3D CT-based, patient-specific model", c: "2D X-ray templating" },
  { k: "Bone preparation", r: "Guided by real-time boundaries", c: "Manual jigs and cutting blocks" },
  { k: "Implant positioning", r: "Sub-millimetre precision", c: "Depends on surgeon judgement" },
  { k: "Soft-tissue assessment", r: "Live ligament balancing data", c: "Tactile assessment" },
  { k: "Surgeon control", r: "Full — robot assists only", c: "Full" },
  { k: "Cost", r: "Higher — technology-assisted", c: "Standard" },
  { k: "Suitability", r: "Assessed case-by-case", c: "Assessed case-by-case" },
];

export function Comparison() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Balanced comparison</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            Robotic vs conventional joint replacement
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Both approaches deliver excellent outcomes when carefully indicated. The right approach depends on your diagnosis, anatomy, imaging, general health and clinical assessment.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="grid grid-cols-3 bg-gradient-brand text-primary-foreground text-sm font-medium">
            <div className="px-5 py-4">Consideration</div>
            <div className="px-5 py-4 border-l border-white/15">Robotic-assisted</div>
            <div className="px-5 py-4 border-l border-white/15">Conventional</div>
          </div>
          {rows.map((row, i) => (
            <div key={row.k} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}>
              <div className="px-5 py-4 font-medium text-foreground">{row.k}</div>
              <div className="px-5 py-4 border-l border-border text-foreground/85">{row.r}</div>
              <div className="px-5 py-4 border-l border-border text-muted-foreground">{row.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
