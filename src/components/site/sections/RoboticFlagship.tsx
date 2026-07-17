import kneeImg from "@/assets/robotic-knee.jpg";
import hipImg from "@/assets/robotic-hip.jpg";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const knee = [
  "Patient-specific 3D planning",
  "Precise joint alignment",
  "Accurate implant positioning",
  "Ligament balancing in real time",
];
const hip = [
  "CT-based preoperative planning",
  "Component positioning accuracy",
  "Leg-length restoration",
  "Improved stability considerations",
];

export function RoboticFlagship() {
  return (
    <section className="py-24 container-page">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Flagship care</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
          Robotic joint replacement, guided by <span className="text-gradient-brand">surgical precision</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Robotic systems support Dr. Tomar with imaging-driven planning and intraoperative precision. The surgeon remains fully in control at every step.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {[
          { title: "Robotic Knee Replacement", desc: "Total and partial knee replacement with individualised alignment and ligament balancing.", img: kneeImg, list: knee, alt: "Robotic knee replacement visualisation" },
          { title: "Robotic Hip Replacement", desc: "Anterior and posterior approaches with precise component positioning and leg-length planning.", img: hipImg, list: hip, alt: "Robotic hip replacement visualisation" },
        ].map((c) => (
          <article key={c.title} className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={c.img} alt={c.alt} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.06_285/0.65)] via-transparent to-transparent" />
            </div>
            <div className="p-7 md:p-8">
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
              <ul className="mt-6 grid gap-2.5">
                {c.list.map((li) => (
                  <li key={li} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4.5 w-4.5 mt-0.5 text-teal shrink-0" />
                    <span className="text-foreground/85">{li}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition">
                Learn about this procedure <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground font-medium px-7 py-3.5 shadow-elegant hover:shadow-glow transition">
          Explore Robotic Joint Replacement <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
