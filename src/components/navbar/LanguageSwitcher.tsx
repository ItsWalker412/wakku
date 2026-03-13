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
    <div className="flex items-center border border-border rounded-xl overflow-hidden bg-muted/30">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPath(locale)}
          className={`
            px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200
            ${locale === currentLang
              ? "bg-foreground text-background"
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