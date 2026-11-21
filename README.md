# e-commerce-fl

**Zyra** — a dark, cinematic fashion e-commerce landing page built from a single design reference.

## Stack

- **React 18** + **Vite 5**
- **Framer Motion** for scroll and entrance animation
- Hand-written CSS (no utility framework) so the layout matches the reference exactly

## Animation

Everything on the page arrives rather than appears:

- **Hero** — masked word-by-word headline reveal, silk ribbons flying in from the left and right, a halo that scales up and slowly rotates, drifting light specks, and scroll-linked parallax on the model, copy and halo.
- **Categories** — the intro column slides in from the left while the five cards stagger in from the right.
- **Featured** — copy enters from the left, the clothing rack enters from the right and drifts against the scroll, product cards stagger in and lift on hover.
- **Promo banner** — the model drifts in from the left, the holographic ring spins in from the right, both tied to scroll progress.
- **Footer** — brand from the left, links staggered upward, newsletter block from the right.

All reveals run once on first intersection and respect `prefers-reduced-motion`.

## Sections

Navbar (sticky, blurs on scroll) · Hero slider (3 slides, autoplaying with manual up/down controls) · Shop by Category · Premium Picks with a paged product carousel · 20% Off promo banner · Footer with a working newsletter field.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview
```

## Assets

Product and model cutouts live in `public/assets/`. All backgrounds, glows, waves and silk fabric are drawn in CSS and SVG.
