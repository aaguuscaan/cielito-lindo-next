"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/language-context";
import { SceneProvider } from "@/lib/scene-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SceneProvider>{children}</SceneProvider>
    </LanguageProvider>
  );
}
