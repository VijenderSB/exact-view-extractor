import { createFileRoute } from "@tanstack/react-router";
import { Bone } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

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
    />
  ),
});
