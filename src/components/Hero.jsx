import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUp, ArrowDown, Play } from './Icons'
import { SilkLeft, SilkRight } from './Silk'
import { Glows, Waves, Sparks } from './Atmosphere'
import { MaskLine } from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

const SLIDES = [
  {
    eyebrow: 'New Collection',
    l1: 'Wear Your',
    l2: 'Style',
    sub: 'Discover premium fashion, crafted for your everyday elegance.',
    img: '/assets/01_hero_male_model.png',
    w: 430,
  },
  {
    eyebrow: 'Winter Drop',
    l1: 'Own The',
    l2: 'Moment',
    sub: 'Layered silhouettes built for the cold, cut for the city.',
    img: '/assets/07_clothing_rack.png',
    w: 520,
  },
  {
    eyebrow: 'Essentials',
    l1: 'Soft On',
    l2: 'Repeat',
    sub: 'Everyday staples in fabrics you will never want to take off.',
    img: '/assets/10_female_banner_model.png',
    w: 540,
  },
]

export default function Hero() {
  const [i, setI] = useState(0)
  const { scrollY } = useScroll()

  /* gentle parallax as the hero scrolls away */
  const modelY = useTransform(scrollY, [0, 700], [0, 110])
  const copyY = useTransform(scrollY, [0, 700], [0, 68])
  const haloY = useTransform(scrollY, [0, 700], [0, 150])
  const fade = useTransform(scrollY, [0, 620], [1, 0])

  const go = (d) => setI((p) => (p + d + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 7000)
    return () => clearInterval(t)
  }, [])

  const s = SLIDES[i]

  return (
    <section className="hero" id="home">
      <div className="atmo">
        <Glows
          items={[
            { size: 620, left: '48%', top: '-14%', color: 'radial-gradient(circle, rgba(70,120,205,.55), transparent 68%)', opacity: 0.6, speed: 13 },
            { size: 520, left: '-12%', top: '48%', color: 'radial-gradient(circle, rgba(48,88,170,.45), transparent 68%)', opacity: 0.5, speed: 17 },
            { size: 440, right: '-8%', bottom: '2%', color: 'radial-gradient(circle, rgba(96,140,225,.38), transparent 70%)', opacity: 0.45, speed: 15 },
          ]}
        />
        <Waves bottom="-4%" opacity={0.6} />
        <Waves top="36%" opacity={0.28} flip />
        <Sparks count={22} seed={3} />
      </div>

      <div className="shell">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: fade }}>
          <AnimatePresence mode="wait">
            <div key={i}>
              <motion.div
                className="eyebrow"
                initial={{ opacity: 0, x: -34 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              >
                {s.eyebrow}
              </motion.div>

              <h1 className="hero-title">
                <MaskLine delay={0.35}>{s.l1}</MaskLine>
                <MaskLine delay={0.47}>
                  <span className="grad-text">{s.l2}</span>.
                </MaskLine>
              </h1>

              <motion.p
                className="hero-sub"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
              >
                {s.sub}
              </motion.p>
            </div>
          </AnimatePresence>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.78, ease: EASE }}
          >
            <a className="btn btn-light" href="#shop">
              Shop the Collection
              <span className="arw"><ArrowRight /></span>
            </a>

            <button className="watch">
              <span className="watch-ring"><Play /></span>
              Watch Video
            </button>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="halo"
            style={{ y: haloY }}
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
          />

          <motion.div
            initial={{ opacity: 0, x: -150, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: EASE }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <SilkLeft />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 160, rotate: 9 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.62, ease: EASE }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <SilkRight />
          </motion.div>

          <motion.div style={{ y: modelY, position: 'relative', zIndex: 5, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={i}
                src={s.img}
                alt={`${s.l1} ${s.l2}`}
                className="hero-model"
                style={{ width: `min(100%, ${s.w}px)` }}
                initial={{ opacity: 0, y: 70, scale: 0.94, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, scale: 0.97, filter: 'blur(10px)' }}
                transition={{ duration: 1.1, ease: EASE }}
                draggable={false}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="rail"
        initial={{ opacity: 0, x: 34 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: EASE }}
      >
        <div className="rail-count">
          <b>{String(i + 1).padStart(2, '0')}</b>
          <span>/</span>
        </div>
        <div className="rail-count" style={{ fontSize: 11, marginTop: -12 }}>
          <span>/0{SLIDES.length}</span>
        </div>
        <div className="rail-line">
          <i style={{ transform: `translateY(${i * 100}%)` }} />
        </div>
        <button aria-label="Previous slide" onClick={() => go(-1)}><ArrowUp /></button>
        <button aria-label="Next slide" onClick={() => go(1)}><ArrowDown /></button>
      </motion.div>
    </section>
  )
}
