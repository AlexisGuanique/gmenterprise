"use client";

import { useEffect } from "react";

type BookingIframeEmbedProps = {
  src: string;
};

export function BookingIframeEmbed({ src }: BookingIframeEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src={src}
      title="Schedule a call with E Point Lab"
      className="schedule-calendly__iframe"
      scrolling="no"
    />
  );
}
