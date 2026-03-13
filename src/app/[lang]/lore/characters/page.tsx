import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import CharactersGrid from "./CharactersGrid";
import { Users, Sparkles, ChevronLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function CharactersPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "characters")) as any;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        <div className="mb-6">
          <Link
            href={`/${lang}/lore`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10"
          >
            <ChevronLeft className="h-3 w-3" />
            {dict.backToLore}
          </Link>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-primary/5 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2">
                <Users className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {dict.title}
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              {dict.description}
            </p>
            
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-accent"></div>
              <span className="font-medium text-accent">
                {dict.characters?.length || 0} {dict.charactersCount}
              </span>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-accent/20 p-2">
              <Sparkles className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Colección de Cartas
            </h2>
          </div>
          
          {dict.characters && dict.characters.length > 0 ? (
            <CharactersGrid 
              lang={lang} 
              characters={dict.characters} 
              dict={{
                ageLabel: dict.ageLabel,
                birthdayLabel: dict.birthdayLabel,
                typeLabel: dict.typeLabel,
                viewDetails: dict.viewDetails
              }} 
            />
          ) : (
            <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-12 text-center backdrop-blur-sm">
              <p className="text-muted-foreground">No hay personajes disponibles.</p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.moreComing}
            </h3>
            
            <p className="text-sm text-muted-foreground sm:text-base">
              {dict.moreComingDesc}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}