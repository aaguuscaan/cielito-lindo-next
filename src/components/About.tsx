"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const STICKY_NOTES_ES = [
  "recordatorio: tomar agua (además del mate)",
  "no te olvides de estirar la espalda",
  "5 minutos de caos ideas locas",
  "probar esa animación rara",
  "avisar que el deploy salió bien",
];

const STICKY_NOTES_EN = [
  "reminder: drink water (besides mate)",
  "don't forget to stretch your back",
  "5 minutes of wild ideas",
  "try that weird animation idea",
  "tell the team the deploy went fine",
];

export function About() {
  const { t, lang } = useLanguage();
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    const pool = lang === "es" ? STICKY_NOTES_ES : STICKY_NOTES_EN;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- random note is intentionally decided client-side, after hydration
    setNote(pool[Math.floor(Math.random() * pool.length)]);
  }, [lang]);

  return (
    <section id="about" className="bg-notebook-paper torn-edge-top relative pb-24 pt-16">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-sm border border-ink/10 bg-[var(--beige-paper)]/70 p-9 shadow-[0_18px_40px_rgba(22,35,63,0.06)] sm:p-12"
        >
          <span className="tape -left-4 -top-3 rotate-[-8deg]" aria-hidden />
          <span className="tape -right-4 -top-2 rotate-[10deg]" aria-hidden />

          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">
            {t.about.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75">
            {t.about.paragraph}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.about.traits.map((trait) => (
              <li key={trait} className="flex items-start gap-2 text-sm text-ink/80">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} />
                {trait}
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{ rotate: 0, y: -2 }}
            className="mt-8 inline-block rotate-[-3deg] rounded-sm bg-[#ffe27a] px-4 py-3 text-sm font-medium text-ink/80 shadow-md"
          >
            {note ?? t.about.stickyDefault}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
