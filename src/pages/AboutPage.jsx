import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import { STORE } from '../utils/store.js'

export default function AboutPage() {
  return (
    <>
      {/* Page header with photo backdrop */}
      <section className="relative overflow-hidden border-b border-line">
        <img
          src="/images/sunset-side.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-bold tracking-[0.35em] text-accent uppercase">
            Our Story
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-black text-snow uppercase sm:text-5xl">
            From a small shop to Nepal's <span className="text-gradient">drift garage</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-mist">
            <p>
              <span className="font-semibold text-snow">{STORE.name}</span> started as a physical
              store in Kathmandu with one simple obsession: proper RC cars in Nepal. Not the
              flimsy toys that break in a week — real drift machines with working LED headlights,
              swappable tyres and parts you can actually replace.
            </p>
            <p>
              What began with a handful of drift cars on one shelf grew into a full garage:
              racing cars, off-road trucks, batteries, controllers, rims, tyres and every spare
              part a builder needs. Along the way we found our people — collectors, kids,
              hobbyists and full-on drift fanatics from all over Nepal.
            </p>
            <p>
              We're currently online-based, so you can browse the garage from anywhere in Nepal
              and get the same machines and honest advice we give everyone who walks through our
              door. We'll be upgrading to major cities across Nepal very soon.
            </p>
            <p className="font-heading text-lg font-bold text-snow">
              {STORE.slogan}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/night-rooftop.jpg"
              alt="RC car with LED headlights on a rooftop in Kathmandu at night"
              loading="lazy"
              className="rounded-lg border border-line object-cover"
            />
            <img
              src="/images/street-shot.jpg"
              alt="Black Porsche 993 RC drift car on the street"
              loading="lazy"
              className="mt-8 rounded-lg border border-line object-cover"
            />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="carbon-bg border-y border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          <Stat value="500+" label="Happy drivers" />
          <Stat value="15+" label="Products in the garage" />
          <Stat value="7" label="Categories stocked" />
          <Stat value="1" label="Physical store in KTM" />
        </div>
      </section>

      {/* Who we serve */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Who we're for"
          title="Every kind of RC lover"
          subtitle="Whether it's a first car or a garage full of builds, you're one of us."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AudienceCard emoji="🏁" title="Drift Fans" text="Serious sideways machines, drift tyres and cone courses." />
          <AudienceCard emoji="🧸" title="Kids & Beginners" text="Tough, easy-to-drive cars that survive the learning curve." />
          <AudienceCard emoji="🛠️" title="Hobbyists & Builders" text="Motors, rims, batteries and parts to build and tune." />
          <AudienceCard emoji="🏆" title="Collectors" text="Limited editions and detailed replicas worth displaying." />
        </div>
      </section>

      {/* Why us + CTA */}
      <section className="carbon-bg border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading kicker="The promise" title="Why Drivers Trust Us" align="center" />
          <TrustBadges />
          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block rounded-md bg-primary px-10 py-4 font-heading text-lg font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(255,45,55,0.5)]"
            >
              Explore the Garage
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-4xl font-black text-primary">{value}</div>
      <div className="mt-1 font-heading text-sm font-bold tracking-widest text-mist uppercase">
        {label}
      </div>
    </div>
  )
}

function AudienceCard({ emoji, title, text }) {
  return (
    <div className="rounded-lg border border-line bg-steel p-6 text-center transition-colors hover:border-primary/50">
      <span className="text-4xl" role="img" aria-hidden="true">{emoji}</span>
      <h3 className="mt-3 font-heading text-lg font-bold text-snow">{title}</h3>
      <p className="mt-1 text-sm text-mist">{text}</p>
    </div>
  )
}
