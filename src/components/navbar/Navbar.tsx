"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TransitionLink } from "@/components/TransitionLink";
import type { Locale } from "@/i18n/config";

type Props = {
  lang: Locale;
  dict: {
    about: string;
    commissions: string;
    contact: string;
    lore: string;
    music: string;
  };
};

export function Navbar({ lang, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: `/${lang}/about`, label: dict.about },
    { href: `/${lang}/commissions`, label: dict.commissions },
    { href: `/${lang}/contact`, label: dict.contact },
    { href: `/${lang}/music`, label: dict.music },
/*     { href: `/${lang}/lore`, label: dict.lore }, */
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header 
      ref={menuRef}
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? "border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm" 
          : "border-b border-border/30 bg-background/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 py-3">
        <div className="flex items-center justify-between">
          <TransitionLink 
            href={`/${lang}`}
            className="relative h-10 w-20 group"
            onClick={handleLinkClick}
          >
            <div className="relative h-8 w-12 sm:h-9 sm:w-14">
              <Image
                src="/images/w-logo.svg"
                alt="wakku"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
          </TransitionLink>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-muted/50"
                onClick={handleLinkClick}
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLang={lang} />

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-5">
                <Menu className={`absolute inset-0 transition-all duration-200 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
                <X className={`absolute inset-0 transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          open 
            ? "max-h-96 opacity-100 visible border-t border-border/40" 
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm px-6 py-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.label}
                href={link.href}
                className="py-3 px-4 rounded-lg text-foreground/80 hover:text-accent hover:bg-muted/50 transition-colors duration-200 text-base font-medium"
                onClick={handleLinkClick}
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}