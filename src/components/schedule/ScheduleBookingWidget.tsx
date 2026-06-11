import { siteConfig } from "@/config/site.config";
import { BookingIframeEmbed } from "@/components/schedule/BookingIframeEmbed";
import { CalendlyEmbed } from "@/components/schedule/CalendlyEmbed";

export function ScheduleBookingWidget() {
  const { calendlyUrl, bookingWidgetUrl } = siteConfig;

  if (calendlyUrl) {
    return (
      <div className="schedule-calendly">
        <CalendlyEmbed url={calendlyUrl} />
      </div>
    );
  }

  if (bookingWidgetUrl) {
    return (
      <div className="schedule-calendly">
        <BookingIframeEmbed src={bookingWidgetUrl} />
      </div>
    );
  }

  return (
    <div className="schedule-calendly rounded-xl border border-border bg-surface p-8 text-center">
      <p className="text-muted">
        Configure <code className="text-sm">NEXT_PUBLIC_CALENDLY_URL</code> or{" "}
        <code className="text-sm">NEXT_PUBLIC_BOOKING_WIDGET_URL</code> in your{" "}
        <code className="text-sm">.env.local</code> file to enable online booking.
      </p>
    </div>
  );
}
