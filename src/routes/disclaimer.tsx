import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Dr. L. Tomar" },
      { name: "description", content: "Important medical disclaimer regarding information provided on Dr. L. Tomar's website." },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      intro="The information on this website is intended for general education. It is not a substitute for personalised medical advice from a qualified surgeon."
      updated="January 1, 2026"
    >
      <h2>Not Medical Advice</h2>
      <p>
        Content on this website — including text about conditions, procedures, robotic surgery, recovery timelines and outcomes — is provided for general information only. It does not constitute medical advice, diagnosis or a doctor–patient relationship.
      </p>

      <h2>Individual Results Vary</h2>
      <p>
        Surgical outcomes depend on age, general health, severity of the condition, adherence to rehabilitation and many other factors. Testimonials, statistics and recovery timelines described on this website are illustrative and cannot guarantee any specific result in your case.
      </p>

      <h2>Consult a Qualified Physician</h2>
      <p>
        Always consult Dr. L. Tomar or another qualified physician before starting, stopping or changing any treatment. Never disregard professional medical advice or delay seeking it because of something you read on this website.
      </p>

      <h2>Emergencies</h2>
      <p>
        This website is not designed to handle medical emergencies. If you or someone with you is experiencing a medical emergency, call your local emergency number or visit the nearest emergency department immediately.
      </p>

      <h2>External Links & References</h2>
      <p>
        References to third-party research, technologies or brands (including robotic surgical systems) are provided for context. Their inclusion does not imply endorsement of every product feature or claim.
      </p>

      <h2>Contact</h2>
      <p>
        For clinical questions or to arrange a consultation, please reach the practice at +91 99100 00159 or ltomar@rediffmail.com.
      </p>
    </LegalPage>
  );
}
