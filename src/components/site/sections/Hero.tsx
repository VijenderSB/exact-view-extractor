import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* ambient glows */}
      <div aria-hidden className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 60%)" }} />
      <div aria-hidden className="absolute -bottom-40 -right-20 h-[540px] w-[540px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, var(--teal), transparent 60%)" }} />

      <div className="container-page relative py-20 md:py-28 grid gap-14 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-teal" />
            Robotic-assisted surgical planning
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Advanced <span className="italic text-teal">Robotic Knee</span> &amp; <span className="italic text-teal">Hip Replacement</span> Surgery
          </h1>
          <p className="mt-6 text-lg opacity-85 leading-relaxed max-w-xl">
            Personalised evaluation, technology-assisted surgical planning and comprehensive recovery support for patients seeking advanced joint replacement care in Delhi NCR.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground font-medium px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 transition font-medium px-6 py-3.5">
              <Phone className="h-4 w-4" /> Request a Callback
            </a>
            <a href="#assessment" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 opacity-85 hover:opacity-100 px-3 py-2">
              Do I need joint replacement?
            </a>
          </div>

          <p className="mt-8 text-xs opacity-60 max-w-lg leading-relaxed">
            Robotic systems assist the surgeon with planning and precision — surgery is performed by Dr. L. Tomar, not by the robot.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10">
            <img
              src={heroImg.url}
              alt="Dr. L. Tomar with the VELYS robotic-assisted surgical system"
              width={1448}
              height={1086}
              className="w-full h-auto object-cover scale-y-[1.2]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.10_285/0.55)] via-transparent to-transparent" />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-background text-foreground p-5 pr-8 shadow-elegant">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-brand shrink-0" />
              <div>
                <div className="font-display text-3xl leading-none">Dr L Tomar</div>
                <div className="text-sm text-muted-foreground mt-1">Advanced Orthopaedic &amp; Joint Replacement Surgeon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
