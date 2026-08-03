import SectionHeading from '../components/SectionHeading.jsx'
import { WhatsAppIcon } from '../components/Footer.jsx'
import { STORE, whatsappLink } from '../utils/store.js'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Pit stop"
        title="Contact Us"
        subtitle="Questions about a car, a part, or delivery to your city? Reach out — we actually reply."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact details */}
        <div className="space-y-4">
          <ContactCard title="Phone">
            <a href={`tel:${STORE.phoneDisplay.replace(/[^+\d]/g, '')}`} className="text-lg font-semibold text-snow hover:text-primary">
              {STORE.phoneDisplay}
            </a>
          </ContactCard>

          <ContactCard title="WhatsApp">
            <p className="text-sm text-mist">The fastest way to order or ask anything.</p>
            <a
              href={whatsappLink(`Hello ${STORE.name}, I have a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-heading font-bold tracking-widest text-night uppercase transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </ContactCard>

          <ContactCard title="Store Location">
            <p className="text-snow">{STORE.location}</p>
            <p className="mt-1 text-sm text-mist">
              Visit us to see the cars drift live before you buy.
            </p>
          </ContactCard>

          <ContactCard title="Opening Hours">
            <p className="text-snow">{STORE.hours}</p>
          </ContactCard>

          <ContactCard title="Follow Us">
            <div className="flex gap-3">
              <SocialButton href={STORE.socials.facebook} label="Facebook" />
              <SocialButton href={STORE.socials.instagram} label="Instagram" />
              <SocialButton href={STORE.socials.tiktok} label="TikTok" />
            </div>
            <p className="mt-2 text-sm text-mist">
              Drift clips, new arrivals and giveaways — first on socials.
            </p>
          </ContactCard>
        </div>

        {/* Map placeholder */}
        <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-dashed border-line bg-steel p-8 text-center">
          <span className="text-5xl" role="img" aria-label="Map pin">📍</span>
          <h3 className="mt-4 font-heading text-xl font-bold text-snow uppercase">
            Map coming soon
          </h3>
          <p className="mt-2 max-w-sm text-sm text-mist">
            We'll pin the exact store location here once the new shop signboard is up. Until
            then, message us on WhatsApp and we'll guide you in.
          </p>
          <p className="mt-6 rounded-md border border-line bg-night px-4 py-3 text-sm text-mist">
            🚚 {STORE.deliveryNote}
          </p>
        </div>
      </div>
    </div>
  )
}

function ContactCard({ title, children }) {
  return (
    <div className="rounded-lg border border-line bg-steel p-6">
      <h2 className="mb-2 font-heading text-sm font-bold tracking-[0.25em] text-accent uppercase">
        {title}
      </h2>
      {children}
    </div>
  )
}

function SocialButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border border-line bg-night px-4 py-2 text-sm font-semibold text-mist transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </a>
  )
}
