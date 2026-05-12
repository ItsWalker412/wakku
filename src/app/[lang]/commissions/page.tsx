import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Mail,
  Calendar,
  Shield,
  Zap,
  ChevronRight
} from "lucide-react";
import CommissionCard from "@/components/CommissionCard";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function CommissionsPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "commissions")) as any;

  const VIDEO_ID = "IrFUHE1LqTk";

  return (
    <div className="min-h-screen from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-primary/5 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2">
                <Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {dict.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {dict.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-400/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-400"></div>
              <span className="font-medium text-red-400">
                {dict.waitlist.title}: <span className="font-bold">{dict.waitlist.status}</span>
              </span>
            </div>
          </div>
        </div>

        {/* 🎥 Sección de video showcase */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 shadow-lg">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Showcase musical"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Commission Options */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-accent/20 p-2">
              <DollarSign className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.optionsTitle}
            </h2>
          </div>
          
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {dict.comparison.items.map((item: any, index: number) => {
              const featureNames = dict.comparison.features as string[];
              const featuresList = featureNames.map((name: string, i: number) => ({
                name,
                value: item.values[i] || "—",
              }));

              return (
                <CommissionCard
                  key={item.title}
                  title={item.title}
                  icon={index === 0 ? "zap" : "clock"}
                  recommended={item.recommended}
                  basePrice={item.basePrice}
                  features={featuresList}
                  extraPer30Seconds={item.extraPer30Seconds ?? 0}
                  stemsPrice={item.stemsPrice ?? 0}
                  fullRightsPercentage={item.fullRightsPercentage ?? 0}
                  koFiLink={item.koFiLink}
                  baseDuration={item.baseDuration ?? 2}
                  maxDuration={item.maxDuration ?? 10}
                  dict={{
                    currency: dict.currency,
                    durationUnit: dict.durationUnit,
                    pricingNote: dict.pricingNote,
                    orderNow: dict.orderNow,
                    recommended: dict.recommended,
                    fullRightsLabel: dict.fullRightsLabel || "Derechos totales",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Work Process */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-primary/20 p-2">
              <Zap className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.howItWorks}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.processSteps.map((step: any, index: number) => (
              <div 
                key={step.title}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-background/80 hover:shadow-lg"
              >
                <div className="absolute right-3 top-3 text-3xl font-bold text-accent/10">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <div className="mb-4 rounded-full bg-primary/20 p-3 w-fit">
                    {index === 0 ? <Mail className="h-6 w-6 text-primary" /> :
                     index === 1 ? <Calendar className="h-6 w-6 text-primary" /> :
                     index === 2 ? <Sparkles className="h-6 w-6 text-primary" /> :
                     <CheckCircle className="h-6 w-6 text-primary" />}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Preview - RESALTADO con amarillo */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-amber-500/20 p-2">
              <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400 sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-400 sm:text-3xl">
              {dict.termsPreview.title}
            </h2>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-amber-300/50 bg-amber-50/80 p-6 shadow-md dark:border-amber-800/30 dark:bg-amber-950/30 sm:rounded-3xl sm:p-8">
            <div className="mb-6">
              <p className="text-lg text-amber-800 dark:text-amber-300">
                {dict.termsPreview.description}
              </p>
            </div>
            
            <ul className="mb-8 space-y-3">
              {dict.termsPreview.items.map((item: string) => (
                <li 
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white/60 p-3 dark:bg-black/20"
                >
                  <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500/30">
                    <CheckCircle className="h-2.5 w-2.5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm text-amber-800 dark:text-amber-300 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href={`/${lang}/commissions/terms`}
              className="group inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-500/10 px-6 py-3 font-semibold text-amber-700 transition-all duration-300 hover:bg-amber-500 hover:text-white dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-600 dark:hover:text-white"
            >
              {dict.termsPreview.link}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-accent/10 to-accent/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
              <span className="text-sm font-medium">{dict.waitlist.title}</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.cta.title}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              {dict.cta.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://ko-fi.com/wakku_wav/commissions"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-foreground to-foreground/90 px-6 py-3 font-semibold text-background shadow-md transition-all duration-300 hover:scale-105 hover:from-accent hover:to-accent/90"
              >
                {dict.waitlist.button}
                <Sparkles className="h-4 w-4" />
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all duration-300 hover:border-accent hover:bg-accent/10"
              >
                <Mail className="h-4 w-4" />
                {dict.cta.askButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}