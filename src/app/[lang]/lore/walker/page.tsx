import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronLeft,
  User,
  Shield,
  Zap,
  Brain,
  Heart,
  MapPin,
  Calendar,
  Users,
  Star,
  FileText,
  Award,
  Target,
  Clock
} from "lucide-react";

type Props = {
  params: Promise<{ lang: Locale }>;
};

// Sistema de colores completo
const getColorClasses = (colorName: string) => {
  const colorMap: Record<string, any> = {
    // Azules
    blue: { text: 'text-blue-500', bg: 'bg-blue-500', bgLight: 'bg-blue-500/20', border: 'border-blue-500/20', gradientFrom: 'from-blue-500/10', gradientTo: 'to-blue-500/5', bgGradient: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5', accentText: 'text-blue-400' },
    sky: { text: 'text-sky-500', bg: 'bg-sky-500', bgLight: 'bg-sky-500/20', border: 'border-sky-500/20', gradientFrom: 'from-sky-500/10', gradientTo: 'to-sky-500/5', bgGradient: 'bg-gradient-to-br from-sky-500/10 to-sky-500/5', accentText: 'text-sky-400' },
    cyan: { text: 'text-cyan-500', bg: 'bg-cyan-500', bgLight: 'bg-cyan-500/20', border: 'border-cyan-500/20', gradientFrom: 'from-cyan-500/10', gradientTo: 'to-cyan-500/5', bgGradient: 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5', accentText: 'text-cyan-400' },
    indigo: { text: 'text-indigo-500', bg: 'bg-indigo-500', bgLight: 'bg-indigo-500/20', border: 'border-indigo-500/20', gradientFrom: 'from-indigo-500/10', gradientTo: 'to-indigo-500/5', bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-indigo-500/5', accentText: 'text-indigo-400' },
    // Verdes
    emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500', bgLight: 'bg-emerald-500/20', border: 'border-emerald-500/20', gradientFrom: 'from-emerald-500/10', gradientTo: 'to-emerald-500/5', bgGradient: 'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5', accentText: 'text-emerald-400' },
    green: { text: 'text-green-500', bg: 'bg-green-500', bgLight: 'bg-green-500/20', border: 'border-green-500/20', gradientFrom: 'from-green-500/10', gradientTo: 'to-green-500/5', bgGradient: 'bg-gradient-to-br from-green-500/10 to-green-500/5', accentText: 'text-green-400' },
    teal: { text: 'text-teal-500', bg: 'bg-teal-500', bgLight: 'bg-teal-500/20', border: 'border-teal-500/20', gradientFrom: 'from-teal-500/10', gradientTo: 'to-teal-500/5', bgGradient: 'bg-gradient-to-br from-teal-500/10 to-teal-500/5', accentText: 'text-teal-400' },
    // Púrpuras
    purple: { text: 'text-purple-500', bg: 'bg-purple-500', bgLight: 'bg-purple-500/20', border: 'border-purple-500/20', gradientFrom: 'from-purple-500/10', gradientTo: 'to-purple-500/5', bgGradient: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5', accentText: 'text-purple-400' },
    violet: { text: 'text-violet-500', bg: 'bg-violet-500', bgLight: 'bg-violet-500/20', border: 'border-violet-500/20', gradientFrom: 'from-violet-500/10', gradientTo: 'to-violet-500/5', bgGradient: 'bg-gradient-to-br from-violet-500/10 to-violet-500/5', accentText: 'text-violet-400' },
    // Rosas
    pink: { text: 'text-pink-500', bg: 'bg-pink-500', bgLight: 'bg-pink-500/20', border: 'border-pink-500/20', gradientFrom: 'from-pink-500/10', gradientTo: 'to-pink-500/5', bgGradient: 'bg-gradient-to-br from-pink-500/10 to-pink-500/5', accentText: 'text-pink-400' },
    rose: { text: 'text-rose-500', bg: 'bg-rose-500', bgLight: 'bg-rose-500/20', border: 'border-rose-500/20', gradientFrom: 'from-rose-500/10', gradientTo: 'to-rose-500/5', bgGradient: 'bg-gradient-to-br from-rose-500/10 to-rose-500/5', accentText: 'text-rose-400' },
    fuchsia: { text: 'text-fuchsia-500', bg: 'bg-fuchsia-500', bgLight: 'bg-fuchsia-500/20', border: 'border-fuchsia-500/20', gradientFrom: 'from-fuchsia-500/10', gradientTo: 'to-fuchsia-500/5', bgGradient: 'bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5', accentText: 'text-fuchsia-400' },
    // Rojos/Naranjas
    red: { text: 'text-red-500', bg: 'bg-red-500', bgLight: 'bg-red-500/20', border: 'border-red-500/20', gradientFrom: 'from-red-500/10', gradientTo: 'to-red-500/5', bgGradient: 'bg-gradient-to-br from-red-500/10 to-red-500/5', accentText: 'text-red-400' },
    orange: { text: 'text-orange-500', bg: 'bg-orange-500', bgLight: 'bg-orange-500/20', border: 'border-orange-500/20', gradientFrom: 'from-orange-500/10', gradientTo: 'to-orange-500/5', bgGradient: 'bg-gradient-to-br from-orange-500/10 to-orange-500/5', accentText: 'text-orange-400' },
    amber: { text: 'text-amber-500', bg: 'bg-amber-500', bgLight: 'bg-amber-500/20', border: 'border-amber-500/20', gradientFrom: 'from-amber-500/10', gradientTo: 'to-amber-500/5', bgGradient: 'bg-gradient-to-br from-amber-500/10 to-amber-500/5', accentText: 'text-amber-400' },
    // Amarillos
    yellow: { text: 'text-yellow-500', bg: 'bg-yellow-500', bgLight: 'bg-yellow-500/20', border: 'border-yellow-500/20', gradientFrom: 'from-yellow-500/10', gradientTo: 'to-yellow-500/5', bgGradient: 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5', accentText: 'text-yellow-400' },
    // Neutros
    gray: { text: 'text-gray-500', bg: 'bg-gray-500', bgLight: 'bg-gray-500/20', border: 'border-gray-500/20', gradientFrom: 'from-gray-500/10', gradientTo: 'to-gray-500/5', bgGradient: 'bg-gradient-to-br from-gray-500/10 to-gray-500/5', accentText: 'text-gray-400' },
    slate: { text: 'text-slate-500', bg: 'bg-slate-500', bgLight: 'bg-slate-500/20', border: 'border-slate-500/20', gradientFrom: 'from-slate-500/10', gradientTo: 'to-slate-500/5', bgGradient: 'bg-gradient-to-br from-slate-500/10 to-slate-500/5', accentText: 'text-slate-400' },
    // Colores especiales
    electricBlue: { text: 'text-blue-400', bg: 'bg-blue-400', bgLight: 'bg-blue-400/25', border: 'border-blue-400/25', gradientFrom: 'from-blue-400/15', gradientTo: 'to-blue-400/8', bgGradient: 'bg-gradient-to-br from-blue-400/15 to-blue-400/8', accentText: 'text-blue-300' },
    neonGreen: { text: 'text-green-400', bg: 'bg-green-400', bgLight: 'bg-green-400/25', border: 'border-green-400/25', gradientFrom: 'from-green-400/15', gradientTo: 'to-green-400/8', bgGradient: 'bg-gradient-to-br from-green-400/15 to-green-400/8', accentText: 'text-green-300' },
    cyberPink: { text: 'text-pink-400', bg: 'bg-pink-400', bgLight: 'bg-pink-400/25', border: 'border-pink-400/25', gradientFrom: 'from-pink-400/15', gradientTo: 'to-pink-400/8', bgGradient: 'bg-gradient-to-br from-pink-400/15 to-pink-400/8', accentText: 'text-pink-300' },
    midnight: { text: 'text-indigo-600', bg: 'bg-indigo-600', bgLight: 'bg-indigo-600/25', border: 'border-indigo-600/25', gradientFrom: 'from-indigo-600/15', gradientTo: 'to-indigo-600/8', bgGradient: 'bg-gradient-to-br from-indigo-600/15 to-indigo-600/8', accentText: 'text-indigo-500' },
    mysticPurple: { text: 'text-violet-500', bg: 'bg-violet-500', bgLight: 'bg-gradient-to-br from-violet-500/20 to-indigo-500/20', border: 'border-violet-500/20', gradientFrom: 'from-violet-500/15', gradientTo: 'to-indigo-500/10', bgGradient: 'bg-gradient-to-br from-violet-500/15 to-indigo-500/10', accentText: 'text-violet-400' },
    dragonFire: { text: 'text-red-500', bg: 'bg-red-500', bgLight: 'bg-gradient-to-br from-red-500/20 to-orange-500/20', border: 'border-red-500/20', gradientFrom: 'from-red-500/15', gradientTo: 'to-orange-500/10', bgGradient: 'bg-gradient-to-br from-red-500/15 to-orange-500/10', accentText: 'text-red-400' },
    forestMoss: { text: 'text-emerald-600', bg: 'bg-emerald-600', bgLight: 'bg-gradient-to-br from-emerald-600/20 to-green-500/20', border: 'border-emerald-600/20', gradientFrom: 'from-emerald-600/15', gradientTo: 'to-green-500/10', bgGradient: 'bg-gradient-to-br from-emerald-600/15 to-green-500/10', accentText: 'text-emerald-500' },
    arcticIce: { text: 'text-cyan-300', bg: 'bg-cyan-300', bgLight: 'bg-gradient-to-br from-cyan-300/20 to-blue-300/20', border: 'border-cyan-300/20', gradientFrom: 'from-cyan-300/15', gradientTo: 'to-blue-300/10', bgGradient: 'bg-gradient-to-br from-cyan-300/15 to-blue-300/10', accentText: 'text-cyan-200' }
  };

  return colorMap[colorName] || colorMap.blue;
};

type WalkerDictionary = {
  name: string;
  role: string;
  subtitle: string;
  description: string;
  theme?: { primary: string; secondary: string; accent: string };
  stats: Record<string, string>;
  details: Record<string, string>;
  backButton: string;
  labels: {
    mainCharacter: string;
    keyStats: string;
    history: string;
    profileDetails: string;
    fullBiography: string;
    skillsCapabilities: string;
    relationshipsConnections: string;
    alliance: string;
    rivalry: string;
  };
  biography: string[];
  skills: { title: string; description: string; level: string }[];
  relationships: { alliance: string; rivalry: string };
};

export default async function WalkerPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "walker")) as WalkerDictionary;
  
  // Obtener colores del tema desde el diccionario
  const theme = dict.theme ?? { primary: "blue", secondary: "cyan", accent: "indigo" };
  const primaryColor = getColorClasses(theme.primary);
  const secondaryColor = getColorClasses(theme.secondary);
  const accentColor = getColorClasses(theme.accent);

  // Stats para mostrar con iconos
  const statIcons = {
    fuerza: Zap,
    agilidad: Zap,
    inteligencia: Brain,
    resistencia: Shield
  };

  // Detalles para mostrar con iconos
  const detailIcons = {
    clase: Award,
    origen: MapPin,
    estado: User,
    edad: Calendar,
    afiliación: Users
  };

  // Iconos para habilidades
  const skillIcons = [Zap, Heart, Brain, Shield];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Botón de volver */}
        <div className="mb-6">
          <Link
            href={`/${lang}/lore/characters`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10"
          >
            <ChevronLeft className="h-3 w-3" />
            {dict.backButton}
          </Link>
        </div>

        {/* Hero Section */}
        <div className={`relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background ${primaryColor.bgGradient} p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10`}>
          <div className="relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Columna izquierda - Imagen y detalles rápidos */}
              <div className="space-y-6">
                {/* Imagen del personaje */}
                <div className={`relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br ${primaryColor.gradientFrom} ${secondaryColor.gradientTo} aspect-square sm:rounded-2xl`}>
                  <Image
                    src="/lore/walker.png"
                    alt={dict.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Badge de rol */}
                  <div className="absolute top-4 left-4">
                    <div className="rounded-full bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className={`font-bold ${primaryColor.text}`}>
                        {dict.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats rápidos */}
                <div className="rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <Target className={`h-5 w-5 ${primaryColor.text}`} />
                    {dict.labels.keyStats}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(dict.stats).map(([key, value]) => {
                      const Icon = statIcons[key as keyof typeof statIcons] || Star;
                      return (
                        <div key={key} className="flex items-center justify-between rounded-lg bg-background/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className={`rounded-full ${primaryColor.bgLight} p-2`}>
                              <Icon className={`h-4 w-4 ${primaryColor.text}`} />
                            </div>
                            <span className="capitalize">{key}</span>
                          </div>
                          <span className="font-bold">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Columna derecha - Información del personaje */}
              <div className="space-y-8">
                {/* Header del personaje */}
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {dict.name}
                  </h1>
                  <p className={`mt-2 text-xl font-medium ${primaryColor.accentText}`}>
                    {dict.subtitle}
                  </p>
                </div>

                {/* Descripción */}
                <div className="rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <FileText className={`h-5 w-5 ${primaryColor.text}`} />
                    {dict.labels.history}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {dict.description}
                  </p>
                </div>

                {/* Detalles del personaje */}
                <div className="rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <User className={`h-5 w-5 ${primaryColor.text}`} />
                    {dict.labels.profileDetails}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {Object.entries(dict.details).map(([key, value]) => {
                      const Icon = detailIcons[key as keyof typeof detailIcons] || Star;
                      return (
                        <div key={key} className="space-y-2 rounded-lg bg-background/50 p-4">
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full ${primaryColor.bgLight} p-1.5`}>
                              <Icon className={`h-3.5 w-3.5 ${primaryColor.text}`} />
                            </div>
                            <span className="text-sm font-medium capitalize">{key}</span>
                          </div>
                          <p className="font-medium">{value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Biografía expandida */}
                <div className="rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <Clock className={`h-5 w-5 ${primaryColor.text}`} />
                    {dict.labels.fullBiography}
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    {dict.biography.map((paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Elementos decorativos */}
          <div className={`absolute -top-10 -right-10 h-20 w-20 rounded-full ${primaryColor.gradientFrom} blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl`}></div>
          <div className={`absolute -bottom-10 -left-10 h-20 w-20 rounded-full ${secondaryColor.gradientFrom} blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl`}></div>
        </div>

        {/* Sección de habilidades */}
        <div className={`mb-12 rounded-2xl border border-border/50 ${primaryColor.bgGradient} p-6 sm:rounded-3xl sm:p-8 md:mb-16`}>
          <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-full ${primaryColor.bgLight} p-2`}>
              <Zap className={`h-5 w-5 ${primaryColor.text} sm:h-6 sm:w-6`} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{dict.labels.skillsCapabilities}</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.skills.map((skill: any, index: number) => {
              const Icon = skillIcons[index] || Star;
              return (
                <div 
                  key={skill.title}
                  className="rounded-xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-full ${primaryColor.bgLight} p-2`}>
                      <Icon className={`h-5 w-5 ${primaryColor.text}`} />
                    </div>
                    <span className={`rounded-full ${primaryColor.bgLight} px-3 py-1 text-xs font-bold ${primaryColor.text}`}>
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="mb-2 font-semibold">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sección de relaciones */}
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-accent/20 p-2">
              <Users className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{dict.labels.relationshipsConnections}</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`rounded-lg border ${primaryColor.border} ${primaryColor.bgGradient} p-4`}>
              <h4 className={`mb-2 font-semibold ${primaryColor.accentText}`}>
                {dict.labels.alliance}
              </h4>
              <p className="text-sm text-muted-foreground">
                {dict.relationships.alliance}
              </p>
            </div>
            
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <h4 className="mb-2 font-semibold text-amber-400">{dict.labels.rivalry}</h4>
              <p className="text-sm text-muted-foreground">
                {dict.relationships.rivalry}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}