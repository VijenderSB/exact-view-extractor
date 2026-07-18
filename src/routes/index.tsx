import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/sections/Hero";
import { TrustStrip } from "@/components/site/sections/TrustStrip";
import { RoboticFlagship } from "@/components/site/sections/RoboticFlagship";
import { SymptomGrid } from "@/components/site/sections/SymptomGrid";
import { AboutDoctor } from "@/components/site/sections/AboutDoctor";
import { Comparison } from "@/components/site/sections/Comparison";
import { Journey } from "@/components/site/sections/Journey";
import { Outstation } from "@/components/site/sections/Outstation";
import { FAQ } from "@/components/site/sections/FAQ";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { AppointmentSection } from "@/components/site/sections/AppointmentSection";
import { Testimonials } from "@/components/site/sections/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. L. Tomar — Robotic Knee & Hip Replacement Surgery, Delhi NCR" },
      { name: "description", content: "Advanced robotic knee and hip replacement surgery in Delhi NCR. Personalised evaluation, technology-assisted surgical planning and comprehensive recovery support with Dr. L. Tomar." },
      { property: "og:title", content: "Dr. L. Tomar — Robotic Knee & Hip Replacement Surgery, Delhi NCR" },
      { property: "og:description", content: "Advanced robotic knee and hip replacement surgery in Delhi NCR. Personalised evaluation, technology-assisted surgical planning and comprehensive recovery support with Dr. L. Tomar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <RoboticFlagship />
        <SymptomGrid />
        <AboutDoctor />
        <Comparison />
        <Journey />
        <Outstation />
        <FAQ />
        <AppointmentSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
