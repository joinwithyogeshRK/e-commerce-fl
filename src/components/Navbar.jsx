import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, Cart, Menu, Close } from './Icons'

const LINKS = ['Home', 'Shop', 'Collections', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div className="shell">
          <motion.a
            href="#home"
            className="logo"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 380, damping: 18 }}
          >
            Zyra
          </motion.a>

          <nav className="nav-links">
            {LINKS.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={i === 0 ? 'active' : ''}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.a>
            ))}
          </nav>

          <div className="nav-actions">
            <button aria-label="Search"><Search /></button>
            <button aria-label="Account"><User /></button>
            <button aria-label="Cart">
              <Cart />
              <span className="cart-badge">4</span>
            </button>
            <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: 22, right: 24 }}
            >
              <Close />
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i + 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
