"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
          className="rounded-xl border border-white/10"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <span className="font-medium">{item.q}</span>
            <span className="text-sm opacity-60">
              {open === i ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden px-4 pb-4 text-muted-foreground"
              >
                {item.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
