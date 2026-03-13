"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import { 
  Calendar,
  User,
  Sparkles,
  ChevronRight
} from "lucide-react";

type Character = {
  id: string;
  name: string;
  type: string;
  age: string;
  birthday: string;
  tagline: string;
  description: string;
};

type CharactersGridProps = {
  lang: Locale;
  characters: Character[];
  dict: {
    ageLabel: string;
    birthdayLabel: string;
    typeLabel: string;
    viewDetails: string;
  };
};

const characterThemes: Record<string, { text: string; bgLight: string }> = {
  lia: { text: "text-cyan-300", bgLight: "bg-cyan-300/20" },

  default: { text: "text-blue-400", bgLight: "bg-blue-400/20" },
};

export default function CharactersGrid({
  lang,
  characters,
  dict
}: CharactersGridProps) {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {characters.map((char, index) => {

        const theme = characterThemes[char.id] || characterThemes.default;

        return (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            <Link
              href={`/${lang}/lore/${char.id}`}
              className="block h-full"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-background to-muted/10 shadow-lg transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-xl">
                
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`/lore/${char.id}.png`}
                    alt={char.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 pt-12">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      {char.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent">
                      "{char.tagline}"
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-xs text-muted-foreground">{dict.ageLabel}</div>
                          <div className="font-medium">{char.age}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-xs text-muted-foreground">{dict.birthdayLabel}</div>
                          <div className="font-medium">{char.birthday}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`rounded-lg border ${theme.text.replace('text-', 'border-')}/30 ${theme.bgLight} p-3`}>
                      <div className="flex items-center gap-2">
                        <Sparkles className={`h-4 w-4 ${theme.text}`} />
                        <div>
                          <div className="text-xs text-muted-foreground">{dict.typeLabel}</div>
                          <div className="font-medium">{char.type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {char.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-sm font-medium text-accent">
                      {dict.viewDetails}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-accent/20" />
              </div>
              
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 blur-xl transition-all duration-300 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}