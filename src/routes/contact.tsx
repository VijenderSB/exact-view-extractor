import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-contact-clinic.png.asset.json";
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
      image={bannerImg.url}
      />

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <a href="tel:+919910000159" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Call the clinic</div>
                <div className="text-sm text-muted-foreground">+91 99100 00159</div>
                <div className="text-sm text-muted-foreground">+91 98101 31676</div>
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919810131676&text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">WhatsApp</div>
                <div className="text-sm text-muted-foreground">+91 98101 31676 — fastest response</div>
              </div>
            </a>
            <a href="mailto:ltomar@rediffmail.com" className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">ltomar@rediffmail.com</div>
              </div>
            </a>
            <div className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="font-medium text-foreground">Tomar Orthopaedics</div>
                <div className="text-sm text-muted-foreground">90, New Rajdhani Enclave, Vikash Marg, Delhi – 110092</div>
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

      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-3xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Tomar Orthopaedics — 90, New Rajdhani Enclave, Vikash Marg, Delhi 110092"
              src="https://www.google.com/maps?q=90+New+Rajdhani+Enclave+Vikash+Marg+Delhi+110092&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            <a href="https://www.google.com/maps/search/?api=1&query=90+New+Rajdhani+Enclave+Vikash+Marg+Delhi+110092" target="_blank" rel="noreferrer" className="hover:text-primary underline underline-offset-2">Open in Google Maps →</a>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
