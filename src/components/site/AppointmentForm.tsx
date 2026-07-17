import { useState } from "react";
import { z } from "zod";
import { Calendar, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, { message: "Enter a valid phone number" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email" })
    .max(255)
    .optional()
    .or(z.literal("")),
  procedure: z.string().min(1, { message: "Select a procedure" }),
  preferredDate: z.string().optional().or(z.literal("")),
  message: z.string().max(1000).optional().or(z.literal("")),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof appointmentSchema>, string>>;

interface AppointmentFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function AppointmentForm({ onSuccess, compact = false }: AppointmentFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [procedure, setProcedure] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      procedure: String(formData.get("procedure") ?? procedure),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = appointmentSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    // Simulate submission — wire to backend when Cloud is enabled.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Appointment request received", {
      description: "Our team will confirm your appointment shortly.",
    });
    (e.target as HTMLFormElement).reset();
    setProcedure("");
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="apt-name">Full name</Label>
          <Input id="apt-name" name="name" placeholder="Your name" maxLength={100} required />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="apt-phone">Phone</Label>
          <Input id="apt-phone" name="phone" type="tel" placeholder="+91 98xxxxxxxx" maxLength={20} required />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="apt-email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input id="apt-email" name="email" type="email" placeholder="you@example.com" maxLength={255} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="apt-date">Preferred date <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input id="apt-date" name="preferredDate" type="date" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="apt-procedure">Consultation for</Label>
        <Select value={procedure} onValueChange={setProcedure} name="procedure">
          <SelectTrigger id="apt-procedure">
            <SelectValue placeholder="Select a procedure" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="robotic-knee">Robotic Knee Replacement</SelectItem>
            <SelectItem value="robotic-hip">Robotic Hip Replacement</SelectItem>
            <SelectItem value="revision">Revision / Complex Reconstruction</SelectItem>
            <SelectItem value="sports">Sports Orthopaedic Consult</SelectItem>
            <SelectItem value="second-opinion">Second Opinion</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="procedure" value={procedure} />
        {errors.procedure && <p className="text-xs text-destructive">{errors.procedure}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="apt-message">Notes <span className="text-muted-foreground font-normal">(optional)</span></Label>
        <Textarea
          id="apt-message"
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Briefly describe your concern, current pain level or any prior treatment."
        />
      </div>

      <Button type="submit" disabled={submitting} className="w-full bg-gradient-brand shadow-elegant">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Calendar className="h-4 w-4" /> Request Appointment
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Your details are confidential and used only to arrange your consultation.
      </p>
    </form>
  );
}
