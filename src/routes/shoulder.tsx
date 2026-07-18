import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-shoulder.jpg";
import { Activity } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/shoulder")({
  head: () => ({
    meta: [
      { title: "Shoulder Surgery — Dr. L. Tomar" },
      { name: "description", content: "Shoulder replacement, rotator cuff repair, arthroscopy, instability and frozen shoulder care." },
      { property: "og:title", content: "Shoulder Surgery — Dr. L. Tomar" },
      { property: "og:description", content: "Complete shoulder care — replacement, arthroscopy, instability, cuff." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Shoulder Surgery"
      title="Shoulder care — from stiff and painful to strong and mobile."
      description="Modern arthroscopy and shoulder replacement for arthritis, rotator cuff tears, instability, dislocations and frozen shoulder that refuses to settle."
      icon={Activity}
      accent="teal"
      overview={[
        "Keyhole shoulder arthroscopy for rotator cuff and labral repairs with less pain and quicker return to activity.",
        "Anatomic and reverse shoulder replacement — matched to the state of your rotator cuff and bone.",
        "Structured recovery: sling, graded range of motion, then strengthening in a supervised timeline.",
      ]}
      procedures={[
        "Shoulder Replacement",
        "Reverse Shoulder Replacement",
        "Total Shoulder Replacement",
        "Shoulder Arthroscopy",
        "Rotator Cuff Repair",
        "Shoulder Instability Surgery",
        "Frozen Shoulder Arthroscopic Release",
        "Shoulder Dislocation Surgery",
      ]}
      related={[
        { label: "Shoulder & Elbow Overview", to: "/shoulder-elbow" },
        { label: "Elbow Surgery", to: "/elbow" },
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
    image={bannerImg}
      />
  ),
});
