import { motion } from 'framer-motion'

/* ------------------------------------------------------------------
   Reveal — the scroll-animation primitive used across the whole page.
   Elements slide in from the left / right / below and settle in place
   the first time they enter the viewport.
   ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1]

const offsets = {
  left: { x: -70, y: 0 },
  right: { x: 70, y: 0 },
  up: { x: 0, y: 48 },
  down: { x: 0, y: -48 },
  none: { x: 0, y: 0 },
}

export default function Reveal({
  children,
  from = 'up',
  delay = 0,
  duration = 0.85,
  distance,
  blur = true,
  once = true,
  amount = 0.25,
  as = 'div',
  ...rest
}) {
  const o = offsets[from] ?? offsets.up
  const scale = distance != null && o.x !== 0 ? distance / 70 : distance != null ? distance / 48 : 1
  const M = motion[as] ?? motion.div

  return (
    <M
      initial={{
        opacity: 0,
        x: o.x * scale,
        y: o.y * scale,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Staggered container — children animate one after another. */
export function RevealGroup({ children, stagger = 0.11, delay = 0, amount = 0.2, once = true, ...rest }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, from = 'up', duration = 0.8, as = 'div', ...rest }) {
  const o = offsets[from] ?? offsets.up
  const M = motion[as] ?? motion.div
  return (
    <M
      variants={{
        hidden: { opacity: 0, x: o.x, y: o.y, filter: 'blur(9px)' },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Word-by-word masked text reveal, used for the hero headline. */
export function MaskLine({ children, delay = 0, duration = 1 }) {
  return (
    <span className="line">
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '112%' }}
        animate={{ y: '0%' }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}
