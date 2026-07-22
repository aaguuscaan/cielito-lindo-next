"use client";

import { motion } from "framer-motion";
import { ArrowDown, Coffee } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import principalImage from "./illustrations/principal.png";
import { StickyChecklist } from "./StickyChecklist";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-6 md:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-4">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3 py-1 text-xs font-medium text-ink/70"
          >
            <Coffee className="h-3.5 w-3.5 text-orange" strokeWidth={2.5} />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
          >
            {t.hero.titleLine1}
            <br />
            <span className="text-orange">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-ink/70"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--blue-deep)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-orange hover:text-orange"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <div className="mt-10 hidden items-center gap-2 text-xs text-ink/40 md:flex">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            {t.hero.note}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <Image
            src={principalImage}
            alt="Avatar illustration"
            className="w-full scale-125 overflow-visible drop-shadow-[0_20px_40px_rgba(22,35,63,0.08)]"
          />
          <StickyChecklist className="absolute -right-2 top-6 hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
