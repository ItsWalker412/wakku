"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTransitionStore } from "@/stores/transitionStore";
import { motion } from "framer-motion";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TransitionLink({ 
  children, 
  className = "", 
  onClick,
  ...props 
}: TransitionLinkProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const { startTransition, completeTransitionOut } = useTransitionStore();
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetHref = props.href.toString();
    
    // Verificar si ya estamos en la misma página
    if (currentPath === targetHref) {
      // Si ya estamos en esta página, no hacer transición
      if (onClick) onClick();
      return;
    }
    
    if (onClick) onClick();
    
    // 1. Iniciar transición OUT - MÁS RÁPIDO
    startTransition();
    
    // 2. Delay más corto
    setTimeout(() => {
      completeTransitionOut();
      router.push(targetHref);
    }, 250);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        {...props}
        className={`relative ${className}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    </motion.div>
  );
}