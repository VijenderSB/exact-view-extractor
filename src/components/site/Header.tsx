import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { BookAppointmentDialog } from "@/components/site/BookAppointment";

const nav = [
  { label: "About", href: "/about" as const },
  { label: "Robotic Knee", href: "/robotic-knee" as const },
  { label: "Robotic Hip", href: "/robotic-hip" as const },
  { label: "Specializations", href: "/specializations" as const },
  { label: "Arthroscopy", href: "/arthroscopy" as const },
  { label: "Shoulder & Elbow", href: "/shoulder-elbow" as const },
  { label: "Locations", href: "/locations" as const },
  { label: "Contact", href: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      {/* Utility bar */}
      <div className="bg-gradient-brand text-primary-foreground text-xs">
        <div className="container-page flex items-center justify-between py-2 gap-4">
          <div className="hidden md:flex items-center gap-5 opacity-95">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Delhi NCR · Multi-location consultations</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+911234567890" className="inline-flex items-center gap-1.5 hover:opacity-80 transition"><Phone className="h-3.5 w-3.5" /> Call</a>
            <a href="https://wa.me/911234567890" className="inline-flex items-center gap-1.5 hover:opacity-80 transition"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
            <BookAppointmentDialog>
              <button className="hidden sm:inline-flex items-center rounded-full bg-background/15 hover:bg-background/25 transition px-3 py-1 font-medium">Request Callback</button>
            </BookAppointmentDialog>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground font-display text-lg shadow-elegant">LT</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Dr. L. Tomar</span>
            <span className="text-[11px] uppercase tracking-widest text-teal font-medium">Robotic Joint Replacement</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookAppointmentDialog>
            <button className="hidden md:inline-flex items-center rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium px-5 py-2.5 shadow-elegant hover:shadow-glow transition-all">
              Book Appointment
            </button>
          </BookAppointmentDialog>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.label} to={item.href} className="text-sm text-foreground py-1.5" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <BookAppointmentDialog>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium px-5 py-3">
                Book Appointment
              </button>
            </BookAppointmentDialog>
          </div>
        </div>
      )}
    </header>
  );
}
