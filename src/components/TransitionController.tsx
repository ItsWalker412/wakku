"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransitionStore } from "@/stores/transitionStore";

export function TransitionController() {
  const pathname = usePathname();
  const { resetTransition, completeTransitionIn } = useTransitionStore();

  useEffect(() => {
    // Delay más corto para el fade in
    const timer = setTimeout(() => {
      completeTransitionIn();
    }, 50); // 50ms en lugar de 100ms
    
    return () => clearTimeout(timer);
  }, [pathname, completeTransitionIn]);

  useEffect(() => {
    resetTransition();
  }, [resetTransition]);

  return null;
}