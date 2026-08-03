// Consistent section title with a racing-stripe underline.
// kicker = small orange label above the title.

export default function SectionHeading({ kicker, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-10 flex flex-col gap-2 ${alignment}`}>
      {kicker && (
        <span className="font-heading text-sm font-bold tracking-[0.3em] text-accent uppercase">
          {kicker}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-wide text-snow uppercase sm:text-4xl">
        {title}
      </h2>
      <div className="mt-1 flex gap-1.5" aria-hidden="true">
        <span className="h-1 w-10 bg-primary" />
        <span className="h-1 w-4 bg-accent" />
        <span className="h-1 w-2 bg-electric" />
      </div>
      {subtitle && <p className="mt-2 max-w-2xl text-mist">{subtitle}</p>}
    </div>
  )
}
