import heroImg from "@/assets/hero-robotic-v3.png.asset.json";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] text-primary-foreground bg-[#050a14]">
      {/* full-bleed background image - shown uncropped and unstretched */}
      <img
        src={heroImg.url}
        alt="VELYS robotic-assisted surgical system performing knee surgery with Dr. L. Tomar"
        width={1774}
        height={887}
        className="absolute inset-0 h-full w-full object-contain"
      />
      {/* dark overlay for readability - tuned to the image's deep blue-teal palette */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.06_255/0.96)] via-[oklch(0.16_0.07_265/0.78)] to-[oklch(0.18_0.08_285/0.35)]"
      />

      <div className="container-page relative z-10 flex items-center min-h-[600px] lg:min-h-[700px] py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-teal" />
            Robotic-assisted surgical planning
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Advanced <span className="italic text-teal">Robotic Knee</span> &amp; <span className="italic text-teal">Hip Replacement</span> Surgery
          </h1>
          <p className="mt-6 text-lg opacity-90 leading-relaxed max-w-xl">
            Personalised evaluation, technology-assisted surgical planning and comprehensive recovery support for patients seeking advanced joint replacement care in Delhi NCR.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground font-medium px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 transition font-medium px-6 py-3.5">
              <Phone className="h-4 w-4" /> Request a Callback
            </a>
            <a href="#assessment" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 opacity-90 hover:opacity-100 px-3 py-2">
              Do I need joint replacement?
            </a>
          </div>

          <p className="mt-8 text-xs opacity-70 max-w-lg leading-relaxed">
            Robotic systems assist the surgeon with planning and precision — surgery is performed by Dr. L. Tomar, not by the robot.
          </p>
        </div>

        {/* floating badge */}
        <div className="hidden sm:flex absolute bottom-8 right-8 rounded-2xl bg-background text-foreground p-5 pr-8 shadow-elegant">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-brand shrink-0" />
            <div>
              <div className="font-display text-3xl leading-none">Dr L Tomar</div>
              <div className="text-sm text-muted-foreground mt-1">Advanced Orthopaedic &amp; Joint Replacement Surgeon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
