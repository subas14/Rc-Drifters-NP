// The four reasons to buy from us — shown on home, product and about pages.

const TRUST_ITEMS = [
  {
    title: 'Physical Store in Nepal',
    text: 'A real shop in Kathmandu you can visit — not just a page on the internet.',
    icon: (
      <path d="M3 9.5 12 3l9 6.5M5 10v10h14V10M9 20v-6h6v6" />
    ),
  },
  {
    title: 'Quality Checked Products',
    text: 'Every car is tested by us before it goes out. No dead-on-arrival surprises.',
    icon: (
      <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3ZM8.5 12l2.5 2.5 4.5-5" />
    ),
  },
  {
    title: 'Spare Parts Available',
    text: 'Motors, tyres, batteries, rims — we stock the parts to keep you drifting.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.2-1.6l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2.8-1.6L13 2h-4l-.6 2.8a7 7 0 0 0-2.8 1.6l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .5.1 1.1.2 1.6l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2.8 1.6L11 22h4l.6-2.8a7 7 0 0 0 2.8-1.6l2.4 1 2-3.4-2-1.6c.1-.5.2-1.1.2-1.6Z" />
      </>
    ),
  },
  {
    title: 'WhatsApp Support',
    text: 'Questions before or after buying? Message us — we actually reply.',
    icon: (
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5ZM8.5 10h.01M12 10h.01M15.5 10h.01" />
    ),
  },
]

export default function TrustBadges() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TRUST_ITEMS.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border border-line bg-steel p-6 transition-colors hover:border-electric/50"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-night text-electric">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {item.icon}
            </svg>
          </span>
          <h3 className="mt-4 font-heading text-lg font-bold text-snow">{item.title}</h3>
          <p className="mt-1 text-sm text-mist">{item.text}</p>
        </div>
      ))}
    </div>
  )
}
