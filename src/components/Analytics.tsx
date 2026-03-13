"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function Analytics() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Mouse follower (optional) */}
      {/* <MouseFollower /> */}
    </>
  );
}

// Componente opcional para seguir el mouse
function MouseFollower() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/30 pointer-events-none z-40"
      animate={{
        x: [0, 20, 0],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}