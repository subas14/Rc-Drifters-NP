import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-display text-7xl font-black text-primary">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-snow uppercase">
        You drifted off the track
      </h1>
      <p className="mt-2 text-mist">This page doesn't exist — let's get you back to the garage.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-md bg-primary px-8 py-3.5 font-heading font-bold tracking-widest text-white uppercase transition-all hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </div>
  )
}
