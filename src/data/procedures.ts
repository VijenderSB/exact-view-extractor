import bannerRobotic from "@/assets/banner-robotic-surgery.jpg";
import bannerRoboticKnee from "@/assets/banner-robotic-knee.jpg";
import bannerRoboticHip from "@/assets/banner-robotic-hip.jpg";
import bannerKnee from "@/assets/banner-knee.jpg";
import bannerHip from "@/assets/banner-hip.jpg";
import bannerShoulder from "@/assets/banner-shoulder.jpg";
import bannerElbow from "@/assets/banner-elbow.jpg";
import bannerArthroscopy from "@/assets/banner-arthroscopy.jpg";
import bannerSports from "@/assets/banner-sports-injury.jpg";
import bannerTrauma from "@/assets/banner-trauma.jpg";

export type ProcedureCategory =
  | "Robotic Surgery"
  | "Knee"
  | "Hip"
  | "Shoulder & Elbow"
  | "Sports & Trauma";

export type Procedure = {
  slug: string;
  name: string;
  category: ProcedureCategory;
  tagline: string;
  overview: string;
  indications: string[];
  benefits: string[];
  approach: string[];
  recovery: string[];
  faqs: { q: string; a: string }[];
  banner: string;
  testimonialTopic:
    | "robotic"
    | "knee"
    | "hip"
    | "shoulder"
    | "elbow"
    | "sports"
    | "trauma"
    | "specializations";
};

const genericFaqs = (name: string): { q: string; a: string }[] => [
  {
    q: `Am I a candidate for ${name}?`,
    a: `Candidacy is decided after clinical examination, imaging review and a discussion of your goals, activity level and medical history. Dr. Tomar recommends surgery only when non-surgical treatment cannot deliver a durable result.`,
  },
  {
    q: `How long is the hospital stay for ${name}?`,
    a: `Most patients are discharged within 2–4 days depending on the procedure, pain control and how quickly you regain safe mobility. Outstation patients are supported with post-op follow-up over WhatsApp and video.`,
  },
  {
    q: `When can I return to normal activities?`,
    a: `Light indoor activities usually resume within 2–3 weeks. Return to driving, desk work and gentle walking follows soon after. Sport, running or heavy lifting is guided by your physiotherapy milestones, typically at 3–6 months.`,
  },
  {
    q: `What is the success rate?`,
    a: `Modern implants and precision techniques deliver excellent long-term outcomes when patient selection, surgical planning and rehabilitation are done well — the three pillars Dr. Tomar's team focuses on.`,
  },
  {
    q: `Do you offer a second opinion?`,
    a: `Yes. Many patients come specifically for a second opinion before deciding. You will receive a clear, unhurried view of surgical and non-surgical options with pros, cons and expected outcomes.`,
  },
];

