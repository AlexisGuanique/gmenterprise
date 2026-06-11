import { siteImages } from "@/config/images";

export type MarketingService = {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  href?: string;
};

export type PromoBanner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
  variant?: "large" | "small";
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  image: string;
  alt: string;
  href: string;
};

export const marketingHomeContent = {
  hero: {
    slides: [
      {
        id: "slide-1",
        eyebrow: "Digital Marketing Innovations",
        title: "Unleash Your Potential with Elite Marketing",
        subtitle: "Strategy, content, and campaigns built to grow your brand",
        cta: "Get Started",
        href: "/pricing",
        image: siteImages.hero.slide1,
        alt: "Marketing analytics dashboard",
      },
      {
        id: "slide-2",
        eyebrow: "About us",
        title: "Scale Smarter with Data-Driven Campaigns",
        subtitle: "From SEO to paid ads — results you can measure",
        cta: "View Plans",
        href: "/pricing",
        image: siteImages.hero.slide2,
        alt: "Marketing team in strategy meeting",
      },
      {
        id: "slide-3",
        eyebrow: "Prime Growth Solutions",
        title: "Transform Your Brand Presence Online",
        subtitle: "Full-funnel marketing for ambitious businesses",
        cta: "Contact Us",
        href: "/contact",
        image: siteImages.hero.slide3,
        alt: "Creative marketing workspace",
      },
    ],
  },

  marquee: {
    text: "LAUNCH OFFER! — FREE STRATEGY SESSION + 20% OFF YOUR FIRST MONTH",
  },

  promoBanners: [
    {
      id: "banner-1",
      title: "Elevate Your Brand",
      subtitle: "Premium SEO & Content Packages",
      cta: "Shop now",
      href: "/pricing",
      image: siteImages.services.seo,
      alt: "SEO and content marketing",
      variant: "large" as const,
    },
    {
      id: "banner-2",
      title: "Smash Style Collections",
      subtitle: "Social Media Management",
      cta: "Shop Now",
      href: "/pricing",
      image: siteImages.services.social,
      alt: "Social media marketing",
      variant: "small" as const,
    },
    {
      id: "banner-3",
      title: "Performance Precision",
      subtitle: "Paid Ads & PPC Essentials",
      cta: "Shop Now",
      href: "/pricing",
      image: siteImages.services.ppc,
      alt: "PPC campaign analytics",
      variant: "small" as const,
    },
    {
      id: "banner-4",
      title: "Where Strategy Meets Style",
      subtitle: "Brand Identity & Design",
      cta: "Shop now",
      href: "/pricing",
      image: siteImages.services.branding,
      alt: "Brand design workspace",
      variant: "large" as const,
    },
  ] satisfies PromoBanner[],

  topBrands: {
    title: "TOP PLATFORMS",
    brands: [
      { name: "Google Ads", initial: "G" },
      { name: "Meta", initial: "M" },
      { name: "HubSpot", initial: "H" },
      { name: "Mailchimp", initial: "MC" },
      { name: "Semrush", initial: "S" },
      { name: "Canva", initial: "C" },
    ],
  },

  trending: {
    title: "Top Trending",
    services: [
      {
        id: "seo-audit",
        name: "Complete SEO Audit Package",
        price: "$499",
        image: siteImages.services.seo,
        alt: "SEO audit service",
        href: "/pricing",
      },
      {
        id: "social-starter",
        name: "Social Media Starter Plan",
        price: "$299/mo",
        image: siteImages.services.social,
        alt: "Social media management",
        href: "/pricing",
      },
      {
        id: "ppc-campaign",
        name: "Google & Meta PPC Campaign",
        price: "$799/mo",
        image: siteImages.services.ppc,
        alt: "PPC advertising",
        href: "/pricing",
      },
      {
        id: "email-marketing",
        name: "Email Marketing Automation",
        price: "$349/mo",
        image: siteImages.services.email,
        alt: "Email marketing",
        href: "/pricing",
      },
      {
        id: "brand-kit",
        name: "Brand Identity Starter Kit",
        price: "$899",
        image: siteImages.services.branding,
        alt: "Brand identity design",
        href: "/pricing",
      },
    ] satisfies MarketingService[],
  },

  about: {
    title: "About us",
    paragraphs: [
      "GM Enterprise started with a simple idea: marketing shouldn't feel confusing or cost more than it should. Good strategy actually matters — it affects how confident you feel about your brand and how far you're willing to push your growth.",
      "We're built for businesses that want to stay competitive in their own way. Some need full-funnel campaigns. Some want focused SEO or social media. Others just want marketing that works without overthinking it. We focus on services that deliver measurable results, last beyond the launch, and feel worth every dollar.",
    ],
  },

  newArrivals: {
    title: "New Arrivals",
    subtitle: "LATEST SERVICES",
    services: [
      {
        id: "content-strategy",
        name: "Content Strategy Blueprint",
        price: "$449",
        image: siteImages.services.content,
        alt: "Content strategy",
        href: "/pricing",
      },
      {
        id: "influencer",
        name: "Influencer Outreach Package",
        price: "$599/mo",
        image: siteImages.services.influencer,
        alt: "Influencer marketing",
        href: "/pricing",
      },
      {
        id: "video-ads",
        name: "Video Ads Production Kit",
        price: "$1,299",
        image: siteImages.services.video,
        alt: "Video advertising",
        href: "/pricing",
      },
      {
        id: "local-seo",
        name: "Local SEO Domination Plan",
        price: "$399/mo",
        image: siteImages.services.localSeo,
        alt: "Local SEO",
        href: "/pricing",
      },
      {
        id: "analytics",
        name: "Analytics & Reporting Suite",
        price: "$249/mo",
        image: siteImages.services.analytics,
        alt: "Marketing analytics",
        href: "/pricing",
      },
      {
        id: "landing-pages",
        name: "High-Converting Landing Pages",
        price: "$699",
        image: siteImages.services.landing,
        alt: "Landing page design",
        href: "/pricing",
      },
      {
        id: "crm-setup",
        name: "CRM & Automation Setup",
        price: "$549",
        image: siteImages.services.crm,
        alt: "CRM automation",
        href: "/pricing",
      },
      {
        id: "reputation",
        name: "Online Reputation Management",
        price: "$349/mo",
        image: siteImages.services.reputation,
        alt: "Reputation management",
        href: "/pricing",
      },
    ] satisfies MarketingService[],
  },

  features: [
    {
      title: "Dedicated Account Manager",
      description: "Your single point of contact for every campaign and report.",
      icon: "user" as const,
    },
    {
      title: "Fast Onboarding",
      description: "Get your campaigns live within days, not months.",
      icon: "rocket" as const,
    },
    {
      title: "Flexible Billing",
      description: "Monthly plans or project-based pricing to fit your budget.",
      icon: "card" as const,
    },
    {
      title: "24/7 Support",
      description: "We're here when you need answers or strategy adjustments.",
      icon: "support" as const,
    },
  ],

  testimonials: {
    title: "Testimonials",
    items: [
      {
        id: "t1",
        quote:
          "GM Enterprise transformed our online presence. Our leads doubled in three months and the ROI speaks for itself. I can't imagine running campaigns without them.",
        name: "Sarah M.",
        role: "E-commerce Founder",
      },
      {
        id: "t2",
        quote:
          "We hired them for social media management and the results were amazing. Consistent posting, strong engagement, and a brand voice that finally feels like us.",
        name: "Daniel R.",
        role: "Marketing Director",
      },
      {
        id: "t3",
        quote:
          "The SEO audit alone was worth it. Clear recommendations, quick implementation, and we started ranking for keywords we'd been chasing for years.",
        name: "Emily K.",
        role: "Startup CEO",
      },
    ] satisfies Testimonial[],
  },

  categories: {
    title: "Services by Category",
    items: [
      {
        id: "seo",
        label: "SEO",
        image: siteImages.services.seo,
        alt: "SEO services",
        href: "/pricing",
      },
      {
        id: "social",
        label: "Social Media",
        image: siteImages.services.social,
        alt: "Social media",
        href: "/pricing",
      },
      {
        id: "ppc",
        label: "Paid Ads",
        image: siteImages.services.ppc,
        alt: "Paid advertising",
        href: "/pricing",
      },
      {
        id: "branding",
        label: "Branding",
        image: siteImages.services.branding,
        alt: "Branding",
        href: "/pricing",
      },
    ] satisfies ServiceCategory[],
  },

  newsletter: {
    title: "Let's get in touch",
    subtitle: "Sign up for our newsletter and receive 10% off your first service",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
};
