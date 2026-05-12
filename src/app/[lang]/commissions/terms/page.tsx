import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { 
  CheckCircle,
  FileText,
  Shield,
  Clock,
  DollarSign,
  Mail,
  ChevronLeft,
  BookOpen,
  Scale,
  AlertTriangle
} from "lucide-react";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "terms")) as any;

  return (
    <div className="min-h-screen from-background to-muted/10">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Header */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background to-primary/5 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2">
                <Scale className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {dict.title}
              </h1>
            </div>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="rounded-full bg-muted/50 px-3 py-1 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  {dict.lastUpdated}
                </span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {dict.intro}
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-6 shadow-sm sm:rounded-3xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-accent/20 p-2">
              <BookOpen className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.tableOfContents}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dict.sections.map((section: any, index: number) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-background/80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <span className="font-medium text-foreground group-hover:text-accent">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections - estilo similar a las tarjetas de comisiones */}
        <div className="mb-12 space-y-8 sm:mb-16 md:mb-20">
          {dict.sections.map((section: any, index: number) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {section.content.map((line: string) => (
                  <li key={line} className="flex items-start gap-3 rounded-lg bg-background/50 p-4">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-foreground/90">{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Important Notes - estilo acorde */}
        <div className="mb-12 rounded-2xl border border-amber-500/30 bg-amber-50/80 p-6 shadow-sm dark:bg-amber-950/30 sm:rounded-3xl sm:p-8 md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-amber-500/20 p-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">
              {dict.importantNotes}
            </h3>
          </div>
          <div className="space-y-4">
            {dict.notes.map((note: any, index: number) => (
              <div key={index} className="rounded-lg bg-white/60 p-4 dark:bg-black/20">
                <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-300">{note.title}</h4>
                <p className="text-sm text-amber-700 dark:text-amber-400">{note.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-primary/20 p-2">
              <FileText className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{dict.faq.title}</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 shadow-sm sm:rounded-3xl">
            <FaqAccordion items={dict.faq.items} />
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-border/40 bg-gradient-to-r from-accent/10 to-accent/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.cta.title}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              {dict.cta.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={`/${lang}/commissions`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-foreground to-foreground/90 px-6 py-3 font-semibold text-background shadow-md transition-all duration-300 hover:scale-105 hover:from-accent hover:to-accent/90"
              >
                <ChevronLeft className="h-4 w-4" />
                {dict.back}
              </Link>
              <a
                href="https://ko-fi.com/wakku_wav/commissions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all duration-300 hover:border-accent hover:bg-accent/10"
              >
                <DollarSign className="h-4 w-4" />
                {dict.start}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all duration-300 hover:border-accent hover:bg-accent/10"
              >
                <Mail className="h-4 w-4" />
                {dict.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}