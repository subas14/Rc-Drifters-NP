# Rc Drifter Np 🏎️

E-commerce website for **Rc Drifter Np** — an RC drift & racing car store in Kathmandu, Nepal.

> Built for RC lovers. Tuned for drift.

## Tech stack

- **React 19 + Vite** — fast dev server and build
- **Tailwind CSS v4** — styling (theme tokens live in `src/index.css`)
- **React Router** — page navigation
- **localStorage** — cart persistence (no backend yet)

## Run it

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
```

## Project structure

```
src/
├── main.jsx              # entry point (router + cart provider)
├── App.jsx               # routes + page layout
├── index.css             # Tailwind + theme colors/fonts
├── data/products.js      # all product & category dummy data
├── context/CartContext.jsx  # cart state, saved to localStorage
├── utils/store.js        # store info, WhatsApp links, price formatting
├── components/           # Navbar, Hero, ProductCard, CheckoutForm, ...
└── pages/                # Home, Shop, ProductDetail, Cart, Checkout, About, Contact
public/images/            # real store photos + hero video + SVG placeholders
```

## Things to update before going live

1. **WhatsApp number** — `src/utils/store.js` → `whatsappNumber` (currently a placeholder).
2. **Phone / location / hours / socials** — same file.
3. **Products & prices** — `src/data/products.js`.

## Easy next steps

- Real backend + admin panel (products are already shaped like API objects)
- Online payments (eSewa / Khalti) — checkout already has the option wired as a placeholder
- Order storage (orders currently confirm via WhatsApp message)
