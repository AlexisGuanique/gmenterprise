export type PricingPlan = {
  id: string;
  name: string;
  description: string;
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
    priceRange: "Plans from $100 one-time · subscriptions from $99/mo · Business Meeting $5,000",
    disclaimer:
      "All prices are published in USD. One-time setup fees may be financed where available; monthly subscriptions are billed separately.",
  },
  shop: {
    title: "Shop — Available Service Plans",
    subtitle:
      "Each plan includes a fixed price, full description, and secure checkout via Square.",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "Try our services with basic setup on one social platform and a 30-day content calendar.",
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
      cta: { label: "Buy Now" },
    },
    {
      id: "growth",
      name: "Growth",
      description:
        "Grow your social presence with two platforms, extended content planning, and strategy support.",
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
      cta: { label: "Buy Now" },
    },
    {
      id: "professional",
      name: "Professional",
      description:
        "Professional-grade social management with creative content, engagement, and priority support.",
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
      cta: { label: "Buy Now" },
    },
    {
      id: "premium",
      name: "Premium",
      description:
        "Full-suite social management with daily content, engagement, A/B testing, and 24h support.",
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
      cta: { label: "Buy Now" },
      subscriptionNotice:
        "By clicking Buy Now, you authorize automatic monthly charges of $99/mo beginning after setup. Setup fees are non-refundable once onboarding begins. Cancel anytime in Settings > Billing.",
    },
    {
      id: "business-plus",
      name: "Business Plus",
      description:
        "Premium coaching and full-service management with unlimited platforms, video content, and paid ads setup.",
      setupPrice: "$1,000",
      monthlyPrice: "$199/mo",
      priceLabel: "Setup + monthly subscription",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Monthly 1-on-1 coaching (1.5 hours)",
        "Unlimited social media platforms",
        "Dedicated account manager",
        "Video content creation (2/month)",
        "Paid ads setup",
        "Priority support",
      ],
      cta: { label: "Buy Now" },
      subscriptionNotice:
        "By clicking Buy Now, you authorize automatic monthly charges of $199/mo beginning after setup. Setup fees are non-refundable once onboarding begins. Cancel anytime in Settings > Billing.",
    },
    {
      id: "business-meeting",
      name: "Business Meeting",
      description:
        "A 12-hour fully customized marketing conference — virtual or in-person — tailored to your team and industry.",
      setupPrice: "$5,000",
      priceLabel: "One-time",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "12-hour marketing conference (virtual or in-person)",
        "100% customized to your team and business",
        "Strategic roadmap delivery",
        "Competitive analysis",
        "Live Q&A sessions",
        "30-day post-conference follow-up",
      ],
      cta: { label: "Buy Now" },
    },
  ] satisfies PricingPlan[],
  addons: {
    title: "Optional Add-ons",
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
