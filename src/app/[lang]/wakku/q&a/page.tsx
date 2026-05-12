import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { HelpCircle, Sparkles, ChevronLeft } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function FAQPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "faq")) as any;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Botón de regreso a Wakku (Lore) */}
        <div className="mb-6 sm:mb-8">
          <Link
            href={`/${lang}/wakku`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-accent/30 hover:bg-accent/10 hover:text-accent sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            {dict.backToLore || "Volver a Wakku"}
          </Link>
        </div>

        {/* Hero */}
        <div className="relative mb-12 rounded-2xl border border-border/40 bg-gradient-to-br from-background to-primary/5 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="rounded-full bg-accent/20 p-2 sm:p-2.5 w-fit">
              <HelpCircle className="h-5 w-5 text-accent sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {dict.title}
            </h1>
          </div>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl">
            {dict.subtitle}
          </p>
        </div>

        {/* Sección de preguntas frecuentes */}
        <div className="mb-12 sm:mb-16">
          
          {dict.questions && dict.questions.length > 0 ? (
            <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 shadow-sm">
              <FaqAccordion items={dict.questions} />
            </div>
          ) : (
            <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-12 text-center">
              <p className="text-muted-foreground">No nada</p>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}