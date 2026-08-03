import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [iconFailed, setIconFailed] = useState(false)
  const { totalItems } = useCart()

  // Shared style for desktop nav links; NavLink tells us when it's active
  const linkClass = ({ isActive }) =>
    `font-heading text-sm font-bold tracking-[0.2em] uppercase transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-snow'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo: show a square icon (keeps previous size) and fall back to the "R" letter */}
        <Link to="/" className="flex items-center gap-2" aria-label="Rc Drifter Np — home">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-primary">
            {!iconFailed ? (
              <img
                src="/images/rc_drifters_np_icon.png"
                alt="Rc Drifter Np logo"
                className="h-6 w-6 object-contain"
                onError={() => setIconFailed(true)}
              />
            ) : (
              <span className="font-display text-lg font-black text-white">R</span>
            )}
          </div>
          <span className="font-display text-base font-bold tracking-wider text-snow sm:text-lg">
            RC DRIFTER <span className="text-primary">NP</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Cart button with item count */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-line bg-steel text-snow transition-colors hover:border-primary hover:text-primary"
            aria-label={`Cart, ${totalItems} items`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-steel text-snow md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-line bg-graphite md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-line/50 py-3 font-heading text-sm font-bold tracking-[0.2em] uppercase last:border-0 ${
                      isActive ? 'text-primary' : 'text-snow'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
