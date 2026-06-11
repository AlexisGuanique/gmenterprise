import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/config/site.config";
import {
  getFooterLegalLinks,
  getFooterQuickLinks,
  getFooterServiceCategories,
} from "@/config/navigation";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const legalLinks = getFooterLegalLinks(locale);
  const quickLinks = getFooterQuickLinks(locale);
  const categories = getFooterServiceCategories(locale);

  return (
    <footer className="store-footer">
      <div className="store-footer__inner mx-auto max-w-7xl section-padding">
        <div className="store-footer__grid">
          <div className="store-footer__col">
            <h3 className="store-footer__heading">Our Agency</h3>
            <p className="store-footer__text">
              {siteConfig.brand} is your ultimate destination for digital marketing
              essentials designed to grow your brand, boost visibility, and drive
              measurable results. We fuel your business with strategy, creativity,
              and campaigns that convert.
            </p>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Quick Links</h3>
            <ul className="store-footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Categories</h3>
            <ul className="store-footer__links">
              {categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="store-footer__col">
            <h3 className="store-footer__heading">Information</h3>
            <ul className="store-footer__links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="store-footer__contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span aria-hidden="true"> · </span>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
        </div>

        <p className="store-footer__disclaimer">{siteConfig.disclaimer}</p>

        <div className="store-footer__bottom">
          <p>{siteConfig.copyright}</p>
          {siteConfig.credit.show ? (
            <a
              href={siteConfig.credit.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.credit.label}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
