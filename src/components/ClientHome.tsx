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
  SiDiscord
} from "react-icons/si";

interface Props {
  lang: string;
  home: any;
}

export default function ClientHome({ lang, home }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const socialLinks = {
    youtube: "https://youtube.com/@wakku_wav",
    instagram: "https://instagram.com/wakku.wav",
    twitter: "https://twitter.com/wakku_wav",
    tiktok: "https://tiktok.com/@wakku.wav",
    spotify: "https://open.spotify.com/artist/5cE4qiYMGef6P5jyuqNx5O?si=hJvz9zO9Tc-jVTjhXhIrKg",
    discord: "https://discord.gg/H7hK4GzyZD"
  };

  const socialConfig = [
    { key: "youtube", icon: SiYoutube, color: "hover:bg-red-600", textColor: "text-white" },
    { key: "instagram", icon: SiInstagram, color: "hover:bg-pink-600", textColor: "text-white" },
    { key: "twitter", icon: SiX, color: "hover:bg-black", textColor: "text-white" },
    { key: "tiktok", icon: SiTiktok, color: "hover:bg-black", textColor: "text-white" },
    { key: "spotify", icon: SiSpotify, color: "hover:bg-green-600", textColor: "text-white" },
    { key: "discord", icon: SiDiscord, color: "hover:bg-indigo-600", textColor: "text-white" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] as const
      }
    }
  };

  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('/images/liabanner.png')] bg-cover bg-center bg-no-repeat opacity-10"
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {home.hero.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
            {home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <TransitionLink
              href={`/${lang}/commissions`}
              className="px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:bg-accent transition-colors"
            >
              {home.cta.commissions}
            </TransitionLink>

            <TransitionLink
              href={`/${lang}/about`}
              className="px-6 py-3 border border-foreground rounded-xl font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              {home.cta.about}
            </TransitionLink>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {socialConfig.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.key}
                  href={socialLinks[social.key as keyof typeof socialLinks]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-11 md:w-12 rounded-full bg-background/90 border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover:border-transparent hover:text-white backdrop-blur-md shadow-lg ${social.textColor}`}
                  aria-label={`Visitar mi ${social.key}`}
                >
                  <Icon className="h-5 w-5 sm:h-5.5 md:h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/liabanner.png')] bg-cover bg-center bg-no-repeat opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground drop-shadow-lg"
          >
            {home.hero.title}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow"
          >
            {home.hero.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 md:mt-10 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full sm:w-auto"
          >
            <TransitionLink
              href={`/${lang}/commissions`}
              className="group relative inline-flex items-center justify-center rounded-xl bg-foreground text-background px-6 md:px-8 py-3 md:py-4 font-semibold overflow-hidden transition-all duration-300 hover:bg-accent w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-sm md:text-base">{home.cta.commissions}</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </TransitionLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full sm:w-auto"
          >
            <TransitionLink
              href={`/${lang}/about`}
              className="group relative inline-flex items-center justify-center rounded-xl border-2 border-foreground bg-background/40 px-6 md:px-8 py-3 md:py-4 font-semibold overflow-hidden transition-all duration-300 hover:bg-foreground hover:text-background backdrop-blur-sm w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-sm md:text-base">{home.cta.about}</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </TransitionLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {socialConfig.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.key}
                  href={socialLinks[social.key as keyof typeof socialLinks]}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.15, 
                    duration: 0.5,
                    ease: [0.42, 0, 0.58, 1] as const
                  }}
                  whileHover={{ 
                    scale: 1.10,
                    transition: { type: "spring", stiffness: 800, damping: 8 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 sm:w-11 md:w-12 rounded-full bg-background/90 border border-border/50 flex items-center justify-center transition-all duration-50 hover:scale-110 ${social.color} hover:border-transparent hover:text-white backdrop-blur-md shadow-lg ${social.textColor}`}
                  aria-label={`Visitar mi ${social.key}`}
                >
                  <Icon className="h-5 w-5 sm:h-5.5 md:h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}