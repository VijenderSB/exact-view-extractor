import { Plane, MessageCircle, Video, HeartPulse } from "lucide-react";

const regions = ["Delhi NCR", "West Uttar Pradesh", "Haryana", "Uttarakhand", "Other regions"];
const services = [
  { icon: Video, title: "Video consultation", text: "Initial symptom discussion and imaging review, wherever you are." },
  { icon: MessageCircle, title: "WhatsApp enquiry", text: "Share reports and get a quick response from the care team." },
  { icon: Plane, title: "Travel planning", text: "Admission, attendant planning and follow-up support for outstation patients." },
  { icon: HeartPulse, title: "Rehabilitation", text: "Structured physiotherapy protocols you can continue back home." },
];

export function Outstation() {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden relative">
      <div aria-hidden className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, var(--teal), transparent 60%)" }} />
      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Outstation patients</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Travelling to Delhi for advanced knee or hip replacement care?
            </h2>
            <p className="mt-5 opacity-85 leading-relaxed">
              We support patients from across North India with a streamlined pathway — from first enquiry through surgery, discharge and long-term follow-up.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r} className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium">
                  {r}
                </span>
              ))}
            </div>

            <a href="#book" className="mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground font-medium px-6 py-3.5 shadow-glow hover:translate-y-[-1px] transition">
              Plan an Outstation Consultation
            </a>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-teal-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm opacity-80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
