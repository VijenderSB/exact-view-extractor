import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Orthopaedic Conditions Treated — Dr. L. Tomar" },
      { name: "description", content: "Arthritis, AVN, sports injuries, ligament and cartilage damage, frozen shoulder, tennis elbow, joint deformity and trauma — conditions treated by Dr. L. Tomar." },
      { property: "og:title", content: "Orthopaedic Conditions Treated — Dr. L. Tomar" },
      { property: "og:description", content: "Common and complex bone and joint conditions treated." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Conditions Treated"
      title="Understand your condition — then choose the right treatment."
      description="A clear diagnosis is half the cure. Dr. Tomar treats the full range of adult bone and joint conditions, from early arthritis to complex reconstruction."
      icon={Stethoscope}
      accent="teal"
      overview={[
        "Every consultation starts with listening — symptoms, activity, goals — before any imaging is ordered.",
        "Non-surgical care (physio, injections, lifestyle) is offered when appropriate; surgery is recommended only when it truly helps.",
        "Second opinions welcome — bring your existing X-rays, MRI and reports.",
      ]}
      procedures={[
        "Knee Arthritis",
        "Hip Arthritis",
        "Shoulder Arthritis",
        "Osteoarthritis",
        "Rheumatoid Arthritis",
        "Avascular Necrosis (AVN)",
        "Sports Injuries",
        "Ligament Injuries",
        "Meniscus Tears",
        "Cartilage Damage",
        "Frozen Shoulder",
        "Tennis Elbow",
        "Joint Deformities",
        "Joint Stiffness",
        "Bone & Joint Trauma",
      ]}
      related={[
        { label: "Knee Surgery", to: "/knee" },
        { label: "Hip Surgery", to: "/hip" },
        { label: "Shoulder Surgery", to: "/shoulder" },
        { label: "Elbow Surgery", to: "/elbow" },
        { label: "Sports Injury", to: "/sports-injury" },
        { label: "Trauma & Fractures", to: "/trauma" },
      ]}
    />
  ),
});
