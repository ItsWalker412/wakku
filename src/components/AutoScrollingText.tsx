"use client";

import { useEffect, useRef, useState } from "react";

interface AutoScrollingTextProps {
  text: string;
  className?: string;
}

export default function AutoScrollingText({ text, className = "" }: AutoScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [needsScroll, setNeedsScroll] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      const shouldScroll = textWidth > containerWidth;
      setNeedsScroll(shouldScroll);
      if (shouldScroll) {
        const duration = Math.max(4, Math.min(12, textWidth / 50));
        setAnimationDuration(duration);
      }
    }
  }, [text]);

  if (!needsScroll) {
    return <span className={className}>{text}</span>;
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
    >
      <span
        ref={textRef}
        className="inline-block animate-marquee"
        style={{
          animationDuration: `${animationDuration}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {text}&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;{text}
      </span>
    </div>
  );
}