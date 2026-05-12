import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import ImageCarousel from "@/components/ImageCarousel";
import PreferencesSection from "@/components/PreferencesSection";
import { Mail, MapPin, Calendar, Heart, Star, BookOpen, User, Cake } from "lucide-react";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "about")) as any;

  const characterImages = [
    "/images/pfps/lia.png",
    "/images/pfps/walker.png",
  ];

  return (
    <div className="min-h-screen from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 grid gap-8 md:grid-cols-2 0 lg:gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 sm:mb-8">
                <ImageCarousel images={characterImages} />
              </div>

              <div className="w-full max-w-sm space-y-4">
                <div className="rounded-xl bg-background/80 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                      <span className="text-sm font-medium">Pronouns</span>
                    </div>
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
                      {dict.characterCard.pronouns}
                    </span>
                  </div>
                  
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cake className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                      <span className="text-sm font-medium">Age</span>
                    </div>
                    <span className="text-lg font-bold">{dict.characterCard.age}</span>
                  </div>
                  
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                      <span className="text-sm font-medium">Country</span>
                    </div>
                    <span className="text-foreground/90">{dict.characterCard.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                      <span className="text-sm font-medium">Birthday</span>
                    </div>
                    <span className="text-foreground/90">{dict.characterCard.birthday}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  {dict.intro.title}
                </h1>
                <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg md:text-xl">
                  {dict.intro.text}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{dict.intro.special}</h3>
                <div className="flex flex-wrap gap-2">
                  {dict.specialties?.map((skill: string) => (
                    <span 
                      key={skill}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent/20 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-accent/20 p-2">
              <BookOpen className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.currently.title}
            </h2>
          </div>
          
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dict.currently.items.map((item: string, index: number) => (
              <div 
                key={item} 
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-background/80 hover:shadow-lg sm:rounded-2xl sm:p-6"
              >
                <div className="absolute right-3 top-3 text-3xl font-bold text-accent/10 sm:right-4 sm:top-4 sm:text-4xl">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <div className="mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r from-accent to-accent/60 sm:h-2 sm:w-12"></div>
                  <p className="text-sm text-foreground/90 sm:text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PreferencesSection
          defaultLikes={dict.preferences.default.likes}
          defaultDislikes={dict.preferences.default.dislikes}
          title={dict.preferences.title}
          defaultLabel={dict.preferences.defaultLabel}
          likesTitle={dict.preferences.likesTitle}
          dislikesTitle={dict.preferences.dislikesTitle}
        />

        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-accent/10 to-accent/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.cta.title}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              {dict.cta.description}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-foreground to-foreground/90 px-6 py-3 font-semibold text-background shadow-md transition-all duration-300 hover:scale-105 hover:from-accent hover:to-accent/90 sm:px-8 sm:py-4"
            >
              {dict.cta.button}
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}