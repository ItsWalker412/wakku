import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles,
  Star,
  Palette,
  Users,
  Heart,
  ChevronLeft
} from "lucide-react";
import {
  SiX,
  SiInstagram,
  SiGithub,
  SiYoutube,
  SiDiscord,
  SiTwitch,
  SiTiktok
} from "react-icons/si";

type Props = {
  params: Promise<{ lang: Locale }>;
};

const lucideIcons: Record<string, any> = {
  Star: Star,
  Palette: Palette,
  Users: Users,
  Heart: Heart,
  Sparkles: Sparkles,
};

const socialIcons: Record<string, any> = {
  x: SiX,
  twitter: SiX,
  instagram: SiInstagram,
  github: SiGithub,
  youtube: SiYoutube,
  discord: SiDiscord,
  twitch: SiTwitch,
  tiktok: SiTiktok,
};

export default async function CreditsPage({ params }: Props) {
  const { lang } = await params;
  const dict = (await getDictionary(lang, "credits")) as any;

  const getIcon = (iconName: string) => {
    return lucideIcons[iconName] || Star;
  };

  const getSocialIcon = (iconName?: string) => {
    if (!iconName) return SiX;
    return socialIcons[iconName.toLowerCase()] || SiX;
  };

  return (
    <div className="min-h-screen from-background to-muted/10">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* Botón de regreso */}
        <div className="mb-6 sm:mb-8">
          <Link
            href={`/${lang}/wakku`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-accent/30 hover:bg-accent/10 hover:text-accent sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            {dict.backToLore}
          </Link>
        </div>

        {/* Hero */}
        <div className="relative mb-12 rounded-2xl border border-border/40 bg-gradient-to-br from-background to-primary/5 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:mb-16 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="rounded-full bg-accent/20 p-2 sm:p-2.5 w-fit">
              <Sparkles className="h-5 w-5 text-accent sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {dict.title}
            </h1>
          </div>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl">
            {dict.subtitle}
          </p>
        </div>

        {/* Tarjetas principales con soporte para imágenes e icono de red personalizable */}
        <div className="mb-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {dict.cards && dict.cards.map((card: any, idx: number) => {
            const IconComponent = getIcon(card.icon);
            const SocialIcon = getSocialIcon(card.socialIcon);
            const hasImage = card.image && typeof card.image === 'string';
            return (
              <div
                key={idx}
                className="rounded-xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-5 transition-all hover:border-accent/30 hover:shadow-md sm:rounded-2xl sm:p-6 md:p-8"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  {hasImage ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted/20 sm:h-14 sm:w-14 md:h-16 md:w-16">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                      />
                    </div>
                  ) : (
                    <div className={`rounded-full ${card.iconBg || 'bg-primary/20'} p-2 sm:p-3`}>
                      <IconComponent className={`h-5 w-5 ${card.iconColor || 'text-primary'} sm:h-6 sm:w-6`} />
                    </div>
                  )}
                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted/30 p-1.5 text-muted-foreground transition-all hover:bg-accent/20 hover:text-accent flex items-center justify-center sm:p-2"
                      aria-label={card.linkText}
                    >
                      <SocialIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  )}
                </div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{card.title}</h2>
                <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">{card.name}</h3>
                  <span className={`rounded-full ${card.badgeBg || 'bg-primary/10'} px-2 py-0.5 text-xs font-medium ${card.badgeColor || 'text-primary'} sm:px-2.5`}>
                    {card.role}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed sm:mt-4 sm:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Miembros del canal (sin cambios, ya soporta socials) */}
        {dict.membersList && dict.membersList.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8 md:mb-10 flex items-center gap-3 sm:gap-4">
              <div className="rounded-full bg-primary/20 p-2 sm:p-2.5">
                <Users className="h-5 w-5 text-primary sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                {dict.sections.members}
              </h2>
            </div>
            <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {dict.membersList.map((member: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 p-5 transition-all hover:border-accent/30 hover:shadow-md sm:rounded-2xl sm:p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div>
                        <h3 className="text-lg font-bold leading-tight sm:text-xl">{member.name}</h3>
                        <p className="mt-0.5 text-xs font-medium text-accent sm:text-sm">{member.role}</p>
                      </div>
                      {member.socials && member.socials.length > 0 && (
                        <div className="flex gap-1.5 sm:gap-2">
                          {member.socials.map((social: any, i: number) => {
                            const Icon = socialIcons[social.icon.toLowerCase()];
                            if (!Icon) return null;
                            return (
                              <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-muted/30 p-1.5 text-muted-foreground transition-all hover:bg-accent/20 hover:text-accent flex items-center justify-center sm:p-2"
                                aria-label={social.platform}
                              >
                                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed sm:mt-4 sm:text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nota final */}
        <div className="rounded-xl border border-border/40 bg-gradient-to-r from-accent/10 to-accent/10 p-6 text-center sm:rounded-2xl sm:p-8 md:p-10">
          <Heart className="mx-auto h-8 w-8 text-accent sm:h-9 sm:w-9 md:h-10 md:w-10" />
          <p className="mt-3 max-w-md mx-auto text-sm text-muted-foreground sm:mt-4 sm:text-base">
            {dict.footerNote}
          </p>
        </div>

      </section>
    </div>
  );
}