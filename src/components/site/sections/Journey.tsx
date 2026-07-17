const steps = [
  "Consultation",
  "Clinical evaluation",
  "Imaging & diagnosis",
  "Non-surgical options",
  "Surgery recommendation",
  "Preoperative planning",
  "Surgery day",
  "Hospital recovery",
  "Physiotherapy",
  "Follow-up",
  "Long-term care",
];

export function Journey() {
  return (
    <section className="py-24 container-page">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Patient journey</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
          A clear path — from first <span className="text-gradient-brand">consultation to recovery</span>
        </h2>
      </div>

      <div className="mt-14 relative">
        <div aria-hidden className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
        <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step} className="relative rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-sm font-semibold shadow-elegant">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg">{step}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
