import { siteConfig } from "@/config/site.config";

export type LegalSection = { title: string; paragraphs: string[] };

const contactLine = `Email: ${siteConfig.email} | Phone: ${siteConfig.phone} | Address: ${siteConfig.address.street}, ${siteConfig.address.suite}, ${siteConfig.address.country}.`;

export const privacySections: LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      `${siteConfig.brand} ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect personal information you provide directly (name, email, phone, business details) and automatic data (IP address, browser type, usage patterns) through cookies and analytics tools.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use collected information to provide services, respond to inquiries, improve our website, send communications you request, and comply with legal obligations.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not sell your personal information. We may share data with service providers who assist our operations, subject to confidentiality agreements.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We implement reasonable administrative, technical, and physical safeguards. No method of transmission over the Internet is 100% secure.",
    ],
  },
  {
    title: "6. Your Rights",
    paragraphs: [
      `Depending on your location, you may request access, correction, deletion, or restriction of your personal data by contacting us at ${siteConfig.email}.`,
    ],
  },
  {
    title: "7. Contact Us",
    paragraphs: [contactLine],
  },
  {
    title: "8. Consent",
    paragraphs: [
      "By using our website, you consent to this Privacy Policy. Effective date: June 10, 2026.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "1. Overview",
    paragraphs: [
      `These Terms of Service govern your use of ${siteConfig.brand}'s website and services. By accessing our services, you agree to these terms.`,
    ],
  },
  {
    title: "2. Nature of Services",
    paragraphs: [
      `${siteConfig.brand} provides consulting, automation, and business support services. ${siteConfig.disclaimer}`,
    ],
  },
  {
    title: "3. No Guarantees",
    paragraphs: [
      "Results vary by market conditions, implementation, and client participation. Past performance does not guarantee future results.",
    ],
  },
  {
    title: "4. Payments & Billing",
    paragraphs: [
      "Fees, billing cycles, and payment methods are defined in individual service agreements or checkout pages.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    paragraphs: [
      `To the maximum extent permitted by law, ${siteConfig.brand} is not liable for indirect, incidental, or consequential damages arising from use of our services.`,
    ],
  },
  {
    title: "6. Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the State of Florida, United States.",
    ],
  },
  {
    title: "7. Contact",
    paragraphs: [
      `Email: ${siteConfig.supportEmail} | Website: ${siteConfig.brand}`,
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    title: "1. What Are Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help us remember preferences and understand how visitors use our site.",
    ],
  },
  {
    title: "2. Types of Cookies We Use",
    paragraphs: [
      "Essential cookies: required for basic site functionality.",
      "Analytics cookies: help us understand traffic and improve the user experience.",
      "Preference cookies: remember your choices such as language or consent status.",
    ],
  },
  {
    title: "3. Managing Cookies",
    paragraphs: [
      "You can accept or decline non-essential cookies using the banner on your first visit. You may also control cookies through your browser settings.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    paragraphs: [
      "Some embedded tools (scheduling widgets, analytics, payment providers) may set their own cookies governed by their respective policies.",
    ],
  },
  {
    title: "5. Contact",
    paragraphs: [contactLine],
  },
];

export const refundSections: LegalSection[] = [
  {
    title: "1. General Policy",
    paragraphs: [
      `Refund eligibility depends on the specific product or service purchased from ${siteConfig.brand}. Please review your agreement or checkout terms before purchase.`,
    ],
  },
  {
    title: "2. One-Time Services",
    paragraphs: [
      "Deposits for custom projects may be non-refundable after work has begun, as stated in your service agreement.",
    ],
  },
  {
    title: "3. Subscriptions & Memberships",
    paragraphs: [
      "Monthly subscriptions are billed in advance. Cancel with written notice before the next billing date. Completed billing periods are generally non-refundable unless required by law.",
    ],
  },
  {
    title: "4. How to Request a Refund",
    paragraphs: [
      `Contact ${siteConfig.supportEmail} with your name, order details, and reason for the request. We will review and respond within 5–10 business days.`,
    ],
  },
  {
    title: "5. Contact",
    paragraphs: [contactLine],
  },
];
