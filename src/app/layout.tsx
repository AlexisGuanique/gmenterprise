import type { Metadata } from "next";
import { Lato, Poppins, Sora } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { getActiveThemeVariables } from "@/config/theme.config";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${lato.variable} ${poppins.variable} ${sora.variable} h-full`}
      style={themeVariables}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
