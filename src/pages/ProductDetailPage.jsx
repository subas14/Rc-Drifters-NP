import { Link, useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { getProductById, getRelatedProducts } from '../data/products.js'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)

  // Unknown id -> friendly message instead of a crash
  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-snow">Product not found</h1>
        <p className="mt-2 text-mist">It may have been sold out or removed.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-md bg-primary px-8 py-3 font-heading font-bold tracking-widest text-white uppercase"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-mist" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span className="text-snow">{product.name}</span>
      </nav>

      <ProductDetails product={product} />

      {/* Related products */}
      <div className="mt-20">
        <SectionHeading kicker="Keep browsing" title="You Might Also Like" />
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  )
}
