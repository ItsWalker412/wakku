import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { 
  Mail,
  ExternalLink,
  Clock,
  ChevronRight,
  Sparkles,
  Globe,
  Twitter,
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

  const platformTextColors = {
    youtube: "text-red-500",
    discord: "text-indigo-500",
    twitter: "text-black",
    instagram: "text-pink-500",
    tiktok: "text-black",
    spotify: "text-green-500",
    email: "text-blue-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-accent/5 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
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
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="font-medium text-green-400">
                {dict.labels.activeNow}
              </span>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
        </div>

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
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-accent/30 hover:shadow-xl sm:rounded-3xl sm:p-8"
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
                    <p className="mb-4 text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">
                        {platform.cta} →
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-accent/20"></div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mb-12 rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/20 p-2">
                  <Mail className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {dict.contactForm.title}
                </h2>
              </div>
              
              <p className="text-muted-foreground">
                {dict.contactForm.description}
              </p>
              
              <div className="space-y-4">
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-blue-400">{dict.contactForm.emailLabel}</div>
                      <div className="font-medium">{dict.contactForm.email}</div>
                    </div>
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {dict.contactForm.note}
                </div>
              </div>
              
              <a
                href={socialLinks.email}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {dict.contactForm.emailButton}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">{dict.featuredContent.title}</h3>
              
              <div className="space-y-4">
                {dict.featuredContent.items.map((item: any, index: number) => {
                  const platformKey = item.platform.toLowerCase();
                  const Icon = platformIcons[platformKey as keyof typeof platformIcons] || Globe;
                  const colorClass = platformTextColors[platformKey as keyof typeof platformTextColors] || "text-accent";
                  
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-background/80"
                    >
                      <div className={`rounded-full bg-current/10 p-2 ${colorClass}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.platform}</div>
                        <div className="text-sm text-muted-foreground">{item.content}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{dict.labels.finalNoteTitle}</span>
            </div>
            
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