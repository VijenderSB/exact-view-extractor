import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-trauma.jpg";
import { ShieldPlus } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";

export const Route = createFileRoute("/trauma")({
  head: () => ({
    meta: [
      { title: "Trauma & Fracture Care — Dr. L. Tomar" },
      { name: "description", content: "Complex fracture management, pelvic and acetabular surgery, periarticular fractures, upper and lower limb trauma reconstruction." },
      { property: "og:title", content: "Trauma & Fracture Care — Dr. L. Tomar" },
      { property: "og:description", content: "Complex fracture and reconstruction surgery." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Trauma & Fracture Care"
      title="Complex trauma, reconstructed with a plan for full recovery."
      description="Precision fixation and reconstruction for high-energy fractures, articular injuries and neglected or malunited cases — with early mobilisation and long-term function in mind."
      icon={ShieldPlus}
      accent="primary"
      overview={[
        "Detailed imaging and pre-op planning for periarticular and pelvic fractures.",
        "Modern implants, minimally invasive fixation where the fracture pattern allows.",
        "Early rehabilitation to prevent stiffness and muscle loss.",
        "Reconstruction options for malunion, non-union and post-traumatic arthritis.",
      ]}
      procedures={[
        "Complex Fracture Management",
        "Pelvic & Acetabular Fracture Surgery",
        "Periarticular Fracture Surgery",
        "Upper Limb Trauma",
        "Lower Limb Trauma",
        "Malunion & Non-Union Correction",
        "Post-Traumatic Reconstruction",
      ]}
      related={[
        { label: "Hip Fracture Care", to: "/hip" },
        { label: "Knee Surgery", to: "/knee" },
        { label: "Sports Injury", to: "/sports-injury" },
        { label: "Orthopaedic Conditions", to: "/conditions" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
    image={bannerImg}
      />
  ),
});
