import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FileText, HelpCircle, HeartPulse, Download, ClipboardCheck, Users } from "lucide-react";
import { FAQBlock } from "@/components/site/ContentBlocks";


export const Route = createFileRoute("/patient-resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources — Dr. L. Tomar" },
      { name: "description", content: "Pre-surgery guides, recovery timelines, exercise videos, insurance help and FAQs to prepare you for your joint replacement or arthroscopic procedure." },
      { property: "og:title", content: "Patient Resources — Dr. L. Tomar" },
      { property: "og:description", content: "Guides, checklists, recovery plans and FAQs for every step of your journey." },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  { icon: FileText, title: "Pre-surgery guide", desc: "What to expect in the week before your procedure — diet, medication, tests and paperwork." },
  { icon: HeartPulse, title: "Recovery timeline", desc: "Day-by-day and week-by-week milestones after knee or hip replacement." },
  { icon: ClipboardCheck, title: "Exercise programs", desc: "Physiotherapy protocols and home exercises curated for each stage of recovery." },
  { icon: Download, title: "Downloadable checklists", desc: "Hospital packing lists, medication charts and discharge planning documents." },
  { icon: Users, title: "For family & caregivers", desc: "How to support a loved one through surgery, rehabilitation and daily activities." },
  { icon: HelpCircle, title: "Insurance & billing", desc: "Guidance on insurance approvals, cashless procedures and out-of-pocket estimates." },
];

function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Patient Resources"
        title="Everything you need — from your first question to your full recovery."
        description="A well-prepared patient recovers faster. These guides, checklists and answers are designed to keep you informed, confident and in control throughout your journey."
      />

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/40 transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 font-display text-lg text-foreground">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
