import type { Locale } from "@/lib/locales";
import { siteImages } from "@/config/images";

export { siteConfig } from "@/config/site.config";
export { getNav } from "@/config/navigation";

export type NavItem = { label: string; href: string };

export type FAQItem = { question: string; answer: string };

export type Office = {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
};

export type Feature = { title: string; description: string };

export type AboutFeature = {
  title: string;
  description: string;
  icon: "star" | "video" | "email" | "gear";
};

export type Stat = { value: string; label: string };

export type HeroContent = {
  eyebrow?: { white: string; gold: string };
  title: { white: string; gold: string };
  subtitle?: string;
};

export const pageHeroes = {
  home: {
    eyebrow: { white: "DIGITAL ", gold: "MARKETING" },
    title: {
      white: "Elite solutions for ",
      gold: "your brand growth",
    },
    subtitle:
      "SEO, social media, paid ads, and branding — built to scale your business 24/7",
  },
  about: {
    eyebrow: { white: "ABOUT ", gold: "US" },
    title: {
      white: "Built for teams that want ",
      gold: "real results",
    },
  },
  contact: {
    title: { white: "Contact ", gold: "Information" },
  },
  blog: {
    title: { white: "Our ", gold: "Blog" },
    subtitle: "Insights, updates, and resources for your business.",
  },
  schedule: {
    title: { white: "Schedule a ", gold: "Call" },
    subtitle: "Book a consultation with our team.",
  },
  pricing: {
    title: { white: "Pricing", gold: "" },
    subtitle: "Transparent plans for every stage of growth.",
  },
  privacy: {
    title: { white: "Privacy ", gold: "Policy" },
  },
  terms: {
    title: { white: "Terms of ", gold: "Service" },
  },
  cookies: {
    title: { white: "Cookie ", gold: "Policy" },
  },
  refund: {
    title: { white: "Refund ", gold: "Policy" },
  },
} satisfies Record<string, HeroContent>;

export const homeContent = {
  hero: pageHeroes.home,
  consult: {
    intro:
      "We help businesses streamline operations, improve customer engagement, and grow with structured systems and expert guidance.",
    carousel: [
      {
        src: siteImages.sections.carousel1,
        alt: "Business analytics dashboard on laptop",
      },
      {
        src: siteImages.sections.carousel2,
        alt: "Team collaborating in modern office",
      },
      {
        src: siteImages.sections.carousel3,
        alt: "Professional meeting with growth charts",
      },
    ],
  },
  whoWeWorkWith: {
    title: "WHO WE WORK WITH",
    segments: [
      { illustration: "online-sellers" as const, label: "Entrepreneurs" },
      { illustration: "retail-brands" as const, label: "Growing Brands" },
      { illustration: "logistics" as const, label: "Operations Teams" },
      { illustration: "scaling-businesses" as const, label: "Scaling Businesses" },
    ],
    subtitle: "Structured support for teams ready to grow with clarity",
    video: "",
    socialProof: "Join hundreds of businesses already thriving with us",
    body: "Whether you need to scale, streamline, or stay ahead of the competition, our team guides you every step of the way with proven frameworks and hands-on support.",
    detailIllustration: "growth-ecosystem" as const,
    detailIllustrationAlt: "Connected business growth ecosystem illustration",
  },
  elevate: {
    titleLines: ["Elevate Your", "Business", "Success Today"],
    paragraphs: [
      "Boost performance, scale with confidence, and outpace your",
      "competition. Ready to streamline operations and transform",
      "the way you do business?",
    ],
    closing: "Let us lead the way.",
    image: {
      src: siteImages.sections.elevate,
      alt: "Professional team working together",
    },
  },
  partner: {
    heading: "Partner with our expert team and maximize your business potential",
    listTitle: "Transform your operations through:",
    bullets: [
      "Automation solutions",
      "Workflow management",
      "Strategic growth planning",
      "Operational efficiency",
    ],
    image: {
      src: siteImages.sections.partner,
      alt: "Business professionals in meeting",
    },
  },
  customerSuccess: {
    title: "Trusted by growing businesses nationwide.",
    body: "We specialize in solutions that simplify operations, strengthen customer relationships, and help teams scale with structure and confidence.",
  },
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
  faq: [
    {
      question: "What services do you offer?",
      answer:
        "We provide consulting, automation, customer engagement tools, and ongoing strategic support tailored to your business goals.",
    },
    {
      question: "Who is this for?",
      answer:
        "Our services are designed for entrepreneurs, small businesses, and growing teams that want measurable results with clear structure.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a call through our scheduling page or contact us directly. We'll review your needs and recommend the right approach.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We offer implementation packages and ongoing partnership options depending on your goals and timeline.",
    },
  ] satisfies FAQItem[],
  cta: {
    heading: "Ready to get started?",
    buttonLabel: "Book a Call",
  },
};

