import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do I really need joint replacement surgery?", a: "Joint replacement is considered only after non-surgical options — activity modification, physiotherapy, medication and injections — have been tried or clearly indicated by your clinical assessment and imaging." },
  { q: "How is robotic surgery different?", a: "Robotic systems assist the surgeon with 3D planning, precise bone preparation and real-time soft-tissue balancing. The surgery is performed by Dr. Tomar; the robot does not act autonomously." },
  { q: "Is there an age limit for surgery?", a: "There is no strict age limit. Suitability depends on your overall health, joint condition and functional goals — assessed at consultation." },
  { q: "How long is recovery?", a: "Most patients begin assisted walking within 24 hours. Early recovery takes four to six weeks; full rehabilitation continues for several months. Recovery varies between patients." },
  { q: "How long does a replacement last?", a: "Modern implants are designed to last well over 15–20 years in most patients when placed accurately and cared for properly." },
  { q: "Can I have both knees or hips done together?", a: "Bilateral surgery is possible in selected fit patients. It is discussed only after a thorough medical and cardiac evaluation." },
  { q: "Is insurance accepted?", a: "Most major health insurance policies cover joint replacement. Our team assists with pre-authorisation and paperwork." },
  { q: "Can I get an opinion before travelling?", a: "Yes — outstation patients can share reports over WhatsApp or book a video consultation before planning travel." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 container-page">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Answers</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            Frequently asked <span className="text-gradient-brand">patient questions</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Have a specific concern? Reach out on WhatsApp or request a callback — we'll answer clearly, without pressure.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-start justify-between gap-6 text-left p-6 hover:bg-surface transition-colors">
                    <span className="font-display text-lg text-foreground">{f.q}</span>
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary shrink-0">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-2 text-muted-foreground leading-relaxed">{f.a}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
