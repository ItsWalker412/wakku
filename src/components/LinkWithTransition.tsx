"use client";

import { useState, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useTransitionStore } from "@/stores/transitionStore";

interface LinkWithTransitionProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  transitionType?: "slide" | "blur" | "morph" | "wipe" | "glitch" | "split";
}

export function LinkWithTransition({ 
  children, 
  className = "", 
  onClick,
  transitionType = "slide",
  ...props 
}: LinkWithTransitionProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const setTransitionType = useTransitionStore((state) => state.setTransitionType);

  useEffect(() => {
    // Limpiar estado al desmontar
    return () => {
      setIsNavigating(false);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) onClick();
    
    // Establecer tipo de transición
    setTransitionType(transitionType);
    
    // Iniciar navegación
    setIsNavigating(true);
    
    // Agregar clase al body
    document.body.classList.add("page-transition-active");
    
    // Pequeño delay para que se vea la animación de salida
    setTimeout(() => {
      // Navegar
      if (typeof props.href === "string") {
        router.push(props.href);
      } else {
        router.push(props.href.toString());
      }
      
      // Limpiar después de la navegación
      setTimeout(() => {
        document.body.classList.remove("page-transition-active");
        setIsNavigating(false);
      }, 600);
    }, 100);
  };

  return (
    <>
      <Link
        {...props}
        className={`relative ${className}`}
        onClick={handleClick}
        aria-disabled={isNavigating}
      >
        {children}
        {isNavigating && (
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full animate-ping" />
        )}
      </Link>
    </>
  );
}