import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Mail,
  Star,
  Calendar,
  Shield,
  Zap,
  ChevronRight
} from "lucide-react";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function CommissionsPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "commissions")) as any;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="font-medium text-green-400">
                {dict.waitlist.title}: <span className="font-bold">{dict.waitlist.status}</span>
              </span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
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
              const isRecommended = item.recommended;
              
              return (
                  <div
                    key={item.title}
                    className={[
                      "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-8",
                      isRecommended
                        ? "border-accent/50 bg-gradient-to-br from-accent/10 to-transparent shadow-lg shadow-accent/10 scale-[1.02]"
                        : "border-border/50 bg-gradient-to-br from-background/60 to-background/40 hover:border-accent/30"
                    ].join(" ")}
                  >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute right-2 top-2 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/80 blur-sm"></div>
                        <div className="relative flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1.5 shadow-lg">
                          <Star className="h-3 w-3 text-white" />
                          <span className="text-xs font-bold text-white">
                            {dict.recommended}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                                    
                  {/* Title and Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={[
                        "rounded-full p-2",
                        isRecommended
                          ? "bg-accent/20"
                          : "bg-primary/20"
                      ].join(" ")}>
                        {index === 0 ? (
                          <Zap className={[
                            "h-5 w-5",
                            isRecommended ? "text-accent" : "text-primary"
                          ].join(" ")} />
                        ) : (
                          <Clock className={[
                            "h-5 w-5",
                            isRecommended ? "text-accent" : "text-primary"
                          ].join(" ")} />
                        )}
                      </div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-4">
                    {dict.comparison.features.map((feature: string, i: number) => (
                      <li 
                        key={feature}
                        className="flex items-center justify-between rounded-lg bg-background/50 p-3 backdrop-blur-sm"
                      >
                        <span className="flex items-center gap-2 text-sm text-foreground/80 sm:text-base">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </span>
                        <span className={[
                          "rounded-full px-3 py-1 text-sm font-semibold",
                          isRecommended
                            ? "bg-accent/20 text-accent"
                            : "bg-primary/20 text-primary"
                        ].join(" ")}>
                          {item.values[i]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-background/80 hover:shadow-lg"
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

        {/* Terms Preview */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-accent/20 p-2">
              <Shield className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.termsPreview.title}
            </h2>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground">
                {dict.termsPreview.description}
              </p>
            </div>
            
            <ul className="mb-8 space-y-3">
              {dict.termsPreview.items.map((item: string) => (
                <li 
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-background/50 p-3 backdrop-blur-sm"
                >
                  <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                  </div>
                  <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href={`/${lang}/commissions/terms`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              {dict.termsPreview.link}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">
                {dict.waitlist.title}
              </span>
            </div>
            
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.cta.title}
            </h3>
            
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              {dict.cta.description}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://ko-fi.com/wakku_wav"
                target="_blank"
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