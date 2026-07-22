"use client";

import { motion } from "framer-motion";
import { CheckSquare, Square, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function StickyChecklist({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: 6 }}
      whileInView={{ opacity: 1, y: 0, rotate: 4 }}
      whileHover={{ rotate: 0, y: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`relative w-52 rounded-sm bg-[#ffe27a] px-5 py-4 shadow-[0_14px_26px_rgba(22,35,63,0.14)] ${className}`}
    >
      <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" aria-hidden />
      <Star className="absolute -top-3 -right-3 h-6 w-6 fill-orange text-orange" strokeWidth={1.5} />

      <p className="mb-2 text-sm font-semibold text-ink/80">{t.hero.checklistTitle}</p>
      <ul className="space-y-1.5">
        {t.hero.checklist.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-sm text-ink/75">
            {item.done ? (
              <CheckSquare className="h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} />
            ) : (
              <Square className="h-4 w-4 shrink-0 text-ink/40" strokeWidth={2.5} />
            )}
            <span className={item.done ? "" : "text-ink/50"}>{item.label}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
