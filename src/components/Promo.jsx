import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from './Icons'
import Reveal from './Reveal'

export default function Promo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const ringY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const modelX = useTransform(scrollYProgress, [0, 1], [-26, 10])

  return (
    <section className="promo-wrap" ref={ref}>
      <div className="shell">
        <Reveal from="up" distance={60} duration={1} amount={0.2}>
          <div className="promo">
            {/* model drifts in from the left */}
            <motion.img
              src="/assets/10_female_banner_model.png"
              alt=""
              className="promo-model"
              style={{ x: modelX }}
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
              draggable={false}
            />

            <div className="promo-inner">
              <Reveal from="up" delay={0.2} distance={26}>
                <div className="eyebrow">Limited Time Offer</div>
              </Reveal>

              <Reveal from="up" delay={0.3} distance={30}>
                <h2 className="promo-title">
                  Get <em>20%</em> Off
                </h2>
              </Reveal>

              <Reveal from="up" delay={0.4} distance={26}>
                <p>Upgrade your wardrobe with exclusive savings.</p>
              </Reveal>

              <Reveal from="up" delay={0.5} distance={26}>
                <a className="btn btn-dark" href="#shop">
                  Shop Now
                  <span className="arw"><ArrowRight /></span>
                </a>
              </Reveal>
            </div>

            {/* holographic ring drifts in from the right and keeps spinning */}
            <div className="promo-ring-wrap">
              <motion.img
                src="/assets/11_holographic_ring.png"
                alt=""
                className="promo-ring"
                style={{ y: ringY }}
                initial={{ opacity: 0, x: 110, rotate: -22 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
                draggable={false}
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
