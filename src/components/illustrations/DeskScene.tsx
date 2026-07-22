"use client";

import { motion } from "framer-motion";
import { useScene } from "@/lib/scene-context";
import { useReducedMotionPref } from "@/lib/use-reduced-motion";

type Props = {
  stage: 0 | 1 | 2 | 3;
  className?: string;
};

const INK = "var(--ink)";
const ORANGE = "var(--orange)";

/**
 * Editorial line-art illustration of Agustina at her desk.
 * Single-weight navy line work with orange used only as accent —
 * mirrors the "sketchbook" reference style rather than filled shapes.
 */
export function DeskScene({ stage, className }: Props) {
  const { isCoffee, bumpMateClicks, sweaterColor, foundDuck, duckFound } = useScene();
  const reduced = useReducedMotionPref();

  const lampOn = stage === 3;

  return (
    <svg
      viewBox="0 0 900 640"
      className={className}
      role="img"
      aria-label="Ilustración de Agustina trabajando en su escritorio"
    >
      <defs>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity="0.3" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* chair */}
      <path
        d="M180 300 C150 260 160 190 230 175 M600 300 C640 255 630 185 560 172"
        fill="none"
        stroke={INK}
        strokeOpacity="0.55"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M175 300 C150 400 165 470 210 520"
        fill="none"
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M600 300 C630 400 615 470 570 520"
        fill="none"
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* side table */}
      <g transform="translate(660,330)">
        <path d="M0 0 H210" stroke={INK} strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 0 V150 M198 0 V150" stroke={INK} strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />

        {/* desk lamp, lit only in the evening stage */}
        <g transform="translate(178,-70)">
          <path d="M0 70 V20" stroke={INK} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
          <path d="M0 20 L-46 -14" stroke={INK} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="-52" cy="-18" rx="18" ry="10" fill="none" stroke={lampOn ? ORANGE : INK} strokeOpacity={lampOn ? 1 : 0.4} strokeWidth="3" />
          {lampOn && <circle cx="-70" cy="10" r="50" fill="url(#lampGlow)" />}
        </g>

        {/* plant */}
        <g transform="translate(24,-64)">
          <path d="M0 64 V20" stroke={INK} strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="0" cy="66" rx="20" ry="8" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="2.5" />
          <path
            d="M0 20 C-16 10 -14 -14 0 -24 C14 -14 16 10 0 20 M0 4 C-10 -2 -10 -18 0 -26 M0 4 C10 -2 10 -18 0 -26"
            fill="none"
            stroke={ORANGE}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* notebook + pen, sketch grows with stage */}
        <g transform="translate(70,4)">
          <rect x="0" y="0" width="72" height="52" rx="4" fill="#fffefb" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
          <path d="M8 12 H50" stroke={INK} strokeOpacity="0.3" strokeWidth="2" />
          {stage >= 1 && <path d="M8 22 H40" stroke={ORANGE} strokeWidth="2" opacity="0.8" />}
          {stage >= 2 && <path d="M8 32 H58 M8 42 H30" stroke={INK} strokeOpacity="0.3" strokeWidth="2" />}
          <g transform="translate(58,-6) rotate(28)">
            <rect width="42" height="5" rx="2.5" fill={ORANGE} />
          </g>
        </g>

        {/* arduino, peeking out from under the notebook, stage >= 1 */}
        {stage >= 1 && (
          <g transform="translate(78,40)" opacity="0.9">
            <rect x="0" y="0" width="40" height="24" rx="3" fill="#fffefb" stroke={ORANGE} strokeWidth="2" />
            <circle cx="7" cy="7" r="1.8" fill={ORANGE} />
            <circle cx="14" cy="7" r="1.8" fill={ORANGE} />
            <circle cx="21" cy="7" r="1.8" fill={ORANGE} />
          </g>
        )}

        {/* mate / coffee, clickable easter egg, with a little steam and heart sticker */}
        <g
          transform="translate(20,10)"
          onClick={bumpMateClicks}
          role="button"
          tabIndex={0}
          aria-label="Mate"
          style={{ cursor: "pointer" }}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && bumpMateClicks()}
        >
          <circle cx="14" cy="24" r="30" fill="transparent" />
          {!reduced && (
            <motion.path
              d="M6 -6 C2 -14 10 -18 6 -28"
              fill="none"
              stroke={INK}
              strokeOpacity="0.25"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: [0.15, 0.5, 0.15], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {isCoffee ? (
            <>
              <path d="M0 16 C0 4 28 4 28 16 V34 C28 42 0 42 0 34 Z" fill="#fffefb" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
              <path d="M28 16 C40 16 40 32 28 30" fill="none" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
            </>
          ) : (
            <>
              <path d="M2 20 C-4 4 32 4 26 20 C26 38 2 38 2 20 Z" fill="#fffefb" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
              <path d="M12 4 L9 -12" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />
              <path
                d="M14 21 c-1.5 -2 -4 -2 -4 1 c0 2.4 4 5 4 5 s4 -2.6 4 -5 c0 -3 -2.5 -3 -4 -1z"
                fill={ORANGE}
                opacity="0.85"
              />
            </>
          )}
        </g>
      </g>

      {/* headphones resting beside the chair, cable trailing off */}
      <g transform="translate(90,470)">
        <path d="M0 26 C0 -6 54 -6 54 26" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="0" cy="34" rx="9" ry="13" fill="none" stroke={ORANGE} strokeWidth="2.5" />
        <ellipse cx="54" cy="34" rx="9" ry="13" fill="none" stroke={ORANGE} strokeWidth="2.5" />
        <path d="M54 44 C70 60 40 70 60 90" fill="none" stroke={INK} strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Agustina */}
      <motion.g
        transform="translate(400,230)"
        animate={reduced ? undefined : { y: [0, -3, 0] }}
        transition={reduced ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* far arm / sleeve to laptop */}
        <path
          d="M64 150 C110 168 128 190 118 220"
          fill="none"
          stroke={INK}
          strokeOpacity="0.55"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* sweater body with a cable-knit rib down the middle */}
        <path
          d="M-96 260 C-112 170 -70 110 0 108 C70 110 112 170 96 260 Z"
          fill={sweaterColor}
          fillOpacity="0.5"
          stroke={INK}
          strokeWidth="3.5"
        />
        <path d="M0 120 V250" stroke={INK} strokeOpacity="0.25" strokeWidth="2.5" />
        <path d="M-14 130 C-10 140 -18 150 -14 160 C-10 170 -18 180 -14 190" fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="2" />
        <path d="M14 130 C10 140 18 150 14 160 C10 170 18 180 14 190" fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="2" />
        <path d="M-60 132 L-30 118 M60 132 L30 118" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />

        {/* near arm / sleeve to laptop, animated as if typing */}
        <motion.path
          d="M-64 150 C-112 166 -132 188 -120 218"
          fill="none"
          stroke={INK}
          strokeOpacity="0.55"
          strokeWidth="3.5"
          strokeLinecap="round"
          animate={reduced ? undefined : { d: ["M-64 150 C-112 166 -132 188 -120 218", "M-64 148 C-112 162 -132 184 -120 214", "M-64 150 C-112 166 -132 188 -120 218"] }}
          transition={reduced ? undefined : { duration: 0.5, repeat: Infinity, repeatDelay: 1.6 }}
        />

        {/* neck */}
        <path d="M-14 96 V112 M14 96 V112" stroke={INK} strokeOpacity="0.4" strokeWidth="2.5" />

        {/* head */}
        <ellipse cx="0" cy="40" rx="52" ry="56" fill="#fdf4e6" fillOpacity="0.4" stroke={INK} strokeWidth="3.5" />

        {/* hair — long, side part, one accent lock in orange */}
        <path
          d="M-52 30 C-58 -18 -30 -50 0 -50 C30 -50 58 -18 52 30
             C52 60 46 110 34 150
             C30 100 40 70 30 40
             C30 76 26 130 14 168
             C16 110 20 66 6 40"
          fill="none"
          stroke={INK}
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M-52 30 C-58 -18 -30 -50 0 -50 M-40 -30 C-48 6 -46 60 -54 96 C-56 130 -50 150 -38 160"
          fill="none"
          stroke={ORANGE}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* ponytail tie */}
        <circle cx="46" cy="18" r="4" fill="none" stroke={INK} strokeWidth="2.5" />

        {/* glasses */}
        <circle cx="-19" cy="42" r="16" fill="none" stroke={INK} strokeWidth="3" />
        <circle cx="19" cy="42" r="16" fill="none" stroke={INK} strokeWidth="3" />
        <path d="M-3 42 H3" stroke={INK} strokeWidth="3" />
        <path d="M-35 40 C-42 38 -46 40 -48 44" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 40 C42 38 46 40 48 44" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />

        {/* eyes + soft smile */}
        <motion.g
          animate={reduced ? undefined : { scaleY: [1, 1, 0.1, 1] }}
          transition={reduced ? undefined : { duration: 4.4, repeat: Infinity, times: [0, 0.92, 0.96, 1], ease: "easeInOut" }}
          style={{ originX: "0px", originY: "42px" }}
        >
          <circle cx="-19" cy="42" r="2.6" fill={INK} />
          <circle cx="19" cy="42" r="2.6" fill={INK} />
        </motion.g>
        <path d="M-8 64 Q0 70 8 64" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      {/* laptop, sits across her lap */}
      <g transform="translate(340,400)">
        <path d="M0 46 L12 4 H176 L188 46 Z" fill="#fffefb" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
        <path d="M4 40 H184" stroke={INK} strokeOpacity="0.2" strokeWidth="1.5" />
        <rect x="28" y="-124" width="132" height="128" rx="6" fill="none" stroke={INK} strokeWidth="3" />
        <text x="94" y="-56" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontWeight="700" fontSize="22" fill={ORANGE}>
          AG
        </text>
        {stage >= 1 && <rect x="40" y="-112" width="16" height="12" rx="2" fill={ORANGE} opacity="0.7" transform="rotate(-8 48 -106)" />}
        {stage >= 2 && <circle cx="140" cy="-108" r="7" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="2" />}
        {stage >= 3 && <rect x="120" y="-20" width="14" height="10" rx="2" fill={INK} opacity="0.15" />}

        {/* hidden duck easter egg, tucked just behind the screen edge */}
        <g
          transform="translate(158,-16)"
          onClick={foundDuck}
          role="button"
          tabIndex={0}
          aria-label="???"
          style={{ cursor: duckFound ? "default" : "pointer" }}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && foundDuck()}
        >
          <ellipse cx="0" cy="0" rx="9" ry="7" fill={ORANGE} opacity={duckFound ? 1 : 0.05} />
          <circle cx="6" cy="-3" r="3" fill={ORANGE} opacity={duckFound ? 1 : 0.05} />
        </g>
      </g>

      {/* crossed legs — one striped sock, one solid orange sock */}
      <g transform="translate(340,470)">
        <path d="M-30 20 C0 42 40 42 74 18" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="9" strokeLinecap="round" />
        <path d="M50 22 C82 34 108 26 128 6" fill="none" stroke={INK} strokeOpacity="0.55" strokeWidth="12" strokeLinecap="round" />

        <g transform="translate(-38,10) rotate(-16)">
          <rect x="0" y="0" width="30" height="15" rx="7" fill="#fffefb" stroke={ORANGE} strokeWidth="2.5" />
        </g>
        <g transform="translate(120,-8) rotate(-20)">
          <rect x="0" y="0" width="32" height="15" rx="7" fill="#fffefb" stroke={INK} strokeWidth="2.5" />
          <path d="M4 4 H28 M4 8 H28" stroke={ORANGE} strokeWidth="2" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}
