import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-hip.jpg";
import { CircleDot } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/hip")({
  head: () => ({
    meta: [
      { title: "Hip Surgery & Replacement — Dr. L. Tomar" },
      { name: "description", content: "Robotic and conventional hip replacement, hip preservation, arthroscopy, AVN surgery and fracture care." },
      { property: "og:title", content: "Hip Surgery & Replacement — Dr. L. Tomar" },
      { property: "og:description", content: "Full-spectrum hip surgery — arthritis, AVN, impingement, fractures." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Hip Surgery"
      title="Hip surgery that restores comfortable, natural movement."
      description="From young adults with AVN and impingement to older patients with arthritic or fractured hips — precise planning, preserved bone, and reliable long-term function."
      icon={CircleDot}
      accent="primary"
      overview={[
        "Robotic hip replacement for accurate cup positioning and equal leg length.",
        "Hip preservation and arthroscopy for younger patients — treat the cause before the joint wears out.",
        "AVN (avascular necrosis) care with core decompression and joint-preserving options where possible.",
        "Prompt fixation of hip fractures in elderly patients to protect life and independence.",
      ]}
      procedures={[
        "Robotic Hip Replacement",
        "Total Hip Replacement",
        "Revision Hip Replacement",
        "Hip Arthroscopy",
        "Hip Preservation Surgery",
        "AVN (Avascular Necrosis) Surgery",
        "Hip Impingement (FAI) Surgery",
        "Hip Fracture Surgery",
      ]}
      related={[
        { label: "Robotic Hip Replacement", to: "/robotic-hip" },
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "Trauma & Fracture Care", to: "/trauma" },
        { label: "Orthopaedic Conditions", to: "/conditions" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
      faqs={[
        { q: "Why does hip arthritis cause groin pain?", a: "The hip joint sits deep in the groin, so wear at the joint typically presents as groin or thigh pain rather than pain on the outside of the hip." },
        { q: "What's the advantage of robotic hip replacement?", a: "Robotic planning helps position the cup accurately, preserve bone and equalise leg length — three factors linked to long-term function and implant survival." },
        { q: "I'm young and have AVN — do I need a replacement?", a: "Not always. Early-stage AVN can be treated with core decompression, bone grafting or realignment. Replacement is reserved for advanced collapse." },
        { q: "How long is the hospital stay after hip surgery?", a: "Most patients stay 2–3 nights. Walking with a support begins the day of surgery, and stair climbing typically starts within the first week." },
        { q: "Will one leg be longer than the other?", a: "Restoring equal leg length is a key goal. Robotic and computer-assisted planning make this measurable and reliable." },
        { q: "Can hip fracture surgery in the elderly be avoided?", a: "Hip fractures are best fixed early — within 24–48 hours — to reduce medical complications and restore mobility. Non-surgical care carries far higher risk." },
      ]}
      image={bannerImg}
      />

  ),
});
