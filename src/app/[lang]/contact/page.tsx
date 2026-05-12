import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { 
  Mail,
  ExternalLink,
  Clock,
  Sparkles,
  Globe,
  MessageCircle
} from "lucide-react";
import {
  SiYoutube,
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiSpotify,
  SiGmail,
  SiX
} from "react-icons/si";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "contact")) as any;

  const socialLinks = {
    youtube: "https://youtube.com/@wakku_wav",
    discord: "https://discord.gg/H7hK4GzyZD",
    twitter: "https://twitter.com/wakku_wav",
    instagram: "https://instagram.com/wakku.wav",
    tiktok: "https://tiktok.com/@wakku.wav",
    spotify: "https://open.spotify.com/artist/5cE4qiYMGef6P5jyuqNx5O?si=hJvz9zO9Tc-jVTjhXhIrKg",
    email: "mailto:wkacontacto@gmail.com"
  };

  const platformIcons = {
    youtube: SiYoutube,
    discord: SiDiscord,
    twitter: SiX,
    instagram: SiInstagram,
    tiktok: SiTiktok,
    spotify: SiSpotify,
    email: SiGmail
  };

  const platformColors = {
    youtube: "from-red-500 to-red-600",
    discord: "from-indigo-500 to-purple-600",
    twitter: "from-black to-gray-800",
    instagram: "from-pink-500 to-purple-600",
    tiktok: "from-black to-gray-900",
    spotify: "from-green-500 to-green-600",
    email: "from-blue-500 to-cyan-500"
  };

  return (
    <div className="min-h-screen from-background to-muted/10">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background to-primary/5 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent/20 p-2">
                <Sparkles className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {dict.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {dict.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-300/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-300"></div>
              <span className="font-medium text-green-300">
                {dict.labels.activeNow}
              </span>
            </div>
          </div>
        </div>

        {/* Sección Email + Tiempo de respuesta */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Email directo - estilo mejorado */}
            <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-6 shadow-sm transition-all hover:shadow-md sm:rounded-3xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/20 p-2">
                  <Mail className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {dict.contactForm.title}
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                {dict.contactForm.description}
              </p>
              <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-medium text-blue-400">{dict.contactForm.emailLabel}</div>
                    <div className="font-medium break-all">{dict.contactForm.email}</div>
                  </div>
                  <a
                    href={socialLinks.email}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-md"
                  >
                    <Mail className="h-4 w-4" />
                    {dict.contactForm.emailButton}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{dict.contactForm.note}</span>
              </div>
            </div>

            {/* Tiempo estimado de respuesta - diseño renovado */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-50/80 to-amber-100/60 p-6 shadow-sm dark:from-amber-950/30 dark:to-amber-900/20 sm:rounded-3xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-500/20 p-2">
                  <MessageCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">
                  {dict.responseTime.title}
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white/60 p-4 text-amber-800 dark:bg-black/20 dark:text-amber-300">
                  <p dangerouslySetInnerHTML={{ __html: dict.responseTime.message }} />
                </div>
                <div className="rounded-lg bg-white/60 p-3 text-sm text-amber-700 dark:bg-black/20 dark:text-amber-400">
                  <p dangerouslySetInnerHTML={{ __html: dict.responseTime.urgentNote }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-primary/20 p-2">
              <Globe className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.labels.connectWithMe}
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(dict.socials).map(([key, platform]: [string, any]) => {
              const Icon = platformIcons[key as keyof typeof platformIcons] || Globe;
              const colorClass = platformColors[key as keyof typeof platformColors] || "from-accent to-primary";
              
              return (
                <a
                  key={key}
                  href={socialLinks[key as keyof typeof socialLinks]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:rounded-3xl sm:p-8"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass}/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`rounded-full bg-gradient-to-br ${colorClass} p-3`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{platform.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{platform.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">{platform.cta} →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <div className="rounded-2xl border border-border/40 bg-gradient-to-r from-accent/10 to-accent/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-3 text-xl font-bold text-foreground sm:mb-4 sm:text-2xl">
              {dict.labels.finalNoteMessage}
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              {dict.labels.finalNoteDescription}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}