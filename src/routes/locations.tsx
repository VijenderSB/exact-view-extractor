import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
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
    <PageShell>
      <PageHero
        eyebrow="Clinics & Locations"
        title="Meet Dr. Tomar in Delhi NCR — or online."
        description="Consultations are available across multiple partner hospitals in Delhi, Gurgaon and Noida. Video consultations are available for review visits and outstation patients."
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
    </PageShell>
  );
}
