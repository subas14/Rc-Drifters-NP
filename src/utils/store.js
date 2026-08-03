// Store-wide constants and small helpers.
// Update the phone number / socials here once and the whole site follows.

export const STORE = {
  name: 'Rc Drifter Np',
  slogan: 'Built for RC lovers. Tuned for drift.',
  // Primary contact numbers (WhatsApp number uses country code, no +)
  whatsappNumber: '9779847048096',
  phoneDisplay: '+977 9847048096',
  location: 'Kathmandu, Nepal (exact location coming soon)',
  hours: 'Sun – Fri: 10 AM – 7 PM · Sat: 11 AM – 5 PM',
  deliveryNote:
    'Delivery available inside Kathmandu Valley. Outside valley delivery available on request.',
  socials: {
    facebook: 'https://www.facebook.com/rc_drifters_np',
    instagram: 'https://www.instagram.com/rc_drifters_np',
    tiktok: 'https://www.tiktok.com/@rc_drifters_np',
  },
}

// Delivery choices shown in the cart and at checkout
export const DELIVERY_OPTIONS = [
  { id: 'valley', label: 'Inside Kathmandu Valley', charge: 100 },
  { id: 'outside', label: 'Outside Valley (on request)', charge: 250 },
  { id: 'pickup', label: 'Pick up from store (free)', charge: 0 },
]

/** Format a number as Nepali Rupees, e.g. 3499 -> "Rs. 3,499" */
export function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString('en-US')}`
}

/** Build a wa.me link that opens WhatsApp with a pre-filled message */
export function whatsappLink(message) {
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Standard order message for a single product */
export function whatsappOrderMessage(productName) {
  return `Hello ${STORE.name}, I want to order ${productName}.`
}
