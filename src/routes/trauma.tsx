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
      faqs={[
        { q: "How soon should a fracture be operated on?", a: "Most closed fractures are fixed within a few days once swelling settles. Hip fractures in the elderly and open fractures are treated on an urgent basis, ideally within 24–48 hours." },
        { q: "Can a fracture heal without surgery?", a: "Yes — undisplaced, stable fractures heal well with a cast or brace. Displaced, articular or unstable fractures usually need internal fixation to restore anatomy and allow early movement." },
        { q: "What is a non-union or malunion?", a: "A non-union is a fracture that has failed to heal in the expected time. A malunion is a fracture that has healed in the wrong position. Both can be corrected with reconstructive surgery." },
        { q: "Will I need the plates or screws removed later?", a: "Most modern implants can be left in place safely. Removal is considered only if they cause irritation, infection or restrict function." },
        { q: "Can post-traumatic arthritis be treated?", a: "Yes — options range from injections and osteotomy in early cases to joint replacement when cartilage damage is advanced." },
        { q: "How long is the recovery after complex fracture surgery?", a: "Bone healing typically takes 3–6 months, but return to daily activities and work often happens much earlier with structured physiotherapy." },
      ]}
      image={bannerImg}
      />

  ),
});
