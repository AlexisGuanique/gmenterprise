export type PricingPlan = {
  id: string;
  name: string;
  setupPrice?: string;
  monthlyPrice?: string;
  priceLabel: string;
  billingNote: string;
  badge?: string;
  features: string[];
  cta: { label: string; href?: string };
  subscriptionNotice?: string;
  highlighted?: boolean;
};

export type PricingAddon = {
  name: string;
  price: string;
  description?: string;
  features?: string[];
};

export const pricingContent = {
  hero: {
    title: { white: "Pricing", gold: "" },
    subtitle: "Transparent plans for every stage of growth.",
    priceRange: "Plans from $100 one-time · Premium from $99/mo",
    disclaimer:
      "All prices are published in USD. One-time setup fees may be financed where available; monthly subscriptions are billed separately.",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      setupPrice: "$100",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "1 Social Media Platform Setup",
        "Basic Content Calendar (30 days)",
        "1 Strategy Call (30 min)",
        "Email Support",
        "Monthly Performance Report",
      ],
      cta: { label: "Get Started" },
    },
    {
      id: "growth",
      name: "Growth",
      setupPrice: "$200",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "2 Social Media Platforms",
        "Content Calendar (60 days)",
        "2 Strategy Calls (45 min each)",
        "5 Basic Posts",
        "Email & Chat Support",
        "Monthly Analytics Report",
      ],
      cta: { label: "Get Started" },
    },
    {
      id: "professional",
      name: "Professional",
      setupPrice: "$250",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      badge: "Popular",
      highlighted: true,
      features: [
        "3 Social Media Platforms",
        "Content Calendar (90 days)",
        "3 Strategy Calls (1 hour each)",
        "Monthly Content Creation (15 posts)",
        "1 Custom Graphic Design/month",
        "Hashtag Research & Optimization",
        "Weekly Performance Updates",
        "Engagement Management (basic)",
        "Priority Support",
      ],
      cta: { label: "Get Started" },
    },
    {
      id: "premium",
      name: "Premium",
      setupPrice: "$500",
      monthlyPrice: "$99/mo",
      priceLabel: "Setup + monthly subscription",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "5 Social Media Platforms",
        "Monthly Strategy Sessions (2 hours)",
        "Daily Content Creation (up to 40 posts/month)",
        "2 Custom Graphics/week",
        "Full Engagement Management",
        "A/B Testing",
        "Monthly Business Review",
        "24h Support Response",
      ],
      cta: { label: "Get Started" },
      subscriptionNotice:
        "By clicking Get Started, you authorize automatic monthly charges of $99/mo beginning after setup. Setup fees are non-refundable once onboarding begins. Cancel anytime in Settings > Billing.",
    },
  ] satisfies PricingPlan[],
  addons: {
    title: "Add-ons (sold separately)",
    items: [
      {
        name: "Additional Social Platform",
        price: "$75 (one-time)",
        description: "Add one extra platform setup to any plan.",
      },
      {
        name: "Extra Strategy Session (60 min)",
        price: "$150",
      },
      {
        name: "Rush Content Pack (10 posts)",
        price: "$200",
      },
      {
        name: "Custom Brand Kit",
        price: "$350 (one-time)",
        description: "Logo refresh, color palette, and social templates.",
      },
    ] as PricingAddon[],
  },
  policies: {
    cancellation: {
      title: "Cancellation & Refund Policy",
      items: [
        "Monthly subscriptions: Cancel anytime. Cancellation takes effect at the end of your current billing period.",
        "One-time setup fees: Non-refundable once onboarding has commenced.",
        "Free trial: Cancel before the trial ends to avoid being charged.",
      ],
    },
    billing: {
      title: "Billing & subscription notices",
      items: [
        "Subscriptions renew automatically until you cancel.",
        "All prices are listed in USD. Plus applicable taxes.",
        "Payments are processed securely through Square, Inc.",
        "Add-ons and overages are billed separately as listed on this page.",
      ],
    },
    disclaimer:
      "We do not guarantee specific results or outcomes. See our Refund Policy for full details.",
  },
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
  faq: [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. Contact our team to upgrade or adjust your plan. Changes may affect billing and onboarding timelines.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Where offered, trial terms are stated at checkout. A valid payment method may be required to begin.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards and other methods shown at checkout via Square. Installment options may be available.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "Cancel through your account billing settings or contact support. Cancellation takes effect at period end.",
    },
  ],
};
