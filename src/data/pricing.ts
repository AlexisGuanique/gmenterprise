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
    priceRange: "Plans from $497 one-time · subscriptions from $197/mo",
    disclaimer:
      "All prices are published in USD. One-time setup fees may be financed where available; monthly subscriptions are billed separately.",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      setupPrice: "$497",
      priceLabel: "one-time setup",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Core service setup",
        "1 workflow",
        "Onboarding call",
        "14-day optimization support",
      ],
      cta: { label: "Get Started" },
    },
    {
      id: "starter-monthly",
      name: "Starter Monthly",
      monthlyPrice: "$197/mo",
      priceLabel: "Month-to-month — no setup fee",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "1 core service channel",
        "1 workflow",
        "Email support",
        "Cancel anytime",
        "No setup fee. No long-term commitment.",
      ],
      cta: { label: "Get Started" },
      subscriptionNotice:
        "By clicking Get Started, you authorize automatic monthly charges beginning today. Cancel anytime in Settings > Billing.",
    },
    {
      id: "growth",
      name: "Growth",
      setupPrice: "$997",
      monthlyPrice: "$297/mo",
      priceLabel: "Setup + monthly subscription",
      billingNote: "Billed in USD · Plus applicable taxes",
      badge: "Popular",
      highlighted: true,
      features: [
        "Full service deployment",
        "Up to 3 workflows",
        "CRM integration",
        "30-day optimization",
        "Monthly performance review",
      ],
      cta: { label: "Get Started" },
      subscriptionNotice:
        "Setup fees are non-refundable once onboarding begins. Monthly charges begin 30 days after setup.",
    },
    {
      id: "scale",
      name: "Scale",
      setupPrice: "$2,500",
      monthlyPrice: "$597/mo",
      priceLabel: "Setup + monthly subscription",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "Complete automation system",
        "Multi-step pipelines",
        "CRM integration",
        "Knowledge base setup",
        "60-day continuous optimization",
      ],
      cta: { label: "Get Started" },
      subscriptionNotice:
        "Setup fees are non-refundable once onboarding begins. Monthly charges begin 30 days after setup.",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      setupPrice: "$5,000",
      monthlyPrice: "$997/mo",
      priceLabel: "Setup + monthly subscription",
      billingNote: "Billed in USD · Plus applicable taxes",
      features: [
        "All Scale features",
        "Custom workflow builds",
        "Advanced CRM integrations",
        "Multi-language support",
        "Dedicated account manager",
        "SLA support",
      ],
      cta: { label: "Contact Sales" },
      subscriptionNotice:
        "Setup fees are non-refundable once onboarding begins. Monthly charges begin 30 days after setup.",
    },
  ] satisfies PricingPlan[],
  addons: {
    title: "Add-ons (sold separately)",
    items: [
      {
        name: "Compliance Setup",
        price: "$350 (one-time)",
        description: "Everything you need to launch legally and confidently.",
        features: [
          "Consent flow audit",
          "Script review",
          "Documentation template",
          "45-minute strategy call",
        ],
      },
      {
        name: "Custom Workflow Build",
        price: "$750 each",
      },
      {
        name: "Additional CRM Integration",
        price: "$500 each",
      },
      {
        name: "Strategy Session (90 min)",
        price: "$350",
      },
    ] satisfies PricingAddon[],
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
        "We accept major credit cards and other methods shown at checkout. Installment options may be available.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "Cancel through your account billing settings or contact support. Cancellation takes effect at period end.",
    },
  ],
};
