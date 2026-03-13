import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/navbar/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { TransitionController } from "@/components/TransitionController";

export const metadata: Metadata = {
  title: "wakku",
  description: "The official website of wakku, an independent music producer.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const navbarDict = await getDictionary(lang as Locale, "navbar") as any;

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar lang={lang as Locale} dict={navbarDict} />
        <PageTransition>
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </PageTransition>
        <TransitionController />
      </body>
    </html>
  );
}