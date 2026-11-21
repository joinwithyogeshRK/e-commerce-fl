const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Search = (p) => (
  <svg width="19" height="19" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.4-3.4" />
  </svg>
)

export const User = (p) => (
  <svg width="19" height="19" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.8 20c.9-3.6 3.7-5.6 7.2-5.6s6.3 2 7.2 5.6" />
  </svg>
)

export const Cart = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <path d="M2.5 3.5h2.2l2.3 10.6h10.3l2.2-7.7H6.2" />
    <circle cx="9.2" cy="19" r="1.5" />
    <circle cx="17.4" cy="19" r="1.5" />
  </svg>
)

export const ArrowRight = ({ size = 13, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="2" {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const ArrowUp = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="1.7" {...p}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
)

export const ArrowDown = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth="1.7" {...p}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
)

export const Play = (p) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7.5 5.2v13.6a.8.8 0 0 0 1.22.68l11-6.8a.8.8 0 0 0 0-1.36l-11-6.8a.8.8 0 0 0-1.22.68Z" />
  </svg>
)

export const Menu = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
)

export const Close = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const Instagram = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base} strokeWidth="1.7" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const Facebook = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.14V9.9H7.6V13h2.76v8h3.24Z" />
  </svg>
)

export const Youtube = (p) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.5 7.4a2.5 2.5 0 0 0-1.76-1.77C18.18 5.2 12 5.2 12 5.2s-6.18 0-7.74.43A2.5 2.5 0 0 0 2.5 7.4 26 26 0 0 0 2.07 12a26 26 0 0 0 .43 4.6 2.5 2.5 0 0 0 1.76 1.77c1.56.43 7.74.43 7.74.43s6.18 0 7.74-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 21.93 12a26 26 0 0 0-.43-4.6ZM10.1 14.95V9.05L15.05 12l-4.95 2.95Z" />
  </svg>
)

export const XIcon = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.2 3h3.3l-7.2 8.23L21.75 21h-6.6l-5.17-6.38L4.05 21H.73l7.7-8.8L0 3h6.77l4.67 5.83L17.2 3Zm-1.16 16h1.83L6.05 4.9H4.08L16.04 19Z" />
  </svg>
)
