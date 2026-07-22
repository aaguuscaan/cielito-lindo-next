"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Stage = 0 | 1 | 2 | 3; // morning, mid-morning, afternoon, evening

type SceneContextValue = {
  isCoffee: boolean;
  bumpMateClicks: () => void;
  sweaterColor: string;
  duckFound: boolean;
  foundDuck: () => void;
  toast: string | null;
};

const SceneContext = createContext<SceneContextValue | null>(null);

const SWEATER_COLORS = ["#f4ecdb", "#ffd7b8", "#c9d8ff", "#ffe27a"];

export function SceneProvider({ children }: { children: ReactNode }) {
  const [mateClicks, setMateClicks] = useState(0);
  const [sweaterIndex, setSweaterIndex] = useState(0);
  const [duckFound, setDuckFound] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const keys = useRef<string[]>([]);

  const isCoffee = mateClicks > 0 && mateClicks % 5 === 0;

  useEffect(() => {
    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    function onKey(e: KeyboardEvent) {
      keys.current.push(e.key);
      keys.current = keys.current.slice(-konami.length);
      if (keys.current.join(",") === konami.join(",")) {
        setSweaterIndex((i) => (i + 1) % SWEATER_COLORS.length);
        showToast("konami");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function showToast(kind: "konami" | "coffee" | "duck") {
    setToast(kind);
    window.clearTimeout((showToast as unknown as { t?: number }).t);
    const id = window.setTimeout(() => setToast(null), 3200);
    (showToast as unknown as { t?: number }).t = id;
  }

  function bumpMateClicks() {
    setMateClicks((c) => {
      const next = c + 1;
      if (next % 5 === 0) showToast("coffee");
      return next;
    });
  }

  function foundDuck() {
    if (!duckFound) {
      setDuckFound(true);
      showToast("duck");
    }
  }

  return (
    <SceneContext.Provider
      value={{
        isCoffee,
        bumpMateClicks,
        sweaterColor: SWEATER_COLORS[sweaterIndex],
        duckFound,
        foundDuck,
        toast,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error("useScene must be used within SceneProvider");
  return ctx;
}
