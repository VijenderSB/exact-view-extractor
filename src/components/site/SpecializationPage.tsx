import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import type { ComponentType } from "react";

interface SpecializationPageProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent?: "primary" | "teal";
  overview: string[];
  procedures: string[];
  relatedLabel?: string;
  related?: { label: string; to: string }[];
  image?: string;
  imageAlt?: string;
}

export function SpecializationPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  accent = "primary",
  overview,
  procedures,
  relatedLabel = "Explore related care",
  related = [],
  image,
  imageAlt,
}: SpecializationPageProps) {
  const accentBg = accent === "primary" ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";
  const accentDot = accent === "primary" ? "text-primary" : "text-teal";

  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} description={description} image={image} imageAlt={imageAlt} />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accentBg}`}>
              <Icon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 font-display text-3xl text-foreground">What this covers</h2>
            <ul className="mt-6 space-y-3">
              {overview.map((line) => (
                <li key={line} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className={`h-5 w-5 mt-0.5 shrink-0 ${accentDot}`} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-foreground">Procedures &amp; treatments</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A representative list of the surgeries, reconstructions and interventions offered under this specialty.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {procedures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <CheckCircle2 className={`h-5 w-5 mt-0.5 shrink-0 ${accentDot}`} />
                  <span className="text-sm text-foreground leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gradient-soft border-y border-border">
          <div className="container-page">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">{relatedLabel}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.to + r.label}
                  to={r.to}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <span className="text-foreground font-medium">{r.label}</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Discuss your case with Dr. Tomar</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Share your reports or symptoms. You'll receive a clear, unhurried opinion — surgical or non-surgical.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-medium px-7 py-3.5 shadow-elegant hover:shadow-glow transition"
          >
            Request an evaluation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
