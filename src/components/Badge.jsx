// Small colored label shown on product cards ("Best Seller", "Hot Deal", ...)

const BADGE_STYLES = {
  'Best Seller': 'bg-primary text-white',
  'New Arrival': 'bg-electric text-night',
  'Limited Stock': 'bg-accent text-night',
  'Hot Deal': 'bg-gradient-to-r from-primary to-accent text-white',
}

export default function Badge({ label }) {
  if (!label) return null
  return (
    <span
      className={`inline-block rounded-sm px-2.5 py-1 font-heading text-xs font-bold tracking-widest uppercase ${
        BADGE_STYLES[label] ?? 'bg-steel text-snow'
      }`}
    >
      {label}
    </span>
  )
}
