import { motion } from 'framer-motion'

/* Soft blue glows + drifting wave bands that give every section the same
   deep-space fabric look as the reference design. */

export function Glows({ items = [] }) {
  return (
    <>
      {items.map((g, i) => (
        <motion.div
          key={i}
          className="glow"
          style={{
            width: g.size,
            height: g.size * (g.ratio ?? 1),
            left: g.left,
            right: g.right,
            top: g.top,
            bottom: g.bottom,
            background: g.color,
            opacity: g.opacity ?? 0.5,
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [(g.opacity ?? 0.5) * 0.7, g.opacity ?? 0.5, (g.opacity ?? 0.5) * 0.7],
          }}
          transition={{ duration: g.speed ?? 12, repeat: Infinity, ease: 'easeInOut', delay: i * 1.4 }}
        />
      ))}
    </>
  )
}

export function Waves({ top, bottom, opacity = 0.55, flip = false }) {
  return (
    <svg
      className="wave"
      style={{ top, bottom, opacity, transform: flip ? 'scaleY(-1)' : 'none' }}
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id={`wv-${top ?? ''}-${bottom ?? ''}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1b3a6e" stopOpacity="0" />
          <stop offset="38%" stopColor="#3d6fb8" stopOpacity="0.55" />
          <stop offset="62%" stopColor="#5b8fd8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1b3a6e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M0 ${120 + i * 34}C240 ${70 + i * 30} 480 ${180 + i * 24} 720 ${140 + i * 30}C960 ${100 + i * 34} 1200 ${50 + i * 28} 1440 ${120 + i * 30}`}
          stroke={`url(#wv-${top ?? ''}-${bottom ?? ''})`}
          strokeWidth={1.4 - i * 0.3}
          animate={{ opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 7 + i * 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.9 }}
        />
      ))}
    </svg>
  )
}

/* Tiny drifting specks of light. */
export function Sparks({ count = 16, seed = 1 }) {
  const rnd = (n) => {
    const x = Math.sin(seed * 999 + n * 77.13) * 10000
    return x - Math.floor(x)
  }
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="hero-spark"
          style={{ left: `${rnd(i) * 100}%`, top: `${rnd(i + 40) * 100}%` }}
          animate={{
            y: [0, -22 - rnd(i + 7) * 26, 0],
            opacity: [0, 0.75, 0],
            scale: [0.6, 1.25, 0.6],
          }}
          transition={{
            duration: 5 + rnd(i + 13) * 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: rnd(i + 21) * 6,
          }}
        />
      ))}
    </>
  )
}
