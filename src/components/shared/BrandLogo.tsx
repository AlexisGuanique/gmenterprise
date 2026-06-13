import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`relative block h-16 w-[9.5rem] shrink-0 sm:h-[4.75rem] sm:w-[11rem] lg:h-[5.25rem] lg:w-[12.5rem] ${className}`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.brand}
        fill
        className="object-contain object-left"
        priority={priority}
        sizes="(max-width: 640px) 152px, (max-width: 1024px) 176px, 200px"
      />
    </span>
  );
}
