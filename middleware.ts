import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./src/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar archivos internos y assets
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}
