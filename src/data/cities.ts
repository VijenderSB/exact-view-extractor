export type City = {
  slug: string;
  name: string;
  state: string;
  region: "NCR" | "North India" | "Central India" | "East India" | "West India" | "South India" | "International";
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
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", region: "NCR", distanceFromDelhi: "70 km",
    travelOptions: ["1.5 hr drive via NH-58 / RRTS", "Rapid Rail Delhi–Meerut", "Trains to Anand Vihar / New Delhi"],
    whyVisit: "Meerut patients travel to Delhi for robotic-precision surgery not yet locally available, then return home for supervised rehab.",
    localContext: "Structured discharge with a written recovery plan and remote follow-ups reduces repeat visits." },

  // North India
  { slug: "chandigarh", name: "Chandigarh", state: "Punjab / Haryana", region: "North India", distanceFromDelhi: "250 km",
    travelOptions: ["Vande Bharat / Shatabdi (~3.5 hr)", "Flight (~50 min)", "Volvo / drive (~5 hr)"],
    whyVisit: "Chandigarh, Panchkula and Mohali patients choose Dr. Tomar for robotic knee replacement and complex revisions.",
    localContext: "Airport pickup and same-day OPD scheduling for out-of-town families." },
  { slug: "amritsar", name: "Amritsar", state: "Punjab", region: "North India", distanceFromDelhi: "450 km",
    travelOptions: ["Direct flight (~1 hr)", "Vande Bharat / Shatabdi", "Overnight trains"],
    whyVisit: "Patients from Amritsar and greater Majha region consult for advanced hip and knee arthritis, sports injuries and revision surgery.",
    localContext: "Punjabi-language conversations available; family-friendly OPD scheduling." },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", region: "North India", distanceFromDelhi: "310 km",
    travelOptions: ["Shatabdi / Vande Bharat", "Flight via Chandigarh / Delhi", "Drive (~5 hr) via NH-44"],
    whyVisit: "Industrial Ludhiana sees high demand for knee replacement and shoulder / rotator cuff repair — Dr. Tomar's robotic centre is a preferred referral.",
    localContext: "We batch consultations and imaging review to minimise trips." },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab", region: "North India", distanceFromDelhi: "370 km",
    travelOptions: ["Train / Vande Bharat", "Flight via Amritsar", "Drive via NH-44"],
    whyVisit: "Jalandhar and Doaba patients travel to Delhi for robotic joint replacement and complex sports injury reconstruction.",
    localContext: "Discharge plans coordinate with trusted physios back home." },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", region: "North India", distanceFromDelhi: "270 km",
    travelOptions: ["Vande Bharat / Double Decker (~4.5 hr)", "Flight (~50 min)", "Expressway drive (~4 hr)"],
    whyVisit: "Jaipur patients frequently travel for robotic knee replacement and revision surgeries with Dr. Tomar's team.",
    localContext: "Delhi–Jaipur Expressway makes same-day OPD visits practical for many patients." },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", region: "North India", distanceFromDelhi: "600 km",
    travelOptions: ["Direct flight (~1.5 hr)", "Overnight trains", "Drive not typical"],
    whyVisit: "Jodhpur, Bikaner and western Rajasthan patients access Delhi-based robotic surgery for arthritis and complex trauma.",
    localContext: "We pre-plan admission timing to align with return flights for accompanying family." },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", region: "North India", distanceFromDelhi: "660 km",
    travelOptions: ["Direct flight (~1.5 hr)", "Overnight train", "Drive not typical"],
    whyVisit: "Udaipur patients travel for advanced joint preservation, hip resurfacing and robotic knee replacement.",
    localContext: "Video pre-consultation available to reduce first-visit uncertainty." },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", region: "North India", distanceFromDelhi: "260 km",
    travelOptions: ["Vande Bharat / Shatabdi (~4.5 hr)", "Flight (~45 min)", "Drive via NH-334"],
    whyVisit: "Dehradun and greater Doon Valley patients seek robotic-precision surgery with structured post-op rehab.",
    localContext: "Discharge is planned to allow hill travel comfortably." },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand", region: "North India", distanceFromDelhi: "220 km",
    travelOptions: ["Shatabdi (~4 hr)", "Drive via NH-334", "Trains to Haridwar Jn"],
    whyVisit: "Elderly patients from Haridwar and Rishikesh choose Dr. Tomar for painful arthritis and knee replacement.",
    localContext: "Wheelchair transfers and attendant accommodation guidance provided." },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh", region: "North India", distanceFromDelhi: "340 km",
    travelOptions: ["Kalka Shatabdi + toy train / cab", "Flight to Chandigarh + drive", "Direct drive (~7 hr)"],
    whyVisit: "Hill-region patients from Shimla and surrounding areas travel for robotic knee replacement and revision surgeries.",
    localContext: "Rehab plans account for stair-heavy Himalayan homes." },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "North India", distanceFromDelhi: "550 km",
    travelOptions: ["Direct flight (~1 hr)", "Vande Bharat / Tejas", "Overnight AC trains"],
    whyVisit: "Lucknow, Kanpur and central UP patients travel for robotic joint replacement and complex revision cases.",
    localContext: "Hindi-language OPD and phone follow-ups; imaging via nearest Lucknow centre." },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", region: "North India", distanceFromDelhi: "480 km",
    travelOptions: ["Vande Bharat / Shatabdi", "Flight via Lucknow", "Overnight trains"],
    whyVisit: "Kanpur patients access advanced robotic knee and hip replacement with structured Delhi–home follow-up.",
    localContext: "Digital sharing of X-rays / MRI for pre-visit planning." },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North India", distanceFromDelhi: "820 km",
    travelOptions: ["Direct flight (~1.5 hr)", "Vande Bharat", "Overnight trains"],
    whyVisit: "Varanasi patients travel for complex arthritis surgery, robotic knee replacement and revision cases.",
    localContext: "Long-distance travellers get consolidated appointments over a shorter city stay." },

  // Central / East
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", region: "Central India", distanceFromDelhi: "770 km",
    travelOptions: ["Vande Bharat (~7.5 hr)", "Direct flight (~1.5 hr)", "Overnight trains"],
    whyVisit: "Bhopal patients travel for robotic-precision knee replacement and specialist arthroscopy.",
    localContext: "Pre-op investigations coordinated in Bhopal to minimise Delhi stay." },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", region: "Central India", distanceFromDelhi: "820 km",
    travelOptions: ["Direct flight (~1.5 hr)", "Overnight trains", "Malwa Express connections"],
    whyVisit: "Indore patients frequently consult Dr. Tomar for joint replacement second opinions and revision cases.",
    localContext: "Video pre-consultation reduces uncertainty before travel." },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", region: "Central India", distanceFromDelhi: "1170 km",
    travelOptions: ["Direct flight (~2 hr)", "Trains to Nizamuddin / New Delhi"],
    whyVisit: "Raipur and Bilaspur patients access advanced robotic joint replacement not routinely available locally.",
    localContext: "Consolidated visits — imaging, OPD, admission — planned in one trip." },
  { slug: "patna", name: "Patna", state: "Bihar", region: "East India", distanceFromDelhi: "1000 km",
    travelOptions: ["Direct flight (~2 hr)", "Sampoorna Kranti / Vande Bharat", "Trains to New Delhi"],
    whyVisit: "Patna and greater Bihar patients travel for robotic knee replacement, hip replacement and complex trauma reconstruction.",
    localContext: "Airport-to-clinic transfers and attendant guidance for out-of-state families." },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", region: "East India", distanceFromDelhi: "1150 km",
    travelOptions: ["Direct flight (~2 hr)", "Overnight trains"],
    whyVisit: "Ranchi patients access advanced robotic joint replacement and specialist sports injury care with Dr. Tomar.",
    localContext: "Return travel scheduled after a supervised early-recovery review." },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", region: "East India", distanceFromDelhi: "1450 km",
    travelOptions: ["Direct flight (~2 hr)", "Rajdhani / Duronto Express"],
    whyVisit: "Kolkata and greater Bengal patients travel to Delhi for a considered second opinion on robotic joint replacement and revision surgery.",
    localContext: "Bengali-comfort communication supported; family-friendly scheduling." },
  { slug: "guwahati", name: "Guwahati", state: "Assam", region: "East India", distanceFromDelhi: "1900 km",
    travelOptions: ["Direct flight (~2.5 hr)", "Rajdhani Express"],
    whyVisit: "Northeast patients — Assam, Meghalaya, Arunachal — travel for robotic knee / hip replacement with a planned single-visit workflow.",
    localContext: "Consolidated stay planning: imaging, surgery, early rehab, then home." },

  // West
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", region: "West India", distanceFromDelhi: "1400 km",
    travelOptions: ["Direct flight (~2 hr)", "Rajdhani Express", "Tejas Express"],
    whyVisit: "Mumbai patients consult Dr. Tomar for a considered second opinion on complex joint replacement and revision surgery.",
    localContext: "Digital second opinion available before travelling; family-friendly scheduling." },
  { slug: "pune", name: "Pune", state: "Maharashtra", region: "West India", distanceFromDelhi: "1450 km",
    travelOptions: ["Direct flight (~2 hr)", "Overnight trains to New Delhi"],
    whyVisit: "Pune patients travel for robotic-precision knee replacement and specialist sports injury reconstruction.",
    localContext: "Pre-op reports reviewed in advance to shorten Delhi stay." },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West India", distanceFromDelhi: "950 km",
    travelOptions: ["Direct flight (~1.5 hr)", "Rajdhani Express", "Vande Bharat"],
    whyVisit: "Ahmedabad, Gandhinagar and greater Gujarat patients travel for robotic joint replacement and revision surgery.",
    localContext: "Gujarati-comfort communication supported; jain / vegetarian dietary planning during admission." },
  { slug: "surat", name: "Surat", state: "Gujarat", region: "West India", distanceFromDelhi: "1150 km",
    travelOptions: ["Direct flight (~2 hr)", "Overnight trains", "Via Ahmedabad connections"],
    whyVisit: "Surat patients access advanced robotic knee and hip replacement with structured post-op follow-up.",
    localContext: "Digital pre-consultation minimises multiple Delhi trips." },

  // South
  { slug: "bangalore", name: "Bangalore (Bengaluru)", state: "Karnataka", region: "South India", distanceFromDelhi: "2100 km",
    travelOptions: ["Direct flight (~2.5 hr)", "Rajdhani Express"],
    whyVisit: "Bangalore patients consult Dr. Tomar for a considered second opinion on revision surgery and complex robotic joint replacement.",
    localContext: "Pre-visit reports reviewed to make Delhi travel purposeful and time-efficient." },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", region: "South India", distanceFromDelhi: "1550 km",
    travelOptions: ["Direct flight (~2 hr)", "Rajdhani / Telangana Express"],
    whyVisit: "Hyderabad patients travel for specialist revision joint replacement and considered second opinions.",
    localContext: "Consolidated visit workflow: OPD, imaging review, surgical planning, admission." },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", region: "South India", distanceFromDelhi: "2200 km",
    travelOptions: ["Direct flight (~2.5 hr)", "Rajdhani / Tamil Nadu Express"],
    whyVisit: "Chennai patients travel for a second opinion or complex revision cases requiring robotic-precision planning.",
    localContext: "Digital second-opinion consult recommended before travelling." },

  // International / Outstation
  { slug: "outstation-international", name: "Outstation & International Patients",
    state: "India & Overseas", region: "International", distanceFromDelhi: "Varies",
    travelOptions: ["Airport pickup coordination", "Attendant accommodation guidance", "Consolidated single-visit workflow"],
    whyVisit: "Patients from across India and overseas travel to Dr. Tomar for robotic joint replacement, revision surgery and complex trauma reconstruction.",
    localContext: "We manage the full journey — video pre-consultation, remote imaging review, surgery scheduling, in-hospital stay, structured discharge and remote follow-up — as a single coordinated plan." },
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
