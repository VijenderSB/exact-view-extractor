import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AppointmentSection } from "@/components/site/sections/AppointmentSection";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export function PageShell({ children, hideAppointment = false }: { children: ReactNode; hideAppointment?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
        {!hideAppointment && <AppointmentSection />}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
