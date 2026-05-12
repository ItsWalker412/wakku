// components/PreferencesSection.tsx
"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";

type PreferencesSectionProps = {
  defaultLikes: string[];
  defaultDislikes: string[];
  personalLikes?: string[];
  personalDislikes?: string[];
  // Nuevas props para textos traducibles
  title?: string;        // "Preferencias"
  defaultLabel?: string; // "Por defecto"
  personalLabel?: string;// "Personales"
  likesTitle?: string;   // "Me gusta"
  dislikesTitle?: string;// "No me gusta"
};

export default function PreferencesSection({
  defaultLikes,
  defaultDislikes,
  personalLikes,
  personalDislikes,
  title = "Preferencias",
  defaultLabel = "Por defecto",
  personalLabel = "Personales",
  likesTitle = "Me gusta",
  dislikesTitle = "No me gusta",
}: PreferencesSectionProps) {
  const hasPersonal = (personalLikes?.length ?? 0) > 0 && (personalDislikes?.length ?? 0) > 0;
  const [view, setView] = useState<"default" | "personal">("default");

  const likes = view === "default" || !hasPersonal ? defaultLikes : personalLikes ?? [];
  const dislikes = view === "default" || !hasPersonal ? defaultDislikes : personalDislikes ?? [];

  return (
    <div className="mb-12 sm:mb-16 md:mb-20">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-accent/20 p-2">
            <Star className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        {hasPersonal && (
          <div className="flex items-center gap-3 rounded-full border border-border/40 bg-muted/30 p-1">
            <button
              onClick={() => setView("default")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                view === "default"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {defaultLabel}
            </button>
            <button
              onClick={() => setView("personal")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                view === "personal"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {personalLabel}
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Likes */}
        <div className="rounded-xl border border-green-200/40 bg-green-100/40 p-6 shadow-sm dark:border-green-700/30 dark:bg-green-950/10">
          <div className="mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">
              {likesTitle}
            </h3>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {likes.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-background/50 p-3 backdrop-blur-sm transition-all hover:bg-background/70 sm:rounded-xl sm:p-4">
                <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-400/15 sm:mt-1 sm:h-5 sm:w-5">
                  <Heart className="h-2.5 w-2.5 text-green-500 sm:h-3 sm:w-3" />
                </div>
                <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dislikes */}
        <div className="rounded-xl border border-rose-200/40 bg-rose-100/40 p-6 shadow-sm dark:border-rose-700/30 dark:bg-rose-950/10">
          <div className="mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-rose-600 dark:text-rose-400" fill="currentColor" />
            <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300">
              {dislikesTitle}
            </h3>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {dislikes.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-background/50 p-3 backdrop-blur-sm transition-all hover:bg-background/70 sm:rounded-xl sm:p-4">
                <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-400/15 sm:mt-1 sm:h-5 sm:w-5">
                  <Heart className="h-2.5 w-2.5 text-rose-500 sm:h-3 sm:w-3" fill="currentColor" />
                </div>
                <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}