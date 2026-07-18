import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import {
  Bot, Bone, Activity, CircleDot, Dumbbell, Stethoscope, HeartPulse, ShieldPlus, CheckCircle2, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/specializations")({
  head: () => ({
    meta: [
      { title: "Specializations & Procedures — Dr. L. Tomar" },
      { name: "description", content: "Complete list of orthopaedic specializations by Dr. L. Tomar — robotic joint replacement, knee, hip, shoulder, elbow, arthroscopy, sports injuries, trauma and complex reconstruction." },
      { property: "og:title", content: "Specializations & Procedures — Dr. L. Tomar" },
      { property: "og:description", content: "Robotic joint replacement, arthroscopy, sports injury, trauma and reconstructive orthopaedics." },
    ],
  }),
  component: SpecializationsPage,
});

type Group = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  intro?: string;
  accent: "primary" | "teal";
  items: string[];
};

const groups: Group[] = [
  {
    id: "core",
    icon: Bot,
    title: "Core Specializations",
    accent: "primary",
    intro: "Flagship robotic and computer-assisted joint replacement — Dr. Tomar's most requested procedures.",
    items: [
      "Robotic Knee Replacement Surgery",
      "Robotic Hip Replacement Surgery",
      "Robotic Joint Replacement Surgery",
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Revision Knee Replacement Surgery",
      "Revision Hip Replacement Surgery",
      "Complex Joint Replacement Surgery",
      "Minimally Invasive Joint Replacement Surgery",
      "Computer-Assisted Joint Replacement Surgery",
    ],
  },
  {
    id: "knee",
    icon: Bone,
    title: "Knee Surgery",
    accent: "teal",
    items: [
      "Total Knee Replacement",
      "Partial Knee Replacement (Unicompartmental)",
      "Revision Knee Replacement",
      "ACL Reconstruction Surgery",
      "PCL Reconstruction Surgery",
      "Meniscus Repair Surgery",
      "Cartilage Restoration Procedures",
      "Knee Arthroscopy",
      "Knee Ligament Reconstruction",
      "Multi-Ligament Knee Injury Surgery",
      "Patella Stabilization Surgery",
      "High Tibial Osteotomy (HTO)",
    ],
  },
  {
    id: "hip",
    icon: CircleDot,
    title: "Hip Surgery",
    accent: "primary",
    items: [
      "Robotic Hip Replacement",
      "Total Hip Replacement",
      "Revision Hip Replacement",
      "Hip Arthroscopy",
      "Hip Preservation Surgery",
      "AVN (Avascular Necrosis) Hip Surgery",
      "Hip Impingement (FAI) Surgery",
      "Hip Fracture Surgery",
    ],
  },
  {
    id: "shoulder",
    icon: Activity,
    title: "Shoulder Surgery",
    accent: "teal",
    items: [
      "Shoulder Replacement Surgery",
      "Reverse Shoulder Replacement",
      "Total Shoulder Replacement",
      "Shoulder Arthroscopy",
      "Rotator Cuff Repair",
      "Shoulder Instability Surgery",
      "Frozen Shoulder Arthroscopic Release",
      "Shoulder Dislocation Surgery",
    ],
  },
  {
    id: "elbow",
    icon: Dumbbell,
    title: "Elbow Surgery",
    accent: "primary",
    items: [
      "Elbow Replacement Surgery",
      "Elbow Arthroscopy",
      "Elbow Ligament Reconstruction",
      "Tennis Elbow Surgery",
      "Cubital Tunnel Release",
    ],
  },
  {
    id: "sports",
    icon: HeartPulse,
    title: "Sports Injury & Arthroscopy",
    accent: "teal",
    items: [
      "ACL Reconstruction",
      "PCL Reconstruction",
      "Meniscus Repair",
      "Cartilage Repair",
      "Sports Injury Surgery",
      "Knee Arthroscopy",
      "Shoulder Arthroscopy",
      "Hip Arthroscopy",
      "Minimally Invasive Arthroscopic Surgery",
    ],
  },
  {
    id: "trauma",
    icon: ShieldPlus,
    title: "Trauma & Fracture Care",
    accent: "primary",
    items: [
      "Complex Fracture Management",
      "Pelvic & Acetabular Fracture Surgery",
      "Periarticular Fracture Surgery",
      "Upper Limb Trauma",
      "Lower Limb Trauma",
    ],
  },
  {
    id: "conditions",
    icon: Stethoscope,
    title: "Orthopaedic Conditions Treated",
    accent: "teal",
    items: [
      "Knee Arthritis",
      "Hip Arthritis",
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Avascular Necrosis (AVN)",
      "Sports Injuries",
      "Ligament Injuries",
      "Meniscus Tears",
      "Cartilage Damage",
      "Shoulder Arthritis",
      "Frozen Shoulder",
      "Tennis Elbow",
      "Joint Deformities",
      "Joint Stiffness",
      "Bone & Joint Trauma",
    ],
  },
];

function SpecializationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Specializations"
        title="Full-spectrum orthopaedic care, anchored in robotic precision."
        description="From flagship robotic joint replacement to arthroscopy, sports injury reconstruction and complex trauma — a complete list of procedures and conditions Dr. Tomar treats."
      />

      <section className="py-20">
        <div className="container-page space-y-16">
          {groups.map(({ id, icon: Icon, title, intro, accent, items }) => {
            const accentBg = accent === "primary" ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";
            const accentDot = accent === "primary" ? "text-primary" : "text-teal";
            return (
              <div key={title} id={id} className="scroll-mt-28">

                <div className="flex items-start gap-4">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentBg} shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
                    {intro && <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>}
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
                    >
                      <CheckCircle2 className={`h-5 w-5 mt-0.5 shrink-0 ${accentDot}`} />
                      <span className="text-sm text-foreground leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-soft border-y border-border">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Not sure which procedure applies?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Share your reports or symptoms. Dr. Tomar's team will guide you to the right evaluation — surgical or non-surgical.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground font-medium px-7 py-3.5 shadow-elegant hover:shadow-glow transition"
          >
            Request an evaluation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