export const procedures: Procedure[] = [
  // Robotic Surgery
  {
    slug: "robotic-joint-replacement",
    name: "Robotic Joint Replacement Surgery",
    category: "Robotic Surgery",
    tagline: "3D pre-op planning and real-time robotic guidance for sub-millimetre implant precision.",
    overview:
      "Robotic joint replacement combines Dr. Tomar's 32+ years of surgical experience with the accuracy of robotic guidance. A patient-specific 3D plan is created before surgery and executed with real-time feedback during the procedure, so implant position, alignment and soft-tissue balance are optimised for your unique anatomy.",
    indications: [
      "Advanced osteoarthritis of knee or hip",
      "Failed non-surgical treatment",
      "Progressive stiffness or deformity",
      "Post-traumatic joint arthritis",
      "Inflammatory arthritis (RA)",
    ],
    benefits: [
      "Sub-millimetre implant accuracy",
      "Better soft-tissue balance",
      "Faster early recovery",
      "Reduced blood loss",
      "Improved implant longevity",
      "Personalised alignment strategy",
    ],
    approach: [
      "Detailed clinical and imaging assessment",
      "3D digital pre-operative plan",
      "Robotic-assisted bone preparation",
      "Real-time verification of alignment and balance",
      "Optimised implant sizing and positioning",
    ],
    recovery: [
      "Standing and walking assisted on day of surgery",
      "Stairs and independent mobility by day 2–3",
      "Discharge in 2–4 days",
      "Structured physiotherapy for 6–8 weeks",
      "Return to sport / brisk walking by 3–6 months",
    ],
    faqs: genericFaqs("robotic joint replacement"),
    banner: bannerRobotic,
    testimonialTopic: "robotic",
  },
  {
    slug: "computer-assisted-surgery",
    name: "Computer-Assisted Joint Replacement",
    category: "Robotic Surgery",
    tagline: "Navigation-guided precision when robotic hardware is not indicated or available.",
    overview:
      "Computer-assisted surgery (CAS) uses intra-operative navigation to verify bone cuts, implant alignment and soft-tissue balance in real time. It is a proven alternative to full robotic systems, offering enhanced accuracy over conventional jig-based techniques for both primary and complex reconstructions.",
    indications: [
      "Standard knee and hip replacement",
      "Deformity correction cases",
      "Bilateral joint replacement",
      "Post-traumatic reconstruction",
    ],
    benefits: [
      "Improved alignment accuracy",
      "Fewer outliers vs conventional jigs",
      "Better long-term wear characteristics",
      "Objective intra-op feedback",
    ],
    approach: [
      "Anatomical landmark registration",
      "Live navigation of bone cuts",
      "Alignment and gap balancing verification",
      "Precision implant positioning",
    ],
    recovery: [
      "Similar recovery timeline to standard joint replacement",
      "Discharge in 2–4 days",
      "Guided physiotherapy for 6–8 weeks",
    ],
    faqs: genericFaqs("computer-assisted surgery"),
    banner: bannerRobotic,
    testimonialTopic: "robotic",
  },
  {
    slug: "revision-joint-replacement",
    name: "Revision Joint Replacement Surgery",
    category: "Robotic Surgery",
    tagline: "Specialist re-do surgery for failed, loose or infected knee and hip implants.",
    overview:
      "Revision joint replacement is technically demanding and best done by high-volume surgeons. Dr. Tomar has extensive experience in revising loose, worn, malaligned or infected implants using specialised revision systems, bone grafting and complex reconstruction techniques.",
    indications: [
      "Implant loosening",
      "Peri-prosthetic infection",
      "Persistent pain after replacement",
      "Instability or dislocation",
      "Peri-prosthetic fractures",
      "Polyethylene wear",
    ],
    benefits: [
      "Pain relief and restored function",
      "Correction of alignment and stability",
      "Infection eradication protocols",
      "Bone stock reconstruction",
    ],
    approach: [
      "Comprehensive imaging and lab work-up",
      "Infection screening",
      "Custom or revision-specific implants",
      "Staged surgery when needed",
    ],
    recovery: [
      "Slightly longer hospital stay than primary surgery",
      "Protected weight-bearing early on",
      "Structured rehabilitation over 3–6 months",
    ],
    faqs: genericFaqs("revision joint replacement"),
    banner: bannerRobotic,
    testimonialTopic: "robotic",
  },

  // Knee
  {
    slug: "total-knee-replacement",
    name: "Total Knee Replacement (TKR)",
    category: "Knee",
    tagline: "Gold-standard treatment for end-stage knee arthritis — with robotic precision.",
    overview:
      "Total knee replacement resurfaces the worn cartilage of your knee with a metal-and-polyethylene implant that reproduces natural motion. When performed with robotic guidance, alignment and balance are optimised to your anatomy — the two factors that most influence how a knee feels years later.",
    indications: [
      "Advanced knee osteoarthritis",
      "Rheumatoid arthritis of the knee",
      "Post-traumatic knee arthritis",
      "Severe deformity (bow-leg / knock-knee)",
      "Failed non-surgical treatment",
    ],
    benefits: [
      "Long-lasting pain relief",
      "Restored walking and stair climbing",
      "Correction of deformity",
      "Return to independent living",
      "Modern implants last 20–25+ years",
    ],
    approach: [
      "3D pre-op planning",
      "Robotic bone preparation",
      "Balanced gap technique",
      "Minimally invasive incision when suitable",
    ],
    recovery: [
      "Walking with support on day 1",
      "Stairs and independent walking by day 3",
      "Physiotherapy for 6–8 weeks",
      "Comfortable walking without support at 4–6 weeks",
    ],
    faqs: genericFaqs("total knee replacement"),
    banner: bannerRoboticKnee,
    testimonialTopic: "knee",
  },
  {
    slug: "partial-knee-replacement",
    name: "Partial (Unicompartmental) Knee Replacement",
    category: "Knee",
    tagline: "Bone-preserving option for isolated single-compartment knee arthritis.",
    overview:
      "Partial knee replacement resurfaces only the arthritic compartment of your knee, preserving healthy bone, cartilage and ligaments. It offers a more natural-feeling knee, faster recovery and smaller incision compared to a total replacement — when patient selection is done well.",
    indications: [
      "Isolated medial or lateral compartment arthritis",
      "Intact cruciate ligaments",
      "Good range of motion",
      "Well-preserved other compartments",
    ],
    benefits: [
      "More natural knee feel",
      "Faster recovery vs TKR",
      "Smaller incision",
      "Preserves healthy bone and ligaments",
      "Easier revision if needed later",
    ],
    approach: [
      "Careful patient selection with MRI",
      "Robotic precision for tiny bone cuts",
      "Preserves ACL, PCL and other compartments",
    ],
    recovery: [
      "Discharge in 1–2 days",
      "Faster return to daily activities",
      "Walking without support in 2–3 weeks",
    ],
    faqs: genericFaqs("partial knee replacement"),
    banner: bannerKnee,
    testimonialTopic: "knee",
  },
  {
    slug: "revision-knee-replacement",
    name: "Revision Knee Replacement",
    category: "Knee",
    tagline: "Specialist re-do surgery for failed or painful knee replacements.",
    overview:
      "Revision knee replacement addresses implants that have loosened, worn, become unstable or infected. It is a longer, more complex operation than a primary replacement and needs a surgeon with specific revision expertise — which Dr. Tomar has developed over 32+ years.",
    indications: [
      "Loosening of implant",
      "Infection",
      "Instability or recurrent dislocation",
      "Polyethylene wear",
      "Peri-prosthetic fracture",
    ],
    benefits: [
      "Pain relief",
      "Restored alignment and stability",
      "Reconstruction of bone loss",
      "Return to functional walking",
    ],
    approach: [
      "Detailed imaging and infection work-up",
      "Revision-specific implants with stems and augments",
      "Bone grafting when required",
    ],
    recovery: [
      "Slightly longer hospital stay",
      "Protected weight-bearing",
      "Rehabilitation over 3–6 months",
    ],
    faqs: genericFaqs("revision knee replacement"),
    banner: bannerKnee,
    testimonialTopic: "knee",
  },
  {
    slug: "acl-pcl-reconstruction",
    name: "ACL / PCL Reconstruction",
    category: "Knee",
    tagline: "Arthroscopic ligament reconstruction to restore knee stability after sports injury.",
    overview:
      "ACL and PCL tears are common in sports and road-traffic injuries. Reconstruction replaces the torn ligament with a graft (usually from your own hamstring or patellar tendon) through small arthroscopic incisions — restoring stability so you can return to sport and daily activity without giving-way episodes.",
    indications: [
      "Complete ACL or PCL tear",
      "Persistent instability with pivot activities",
      "Combined ligament and meniscus injury",
      "High-demand athletes and active adults",
    ],
    benefits: [
      "Restored knee stability",
      "Protection of meniscus and cartilage",
      "Return to sport",
      "Arthroscopic (keyhole) surgery",
    ],
    approach: [
      "Arthroscopic graft harvest and preparation",
      "Precise tunnel placement",
      "Secure fixation with modern implants",
      "Meniscus and cartilage repair in the same sitting when needed",
    ],
    recovery: [
      "Discharge in 1–2 days",
      "Brace and crutches for 2–4 weeks",
      "Progressive physiotherapy",
      "Return to sport at 6–9 months",
    ],
    faqs: genericFaqs("ACL / PCL reconstruction"),
    banner: bannerArthroscopy,
    testimonialTopic: "sports",
  },
  {
    slug: "meniscus-cartilage-repair",
    name: "Meniscus & Cartilage Repair",
    category: "Knee",
    tagline: "Joint-preserving arthroscopic surgery to save the meniscus and treat cartilage damage.",
    overview:
      "The meniscus and cartilage are essential shock absorbers of the knee. Where possible, Dr. Tomar's philosophy is to repair rather than remove — preserving joint biology, protecting against future arthritis and keeping active patients moving.",
    indications: [
      "Symptomatic meniscus tear",
      "Locked knee",
      "Focal cartilage defects",
      "Osteochondral lesions",
    ],
    benefits: [
      "Preservation of joint biology",
      "Reduced future arthritis risk",
      "Rapid recovery vs replacement",
      "Return to sport",
    ],
    approach: [
      "Arthroscopic assessment",
      "Meniscus repair or selective trimming",
      "Cartilage repair techniques (microfracture, OATS)",
    ],
    recovery: [
      "Discharge same day or next day",
      "Protected weight-bearing for repairs",
      "Return to sport in 4–6 months",
    ],
    faqs: genericFaqs("meniscus and cartilage surgery"),
    banner: bannerArthroscopy,
    testimonialTopic: "sports",
  },
  {
    slug: "high-tibial-osteotomy",
    name: "High Tibial Osteotomy (HTO)",
    category: "Knee",
    tagline: "Realignment surgery to preserve the young, active knee with early arthritis.",
    overview:
      "HTO offloads the arthritic side of the knee by realigning the tibia. It is a proven joint-preserving option for younger, active patients with medial compartment arthritis who are not yet ready for a partial or total replacement.",
    indications: [
      "Young adult with medial compartment arthritis",
      "Bow-leg (varus) deformity",
      "Failed conservative treatment",
      "Active lifestyle where replacement is best delayed",
    ],
    benefits: [
      "Preserves your own knee",
      "Delays or avoids joint replacement",
      "Allows return to sport",
    ],
    approach: [
      "Detailed alignment planning",
      "Opening or closing wedge osteotomy",
      "Rigid plate fixation",
    ],
    recovery: [
      "Protected weight-bearing 4–6 weeks",
      "Structured physiotherapy",
      "Return to sport in 4–6 months",
    ],
    faqs: genericFaqs("high tibial osteotomy"),
    banner: bannerKnee,
    testimonialTopic: "knee",
  },

  // Hip
  {
    slug: "total-hip-replacement",
    name: "Total Hip Replacement",
    category: "Hip",
    tagline: "Definitive treatment for advanced hip arthritis and AVN — with modern bearings that last decades.",
    overview:
      "Total hip replacement is one of the most successful operations in medicine. Modern ceramic-on-polyethylene bearings, refined surgical approaches and rapid-recovery protocols mean most patients walk within hours of surgery and return to normal life within weeks.",
    indications: [
      "Advanced hip osteoarthritis",
      "Avascular necrosis (AVN)",
      "Rheumatoid arthritis of hip",
      "Post-traumatic hip arthritis",
      "Hip dysplasia",
    ],
    benefits: [
      "Excellent pain relief",
      "Restored hip motion",
      "Return to walking, driving and travel",
      "Long-lasting modern implants",
    ],
    approach: [
      "Minimally invasive approach where suitable",
      "Precise cup and stem positioning",
      "Modern bearings (ceramic / highly cross-linked poly)",
    ],
    recovery: [
      "Walking on day of surgery",
      "Discharge in 2–3 days",
      "Independent walking in 2–4 weeks",
      "Return to normal activity in 6–8 weeks",
    ],
    faqs: genericFaqs("total hip replacement"),
    banner: bannerRoboticHip,
    testimonialTopic: "hip",
  },
  {
    slug: "revision-hip-replacement",
    name: "Revision Hip Replacement",
    category: "Hip",
    tagline: "Specialist re-do surgery for failed, loose or infected hip implants.",
    overview:
      "Revision hip replacement addresses hips that have loosened, worn, dislocated repeatedly or become infected. It requires specialised implants, bone graft and detailed pre-op planning — an area of long-standing focus for Dr. Tomar's practice.",
    indications: [
      "Implant loosening",
      "Recurrent dislocation",
      "Infection",
      "Bearing wear",
      "Peri-prosthetic fracture",
    ],
    benefits: [
      "Pain relief",
      "Stable, well-aligned hip",
      "Reconstruction of bone loss",
    ],
    approach: [
      "Advanced imaging and infection work-up",
      "Revision stems, cups and constrained liners as needed",
      "Bone grafting where indicated",
    ],
    recovery: [
      "Protected weight-bearing",
      "Longer hospital stay than primary surgery",
      "Rehabilitation over 3–6 months",
    ],
    faqs: genericFaqs("revision hip replacement"),
    banner: bannerHip,
    testimonialTopic: "hip",
  },
  {
    slug: "avn-hip",
    name: "AVN Hip Surgery",
    category: "Hip",
    tagline: "Joint-preserving and replacement options for avascular necrosis of the femoral head.",
    overview:
      "Avascular necrosis (AVN) is loss of blood supply to the femoral head, often affecting adults in their 30s–50s. Early stages can be managed with core decompression to preserve your own hip; advanced disease is best treated with hip replacement to restore pain-free mobility.",
    indications: [
      "AVN with hip pain",
      "Steroid-induced AVN",
      "Post-traumatic AVN",
      "Alcohol-related AVN",
    ],
    benefits: [
      "Early-stage joint preservation",
      "Predictable pain relief with replacement",
      "Return to work and sport",
    ],
    approach: [
      "MRI-based staging",
      "Core decompression in early disease",
      "Total hip replacement in collapsed / advanced disease",
    ],
    recovery: [
      "Depends on procedure — 1–3 days stay",
      "Guided physiotherapy",
      "Return to work in 4–8 weeks",
    ],
    faqs: genericFaqs("AVN hip surgery"),
    banner: bannerHip,
    testimonialTopic: "hip",
  },
  {
    slug: "hip-impingement-fai",
    name: "Hip Impingement (FAI) Surgery",
    category: "Hip",
    tagline: "Arthroscopic reshaping of the hip to relieve pinching, labral tears and groin pain.",
    overview:
      "Femoro-acetabular impingement (FAI) is a common cause of groin pain in young, active adults. Arthroscopic surgery reshapes the abnormal bone contour and repairs the labrum, relieving pain and — critically — protecting the hip from early arthritis.",
    indications: [
      "Groin pain with pivoting or squatting",
      "Cam or pincer type FAI",
      "Labral tear",
      "Failed physiotherapy",
    ],
    benefits: [
      "Preserves your own hip",
      "Relieves impingement",
      "Protects against future arthritis",
    ],
    approach: [
      "Arthroscopic (keyhole) surgery",
      "Reshaping of femoral head-neck and/or acetabular rim",
      "Labral repair",
    ],
    recovery: [
      "Day-care or 1-day stay",
      "Crutches for 2–3 weeks",
      "Sport at 3–4 months",
    ],
    faqs: genericFaqs("hip impingement surgery"),
    banner: bannerArthroscopy,
    testimonialTopic: "hip",
  },
  {
    slug: "hip-fracture-surgery",
    name: "Hip Fracture Surgery",
    category: "Hip",
    tagline: "Urgent surgical treatment to restore mobility after a hip fracture — most important in elderly patients.",
    overview:
      "Hip fracture in an elderly patient is a medical emergency. Early surgery — usually within 48 hours — dramatically reduces complications and restores mobility. Dr. Tomar's team is set up for rapid pre-op work-up and same-week surgical intervention.",
    indications: [
      "Neck of femur fracture",
      "Intertrochanteric fracture",
      "Sub-trochanteric fracture",
      "Peri-prosthetic hip fracture",
    ],
    benefits: [
      "Early mobilisation",
      "Reduced complications",
      "Preserves independence",
    ],
    approach: [
      "Internal fixation for younger patients / stable patterns",
      "Hemiarthroplasty or total hip replacement for elderly",
      "Rapid recovery protocol",
    ],
    recovery: [
      "Walking with support within 24–48 hours",
      "Discharge in 3–5 days",
      "Physiotherapy at home / rehab centre",
    ],
    faqs: genericFaqs("hip fracture surgery"),
    banner: bannerTrauma,
    testimonialTopic: "trauma",
  },

  // Shoulder & Elbow
  {
    slug: "shoulder-replacement",
    name: "Shoulder Replacement Surgery",
    category: "Shoulder & Elbow",
    tagline: "Anatomic shoulder replacement for arthritis with intact rotator cuff.",
    overview:
      "Anatomic shoulder replacement resurfaces the worn ball-and-socket of your shoulder, relieving pain and restoring motion when the rotator cuff is still functional. It is the treatment of choice for advanced glenohumeral arthritis in appropriately selected patients.",
    indications: [
      "Advanced glenohumeral osteoarthritis",
      "Rheumatoid arthritis of shoulder",
      "Post-traumatic arthritis",
      "Intact rotator cuff",
    ],
    benefits: [
      "Pain relief",
      "Restored overhead motion",
      "Improved sleep and daily function",
    ],
    approach: [
      "Detailed 3D imaging",
      "Precise glenoid preparation",
      "Modern stemmed or stemless implants",
    ],
    recovery: [
      "Sling for 4–6 weeks",
      "Guided physiotherapy",
      "Return to daily activity in 8–12 weeks",
    ],
    faqs: genericFaqs("shoulder replacement"),
    banner: bannerShoulder,
    testimonialTopic: "shoulder",
  },
  {
    slug: "reverse-shoulder-replacement",
    name: "Reverse Shoulder Replacement",
    category: "Shoulder & Elbow",
    tagline: "Restores overhead function when the rotator cuff is torn or arthritic.",
    overview:
      "Reverse geometry shoulder replacement is designed for shoulders where the rotator cuff has failed. By reversing the ball and socket, the deltoid muscle takes over the work — reliably restoring pain-free overhead motion in elderly patients with cuff tear arthropathy.",
    indications: [
      "Cuff tear arthropathy",
      "Massive irreparable rotator cuff tear with pseudo-paralysis",
      "Failed prior shoulder surgery",
      "Complex proximal humerus fractures in elderly",
    ],
    benefits: [
      "Restored overhead function",
      "Reliable pain relief",
      "Predictable outcome in cuff-deficient shoulders",
    ],
    approach: [
      "Careful component sizing",
      "Preservation of deltoid function",
      "Modern reverse geometry implants",
    ],
    recovery: [
      "Sling for 3–4 weeks",
      "Early gentle range-of-motion",
      "Return to daily activity in 8–12 weeks",
    ],
    faqs: genericFaqs("reverse shoulder replacement"),
    banner: bannerShoulder,
    testimonialTopic: "shoulder",
  },
  {
    slug: "rotator-cuff-repair",
    name: "Rotator Cuff Repair",
    category: "Shoulder & Elbow",
    tagline: "Arthroscopic repair to restore shoulder strength and stop night pain.",
    overview:
      "Rotator cuff tears cause weakness, night pain and difficulty with overhead activity. Arthroscopic (keyhole) repair reattaches the torn tendon to bone using suture anchors, restoring strength and relieving pain.",
    indications: [
      "Full-thickness rotator cuff tear",
      "Partial tear failing non-surgical care",
      "Weakness with overhead activity",
      "Night pain",
    ],
    benefits: [
      "Restored shoulder strength",
      "Relief from night pain",
      "Arthroscopic (small incisions)",
      "Return to work and sport",
    ],
    approach: [
      "Arthroscopic tear assessment",
      "Tendon mobilisation",
      "Suture anchor fixation to bone",
    ],
    recovery: [
      "Sling for 4–6 weeks",
      "Progressive physiotherapy",
      "Return to full function in 4–6 months",
    ],
    faqs: genericFaqs("rotator cuff repair"),
    banner: bannerShoulder,
    testimonialTopic: "shoulder",
  },
  {
    slug: "frozen-shoulder-release",
    name: "Frozen Shoulder Arthroscopic Release",
    category: "Shoulder & Elbow",
    tagline: "Arthroscopic release for stubborn shoulder stiffness that hasn't responded to therapy.",
    overview:
      "Frozen shoulder (adhesive capsulitis) causes severe stiffness and pain. Most cases resolve with physiotherapy and injections; those that don't benefit from arthroscopic capsular release, which safely restores motion under direct vision.",
    indications: [
      "Stiff, painful shoulder for 6+ months",
      "Failed physiotherapy and injections",
      "Diabetic frozen shoulder",
    ],
    benefits: [
      "Rapid restoration of motion",
      "Pain relief",
      "Arthroscopic (small incisions)",
    ],
    approach: [
      "Arthroscopic capsular release",
      "Manipulation under anaesthesia",
      "Immediate structured physiotherapy",
    ],
    recovery: [
      "Day-care or 1-day stay",
      "Early intensive physiotherapy",
      "Return to daily activity in 4–6 weeks",
    ],
    faqs: genericFaqs("frozen shoulder release"),
    banner: bannerShoulder,
    testimonialTopic: "shoulder",
  },
  {
    slug: "tennis-elbow-surgery",
    name: "Tennis / Golfer's Elbow Surgery",
    category: "Shoulder & Elbow",
    tagline: "Surgical release for stubborn lateral or medial epicondylitis after failed non-surgical care.",
    overview:
      "Tennis elbow (lateral) and golfer's elbow (medial) are common tendon overuse problems. Most cases settle with activity modification, physiotherapy, bracing and injections. Persistent cases benefit from surgical release — open or arthroscopic — with excellent outcomes.",
    indications: [
      "Lateral or medial elbow pain for 6+ months",
      "Failed physiotherapy, bracing and injections",
      "Persistent grip weakness",
    ],
    benefits: [
      "Reliable pain relief",
      "Return to work and sport",
      "Small incision / arthroscopic",
    ],
    approach: [
      "Selective release of affected tendon origin",
      "Debridement of degenerative tissue",
      "Arthroscopic option in selected cases",
    ],
    recovery: [
      "Day-care surgery",
      "Sling for 1–2 weeks",
      "Return to full activity in 6–12 weeks",
    ],
    faqs: genericFaqs("tennis elbow surgery"),
    banner: bannerElbow,
    testimonialTopic: "elbow",
  },

  // Sports & Trauma
  {
    slug: "sports-injury-surgery",
    name: "Sports Injury Surgery",
    category: "Sports & Trauma",
    tagline: "Comprehensive care for athletes — from ACL and meniscus to shoulder and elbow injuries.",
    overview:
      "Sports injuries need surgeons who understand the demands of return-to-sport. Dr. Tomar's team combines arthroscopic surgery, precise ligament reconstruction and structured rehabilitation to get athletes back on the field — safely and predictably.",
    indications: [
      "ACL / PCL tear",
      "Meniscus tear",
      "Shoulder instability",
      "Rotator cuff injury",
      "Ankle ligament injuries",
    ],
    benefits: [
      "Sport-specific rehabilitation",
      "Arthroscopic (keyhole) techniques",
      "Return to competitive sport",
    ],
    approach: [
      "Detailed clinical and MRI assessment",
      "Arthroscopic reconstruction and repair",
      "Structured return-to-sport pathway",
    ],
    recovery: [
      "Depends on procedure",
      "Return to sport in 4–9 months",
      "Sport-specific physiotherapy",
    ],
    faqs: genericFaqs("sports injury surgery"),
    banner: bannerSports,
    testimonialTopic: "sports",
  },
  {
    slug: "cartilage-repair",
    name: "Cartilage Repair Surgery",
    category: "Sports & Trauma",
    tagline: "Biological techniques to repair focal cartilage defects in young, active patients.",
    overview:
      "Focal cartilage damage in a young knee, if left untreated, often progresses to arthritis. Cartilage repair techniques — from microfracture to osteochondral transfer — restore the joint surface and delay or avoid replacement.",
    indications: [
      "Symptomatic focal cartilage defect",
      "Osteochondritis dissecans (OCD)",
      "Post-traumatic cartilage injury",
      "Young, active patient",
    ],
    benefits: [
      "Joint-preserving",
      "Delays arthritis",
      "Return to sport",
    ],
    approach: [
      "Arthroscopic assessment",
      "Microfracture, OATS or biological scaffolds",
      "Alignment correction where needed",
    ],
    recovery: [
      "Protected weight-bearing 4–6 weeks",
      "Structured physiotherapy",
      "Return to sport in 6–9 months",
    ],
    faqs: genericFaqs("cartilage repair surgery"),
    banner: bannerArthroscopy,
    testimonialTopic: "sports",
  },
  {
    slug: "complex-fracture-management",
    name: "Complex Fracture Management",
    category: "Sports & Trauma",
    tagline: "Precision surgery for high-energy, multi-fragmentary and peri-articular fractures.",
    overview:
      "Complex fractures involving the joint surface, multiple bones or unstable patterns require an experienced trauma surgeon. Dr. Tomar's team uses modern locking-plate systems, minimally invasive techniques and 3D planning to restore anatomy and allow early rehabilitation.",
    indications: [
      "Peri-articular fractures (knee, hip, shoulder, elbow, wrist)",
      "Multi-fragmentary fractures",
      "Open fractures",
      "Fracture non-unions",
    ],
    benefits: [
      "Anatomical reduction",
      "Early mobilisation",
      "Reduced long-term arthritis risk",
    ],
    approach: [
      "3D CT planning",
      "Minimally invasive fixation where possible",
      "Modern locking-plate and nail systems",
    ],
    recovery: [
      "Protected weight-bearing based on fracture",
      "Structured rehabilitation",
      "Return to function in 3–6 months",
    ],
    faqs: genericFaqs("complex fracture management"),
    banner: bannerTrauma,
    testimonialTopic: "trauma",
  },
  {
    slug: "pelvic-acetabular-fracture",
    name: "Pelvic & Acetabular Fracture Surgery",
    category: "Sports & Trauma",
    tagline: "Specialist surgery to reconstruct high-energy pelvic and hip-socket fractures.",
    overview:
      "Pelvic and acetabular fractures are among the most technically demanding injuries in orthopaedics. Precise reduction of the hip socket protects long-term hip function and prevents post-traumatic arthritis — a subspeciality area of Dr. Tomar's practice.",
    indications: [
      "High-energy pelvic ring injuries",
      "Displaced acetabular fractures",
      "Fracture-dislocations of the hip",
    ],
    benefits: [
      "Anatomical restoration of hip socket",
      "Reduced post-traumatic arthritis",
      "Preserves native hip when possible",
    ],
    approach: [
      "Detailed CT-based planning",
      "Specialist pelvic reduction techniques",
      "Percutaneous or open fixation as indicated",
    ],
    recovery: [
      "Protected weight-bearing 8–12 weeks",
      "Structured rehabilitation",
      "Long-term follow-up for hip function",
    ],
    faqs: genericFaqs("pelvic and acetabular fracture surgery"),
    banner: bannerTrauma,
    testimonialTopic: "trauma",
  },
  {
    slug: "limb-trauma",
    name: "Upper & Lower Limb Trauma",
    category: "Sports & Trauma",
    tagline: "Comprehensive fracture and soft-tissue care from shoulder to ankle.",
    overview:
      "From straightforward wrist fractures to complex tibia and femur injuries, Dr. Tomar's team delivers modern trauma care with an emphasis on stable fixation, early mobilisation and functional recovery.",
    indications: [
      "Upper limb fractures (clavicle, humerus, forearm, wrist)",
      "Lower limb fractures (femur, tibia, ankle)",
      "Soft-tissue injuries",
      "Multi-limb / poly-trauma",
    ],
    benefits: [
      "Stable fixation for early mobilisation",
      "Minimally invasive where possible",
      "Coordinated care with rehabilitation",
    ],
    approach: [
      "Modern locking plates, nails and external fixators",
      "Minimally invasive plate osteosynthesis (MIPO)",
      "Structured rehabilitation",
    ],
    recovery: [
      "Depends on fracture and fixation",
      "Return to work in 6–12 weeks for common patterns",
      "Sport clearance based on healing",
    ],
    faqs: genericFaqs("limb trauma surgery"),
    banner: bannerTrauma,
    testimonialTopic: "trauma",
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export function proceduresByCategory(category: ProcedureCategory): Procedure[] {
  return procedures.filter((p) => p.category === category);
}
