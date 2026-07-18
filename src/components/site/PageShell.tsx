import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AppointmentSection } from "@/components/site/sections/AppointmentSection";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { Testimonials } from "@/components/site/sections/Testimonials";

export function PageShell({
  children,
  hideAppointment = false,
  hideTestimonials = false,
}: {
  children: ReactNode;
  hideAppointment?: boolean;
  hideTestimonials?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
        {!hideTestimonials && <Testimonials />}
        {!hideAppointment && <AppointmentSection />}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
