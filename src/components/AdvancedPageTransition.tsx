"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useTransitionStore } from "@/stores/transitionStore";

interface AdvancedPageTransitionProps {
  children: ReactNode;
}

export function AdvancedPageTransition({ children }: AdvancedPageTransitionProps) {
  const pathname = usePathname();
  const { transitionType, isTransitioning, endTransition } = useTransitionStore();

  useEffect(() => {

    const cleanup = () => {
      endTransition();

      setTimeout(() => {
        useTransitionStore.getState().resetTransition?.();
      }, 100);
    };

    const timer = setTimeout(cleanup, 300);
    
    return () => {
      clearTimeout(timer);

      cleanup();
    };
  }, [pathname, endTransition]);

  const transitionConfigs = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as const }
    },
    slide: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 },
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as const }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }
    },
    blur: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(10px)" },
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as const }
    },
    // Opciones adicionales (fallback suave)
    morph: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as const }
    },
    wipe: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] as const }
    },
    glitch: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] as const }
    },
    split: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] as const }
    }
  };

  const config = transitionConfigs[transitionType];

  return (
    <>
      {/* Loading indicator sutil - CON LIMPIEZA */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="loading-indicator"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent via-foreground to-accent z-50"
            onAnimationComplete={() => {
              // Asegurar que se limpie después de la animación
              if (!isTransitioning) {
                endTransition();
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* Transición principal - CON MANEJO MEJORADO */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={isTransitioning ? config.initial : false}
          animate={config.animate}
          exit={config.exit}
          transition={config.transition as any}
          className="min-h-screen"
          onAnimationComplete={(definition) => {
            // Si es una animación de salida, forzar limpieza
            if (definition === "exit") {
              setTimeout(() => {
                endTransition();
              }, 50);
            }
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}