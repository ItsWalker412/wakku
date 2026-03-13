"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

interface TransitionProviderProps {
  children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0,
            y: 20,
          },
          animateState: {
            opacity: 1,
            y: 0,
          },
          exitState: {
            opacity: 0,
            y: -20,
          },
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}