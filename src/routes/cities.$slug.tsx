import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, Plane, HeartHandshake, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FAQBlock } from "@/components/site/ContentBlocks";
import { cities, getCity } from "@/data/cities";
import { testimonialsByTopic } from "@/data/testimonials";

export const Route = createFileRoute("/cities/$slug")({
  loader: ({ params }) => {
    const city = getCity(params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "City not found — Dr. L. Tomar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { city } = loaderData;
    const title = `Robotic Joint Replacement for Patients from ${city.name} | Dr. L. Tomar`;
    const description = `${city.whyVisit} Travel, imaging review and coordinated single-visit planning for patients from ${city.name}, ${city.state}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: CityNotFound,
  component: CityDetail,
});

function CityNotFound() {
  return (
    <PageShell>
      <section className="py-24">
        <div className="container-page text-center max-w-xl mx-auto">
          <h1 className="font-display text-3xl text-foreground">City page not found</h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find that city. See all locations we serve.
          </p>
          <Link
            to="/cities"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-6 py-3 font-medium shadow-elegant"
          >
            <ArrowLeft className="h-4 w-4" />
            All cities
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function cityFaqs(cityName: string, distance?: string) {
  return [
    {
      q: `I'm from ${cityName} — do I need to travel to Delhi for the first consultation?`,
      a: `Not necessarily. Share your X-rays, MRI and current prescriptions on WhatsApp or email. Dr. Tomar will review and advise whether a Delhi visit is warranted, so ${cityName} patients don't travel needlessly.`,
    },
    {
      q: `How long will I need to stay in Delhi if surgery is planned?`,
      a: `For a straightforward robotic knee or hip replacement, most outstation patients stay 8–12 days including surgery, early recovery and the first review${distance ? `. Given the ${distance} distance from ${cityName}, we plan admission and discharge to align with return travel` : ""}.`,
    },
    {
      q: `Can post-operative physiotherapy continue back home in ${cityName}?`,
      a: `Yes. You'll receive a written rehab protocol and video guidance. We coordinate with a physiotherapist in ${cityName} where possible and schedule remote video reviews to keep recovery on track.`,
    },
    {
      q: `What should family members from ${cityName} plan for?`,
      a: `One attendant is usually sufficient. We share options for nearby serviced apartments and short-stay accommodation. Attendants are welcome during OPD and daily post-op rounds.`,
    },
    {
      q: `Is robotic surgery worth the travel from ${cityName}?`,
      a: `Robotic-precision joint replacement offers a personalised 3D plan, sub-millimetre implant positioning and typically faster, more predictable recovery. For patients travelling from ${cityName}, this precision often reduces the risk of a repeat trip for revision.`,
    },
  ];
}

function CityDetail() {
  const { city } = Route.useLoaderData();
  const related = cities.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, 6);

  return (
    <PageShell
      testimonials={testimonialsByTopic["robotic-knee"]}
      testimonialsTitle={`Patient stories`}
      testimonialsSubtitle={`Outcomes shared by patients who travelled to Dr. Tomar for robotic joint replacement.`}
    >
      <PageHero
        eyebrow={`${city.region} · ${city.state}`}
        title={`Patients from ${city.name}`}
        description={city.whyVisit}
        image={heroImg.url}
        imageAlt={`Patients from ${city.name} travelling to Dr. Tomar`}
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <Link
            to="/cities"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" />
            All cities we serve
          </Link>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Plane className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-foreground">How to reach us from {city.name}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {city.travelOptions.map((t: string) => (
                  <li key={t} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {city.distanceFromDelhi && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-teal">
                  <MapPin className="h-3.5 w-3.5" />
                  {city.distanceFromDelhi} from Delhi
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-foreground">Care planning for {city.name} patients</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{city.localContext}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-4 py-2 text-sm font-medium shadow-elegant hover:shadow-glow transition"
                >
                  Request a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/robotic-surgery"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/5 transition"
                >
                  Robotic surgery overview
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Why patients from {city.name} choose Dr. Tomar
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 32+ years of experience and 30,000+ surgeries, Dr. L. Tomar leads a Delhi-based robotic joint
              replacement practice trusted by patients across India. For {city.name} patients, that means access to
              robotic-precision planning, complex revision expertise and a coordinated single-visit workflow — with
              considered, unhurried communication before and after surgery.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gradient-soft border-y border-border">
          <div className="container-page">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Also serving nearby cities in {city.region}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  to="/cities/$slug"
                  params={{ slug: c.slug }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <div>
                    <div className="text-foreground font-medium">{c.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.state}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQBlock
        eyebrow={`Travelling from ${city.name}`}
        title="Frequently asked questions"
        items={cityFaqs(city.name, city.distanceFromDelhi)}
      />
    </PageShell>
  );
}
