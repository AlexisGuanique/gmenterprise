import { contactContent, offices } from "@/data/site";

export function ContactOfficesSection() {
  const { title, subtitle } = contactContent.offices;

  return (
    <section className="contact-offices bg-white">
      <div className="section-padding contact-offices__inner">
        <header className="contact-offices__header">
          <h2 className="contact-offices__title">{title}</h2>
          <p className="contact-offices__subtitle">{subtitle}</p>
        </header>
        <div className="contact-offices__grid">
          {offices.map((office) => (
            <article key={office.city} className="contact-office-card">
              <div className="contact-office-card__map">
                <iframe
                  src={office.mapEmbedUrl}
                  title={`Map — ${office.city}, ${office.country}`}
                  className="contact-office-card__map-frame"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact-office-card__body">
                <h3 className="contact-office-card__city">
                  {office.city}, {office.country}
                </h3>
                <a
                  href={`mailto:${office.email}`}
                  className="contact-office-card__email"
                >
                  {office.email}
                </a>
                <a
                  href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                  className="contact-office-card__phone"
                >
                  {office.phone}
                </a>
                <p className="contact-office-card__address">{office.address}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
