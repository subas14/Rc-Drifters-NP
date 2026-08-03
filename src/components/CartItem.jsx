import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/store.js'
import { useCart } from '../context/CartContext.jsx'
import QuantitySelector from './QuantitySelector.jsx'

// One row in the cart: image, name, quantity stepper, line total, remove.
export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const { product, quantity } = item

  return (
    <div className="flex gap-4 rounded-lg border border-line bg-steel p-4">
      <Link to={`/product/${product.id}`} className="shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-20 w-24 rounded-md object-cover sm:h-24 sm:w-32"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <Link
            to={`/product/${product.id}`}
            className="font-heading text-base font-bold text-snow transition-colors hover:text-primary sm:text-lg"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-sm text-mist">{formatPrice(product.price)} each</p>
        </div>

        <div className="flex items-center gap-4">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQuantity) => updateQuantity(product.id, newQuantity)}
            small
          />
          <span className="w-24 text-right font-heading text-lg font-bold text-primary">
            {formatPrice(product.price * quantity)}
          </span>
          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            aria-label={`Remove ${product.name} from cart`}
            className="flex h-8 w-8 items-center justify-center rounded-md text-mist transition-colors hover:bg-primary/15 hover:text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
