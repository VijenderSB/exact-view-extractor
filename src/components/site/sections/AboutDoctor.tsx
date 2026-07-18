import { GraduationCap, Award, Building2, HeartPulse, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import drTomarPortrait from "@/assets/dr-tomar-portrait.jpg";

const points = [
  { icon: GraduationCap, title: "Qualifications", text: "MBBS, MS (Ortho), MCh Orthopaedics — University of Dundee, Scotland, UK. Fellowships FICS (USA) & FASIF (AO Switzerland)." },
  { icon: Award, title: "Clinical Focus", text: "Robotic & computer-navigated knee and hip replacement, complex primary and revision arthroplasty, spine surgery." },
  { icon: Building2, title: "Hospital Association", text: "Vice Chairman & Unit Head, Orthopaedic & Joint Replacement, Max Super Speciality Hospital, Patparganj, Delhi." },
  { icon: HeartPulse, title: "Care Philosophy", text: "Non-surgical options first. Surgery recommended only when clearly indicated — with full patient understanding." },
];

export function AboutDoctor() {
  return (
    <section className="py-24 container-page">
      <div className="grid gap-14 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elegant">
            <img
              src={drTomarPortrait}
              alt="Dr. L. Tomar — Senior Orthopaedic & Joint Replacement Surgeon, Delhi"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.06_285/0.85)] via-[oklch(0.22_0.08_285/0.35)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.2em] opacity-85">Vice Chairman, Orthopaedics — Max Patparganj</p>
              <p className="mt-3 font-display text-3xl">Dr. L. Tomar</p>
              <p className="mt-2 text-sm opacity-90 max-w-xs">MS, MCh (Dundee, UK) · FICS (USA) · FASIF (AO Switzerland)</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">About the surgeon</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            24+ years dedicated to <span className="text-gradient-brand">joint replacement excellence</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Dr. L. Tomar is Vice Chairman & Unit Head of the Department of Orthopaedic & Joint Replacement at Max Super Speciality Hospital, Patparganj, Delhi.
            President-Elect of the Delhi Orthopaedic Association (2025–26), with more than 20,000 surgeries — including 1,500+ hip and knee replacements — his practice is anchored in computer-navigated, minimally invasive joint replacement.
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

          <Link to="/about" className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition">
            Read full profile <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

