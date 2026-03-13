import { Contact } from "lucide-react";
import type { Locale } from "./config";

const dictionaries = {
  home: {
    es: () => import("@/data/home/home.es.json").then(m => m.default),
    en: () => import("@/data/home/home.en.json").then(m => m.default),
  },
  navbar: {
    es: () => import("@/data/navbar/navbar.es.json").then(m => m.default),
    en: () => import("@/data/navbar/navbar.en.json").then(m => m.default),
  },
   lore: {
    es: () => import("@/data/lore/lore.es.json").then(m => m.default),
    en: () => import("@/data/lore/lore.en.json").then(m => m.default),
  },
  lia: {
    es: () => import("@/data/lore/lia/lia.es.json").then(m => m.default),
    en: () => import("@/data/lore/lia/lia.en.json").then(m => m.default),
  },
  walker: {
    es: () => import("@/data/lore/walker/walker.es.json").then(m => m.default),
    en: () => import("@/data/lore/walker/walker.en.json").then(m => m.default),
  },
  characters: {
  es: () => import("@/data/lore/characters.es.json").then(m => m.default),
  en: () => import("@/data/lore/characters.en.json").then(m => m.default),
  }, 
  about: {
    es: () => import("@/data/about/about.es.json").then(m => m.default),
    en: () => import("@/data/about/about.en.json").then(m => m.default),
  },
  commissions: {
    es: () => import("@/data/commissions/commissions.es.json").then(m => m.default),
    en: () => import("@/data/commissions/commissions.en.json").then(m => m.default),
  },
  terms: {
    es: () => import("@/data/commissions/terms.es.json").then(m => m.default),
    en: () => import("@/data/commissions/terms.en.json").then(m => m.default),
  },
  music: {
    es: () => import("@/data/music/music.es.json").then(m => m.default),
    en: () => import("@/data/music/music.en.json").then(m => m.default),
  },
  contact: {
    es: () => import("@/data/contact/contact.es.json").then(m => m.default),
    en: () => import("@/data/contact/contact.en.json").then(m => m.default),
  },

} as const;

type Namespace = keyof typeof dictionaries;

export async function getDictionary(
  locale: Locale,
  namespace: Namespace
) {
  const dict = dictionaries[namespace]?.[locale];

  if (!dict) {
    throw new Error(
      `Dictionary not found for locale "${locale}" and namespace "${namespace}"`
    );
  }

  return dict();
}
