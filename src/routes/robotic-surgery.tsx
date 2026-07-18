import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-surgeon.png.asset.json";
import { Bot } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";
import { testimonialsByTopic } from "@/data/testimonials";

export const Route = createFileRoute("/robotic-surgery")({
  head: () => ({
    meta: [
      { title: "Robotic Joint Replacement Surgery — Dr. L. Tomar" },
      { name: "description", content: "Robotic knee, hip and joint replacement — computer-assisted precision, personalised implant alignment and faster recovery under Dr. L. Tomar." },
      { property: "og:title", content: "Robotic Joint Replacement — Dr. L. Tomar" },
      { property: "og:description", content: "Robotic and computer-assisted joint replacement for knee and hip." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Core Specializations"
      title="Robotic Joint Replacement — precision beyond the human hand."
      description="Flagship robotic and computer-assisted joint replacement. Each implant is planned and placed to your anatomy — sub-millimetre accuracy, protected soft tissues, faster confidence on your feet."
      icon={Bot}
      accent="primary"
      overview={[
        "3D pre-operative planning built from your CT / MRI — the plan is patient-specific, not template-based.",
        "Robotic arm guidance keeps bone cuts and implant angles within a fraction of a millimetre of the plan.",
        "Soft-tissue balancing in real time — the robot maps your ligaments so the knee or hip feels natural, not stiff.",
        "Smaller incisions, less blood loss, most patients walk the same day and go home in 2–4 days.",
        "Suitable for first-time replacement, complex deformity, and selected revision cases.",
      ]}
      procedures={[
        "Robotic Knee Replacement Surgery",
        "Robotic Hip Replacement Surgery",
        "Robotic Joint Replacement Surgery",
        "Total Knee Replacement (TKR)",
        "Total Hip Replacement (THR)",
        "Revision Knee Replacement",
        "Revision Hip Replacement",
        "Complex Joint Replacement Surgery",
        "Minimally Invasive Joint Replacement",
        "Computer-Assisted Joint Replacement",
      ]}
      related={[
        { label: "Robotic Knee Replacement", to: "/robotic-knee" },
        { label: "Robotic Hip Replacement", to: "/robotic-hip" },
        { label: "Knee Surgery", to: "/knee" },
        { label: "Hip Surgery", to: "/hip" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
      faqs={[
        { q: "Does the robot perform the surgery?", a: "No. Dr. Tomar performs every step. The robot assists with 3D planning, real-time measurement and precise bone preparation — it never acts autonomously." },
        { q: "Is robotic joint replacement safer?", a: "Robotic systems reduce human variability in bone cuts and implant positioning, both linked to long-term implant survival and function. Overall safety also depends on surgeon expertise, anaesthesia and rehabilitation." },
        { q: "Is robotic surgery worth the higher cost?", a: "For most patients the added accuracy, better soft-tissue balance and quicker rehabilitation justify the cost. We discuss expected benefit and insurance coverage clearly during consultation." },
        { q: "Am I too old (or too young) for robotic replacement?", a: "There is no strict age cut-off. Suitability depends on your joint condition, medical fitness and functional goals — not just age." },
        { q: "Can robotic surgery correct severe deformity?", a: "Yes. Robotic planning is particularly useful in severe bow-leg, knock-knee and complex hip deformity, where accurate alignment and soft-tissue balance are critical." },
        { q: "How is recovery different from conventional surgery?", a: "Most robotic replacement patients walk the same day, need fewer painkillers and go home in 2–4 days. Return to daily activities is typically faster and more predictable." },
      ]}
      image={aboutBanner.url}
      testimonials={testimonialsByTopic["robotic-surgery"]}
    />

  ),
});
