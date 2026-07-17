import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Target, Activity, Timer, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/robotic-knee")({
  head: () => ({
    meta: [
      { title: "Robotic Knee Replacement — Dr. L. Tomar, Delhi NCR" },
      { name: "description", content: "Robotic-assisted total & partial knee replacement with sub-millimetre precision. Personalised alignment, faster recovery and long-lasting outcomes with Dr. L. Tomar." },
      { property: "og:title", content: "Robotic Knee Replacement — Dr. L. Tomar" },
      { property: "og:description", content: "Sub-millimetre precision. Personalised alignment. Faster recovery." },
    ],
  }),
  component: RoboticKneePage,
});

const benefits = [
  { icon: Target, title: "Sub-millimetre precision", desc: "Robotic navigation aligns implants to your unique anatomy within ±1° accuracy." },
  { icon: Activity, title: "Natural knee kinematics", desc: "Balanced ligaments and preserved motion for a knee that feels more like your own." },
  { icon: Timer, title: "Faster recovery", desc: "Smaller incisions and reduced soft-tissue trauma mean you walk sooner." },
  { icon: ShieldCheck, title: "Long-lasting implants", desc: "Accurate alignment reduces wear — improving 15–20 year implant survival." },
  { icon: Sparkles, title: "Personalised planning", desc: "A 3D pre-operative plan built from your CT scan, reviewed before surgery." },
  { icon: CheckCircle2, title: "Predictable outcomes", desc: "Real-time verification during surgery reduces variability and revisions." },
];

const candidates = [
  "Persistent knee pain that limits walking, stairs or sleep",
  "Advanced osteoarthritis or rheumatoid arthritis of the knee",
  "Deformity (bow legs / knock knees) affecting daily life",
  "Failed conservative treatment — medication, physiotherapy, injections",
  "Post-traumatic knee arthritis after old injuries",
];

function RoboticKneePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Robotic Knee Replacement"
        title="A knee replacement designed around your anatomy — not the other way around."
        description="Robotic-assisted total and partial knee replacement uses your own 3D anatomy to plan every cut, every degree of alignment and every ligament balance point — before a single incision is made."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">What is robotic knee replacement?</h2>
            <p>
              Robotic knee replacement is a computer-assisted surgical technique in which a robotic arm helps the surgeon place the
              implant with sub-millimetre precision. It does not replace the surgeon — it enhances the surgeon's judgement with
              real-time 3D data, tactile feedback and safe motion boundaries.
            </p>
            <p>
              For patients, this means less bone removal, more accurate implant alignment, better preservation of soft tissue, and
              often a noticeably quicker return to walking, climbing stairs and daily activities.
            </p>
            <p>
              Dr. Tomar performs both <strong className="text-foreground">total knee replacement (TKR)</strong> and <strong className="text-foreground">partial (uni-condylar) knee replacement</strong> using robotic assistance,
              matching the procedure to what the patient actually needs — not to what a hospital prefers to promote.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-card border border-border shadow-card p-8">
              <h3 className="font-display text-xl text-foreground">Are you a candidate?</h3>
              <p className="mt-2 text-sm text-muted-foreground">You may benefit from evaluation if you experience:</p>
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
                Request an evaluation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Why robotic</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Six advantages patients feel</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-lg text-foreground">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Your procedure</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">What to expect, step by step</h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              ["Pre-operative planning", "A CT scan of your knee is used to build a personalised 3D plan of your bone anatomy, alignment and ligament tension."],
              ["Anaesthesia & positioning", "Typically spinal or combined anaesthesia. You will be awake but comfortable, with your leg carefully positioned."],
              ["Robotic-assisted surgery", "The robotic arm guides each bone cut precisely to the plan. Dr. Tomar makes every clinical decision in real time."],
              ["Implant placement & balancing", "Trial components verify motion and stability, then the final implant is fixed and the incision closed."],
              ["Same-day mobilisation", "Most patients stand and walk a few steps within 4–6 hours with support and pain well controlled."],
              ["Structured recovery", "Guided physiotherapy, home exercises, remote check-ins and a return to daily life within weeks — not months."],
            ].map(([title, desc], i) => (
              <li key={title} className="rounded-2xl bg-card border border-border p-6">
                <div className="text-xs font-medium text-primary">Step {i + 1}</div>
                <div className="mt-2 font-display text-lg text-foreground">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
