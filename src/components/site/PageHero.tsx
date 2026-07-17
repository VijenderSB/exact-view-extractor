import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: string;
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-soft">
      <div className="absolute inset-0 opacity-40 pointer-events-none [background:radial-gradient(60%_60%_at_80%_0%,hsl(var(--teal)/0.18),transparent_60%),radial-gradient(50%_50%_at_0%_100%,hsl(var(--primary)/0.18),transparent_60%)]" />
      <div className="container-page relative py-20 md:py-28">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{breadcrumb ?? title}</span>
        </nav>
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
