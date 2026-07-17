import { useState, type ReactNode } from "react";
import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "./AppointmentForm";
import { cn } from "@/lib/utils";

interface BookAppointmentDialogProps {
  children?: ReactNode;
  triggerClassName?: string;
}

/** Wrap any element to open the appointment dialog. */
export function BookAppointmentDialog({ children, triggerClassName }: BookAppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button className={cn("bg-gradient-brand shadow-elegant", triggerClassName)}>
            <Calendar className="h-4 w-4" /> Book Appointment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book an Appointment</DialogTitle>
          <DialogDescription>
            Share a few details and our team will confirm your consultation with Dr. L. Tomar.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm compact onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

/** Fixed floating call-to-action visible on every page. */
export function FloatingBookAppointment() {
  return (
    <div className="fixed bottom-5 right-5 z-40 md:bottom-6 md:right-6 print:hidden">
      <BookAppointmentDialog>
        <Button
          size="lg"
          className="bg-gradient-brand shadow-elegant rounded-full h-14 px-5 gap-2 text-primary-foreground hover:translate-y-[-1px] transition"
        >
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline font-medium">Book Appointment</span>
        </Button>
      </BookAppointmentDialog>
    </div>
  );
}
