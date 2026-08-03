import { createContext, useContext, useEffect, useState } from 'react'
import { DELIVERY_OPTIONS } from '../utils/store.js'

// Cart state lives here and is saved to localStorage,
// so the cart survives page refreshes.

const CartContext = createContext(null)
const STORAGE_KEY = 'rc-drifter-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  // items: [{ product, quantity }]
  const [items, setItems] = useState(loadCart)
  // Selected delivery option id ('valley' | 'outside' | 'pickup')
  const [deliveryId, setDeliveryId] = useState(DELIVERY_OPTIONS[0].id)

  // Save to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addToCart(product, quantity = 1) {
    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      if (existing) {
        // Already in cart -> just bump the quantity
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { product, quantity }]
    })
  }

  function removeFromCart(productId) {
    setItems((current) => current.filter((item) => item.product.id !== productId))
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) return removeFromCart(productId)
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const delivery = DELIVERY_OPTIONS.find((option) => option.id === deliveryId)
  const deliveryCharge = items.length > 0 ? delivery.charge : 0
  const total = subtotal + deliveryCharge

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    delivery,
    deliveryCharge,
    deliveryId,
    setDeliveryId,
    total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/** Hook to read/update the cart from any component */
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside <CartProvider>')
  return context
}
