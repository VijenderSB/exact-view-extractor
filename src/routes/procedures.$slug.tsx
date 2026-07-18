import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Activity, Clock } from "lucide-react";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FAQBlock } from "@/components/site/ContentBlocks";
import { procedures, getProcedure, proceduresByCategory } from "@/data/procedures";
import { testimonialsByTopic } from "@/data/testimonials";

export const Route = createFileRoute("/procedures/$slug")({
  loader: ({ params }) => {
    const procedure = getProcedure(params.slug);
    if (!procedure) throw notFound();
    return { procedure };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Procedure not found — Dr. L. Tomar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { procedure } = loaderData;
    const title = `${procedure.name} — Procedure, Recovery & FAQs | Dr. L. Tomar`;
    return {
      meta: [
        { title },
        { name: "description", content: procedure.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: procedure.tagline },
      ],
    };
  },
  notFoundComponent: ProcedureNotFound,
  component: ProcedureDetail,
});

function ProcedureNotFound() {
  return (
    <PageShell>
      <section className="py-24">
        <div className="container-page text-center max-w-xl mx-auto">
          <h1 className="font-display text-3xl text-foreground">Procedure not found</h1>
          <p className="mt-3 text-muted-foreground">
            The procedure you were looking for doesn't exist. Browse all specializations.
          </p>
          <Link
            to="/specializations"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-6 py-3 font-medium shadow-elegant"
          >
            <ArrowLeft className="h-4 w-4" />
            All specializations
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function ProcedureDetail() {
  const { procedure: p } = Route.useLoaderData();
  const related = proceduresByCategory(p.category)
    .filter((o) => o.slug !== p.slug)
    .slice(0, 6);

  return (
    <PageShell
      testimonials={testimonialsByTopic[p.testimonialTopic]}
      testimonialsTitle={`Patient stories — ${p.category}`}
    >
      <PageHero
        eyebrow={p.category}
        title={p.name}
        description={p.tagline}
        image={heroImg.url}
        imageAlt={p.name}
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <Link
            to="/specializations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" />
            All specializations
          </Link>

          <div className="mt-8 max-w-3xl">
            <h2 className="font-display text-3xl text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{p.overview}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <DetailCard icon={Activity} title="When it's recommended" items={p.indications} accent="primary" />
            <DetailCard icon={Sparkles} title="Key benefits" items={p.benefits} accent="teal" />
            <DetailCard icon={ShieldCheck} title="Surgical approach" items={p.approach} accent="teal" />
            <DetailCard icon={Clock} title="Recovery timeline" items={p.recovery} accent="primary" />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-elegant hover:shadow-glow transition"
            >
              Discuss with Dr. Tomar
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/specializations"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-5 py-2.5 text-sm font-medium hover:bg-primary/5 transition"
            >
              Explore all specializations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gradient-soft border-y border-border">
          <div className="container-page">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Related {p.category} procedures
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((o) => (
                <Link
                  key={o.slug}
                  to="/procedures/$slug"
                  params={{ slug: o.slug }}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <div>
                    <div className="text-foreground font-medium">{o.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{o.tagline}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQBlock
        eyebrow={`About ${p.name}`}
        title="Frequently asked questions"
        items={p.faqs}
      />
    </PageShell>
  );
}

function DetailCard({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  accent: "primary" | "teal";
}) {
  const accentBg = accent === "primary" ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";
  const dot = accent === "primary" ? "text-primary" : "text-teal";
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accentBg}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg text-foreground">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${dot}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ensure tree-shake keeps the data import used
export const _all = procedures;
