import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { getActiveThemeVariables } from "@/config/theme.config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVariables = getActiveThemeVariables();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} h-full`}
      style={themeVariables}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
