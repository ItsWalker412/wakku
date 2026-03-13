"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useTransitionStore } from "@/stores/transitionStore";
import { motion } from "framer-motion";

interface EnhancedLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  transitionType?: "slide" | "fade" | "scale" | "blur";
}

export function EnhancedLink({ 
  children, 
  className = "", 
  transitionType = "fade",
  ...props 
}: EnhancedLinkProps) {
  const router = useRouter();
  const { setTransitionType, startTransition } = useTransitionStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Configurar y empezar transición
    setTransitionType(transitionType);
    startTransition();
    
    // Pequeño delay para que se vea el efecto
    setTimeout(() => {
      router.push(props.href.toString());
    }, 150);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
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