import type { Locale } from "@/lib/locales";

/**
 * Punto de entrada principal al personalizar una nueva landing.
 * Edita este archivo con los datos de la empresa cliente.
 */
export const siteConfig = {
  brand: "GM Enterprise LLC",
  tagline: "Elite Digital Marketing Solutions",
  description:
    "Full-service digital marketing agency — SEO, social media, paid ads, branding, and growth strategies for ambitious brands.",

  email: "hello@gmenterprise.com",
  supportEmail: "support@gmenterprise.com",
  phone: "+1 (512) 717-2375",

  address: {
    street: "4701 Staggerbrush Rd",
    suite: "Austin, TX 78749",
    country: "United States",
    mapEmbedUrl:
      "https://www.google.com/maps?q=4701+Staggerbrush+Rd,+Austin,+TX+78749&output=embed",
  },

  operatingHours: "Monday–Friday, 9:00 AM – 6:00 PM Central Time (CT)",

  disclaimer:
    "Information on this website is for general purposes only. It does not constitute legal, financial, or professional advice.",

  copyright: "Copyright © 2026 GM Enterprise LLC. All rights reserved.",

  credit: {
    label: "Developed by GM Enterprise",
    href: "https://gmenterprise.com",
    show: false,
  },

  headerCta: {
    label: "Get Started",
    path: "/pricing",
  },

  scheduleHref: (locale: Locale) => `/${locale}/schedule-a-call`,

  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",

  bookingWidgetUrl: process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL ?? "",

  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",

  /**
   * Número de WhatsApp para consultas de compra.
   * Formato internacional sin + ni espacios. Ej: 15551234567
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",

  logo: {
    src: "/images/logo.jpg",
    width: 205,
    height: 112,
  },

  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },
} as const;
