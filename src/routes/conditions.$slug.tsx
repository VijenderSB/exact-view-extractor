import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { conditions, getCondition } from "@/data/conditions";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const condition = getCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Condition not found — Dr. L. Tomar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { condition } = loaderData;
    const title = `${condition.name} — Symptoms, Causes & Treatment | Dr. L. Tomar`;
    return {
      meta: [
        { title },
        { name: "description", content: condition.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: condition.tagline },
      ],
    };
  },
  notFoundComponent: ConditionNotFound,
  component: ConditionDetail,
});

function ConditionNotFound() {
  return (
    <PageShell>
      <section className="py-24">
        <div className="container-page text-center max-w-xl mx-auto">
          <h1 className="font-display text-3xl text-foreground">Condition not found</h1>
          <p className="mt-3 text-muted-foreground">
            The condition you were looking for doesn't exist. Browse all conditions we treat.
          </p>
          <Link
            to="/conditions"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-6 py-3 font-medium shadow-elegant"
          >
            <ArrowLeft className="h-4 w-4" />
            All conditions
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function ConditionDetail() {
  const { condition: c } = Route.useLoaderData();
  const Icon = c.icon;

  return (
    <PageShell>
      <PageHero
        eyebrow="Conditions Treated"
        title={c.name}
        description={c.tagline}
        image={heroImg.url}
        imageAlt="Dr. L. Tomar with the VELYS robotic surgical system"
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" />
            All conditions
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal/10 text-teal">
              <Icon className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h2 className="font-display text-3xl text-foreground">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{c.overview}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <DetailList title="Symptoms" items={c.symptoms} />
            <DetailList title="Causes & risk factors" items={c.causes} />
            <DetailList title="Treatment options" items={c.treatment} />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            {c.related && (
              <Link
                to={c.related.to}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-5 py-2.5 text-sm font-medium hover:bg-primary/5 transition"
              >
                {c.related.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-elegant hover:shadow-glow transition"
            >
              Discuss with Dr. Tomar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft border-y border-border">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">Other conditions we treat</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditions
              .filter((o) => o.slug !== c.slug)
              .slice(0, 6)
              .map((o) => (
                <Link
                  key={o.slug}
                  to="/conditions/$slug"
                  params={{ slug: o.slug }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <o.icon className="h-5 w-5 text-teal" />
                    <span className="text-foreground font-medium">{o.name}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-teal" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
