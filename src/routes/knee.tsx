import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-knee.jpg";
import { Bone } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";
import { testimonialsByTopic } from "@/data/testimonials";

export const Route = createFileRoute("/knee")({
  head: () => ({
    meta: [
      { title: "Knee Surgery & Replacement — Dr. L. Tomar" },
      { name: "description", content: "Comprehensive knee care — total and partial knee replacement, ACL/PCL reconstruction, meniscus and cartilage repair, arthroscopy and osteotomy." },
      { property: "og:title", content: "Knee Surgery & Replacement — Dr. L. Tomar" },
      { property: "og:description", content: "Robotic and conventional knee surgery for arthritis, injuries and deformity." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Knee Surgery"
      title="Every kind of knee problem — one experienced team."
      description="From worn-out arthritic knees to sports ligament tears and complex deformities — precision surgery matched to your age, activity and goals."
      icon={Bone}
      accent="teal"
      overview={[
        "Detailed evaluation before any surgery — many knees improve with the right non-surgical plan.",
        "Robotic and conventional replacement options with implants chosen for your anatomy.",
        "Ligament reconstruction and cartilage-preserving surgery for younger, active patients.",
        "Structured rehabilitation from day one — walking, stairs, driving, sport in a clear timeline.",
      ]}
      procedures={[
        "Total Knee Replacement",
        "Partial (Unicompartmental) Knee Replacement",
        "Revision Knee Replacement",
        "ACL Reconstruction",
        "PCL Reconstruction",
        "Multi-Ligament Knee Reconstruction",
        "Meniscus Repair",
        "Cartilage Restoration",
        "Knee Arthroscopy",
        "Patella Stabilization",
        "High Tibial Osteotomy (HTO)",
      ]}
      related={[
        { label: "Robotic Knee Replacement", to: "/robotic-knee" },
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "Sports Injury Care", to: "/sports-injury" },
        { label: "Orthopaedic Conditions", to: "/conditions" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
      faqs={[
        { q: "Do I really need a knee replacement?", a: "Not always. Many patients improve with the right combination of weight optimisation, physiotherapy, medication and injections. Surgery is considered only when pain limits daily life and imaging supports it." },
        { q: "How is robotic knee replacement different?", a: "Robotic systems assist with 3D pre-op planning, precise bone preparation and real-time soft-tissue balancing. Dr. Tomar performs the surgery; the robot does not act autonomously." },
        { q: "Total or partial (uni) knee replacement — which is right for me?", a: "Partial replacement is offered when arthritis is limited to one compartment and ligaments are intact. Total replacement is preferred for widespread arthritis or deformity." },
        { q: "How soon can I walk after knee surgery?", a: "Most patients begin assisted walking within 24 hours. Stairs, driving and outdoor walks progress over the first four to six weeks." },
        { q: "How long does a modern knee implant last?", a: "In most patients today's implants are designed to last well over 15–20 years when placed accurately and cared for properly." },
        { q: "Can I sit cross-legged or squat afterwards?", a: "High-flex implants and modern techniques allow deep bending for most patients, but this depends on your anatomy, muscle strength and pre-op flexibility." },
      ]}
      image={bannerImg}
      testimonials={testimonialsByTopic["knee"]}
      />

  ),
});
