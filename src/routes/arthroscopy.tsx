import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import { FAQBlock, MythFactBlock, TimelineBlock, RedFlagsBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/arthroscopy")({
  head: () => ({
    meta: [
      { title: "Arthroscopy & Sports Injury Surgery — Dr. L. Tomar" },
      { name: "description", content: "Minimally invasive keyhole surgery for knee, shoulder and ligament injuries. ACL reconstruction, meniscus repair and sports-return protocols with Dr. L. Tomar." },
      { property: "og:title", content: "Arthroscopy & Sports Injury Surgery — Dr. L. Tomar" },
      { property: "og:description", content: "Keyhole surgery for the knee and shoulder — smaller scars, faster recovery." },
    ],
  }),
  component: ArthroscopyPage,
});

const procedures = [
  { title: "ACL Reconstruction", desc: "Ligament reconstruction using autograft with sports-specific rehabilitation protocols." },
  { title: "Meniscus Repair & Trim", desc: "Preserving as much meniscus as possible to protect the knee long-term." },
  { title: "Cartilage Restoration", desc: "Microfracture and biologic techniques for focal cartilage defects." },
  { title: "Shoulder Arthroscopy", desc: "Rotator cuff repair, labral repair and management of shoulder instability." },
  { title: "Recurrent Dislocation Surgery", desc: "Bankart, Latarjet and stabilisation procedures for repeated shoulder dislocations." },
  { title: "Loose Body Removal", desc: "Removal of intra-articular loose fragments causing pain and locking." },
];

function ArthroscopyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Arthroscopy & Sports Injury"
        title="Keyhole surgery for the active life."
        description="Arthroscopy uses tiny incisions and a high-definition camera to diagnose and treat joint problems with minimal disruption — smaller scars, less pain, and a faster return to sport, work and everyday movement."
      />

      <section className="py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <CheckCircle2 className="h-6 w-6 text-teal" />
              <div className="mt-4 font-display text-lg text-foreground">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Why choose arthroscopy</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Small incisions. Big outcomes.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a weekend runner, a competitive athlete or someone who simply wants to move without pain,
              arthroscopy provides a diagnostic-and-therapeutic approach in one session — with recovery measured in weeks.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              "Incisions of just a few millimetres",
              "Same-day or next-day discharge in most cases",
              "Return to desk work within 1–2 weeks",
              "Structured sports-return timeline for athletes",
              "Preserves surrounding cartilage and ligaments",
            ].map((s) => (
              <li key={s} className="flex gap-3 items-start rounded-xl bg-card border border-border px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
