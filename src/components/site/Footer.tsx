import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock, CalendarCheck, PhoneCall } from "lucide-react";
import { BookAppointmentDialog } from "@/components/site/BookAppointment";

type Col = { title: string; links: { label: string; to: string; hash?: string }[] };

const columns: Col[] = [
  {
    title: "Robotic Surgery",
    links: [
      { label: "Robotic Knee Replacement", to: "/robotic-knee" },
      { label: "Robotic Hip Replacement", to: "/robotic-hip" },
      { label: "Computer-Assisted Surgery", to: "/robotic-surgery" },
      { label: "Revision Joint Replacement", to: "/specializations", hash: "core" },
      { label: "Why Robotic?", to: "/robotic-surgery" },
    ],
  },
  {
    title: "Knee",
    links: [
      { label: "Total Knee Replacement", to: "/robotic-knee" },
      { label: "Partial Knee Replacement", to: "/specializations", hash: "knee" },
      { label: "Revision Knee Replacement", to: "/specializations", hash: "knee" },
      { label: "ACL / PCL Reconstruction", to: "/sports-injury" },
      { label: "Knee Arthroscopy", to: "/arthroscopy" },
    ],
  },
  {
    title: "Hip",
    links: [
      { label: "Total Hip Replacement", to: "/robotic-hip" },
      { label: "Revision Hip Replacement", to: "/specializations", hash: "hip" },
      { label: "Hip Arthroscopy", to: "/arthroscopy" },
      { label: "AVN Hip Surgery", to: "/specializations", hash: "hip" },
      { label: "Hip Fracture Surgery", to: "/trauma" },
    ],
  },
  {
    title: "Shoulder & Elbow",
    links: [
      { label: "Shoulder Replacement", to: "/shoulder-elbow" },
      { label: "Rotator Cuff Repair", to: "/shoulder-elbow" },
      { label: "Frozen Shoulder Release", to: "/shoulder-elbow" },
      { label: "Tennis / Golfer's Elbow", to: "/elbow" },
      { label: "Shoulder Arthroscopy", to: "/arthroscopy" },
    ],
  },
  {
    title: "Sports & Trauma",
    links: [
      { label: "Sports Injury Surgery", to: "/sports-injury" },
      { label: "Cartilage Repair", to: "/sports-injury" },
      { label: "Complex Fractures", to: "/trauma" },
      { label: "Pelvic & Acetabular", to: "/trauma" },
      { label: "Conditions Treated", to: "/conditions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "About Dr. Tomar", to: "/about" },
      { label: "All Specializations", to: "/specializations" },
      { label: "Patient Resources", to: "/patient-resources" },
      { label: "Locations", to: "/locations" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-hero text-primary-foreground">
      {/* Top: brand + contact + hours + booking */}
      <div className="container-page pt-16 pb-10 grid gap-10 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-background/10 backdrop-blur font-display text-lg">LT</span>
            <div>
              <div className="font-display text-xl">Dr. L. Tomar</div>
              <div className="text-xs uppercase tracking-widest text-teal opacity-90">Robotic Joint Replacement</div>
            </div>
          </div>
          <p className="mt-3 text-xs opacity-80">
            MS (Ortho), MCh Orthopaedics (Dundee, UK)
          </p>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Delhi's leading robotic joint replacement surgeon with 32+ years of experience and 30,000+ successful surgeries. Vice Chairman, Max Super Speciality Hospital.
          </p>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-teal" /> <span>90, New Rajdhani Enclave, Vikash Marg, Delhi – 110092</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal" /> <a href="tel:+919910000159" className="hover:text-teal">+91 99100 00159</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal" /> <a href="tel:+919810131676" className="hover:text-teal">+91 98101 31676</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-teal" /> <a href="https://api.whatsapp.com/send?phone=919810131676" target="_blank" rel="noreferrer" className="hover:text-teal">WhatsApp: +91 98101 31676</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal" /> <a href="mailto:ltomar@rediffmail.com" className="hover:text-teal">ltomar@rediffmail.com</a></li>
          </ul>
        </div>

        {/* Clinic hours */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90 inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Clinic Hours</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center justify-between gap-3"><span className="opacity-80">Mon – Fri</span><span className="opacity-95">10:00 – 19:00</span></li>
            <li className="flex items-center justify-between gap-3"><span className="opacity-80">Saturday</span><span className="opacity-95">10:00 – 14:00</span></li>
            <li className="flex items-center justify-between gap-3"><span className="opacity-80">Sunday</span><span className="opacity-95">By Appointment</span></li>
            <li className="flex items-center justify-between gap-3"><span className="opacity-80">Emergency</span><span className="text-teal font-medium">24 / 7</span></li>
          </ul>
        </div>

        {/* Book consultation card */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Book a Consultation</h4>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Personalised evaluation with Dr. L. Tomar at Max Super Speciality Hospital and Vikash Marg clinic.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <BookAppointmentDialog>
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-teal text-background font-medium px-4 py-2.5 hover:opacity-90 transition">
                <CalendarCheck className="h-4 w-4" /> Book Appointment
              </button>
            </BookAppointmentDialog>
            <a
              href="tel:+919910000159"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 hover:bg-background/10 transition text-primary-foreground font-medium px-4 py-2.5"
            >
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Sitemap columns (mirrors header menu) */}
      <div className="border-t border-white/10">
        <div className="container-page py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-semibold uppercase tracking-widest text-teal">{col.title}</h5>
              <ul className="mt-4 space-y-2 text-sm opacity-85">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} hash={l.hash} className="hover:text-teal transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-80">
          <p className="max-w-3xl leading-relaxed">
            © {new Date().getFullYear()} Dr. L. Tomar. All rights reserved. Information on this website is for educational purposes only and does not replace clinical consultation. Individual results may vary.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-teal">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-teal">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-teal">Medical Disclaimer</Link>
            <Link to="/contact" className="hover:text-teal">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
