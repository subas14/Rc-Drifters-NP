import { Link } from 'react-router-dom'
import { STORE, whatsappLink } from '../utils/store.js'
import { CATEGORIES } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-graphite">
      <div className="checker-strip" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded bg-primary font-display text-lg font-black text-white">
              R
            </span>
            <span className="font-display text-lg font-bold tracking-wider text-snow">
              RC DRIFTER <span className="text-primary">NP</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-mist">{STORE.slogan}</p>
          <p className="mt-2 text-sm text-mist">
            Nepal's home for RC drift cars, racing cars, parts and accessories. Physical store — now
            going digital.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.25em] text-snow uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
            <li><Link to="/shop" className="transition-colors hover:text-primary">Shop</Link></li>
            <li><Link to="/cart" className="transition-colors hover:text-primary">Cart</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.25em] text-snow uppercase">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {CATEGORIES.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link
                  to={`/shop?category=${category.id}`}
                  className="transition-colors hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-bold tracking-[0.25em] text-snow uppercase">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>{STORE.phoneDisplay}</li>
            <li>{STORE.location}</li>
            <li>{STORE.hours}</li>
          </ul>
          <a
            href={whatsappLink(`Hello ${STORE.name}, I have a question.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-bold text-night transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
          <div className="mt-4 flex gap-3">
            <SocialLink href={STORE.socials.facebook} label="Facebook">FB</SocialLink>
            <SocialLink href={STORE.socials.instagram} label="Instagram">IG</SocialLink>
            <SocialLink href={STORE.socials.tiktok} label="TikTok">TT</SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-4 text-center text-xs text-mist">
        © {new Date().getFullYear()} {STORE.name} · Kathmandu, Nepal · {STORE.deliveryNote}
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-steel text-xs font-bold text-mist transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
