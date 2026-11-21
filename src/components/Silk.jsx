import { motion } from 'framer-motion'

/* Billowing silk caught mid-air behind the hero model. Each sheet is a
   closed band — wavy top edge, wavy bottom edge, joined at both ends —
   so it reads as fabric with real width instead of a flat swoosh. */

const drift = (d, y, r) => ({
  animate: { y: [0, -y, 0, y * 0.55, 0], rotate: [0, r, 0, -r * 0.65, 0] },
  transition: { duration: d, repeat: Infinity, ease: 'easeInOut' },
})

export function SilkLeft() {
  return (
    <motion.svg
      className="silk silk-left"
      viewBox="0 0 560 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...drift(15, 14, 1.3)}
    >
      <defs>
        <linearGradient id="slkL-cream" x1="0" y1="0.1" x2="1" y2="0.9">
          <stop offset="0%" stopColor="#dfe6f1" stopOpacity="0.35" />
          <stop offset="26%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="62%" stopColor="#dbe3ef" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#92a7c8" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="slkL-sheen" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* cream band — the top sheet */}
      <path
        d="M0 148C110 54 252 24 392 66c80 24 128 56 168 48v62c-44 10-98-20-170-46C252 86 110 118 0 214Z"
        fill="url(#slkL-cream)"
      />
      {/* sheen catching the light along the crease */}
      <path
        d="M24 150C130 70 258 46 386 84c70 21 120 46 156 44v22c-42 4-96-22-162-44C254 68 128 96 24 176Z"
        fill="url(#slkL-sheen)"
        opacity="0.75"
      />
      {/* deep blue underside — wider, sitting below the cream */}
      <path
        d="M8 232C120 146 258 118 396 158c76 22 124 52 160 46v64c-42 10-96-18-166-42C256 180 122 206 8 300Z"
        fill="url(#slkL-blue2)"
      />
      {/* trailing blue ripple */}
      <path
        d="M72 282c88-54 182-66 278-38 46 13 86 32 122 42v30c-46 2-92-16-140-34-62-23-124-36-188-16-25 8-48 10-72 16Z"
        fill="url(#slkL-blue2)"
        opacity="0.55"
      />

      <defs>
        <linearGradient id="slkL-blue2" x1="0" y1="0" x2="1" y2="0.9">
          <stop offset="0%" stopColor="#2b5496" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#4075c8" stopOpacity="0.96" />
          <stop offset="70%" stopColor="#21438a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#122450" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export function SilkRight() {
  return (
    <motion.svg
      className="silk silk-right"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...drift(19, 18, 2)}
    >
      <defs>
        <linearGradient id="slkR-cream" x1="0" y1="0.15" x2="1" y2="0.95">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
          <stop offset="36%" stopColor="#edf0f6" stopOpacity="0.9" />
          <stop offset="74%" stopColor="#c3cfe2" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#8296b8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="slkR-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
          <stop offset="64%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="slkR-shade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8296b8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2f4c7b" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* main cream band streaming off to the right */}
      <path
        d="M0 142C80 56 190 16 306 40c80 17 142 54 194 86v56c-58-26-118-62-196-82C204 76 92 86 0 206Z"
        fill="url(#slkR-cream)"
      />
      {/* shaded underside fold */}
      <path
        d="M20 198C106 128 212 108 318 136c62 17 118 48 162 76v44c-56-18-110-50-176-70-72-22-142-30-212 0-26 11-48 16-72 22Z"
        fill="url(#slkR-shade)"
      />
      {/* leading-edge highlight */}
      <path
        d="M14 146C96 70 198 38 310 62c74 16 134 48 186 76v20c-50-22-106-52-178-70C214 68 104 78 14 172Z"
        fill="url(#slkR-sheen)"
        opacity="0.7"
      />
    </motion.svg>
  )
}
