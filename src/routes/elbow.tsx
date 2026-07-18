import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-elbow.jpg";
import { Dumbbell } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/elbow")({
  head: () => ({
    meta: [
      { title: "Elbow Surgery — Dr. L. Tomar" },
      { name: "description", content: "Elbow replacement, arthroscopy, ligament reconstruction, tennis elbow surgery and cubital tunnel release." },
      { property: "og:title", content: "Elbow Surgery — Dr. L. Tomar" },
      { property: "og:description", content: "Elbow care for arthritis, injury and nerve entrapment." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Elbow Surgery"
      title="Elbow surgery that gets your grip and reach back."
      description="From stubborn tennis elbow to complex ligament injuries and severe arthritis — targeted treatment that restores strength and range."
      icon={Dumbbell}
      accent="primary"
      overview={[
        "Non-surgical care first for most tennis / golfer's elbow — surgery only when injections and therapy fail.",
        "Elbow arthroscopy for stiffness, loose bodies and cartilage issues.",
        "Ligament reconstruction for athletes and cubital tunnel release for ulnar nerve compression.",
      ]}
      procedures={[
        "Elbow Replacement Surgery",
        "Elbow Arthroscopy",
        "Elbow Ligament Reconstruction",
        "Tennis Elbow Surgery",
        "Golfer's Elbow Surgery",
        "Cubital Tunnel Release",
      ]}
      related={[
        { label: "Shoulder Surgery", to: "/shoulder" },
        { label: "Shoulder & Elbow Overview", to: "/shoulder-elbow" },
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
      faqs={[
        { q: "Does tennis elbow need surgery?", a: "Rarely. Most cases settle with activity modification, counter-force bracing, eccentric physiotherapy and — if needed — PRP injections. Surgery is reserved for pain that persists beyond six to twelve months of good non-surgical care." },
        { q: "How long does tennis elbow take to recover?", a: "With structured non-surgical treatment, most patients improve over six to twelve weeks. Grip-heavy activities are reintroduced gradually to prevent recurrence." },
        { q: "What is cubital tunnel syndrome?", a: "It's compression of the ulnar nerve at the elbow, causing tingling in the ring and little fingers, weak grip and elbow discomfort. Mild cases improve with bracing; persistent cases benefit from surgical release." },
        { q: "Can elbow arthritis be treated without replacement?", a: "Yes — arthroscopic debridement, loose body removal and injections help early arthritis. Replacement is considered only for advanced disease with significant pain and functional limitation." },
        { q: "Is elbow ligament reconstruction only for athletes?", a: "It's most common in throwing athletes, but any patient with instability from a torn medial or lateral collateral ligament can benefit from reconstruction to restore reliable elbow function." },
      ]}
      image={bannerImg}
      />

  ),
});
