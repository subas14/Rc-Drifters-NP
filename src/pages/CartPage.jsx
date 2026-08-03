import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import CartItem from '../components/CartItem.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice, DELIVERY_OPTIONS, STORE } from '../utils/store.js'

export default function CartPage() {
  const { items, subtotal, deliveryCharge, deliveryId, setDeliveryId, total, clearCart } =
    useCart()

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="text-6xl" role="img" aria-label="Racing car">🏎️</span>
        <h1 className="mt-4 font-heading text-3xl font-bold text-snow uppercase">
          Your cart is empty
        </h1>
        <p className="mt-2 text-mist">The garage is full of machines waiting for you.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block rounded-md bg-primary px-8 py-3.5 font-heading font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark"
        >
          Shop RC Cars
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading kicker="Almost there" title="Your Cart" />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Cart items */}
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-mist underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Clear entire cart
          </button>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-lg border border-line bg-steel p-6">
          <h2 className="font-heading text-xl font-bold tracking-wide text-snow uppercase">
            Order Summary
          </h2>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-mist">Subtotal</dt>
              <dd className="font-medium text-snow">{formatPrice(subtotal)}</dd>
            </div>

            {/* Delivery charge selector */}
            <div>
              <dt className="mb-1.5 text-mist">Delivery</dt>
              <dd>
                <select
                  value={deliveryId}
                  onChange={(event) => setDeliveryId(event.target.value)}
                  aria-label="Delivery option"
                  className="w-full rounded-md border border-line bg-night px-3 py-2.5 text-sm text-snow focus:ring-2 focus:ring-primary/60 focus:outline-none"
                >
                  {DELIVERY_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label} — {option.charge === 0 ? 'Free' : formatPrice(option.charge)}
                    </option>
                  ))}
                </select>
              </dd>
            </div>

            <div className="flex justify-between">
              <dt className="text-mist">Delivery charge</dt>
              <dd className="font-medium text-snow">
                {deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)}
              </dd>
            </div>

            <div className="flex justify-between border-t border-line pt-3 text-base">
              <dt className="font-heading font-bold text-snow uppercase">Total</dt>
              <dd className="font-heading text-xl font-bold text-primary">{formatPrice(total)}</dd>
            </div>
          </dl>

          <Link
            to="/checkout"
            className="mt-6 block rounded-md bg-primary px-8 py-3.5 text-center font-heading font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(255,45,55,0.5)]"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-mist transition-colors hover:text-primary"
          >
            ← Continue shopping
          </Link>

          <p className="mt-5 border-t border-line pt-4 text-xs text-mist">🚚 {STORE.deliveryNote}</p>
        </aside>
      </div>
    </div>
  )
}
