import { createFileRoute, Link } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-robotic-hip.jpg";
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
      image={bannerImg}
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

      <TimelineBlock
        title="Your hip recovery timeline"
        subtitle="Hip replacement recovery is often faster than patients expect. Here's the typical journey after robotic total hip replacement."
        steps={[
          { when: "Day 0", label: "Surgery & first steps", desc: "Procedure takes about 60–90 minutes. Most patients stand and take assisted steps on the same evening." },
          { when: "Day 1–3", label: "Hospital stay", desc: "Walking with a walker, learning safe hip positions, pain well controlled. Discharge usually on day 2 or 3." },
          { when: "Week 1–2", label: "Home recovery", desc: "Short walks around the house, chair-and-toilet raisers for safety, home physiotherapy. Sutures removed by day 12." },
          { when: "Week 3–6", label: "Back to routine", desc: "Walking outdoors, stairs unaided, driving resumed around week 4–6. Most desk work possible from week 2–3." },
          { when: "Week 6–12", label: "Building strength", desc: "Long walks, gentle cycling, swimming, travel. Full weight-bearing and near-normal function." },
          { when: "3–6 months", label: "Complete return", desc: "Golf, doubles tennis, hiking and dancing become comfortable again. The hip 'disappears' from daily awareness." },
        ]}
      />

      <MythFactBlock
        title="Hip replacement — what patients get wrong"
        items={[
          { myth: "I'll walk with a permanent limp.", fact: "A well-planned hip replacement — especially with robotic guidance — restores leg length and offset accurately, so limping usually resolves within a few weeks." },
          { myth: "I'll have to sleep only on my back forever.", fact: "Modern surgical approaches and precise cup positioning let most patients sleep on either side comfortably within 4–6 weeks." },
          { myth: "It's a huge, bloody surgery.", fact: "Robotic-assisted hip replacement is a controlled 60–90 minute procedure with small incisions, minimal muscle disruption and modest blood loss — often no transfusion needed." },
          { myth: "AVN patients just need painkillers, not surgery.", fact: "Untreated avascular necrosis progressively destroys the femoral head. Early hip replacement gives dramatically better long-term function than waiting for late-stage collapse." },
          { myth: "The implant will wear out in 10 years.", fact: "Ceramic-on-polyethylene and ceramic-on-ceramic bearings, correctly aligned, are engineered for 25–30 years of use." },
        ]}
      />

      <RedFlagsBlock
        title="When to get your hip evaluated"
        items={[
          "Groin pain that radiates to the thigh or knee",
          "Stiffness putting on socks, shoes or sitting cross-legged",
          "A limp that has appeared or worsened over months",
          "Night pain or pain lying on the affected side",
          "A history of steroid use, alcohol, or hip trauma (AVN risk)",
          "Reduced walking distance despite physiotherapy and medication",
        ]}
      />

      <FAQBlock
        title="Hip replacement — frequently asked questions"
        items={[
          { q: "Will my legs be the same length after surgery?", a: "Yes — that's one of the biggest advantages of robotic hip replacement. Real-time measurement during surgery ensures leg length is restored, usually within 1–2 mm of the healthy side." },
          { q: "Can I sit on the floor and use Indian toilets?", a: "Most patients can sit on the floor, use Indian toilets and squat modestly after full recovery. The first 6 weeks require some position precautions to protect healing tissues." },
          { q: "Is robotic hip replacement suitable for AVN?", a: "Absolutely. Robotic assistance is especially valuable in AVN because the surrounding anatomy can be altered — precise planning ensures optimal cup placement and stability." },
          { q: "How long is the hospital stay?", a: "Usually 2–3 nights. Some fit, well-supported patients go home the next day." },
          { q: "Will I need a blood transfusion?", a: "Rarely. Modern techniques minimise blood loss to the point where most patients recover without needing any transfusion." },
          { q: "When can I fly after hip replacement?", a: "Short domestic flights: 2–3 weeks. Long international flights: 6 weeks, with movement, hydration and compression stockings to minimise clot risk." },
          { q: "Does the implant set off airport scanners?", a: "Occasionally yes. You'll receive an implant identification card to keep with your travel documents." },
        ]}
      />
    </PageShell>
  );
}
