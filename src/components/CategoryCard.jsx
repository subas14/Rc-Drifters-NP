import { Link } from 'react-router-dom'

// Clickable category tile shown on the homepage — links to the pre-filtered shop.
export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative block overflow-hidden rounded-lg border border-line bg-steel transition-all duration-300 hover:-translate-y-1 hover:border-accent/70"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-108 group-hover:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 left-0 p-4">
        <h3 className="font-heading text-lg leading-tight font-bold text-snow uppercase">
          {category.name}
        </h3>
        <p className="mt-0.5 text-xs text-mist">{category.tagline}</p>
        <span className="mt-2 inline-block h-0.5 w-8 bg-accent transition-all duration-300 group-hover:w-14" aria-hidden="true" />
      </div>
    </Link>
  )
}
