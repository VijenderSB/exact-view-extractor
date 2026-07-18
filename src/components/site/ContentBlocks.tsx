import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem { q: string; a: string }

export function FAQBlock({ eyebrow = "Questions patients ask", title, items }: { eyebrow?: string; title: string; items: FAQItem[] }) {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-page max-w-4xl">
        <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">{title}</h2>
        <Accordion type="single" collapsible className="mt-10">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function MythFactBlock({ title = "Myths vs. facts", items }: { title?: string; items: { myth: string; fact: string }[] }) {
  return (
    <section className="py-20 bg-gradient-soft border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Clearing the air</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground">A lot of what patients hear about joint surgery is outdated. Here's the reality.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <div className="flex gap-3 items-start">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Myth</div>
                  <div className="mt-1 text-foreground">{it.myth}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-teal">Fact</div>
                  <div className="mt-1 text-foreground">{it.fact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TimelineBlock({ title, subtitle, steps }: { title: string; subtitle?: string; steps: { when: string; label: string; desc: string }[] }) {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Recovery journey</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        <ol className="mt-12 relative border-l border-border pl-6 space-y-8">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[34px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-[10px] font-medium">{i + 1}</span>
              <div className="text-xs uppercase tracking-wider text-teal font-medium">{s.when}</div>
              <div className="mt-1 font-display text-lg text-foreground">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function RedFlagsBlock({ title = "When to see a specialist", items }: { title?: string; items: string[] }) {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-page grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground">Joint pain is common — but some signs mean it's time to stop self-managing and get expert evaluation.</p>
        </div>
        <ul className="lg:col-span-7 grid gap-3">
          {items.map((t) => (
            <li key={t} className="flex gap-3 items-start rounded-xl bg-card border border-border px-4 py-3">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
              <span className="text-sm text-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
