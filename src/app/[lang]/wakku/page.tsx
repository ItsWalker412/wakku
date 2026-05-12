import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import * as Icons from "lucide-react";

const iconMap: Record<string, any> = {
  BookOpen: Icons.BookOpen,
  Users: Icons.Users,
  History: Icons.History,
  Lightbulb: Icons.Lightbulb,
  Music: Icons.Music,
  HelpCircle: Icons.HelpCircle,
  Sparkles: Icons.Sparkles,
  Star: Icons.Star,
  Heart: Icons.Heart,
  Globe: Icons.Globe,
  Mail: Icons.Mail,
  Calendar: Icons.Calendar,
  Clock: Icons.Clock,
  Shield: Icons.Shield,
  Zap: Icons.Zap,
  CheckCircle: Icons.CheckCircle,
  ChevronRight: Icons.ChevronRight,
  ExternalLink: Icons.ExternalLink,
  Palette: Icons.Palette,
  Code: Icons.Code2,
  // Agrega más según necesites
};

export default async function LorePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const lore = (await getDictionary(lang, "lore")) as any;

  const loreSections = Object.entries(lore.sections || {}).map(([id, section]: [string, any]) => {
    const IconComponent = iconMap[section.icon] || Icons.BookOpen;
    
    // Valores por defecto según el id
    const defaultIconBg: Record<string, string> = {
      credits: "bg-purple-500/20",
      characters: "bg-blue-500/20",
      funFacts: "bg-amber-500/20",
      songLore: "bg-green-500/20",
      "q&a": "bg-indigo-500/20",
    };
    const defaultIconColor: Record<string, string> = {
      credits: "text-purple-500",
      characters: "text-blue-500",
      funFacts: "text-amber-500",
      songLore: "text-green-500",
      "q&a": "text-indigo-500",
    };
    
    return {
      id,
      title: section.title,
      description: section.description,
      icon: IconComponent,
      href: `/${lang}/wakku/${id}`,
      iconBg: section.iconBg || defaultIconBg[id] || "bg-accent/20",
      iconColor: section.iconColor || defaultIconColor[id] || "text-accent",
      badge: section.badge || "",
    };
  });

  return (
    <div className="min-h-screen from-background to-muted/10">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        
        {/* Hero Section (igual) */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background to-primary/5 p-8 shadow-sm sm:rounded-3xl sm:p-10">
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Icons.BookOpen className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {lore.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl">
              {lore.description}
            </p>
          </div>
        </div>

        {/* Grid de secciones */}
        <div className="mb-16">
          <div className="mb-10 flex items-center gap-4">
            <div className="rounded-full bg-accent/20 p-2.5">
              <Icons.Sparkles className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {lore.exploreTitle}
            </h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2">
            {loreSections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:p-8"
              >
                <div className="absolute right-4 top-4 opacity-5 transition-opacity group-hover:opacity-10">
                  <section.icon className="h-20 w-20" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`rounded-full ${section.iconBg} p-2.5`}>
                      <section.icon className={`h-5 w-5 ${section.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                      {section.id === "characters" ? lore.viewCharacters : section.id === "credits" ? lore.credits : lore.explore}
                      <Icons.ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    
                    {section.badge && (
                      <span className="rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                        {section.badge}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}