"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { contactContent } from "@/data/site";
import type { InquiryParams } from "@/lib/inquiry";
import type { Locale } from "@/lib/locales";
import {
  buildWhatsAppMessage,
  isWhatsAppConfigured,
  openWhatsAppChat,
} from "@/lib/whatsapp";

type ContactFormProps = {
  locale: Locale;
  inquiry?: InquiryParams;
};

type FieldConfig = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
  multiline?: boolean;
};

export function ContactForm({ locale, inquiry }: ContactFormProps) {
  const { form } = contactContent;
  const base = `/${locale}`;
  const hasInquiry = Boolean(inquiry?.plan || inquiry?.service);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fields: FieldConfig[] = [
    {
      id: "firstName",
      name: "firstName",
      label: form.fields.firstName.label,
      placeholder: form.fields.firstName.label,
      required: form.fields.firstName.required,
    },
    {
      id: "lastName",
      name: "lastName",
      label: form.fields.lastName.label,
      placeholder: form.fields.lastName.label,
      required: form.fields.lastName.required,
    },
    {
      id: "phone",
      name: "phone",
      label: form.fields.phone.label,
      placeholder: form.fields.phone.label,
      required: form.fields.phone.required,
      type: "tel",
    },
    {
      id: "email",
      name: "email",
      label: form.fields.email.label,
      placeholder: form.fields.email.label,
      required: form.fields.email.required,
      type: "email",
    },
    {
      id: "message",
      name: "message",
      label: form.fields.message.label,
      placeholder: hasInquiry
        ? "Any questions about this plan? (optional)"
        : form.fields.message.label,
      required: false,
      multiline: true,
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!isWhatsAppConfigured()) {
      setError(
        "WhatsApp is not configured yet. Please add NEXT_PUBLIC_WHATSAPP_NUMBER to your environment.",
      );
      return;
    }

    setSubmitting(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const data = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (siteConfig.contactFormEndpoint) {
      try {
        await fetch(siteConfig.contactFormEndpoint, {
          method: "POST",
          body: formData,
        });
      } catch {
        /* optional endpoint — continue to WhatsApp */
      }
    }

    const message = buildWhatsAppMessage(data, inquiry);
    openWhatsAppChat(message);
    setSubmitting(false);
  }

  return (
    <section className="contact-form-section bg-white">
      <div className="section-padding contact-form-section__inner">
        <h2 className="contact-form-section__title aos aos--fade-up aos--visible">
          {hasInquiry ? form.inquiryTitle : form.title}
        </h2>

        {hasInquiry ? (
          <div className="inquiry-banner aos aos--scale-in aos--visible">
            <span className="inquiry-banner__label">Selected plan</span>
            <p className="inquiry-banner__name">
              {inquiry?.plan ?? inquiry?.service}
            </p>
            {inquiry?.price ? (
              <p className="inquiry-banner__price">{inquiry.price}</p>
            ) : null}
            <p className="inquiry-banner__hint">
              Fill in your details below — we&apos;ll open WhatsApp so you can
              complete your request.
            </p>
          </div>
        ) : null}

        <form className="contact-form" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="contact-form__field aos aos--fade-up aos--visible"
              style={{ ["--aos-delay" as string]: `${index * 80}ms` }}
            >
              <label htmlFor={field.id} className="contact-form__label">
                {field.label}
                {field.required ? (
                  <span className="contact-form__required" aria-hidden>
                    {" "}
                    *
                  </span>
                ) : null}
              </label>
              {field.multiline ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={4}
                  placeholder={field.placeholder}
                  className="contact-form__input contact-form__textarea"
                />
              ) : (
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type ?? "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="contact-form__input"
                />
              )}
            </div>
          ))}

          <div className="contact-form__legal">
            <p className="contact-form__legal-links">
              <Link href={`${base}/privacy-policy`} className="contact-form__legal-link">
                {form.legalLinks.privacy}
              </Link>
              <span className="contact-form__legal-sep" aria-hidden>
                {" "}
                |{" "}
              </span>
              <Link href={`${base}/term-of-services`} className="contact-form__legal-link">
                {form.legalLinks.terms}
              </Link>
            </p>
          </div>

          <div className="contact-form__consent-block">
            <label className="contact-form__checkbox-row">
              <input
                id="policyConsent"
                name="policyConsent"
                type="checkbox"
                required
                className="contact-form__checkbox"
              />
              <span className="contact-form__checkbox-label">
                {form.consentCheckboxLabel}
              </span>
            </label>
            <p className="contact-form__consent">{form.consentText}</p>
          </div>

          {error ? <p className="contact-form__error">{error}</p> : null}

          <button
            type="submit"
            className="contact-form__submit contact-form__submit--whatsapp"
            disabled={submitting}
          >
            <span className="contact-form__submit-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            {submitting
              ? "Opening WhatsApp..."
              : hasInquiry
                ? form.whatsappSubmitLabel
                : form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
