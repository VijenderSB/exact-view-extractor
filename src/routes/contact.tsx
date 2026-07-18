import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-contact.jpg";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { AppointmentForm } from "@/components/site/AppointmentForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. L. Tomar — Book an Appointment" },
      { name: "description", content: "Reach the clinic team for consultations, second opinions, insurance help or outstation coordination. Call, WhatsApp or request an appointment online." },
      { property: "og:title", content: "Contact Dr. L. Tomar" },
      { property: "og:description", content: "Call, WhatsApp, email or request an online appointment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell hideAppointment>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your joints."
        description="Whether you're exploring surgery, seeking a second opinion or coordinating an outstation visit, our team is here to help — in the language and pace that works for you."
      image={bannerImg}
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <a href="tel:+911234567890" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Call the clinic</div>
                <div className="text-sm text-muted-foreground">+91 12345 67890</div>
              </div>
            </a>
            <a href="https://wa.me/911234567890" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Fastest response — usually within an hour</div>
              </div>
            </a>
            <a href="mailto:care@drltomar.com" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">care@drltomar.com</div>
              </div>
            </a>
            <div className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Main clinic</div>
                <div className="text-sm text-muted-foreground">South Delhi, New Delhi</div>
              </div>
            </div>
            <div className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Consultation hours</div>
                <div className="text-sm text-muted-foreground">Mon – Sat, 10:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground">Request an appointment</h2>
              <p className="mt-2 text-sm text-muted-foreground">Share a few details and our team will confirm your slot.</p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
