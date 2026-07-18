import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Plane, Train } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FAQBlock } from "@/components/site/ContentBlocks";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { cities, citiesByRegion } from "@/data/cities";

const title = "Patients We Serve — Cities Across India | Dr. L. Tomar";
const description =
  "Dr. L. Tomar treats patients from Delhi NCR and across India — Punjab, UP, Rajasthan, Gujarat, Maharashtra, Bengal, the South and overseas. Travel guidance, remote imaging review and coordinated single-visit surgical planning for every city.";

export const Route = createFileRoute("/cities/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CitiesIndex,
});

const faqs = [
  {
    q: "I don't live in Delhi — can Dr. Tomar still treat me?",
    a: "Yes. A large share of our practice is outstation patients from across India and overseas. We plan the entire journey — pre-consultation, imaging review, surgery, admission and structured discharge — as a single coordinated visit.",
  },
  {
    q: "Can I share my reports before travelling?",
    a: "Absolutely. Share your X-rays, MRI and prescriptions on WhatsApp or email. Dr. Tomar will review and confirm whether a Delhi visit is warranted, saving needless travel.",
  },
  {
    q: "How long do I need to stay in Delhi for joint replacement?",
    a: "For a straightforward robotic knee or hip replacement, most outstation patients stay 8–12 days including surgery, initial recovery and the first review. Complex or bilateral cases may require slightly longer.",
  },
  {
    q: "Do you help with airport pickup or accommodation?",
    a: "We guide families on nearby serviced apartments, attendant stays and airport transfers. While we don't operate a hotel booking service, our team shares vetted options.",
  },
  {
    q: "Can post-operative physiotherapy be continued in my home city?",
    a: "Yes. We provide a written rehab protocol and coordinate with trusted physiotherapists back home. Remote video reviews keep recovery on track.",
  },
];

function CitiesIndex() {
  const grouped = citiesByRegion();
  const order = ["NCR", "North India", "Central India", "East India", "West India", "South India", "International"] as const;

  return (
    <PageShell>
      <PageHero
        eyebrow="Patients We Serve"
        title="Care that reaches every city"
        description="From Delhi NCR neighbourhoods to metros across India and patients travelling from overseas, Dr. Tomar's team plans your journey end-to-end — considered, unhurried and coordinated."
        image={heroImg.url}
        imageAlt="Patients travelling from across India for robotic joint replacement"
      />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
            <Stat icon={MapPin} label="Cities served" value={`${cities.length - 1}+`} />
            <Stat icon={Plane} label="Air-connected metros" value="Pan-India" />
            <Stat icon={Train} label="Rail from Delhi" value="Same-day OPD" />
          </div>

          <div className="mt-14 space-y-14">
            {order.map((region) => {
              const list = grouped[region];
              if (!list || list.length === 0) return null;
              return (
                <div key={region}>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">{region}</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((c) => (
                      <Link
                        key={c.slug}
                        to="/cities/$slug"
                        params={{ slug: c.slug }}
                        className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-display text-lg text-foreground">{c.name}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{c.state}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {c.distanceFromDelhi && (
                          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-teal">
                            <MapPin className="h-3.5 w-3.5" />
                            {c.distanceFromDelhi} from Delhi
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQBlock
        eyebrow="Travelling to Dr. Tomar"
        title="Common questions from outstation patients"
        items={faqs}
      />
    </PageShell>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-xl text-foreground">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}
