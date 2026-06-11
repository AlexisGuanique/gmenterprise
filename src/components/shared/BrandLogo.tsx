import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`relative block h-11 w-[5.75rem] shrink-0 sm:h-14 sm:w-[7.25rem] ${className}`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.brand}
        fill
        className="object-contain object-left"
        priority={priority}
        sizes="(max-width: 640px) 92px, 116px"
      />
    </span>
  );
}
