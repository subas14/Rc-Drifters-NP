import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { PRODUCTS, CATEGORIES } from '../data/products.js'

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-1000', label: 'Under Rs. 1,000', min: 0, max: 999 },
  { id: '1000-3000', label: 'Rs. 1,000 – 3,000', min: 1000, max: 3000 },
  { id: '3000-6000', label: 'Rs. 3,000 – 6,000', min: 3000, max: 6000 },
  { id: 'above-6000', label: 'Above Rs. 6,000', min: 6000, max: Infinity },
]

const SORT_OPTIONS = [
  { id: 'latest', label: 'Latest' },
  { id: 'popular', label: 'Most Popular' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
]

export default function ShopPage() {
  // Category lives in the URL (?category=...) so links from the
  // homepage / footer land on a pre-filtered shop.
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'

  const [search, setSearch] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  function selectCategory(categoryId) {
    if (categoryId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: categoryId })
    }
  }

  // Recompute the visible list whenever a filter changes
  const visibleProducts = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange)
    const query = search.trim().toLowerCase()

    let result = PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory
      const matchesPrice = product.price >= range.min && product.price <= range.max
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query)
      return matchesCategory && matchesPrice && matchesSearch
    })

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        result.sort((a, b) => b.popularity - a.popularity)
        break
      default:
        // 'latest' — newest products first (higher id = newer)
        result.sort((a, b) => b.id - a.id)
    }
    return result
  }, [activeCategory, priceRange, search, sortBy])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Full garage"
        title="Shop All Products"
        subtitle="Filter by category and price, or search for exactly what you need."
      />

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* ---- Filters sidebar ---- */}
        <aside className="space-y-8">
          <div>
            <h3 className="mb-3 font-heading text-sm font-bold tracking-[0.25em] text-snow uppercase">
              Category
            </h3>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              <CategoryFilterButton
                label="All Products"
                active={activeCategory === 'all'}
                onClick={() => selectCategory('all')}
              />
              {CATEGORIES.map((category) => (
                <CategoryFilterButton
                  key={category.id}
                  label={category.name}
                  active={activeCategory === category.id}
                  onClick={() => selectCategory(category.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-sm font-bold tracking-[0.25em] text-snow uppercase">
              Price Range
            </h3>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {PRICE_RANGES.map((range) => (
                <CategoryFilterButton
                  key={range.id}
                  label={range.label}
                  active={priceRange === range.id}
                  onClick={() => setPriceRange(range.id)}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* ---- Products ---- */}
        <div>
          {/* Search + sort toolbar */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative flex-1 sm:max-w-sm">
              <span className="sr-only">Search products</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-mist"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search RC cars, parts…"
                className="w-full rounded-md border border-line bg-steel py-2.5 pr-4 pl-9 text-sm text-snow placeholder:text-mist/60 focus:ring-2 focus:ring-primary/60 focus:outline-none"
              />
            </label>

            <label className="flex items-center gap-2 text-sm text-mist">
              Sort by
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-md border border-line bg-steel px-3 py-2.5 text-sm text-snow focus:ring-2 focus:ring-primary/60 focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mb-4 text-sm text-mist" aria-live="polite">
            {visibleProducts.length} product{visibleProducts.length !== 1 && 's'} found
          </p>

          <ProductGrid products={visibleProducts} />
        </div>
      </div>
    </div>
  )
}

function CategoryFilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3.5 py-2 text-left text-sm font-medium transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'border border-line bg-steel text-mist hover:border-primary/50 hover:text-snow'
      }`}
    >
      {label}
    </button>
  )
}
