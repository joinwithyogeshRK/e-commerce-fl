import { motion } from 'framer-motion'
import { ArrowRight } from './Icons'
import Reveal, { RevealGroup, RevealItem } from './Reveal'
import { Glows, Waves } from './Atmosphere'

const CATS = [
  { name: 'Men', img: '/assets/02_blue_mens_shirt.png', tint: 'rgba(86,126,210,.34)' },
  { name: 'Women', img: '/assets/03_lilac_womens_dress.png', tint: 'rgba(150,112,206,.34)' },
  { name: 'Kids', img: '/assets/04_beige_hoodie_category.png', tint: 'rgba(120,146,198,.3)' },
  { name: 'Footwear', img: '/assets/05_white_sneaker.png', tint: 'rgba(96,140,215,.32)' },
  { name: 'Accessories', img: '/assets/06_silver_watch.png', tint: 'rgba(110,130,180,.3)' },
]

export default function Categories() {
  return (
    <section className="categories" id="collections">
      <div className="atmo">
        <Glows
          items={[
            { size: 560, right: '4%', top: '-10%', color: 'radial-gradient(circle, rgba(58,104,185,.4), transparent 68%)', opacity: 0.5, speed: 16 },
            { size: 420, left: '-6%', bottom: '-12%', color: 'radial-gradient(circle, rgba(42,78,150,.34), transparent 70%)', opacity: 0.45, speed: 19 },
          ]}
        />
        <Waves top="58%" opacity={0.3} />
      </div>

      <div className="shell">
        <div className="cat-grid">
          {/* --- copy slides in from the LEFT --- */}
          <div className="cat-intro">
            <Reveal from="left" delay={0.05}>
              <div className="eyebrow">Shop by Category</div>
            </Reveal>

            <Reveal from="left" delay={0.12}>
              <h2 className="display">
                Explore
                <br />
                Our Categories
              </h2>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p>Find your perfect style from our wide range of collections.</p>
            </Reveal>

            <Reveal from="left" delay={0.28}>
              <a className="btn btn-ghost" href="#shop">
                Browse All
                <span className="arw"><ArrowRight /></span>
              </a>
            </Reveal>
          </div>

          {/* --- cards fly in from the RIGHT, one after another --- */}
          <RevealGroup className="cat-rail" stagger={0.1} amount={0.15}>
            {CATS.map((c) => (
              <RevealItem key={c.name} from="right">
                <motion.a
                  href="#shop"
                  className="cat-card"
                  style={{ '--tint': c.tint }}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <img src={c.img} alt={c.name} loading="lazy" draggable={false} />
                  <div className="cat-foot">
                    <span>{c.name}</span>
                    <span className="icon-circle"><ArrowRight size={11} /></span>
                  </div>
                </motion.a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
