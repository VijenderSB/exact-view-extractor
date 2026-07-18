export type City = {
  slug: string;
  name: string;
  state: string;
  region: "NCR" | "Within 100 km" | "Within 200 km";
  distanceFromDelhi?: string;
  travelOptions: string[];
  whyVisit: string;
  localContext: string;
};

export const cities: City[] = [
  // NCR
  { slug: "delhi", name: "Delhi", state: "Delhi", region: "NCR", distanceFromDelhi: "In-city",
    travelOptions: ["Metro to nearest clinic", "Cab / auto within 30–45 mins", "Ample parking at clinic"],
    whyVisit: "Delhi patients receive Dr. Tomar's full spectrum of robotic joint replacement and complex orthopaedic care within their own city — from first consultation to structured post-op rehab.",
    localContext: "As a Delhi-based practice for over three decades, our OPD hours, physiotherapy tie-ups and follow-up scheduling are built around local patients." },
  { slug: "gurgaon", name: "Gurgaon (Gurugram)", state: "Haryana", region: "NCR", distanceFromDelhi: "30 km",
    travelOptions: ["45–60 min drive via NH-48", "Rapid Metro + Yellow Line", "Cab pick-up on surgery day if needed"],
    whyVisit: "Gurgaon patients frequently consult Dr. Tomar for a considered second opinion before robotic knee or hip replacement — especially when advised a bilateral or revision procedure.",
    localContext: "We coordinate imaging (X-ray / MRI) done at Gurgaon centres and share the surgical plan digitally before you travel in." },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", region: "NCR", distanceFromDelhi: "25 km",
    travelOptions: ["45 min drive via DND / NH-24", "Blue Line Metro", "Ambulance / cab transfer available"],
    whyVisit: "Noida and Greater Noida patients access robotic knee replacement, hip resurfacing and arthroscopic sports injury care with minimal travel.",
    localContext: "Follow-up dressings and physiotherapy can be arranged closer to home in coordination with our team." },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", region: "NCR", distanceFromDelhi: "20 km",
    travelOptions: ["40 min drive via NH-9", "Red Line Metro extension", "Rapid Rail (RRTS) connectivity"],
    whyVisit: "Ghaziabad patients — including those from Vaishali, Indirapuram and Vasundhara — reach the clinic quickly for consultation, surgery and follow-up.",
    localContext: "Elderly patients often prefer morning slots to avoid peak traffic; we schedule accordingly." },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", region: "NCR", distanceFromDelhi: "35 km",
    travelOptions: ["45–60 min drive via Mathura Road", "Violet Line Metro", "Cab / private transfer"],
    whyVisit: "Faridabad patients consult Dr. Tomar for arthritis, sports injuries and joint replacement with the assurance of a Delhi-based robotic surgical centre.",
    localContext: "Reports and imaging from Faridabad hospitals can be reviewed remotely before an in-person visit." },
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh", region: "NCR", distanceFromDelhi: "45 km",
    travelOptions: ["1 hr drive via Noida Expressway", "Aqua Line Metro", "Airport pickup from Jewar (when applicable)"],
    whyVisit: "Growing Greater Noida community has increasing demand for robotic joint replacement — Dr. Tomar's clinic is the nearest specialist centre.",
    localContext: "We help schedule pre-op investigations locally to save travel time." },
  { slug: "sonipat", name: "Sonipat", state: "Haryana", region: "NCR", distanceFromDelhi: "50 km",
    travelOptions: ["1 hr drive via NH-44", "Local trains to Delhi", "Cab / private transfer"],
    whyVisit: "Sonipat and Kundli patients access Dr. Tomar's robotic joint replacement and arthroscopic sports injury care within a short drive.",
    localContext: "Same-day OPD and imaging review are practical; morning appointments preferred to beat traffic." },
  { slug: "bahadurgarh", name: "Bahadurgarh", state: "Haryana", region: "NCR", distanceFromDelhi: "35 km",
    travelOptions: ["45 min drive via NH-9", "Green Line Metro terminus", "Cab / private transfer"],
    whyVisit: "Bahadurgarh patients reach the clinic quickly for arthritis consultation, robotic knee replacement and follow-up rehab.",
    localContext: "Metro connectivity makes attendant travel easy for elderly patients." },

  // Within 100 km
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", region: "Within 100 km", distanceFromDelhi: "70 km",
    travelOptions: ["1.5 hr drive via NH-58", "Rapid Rail (RRTS) Delhi–Meerut", "Trains to Anand Vihar / New Delhi"],
    whyVisit: "Meerut patients travel to Delhi for robotic-precision surgery not locally available, then return home for supervised rehab.",
    localContext: "Structured discharge with a written recovery plan and remote follow-ups reduces repeat visits." },
  { slug: "panipat", name: "Panipat", state: "Haryana", region: "Within 100 km", distanceFromDelhi: "90 km",
    travelOptions: ["1.5 hr drive via NH-44", "Shatabdi / local trains", "Cab / private transfer"],
    whyVisit: "Panipat patients consult Dr. Tomar for knee arthritis, robotic joint replacement and shoulder / sports injuries.",
    localContext: "Expressway access makes same-day OPD visits practical for many patients." },
  { slug: "rohtak", name: "Rohtak", state: "Haryana", region: "Within 100 km", distanceFromDelhi: "70 km",
    travelOptions: ["1.5 hr drive via NH-9", "Local trains to Delhi", "Cab / private transfer"],
    whyVisit: "Rohtak and greater Haryana belt patients travel for robotic knee and hip replacement with structured Delhi–home follow-up.",
    localContext: "Pre-op investigations coordinated locally to shorten the Delhi stay." },
  { slug: "rewari", name: "Rewari", state: "Haryana", region: "Within 100 km", distanceFromDelhi: "85 km",
    travelOptions: ["1.5 hr drive via NH-48", "Local trains", "RRTS connectivity (planned)"],
    whyVisit: "Rewari and southern Haryana patients access advanced robotic joint replacement with easy same-day travel.",
    localContext: "Imaging done locally can be reviewed digitally before an OPD visit." },
  { slug: "hapur", name: "Hapur", state: "Uttar Pradesh", region: "Within 100 km", distanceFromDelhi: "65 km",
    travelOptions: ["1.5 hr drive via NH-9", "Local trains", "Cab / private transfer"],
    whyVisit: "Hapur patients consult Dr. Tomar for arthritis surgery, sports injury reconstruction and robotic joint replacement.",
    localContext: "Same-day OPD workflow with early-morning slots for out-of-town patients." },
  { slug: "baghpat", name: "Baghpat", state: "Uttar Pradesh", region: "Within 100 km", distanceFromDelhi: "55 km",
    travelOptions: ["1 hr drive via NH-334B", "Local trains", "Cab / private transfer"],
    whyVisit: "Baghpat patients reach the clinic within an hour for consultation, surgery and structured follow-up.",
    localContext: "Family-friendly scheduling for elderly patients with attendants." },
  { slug: "bulandshahr", name: "Bulandshahr", state: "Uttar Pradesh", region: "Within 100 km", distanceFromDelhi: "75 km",
    travelOptions: ["1.5 hr drive via NH-91", "Local trains", "Cab / private transfer"],
    whyVisit: "Bulandshahr patients travel to Delhi for robotic knee replacement and advanced arthroscopic surgery.",
    localContext: "Discharge and rehab plan coordinated with trusted physios back home." },

  // Within 200 km
  { slug: "karnal", name: "Karnal", state: "Haryana", region: "Within 200 km", distanceFromDelhi: "125 km",
    travelOptions: ["2 hr drive via NH-44", "Shatabdi / Vande Bharat", "Cab / private transfer"],
    whyVisit: "Karnal patients travel for robotic joint replacement, revision surgery and complex arthroscopic reconstruction.",
    localContext: "Vande Bharat makes same-day OPD comfortable; imaging can be reviewed digitally in advance." },
  { slug: "muzaffarnagar", name: "Muzaffarnagar", state: "Uttar Pradesh", region: "Within 200 km", distanceFromDelhi: "130 km",
    travelOptions: ["2.5 hr drive via NH-58", "Trains to Delhi", "Cab / private transfer"],
    whyVisit: "Muzaffarnagar patients consult Dr. Tomar for painful arthritis, sports injuries and robotic knee / hip replacement.",
    localContext: "Consolidated visit planning — OPD, imaging and admission — to minimise repeat trips." },
  { slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh", region: "Within 200 km", distanceFromDelhi: "130 km",
    travelOptions: ["2.5 hr drive via Yamuna Expressway", "Trains to Delhi", "Cab / private transfer"],
    whyVisit: "Aligarh patients travel to Delhi for advanced robotic joint replacement and complex revision surgery.",
    localContext: "Pre-op investigations coordinated locally; return travel planned around early-recovery review." },
  { slug: "bhiwani", name: "Bhiwani", state: "Haryana", region: "Within 200 km", distanceFromDelhi: "130 km",
    travelOptions: ["2.5 hr drive via NH-9", "Trains to Delhi", "Cab / private transfer"],
    whyVisit: "Bhiwani patients consult Dr. Tomar for robotic knee replacement and shoulder / sports injuries.",
    localContext: "Rehab planning accounts for travel back home; remote follow-ups reduce repeat visits." },
  { slug: "hisar", name: "Hisar", state: "Haryana", region: "Within 200 km", distanceFromDelhi: "165 km",
    travelOptions: ["3 hr drive via NH-9", "Trains to Delhi", "Domestic flights (limited)"],
    whyVisit: "Hisar and western Haryana patients travel for robotic joint replacement and specialist trauma reconstruction.",
    localContext: "Consolidated single-visit workflow with structured discharge plan." },
  { slug: "mathura", name: "Mathura", state: "Uttar Pradesh", region: "Within 200 km", distanceFromDelhi: "165 km",
    travelOptions: ["2.5 hr drive via Yamuna Expressway", "Shatabdi / Rajdhani", "Cab / private transfer"],
    whyVisit: "Mathura and Vrindavan patients travel for robotic knee replacement and hip resurfacing with structured Delhi–home follow-up.",
    localContext: "Expressway makes same-day OPD comfortable even for elderly patients." },
  { slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh", region: "Within 200 km", distanceFromDelhi: "170 km",
    travelOptions: ["3 hr drive via NH-9", "Vande Bharat / trains", "Cab / private transfer"],
    whyVisit: "Moradabad patients access advanced robotic joint replacement and revision surgery not routinely available locally.",
    localContext: "Pre-visit digital review of X-rays / MRI shortens Delhi stay." },
  { slug: "saharanpur", name: "Saharanpur", state: "Uttar Pradesh", region: "Within 200 km", distanceFromDelhi: "170 km",
    travelOptions: ["3.5 hr drive via NH-334", "Trains to Delhi", "Cab / private transfer"],
    whyVisit: "Saharanpur patients travel for robotic-precision knee replacement, shoulder surgery and sports injury care.",
    localContext: "Discharge plan coordinates with trusted local physios for structured rehab." },
  { slug: "alwar", name: "Alwar", state: "Rajasthan", region: "Within 200 km", distanceFromDelhi: "160 km",
    travelOptions: ["3 hr drive via NH-48", "Trains to Delhi", "Cab / private transfer"],
    whyVisit: "Alwar and northern Rajasthan patients consult Dr. Tomar for arthritis surgery, robotic joint replacement and complex trauma.",
    localContext: "Same-day OPD workflow; imaging reviewed digitally before travel." },
  { slug: "ambala", name: "Ambala", state: "Haryana", region: "Within 200 km", distanceFromDelhi: "200 km",
    travelOptions: ["3.5 hr drive via NH-44", "Shatabdi / Vande Bharat (~2 hr)", "Cab / private transfer"],
    whyVisit: "Ambala patients travel for robotic knee / hip replacement and revision surgeries with a considered second opinion.",
    localContext: "Vande Bharat enables comfortable same-day travel for OPD and follow-up." },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

export const citiesByRegion = () => {
  const map: Record<string, City[]> = {};
  for (const c of cities) {
    map[c.region] ??= [];
    map[c.region].push(c);
  }
  return map;
};
