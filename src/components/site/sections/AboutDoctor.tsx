import { GraduationCap, Award, Building2, HeartPulse, ArrowUpRight } from "lucide-react";

const points = [
  { icon: GraduationCap, title: "Qualifications", text: "MBBS, MS Orthopaedics, MCh with sub-specialty fellowship training in joint replacement." },
  { icon: Award, title: "Clinical Focus", text: "Robotic knee and hip replacement, complex and revision joint surgery, arthroscopy." },
  { icon: Building2, title: "Hospital Association", text: "Consultant at leading multi-specialty hospitals across Delhi NCR." },
  { icon: HeartPulse, title: "Care Philosophy", text: "Non-surgical options considered first. Surgery recommended only when clearly indicated." },
];

export function AboutDoctor() {
  return (
    <section className="py-24 container-page">
      <div className="grid gap-14 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elegant">
            <div className="absolute inset-0 bg-gradient-brand" />
            <div className="absolute inset-0 opacity-90" style={{ background: "radial-gradient(120% 80% at 30% 20%, transparent, oklch(0.18 0.06 285 / 0.7))" }} />
            <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">Consultant Orthopaedic Surgeon</p>
              <p className="mt-3 font-display text-3xl">Dr. L. Tomar</p>
              <p className="mt-2 text-sm opacity-85 max-w-xs">Robotic joint replacement, complex reconstruction & sports orthopaedics.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">About the surgeon</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            Two decades dedicated to <span className="text-gradient-brand">joint replacement excellence</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Dr. L. Tomar is a senior orthopaedic surgeon with focused expertise in robotic knee and hip replacement. His practice is built around individualised evaluation, evidence-led decisions and clear patient communication.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border p-5 bg-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <a href="#" className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition">
            Read full profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
