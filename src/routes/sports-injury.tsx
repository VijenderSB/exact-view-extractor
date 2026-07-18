import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-sports-injury.jpg";
import { HeartPulse } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";
import { testimonialsByTopic } from "@/data/testimonials";

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
      faqs={[
        { q: "Does every ACL tear need surgery?", a: "Reconstruction is recommended for active patients, athletes and anyone whose knee gives way during turning or sport. Sedentary patients with a stable knee can sometimes manage non-surgically." },
        { q: "When can I return to sport after ACL reconstruction?", a: "Return to sport typically takes 9–12 months and is based on strength, hop-test and agility criteria — not the calendar alone." },
        { q: "Can a torn meniscus heal on its own?", a: "Small tears in the outer, well-vascularised zone can heal or settle with rehab. Larger or displaced tears often need arthroscopic repair — preserving the meniscus protects against future arthritis." },
        { q: "What is arthroscopy?", a: "Arthroscopy is keyhole joint surgery performed through two or three small incisions using a miniature camera. It allows precise repair with less pain, less bleeding and faster recovery than open surgery." },
        { q: "Which graft is best for ACL reconstruction?", a: "Common autograft choices are hamstring, quadriceps and bone-patellar-tendon-bone. The right graft depends on your sport, body type and pre-injury level — discussed in detail before surgery." },
        { q: "Can I go back to the same sport?", a: "Most recreational athletes return to their sport at their previous level. Return in professional or contact sport requires a structured, criteria-based rehab programme." },
      ]}
      image={bannerImg}
      testimonials={testimonialsByTopic["sports-injury"]}
      />

  ),
});
