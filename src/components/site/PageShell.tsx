import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AppointmentSection } from "@/components/site/sections/AppointmentSection";
import { FinalCTA } from "@/components/site/sections/FinalCTA";
import { Testimonials, type Testimonial } from "@/components/site/sections/Testimonials";

export function PageShell({
  children,
  hideAppointment = false,
  hideTestimonials = false,
  testimonials,
  testimonialsTitle,
  testimonialsSubtitle,
}: {
  children: ReactNode;
  hideAppointment?: boolean;
  hideTestimonials?: boolean;
  testimonials?: Testimonial[];
  testimonialsTitle?: string;
  testimonialsSubtitle?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
        {!hideTestimonials && testimonials && testimonials.length > 0 && (
          <Testimonials items={testimonials} title={testimonialsTitle} subtitle={testimonialsSubtitle} />
        )}
        {!hideAppointment && <AppointmentSection />}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
