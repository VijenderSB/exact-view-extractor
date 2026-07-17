import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="book" className="py-24 container-page">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-primary-foreground p-10 md:p-16 shadow-elegant">
        <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, var(--teal), transparent 60%)" }} />
        <div className="relative grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Next step</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Take the next step towards better joint mobility
            </h2>
            <p className="mt-5 opacity-85 max-w-lg leading-relaxed">
              Book a consultation, request a callback or reach us on WhatsApp — we'll help you understand your options clearly, before any decisions are made.
            </p>
          </div>
          <div className="lg:col-span-5 grid gap-3">
            <a href="#" className="flex items-center justify-between rounded-2xl bg-background text-foreground px-6 py-4 hover:translate-y-[-1px] transition shadow-glow">
              <span className="inline-flex items-center gap-3 font-medium"><Calendar className="h-5 w-5 text-primary" /> Book Appointment</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+911234567890" className="flex items-center justify-between rounded-2xl border border-white/25 hover:bg-white/10 transition px-6 py-4">
              <span className="inline-flex items-center gap-3 font-medium"><Phone className="h-5 w-5" /> Call the clinic</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/911234567890" className="flex items-center justify-between rounded-2xl border border-white/25 hover:bg-white/10 transition px-6 py-4">
              <span className="inline-flex items-center gap-3 font-medium"><MessageCircle className="h-5 w-5" /> WhatsApp us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
