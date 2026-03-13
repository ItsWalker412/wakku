import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import ClientHome from "@/components/ClientHome";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const home = await getDictionary(lang as Locale, "home");

  return <ClientHome lang={lang} home={home} />;
}