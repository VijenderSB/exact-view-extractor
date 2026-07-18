import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-shoulder-elbow.jpg";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import { FAQBlock, MythFactBlock, RedFlagsBlock } from "@/components/site/ContentBlocks";
import { testimonialsByTopic } from "@/data/testimonials";


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
      image={bannerImg}
      testimonials={testimonialsByTopic["shoulder-elbow"]}
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

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Understanding your shoulder</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Why the shoulder gives trouble</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The shoulder is the most mobile joint in the body — which also makes it the most vulnerable. Four small muscles (the rotator cuff)
              hold the ball of the arm bone against a shallow socket. Age, overhead work, sports injuries and even a bad fall in the fifties can
              tear these tendons, inflame the joint or destabilise the whole system.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most shoulder pain does not need surgery. A careful clinical examination, targeted imaging and a structured non-surgical plan resolve
              the majority of cases. When surgery is needed, it is almost always keyhole (arthroscopic) — small incisions, day-care admission and
              a well-defined recovery path.
            </p>
          </div>
          <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
            <h3 className="font-display text-xl text-foreground">Common shoulder pain patterns</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li><span className="font-medium text-foreground">Painful arc when lifting the arm:</span> <span className="text-muted-foreground">often rotator cuff or impingement.</span></li>
              <li><span className="font-medium text-foreground">Pain reaching behind the back:</span> <span className="text-muted-foreground">frozen shoulder or cuff tear.</span></li>
              <li><span className="font-medium text-foreground">Night pain when lying on the shoulder:</span> <span className="text-muted-foreground">classic rotator cuff pattern.</span></li>
              <li><span className="font-medium text-foreground">Shoulder popping out during sport or sleep:</span> <span className="text-muted-foreground">recurrent instability.</span></li>
              <li><span className="font-medium text-foreground">Stiffness that started slowly and got worse:</span> <span className="text-muted-foreground">adhesive capsulitis (frozen shoulder).</span></li>
            </ul>
          </div>
        </div>
      </section>

      <MythFactBlock
        title="Shoulder & elbow — clearing common misconceptions"
        items={[
          { myth: "Frozen shoulder always needs surgery.", fact: "Over 80% of frozen shoulders resolve with structured physiotherapy, injections and time. Surgery is reserved for cases that don't improve in 6–9 months." },
          { myth: "A rotator cuff tear will heal by itself with rest.", fact: "Tendon tears do not heal spontaneously. Small tears may be managed non-surgically, but larger tears tend to enlarge — early repair gives the best result." },
          { myth: "Tennis elbow only affects tennis players.", fact: "Most tennis elbow patients have never played tennis. It's caused by repetitive gripping — from cooking, typing, gardening or lifting." },
          { myth: "Shoulder replacement is worse than knee replacement.", fact: "Modern anatomic and reverse shoulder replacements have excellent outcomes — pain relief is often faster than knee replacement, though strength takes longer to rebuild." },
        ]}
      />

      <RedFlagsBlock
        title="When shoulder or elbow pain needs specialist review"
        items={[
          "Inability to lift the arm after a fall or heavy lift",
          "Shoulder dislocation — even once, especially before age 25",
          "Night pain that regularly disturbs sleep",
          "Weakness in the arm that has appeared over weeks",
          "Elbow pain that stops you gripping a cup, phone or laptop",
          "Locked elbow — cannot fully bend or straighten",
        ]}
      />

      <FAQBlock
        title="Shoulder & elbow — frequently asked questions"
        items={[
          { q: "How long does frozen shoulder take to recover?", a: "Untreated, it can take 18–24 months. With structured physiotherapy and targeted injections, most patients see significant improvement in 3–6 months." },
          { q: "Is rotator cuff repair a big surgery?", a: "It's a keyhole (arthroscopic) procedure done as day care or a one-night stay. You go home in a sling and follow a graded 3–4 month rehabilitation programme." },
          { q: "What is reverse shoulder replacement?", a: "A specialised implant used when the rotator cuff is beyond repair. It cleverly re-routes the mechanics so the deltoid muscle powers arm elevation — restoring pain-free function." },
          { q: "Can tennis elbow be cured without surgery?", a: "Yes, in the vast majority of cases. Rest, stretching, a brace, focused physiotherapy and occasionally an injection resolve most tennis elbow within 3–6 months." },
          { q: "How long am I in a sling after shoulder surgery?", a: "Typically 3–6 weeks, depending on the procedure. Passive range-of-motion exercises often begin within days to prevent stiffness." },
          { q: "When can I drive after shoulder surgery?", a: "Usually 2–4 weeks after the sling is discontinued and you can safely control the wheel and gear lever without pain." },
        ]}
      />
    </PageShell>
  );
}
