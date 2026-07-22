"use client";

import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1a2438] py-8 text-center text-xs text-white/40">
      {t.footer}
    </footer>
  );
}