export type AboutStatCircle = { image: string; alt: string };

export const aboutContent = {
  intro: {
    tagline: {
      brand: "Your Brand",
      rest: "...built for ambitious teams",
    },
    stats: [
      {
        image: siteImages.about.stat1,
        alt: "+250 clients",
      },
      {
        image: siteImages.about.stat2,
        alt: "Automated workflows",
      },
      {
        image: siteImages.about.stat3,
        alt: "Global reach",
      },
      {
        image: siteImages.about.stat4,
        alt: "Tailored solutions",
      },
    ] satisfies AboutStatCircle[],
  },
  story: {
    logo: "/images/logo.jpg",
    logoAlt: "GM Enterprise LLC logo",
    items: [
      "We were founded with a clear mission: help business owners reclaim time by automating complex processes and delivering structured growth systems.",
      "Our brand represents innovation, clarity, and long-term partnership with every client we serve.",
      "Who we serve: businesses and entrepreneurs ready for structure, scalability, and measurable outcomes.",
    ],
  },
  experience: {
    title: "The best possible experience",
    description:
      "Personalized service tailored to each client, based on their needs and business reality.",
  },
  features: [
    {
      title: "Single Point of Contact",
      description: "Dedicated support throughout your journey with clear communication.",
      icon: "star",
    },
    {
      title: "Onboarding",
      description: "Structured onboarding with a team that guides you through every step.",
      icon: "video",
    },
    {
      title: "Reports & Analysis",
      description: "Transparent reporting and data-driven insights for better decisions.",
      icon: "email",
    },
    {
      title: "Automation Workflows",
      description: "Custom workflows that reduce manual work and improve consistency.",
      icon: "gear",
    },
  ] satisfies AboutFeature[],
  fullService: {
    title: "Full Service",
    description:
      "Take your operations to the next level. Whether you want to scale, streamline, or stay ahead, our experts guide you every step of the way.",
    cta: "Get started",
    image: {
      src: siteImages.sections.fullService,
      alt: "Modern office workspace",
      width: 508,
      height: 283,
    },
  },
};

export const offices: Office[] = [
  {
    city: "Orlando",
    country: "USA",
    email: "hello@yourbrand.com",
    phone: "+1 (000) 000-0000",
    address: "123 Main Street, Suite 100, Orlando, FL 32822, United States",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Orlando,+FL&output=embed",
  },
];

export const contactContent = {
  offices: {
    title: "Our offices",
    subtitle: "Contact us to speak with our team",
  },
  form: {
    title: "Contact us / Request Information",
    inquiryTitle: "Complete your purchase request",
    whatsappSubmitLabel: "Continue on WhatsApp",
    fields: {
      firstName: { label: "First Name", required: true },
      lastName: { label: "Last Name", required: false },
      phone: { label: "Phone", required: true },
      email: { label: "Email", required: true },
      message: { label: "Message", required: false },
    },
    submitLabel: "Submit",
    legalLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    consentCheckboxLabel:
      "I have read and agree to the Privacy Policy and Terms of Service.",
    consentText:
      "By submitting this form, you consent to receive communications from us regarding your inquiry. You may opt out at any time by contacting us directly.",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  status: string;
  image: { src: string; alt: string };
};

export const blogContent = {
  sectionTitle: "Latest Updates",
  posts: [
    {
      slug: "getting-started",
      title: "Getting Started with Your Growth Strategy",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post1,
        alt: "Planning and strategy session",
      },
    },
    {
      slug: "automation-basics",
      title: "",
      description: "Understanding workflow automation for small teams",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post2,
        alt: "Team working on laptops",
      },
    },
    {
      slug: "customer-engagement",
      title: "",
      description: "How to improve response times and customer satisfaction",
      status: "Coming Soon",
      image: {
        src: siteImages.blog.post3,
        alt: "Customer support team",
      },
    },
  ] satisfies BlogPost[],
};

export const blogPosts = blogContent.posts;
