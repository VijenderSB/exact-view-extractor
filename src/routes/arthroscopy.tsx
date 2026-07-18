import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-arthroscopy.jpg";
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
    <PageShell testimonials={testimonialsByTopic["arthroscopy"]} testimonialsTitle="Arthroscopy — patient stories">
      <PageHero
        eyebrow="Arthroscopy & Sports Injury"
        title="Keyhole surgery for the active life."
        description="Arthroscopy uses tiny incisions and a high-definition camera to diagnose and treat joint problems with minimal disruption — smaller scars, less pain, and a faster return to sport, work and everyday movement."
      image={bannerImg}
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

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">What actually happens in an arthroscopy?</h2>
            <p>
              Arthroscopy is a day-care surgery performed through two or three tiny incisions — each just 5–8 millimetres long. A pencil-thin camera
              (the arthroscope) is inserted into the joint and projects a high-definition view of the inside of your knee or shoulder onto a screen.
            </p>
            <p>
              Using fine instruments through the other incisions, the surgeon can repair torn ligaments, trim damaged cartilage, fix meniscus injuries, remove
              loose fragments and stabilise dislocating joints — all without opening the joint in the traditional sense.
            </p>
            <p>
              Because the surrounding muscles, ligaments and skin are barely disturbed, arthroscopy typically means less pain, minimal scarring, and a return to
              daily life measured in weeks rather than months.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-card border border-border shadow-card p-8">
              <h3 className="font-display text-xl text-foreground">Typical day of surgery</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>• Admission in the morning, fasting from midnight</li>
                <li>• Spinal or regional anaesthesia for the leg / general for the shoulder</li>
                <li>• Surgery duration: 30–90 minutes depending on the procedure</li>
                <li>• Recovery in the ward, first meal within a few hours</li>
                <li>• Discharge the same evening or next morning</li>
                <li>• Follow-up in 5–7 days for wound check and physiotherapy plan</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <TimelineBlock
        title="Recovery after arthroscopy"
        subtitle="Timelines vary by procedure — a simple meniscus trim recovers faster than an ACL reconstruction — but the arc is broadly similar."
        steps={[
          { when: "Day 0", label: "Same-day discharge", desc: "Home the same evening in most cases, walking with support, small dressings covering the incisions." },
          { when: "Week 1", label: "Rest & elevation", desc: "Ice, elevation and gentle range-of-motion exercises. Pain typically settles quickly with oral medication." },
          { when: "Week 2–4", label: "Physiotherapy phase", desc: "Structured strengthening, balance work and gradual weight-bearing. Desk work usually resumes in this window." },
          { when: "Week 6–12", label: "Return to sport prep", desc: "Sport-specific drills, cutting, jumping and running programmes for athletes. Non-contact sport around week 8–12." },
          { when: "4–9 months", label: "Full return to sport", desc: "For ACL reconstruction: full pivot-and-contact sport around 9 months, once strength and neuromuscular control are objectively tested." },
        ]}
      />

      <MythFactBlock
        title="Arthroscopy — myths patients still believe"
        items={[
          { myth: "It's not 'real' surgery — just a small procedure.", fact: "Arthroscopy is precise, image-guided surgery that requires just as much skill as an open procedure. The incisions are smaller, but the work inside the joint is real reconstructive surgery." },
          { myth: "A torn meniscus should always be removed.", fact: "Modern practice preserves as much meniscus as possible — repairing rather than removing whenever feasible. The meniscus protects the knee from arthritis for decades to come." },
          { myth: "ACL surgery means my career in sport is over.", fact: "Elite and recreational athletes routinely return to their sport after ACL reconstruction — often stronger than before, thanks to structured rehabilitation." },
          { myth: "If it's a keyhole surgery, I can skip physiotherapy.", fact: "Physiotherapy is where the outcome is actually built. Skipping it is the single biggest reason arthroscopy patients feel disappointed." },
        ]}
      />

      <RedFlagsBlock
        title="When to consider arthroscopic assessment"
        items={[
          "A knee or shoulder that locks, catches or gives way",
          "A twisting injury followed by swelling within a few hours",
          "Repeated shoulder dislocations — even minor ones",
          "Persistent pain after a sports injury that hasn't settled in 6 weeks",
          "Difficulty lifting the arm overhead or reaching behind the back",
          "Clicking or grinding that limits your activity or sleep",
        ]}
      />

      <FAQBlock
        title="Arthroscopy — questions patients ask"
        items={[
          { q: "Will I need general anaesthesia?", a: "For the knee, spinal anaesthesia is common — you're awake but comfortable, and the leg is numb. For the shoulder, general anaesthesia with a nerve block is typical." },
          { q: "How soon can I walk after knee arthroscopy?", a: "Almost immediately, with support. For simple meniscal or cartilage surgery, full weight-bearing is usually allowed on day one. ACL reconstruction has a slightly more structured protocol." },
          { q: "Will there be visible scars?", a: "Only tiny punctate scars — often 5–8 mm each — that fade significantly over 6–12 months." },
          { q: "How long before I can drive?", a: "Simple knee arthroscopy: 3–7 days. ACL reconstruction (right leg): around 4–6 weeks. Shoulder arthroscopy: 2–3 weeks, once out of the sling." },
          { q: "Is arthroscopy covered by insurance?", a: "Yes — arthroscopic procedures are covered by most Indian health insurance policies. Our team helps with pre-authorisation and cashless approvals." },
          { q: "What happens if I ignore a meniscus tear?", a: "A neglected meniscus tear can enlarge, cause recurrent locking, and lead to early cartilage damage and arthritis. Early treatment protects the joint long-term." },
        ]}
      />
    </PageShell>
  );
}
