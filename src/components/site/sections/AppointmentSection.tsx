import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { AppointmentForm } from "@/components/site/AppointmentForm";

export function AppointmentSection() {
  return (
    <section id="appointment" className="py-24 bg-gradient-soft">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Book Appointment</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
            Schedule your consultation
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Every joint replacement journey begins with a careful, personalised evaluation.
            Share your details and our team will get in touch to confirm your appointment.
          </p>

          <ul className="mt-8 grid gap-4">
            <li className="flex gap-3 items-start">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="font-medium text-foreground">Call the clinic</div>
                <a href="tel:+919910000159" className="block text-sm text-muted-foreground hover:text-primary transition">+91 99100 00159</a>
                <a href="tel:+919810131676" className="block text-sm text-muted-foreground hover:text-primary transition">+91 98101 31676</a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal/10 text-teal">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <div className="font-medium text-foreground">WhatsApp</div>
                <a href="https://api.whatsapp.com/send?phone=919810131676&text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
                  Chat with our team — +91 98101 31676
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="font-medium text-foreground">Consultation hours</div>
                <p className="text-sm text-muted-foreground">Mon – Sat, 10:00 AM – 6:00 PM</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal/10 text-teal">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="font-medium text-foreground">Tomar Orthopaedics</div>
                <p className="text-sm text-muted-foreground">90, New Rajdhani Enclave, Vikash Marg, Delhi – 110092</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
