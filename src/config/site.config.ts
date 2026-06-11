import type { Locale } from "@/lib/locales";

/**
 * Punto de entrada principal al personalizar una nueva landing.
 * Edita este archivo con los datos de la empresa cliente.
 */
export const siteConfig = {
  brand: "GM Enterprise",
  tagline: "Elite Digital Marketing Solutions",
  description:
    "Full-service digital marketing agency — SEO, social media, paid ads, branding, and growth strategies for ambitious brands.",

  email: "hello@gmenterprise.com",
  supportEmail: "support@gmenterprise.com",
  phone: "+1 (555) 123-4567",

  address: {
    street: "123 Marketing Avenue",
    suite: "Suite 200, Miami, FL 33101",
    country: "United States",
  },

  operatingHours: "Monday–Friday, 9:00 AM – 6:00 PM Eastern Time (ET)",

  disclaimer:
    "Information on this website is for general purposes only and does not constitute legal, financial, or professional advice.",

  copyright: "GM Enterprise LLC © 2026. All rights reserved.",

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
    src: "/images/logo.svg",
    width: 176,
    height: 56,
  },

  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },
} as const;
