import { useState } from 'react'
import { formatPrice, whatsappLink, whatsappOrderMessage, STORE } from '../utils/store.js'
import { getCategoryById } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import Badge from './Badge.jsx'
import RatingStars from './RatingStars.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import { StockLabel } from './ProductCard.jsx'
import { WhatsAppIcon } from './Footer.jsx'

// Full product view: image gallery + info + specs + add-to-cart.
export default function ProductDetails({ product }) {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const { addToCart } = useCart()

  const category = getCategoryById(product.category)
  const outOfStock = product.stock === 'out-of-stock'

  function handleAddToCart() {
    addToCart(product, quantity)
    // Quick "Added!" feedback on the button
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* ---- Image gallery ---- */}
      <div>
        <div className="overflow-hidden rounded-lg border border-line bg-steel">
          <img
            src={product.gallery[activeImage]}
            alt={`${product.name} — photo ${activeImage + 1}`}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        {product.gallery.length > 1 && (
          <div className="mt-3 flex gap-3">
            {product.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show photo ${index + 1}`}
                className={`overflow-hidden rounded-md border-2 transition-colors ${
                  index === activeImage ? 'border-primary' : 'border-line hover:border-mist'
                }`}
              >
                <img src={image} alt="" className="h-16 w-20 object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ---- Product info ---- */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          {product.badge && <Badge label={product.badge} />}
          <span className="text-xs font-medium tracking-wider text-mist uppercase">
            {category?.name}
          </span>
        </div>

        <h1 className="mt-3 font-heading text-3xl font-bold text-snow sm:text-4xl">
          {product.name}
        </h1>

        <div className="mt-2">
          <RatingStars rating={product.rating} />
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-heading text-3xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-lg text-mist line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <div className="mt-1">
          <StockLabel stock={product.stock} />
        </div>

        <p className="mt-5 leading-relaxed text-mist">{product.description}</p>

        {/* Quantity + actions */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <QuantitySelector quantity={quantity} onChange={(q) => setQuantity(Math.max(1, q))} />
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={outOfStock}
            className="rounded-md bg-primary px-8 py-3 font-heading text-base font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(255,45,55,0.5)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {justAdded ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>

        <a
          href={whatsappLink(whatsappOrderMessage(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-3 font-heading text-base font-bold tracking-widest text-night uppercase transition-transform hover:scale-[1.02]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order via WhatsApp
        </a>

        <p className="mt-4 rounded-md border border-line bg-steel px-4 py-3 text-sm text-mist">
          🚚 {STORE.deliveryNote}
        </p>

        {/* Key specs */}
        <div className="mt-8">
          <h2 className="font-heading text-xl font-bold tracking-wide text-snow uppercase">
            Key Specs
          </h2>
          <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-4 border-b border-line/60 py-2 text-sm"
              >
                <dt className="text-mist">{spec.label}</dt>
                <dd className="text-right font-medium text-snow">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* What's included */}
        <div className="mt-8">
          <h2 className="font-heading text-xl font-bold tracking-wide text-snow uppercase">
            What's Included
          </h2>
          <ul className="mt-3 space-y-1.5">
            {product.included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-mist">
                <span className="text-emerald-400" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
