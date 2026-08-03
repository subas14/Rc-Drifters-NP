import { useState } from 'react'

const PAYMENT_METHODS = [
  {
    id: 'cod',
    name: 'Cash on Delivery',
    note: 'Pay when your order arrives. Available inside Kathmandu Valley.',
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    note: 'We will share our bank details on WhatsApp after you place the order.',
  },
  {
    id: 'wallet',
    name: 'eSewa / Khalti',
    note: 'Online wallet payment — details shared after you place the order.',
  },
]

// Customer details + payment method form.
// Calls onSubmit(formData) once everything validates.
export default function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    payment: 'cod',
  })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your full name.'
    if (!/^(\+?977)?[ -]?9\d{9}$/.test(form.phone.trim().replace(/[ -]/g, ''))) {
      newErrors.phone = 'Please enter a valid Nepali mobile number (98XXXXXXXX).'
    }
    if (!form.address.trim()) newErrors.address = 'Please enter your delivery address.'
    if (!form.city.trim()) newErrors.city = 'Please enter your city.'
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      onSubmit(form)
    }
  }

  const paymentName = PAYMENT_METHODS.find((m) => m.id === form.payment)?.name

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Full Name *" error={errors.name}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Suman Shrestha"
          autoComplete="name"
          className={inputClass(errors.name)}
        />
      </Field>

      <Field label="Phone Number *" error={errors.phone}>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
          autoComplete="tel"
          className={inputClass(errors.phone)}
        />
      </Field>

      <Field label="Delivery Address *" error={errors.address}>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Street, tole, landmark"
          autoComplete="street-address"
          className={inputClass(errors.address)}
        />
      </Field>

      <Field label="City *" error={errors.city}>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="e.g. Kathmandu, Lalitpur, Pokhara"
          className={inputClass(errors.city)}
        />
      </Field>

      <Field label="Order Notes (optional)">
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Colour preference, delivery time, anything we should know…"
          className={inputClass()}
        />
      </Field>

      {/* Payment methods */}
      <fieldset>
        <legend className="mb-3 font-heading text-sm font-bold tracking-[0.2em] text-snow uppercase">
          Payment Method
        </legend>
        <div className="space-y-3">
          {PAYMENT_METHODS.map((method) => (
            <label
              key={method.id}
              className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 transition-colors ${
                form.payment === method.id
                  ? 'border-primary bg-primary/10'
                  : 'border-line bg-night hover:border-mist'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={form.payment === method.id}
                onChange={handleChange}
                className="mt-1 accent-[#ff2d37]"
              />
              <span>
                <span className="block font-heading font-bold text-snow">{method.name}</span>
                <span className="block text-sm text-mist">{method.note}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-md bg-primary px-8 py-4 font-heading text-lg font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(255,45,55,0.5)]"
      >
        Confirm Order — {paymentName}
      </button>
    </form>
  )
}

// -- Small helpers to keep the form JSX tidy --

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block font-heading text-sm font-bold tracking-[0.2em] text-snow uppercase">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-primary">{error}</p>}
    </div>
  )
}

function inputClass(hasError) {
  return `w-full rounded-md border bg-night px-4 py-3 text-snow placeholder:text-mist/60 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
    hasError ? 'border-primary' : 'border-line'
  }`
}
