import ProductCard from './ProductCard.jsx'

// Responsive grid of product cards: 1 col on phones -> 4 on large screens.
export default function ProductGrid({ products, emptyMessage = 'No products found.' }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line bg-steel/50 py-16 text-center">
        <p className="font-heading text-lg font-bold text-mist">{emptyMessage}</p>
        <p className="mt-1 text-sm text-mist">Try a different category, price range or search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
