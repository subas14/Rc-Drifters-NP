// − / + quantity stepper used in the cart and on the product page.
export default function QuantitySelector({ quantity, onChange, small = false }) {
  const buttonClass = `flex items-center justify-center font-bold text-snow transition-colors hover:bg-line ${
    small ? 'h-8 w-8 text-sm' : 'h-10 w-10'
  }`

  return (
    <div className="inline-flex items-center overflow-hidden rounded-md border border-line bg-night">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        className={buttonClass}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className={`flex items-center justify-center font-heading font-bold text-snow ${
          small ? 'h-8 w-10 text-sm' : 'h-10 w-12'
        }`}
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className={buttonClass}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
