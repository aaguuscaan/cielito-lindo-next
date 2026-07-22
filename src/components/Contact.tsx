"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Download, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import contactoImage from "./illustrations/contacto.png";

const LINKS = [
  { key: "linkedin", icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com/in/agustina-esteban-b6a615394/" },
  { key: "github", icon: Code2, label: "GitHub", href: "https://github.com/aaguuscaan" },
  { key: "email", icon: Mail, label: "agus@email.com", href: "mailto:estebanagustinacandela@gmail.com" },
  { key: "whatsapp", icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/1121833530" },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-paper py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {LINKS.map(({ key, icon: Icon, label, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-orange hover:text-orange"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_0_0_#b3450a] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            <Download className="h-4 w-4" />
            {t.contact.cv}
          </a>

          <p className="mt-8 text-xs text-ink/40">{t.contact.time}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={contactoImage}
            alt="Contact illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
