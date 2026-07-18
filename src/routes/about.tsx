import { createFileRoute, Link } from "@tanstack/react-router";
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
  { icon: GraduationCap, label: "MBBS, MS (Orthopaedics)", desc: "Trained at premier Indian institutions with international fellowships." },
  { icon: Stethoscope, label: "25+ Years of Practice", desc: "Focused on joint reconstruction, arthroplasty and sports injuries." },
  { icon: Microscope, label: "Robotic Surgery Certified", desc: "Trained on leading robotic platforms for knee and hip replacement." },
  { icon: Users, label: "5,000+ Procedures", desc: "Long-standing outcomes with patients from across India and abroad." },
  { icon: Award, label: "Recognitions", desc: "Speaker at national and international orthopaedic conferences." },
  { icon: HeartPulse, label: "Patient-First Ethic", desc: "Surgery only when truly needed — conservative care always considered first." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Precision surgery, guided by decades of experience."
        description="Dr. L. Tomar combines classical orthopaedic training with modern robotic technology to deliver joint replacement outcomes that patients trust — with a strong belief that the right surgery, at the right time, changes lives."
      />

      <section className="py-20">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">A surgeon dedicated to restoring mobility</h2>
            <p>
              With over two decades of experience in orthopaedic surgery, Dr. L. Tomar has helped thousands of patients regain movement,
              confidence and independence. His approach is unhurried, evidence-based and centred on the patient — because every joint,
              every anatomy and every lifestyle is different.
            </p>
            <p>
              A strong proponent of robotic-assisted arthroplasty, Dr. Tomar uses computer-guided planning and intra-operative
              precision to align implants to each patient's unique bone anatomy. The result: smaller incisions, more natural knee kinematics,
              faster rehabilitation and long-lasting outcomes.
            </p>
            <p>
              Beyond the operating theatre, he is known for spending time educating patients and families, discussing every non-surgical option
              first, and stepping in with surgery only when it is genuinely the best path forward.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-brand text-primary-foreground p-8 shadow-elegant">
              <p className="text-xs uppercase tracking-[0.24em] opacity-80">At a glance</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-4xl">25+</div>
                  <div className="text-sm opacity-90 mt-1">Years experience</div>
                </div>
                <div>
                  <div className="font-display text-4xl">5,000+</div>
                  <div className="text-sm opacity-90 mt-1">Joint replacements</div>
                </div>
                <div>
                  <div className="font-display text-4xl">98%</div>
                  <div className="text-sm opacity-90 mt-1">Patient satisfaction</div>
                </div>
                <div>
                  <div className="font-display text-4xl">30+</div>
                  <div className="text-sm opacity-90 mt-1">Cities served</div>
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
