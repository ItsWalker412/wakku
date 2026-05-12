"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import {
  SiYoutube,
  SiInstagram,
  SiX,
  SiTiktok,
  SiSpotify,
  SiDiscord,
} from "react-icons/si";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  lang: string;
  home: any;
  loadingGif?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SOCIAL_CONFIG = [
  {
    key: "youtube",
    Icon: SiYoutube,
    href: "https://youtube.com/@wakku_wav",
    hoverBg: "hover:bg-red-600/80",
  },
  {
    key: "instagram",
    Icon: SiInstagram,
    href: "https://instagram.com/wakku.wav",
    hoverBg: "hover:bg-pink-600/80",
  },
  {
    key: "twitter",
    Icon: SiX,
    href: "https://twitter.com/wakku_wav",
    hoverBg: "hover:bg-slate-700",
  },
  {
    key: "tiktok",
    Icon: SiTiktok,
    href: "https://tiktok.com/@wakku.wav",
    hoverBg: "hover:bg-slate-800",
  },
  {
    key: "spotify",
    Icon: SiSpotify,
    href: "https://open.spotify.com/artist/5cE4qiYMGef6P5jyuqNx5O?si=hJvz9zO9Tc-jVTjhXhIrKg",
    hoverBg: "hover:bg-green-600/80",
  },
  {
    key: "discord",
    Icon: SiDiscord,
    href: "https://discord.gg/H7hK4GzyZD",
    hoverBg: "hover:bg-indigo-600/80",
  },
] as const;

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as const },
  },
};

// ─── Background ───────────────────────────────────────────────────────────────

function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[url('/images/liabanner.png')] bg-cover bg-center bg-no-repeat opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ClientHome({ lang, home, loadingGif }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Reset scroll position on every page visit — prevents the browser from
    // restoring a scrolled position from a previous route, which would push
    // content upward even with overflow hidden.
    window.scrollTo({ top: 0, behavior: "instant" });

    // Lock body scroll on desktop only. On mobile the browser chrome (address
    // bar) can shrink the viewport, so the page needs to be able to scroll.
    if (window.innerWidth >= 768) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Reset to "" so the CSS cascade takes over — not "auto", which would
      // force-enable scroll on pages that intentionally hide it.
      document.body.style.overflow = "";
    };
  }, []);

  // ── Loading screen ──────────────────────────────────────────────────────────
  // Shown on the very first render before React hydrates on the client.
  // This naturally only happens once per page load — navigating to another
  // route and back remounts the component, showing it again, but navigating
  // within the same page (e.g. hash changes) does not.
  if (!isMounted) {
    return (
      <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-background">
        <Background />

        <div className="relative z-10 flex flex-col items-center gap-5">
          {loadingGif ? (
            <img
              src={loadingGif}
              alt=""
              aria-hidden
              className="w-24 h-24 object-contain select-none"
              draggable={false}
            />
          ) : (
            // ── Default: sliding bar ───────────────────────────────────────────
            // Pure CSS animation — no JS needed since Framer hasn't loaded yet.
            <div className="relative w-24 h-px bg-foreground/10 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 w-[60%] bg-foreground/40 rounded-full animate-loading-bar" />
            </div>
          )}

          <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 font-medium select-none animate-pulse">
            {home.loading ?? "loading"}
          </span>
        </div>

        {/*
          Keyframe for the sliding bar — injected inline so it works without
          a separate CSS file. Framer isn't available yet at this stage.
        */}
        <style>{`
          @keyframes loading-bar {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(267%); }
          }
          .animate-loading-bar {
            animation: loading-bar 1.1s ease-in-out infinite;
          }
        `}</style>
      </section>
    );
  }

  // ── Animated layout ─────────────────────────────────────────────────────────
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      // min-h-svh = Small Viewport Height — correctly accounts for collapsible
      // browser chrome on iOS Safari and Android Chrome.
      // h-screen (100vh) includes the address bar height on some browsers,
      // which clips content below the fold.
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      <Background />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {/* Hero text */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 md:space-y-6 mb-8 md:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground drop-shadow-lg">
            {home.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto drop-shadow">
            {home.hero.subtitle}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <TransitionLink
              href={`/${lang}/commissions`}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-foreground text-background px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold transition-colors duration-200 hover:bg-accent"
            >
              {home.cta.commissions}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </TransitionLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <TransitionLink
              href={`/${lang}/about`}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border-2 border-foreground bg-background/40 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-200 hover:bg-foreground hover:text-background backdrop-blur-sm"
            >
              {home.cta.about}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </TransitionLink>
          </motion.div>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {SOCIAL_CONFIG.map(({ key, Icon, href, hoverBg }, index) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar mi ${key}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.45,
                ease: [0.42, 0, 0.58, 1] as const,
              }}
              // Scale is handled by Framer only — no duplicate hover:scale-* in
              // className, which would conflict with Framer's transform.
              whileHover={{
                scale: 1.12,
                transition: { type: "spring", stiffness: 600, damping: 12 },
              }}
              whileTap={{ scale: 0.92 }}
              className={`w-10 h-10 sm:w-11 md:w-12 rounded-full bg-background/90 border border-border/50 flex items-center justify-center text-foreground transition-colors duration-200 ${hoverBg} hover:border-transparent hover:text-white backdrop-blur-md`}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}