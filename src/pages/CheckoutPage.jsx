import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import CheckoutForm from '../components/CheckoutForm.jsx'
import { WhatsAppIcon } from '../components/Footer.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice, whatsappLink, STORE } from '../utils/store.js'

export default function CheckoutPage() {
  const { items, subtotal, delivery, deliveryCharge, total, clearCart } = useCart()
  // After a successful order we keep a snapshot to show the confirmation
  const [confirmedOrder, setConfirmedOrder] = useState(null)

  // No items and no confirmed order -> nothing to check out
  if (items.length === 0 && !confirmedOrder) {
    return <Navigate to="/cart" replace />
  }

  function handleOrderSubmit(customer) {
    // There is no backend yet, so "placing the order" means:
    // 1. snapshot the order, 2. clear the cart, 3. show confirmation
    // with a pre-filled WhatsApp message the customer can send us.
    const orderLines = items
      .map(
        (item) =>
          `- ${item.product.name} x${item.quantity} (${formatPrice(
            item.product.price * item.quantity
          )})`
      )
      .join('\n')

    const message =
      `Hello ${STORE.name}, I want to place an order:\n\n${orderLines}\n\n` +
      `Delivery: ${delivery.label} (${deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)})\n` +
      `Total: ${formatPrice(total)}\n\n` +
      `Name: ${customer.name}\nPhone: ${customer.phone}\n` +
      `Address: ${customer.address}, ${customer.city}\n` +
      `Payment: ${paymentLabel(customer.payment)}` +
      (customer.notes ? `\nNotes: ${customer.notes}` : '')

    setConfirmedOrder({ customer, message, total })
    clearCart()
    window.scrollTo(0, 0)
  }

  // ---- Confirmation screen ----
  if (confirmedOrder) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-3xl text-emerald-400">
          ✓
        </span>
        <h1 className="mt-5 font-heading text-3xl font-bold text-snow uppercase sm:text-4xl">
          Order received!
        </h1>
        <p className="mt-3 text-mist">
          Thank you, <span className="font-semibold text-snow">{confirmedOrder.customer.name}</span>!
          Your order of <span className="font-semibold text-primary">{formatPrice(confirmedOrder.total)}</span> has
          been recorded. To confirm it instantly, send us the order summary on WhatsApp — we'll
          reply with delivery details.
        </p>
        <a
          href={whatsappLink(confirmedOrder.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 font-heading text-lg font-bold tracking-widest text-night uppercase transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Confirm on WhatsApp
        </a>
        <p className="mt-4 text-sm text-mist">
          Or call us at {STORE.phoneDisplay} — {STORE.hours}
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block text-sm text-mist underline-offset-4 hover:text-primary hover:underline"
        >
          ← Back to shop
        </Link>
      </div>
    )
  }

  // ---- Checkout form + summary ----
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading kicker="Final lap" title="Checkout" />

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="rounded-lg border border-line bg-steel p-6 sm:p-8">
          <CheckoutForm onSubmit={handleOrderSubmit} />
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-lg border border-line bg-steel p-6">
          <h2 className="font-heading text-xl font-bold tracking-wide text-snow uppercase">
            Your Order
          </h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item.product.id} className="flex items-center gap-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-12 w-14 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-snow">{item.product.name}</p>
                  <p className="text-xs text-mist">Qty: {item.quantity}</p>
                </div>
                <span className="text-sm font-semibold text-snow">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-mist">Subtotal</dt>
              <dd className="text-snow">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mist">Delivery ({delivery.label})</dt>
              <dd className="text-snow">
                {deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3 text-base">
              <dt className="font-heading font-bold text-snow uppercase">Total</dt>
              <dd className="font-heading text-xl font-bold text-primary">{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-5 text-xs text-mist">🚚 {STORE.deliveryNote}</p>
        </aside>
      </div>
    </div>
  )
}

function paymentLabel(paymentId) {
  return { cod: 'Cash on Delivery', bank: 'Bank Transfer', wallet: 'eSewa / Khalti' }[paymentId]
}
