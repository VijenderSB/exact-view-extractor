import { Activity, ArrowRight, Footprints, Move3d, Bone, Waves, RotateCcw, Trophy, Hand } from "lucide-react";

const symptoms = [
  { icon: Footprints, label: "Knee pain while walking" },
  { icon: Activity, label: "Difficulty climbing stairs" },
  { icon: Move3d, label: "Knee stiffness or locking" },
  { icon: Bone, label: "Bow-leg or knock-knee deformity" },
  { icon: Waves, label: "Hip or groin pain" },
  { icon: RotateCcw, label: "Difficulty sitting or standing" },
  { icon: Move3d, label: "Pain after previous joint replacement" },
  { icon: Trophy, label: "Sports-related knee injury" },
  { icon: Hand, label: "Shoulder weakness or pain" },
];

export function SymptomGrid() {
  return (
    <section id="assessment" className="py-24 bg-gradient-soft">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Where does it hurt?</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Find care based on how <span className="text-gradient-brand">you feel today</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A brief symptom check helps direct you to the right evaluation. Every plan begins with a clinical consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map(({ icon: Icon, label }) => (
            <button key={label} className="group text-left flex items-center gap-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card p-5 transition-all">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 font-medium text-foreground">{label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
