"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useScene } from "@/lib/scene-context";

export function EggToast() {
  const { toast } = useScene();
  const { t } = useLanguage();

  const message =
    toast === "duck" ? t.egg.duck : toast === "coffee" ? t.egg.coffee : toast === "konami" ? t.egg.konami : null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-lg"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
