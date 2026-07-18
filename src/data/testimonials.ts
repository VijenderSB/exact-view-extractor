import type { Testimonial } from "@/components/site/sections/Testimonials";

export const testimonialsByTopic: Record<string, Testimonial[]> = {
  knee: [
    {
      name: "Rajesh K.",
      location: "Delhi",
      procedure: "Total Knee Replacement",
      quote:
        "Ten years of grinding knee pain — gone. I walked with a walker the next morning and climbed stairs unaided in three weeks. My alignment feels natural.",
    },
    {
      name: "Anil P.",
      location: "Ghaziabad",
      procedure: "Partial (Uni) Knee Replacement",
      quote:
        "I was told elsewhere I needed a full replacement. Dr. Tomar showed a partial was possible — the knee bends deeply and I'm back on my cycle.",
    },
    {
      name: "Kavita R.",
      location: "Gurgaon",
      procedure: "Bilateral Knee Replacement",
      quote:
        "Both knees the same day was a big decision, but rehab was structured and pain control excellent. I now climb temple steps without stopping.",
    },
  ],
  "robotic-knee": [
    {
      name: "Sanjay B.",
      location: "Noida",
      procedure: "Robotic Knee Replacement",
      quote:
        "The 3D plan Dr. Tomar showed me before surgery gave real confidence. My knee tracks straight and I forget I've had a replacement.",
    },
    {
      name: "Meenakshi V.",
      location: "Delhi",
      procedure: "Robotic Total Knee Replacement",
      quote:
        "Six weeks in and I'm walking 5 km a day. The precision of the robotic cuts meant less swelling and a much quicker recovery than my friends who had traditional surgery.",
    },
    {
      name: "Harpreet S.",
      location: "Faridabad",
      procedure: "Robotic Knee Replacement",
      quote:
        "I could sit cross-legged on the floor by month three — something I'd not done in a decade. Worth every rupee for the accuracy.",
    },
  ],
  hip: [
    {
      name: "Sunita M.",
      location: "Gurgaon",
      procedure: "Total Hip Replacement",
      quote:
        "Years of groin pain from AVN are behind me. Both legs feel equal again and I sleep on either side without discomfort.",
    },
    {
      name: "Devinder T.",
      location: "Delhi",
      procedure: "Hip Fracture Fixation",
      quote:
        "My 78-year-old father was walking with a frame within 48 hours of his hip fracture surgery. The team's prompt care saved his independence.",
    },
    {
      name: "Ritu J.",
      location: "Noida",
      procedure: "Hip Arthroscopy",
      quote:
        "Sharp groin pain in the gym turned out to be impingement. Keyhole surgery, three tiny scars — and I'm back to Pilates and long walks.",
    },
  ],
  "robotic-hip": [
    {
      name: "Prakash D.",
      location: "Delhi NCR",
      procedure: "Robotic Hip Replacement",
      quote:
        "The robotic planning restored my leg length exactly. No limp, no lift in the shoe — and back to golf in four months.",
    },
    {
      name: "Anjali K.",
      location: "Gurgaon",
      procedure: "Robotic Hip Replacement (AVN)",
      quote:
        "AVN had collapsed my femoral head at 42. Dr. Tomar's precise cup positioning gave me a hip that feels like my own. Discharged in two days.",
    },
    {
      name: "Rohit N.",
      location: "Faridabad",
      procedure: "Robotic Total Hip Replacement",
      quote:
        "Small incision, minimal blood loss, no transfusion. I was climbing stairs on day three. The technology genuinely made a difference.",
    },
  ],
  shoulder: [
    {
      name: "Meera A.",
      location: "Faridabad",
      procedure: "Rotator Cuff Repair",
      quote:
        "Sleeping through the night without shoulder pain feels like a gift. The keyhole repair meant tiny scars and I'm back to overhead work.",
    },
    {
      name: "Ashok G.",
      location: "Delhi",
      procedure: "Reverse Shoulder Replacement",
      quote:
        "My cuff was beyond repair. Reverse replacement restored the arc of motion I needed to dress and cook independently again.",
    },
    {
      name: "Priya S.",
      location: "Noida",
      procedure: "Shoulder Stabilisation",
      quote:
        "Recurrent dislocations from a bike fall — arthroscopic stabilisation ended them. Back in the gym, lifting confidently.",
    },
  ],
  elbow: [
    {
      name: "Neeraj V.",
      location: "Delhi",
      procedure: "Tennis Elbow Surgery",
      quote:
        "Two years of grip pain that no injection fixed. Day-care surgery, back to typing in ten days and full strength by three months.",
    },
    {
      name: "Sarita M.",
      location: "Gurgaon",
      procedure: "Cubital Tunnel Release",
      quote:
        "The tingling in my ring and little fingers is finally gone. Dr. Tomar explained the nerve compression so clearly I felt fully in control of the decision.",
    },
    {
      name: "Vivek R.",
      location: "Ghaziabad",
      procedure: "Elbow Arthroscopy",
      quote:
        "Loose bodies were locking my elbow mid-lift. Scope surgery cleared them out — full extension restored, back to strength training.",
    },
  ],
  "shoulder-elbow": [
    {
      name: "Meera A.",
      location: "Faridabad",
      procedure: "Rotator Cuff Repair",
      quote:
        "Keyhole shoulder repair — tiny scars, back to overhead reaching in eight weeks. Sleeping pain-free for the first time in years.",
    },
    {
      name: "Neeraj V.",
      location: "Delhi",
      procedure: "Tennis Elbow Surgery",
      quote:
        "Two years of grip pain settled with a short day-care surgery. Full strength by three months.",
    },
    {
      name: "Ashok G.",
      location: "Delhi",
      procedure: "Reverse Shoulder Replacement",
      quote:
        "Reverse replacement gave me back the reach I'd lost. Dressing and cooking independently again at 71.",
    },
  ],
  "sports-injury": [
    {
      name: "Vikram S.",
      location: "Noida",
      procedure: "ACL Reconstruction",
      quote:
        "Cricket ACL tear at 26. Honest advice on graft choice, structured rehab — back on the pitch at nine months, stronger than before.",
    },
    {
      name: "Ishita P.",
      location: "Delhi",
      procedure: "Meniscus Repair",
      quote:
        "Repair, not removal — that was Dr. Tomar's philosophy. Six weeks later I was jogging pain-free with my own meniscus intact.",
    },
    {
      name: "Karan L.",
      location: "Gurgaon",
      procedure: "Multi-ligament Knee Reconstruction",
      quote:
        "A bike accident tore three ligaments. Staged reconstruction and dedicated physiotherapy got me back to trekking within a year.",
    },
  ],
  arthroscopy: [
    {
      name: "Ritu J.",
      location: "Noida",
      procedure: "Hip Arthroscopy",
      quote:
        "Three tiny scars, day-care surgery, and my hip impingement pain vanished. Back to Pilates in six weeks.",
    },
    {
      name: "Vivek R.",
      location: "Ghaziabad",
      procedure: "Elbow Arthroscopy",
      quote:
        "Loose bodies locking my elbow — cleared through keyhole surgery. Full range of motion restored.",
    },
    {
      name: "Ishita P.",
      location: "Delhi",
      procedure: "Knee Arthroscopy & Meniscus Repair",
      quote:
        "Same-day discharge, minimal swelling and I preserved my own meniscus. Exactly what a young knee needs.",
    },
  ],
  trauma: [
    {
      name: "Devinder T.",
      location: "Delhi",
      procedure: "Hip Fracture Fixation",
      quote:
        "My father's hip was fixed within 24 hours. He was walking with a frame in 48 hours and living independently again within weeks.",
    },
    {
      name: "Mahesh B.",
      location: "Ghaziabad",
      procedure: "Tibial Plateau Fracture Fixation",
      quote:
        "A high-speed accident shattered my knee. Careful plating and a strict rehab schedule got me walking unaided in four months.",
    },
    {
      name: "Ranjana K.",
      location: "Noida",
      procedure: "Non-union Correction",
      quote:
        "A fracture that hadn't healed for a year finally united after Dr. Tomar's revision surgery. I can bear full weight without pain.",
    },
  ],
  "robotic-surgery": [
    {
      name: "Sanjay B.",
      location: "Noida",
      procedure: "Robotic Knee Replacement",
      quote:
        "Seeing my 3D plan before surgery removed all my anxiety. The knee tracks perfectly and I forget I ever had a replacement.",
    },
    {
      name: "Anjali K.",
      location: "Gurgaon",
      procedure: "Robotic Hip Replacement",
      quote:
        "AVN at 42 — the robotic cup placement gave me a hip that feels natural. Discharged in two days, back to work in three weeks.",
    },
    {
      name: "Harpreet S.",
      location: "Faridabad",
      procedure: "Robotic Knee Replacement",
      quote:
        "I sit cross-legged again after ten years. The precision of the cuts translated into a much faster, less painful recovery.",
    },
  ],
  about: [
    {
      name: "Rajesh K.",
      location: "Delhi",
      procedure: "Knee Replacement Patient",
      quote:
        "Dr. Tomar listened to every concern and never rushed a decision. Thirty-plus years of experience shows in every step of the care.",
    },
    {
      name: "Sunita M.",
      location: "Gurgaon",
      procedure: "Hip Replacement Patient",
      quote:
        "The clarity of his explanations — surgery or not, and why — is what made me trust him. The outcome matched every promise.",
    },
    {
      name: "Vikram S.",
      location: "Noida",
      procedure: "ACL Reconstruction Patient",
      quote:
        "Honest, unhurried, evidence-based. Dr. Tomar treats you like a person, not a case number.",
    },
  ],
  contact: [
    {
      name: "Kavita R.",
      location: "Gurgaon",
      procedure: "Bilateral Knee Replacement",
      quote:
        "From the first call to the follow-up, the team was responsive and warm. Every question got a clear answer — never hurried.",
    },
    {
      name: "Prakash D.",
      location: "Delhi NCR",
      procedure: "Robotic Hip Replacement",
      quote:
        "I sent reports on WhatsApp and had a video consult within two days. Genuinely patient-friendly for someone travelling from another city.",
    },
    {
      name: "Meera A.",
      location: "Faridabad",
      procedure: "Rotator Cuff Repair",
      quote:
        "The clinic is easy to reach, admissions were smooth, and the staff kept my family updated throughout surgery.",
    },
  ],
  locations: [
    {
      name: "Rohit N.",
      location: "Faridabad",
      procedure: "Robotic Hip Replacement",
      quote:
        "Consultation close to home, surgery at a tertiary hospital — the multi-location setup made the whole journey convenient.",
    },
    {
      name: "Prakash D.",
      location: "Outstation — Lucknow",
      procedure: "Robotic Knee Replacement",
      quote:
        "As an outstation patient, everything from airport pickup to accommodation was coordinated. Made a big surgery feel very manageable.",
    },
    {
      name: "Anjali K.",
      location: "Gurgaon",
      procedure: "Robotic Hip Replacement",
      quote:
        "Follow-ups at the nearest clinic and telephonic reviews meant fewer hospital visits. Excellent post-op logistics.",
    },
  ],
  resources: [
    {
      name: "Ishita P.",
      location: "Delhi",
      procedure: "Meniscus Repair Patient",
      quote:
        "The pre-op guides and exercise videos meant I walked into surgery knowing exactly what to expect. Recovery felt controlled, not scary.",
    },
    {
      name: "Mahesh B.",
      location: "Ghaziabad",
      procedure: "Fracture Fixation Patient",
      quote:
        "The rehab timeline and red-flag checklist were incredibly useful at home. I knew when to worry and when to relax.",
    },
    {
      name: "Sanjay B.",
      location: "Noida",
      procedure: "Robotic Knee Replacement Patient",
      quote:
        "Clear, honest information — not marketing. That's what set my expectations right before surgery.",
    },
  ],
  specializations: [
    {
      name: "Rajesh K.",
      location: "Delhi",
      procedure: "Knee Replacement",
      quote:
        "Whatever the joint, the approach is the same: honest evaluation, non-surgical care where possible, precise surgery when needed.",
    },
    {
      name: "Meera A.",
      location: "Faridabad",
      procedure: "Rotator Cuff Repair",
      quote:
        "One team that handles knees, hips, shoulders and sports injuries — I trusted the same doctor with two very different problems.",
    },
    {
      name: "Vikram S.",
      location: "Noida",
      procedure: "ACL Reconstruction",
      quote:
        "The breadth of experience shows. Dr. Tomar has seen every variation of my injury and picked the right plan first time.",
    },
  ],
  conditions: [
    {
      name: "Sunita M.",
      location: "Gurgaon",
      procedure: "Osteoarthritis Patient",
      quote:
        "I had been told to 'live with it'. A proper evaluation identified what was actually treatable — and what wasn't.",
    },
    {
      name: "Ritu J.",
      location: "Noida",
      procedure: "Hip Impingement Patient",
      quote:
        "Getting the right diagnosis for my groin pain took years. Once identified, treatment was straightforward and effective.",
    },
    {
      name: "Neeraj V.",
      location: "Delhi",
      procedure: "Tennis Elbow Patient",
      quote:
        "Non-surgical care worked for me — bracing, PRP and physiotherapy. Surgery was never rushed into.",
    },
  ],
};
