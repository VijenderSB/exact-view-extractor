import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dr. L. Tomar" },
      { name: "description", content: "How Dr. L. Tomar's practice collects, uses and protects your personal and health information." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use and safeguard your personal and health information when you use this website or request a consultation."
      updated="January 1, 2026"
    >
      <h2>Information We Collect</h2>
      <p>
        We may collect your name, email address, phone number, city/location, and medical queries submitted via contact or appointment forms. We also collect basic technical data such as IP address, browser type and pages visited. Sensitive health records are collected only when you explicitly submit them for consultation purposes.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to consultation or appointment requests</li>
        <li>To communicate important updates about your care</li>
        <li>To improve the website experience</li>
        <li>To comply with legal and regulatory obligations</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information to third parties.</p>

      <h2>Data Security</h2>
      <p>
        We use reasonable technical and organisational safeguards to protect the information you share. No online transmission is 100% secure; we encourage you to avoid sending highly sensitive medical details over unsecured channels.
      </p>

      <h2>Cookies & Analytics</h2>
      <p>
        The website may use cookies and privacy-respecting analytics to understand usage patterns. You can disable cookies in your browser settings.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information at any time by writing to us at ltomar@rediffmail.com.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy-related questions, contact the practice at ltomar@rediffmail.com or +91 99100 00159.
      </p>
    </LegalPage>
  );
}
