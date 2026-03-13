import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { 
  Music,
  Sparkles,
  Globe,
  ExternalLink,
  Gamepad2
} from "lucide-react";
import {
  SiYoutube,
  SiSpotify,
  SiSoundcloud,
  SiApplemusic,
  SiYoutubemusic
} from "react-icons/si";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function MusicPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "music")) as any;

  const platformLinks = {
    youtube: "https://youtube.com/@wakku_wav",
    spotify: "https://open.spotify.com/artist/5cE4qiYMGef6P5jyuqNx5O?si=hJvz9zO9Tc-jVTjhXhIrKg",
    soundcloud: "https://soundcloud.com/wakku_wav",
    "youtube-music": "https://music.youtube.com/channel/UC2a20q5djE7W4YekhqP4KvQ",
    "apple-music": "https://music.apple.com/artist/its-wk-music/1729689707",
    newgrounds: "https://wakkuwav.newgrounds.com"
  };

  const platformIcons = {
    youtube: SiYoutube,
    spotify: SiSpotify,
    soundcloud: SiSoundcloud,
    "youtube-music": SiYoutubemusic,
    "apple-music": SiApplemusic,
    newgrounds: Gamepad2
  };

  const platformGradients = {
    youtube: "from-red-500 to-red-600",
    spotify: "from-green-500 to-green-600",
    soundcloud: "from-orange-500 to-orange-600",
    "youtube-music": "from-red-400 to-red-500",
    "apple-music": "from-pink-500 to-rose-500",
    newgrounds: "from-amber-500 to-orange-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-purple-500/5 p-6 shadow-lg sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-500/20 p-2">
                <Sparkles className="h-5 w-5 text-purple-500 sm:h-6 sm:w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {dict.title}
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              {dict.subtitle}
            </p>
          </div>
          
          <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl sm:-top-16 sm:-right-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-pink-500/10 blur-2xl sm:-bottom-16 sm:-left-16 sm:h-32 sm:w-32 sm:blur-3xl"></div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
            <div className="rounded-full bg-primary/20 p-2">
              <Globe className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {dict.labels.featuredPlatforms}
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.sections.map((section: any) => {
              const Icon = platformIcons[section.id as keyof typeof platformIcons] || Music;
              const gradientClass = platformGradients[section.id as keyof typeof platformGradients] || "from-accent to-primary";
              
              return (
                <a
                  key={section.id}
                  href={platformLinks[section.id as keyof typeof platformLinks] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-accent/30 hover:shadow-xl sm:rounded-3xl sm:p-8"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`rounded-full bg-gradient-to-br ${gradientClass} p-3`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold">{section.title}</h3>
                    <p className="mb-6 text-sm text-muted-foreground">
                      {section.description}
                    </p>
                    
                      <span className="text-sm font-medium text-accent">
                        {dict.labels.exploreContent} →
                      </span>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-accent/20"></div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 p-6 text-center shadow-sm sm:rounded-3xl sm:p-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">
                {dict.labels.latestReleases}
              </span>
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