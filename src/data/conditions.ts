import {
  Activity,
  Bone,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Zap,
  CircleDot,
  Hand,
  Dumbbell,
  Waves,
  Snowflake,
  Layers,
  Ruler,
  Lock,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Condition = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  related?: { label: string; to: string };
};

export const conditions: Condition[] = [
  {
    slug: "knee-arthritis",
    name: "Knee Arthritis",
    icon: CircleDot,
    tagline: "Progressive wear of the knee cartilage leading to pain, stiffness and deformity.",
    overview:
      "Knee arthritis is one of the most common causes of disability in adults over 50. Cartilage that cushions the joint gradually wears away, and the bones begin to rub, causing pain, swelling and loss of movement.",
    symptoms: [
      "Pain while climbing stairs, squatting or sitting cross-legged",
      "Morning stiffness that eases with movement",
      "Swelling, warmth or a grinding sensation",
      "Bow-leg or knock-knee deformity in advanced stages",
    ],
    causes: [
      "Age-related wear (osteoarthritis)",
      "Previous injury, meniscus tear or ligament damage",
      "Obesity, family history, inflammatory arthritis",
    ],
    treatment: [
      "Weight optimisation, physiotherapy and activity modification",
      "Cartilage-supportive medication and injections (PRP, viscosupplementation)",
      "Arthroscopy for early mechanical symptoms",
      "Robotic total or partial knee replacement in advanced disease",
    ],
    related: { label: "Explore Knee Care", to: "/knee" },
  },
  {
    slug: "hip-arthritis",
    name: "Hip Arthritis",
    icon: Activity,
    tagline: "Groin pain and stiffness from progressive hip joint wear.",
    overview:
      "Hip arthritis often presents as groin or thigh pain, not just hip pain. It slowly restricts sitting, walking and daily activities like wearing socks or shoes.",
    symptoms: [
      "Groin, thigh or buttock pain — worse after activity",
      "Difficulty crossing legs, wearing socks, sitting on the floor",
      "Limp, shortening of the limb, stiffness in the morning",
    ],
    causes: [
      "Primary osteoarthritis",
      "Avascular necrosis (AVN)",
      "Post-traumatic arthritis, developmental dysplasia, inflammatory arthritis",
    ],
    treatment: [
      "Physiotherapy, core strengthening, weight control",
      "Anti-inflammatory medication and image-guided injections",
      "Robotic total hip replacement — direct anterior or posterior approach",
    ],
    related: { label: "Explore Hip Care", to: "/hip" },
  },
  {
    slug: "shoulder-arthritis",
    name: "Shoulder Arthritis",
    icon: HeartPulse,
    tagline: "Wearing of the shoulder joint causing deep pain and loss of overhead motion.",
    overview:
      "Shoulder arthritis is less common than knee or hip but equally disabling. It affects reaching overhead, dressing and sleeping on the affected side.",
    symptoms: [
      "Deep shoulder pain, worse at night",
      "Grinding or clicking with movement",
      "Loss of reach — combing hair, reaching back pocket",
    ],
    causes: [
      "Osteoarthritis and rotator cuff arthropathy",
      "Rheumatoid arthritis",
      "Old fractures and dislocations",
    ],
    treatment: [
      "Guided physiotherapy and posture correction",
      "Injections (steroid, PRP) for early cases",
      "Anatomic or reverse total shoulder replacement for advanced disease",
    ],
    related: { label: "Explore Shoulder Care", to: "/shoulder" },
  },
  {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    icon: Bone,
    tagline: "The most common form of arthritis — a slow degeneration of joint cartilage.",
    overview:
      "Osteoarthritis (OA) develops as cartilage wears down with age, weight and activity. It can affect any joint but knees, hips and hands are most commonly involved.",
    symptoms: [
      "Joint pain that worsens with use, eases with rest",
      "Stiffness after inactivity",
      "Reduced range of motion and joint enlargement",
    ],
    causes: ["Age, weight, joint overuse", "Previous joint injury", "Genetic predisposition"],
    treatment: [
      "Lifestyle modification, physiotherapy, bracing",
      "Analgesics, cartilage supplements, PRP",
      "Joint-preserving surgery or replacement when appropriate",
    ],
  },
  {
    slug: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    icon: ShieldAlert,
    tagline: "An auto-immune disease that attacks the joint lining, often on both sides of the body.",
    overview:
      "Rheumatoid arthritis (RA) is a systemic inflammatory condition. Early diagnosis and rheumatology-led medical management can prevent severe joint destruction.",
    symptoms: [
      "Symmetric small-joint pain (hands, wrists, feet)",
      "Prolonged morning stiffness (>1 hour)",
      "Fatigue, low-grade fever, joint swelling and warmth",
    ],
    causes: ["Auto-immune response, genetic factors", "Environmental triggers (smoking, infections)"],
    treatment: [
      "Combined rheumatology and orthopaedic care",
      "DMARDs and biologics prescribed by rheumatologist",
      "Reconstructive surgery for damaged joints when medical therapy is insufficient",
    ],
  },
  {
    slug: "avascular-necrosis",
    name: "Avascular Necrosis (AVN)",
    icon: Sparkles,
    tagline: "Loss of blood supply causes bone death — most often in the hip of young adults.",
    overview:
      "AVN of the femoral head is common in younger patients. Early detection with MRI allows joint-preserving options; late presentation usually needs replacement.",
    symptoms: [
      "Groin pain that worsens on weight-bearing",
      "Reduced hip rotation, limp",
      "Sudden collapse of the femoral head in late stages",
    ],
    causes: [
      "Prolonged steroid use, alcohol excess",
      "Sickle cell disease, autoimmune disorders",
      "Post-traumatic disruption of blood supply",
    ],
    treatment: [
      "Core decompression, bone grafting in early stages",
      "Rotational osteotomy in select cases",
      "Robotic total hip replacement in advanced AVN",
    ],
    related: { label: "Explore Hip Care", to: "/hip" },
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    icon: Zap,
    tagline: "Ligament, cartilage and tendon injuries from sport and active lifestyles.",
    overview:
      "From weekend players to competitive athletes, sports injuries need accurate diagnosis and structured rehabilitation to return safely to play.",
    symptoms: [
      "Sudden pop or giving-way of a joint",
      "Swelling within hours of injury",
      "Instability, locking or inability to bear weight",
    ],
    causes: ["Contact injuries, pivoting/twisting sports", "Overuse and inadequate conditioning"],
    treatment: [
      "RICE, bracing and structured physiotherapy",
      "Arthroscopic repair or reconstruction where indicated",
      "Sport-specific rehabilitation and return-to-play protocol",
    ],
    related: { label: "Sports Injury Care", to: "/sports-injury" },
  },
  {
    slug: "ligament-injuries",
    name: "Ligament Injuries",
    icon: Dumbbell,
    tagline: "ACL, PCL, MCL and multi-ligament tears — the joint's stabilisers.",
    overview:
      "Ligament tears — particularly ACL — commonly follow twisting injuries in sport. Reconstruction restores stability so the joint can pivot and cut safely.",
    symptoms: [
      "Immediate swelling and instability",
      "Sense of the knee 'giving way' on turning",
      "Difficulty running, jumping, changing direction",
    ],
    causes: ["Non-contact pivoting (football, basketball)", "Direct blow, road traffic accidents"],
    treatment: [
      "Bracing and pre-hab to restore motion first",
      "Arthroscopic ACL/PCL reconstruction with autograft",
      "9–12 month sport-specific rehabilitation",
    ],
    related: { label: "Sports Injury Care", to: "/sports-injury" },
  },
  {
    slug: "meniscus-tears",
    name: "Meniscus Tears",
    icon: Waves,
    tagline: "Tears of the knee's shock-absorbing cartilage — common in sport and after 40.",
    overview:
      "The meniscus cushions and stabilises the knee. Preserving it, wherever possible, protects against future arthritis.",
    symptoms: [
      "Sharp pain on twisting or squatting",
      "Locking, catching or clicking in the knee",
      "Swelling that comes and goes",
    ],
    causes: ["Twisting injury in younger patients", "Degenerative tears from age-related wear"],
    treatment: [
      "Physiotherapy for stable, degenerative tears",
      "Arthroscopic meniscus repair (preferred) or selective trimming",
      "Meniscal preservation to protect cartilage long-term",
    ],
  },
  {
    slug: "cartilage-damage",
    name: "Cartilage Damage",
    icon: Layers,
    tagline: "Focal defects in joint cartilage that cause pain and mechanical symptoms.",
    overview:
      "Isolated cartilage lesions in the knee or ankle can be repaired using biological techniques, preventing progression to widespread arthritis.",
    symptoms: [
      "Pain on impact activities",
      "Catching, clicking or intermittent swelling",
      "Loose body sensation inside the joint",
    ],
    causes: [
      "Traumatic impact injury",
      "Osteochondritis dissecans",
      "Untreated meniscus or ligament injury",
    ],
    treatment: [
      "Microfracture, mosaicplasty",
      "Autologous chondrocyte implantation in select cases",
      "Realignment osteotomy to unload the damaged area",
    ],
  },
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    icon: Snowflake,
    tagline: "Progressive stiffness and pain that severely restricts shoulder movement.",
    overview:
      "Frozen shoulder (adhesive capsulitis) typically affects adults 40–60, and is more common in patients with diabetes or thyroid disease.",
    symptoms: [
      "Gradually worsening pain, especially at night",
      "Loss of both active and passive movement",
      "Difficulty reaching overhead or behind the back",
    ],
    causes: ["Idiopathic (most common)", "Diabetes, thyroid disorders", "Post-injury or post-surgical stiffness"],
    treatment: [
      "Guided physiotherapy and stretching",
      "Hydrodilatation and intra-articular injections",
      "Arthroscopic capsular release for resistant cases",
    ],
    related: { label: "Shoulder Care", to: "/shoulder" },
  },
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    icon: Hand,
    tagline: "Pain on the outer elbow from overload of the wrist extensor tendons.",
    overview:
      "Tennis elbow (lateral epicondylitis) is a common overuse condition — despite the name, it affects many non-athletes doing repetitive gripping tasks.",
    symptoms: [
      "Pain on the outer elbow, worse with gripping",
      "Weakness lifting a cup or shaking hands",
      "Tenderness over the lateral epicondyle",
    ],
    causes: [
      "Repetitive wrist extension and gripping",
      "Poor technique in racquet sports",
      "Occupational overuse (typing, tools)",
    ],
    treatment: [
      "Activity modification, counter-force bracing",
      "Eccentric physiotherapy, PRP injections",
      "Arthroscopic or open release for resistant cases",
    ],
    related: { label: "Elbow Care", to: "/elbow" },
  },
  {
    slug: "joint-deformities",
    name: "Joint Deformities",
    icon: Ruler,
    tagline: "Bow-legs, knock-knees and rotational deformities that alter joint mechanics.",
    overview:
      "Deformities around the knee and hip accelerate cartilage wear. Correcting alignment — with osteotomy or robotic replacement — restores mechanics and reduces pain.",
    symptoms: [
      "Visible bow-leg (varus) or knock-knee (valgus) alignment",
      "Uneven shoe wear, altered gait",
      "One-sided knee or hip pain",
    ],
    causes: [
      "Post-traumatic malunion",
      "Long-standing arthritis",
      "Developmental or metabolic bone disease",
    ],
    treatment: [
      "High tibial osteotomy or distal femoral osteotomy in younger patients",
      "Robotic alignment-guided knee replacement in arthritis",
      "Deformity correction as part of hip reconstruction",
    ],
  },
  {
    slug: "joint-stiffness",
    name: "Joint Stiffness",
    icon: Lock,
    tagline: "Loss of range of motion after injury, surgery or long-standing arthritis.",
    overview:
      "Stiffness can be as disabling as pain. A structured combination of therapy, medical management and — where required — surgical release restores functional motion.",
    symptoms: [
      "Difficulty bending or straightening a joint fully",
      "Trouble sitting cross-legged, squatting, climbing",
      "Progressive loss of movement after injury or surgery",
    ],
    causes: ["Post-traumatic scarring", "Post-surgical adhesions", "Frozen shoulder, advanced arthritis"],
    treatment: [
      "Intensive physiotherapy and splinting",
      "Manipulation under anaesthesia",
      "Arthroscopic release, revision surgery or replacement when indicated",
    ],
  },
  {
    slug: "bone-joint-trauma",
    name: "Bone & Joint Trauma",
    icon: AlertTriangle,
    tagline: "Fractures, dislocations and complex injuries needing urgent, expert care.",
    overview:
      "Timely, well-planned fracture care restores anatomy and function. Neglected or malunited injuries can be reconstructed with modern techniques.",
    symptoms: [
      "Deformity, severe pain, inability to bear weight",
      "Swelling, bruising, visible wound",
      "Persistent pain or non-union after previous fixation",
    ],
    causes: [
      "Road traffic accidents, falls",
      "Osteoporosis (fragility fractures)",
      "Sports and high-energy injuries",
    ],
    treatment: [
      "Modern internal fixation with plates, nails, screws",
      "Peri-articular and complex intra-articular fixation",
      "Reconstruction, non-union surgery and delayed joint replacement",
    ],
    related: { label: "Trauma & Fractures", to: "/trauma" },
  },
];

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
