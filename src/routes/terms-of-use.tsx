import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Dr. L. Tomar" },
      { name: "description", content: "Terms and conditions that govern your use of Dr. L. Tomar's website." },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Please read these terms carefully before using this website. By accessing this website you agree to be bound by these terms."
      updated="January 1, 2026"
    >
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using this website you agree to be bound by these Terms of Use and all applicable laws and regulations. If you disagree with any part of these terms, please do not use this website.
      </p>

      <h2>Educational Content Only</h2>
      <p>
        All content on this website is provided for general educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of a qualified physician regarding any medical condition.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Text, graphics, logos, images and other content on this website are the property of Dr. L. Tomar's practice unless otherwise noted, and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website may contain links to external websites. We are not responsible for the content, privacy practices, or accuracy of any third-party websites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        The practice shall not be liable for any direct, indirect, incidental or consequential damages arising out of the use of, or inability to use, this website or the information contained on it.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may revise these Terms of Use from time to time. The most current version will always be posted on this page.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Delhi.
      </p>
    </LegalPage>
  );
}
