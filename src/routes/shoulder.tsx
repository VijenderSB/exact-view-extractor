import { createFileRoute } from "@tanstack/react-router";
import bannerImg from "@/assets/banner-shoulder.jpg";
import { Activity } from "lucide-react";
import { SpecializationPage } from "@/components/site/SpecializationPage";
import { testimonialsByTopic } from "@/data/testimonials";

export const Route = createFileRoute("/shoulder")({
  head: () => ({
    meta: [
      { title: "Shoulder Surgery — Dr. L. Tomar" },
      { name: "description", content: "Shoulder replacement, rotator cuff repair, arthroscopy, instability and frozen shoulder care." },
      { property: "og:title", content: "Shoulder Surgery — Dr. L. Tomar" },
      { property: "og:description", content: "Complete shoulder care — replacement, arthroscopy, instability, cuff." },
    ],
  }),
  component: () => (
    <SpecializationPage
      eyebrow="Shoulder Surgery"
      title="Shoulder care — from stiff and painful to strong and mobile."
      description="Modern arthroscopy and shoulder replacement for arthritis, rotator cuff tears, instability, dislocations and frozen shoulder that refuses to settle."
      icon={Activity}
      accent="teal"
      overview={[
        "Keyhole shoulder arthroscopy for rotator cuff and labral repairs with less pain and quicker return to activity.",
        "Anatomic and reverse shoulder replacement — matched to the state of your rotator cuff and bone.",
        "Structured recovery: sling, graded range of motion, then strengthening in a supervised timeline.",
      ]}
      procedures={[
        "Shoulder Replacement",
        "Reverse Shoulder Replacement",
        "Total Shoulder Replacement",
        "Shoulder Arthroscopy",
        "Rotator Cuff Repair",
        "Shoulder Instability Surgery",
        "Frozen Shoulder Arthroscopic Release",
        "Shoulder Dislocation Surgery",
      ]}
      related={[
        { label: "Shoulder & Elbow Overview", to: "/shoulder-elbow" },
        { label: "Elbow Surgery", to: "/elbow" },
        { label: "Arthroscopy", to: "/arthroscopy" },
        { label: "All Specializations", to: "/specializations" },
        { label: "Book a Consultation", to: "/contact" },
      ]}
      faqs={[
        { q: "What is the difference between anatomic and reverse shoulder replacement?", a: "Anatomic replacement mirrors normal anatomy and works when the rotator cuff is intact. Reverse replacement is designed for shoulders with a torn, irreparable rotator cuff or cuff arthropathy." },
        { q: "Can rotator cuff tears heal without surgery?", a: "Partial and small degenerative tears often improve with physiotherapy and injections. Full-thickness traumatic tears in active patients usually need arthroscopic repair to prevent progression." },
        { q: "How long does frozen shoulder last?", a: "Untreated, it can last 18–24 months. Guided physiotherapy, hydrodilatation and — if resistant — arthroscopic capsular release shorten recovery significantly." },
        { q: "My shoulder keeps dislocating — will it settle on its own?", a: "Recurrent dislocations damage the labrum and bone. Arthroscopic stabilisation restores confidence and prevents further wear, especially in young, active patients." },
        { q: "Can I sleep on my side after shoulder surgery?", a: "Sleeping on the operated side is avoided for the first six weeks. A supportive sling and pillow set-up keep the shoulder protected while it heals." },
      ]}
      image={bannerImg}
      testimonials={testimonialsByTopic["shoulder"]}
      />

  ),
});
