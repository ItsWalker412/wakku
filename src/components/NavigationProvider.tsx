"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPath, setPrevPath] = useState(pathname);

  // Detectar cambios en la ruta
  useEffect(() => {
    if (prevPath !== pathname) {
      // Iniciar animación de salida
      setIsAnimating(true);
      
      // Después de 200ms (animación de salida), cambiar el contenido
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setPrevPath(pathname);
        
        // Iniciar animación de entrada después de un pequeño delay
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 200);
      
      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams, children, prevPath]);

  return (
    <>
      {/* Overlay de transición */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-background z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Contenido con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ 
            opacity: isAnimating ? 0 : 1, 
            scale: isAnimating ? 0.98 : 1 
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="min-h-screen"
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>
    </>
  );
}