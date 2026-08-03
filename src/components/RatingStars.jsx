// Displays a star rating like ★★★★★ 4.8

export default function RatingStars({ rating, showNumber = true }) {
  const fullStars = Math.round(rating)

  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <span className="text-sm tracking-tight text-accent" aria-hidden="true">
        {'★'.repeat(fullStars)}
        <span className="text-line">{'★'.repeat(5 - fullStars)}</span>
      </span>
      {showNumber && <span className="text-xs font-medium text-mist">{rating.toFixed(1)}</span>}
    </span>
  )
}
