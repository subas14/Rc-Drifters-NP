import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import { WhatsAppIcon } from '../components/Footer.jsx'
import {
  CATEGORIES,
  BEST_SELLERS,
  NEW_ARRIVALS,
  GALLERY_IMAGES,
  getProductById,
} from '../data/products.js'
import { STORE, whatsappLink, formatPrice } from '../utils/store.js'

const TICKER_ITEMS = [
  'RC Drift Cars',
  'Racing Machines',
  'Drift Tyres',
  'LED Kits',
  'Spare Parts',
  'Batteries',
  'Controllers',
  'Kathmandu · Nepal',
]

export default function HomePage() {
  const comboKit = getProductById(3)

  return (
    <>
      <Hero />

      {/* Scrolling ticker strip */}
      <div className="overflow-hidden border-y border-line bg-graphite py-3" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-8">
          {/* List rendered twice so the loop is seamless */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-8 font-heading text-sm font-bold tracking-[0.25em] whitespace-nowrap text-mist uppercase"
            >
              {item} <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Pick your lane"
          title="Shop by Category"
          subtitle="From full drift machines to the smallest spare part — everything an RC lover needs."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 sm:gap-5">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="carbon-bg border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Crowd favourites"
            title="Best Selling RC Cars"
            subtitle="The machines our customers keep coming back for."
          />
          <ProductGrid products={BEST_SELLERS} />
          <div className="mt-10 text-center">
            <Link
              to="/shop"
              className="inline-block rounded-md border-2 border-primary px-8 py-3 font-heading font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-white"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promo banner — combo kit */}
      {comboKit && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-lg border border-line bg-steel lg:grid-cols-2">
            <img
              src={comboKit.image}
              alt={comboKit.name}
              loading="lazy"
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="font-heading text-sm font-bold tracking-[0.3em] text-accent uppercase">
                Limited Stock — Complete Package
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-snow uppercase sm:text-4xl">
                {comboKit.name}
              </h2>
              <p className="mt-4 text-mist">{comboKit.shortDescription}</p>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-primary">
                  {formatPrice(comboKit.price)}
                </span>
                <span className="text-lg text-mist line-through">
                  {formatPrice(comboKit.oldPrice)}
                </span>
              </div>
              <Link
                to={`/product/${comboKit.id}`}
                className="mt-7 inline-block w-fit rounded-md bg-primary px-8 py-3.5 font-heading font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(255,45,55,0.5)]"
              >
                Grab the Combo
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* New arrivals */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Fresh from the garage"
          title="New Arrivals"
          subtitle="Latest machines to land in the shop — get them before everyone else."
        />
        <ProductGrid products={NEW_ARRIVALS} />
      </section>

      {/* Why buy from us */}
      <section className="carbon-bg border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="No gimmicks"
            title="Why Buy From Rc Drifter Np"
            subtitle="We are RC drivers first, sellers second. That changes everything about how we run this store."
            align="center"
          />
          <TrustBadges />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Shot on real streets of Nepal"
          title="From Our Garage"
          subtitle="Real photos of real cars we sell — rooftop night runs, sunset sessions and studio shots."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {GALLERY_IMAGES.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden rounded-lg border border-line"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Customer trust / testimonials */}
      <section className="carbon-bg border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Driver reviews"
            title="Trusted by RC Lovers Across Nepal"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="Ordered the 993 drift car on WhatsApp, it arrived in Lalitpur the next day. The LED headlights at night look unreal."
              name="Bibek T."
              city="Lalitpur"
            />
            <Testimonial
              quote="Finally a shop in Nepal that actually stocks spare tyres and motors. My car has been alive for a year thanks to these guys."
              name="Sarina M."
              city="Kathmandu"
            />
            <Testimonial
              quote="Bought the combo kit for my son — we ended up drifting together every evening. Quality is way above the usual toy shops."
              name="Rajesh K."
              city="Bhaktapur"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-line bg-gradient-to-r from-steel via-graphite to-steel p-8 text-center sm:p-12">
          <h2 className="font-heading text-3xl font-bold text-snow uppercase sm:text-4xl">
            Ready to <span className="text-gradient">drift</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-mist">
            Message us on WhatsApp — we'll help you pick the right car, answer questions and
            arrange delivery anywhere in Nepal.
          </p>
          <a
            href={whatsappLink(`Hello ${STORE.name}, I want to order an RC car.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 font-heading text-lg font-bold tracking-widest text-night uppercase transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Order on WhatsApp
          </a>
          <p className="mt-4 text-sm text-mist">{STORE.deliveryNote}</p>
        </div>
      </section>
    </>
  )
}

function Testimonial({ quote, name, city }) {
  return (
    <blockquote className="rounded-lg border border-line bg-steel p-6">
      <div className="text-accent" aria-hidden="true">★★★★★</div>
      <p className="mt-3 text-sm leading-relaxed text-mist">“{quote}”</p>
      <footer className="mt-4 font-heading font-bold text-snow">
        {name} <span className="font-normal text-mist">· {city}</span>
      </footer>
    </blockquote>
  )
}
