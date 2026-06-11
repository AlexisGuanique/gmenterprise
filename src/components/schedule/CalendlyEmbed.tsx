"use client";

import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const head = document.head;
    const existingLink = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]',
    );
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      head.appendChild(link);
    }

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget schedule-calendly__widget"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
