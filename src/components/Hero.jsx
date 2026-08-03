import { Link } from 'react-router-dom'
import { STORE } from '../utils/store.js'

// Full-width hero with the real store video playing in the background.
export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Background video (muted + playsInline so mobile browsers autoplay it) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero-video.mp4"
        poster="/images/sunset-side.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlays so the text stays readable */}
      <div className="absolute inset-0 bg-night/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="animate-fade-up font-heading text-sm font-bold tracking-[0.35em] text-accent uppercase">
          RC Drift &amp; Racing Store · Nepal
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-4xl leading-tight font-black text-snow uppercase sm:text-5xl lg:text-6xl">
          Built for RC lovers.
          <br />
          <span className="text-gradient">Tuned for drift.</span>
        </h1>
        <p className="animate-fade-up-delay-1 mt-6 max-w-xl text-lg text-snow/80">
          Premium RC drift cars, racing machines, batteries, tyres and spare parts — quality
          checked and delivered across Nepal from our physical store in Kathmandu.
        </p>
        <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="rounded-md bg-primary px-8 py-3.5 font-heading text-base font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_24px_rgba(255,45,55,0.5)]"
          >
            Shop RC Cars
          </Link>
          <Link
            to="/shop?category=rc-drift-cars"
            className="rounded-md border-2 border-snow/40 px-8 py-3.5 font-heading text-base font-bold tracking-widest text-snow uppercase backdrop-blur-sm transition-all hover:border-electric hover:text-electric"
          >
            View Collection
          </Link>
        </div>
        <p className="animate-fade-up-delay-2 mt-8 text-sm text-snow/60">{STORE.deliveryNote}</p>
      </div>
    </section>
  )
}
