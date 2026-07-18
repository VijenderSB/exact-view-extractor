import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/sports-injury")({
  head: () => ({
    meta: [
      { title: "Sports Injury & Arthroscopy — Dr. L. Tomar" },
      { name: "description", content: "ACL/PCL reconstruction, meniscus and cartilage repair, arthroscopic surgery for knee, shoulder and hip — designed to return you to sport." },
      { property: "og:title", content: "Sports Injury & Arthroscopy — Dr. L. Tomar" },
      { property: "og:description", content: "Keyhole surgery for athletes and active adults." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Sports Injury & Arthroscopy"
      title="Back to sport — safely, and on a clear timeline."
      description="Keyhole arthroscopic surgery and reconstructive procedures for ligament, meniscus and cartilage injuries. A rehab-first plan with objective return-to-play criteria."
      icon={HeartPulse}
      accent="teal"
      overview={[
        "Arthroscopy of knee, shoulder and hip — small incisions, high magnification, precise repair.",
        "Graft choices personalised to sport, body type and pre-injury level.",
        "Return-to-sport testing — strength, agility, hop tests — not just calendar days.",
        "Coordinated care with physiotherapists and strength coaches for durable results.",
      ]}
      procedures={[
        "ACL Reconstruction",
        "PCL Reconstruction",
        "Multi-Ligament Knee Reconstruction",
        "Meniscus Repair",
        "Cartilage Repair & Restoration",
        "Sports Injury Surgery",
        "Knee Arthroscopy",
        "Shoulder Arthroscopy",
        "Hip Arthroscopy",
        "Minimally Invasive Arthroscopic Surgery",
      ]}
      related={[
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "Knee Surgery", to: "/knee" },
        { label: "Shoulder Surgery", to: "/shoulder" },
        { label: "Trauma & Fracture Care", to: "/trauma" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
    />
  ),
});
