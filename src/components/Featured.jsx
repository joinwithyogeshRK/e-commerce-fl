import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Cart } from './Icons'
import Reveal, { RevealGroup, RevealItem } from './Reveal'
import { Glows, Waves, Sparks } from './Atmosphere'

const PRODUCTS = [
  { name: 'Classic Hoodie', price: 89, was: 120, img: '/assets/08_cream_hoodie_product.png', badge: 'Bestseller', tone: 'bestseller' },
  { name: 'Urban Jacket', price: 129, was: 169, img: '/assets/09_black_urban_jacket.png', badge: 'New', tone: 'new' },
  { name: 'Lilac Gown', price: 149, was: 199, img: '/assets/03_lilac_womens_dress.png', badge: 'Trending', tone: 'bestseller' },
  { name: 'Court Sneaker', price: 99, was: 139, img: '/assets/05_white_sneaker.png', badge: 'New', tone: 'new' },
  { name: 'Oxford Shirt', price: 59, was: 79, img: '/assets/02_blue_mens_shirt.png', badge: 'Bestseller', tone: 'bestseller' },
  { name: 'Chrono Watch', price: 219, was: 289, img: '/assets/06_silver_watch.png', badge: 'Limited', tone: 'new' },
]

export default function Featured() {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(PRODUCTS.length / 2)
  const visible = PRODUCTS.slice(page * 2, page * 2 + 2)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rackY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section className="featured" id="shop" ref={ref}>
      <div className="atmo">
        <Glows
          items={[
            { size: 600, left: '12%', top: '6%', color: 'radial-gradient(circle, rgba(52,94,172,.38), transparent 68%)', opacity: 0.5, speed: 15 },
            { size: 440, right: '2%', bottom: '8%', color: 'radial-gradient(circle, rgba(84,124,205,.3), transparent 70%)', opacity: 0.4, speed: 18 },
          ]}
        />
        <Waves top="4%" opacity={0.35} />
        <Sparks count={12} seed={9} />
      </div>

      <div className="shell">
        <div className="feat-grid">
          {/* --- LEFT: copy slides in from the left, rack drifts with scroll --- */}
          <div className="feat-left">
            <div className="feat-copy">
              <Reveal from="left" delay={0.05}>
                <div className="eyebrow">Featured Collection</div>
              </Reveal>

              <Reveal from="left" delay={0.12}>
                <h2 className="display">
                  Premium Picks
                  <br />
                  Just for You
                </h2>
              </Reveal>

              <Reveal from="left" delay={0.2}>
                <p>Handpicked styles. Unmatched quality.</p>
              </Reveal>

              <Reveal from="left" delay={0.28}>
                <a className="btn btn-light" href="#shop">
                  Shop Now
                  <span className="arw"><ArrowRight /></span>
                </a>
              </Reveal>
            </div>

            <div className="rack-wrap">
              <Reveal from="right" delay={0.1} amount={0.1} duration={1.1}>
                <motion.img
                  src="/assets/07_clothing_rack.png"
                  alt="Clothing rack"
                  className="rack"
                  style={{ y: rackY }}
                  loading="lazy"
                  draggable={false}
                />
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT: product cards --- */}
          <div className="feat-right">
            <RevealGroup className="prod-row" stagger={0.14} amount={0.2}>
              {visible.map((p) => (
                <RevealItem key={p.name + page} from="right">
                  <motion.article
                    className="prod-card"
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                  >
                    <div className="prod-media">
                      <span className={`badge ${p.tone}`}>{p.badge}</span>
                      <img src={p.img} alt={p.name} loading="lazy" draggable={false} />
                    </div>
                    <div className="prod-foot">
                      <div>
                        <div className="prod-name">{p.name}</div>
                        <div className="prod-price">
                          <b>${p.price.toFixed(2)}</b>
                          <s>${p.was.toFixed(2)}</s>
                        </div>
                      </div>
                      <button className="cart-btn" aria-label={`Add ${p.name} to cart`}>
                        <Cart />
                      </button>
                    </div>
                  </motion.article>
                </RevealItem>
              ))}
            </RevealGroup>

            <button
              className="carousel-next"
              aria-label="Next products"
              onClick={() => setPage((p) => (p + 1) % pages)}
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
