import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
}

export function PageHero({ eyebrow, title, description, breadcrumb, image, imageAlt, imageFit = "cover" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-soft">
      <div className="absolute inset-0 opacity-40 pointer-events-none [background:radial-gradient(60%_60%_at_80%_0%,hsl(var(--teal)/0.18),transparent_60%),radial-gradient(50%_50%_at_0%_100%,hsl(var(--primary)/0.18),transparent_60%)]" />
      <div className={`container-page relative py-20 md:py-24 ${image ? "grid gap-12 lg:grid-cols-12 items-center" : ""}`}>
        <div className={image ? "lg:col-span-7" : ""}>
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{breadcrumb ?? title}</span>
          </nav>
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border bg-card">
              <img
                src={image}
                alt={imageAlt ?? title}
                width={1536}
                height={1024}
                loading="lazy"
                className={`w-full h-auto aspect-[3/2] ${imageFit === "contain" ? "object-contain object-center bg-gradient-soft" : "object-cover"}`}
              />
              <div aria-hidden className={`absolute inset-0 ${imageFit === "contain" ? "" : "bg-gradient-to-tr from-primary/20 via-transparent to-teal/10"}`} />
            </div>
          </div>

        )}
      </div>
    </section>
  );
}
