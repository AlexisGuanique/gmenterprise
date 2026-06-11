import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`relative block h-14 w-44 shrink-0 sm:h-[4.25rem] sm:w-52 ${className}`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.brand}
        fill
        className="object-contain object-left"
        priority={priority}
        sizes="(max-width: 640px) 176px, 208px"
      />
    </span>
  );
}
