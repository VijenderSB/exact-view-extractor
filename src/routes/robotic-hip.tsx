import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Target, Activity, Timer, ShieldCheck, Sparkles } from "lucide-react";
import { FAQBlock, MythFactBlock, TimelineBlock, RedFlagsBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/robotic-hip")({
  head: () => ({
    meta: [
      { title: "Robotic Hip Replacement — Dr. L. Tomar, Delhi NCR" },
      { name: "description", content: "Robotic-assisted total hip replacement with anatomy-matched cup positioning, accurate leg length and lower dislocation risk. Consult Dr. L. Tomar in Delhi NCR." },
      { property: "og:title", content: "Robotic Hip Replacement — Dr. L. Tomar" },
      { property: "og:description", content: "Anatomy-matched precision. Restored leg length. Confident mobility." },
    ],
  }),
  component: RoboticHipPage,
});

const benefits = [
  { icon: Target, title: "Accurate cup positioning", desc: "Robotic guidance places the acetabular cup within the ideal safe zone every time." },
  { icon: Activity, title: "Restored leg length", desc: "Real-time measurement prevents post-op leg length discrepancy." },
  { icon: Timer, title: "Rapid return to walking", desc: "Minimally invasive approach lets most patients walk the same day." },
  { icon: ShieldCheck, title: "Reduced dislocation risk", desc: "Optimised orientation lowers post-operative dislocation risk substantially." },
  { icon: Sparkles, title: "Preserved muscle & tissue", desc: "Tissue-sparing exposure protects gluteal muscles for better strength recovery." },
  { icon: CheckCircle2, title: "Long implant lifespan", desc: "Correct orientation minimises wear, extending implant survival beyond 20 years." },
];

const candidates = [
  "Advanced hip osteoarthritis with pain and stiffness",
  "Avascular necrosis (AVN) of the femoral head",
  "Rheumatoid or post-traumatic hip arthritis",
  "Fractured neck of femur in older adults",
  "Failed prior hip surgery needing revision",
];

function RoboticHipPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Robotic Hip Replacement"
        title="A hip that feels like it belongs to you."
        description="Robotic-assisted total hip replacement combines 3D pre-operative planning with intra-operative precision — restoring leg length, hip biomechanics and long-term mobility with confidence."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">A modern approach to hip replacement</h2>
            <p>
              Hip replacement is one of the most successful operations in modern medicine — but success depends heavily on the precision
              of cup positioning, offset restoration and leg length. Robotic assistance elevates each of these factors, giving patients
              a hip that moves and feels natural.
            </p>
            <p>
              Dr. Tomar uses robotic navigation to plan each hip in three dimensions before the operation, then verify the plan in
              real time during surgery. Small changes of just a few degrees can transform long-term implant behaviour — this is where
              robotics matters most.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-card border border-border shadow-card p-8">
              <h3 className="font-display text-xl text-foreground">Common indications</h3>
              <ul className="mt-5 space-y-3">
                {candidates.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium px-5 py-3 shadow-elegant hover:shadow-glow transition-all"
              >
                Book a hip evaluation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Why robotic</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">The precision advantage</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-lg text-foreground">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
