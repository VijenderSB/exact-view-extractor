import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-locations.jpg";
import { PageShell } from "@/components/site/PageShell";
import { testimonialsByTopic } from "@/data/testimonials";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Clock, Phone, Video, Plane, Building2 } from "lucide-react";
import { FAQBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations & Clinics — Dr. L. Tomar" },
      { name: "description", content: "Consult Dr. L. Tomar across multiple Delhi NCR clinics and partner hospitals. In-person visits, video consults, and dedicated outstation patient support." },
      { property: "og:title", content: "Locations & Clinics — Dr. L. Tomar" },
      { property: "og:description", content: "Delhi NCR clinics, video consultations and outstation patient support." },
    ],
  }),
  component: LocationsPage,
});

const locations = [
  {
    name: "Main Clinic — South Delhi",
    address: "Address line 1, South Delhi, New Delhi 110000",
    hours: "Mon – Sat, 10:00 AM – 6:00 PM",
    phone: "+91 12345 67890",
  },
  {
    name: "Partner Hospital — Gurgaon",
    address: "Sector XX, Gurgaon, Haryana 122000",
    hours: "Tue & Fri, 4:00 PM – 7:00 PM",
    phone: "+91 12345 67890",
  },
  {
    name: "Partner Hospital — Noida",
    address: "Sector XX, Noida, Uttar Pradesh 201301",
    hours: "Wed, 4:00 PM – 7:00 PM",
    phone: "+91 12345 67890",
  },
];

function LocationsPage() {
  return (
    <PageShell testimonials={testimonialsByTopic["locations"]} testimonialsTitle={"Patients across our locations"}>
      <PageHero
        eyebrow="Clinics & Locations"
        title="Meet Dr. Tomar in Delhi NCR — or online."
        description="Consultations are available across multiple partner hospitals in Delhi, Gurgaon and Noida. Video consultations are available for review visits and outstation patients."
      image={bannerImg}
      />

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-lg text-foreground">{loc.name}</div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{loc.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-primary transition">{loc.phone}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft border-y border-border">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            { icon: Building2, title: "In-person consultation", desc: "Full clinical examination, imaging review, treatment planning and next-step conversation — usually 30–45 minutes." },
            { icon: Video, title: "Video consultation", desc: "Available for review visits, second opinions and follow-ups. Share reports in advance and speak with Dr. Tomar securely from anywhere." },
            { icon: Plane, title: "Outstation & NRI support", desc: "Dedicated coordinator for travel, hotel bookings near the hospital, cashless approvals and post-surgery remote follow-up." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 font-display text-lg text-foreground">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary font-medium">What to bring</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">Making your first visit useful</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A little preparation makes your first consultation dramatically more productive. Please bring the following where available:
            </p>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "All previous X-rays, MRI or CT scans — original films or digital copies",
              "Blood reports done in the last 3 months",
              "A list of your current medications (including doses)",
              "Previous surgery discharge summaries, if any",
              "Insurance card and photo ID",
              "A family member who is involved in your care decisions",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start rounded-xl bg-card border border-border px-4 py-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQBlock
        title="Consultations & clinics — FAQs"
        items={[
          { q: "Which clinic should I choose for my first visit?", a: "The South Delhi main clinic has the widest availability and full diagnostic support. Gurgaon and Noida partner hospitals are ideal if travel is easier for you — the medical care is identical." },
          { q: "How do I book an appointment?", a: "By phone, WhatsApp or the online form on this site. Our team confirms your slot, tells you exactly what to bring, and shares a Google Maps link to the clinic." },
          { q: "Can I get a video consultation for the very first visit?", a: "Yes, though for surgical decisions an in-person visit is preferred at some point. Second opinions and follow-ups work very well over video." },
          { q: "Do you charge for video consultations?", a: "Yes — video consultations are charged like in-person visits, with the fee shared upfront when you book." },
          { q: "How long is a typical consultation?", a: "30–45 minutes for a new patient, 15–20 minutes for a review. We build in time so you're never rushed through decisions that matter." },
          { q: "Do you help with airport pickup and hotels?", a: "Yes — our outstation coordinator arranges pickup, hotel or serviced apartments near the hospital, and daily check-ins during your stay." },
        ]}
      />
    </PageShell>
  );
}
