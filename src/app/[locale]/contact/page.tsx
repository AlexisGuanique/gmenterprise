import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOfficesSection } from "@/components/contact/ContactOfficesSection";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { InquiryParams } from "@/lib/inquiry";
import type { Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    plan?: string;
    planId?: string;
    price?: string;
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const query = await searchParams;

  const inquiry: InquiryParams = {
    plan: query.plan,
    planId: query.planId,
    price: query.price,
    service: query.service,
  };

  const hasInquiry = Boolean(inquiry.plan || inquiry.service);

  return (
    <>
      <PageHero
        locale={locale as Locale}
        content={
          hasInquiry
            ? {
                title: { white: "Get Started with ", gold: inquiry.plan ?? inquiry.service ?? "" },
                subtitle: "Fill in your details and we'll connect you on WhatsApp to finalize your request.",
              }
            : pageHeroes.contact
        }
      />
      <ContactOfficesSection />
      <ContactForm locale={locale as Locale} inquiry={inquiry} />
    </>
  );
}
