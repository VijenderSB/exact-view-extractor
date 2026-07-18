import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { BookAppointmentDialog } from "@/components/site/BookAppointment";

type NavLeaf = { label: string; href: string; hash?: string };
type NavItem = { label: string; href?: string; children?: NavLeaf[] };

const nav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Robotic Surgery",
    children: [
      { label: "Robotic Knee Replacement", href: "/robotic-knee" },
      { label: "Robotic Hip Replacement", href: "/robotic-hip" },
      { label: "Robotic Joint Replacement", href: "/procedures/robotic-joint-replacement" },
      { label: "Computer-Assisted Surgery", href: "/procedures/computer-assisted-surgery" },
      { label: "Revision Joint Replacement", href: "/procedures/revision-joint-replacement" },
    ],
  },
  {
    label: "Knee",
    children: [
      { label: "Total Knee Replacement", href: "/procedures/total-knee-replacement" },
      { label: "Partial Knee Replacement", href: "/procedures/partial-knee-replacement" },
      { label: "Revision Knee Replacement", href: "/procedures/revision-knee-replacement" },
      { label: "ACL / PCL Reconstruction", href: "/procedures/acl-pcl-reconstruction" },
      { label: "Meniscus & Cartilage Repair", href: "/procedures/meniscus-cartilage-repair" },
      { label: "Knee Arthroscopy", href: "/arthroscopy" },
      { label: "High Tibial Osteotomy (HTO)", href: "/procedures/high-tibial-osteotomy" },
    ],
  },
  {
    label: "Hip",
    children: [
      { label: "Robotic Hip Replacement", href: "/robotic-hip" },
      { label: "Total Hip Replacement", href: "/procedures/total-hip-replacement" },
      { label: "Revision Hip Replacement", href: "/procedures/revision-hip-replacement" },
      { label: "Hip Arthroscopy", href: "/arthroscopy" },
      { label: "AVN Hip Surgery", href: "/procedures/avn-hip" },
      { label: "Hip Impingement (FAI)", href: "/procedures/hip-impingement-fai" },
      { label: "Hip Fracture Surgery", href: "/procedures/hip-fracture-surgery" },
    ],
  },
  {
    label: "Shoulder & Elbow",
    children: [
      { label: "Shoulder Replacement", href: "/procedures/shoulder-replacement" },
      { label: "Reverse Shoulder Replacement", href: "/procedures/reverse-shoulder-replacement" },
      { label: "Rotator Cuff Repair", href: "/procedures/rotator-cuff-repair" },
      { label: "Shoulder Arthroscopy", href: "/arthroscopy" },
      { label: "Frozen Shoulder Release", href: "/procedures/frozen-shoulder-release" },
      { label: "Tennis / Golfer's Elbow", href: "/procedures/tennis-elbow-surgery" },
      { label: "Elbow Arthroscopy", href: "/arthroscopy" },
    ],
  },
  {
    label: "Sports & Trauma",
    children: [
      { label: "Sports Injury Surgery", href: "/procedures/sports-injury-surgery" },
      { label: "ACL / PCL Reconstruction", href: "/procedures/acl-pcl-reconstruction" },
      { label: "Cartilage Repair", href: "/procedures/cartilage-repair" },
      { label: "Complex Fracture Management", href: "/procedures/complex-fracture-management" },
      { label: "Pelvic & Acetabular Fractures", href: "/procedures/pelvic-acetabular-fracture" },
      { label: "Upper & Lower Limb Trauma", href: "/procedures/limb-trauma" },
    ],
  },
  { label: "Cities We Serve", href: "/cities" },
  { label: "Contact Us", href: "/contact" },
];


export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="rounded-xl border border-border bg-card shadow-elegant p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        hash={child.hash}
                        className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className="text-sm font-medium text-foreground py-2.5 border-b border-border/50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              const expanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-border/50">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    className="w-full flex items-center justify-between text-sm font-medium text-foreground py-2.5"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="pl-3 pb-2 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          hash={child.hash}
                          className="text-sm text-muted-foreground py-2 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <BookAppointmentDialog>
              <button className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground text-sm font-medium px-5 py-3">
                Book Appointment
              </button>
            </BookAppointmentDialog>
          </div>
        </div>
      )}
    </header>
  );
}
