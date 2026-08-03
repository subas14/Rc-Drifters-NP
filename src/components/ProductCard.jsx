import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/store.js'
import { getCategoryById } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import Badge from './Badge.jsx'
import RatingStars from './RatingStars.jsx'

// Premium product card with hover lift + image zoom.
export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const category = getCategoryById(product.category)
  const outOfStock = product.stock === 'out-of-stock'

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-steel transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
      {/* Image — whole card links to the detail page */}
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-graphite"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge label={product.badge} />
          </div>
        )}
        {product.oldPrice && (
          <span className="absolute top-3 right-3 rounded-sm bg-night/80 px-2 py-1 text-xs font-bold text-accent">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium tracking-wider text-mist uppercase">
            {category?.name}
          </span>
          <RatingStars rating={product.rating} />
        </div>

        <h3 className="font-heading text-lg leading-snug font-bold text-snow">
          <Link to={`/product/${product.id}`} className="transition-colors hover:text-primary">
            {product.name}
          </Link>
        </h3>

        <p className="line-clamp-2 text-sm text-mist">{product.shortDescription}</p>

        {/* Price + stock */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-mist line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            <StockLabel stock={product.stock} />
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={outOfStock}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white transition-all hover:bg-primary-dark hover:shadow-[0_0_16px_rgba(255,45,55,0.5)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              <path d="M12 8v6M9 11h6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export function StockLabel({ stock }) {
  if (stock === 'low-stock') {
    return <span className="text-xs font-semibold text-accent">Only a few left!</span>
  }
  if (stock === 'out-of-stock') {
    return <span className="text-xs font-semibold text-mist">Out of stock</span>
  }
  return <span className="text-xs font-semibold text-emerald-400">In stock</span>
}
