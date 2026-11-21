import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Facebook, Youtube, XIcon } from './Icons'
import Reveal, { RevealGroup, RevealItem } from './Reveal'
import { Waves, Glows } from './Atmosphere'

const LINKS = ['Shop', 'About', 'Contact', 'FAQs', 'Returns', 'Terms']
const SOCIALS = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Youtube, label: 'YouTube' },
  { Icon: XIcon, label: 'X' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3200)
  }

  return (
    <footer className="footer" id="contact">
      <div className="atmo">
        <Glows
          items={[
            { size: 520, left: '20%', bottom: '-30%', color: 'radial-gradient(circle, rgba(42,80,155,.32), transparent 70%)', opacity: 0.45, speed: 18 },
          ]}
        />
        <Waves bottom="-16%" opacity={0.4} />
      </div>

      <div className="shell">
        <div className="footer-main">
          <Reveal from="left" className="footer-brand" delay={0.05}>
            <span className="logo">Zyra</span>
            <p>Fashion for a better you.</p>
          </Reveal>

          <RevealGroup className="footer-links" stagger={0.07}>
            {LINKS.map((l) => (
              <RevealItem key={l} from="up" as="span">
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal from="right" className="footer-sub" delay={0.1}>
            <span>Subscribe to our newsletter</span>
            <div className="sub-row">
              <form className="sub-field" onSubmit={submit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={12} />
                </button>
              </form>

              <div className="socials">
                {SOCIALS.map(({ Icon, label }, i) => (
                  <motion.a
                    key={label}
                    href="#contact"
                    aria-label={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.12 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
            {sent && <p className="sub-note">Thanks — you are on the list.</p>}
          </Reveal>
        </div>

        <Reveal from="up" distance={22} className="footer-bar">
          <span>© 2025 Zyra. All rights reserved.</span>
          <span>
            Built with <span className="heart">♡</span> for fashion lovers
          </span>
        </Reveal>
      </div>
    </footer>
  )
}
