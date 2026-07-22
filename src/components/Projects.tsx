"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { BlueprintIcon, BookletIcon, FolderBrainIcon, RobotIcon } from "./illustrations/ProjectIcon";

const ICONS = [BlueprintIcon, BookletIcon, RobotIcon, FolderBrainIcon];
const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function Projects() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-grid-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange">
            {t.projects.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink/50">{t.projects.hint}</p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {t.projects.items.map((project, i) => {
            const Icon = ICONS[i];
            const isHovered = hovered === i;
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative ${ROTATIONS[i]} transition-transform hover:rotate-0`}
              >
                <div className="mx-auto h-40 w-40">
                  <Icon hovered={isHovered} />
                </div>

                <div className="mt-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                    {project.tag}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
                    {project.name}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto mt-3 max-w-xs overflow-hidden text-center"
                >
                  <p className="text-sm leading-relaxed text-ink/65">{project.description}</p>
                  <ul className="mt-3 flex flex-wrap justify-center gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink/55 shadow-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm font-semibold">
                    <a href={project.visit} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange hover:underline">
                      {t.projects.visit}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink/60 hover:text-ink">
                      <Code2 className="h-4 w-4" />
                      {t.projects.code}
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
