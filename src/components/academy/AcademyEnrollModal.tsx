"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { AcademyCourse } from "@/data/academy";
import { contactContent } from "@/data/site";
import {
  buildWhatsAppMessage,
  isWhatsAppConfigured,
  openWhatsAppChat,
} from "@/lib/whatsapp";

type AcademyEnrollModalProps = {
  course: AcademyCourse | null;
  open: boolean;
  onClose: () => void;
};

export function AcademyEnrollModal({
  course,
  open,
  onClose,
}: AcademyEnrollModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { form } = contactContent;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !course) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!course) return;
    setError("");

    if (!isWhatsAppConfigured()) {
      setError(
        "WhatsApp is not configured yet. Please add NEXT_PUBLIC_WHATSAPP_NUMBER to your environment.",
      );
      return;
    }

    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const message = buildWhatsAppMessage(data, {
      plan: course.name,
      planId: course.id,
      price: course.price,
      service: "Academy",
    });

    openWhatsAppChat(message);
    setSubmitting(false);
    onClose();
  }

  return (
    <div
      className="academy-enroll-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="academy-enroll-modal__backdrop"
        aria-label="Close enrollment form"
        onClick={onClose}
      />

      <div className="academy-enroll-modal__panel">
        <button
          type="button"
          className="academy-enroll-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        <header className="academy-enroll-modal__header">
          <p className="academy-enroll-modal__eyebrow">GM Academy</p>
          <h2 id={titleId} className="academy-enroll-modal__title">
            Enroll in this course
          </h2>
          <div className="academy-enroll-modal__course">
            <p className="academy-enroll-modal__course-name">{course.name}</p>
            <p className="academy-enroll-modal__course-price">{course.price}</p>
          </div>
          <p className="academy-enroll-modal__hint">
            Fill in your details and we&apos;ll open WhatsApp so you can complete
            your enrollment with our team.
          </p>
        </header>

        <form className="academy-enroll-modal__form" onSubmit={handleSubmit}>
          <div className="academy-enroll-modal__row">
            <label className="academy-enroll-modal__field">
              <span>
                {form.fields.firstName.label}
                <span aria-hidden> *</span>
              </span>
              <input
                ref={firstFieldRef}
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className="academy-enroll-modal__input"
              />
            </label>
            <label className="academy-enroll-modal__field">
              <span>{form.fields.lastName.label}</span>
              <input
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="academy-enroll-modal__input"
              />
            </label>
          </div>

          <label className="academy-enroll-modal__field">
            <span>
              {form.fields.phone.label}
              <span aria-hidden> *</span>
            </span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="academy-enroll-modal__input"
            />
          </label>

          <label className="academy-enroll-modal__field">
            <span>
              {form.fields.email.label}
              <span aria-hidden> *</span>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="academy-enroll-modal__input"
            />
          </label>

          <label className="academy-enroll-modal__field">
            <span>{form.fields.message.label} (optional)</span>
            <textarea
              name="message"
              rows={3}
              className="academy-enroll-modal__input academy-enroll-modal__textarea"
              placeholder="Any questions about this course?"
            />
          </label>

          <label className="academy-enroll-modal__consent">
            <input type="checkbox" name="policyConsent" required />
            <span>{form.consentCheckboxLabel}</span>
          </label>

          {error ? <p className="academy-enroll-modal__error">{error}</p> : null}

          <button
            type="submit"
            className="academy-enroll-modal__submit"
            disabled={submitting}
          >
            <span className="academy-enroll-modal__submit-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            {submitting ? "Opening WhatsApp..." : form.whatsappSubmitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
