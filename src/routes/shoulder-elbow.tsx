import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import { FAQBlock, MythFactBlock, RedFlagsBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/shoulder-elbow")({
  head: () => ({
    meta: [
      { title: "Shoulder & Elbow Surgery — Dr. L. Tomar" },
      { name: "description", content: "Comprehensive shoulder and elbow care: rotator cuff repair, shoulder replacement, tennis elbow, frozen shoulder and instability treatment by Dr. L. Tomar." },
      { property: "og:title", content: "Shoulder & Elbow Surgery — Dr. L. Tomar" },
      { property: "og:description", content: "Rotator cuff, replacement, instability and elbow pain — expert care." },
    ],
  }),
  component: ShoulderPage,
});

const conditions = [
  { title: "Rotator Cuff Tears", desc: "Arthroscopic repair for partial and full-thickness tears with strong long-term outcomes." },
  { title: "Frozen Shoulder", desc: "Structured non-surgical protocols and, when needed, arthroscopic capsular release." },
  { title: "Shoulder Instability", desc: "Bankart repair, Latarjet and stabilisation for dislocations and subluxations." },
  { title: "Shoulder Replacement", desc: "Anatomic and reverse shoulder replacement for arthritis and irreparable cuff tears." },
  { title: "Tennis & Golfer's Elbow", desc: "Graded rehabilitation, injections and, in resistant cases, surgical release." },
  { title: "Elbow Stiffness", desc: "Treatment of post-traumatic and arthritic stiffness with arthroscopic and open techniques." },
];

function ShoulderPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Shoulder & Elbow"
        title="Freedom to reach, lift, throw and rest — without pain."
        description="From common overuse injuries to complex reconstructive surgery, Dr. Tomar's shoulder and elbow practice covers the full spectrum — always weighted toward the least invasive option that will work."
      />

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-lg text-foreground">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
