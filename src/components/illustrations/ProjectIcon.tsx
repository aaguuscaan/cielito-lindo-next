"use client";

import { motion } from "framer-motion";

const INK = "var(--ink)";
const ORANGE = "var(--orange)";

type IconProps = { hovered: boolean };

/** Cielito Lindo — an architecture folder with a tab label, cracks open on hover. */
export function BlueprintIcon({ hovered }: IconProps) {
  return (
    <svg viewBox="0 0 200 170" className="h-full w-full overflow-visible">
      <motion.g
        animate={{ rotate: hovered ? -4 : 0, y: hovered ? -3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "20px", originY: "150px" }}
      >
        <path d="M20 40 H90 L102 56 H180 V150 H20 Z" fill="#fdf3e4" stroke={ORANGE} strokeWidth="3" strokeLinejoin="round" />
        <rect x="30" y="10" width="46" height="22" rx="3" fill="#fdf3e4" stroke={ORANGE} strokeWidth="2.5" />
        <text x="53" y="26" textAnchor="middle" fontSize="10" fill={ORANGE} fontWeight="600">
          casa
        </text>
      </motion.g>
      <motion.g
        initial={false}
        animate={{ y: hovered ? -14 : 0, opacity: hovered ? 1 : 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <path
          d="M36 100 L66 66 L92 86 L138 42"
          fill="none"
          stroke={INK}
          strokeOpacity="0.55"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M36 118 H150 M36 128 H110" stroke={INK} strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

/** Esencia — a stitched notebook with a pressed flower and a slim, elegant cross. */
export function BookletIcon({ hovered }: IconProps) {
  return (
    <svg viewBox="0 0 200 170" className="h-full w-full overflow-visible">
      <motion.g animate={{ rotate: hovered ? 3 : 0 }} transition={{ duration: 0.3 }} style={{ originX: "100px", originY: "150px" }}>
        <rect x="34" y="18" width="132" height="128" rx="4" fill="#fffefb" stroke={INK} strokeOpacity="0.45" strokeWidth="2.5" />
        <path d="M34 26 V138 M40 22 V142 M46 20 V144" stroke={INK} strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M100 34 V60 M88 42 H112" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <g transform="translate(70,86)">
          <path
            d="M0 0 C-10 -8 -10 -20 0 -20 C10 -20 10 -8 0 0 C10 8 10 20 0 20 C-10 20 -10 8 0 0 M-20 0 C-8 -10 8 -10 20 0 C8 10 -8 10 -20 0"
            fill="none"
            stroke={INK}
            strokeOpacity="0.4"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="4" fill={ORANGE} opacity="0.7" />
        </g>
        <path d="M60 118 H140" stroke={INK} strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.rect
        x="118"
        y="10"
        width="10"
        height="90"
        rx="4"
        fill={ORANGE}
        opacity="0.75"
        animate={{ y: hovered ? 4 : 10, rotate: hovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "123px", originY: "10px" }}
      />
    </svg>
  );
}

/** AI Agent — a spiral technical notebook with a hand-drawn robot doodle. */
export function RobotIcon({ hovered }: IconProps) {
  return (
    <svg viewBox="0 0 200 170" className="h-full w-full overflow-visible">
      <motion.g animate={{ rotate: hovered ? -3 : 0 }} transition={{ duration: 0.3 }} style={{ originX: "30px", originY: "150px" }}>
        <rect x="30" y="16" width="140" height="130" rx="4" fill="#fdf3e4" stroke={INK} strokeOpacity="0.4" strokeWidth="2.5" />
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx="30" cy={30 + i * 17} r="3.5" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="1.6" />
        ))}
        <rect x="60" y="46" width="60" height="48" rx="10" fill="none" stroke={ORANGE} strokeWidth="2.5" />
        <circle cx="76" cy="66" r="4" fill={ORANGE} />
        <circle cx="104" cy="66" r="4" fill={ORANGE} />
        <path d="M74 80 H106" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <path d="M90 46 V32" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="90" cy="28" r="4" fill="none" stroke={ORANGE} strokeWidth="2.5" />
        <path d="M60 66 H46 M120 66 H134" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 116 H148" stroke={INK} strokeOpacity="0.25" strokeWidth="2" />
      </motion.g>
      <motion.text
        x="150"
        y="118"
        fontSize="11"
        fill={INK}
        fillOpacity="0.5"
        fontStyle="italic"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 118 : 124 }}
        transition={{ duration: 0.25 }}
      >
        beep boop
      </motion.text>
    </svg>
  );
}

/** LLM Base — a research folder with loose pages, a paperclip and a small diagram. */
export function FolderBrainIcon({ hovered }: IconProps) {
  return (
    <svg viewBox="0 0 200 170" className="h-full w-full overflow-visible">
      <motion.rect
        x="46"
        y="26"
        width="112"
        height="104"
        rx="3"
        fill="#fffefb"
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="2"
        animate={{ rotate: hovered ? -6 : -2, y: hovered ? 6 : 10 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "50px", originY: "130px" }}
      />
      <motion.g
        animate={{ rotate: hovered ? 5 : 0, y: hovered ? -6 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "150px", originY: "130px" }}
      >
        <path d="M28 42 H112 L124 58 H172 V138 H28 Z" fill="#fdf3e4" stroke={ORANGE} strokeWidth="3" strokeLinejoin="round" />
        <path d="M44 78 H120 M44 92 H100 M44 106 H130" stroke={INK} strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="150" cy="82" r="10" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="2" />
        <path d="M143 82 H157 M150 75 V89" stroke={INK} strokeOpacity="0.4" strokeWidth="1.6" />
      </motion.g>
      <path
        d="M150 18 C160 14 168 22 162 32 C156 42 138 46 138 46"
        fill="none"
        stroke={INK}
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
