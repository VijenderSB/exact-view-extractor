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
    image={bannerImg}
      />
  ),
});
