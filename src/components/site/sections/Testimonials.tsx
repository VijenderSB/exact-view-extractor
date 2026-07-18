import { Quote, Star } from "lucide-react";

export interface Testimonial {
  name: string;
  location: string;
  procedure: string;
  quote: string;
  rating?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Rajesh K.",
    location: "Delhi",
    procedure: "Robotic Knee Replacement",
    quote:
      "I walked with support the same evening. Six weeks on, I'm back to morning walks in the park — pain-free for the first time in years. Dr. Tomar's team explained every step clearly.",
  },
  {
    name: "Sunita M.",
    location: "Gurgaon",
    procedure: "Robotic Hip Replacement",
    quote:
      "Years of groin pain from AVN gone. The precision of the robotic planning gave me confidence, and recovery was much faster than I expected. Both legs feel equal again.",
  },
  {
    name: "Vikram S.",
    location: "Noida",
    procedure: "ACL Reconstruction",
    quote:
      "Torn ACL from cricket. Dr. Tomar walked me through graft options and rehab honestly. I'm back on the field nine months later — stronger than before.",
  },
  {
    name: "Meera A.",
    location: "Faridabad",
    procedure: "Shoulder Arthroscopy",
    quote:
      "Sleeping through the night without shoulder pain feels like a gift. The keyhole surgery meant tiny scars and a quick return to daily routine.",
  },
  {
    name: "Anil P.",
    location: "Ghaziabad",
    procedure: "Partial Knee Replacement",
    quote:
      "I was told I needed a full knee replacement elsewhere. Dr. Tomar showed me a partial was possible. My knee bends naturally and I've resumed cycling.",
  },
  {
    name: "Kavita R.",
    location: "Delhi NCR",
    procedure: "Bilateral Knee Replacement",
    quote:
      "Both knees done together — a big decision, but the right one. Excellent pain control and a very structured rehab schedule. Climbing stairs comfortably again.",
  },
];

export function Testimonials({
  title = "What patients say",
  subtitle = "Real experiences from people who chose Dr. L. Tomar for their joint care.",
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
}) {
  const list = items && items.length > 0 ? items : defaultTestimonials.slice(0, 3);
  return (
    <section className="py-20 bg-gradient-soft border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">Patient stories</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl bg-card border border-border p-7 shadow-card flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <div className="mt-3 flex gap-0.5 text-teal">
                {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed text-[15px] flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-display text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {t.procedure} · {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground/80 max-w-2xl">
          Names shortened and photos withheld to protect patient privacy. Individual results vary based on
          condition, age and overall health.
        </p>
      </div>
    </section>
  );
}
