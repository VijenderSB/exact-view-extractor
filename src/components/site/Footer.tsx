import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-hero text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-background/10 backdrop-blur font-display text-lg">LT</span>
            <div>
              <div className="font-display text-xl">Dr. L. Tomar</div>
              <div className="text-xs uppercase tracking-widest text-teal opacity-90">Robotic Joint Replacement</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-80 leading-relaxed">
            Advanced robotic knee and hip replacement surgery in Delhi NCR. Personalised evaluation, technology-assisted planning and comprehensive recovery support.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Care</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>Robotic Knee Replacement</li>
            <li>Robotic Hip Replacement</li>
            <li>Complex & Revision Surgery</li>
            <li>Arthroscopy & Sports Injuries</li>
            <li>Shoulder & Elbow</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 12345 67890</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp Enquiry</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> care@drltomar.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Delhi NCR — multiple consultation locations</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Dr. L. Tomar. All information is educational; clinical decisions are made after individual consultation.</p>
          <p>Privacy · Medical Disclaimer · Terms</p>
        </div>
      </div>
    </footer>
  );
}
