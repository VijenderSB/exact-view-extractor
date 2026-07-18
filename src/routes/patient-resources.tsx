import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FileText, HelpCircle, HeartPulse, Download, ClipboardCheck, Users } from "lucide-react";
import { FAQBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/patient-resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources — Dr. L. Tomar" },
      { name: "description", content: "Pre-surgery guides, recovery timelines, exercise videos, insurance help and FAQs to prepare you for your joint replacement or arthroscopic procedure." },
      { property: "og:title", content: "Patient Resources — Dr. L. Tomar" },
      { property: "og:description", content: "Guides, checklists, recovery plans and FAQs for every step of your journey." },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  { icon: FileText, title: "Pre-surgery guide", desc: "What to expect in the week before your procedure — diet, medication, tests and paperwork." },
  { icon: HeartPulse, title: "Recovery timeline", desc: "Day-by-day and week-by-week milestones after knee or hip replacement." },
  { icon: ClipboardCheck, title: "Exercise programs", desc: "Physiotherapy protocols and home exercises curated for each stage of recovery." },
  { icon: Download, title: "Downloadable checklists", desc: "Hospital packing lists, medication charts and discharge planning documents." },
  { icon: Users, title: "For family & caregivers", desc: "How to support a loved one through surgery, rehabilitation and daily activities." },
  { icon: HelpCircle, title: "Insurance & billing", desc: "Guidance on insurance approvals, cashless procedures and out-of-pocket estimates." },
];

function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Patient Resources"
        title="Everything you need — from your first question to your full recovery."
        description="A well-prepared patient recovers faster. These guides, checklists and answers are designed to keep you informed, confident and in control throughout your journey."
      />

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 font-display text-lg text-foreground">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Before surgery</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">How to prepare in the two weeks before your procedure</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { h: "Get medically optimised", p: "Blood tests, ECG and a pre-anaesthesia review. If you have diabetes, blood pressure or heart conditions, these are tuned for surgery." },
              { h: "Adjust your medication", p: "Blood thinners, some diabetes and arthritis medications need to be paused. Our team gives you a written plan — never stop anything on your own." },
              { h: "Prepare your home", p: "Clear walkways, put daily items at waist height, arrange a firm chair with arms, and set up a well-lit path to the bathroom." },
              { h: "Arrange a helper", p: "You'll need a family member or attendant with you for the hospital stay and the first 1–2 weeks at home." },
              { h: "Stop smoking and limit alcohol", p: "Even a few weeks of not smoking dramatically improves wound healing and reduces chest complications." },
              { h: "Pack smart for the hospital", p: "Loose clothing, non-slip footwear, phone charger, essential medicines, and a copy of all reports." },
            ].map((r) => (
              <div key={r.h} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="font-display text-lg text-foreground">{r.h}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Recovery basics</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Golden rules for a smooth recovery</h2>
            <p className="mt-4 text-muted-foreground">These simple habits make the biggest difference to how quickly and completely you get back to your life.</p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Do your physiotherapy exercises every single day — little and often beats occasional intense sessions.",
              "Ice the joint for 15 minutes, 3–4 times a day, for the first two weeks.",
              "Walk short distances frequently rather than one long walk. Little walks build stamina safely.",
              "Take pain medication on schedule for the first week — not just when it hurts.",
              "Drink plenty of water and eat protein-rich meals to help tissues heal.",
              "Sleep with a pillow between the knees (hip surgery) or under the ankle (knee surgery), not under the knee.",
              "Attend every follow-up appointment, even when you feel fine.",
              "Call us early if something feels wrong — we would much rather reassure you than treat a late complication.",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start rounded-xl bg-card border border-border px-4 py-3">
                <ClipboardCheck className="h-4 w-4 text-teal shrink-0 mt-1" />
                <span className="text-sm text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Insurance & finance</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Simple, transparent, cashless where possible</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most joint replacements and arthroscopies are covered by Indian health insurance and by major TPAs. Our team submits pre-authorisation
              paperwork, follows up with your insurer and gives you a clear written estimate before you commit — so there are no surprises on discharge day.
            </p>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Cashless empanelment with major insurers and TPAs at partner hospitals",
              "Written cost estimate covering surgeon, hospital, implant and physiotherapy",
              "Support for CGHS, ECHS and corporate group plans",
              "EMI options through partner banks for uncovered portions",
              "Transparent implant pricing — you know exactly what is being used",
              "Detailed final bill breakdown at discharge",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start rounded-xl bg-card border border-border px-4 py-3">
                <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQBlock
        title="Patient resources — general FAQs"
        items={[
          { q: "How long before surgery should I stop eating?", a: "Solid food: 6 hours before surgery. Clear fluids (water, black tea): usually allowed up to 2 hours before, unless told otherwise by your anaesthetist." },
          { q: "Can I continue my regular medicines?", a: "Most are continued with a sip of water on the morning of surgery. Blood thinners, diabetes tablets and some arthritis medications need adjustment — you'll get a personalised list." },
          { q: "Will I need someone with me in the hospital?", a: "Yes. One attendant stays with you throughout admission and helps with initial home recovery. We prefer someone who can lift lightly and follow simple instructions." },
          { q: "How soon can I bathe after surgery?", a: "Showering (with the wound covered) is usually allowed after 48 hours. Immersion in bathtubs, pools and rivers waits until the wound is fully healed — around 3 weeks." },
          { q: "When should I call the clinic urgently?", a: "Fever above 101°F, calf pain or swelling, chest pain or breathlessness, wound discharge, or a fall on the operated joint — call us immediately at any hour." },
          { q: "Do you offer physiotherapy at home?", a: "Yes — we coordinate home physiotherapy through vetted partners for the first 2–4 weeks, plus tele-physio follow-ups for outstation patients." },
        ]}
      />
    </PageShell>
  );

}
