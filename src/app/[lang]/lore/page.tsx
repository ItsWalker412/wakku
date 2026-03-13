import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { 
  BookOpen,
  Users,
  ChevronRight,
  Sparkles,
  History,
  Lightbulb,
  Music
} from "lucide-react";

export default async function LorePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const lore = (await getDictionary(lang, "lore")) as any;

  // Definición de las secciones con sus iconos y colores
  const loreSections = [
    {
      id: "characters",
      title: lore.sections.characters.title,
      description: lore.sections.characters.description,
      icon: Users,
      href: `/${lang}/lore/characters`,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      id: "mainStory",
      title: lore.sections.mainStory.title,
      description: lore.sections.mainStory.description,
      icon: History,
      href: `/${lang}/lore/story`,
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500"
    },
    {
      id: "funFacts",
      title: lore.sections.funFacts.title,
      description: lore.sections.funFacts.description,
      icon: Lightbulb,
      href: `/${lang}/lore/funfacts`,
      color: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-500"
    },
    {
      id: "songLore",
      title: lore.sections.songLore.title,
      description: lore.sections.songLore.description,
      icon: Music,
      href: `/${lang}/lore/songs`,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-primary/5 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2">
                <BookOpen className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {lore.title}
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              {lore.description}
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
        </div>

        {/* Lore Sections Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-accent/20 p-2">
              <Sparkles className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {lore.exploreTitle}
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {loreSections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-background/80 hover:shadow-xl sm:rounded-3xl sm:p-8 block"
              >
                <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <section.icon className="h-16 w-16" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center gap-3">
                    <div className={`rounded-full ${section.color.replace('from-', 'bg-gradient-to-br from-')} p-3`}>
                      <section.icon className={`h-6 w-6 ${section.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    {section.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                      {section.id === "characters" ? lore.viewCharacters : lore.explore}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2 py-1">
                        {section.id === "characters" && lore.featured}
                        {section.id === "mainStory" && lore.story}
                        {section.id === "funFacts" && lore.funfacts}
                        {section.id === "songLore" && lore.musicsecrets}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}