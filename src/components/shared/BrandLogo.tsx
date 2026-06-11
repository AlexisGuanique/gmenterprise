import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`relative block h-14 w-[8rem] shrink-0 sm:h-16 sm:w-[9.25rem] lg:h-[4.5rem] lg:w-[10.5rem] ${className}`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.brand}
        fill
        className="object-contain object-left"
        priority={priority}
        sizes="(max-width: 640px) 128px, (max-width: 1024px) 148px, 168px"
      />
    </span>
  );
}
