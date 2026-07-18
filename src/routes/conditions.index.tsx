import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { conditions } from "@/data/conditions";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Orthopaedic Conditions Treated — Dr. L. Tomar" },
      {
        name: "description",
        content:
          "Explore conditions treated by Dr. L. Tomar — arthritis, AVN, sports injuries, ligament and cartilage damage, frozen shoulder, tennis elbow, joint deformity, stiffness and trauma.",
      },
      { property: "og:title", content: "Orthopaedic Conditions Treated — Dr. L. Tomar" },
      {
        property: "og:description",
        content: "A clear guide to the bone and joint conditions we diagnose and treat.",
      },
    ],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Conditions Treated"
        title="Understand your condition — then choose the right treatment."
        description="A clear diagnosis is half the cure. Select a condition to learn about symptoms, causes and the treatment pathway Dr. Tomar recommends."
        image={heroImg.url}
        imageAlt="Dr. L. Tomar with the VELYS robotic surgical system"
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">All conditions</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
            Each page includes an overview, common symptoms, causes and the full range of non-surgical and
            surgical treatment options.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <Link
                key={c.slug}
                to="/conditions/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{c.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft border-t border-border">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Not sure which condition applies to you?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Share your symptoms and existing reports. You'll receive an unhurried, honest opinion — surgical or
            non-surgical.
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
