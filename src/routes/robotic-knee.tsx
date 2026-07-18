import { createFileRoute, Link } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-robotic-knee.jpg";
import { PageShell } from "@/components/site/PageShell";
import { testimonialsByTopic } from "@/data/testimonials";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Target, Activity, Timer, ShieldCheck, Sparkles } from "lucide-react";
import { FAQBlock, MythFactBlock, TimelineBlock, RedFlagsBlock } from "@/components/site/ContentBlocks";


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
    <PageShellNone testimonials={testimonialsByTopic["robotic-knee"]} testimonialsTitle={"Robotic Knee — patient stories"}>
      <PageHero
        eyebrow="Robotic Knee Replacement"
        title="A knee replacement designed around your anatomy — not the other way around."
        description="Robotic-assisted total and partial knee replacement uses your own 3D anatomy to plan every cut, every degree of alignment and every ligament balance point — before a single incision is made."
      image={bannerImg}
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

      <TimelineBlock
        title="Your recovery, week by week"
        subtitle="Most patients follow a predictable arc after robotic knee replacement. Individual timelines vary, but here's the pattern we plan around."
        steps={[
          { when: "Day 0", label: "Surgery day", desc: "Procedure typically takes 60–90 minutes per knee. You'll rest, eat a light meal in the evening, and stand with support within 4–6 hours." },
          { when: "Day 1–2", label: "In hospital", desc: "Walking with a walker, gentle knee bending exercises, pain controlled with oral medication. Most patients go home in 2–3 days." },
          { when: "Week 1–2", label: "Early home recovery", desc: "Physiotherapy at home, daily walking, stairs with support. Sutures/clips removed around day 12–14." },
          { when: "Week 3–6", label: "Confidence phase", desc: "Walking without support, driving resumed (right knee: ~4 weeks), most desk work possible from week 3." },
          { when: "Week 6–12", label: "Strength & routine", desc: "Full return to daily activities, light gym, cycling, swimming. Knee bending progresses toward 120°+." },
          { when: "3–6 months", label: "Back to your life", desc: "Long walks, travel, dancing, low-impact sport. Most patients say the knee 'feels like their own' by 4–6 months." },
        ]}
      />

      <MythFactBlock
        title="Knee replacement myths patients often hear"
        items={[
          { myth: "You should delay surgery for as long as humanly possible.", fact: "Waiting too long can weaken muscles, deform the joint and make recovery harder. The right time is when pain limits your daily life — not when you can no longer walk." },
          { myth: "I'm too old for knee replacement.", fact: "Age alone is not a barrier. Fitness for surgery matters more than a number — patients in their 70s and 80s do very well when medically optimised." },
          { myth: "I'll never be able to sit cross-legged again.", fact: "Modern high-flexion implants combined with robotic alignment allow most Indian patients to sit cross-legged and squat comfortably, given time and physiotherapy." },
          { myth: "Robotic surgery means the robot does the operation.", fact: "The surgeon performs the surgery. The robot is a highly precise guidance tool — like a GPS. Every decision remains a human one." },
          { myth: "Recovery takes a full year.", fact: "Most patients walk unaided in 2–3 weeks and return to normal life in 6–12 weeks. Fine-tuning continues quietly for a few months more." },
          { myth: "Implants only last 10 years.", fact: "Current implants combined with accurate alignment routinely last 20–25 years or more in appropriately selected patients." },
        ]}
      />

      <RedFlagsBlock
        title="Signs your knee needs expert evaluation"
        items={[
          "Pain that wakes you up at night or persists at rest",
          "Difficulty climbing stairs, standing from a chair or squatting",
          "Visible bow-leg or knock-knee deformity that has worsened",
          "Locking, giving way or grinding sensation in the knee",
          "Reduced walking distance — less than you managed a year ago",
          "Painkillers, physiotherapy and injections no longer helping",
          "Swelling that returns whenever you're active",
        ]}
      />

      <FAQBlock
        title="Frequently asked questions"
        items={[
          { q: "Is robotic knee replacement painful?", a: "Modern pain protocols — including nerve blocks, local infiltration and multimodal medication — mean most patients rate their pain 3/10 or lower after surgery. Discomfort settles quickly over the first two weeks." },
          { q: "How long will I be in hospital?", a: "Typically 2–3 nights. Some patients are discharged the next day if they live nearby, have good support at home and are progressing well with mobilisation." },
          { q: "When can I climb stairs and drive again?", a: "Stairs with support: within days. Independent stairs: usually 2–3 weeks. Driving (right knee): around 4 weeks; left knee (automatic car): 2 weeks, once you can react safely in an emergency." },
          { q: "Will I set off airport metal detectors?", a: "Modern implants are titanium and cobalt-chrome and may trigger sensitive scanners. You'll be given an implant card to carry when you travel." },
          { q: "Can both knees be done at the same time?", a: "Yes — bilateral (both) knee replacement in one anaesthesia is offered to fit patients. It means one recovery instead of two, but requires careful medical assessment." },
          { q: "How much does robotic knee replacement cost?", a: "Cost depends on hospital tier, implant choice, room category and insurance. Our team will share a clear estimate and help with cashless approvals before you commit." },
          { q: "How long does the implant last?", a: "In well-aligned, appropriately selected patients, 20+ years is the current expectation. Robotic precision meaningfully improves this longevity by reducing wear from mal-alignment." },
        ]}
      />
    </PageShell>
  );
}
