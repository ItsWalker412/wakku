"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransitionStore } from "@/stores/transitionStore";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const { isTransitioning, shouldAnimateIn } = useTransitionStore();

  return (
    <>
      {/* Fondo negro durante transición - CON TIMEOUT DE LIMPIEZA */}
      <AnimatePresence>
        {(isTransitioning || shouldAnimateIn) && (
          <motion.div
            key="black-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 pointer-events-none"
            onAnimationComplete={() => {
              // Limpiar el estado después de la animación
              if (!isTransitioning && !shouldAnimateIn) {
                // Resetear cualquier estado pendiente
                setTimeout(() => {
                  useTransitionStore.getState().resetTransition?.();
                }, 100);
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* Contenido de la página - CON VERIFICACIÓN DE RUTA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isTransitioning ? "exiting" : "entering"}
          initial={shouldAnimateIn ? { opacity: 0 } : false}
          animate={{ 
            opacity: (isTransitioning || shouldAnimateIn) ? 0 : 1 
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen relative z-30"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}