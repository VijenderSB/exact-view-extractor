import { ReactNode } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export function LegalPage({
  title,
  eyebrow = "Legal",
  intro,
  updated,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} description={intro} />
      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Last updated: {updated}
          </p>
          <div className="mt-6 prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
            {children}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
