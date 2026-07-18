import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-hero text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-5">
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
            <li><Link to="/robotic-knee" className="hover:text-teal transition-colors">Robotic Knee Replacement</Link></li>
            <li><Link to="/robotic-hip" className="hover:text-teal transition-colors">Robotic Hip Replacement</Link></li>
            <li><Link to="/specializations" hash="core" className="hover:text-teal transition-colors">Complex & Revision Surgery</Link></li>
            <li><Link to="/arthroscopy" className="hover:text-teal transition-colors">Arthroscopy & Sports Injuries</Link></li>
            <li><Link to="/shoulder-elbow" className="hover:text-teal transition-colors">Shoulder & Elbow</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/patient-resources" className="hover:text-teal transition-colors">Patient Resources</Link></li>
            <li><Link to="/locations" className="hover:text-teal transition-colors">Locations</Link></li>
            <li><Link to="/specializations" className="hover:text-teal transition-colors">All Specializations</Link></li>
            <li><Link to="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+919910000159" className="hover:text-teal">+91 99100 00159</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+919810131676" className="hover:text-teal">+91 98101 31676</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> <a href="https://api.whatsapp.com/send?phone=919810131676" target="_blank" rel="noreferrer" className="hover:text-teal">WhatsApp Enquiry</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:ltomar@rediffmail.com" className="hover:text-teal">ltomar@rediffmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 90, New Rajdhani Enclave, Vikash Marg, Delhi – 110092</li>
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
