"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  q: string;
  a: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/20 transition-all hover:border-accent/30"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:text-accent sm:p-5"
          >
            <span>{item.q}</span>
            <span className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-sm transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>
              {open === i ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: "500px", opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-border/40 p-4 text-sm text-muted-foreground sm:p-5">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}