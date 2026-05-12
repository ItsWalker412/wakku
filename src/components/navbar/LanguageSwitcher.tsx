"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";

type Props = {
  currentLang: Locale;
};

export function LanguageSwitcher({ currentLang }: Props) {
  const pathname = usePathname();

  const redirectedPath = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center rounded-full border border-border/40 bg-background/80 p-1 shadow-sm">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPath(locale)}
          className={`
            inline-flex items-center justify-center
            min-w-[44px] px-2.5 sm:px-4 py-1.5 sm:py-2
            text-xs sm:text-sm font-medium
            rounded-full transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1
            ${locale === currentLang
              ? "bg-foreground text-background shadow-sm"
              : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
            }
          `}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}