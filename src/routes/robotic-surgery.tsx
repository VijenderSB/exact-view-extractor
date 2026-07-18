import { createFileRoute } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

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
    />
  ),
});
