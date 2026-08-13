export type AcademyCourse = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  billingNote: string;
  badge?: string;
  highlighted?: boolean;
  cta: { label: string; href?: string };
};

export type AcademyAddon = {
  name: string;
  price: string;
  description?: string;
};

export const academyContent = {
  hero: {
    title: { white: "GM ", gold: "Academy" },
    subtitle: "Courses and programs to build skills, leadership, and business mastery.",
    priceRange: "Courses from $100 · Mentorship from $500 · Bootcamp $5,000",
    disclaimer:
      "All prices are published in USD, plus applicable taxes. Source: Square Service Library (Gm Enterprise Academy).",
  },
  catalog: {
    title: "Academy Courses",
    subtitle:
      "Choose a course or program below. Each option includes a fixed price, full description, and a clear next step to enroll.",
  },
  courses: [
    {
      id: "starter-foundations",
      name: "Starter Foundations Course",
      description:
        "Beginner-friendly course covering essential foundational concepts to start your learning journey.",
      price: "$100",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "growth-development",
      name: "Growth & Development Class",
      description:
        "Skill-building class focused on personal and professional growth and continuous development.",
      price: "$200",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "intensive-study",
      name: "Intensive Study Pack",
      description:
        "Accelerated study bundle for focused, fast-paced learning and exam or project preparation.",
      price: "$200",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "professional-certification",
      name: "Professional Certification Course",
      description:
        "Certification-track course to build professional-level skills and earn a completion credential.",
      price: "$250",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      badge: "Popular",
      highlighted: true,
      cta: { label: "Enroll Now" },
    },
    {
      id: "digital-media-skills",
      name: "Digital Media Skills Course",
      description:
        "Hands-on training in digital media creation, content production, and visual storytelling skills.",
      price: "$300",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "personal-branding",
      name: "Personal Branding Workshop",
      description:
        "Interactive workshop to build and refine your personal brand and professional identity.",
      price: "$350",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "premium-mentorship",
      name: "Premium Mentorship Program",
      description:
        "Premium guided mentorship with personalized support and one-on-one expert learning guidance.",
      price: "$500",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "business-mastery",
      name: "Business Mastery Program",
      description:
        "Comprehensive program covering advanced business strategy, leadership, and management skills.",
      price: "$1,000",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "executive-coaching",
      name: "Executive Coaching Program",
      description:
        "One-on-one executive coaching to develop leadership, decision-making, and strategic thinking.",
      price: "$3,000",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
    {
      id: "full-day-bootcamp",
      name: "Full-Day Business Academy Bootcamp",
      description:
        "Intensive full-day immersive bootcamp covering core business academy topics and practical skills.",
      price: "$5,000",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      cta: { label: "Enroll Now" },
    },
  ] satisfies AcademyCourse[],
  addons: {
    title: "Optional Add-ons",
    items: [
      {
        name: "Additional Course Module",
        price: "$75",
        description:
          "Extra learning module to expand your curriculum with additional focused content.",
      },
    ] as AcademyAddon[],
  },
};
