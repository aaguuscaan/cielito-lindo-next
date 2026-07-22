"use client";

import { useLanguage } from "@/lib/language-context";

const LINKS: { key: "about" | "projects" | "contact"; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export function Nav() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          agus<span className="text-orange">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="group relative py-1 transition-colors hover:text-ink"
              >
                {t.nav[link.key]}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-orange hover:text-orange sm:inline-block"
          >
            {t.nav.cv}
          </a>
          <div className="flex items-center gap-1 rounded-full border border-ink/15 p-1 text-xs font-semibold">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === l ? "bg-blue text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
