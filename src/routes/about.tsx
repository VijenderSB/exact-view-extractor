import { createFileRoute, Link } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-about.jpg";
import drTomarPortrait from "@/assets/dr-tomar-portrait.jpg";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Award, GraduationCap, Stethoscope, Users, Microscope, HeartPulse, Quote } from "lucide-react";
import { BookAppointmentDialog } from "@/components/site/BookAppointment";
import { FAQBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. L. Tomar — Robotic Joint Replacement Surgeon, Delhi NCR" },
      { name: "description", content: "Meet Dr. L. Tomar — orthopaedic surgeon with 25+ years of experience in robotic knee and hip replacement, delivering personalised, technology-assisted care in Delhi NCR." },
      { property: "og:title", content: "About Dr. L. Tomar — Robotic Joint Replacement Surgeon" },
      { property: "og:description", content: "25+ years of surgical experience, 5,000+ joint replacements, robotic-assisted precision." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { icon: GraduationCap, label: "MCh Orthopaedics — Dundee, UK", desc: "MCh Orthopaedics from University of Dundee, Scotland — a globally recognised centre for orthopaedic research." },
  { icon: GraduationCap, label: "MS Orthopaedics — LLRM, Meerut", desc: "MS in Orthopaedics from LLRM Medical College, Meerut University." },
  { icon: Microscope, label: "Fellowships FICS & FASIF (AO)", desc: "Fellow, International College of Surgeons (USA) and AO Alumni Association (Switzerland) — internal fixation & complex trauma." },
  { icon: Stethoscope, label: "24+ Years of Practice", desc: "Vice Chairman & Unit Head, Orthopaedics & Joint Replacement — Max Super Speciality Hospital, Patparganj, Delhi." },
  { icon: Users, label: "20,000+ Surgeries", desc: "Including 1,500+ hip & knee replacements and 2,000+ spine surgeries over a two-decade career." },
  { icon: Award, label: "Awards & Leadership", desc: "President-Elect, Delhi Orthopaedic Association 2025–26. Global Healthcare Excellence Award 2013 — Best Joint Replacement Surgeon, Delhi & NCR." },
];

const memberships = [
  "American Academy of Orthopaedic Surgeons",
  "AOSpine Asia Pacific",
  "AO Alumni Association, Switzerland",
  "International College of Surgeons, USA",
  "Indian Arthroplasty Association (EC – North Zone)",
  "Alumni Association, Dundee University, UK",
  "Asia Pacific Arthroplasty Society",
  "Indian Hip and Knee Surgeons Society",
  "Spine Surgeons of India",
  "Life Member — Indian Orthopaedic Association",
  "Delhi Medical Council — Reg. No. 14493",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Dr. L. Tomar — precision surgery, guided by decades of experience."
        description="Vice Chairman & Unit Head, Department of Orthopaedic & Joint Replacement at Max Super Speciality Hospital, Patparganj, Delhi. President-Elect, Delhi Orthopaedic Association 2025–26."
        image={bannerImg}
      />

      <section className="py-20">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">A surgeon dedicated to restoring mobility</h2>
            <p>
              Dr. L. Tomar has more than 24 years of experience in orthopaedics and is one of Delhi NCR's most established
              joint replacement surgeons. His practice is built around computer-navigated, minimally invasive surgery (MIS) —
              the latest advancement in joint replacement, making hip and knee replacement highly safe, reliable, precise
              and long-lasting for patients.
            </p>
            <p>
              Trained at LLRM Medical College, Meerut and later awarded an MCh in Orthopaedics from the University of Dundee, Scotland (UK),
              he further sharpened his skills at Ninewells Hospital and Perth Royal Infirmary — expanding into primary and revision
              joint replacement and minimally invasive computer-assisted navigation surgery.
            </p>
            <p>
              He holds fellowships FICS (International College of Surgeons, USA) and FASIF (AO Switzerland). He has collaborations
              with leading surgeons in the USA, Switzerland, Germany, UK and Australia, and frequently visits these institutions
              to bring the latest orthopaedic technology and technique to Indian patients.
            </p>
            <p>
              Approximately 20,000 surgeries — including 1,500+ hip and knee replacements and 2,000+ spine surgeries — testify
              to his experience. He has been honoured with the Global Healthcare Excellence Award (2013) for the Best Joint
              Replacement Surgeon in Delhi & NCR, and with Distinguished Service Awards from the Indian Medical Association.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] relative">
              <img
                src={drTomarPortrait}
                alt="Dr. L. Tomar — Senior Orthopaedic & Joint Replacement Surgeon, Delhi"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="rounded-3xl bg-gradient-brand text-primary-foreground p-8 shadow-elegant">
              <p className="text-xs uppercase tracking-[0.24em] opacity-80">At a glance</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-4xl">24+</div>
                  <div className="text-sm opacity-90 mt-1">Years experience</div>
                </div>
                <div>
                  <div className="font-display text-4xl">20,000+</div>
                  <div className="text-sm opacity-90 mt-1">Surgeries performed</div>
                </div>
                <div>
                  <div className="font-display text-4xl">1,500+</div>
                  <div className="text-sm opacity-90 mt-1">Hip & knee replacements</div>
                </div>
                <div>
                  <div className="font-display text-4xl">2,000+</div>
                  <div className="text-sm opacity-90 mt-1">Spine surgeries</div>
                </div>
              </div>
              <BookAppointmentDialog>
                <button className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-background/15 hover:bg-background/25 transition px-5 py-3 text-sm font-medium">
                  Book a personal consultation
                </button>
              </BookAppointmentDialog>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Credentials</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Training, expertise and recognition</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-lg text-foreground">{label}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-card border border-border p-8 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Professional memberships</p>
            <h3 className="mt-2 font-display text-2xl text-foreground">Member of leading orthopaedic institutions</h3>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-muted-foreground">
              {memberships.map((m) => (
                <li key={m} className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Credentials</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Training, expertise and philosophy</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-lg text-foreground">{label}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Philosophy of care</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">How we practise, and why it matters to you</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Surgery is the last option, not the first.", desc: "Physiotherapy, weight management, medication and injections come first. Surgery is offered only when it will genuinely change your life." },
              { title: "One surgeon, from first visit to full recovery.", desc: "You'll see Dr. Tomar personally at every consultation — before, during and long after surgery. Continuity is not delegated." },
              { title: "Honest conversations, in your language.", desc: "Consultations happen in English, Hindi and Punjabi. Complex ideas are explained with diagrams, models and plain words." },
              { title: "Technology used with judgement.", desc: "Robotic assistance is used because it improves outcomes — not because it's fashionable. Where classical technique is better, we use it." },
              { title: "Family involved, not sidelined.", desc: "Spouses, adult children and caregivers are part of the discussion. Recovery works best when the household is prepared." },
              { title: "Long-term follow-up as standard.", desc: "Every joint replacement patient stays under review for years — because a great implant deserves great long-term care." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="font-display text-lg text-foreground">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {[
            { name: "Rajeev S., 62", city: "Delhi", quote: "I had put off my knee surgery for years out of fear. Dr. Tomar explained every step in Hindi, and I was walking up my own stairs in two weeks." },
            { name: "Meera K., 55", city: "Chandigarh (outstation)", quote: "I travelled from Chandigarh for the robotic hip. The clinic coordinated my stay, physiotherapy and follow-ups over video. It felt effortless." },
            { name: "Vikram P., 48", city: "Gurgaon", quote: "ACL reconstruction after a football injury. Nine months later, I was back on the pitch — stronger, and with a proper rehab plan I actually stuck to." },
          ].map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <Quote className="h-6 w-6 text-primary/70" />
              <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
              <footer className="mt-6 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">{t.name}</div>
                <div>{t.city}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <FAQBlock
        title="About Dr. Tomar — what patients often ask first"
        items={[
          { q: "Does Dr. Tomar personally perform every surgery?", a: "Yes. Every joint replacement, arthroscopy and revision surgery is performed personally by Dr. Tomar — not delegated to a trainee or assistant." },
          { q: "Which hospitals does he operate at?", a: "He operates at partner hospitals across Delhi NCR — including facilities in South Delhi, Gurgaon and Noida — chosen for surgical infrastructure, ICU quality and physiotherapy support." },
          { q: "Do you take second-opinion consultations?", a: "Absolutely. A significant part of our practice is helping patients avoid unnecessary surgery, or refining a plan they've been given elsewhere." },
          { q: "Can I consult over video?", a: "Yes — video consultations are available for review visits, second opinions and follow-ups. First consultations for surgery are preferably in person." },
          { q: "Do you support outstation and international patients?", a: "Yes. The team coordinates travel, accommodation, hospital admission, cashless approvals and remote follow-ups for patients from across India and abroad." },
        ]}
      />

      <section className="py-20">

        <div className="container-page grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Explore</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Where would you like to go next?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg">Learn about the specific procedures Dr. Tomar performs, or read patient resources to prepare for your visit.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link to="/robotic-knee" className="rounded-2xl border border-border p-5 hover:border-primary transition group">
              <div className="font-display text-lg text-foreground group-hover:text-primary transition">Robotic Knee →</div>
              <p className="mt-2 text-sm text-muted-foreground">Precision knee replacement.</p>
            </Link>
            <Link to="/robotic-hip" className="rounded-2xl border border-border p-5 hover:border-primary transition group">
              <div className="font-display text-lg text-foreground group-hover:text-primary transition">Robotic Hip →</div>
              <p className="mt-2 text-sm text-muted-foreground">Anatomy-matched hip surgery.</p>
            </Link>
            <Link to="/patient-resources" className="rounded-2xl border border-border p-5 hover:border-primary transition group">
              <div className="font-display text-lg text-foreground group-hover:text-primary transition">Patient Resources →</div>
              <p className="mt-2 text-sm text-muted-foreground">Guides, FAQs, recovery tips.</p>
            </Link>
            <Link to="/contact" className="rounded-2xl border border-border p-5 hover:border-primary transition group">
              <div className="font-display text-lg text-foreground group-hover:text-primary transition">Contact →</div>
              <p className="mt-2 text-sm text-muted-foreground">Reach the clinic team.</p>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
