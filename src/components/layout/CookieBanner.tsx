"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";
import { siteConfig } from "@/config/site.config";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined";

type CookieBannerProps = {
  locale: Locale;
};

export function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function saveConsent(value: ConsentValue) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  const cookiePolicyHref = localePath(locale, "/cookie-policy");
  const privacyHref = localePath(locale, "/privacy-policy");

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__content">
          <p id="cookie-banner-title" className="cookie-banner__title">
            We use cookies
          </p>
          <p id="cookie-banner-desc" className="cookie-banner__text">
            {siteConfig.brand} uses essential and analytics cookies to improve
            your experience. Read our{" "}
            <Link href={cookiePolicyHref} className="cookie-banner__link">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href={privacyHref} className="cookie-banner__link">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--decline"
            onClick={() => saveConsent("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={() => saveConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
