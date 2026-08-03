// Dummy local product data — replace with a real backend/API later.
// stock: 'in-stock' | 'low-stock' | 'out-of-stock'
// badge: 'Best Seller' | 'New Arrival' | 'Limited Stock' | 'Hot Deal' | null

export const CATEGORIES = [
  {
    id: 'rc-drift-cars',
    name: 'RC Drift Cars',
    image: '/images/street-shot.jpg',
    tagline: 'Sideways is the only way',
  },
  {
    id: 'rc-racing-cars',
    name: 'RC Racing Cars',
    image: '/images/red-glow.jpg',
    tagline: 'Built for pure speed',
  },
  {
    id: 'batteries',
    name: 'Batteries',
    image: '/images/placeholders/battery.svg',
    tagline: 'Power that lasts',
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts',
    image: '/images/placeholders/motor.svg',
    tagline: 'Keep your machine alive',
  },
  {
    id: 'tyres-wheels',
    name: 'Tyres & Wheels',
    image: '/images/placeholders/tyres.svg',
    tagline: 'Grip or slip — your call',
  },
  {
    id: 'controllers',
    name: 'Controllers',
    image: '/images/placeholders/controller.svg',
    tagline: 'Precision in your hands',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: '/images/placeholders/cones.svg',
    tagline: 'Complete your setup',
  },
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'Porsche 993 GT2 RC Drift Car (1:24)',
    category: 'rc-drift-cars',
    price: 3199,
    oldPrice: 4299,
    image: '/images/street-shot.jpg',
    gallery: ['/images/street-shot.jpg', '/images/sunset-side.jpg', '/images/night-rooftop.jpg'],
    rating: 4.9,
    stock: 'in-stock',
    badge: 'Best Seller',
    popularity: 98,
    shortDescription:
      'Our signature 1:24 drift machine with working LED headlights and a widebody 993 shell.',
    description:
      'The car that made Rc Drifter Np famous. This 1:24 scale Porsche 993 GT2 replica comes with a widebody kit, a huge rear wing and working LED headlights for night sessions. Fitted with slick drift tyres out of the box, it slides smoothly on tiles, wooden floors and smooth concrete. Perfect first drift car — and a favourite of collectors too.',
    specs: [
      { label: 'Scale', value: '1:24' },
      { label: 'Drive', value: 'RWD drift setup' },
      { label: 'Remote', value: '2.4GHz, ~30m range' },
      { label: 'Battery', value: 'Rechargeable Li-ion (USB)' },
      { label: 'Run time', value: '20–25 minutes' },
      { label: 'Lights', value: 'Working LED headlights' },
    ],
    included: ['RC drift car', '2.4GHz controller', 'Rechargeable battery', 'USB charging cable', 'Spare drift tyres'],
  },
  {
    id: 2,
    name: '1:18 High Speed RC Racing Car',
    category: 'rc-racing-cars',
    price: 4999,
    oldPrice: 5999,
    image: '/images/red-glow.jpg',
    gallery: ['/images/red-glow.jpg', '/images/racing-poster.jpg', '/images/sunset-side.jpg'],
    rating: 4.8,
    stock: 'in-stock',
    badge: 'Hot Deal',
    popularity: 92,
    shortDescription:
      'A 1:18 speed monster tuned for straight-line pace and tight cornering.',
    description:
      'Built to perform. This 1:18 scale racing sports car is tuned for speed with a responsive throttle, tight steering and a stable low stance. High-grip tyres keep it planted through corners, and the durable shell survives the occasional wall tap. For racers who want to feel the thrill and own the legend.',
    specs: [
      { label: 'Scale', value: '1:18' },
      { label: 'Top speed', value: '~25 km/h' },
      { label: 'Remote', value: '2.4GHz, ~40m range' },
      { label: 'Battery', value: 'Rechargeable pack included' },
      { label: 'Run time', value: '15–20 minutes' },
      { label: 'Build', value: 'Impact-resistant shell' },
    ],
    included: ['RC racing car', '2.4GHz controller', 'Rechargeable battery', 'USB charging cable'],
  },
  {
    id: 3,
    name: 'Premium RC Drift Combo Kit',
    category: 'rc-drift-cars',
    price: 3199,
    oldPrice: 9499,
    image: '/images/combo-kit.jpg',
    gallery: ['/images/combo-kit.jpg', '/images/street-shot.jpg', '/images/porsche-993-poster.jpg'],
    rating: 5.0,
    stock: 'low-stock',
    badge: 'Limited Stock',
    popularity: 95,
    shortDescription:
      'Everything in one box: drift car, controller, battery, 8 spare wheels and a full cone track.',
    description:
      'The complete drift package. You get the widebody 993 drift car, pistol-grip 2.4GHz controller, rechargeable battery with USB charger, 8 spare wheels (drift + grip), and a full set of track cones to build your own course at home. The best-value way to start drifting seriously — nothing else to buy.',
    specs: [
      { label: 'Scale', value: '1:24' },
      { label: 'Wheels', value: '8 spare (drift + grip)' },
      { label: 'Remote', value: 'Pistol-grip 2.4GHz' },
      { label: 'Battery', value: 'Rechargeable Li-ion (USB)' },
      { label: 'Track', value: '10+ mini cones included' },
      { label: 'Extras', value: 'Decals + barrier tape' },
    ],
    included: [
      'RC drift car',
      'Pistol-grip 2.4GHz controller',
      'Rechargeable battery + USB cable',
      '8 spare wheels (drift & grip)',
      'Drift track cone set',
      'Decals and barrier tape',
    ],
  },
  {
    id: 4,
    name: 'Porsche 993 GT2 Brushless Drift Edition',
    category: 'rc-drift-cars',
    price: 3199,
    oldPrice: null,
    image: '/images/porsche-993-poster.jpg',
    gallery: ['/images/porsche-993-poster.jpg', '/images/neon-poster.jpg', '/images/street-shot.jpg'],
    rating: 4.9,
    stock: 'in-stock',
    badge: 'New Arrival',
    popularity: 88,
    shortDescription:
      'Flagship brushless-power 993 GT2 with real drift tyres — our most serious machine.',
    description:
      'The flagship of our garage. Brushless power means faster response, more torque and longer motor life. Combined with proper drift tyres and a balanced chassis, this 993 GT2 holds long, controlled slides that look incredible on video. For drifters who have outgrown beginner cars.',
    specs: [
      { label: 'Scale', value: '1:24' },
      { label: 'Motor', value: 'Brushless' },
      { label: 'Remote', value: '2.4GHz, ~50m range' },
      { label: 'Battery', value: 'Rechargeable Li-ion (USB)' },
      { label: 'Tyres', value: 'Dedicated drift compound' },
      { label: 'Lights', value: 'Working LED headlights' },
    ],
    included: ['Brushless RC drift car', '2.4GHz controller', 'Rechargeable battery', 'USB charging cable', 'Drift tyre set'],
  },
  {
    id: 5,
    name: 'Desktop Mini RC Drift Car',
    category: 'rc-drift-cars',
    price: 2999,
    oldPrice: 3499,
    image: '/images/desktop-drift-poster.jpg',
    gallery: ['/images/desktop-drift-poster.jpg', '/images/mini-duo.jpg'],
    rating: 4.7,
    stock: 'in-stock',
    badge: 'New Arrival',
    popularity: 85,
    shortDescription:
      'Mini machine, maximum drift — slide it right on your desk or table.',
    description:
      'Precision, style, drift — shrunk down to desktop size. This mini drifter is small enough to run on your desk, table or any smooth surface, with surprisingly precise control and smooth, repeatable slides. The perfect office toy and an amazing gift for any car lover.',
    specs: [
      { label: 'Scale', value: 'Mini (palm-size)' },
      { label: 'Drive', value: 'RWD drift setup' },
      { label: 'Remote', value: '2.4GHz compact' },
      { label: 'Battery', value: 'Built-in rechargeable (USB)' },
      { label: 'Run time', value: '15–20 minutes' },
      { label: 'Surface', value: 'Desk / tile / wood' },
    ],
    included: ['Mini RC drift car', 'Compact controller', 'USB charging cable'],
  },
  {
    id: 6,
    name: 'Mini RC Sports Car',
    category: 'rc-racing-cars',
    price: 2499,
    oldPrice: null,
    image: '/images/mini-duo.jpg',
    gallery: ['/images/mini-duo.jpg', '/images/desktop-drift-poster.jpg'],
    rating: 4.6,
    stock: 'in-stock',
    badge: null,
    popularity: 80,
    shortDescription:
      'Metallic-finish mini sports car — available in candy red and midnight blue.',
    description:
      'A pocket rocket with a premium metallic paint finish, available in candy red or midnight blue. Quick, nimble and tough, it is ideal for younger drivers and casual fun, while the detailed body and rear wing keep collectors happy. Grab both colours and race a friend.',
    specs: [
      { label: 'Scale', value: 'Mini (1:43 approx.)' },
      { label: 'Colours', value: 'Candy Red / Midnight Blue' },
      { label: 'Remote', value: '2.4GHz compact' },
      { label: 'Battery', value: 'Built-in rechargeable (USB)' },
      { label: 'Run time', value: '15 minutes' },
      { label: 'Finish', value: 'Metallic paint + decals' },
    ],
    included: ['Mini RC sports car (1 colour)', 'Compact controller', 'USB charging cable'],
  },
  {
    id: 7,
    name: 'Classic Green Striped RC Drifter',
    category: 'rc-drift-cars',
    price: 3299,
    oldPrice: null,
    image: '/images/green-drifter.jpg',
    gallery: ['/images/green-drifter.jpg'],
    rating: 4.5,
    stock: 'low-stock',
    badge: 'Limited Stock',
    popularity: 72,
    shortDescription:
      'Retro racing-green body with white stripes — a collector favourite drifter.',
    description:
      'Old-school looks, modern drift hardware. The classic racing-green paint with twin white stripes turns heads, and underneath it runs the same smooth RWD drift setup as our black 993. Limited units per shipment — when it is gone, it is gone.',
    specs: [
      { label: 'Scale', value: '1:24' },
      { label: 'Drive', value: 'RWD drift setup' },
      { label: 'Remote', value: '2.4GHz, ~30m range' },
      { label: 'Battery', value: 'Rechargeable Li-ion (USB)' },
      { label: 'Run time', value: '20 minutes' },
      { label: 'Body', value: 'Retro green + white stripes' },
    ],
    included: ['RC drift car', '2.4GHz controller', 'Rechargeable battery', 'USB charging cable'],
  },
  {
    id: 8,
    name: 'Rechargeable RC Battery Pack',
    category: 'batteries',
    price: 899,
    oldPrice: 1099,
    image: '/images/placeholders/battery.svg',
    gallery: ['/images/placeholders/battery.svg'],
    rating: 4.7,
    stock: 'in-stock',
    badge: 'Best Seller',
    popularity: 90,
    shortDescription:
      'Spare Li-ion pack so the session never has to stop — fits most 1:24 RC cars.',
    description:
      'Double your drive time. This rechargeable Li-ion pack fits most 1:24 scale RC drift and racing cars we sell (and many others with the standard connector). Charge one while you drive the other and keep the session going. Quality cells, protected circuit, tested before shipping.',
    specs: [
      { label: 'Type', value: 'Li-ion rechargeable' },
      { label: 'Capacity', value: '700mAh' },
      { label: 'Voltage', value: '7.4V' },
      { label: 'Connector', value: 'Standard JST' },
      { label: 'Charge time', value: '~90 minutes' },
      { label: 'Fits', value: 'Most 1:24 RC cars' },
    ],
    included: ['Battery pack', 'Safety instructions card'],
  },
  {
    id: 9,
    name: 'Drift Tyre Set (4 pcs)',
    category: 'tyres-wheels',
    price: 699,
    oldPrice: null,
    image: '/images/placeholders/tyres.svg',
    gallery: ['/images/placeholders/tyres.svg'],
    rating: 4.8,
    stock: 'in-stock',
    badge: 'Best Seller',
    popularity: 89,
    shortDescription:
      'Hard-compound slicks that turn any RC car into a drift machine.',
    description:
      'The cheapest upgrade with the biggest effect. Swap these hard-compound slicks onto your RC car and it will slide beautifully on tiles, wood and smooth concrete. Sold as a set of four, sized for the 1:24 cars in our garage. Drift tyres wear — grab a spare set and never miss a session.',
    specs: [
      { label: 'Quantity', value: '4 tyres' },
      { label: 'Compound', value: 'Hard (drift slick)' },
      { label: 'Fits', value: '1:24 scale rims' },
      { label: 'Surface', value: 'Tile / wood / concrete' },
    ],
    included: ['4× drift tyres'],
  },
  {
    id: 10,
    name: '2.4GHz RC Car Controller',
    category: 'controllers',
    price: 1499,
    oldPrice: 1799,
    image: '/images/placeholders/controller.svg',
    gallery: ['/images/placeholders/controller.svg'],
    rating: 4.6,
    stock: 'in-stock',
    badge: null,
    popularity: 75,
    shortDescription:
      'Pistol-grip replacement transmitter with smooth throttle and steering trim.',
    description:
      'Lost or broke your transmitter? This pistol-grip 2.4GHz controller pairs with the RC cars we sell and gives you smooth proportional throttle plus steering trim adjustment. Comfortable grip for long sessions, solid ~40m range, and no interference even with several cars running together.',
    specs: [
      { label: 'Frequency', value: '2.4GHz' },
      { label: 'Range', value: '~40m' },
      { label: 'Style', value: 'Pistol grip' },
      { label: 'Power', value: '2× AA batteries' },
      { label: 'Extras', value: 'Steering trim dial' },
    ],
    included: ['Controller (transmitter)', 'Pairing instructions'],
  },
  {
    id: 11,
    name: 'Off-Road RC Truck',
    category: 'rc-racing-cars',
    price: 5999,
    oldPrice: 6999,
    image: '/images/placeholders/truck.svg',
    gallery: ['/images/placeholders/truck.svg'],
    rating: 4.5,
    stock: 'in-stock',
    badge: 'Hot Deal',
    popularity: 78,
    shortDescription:
      'Big wheels, big suspension — built for gravel, grass and Nepali terrain.',
    description:
      'Not every road in Nepal is smooth — this truck does not care. Oversized wheels, real working suspension and a high-torque motor let it climb gravel, grass and dirt without complaint. Water-resistant electronics handle light splashes. The go-anywhere machine of our lineup.',
    specs: [
      { label: 'Scale', value: '1:16' },
      { label: 'Drive', value: '4WD' },
      { label: 'Suspension', value: 'Independent, oil-damped' },
      { label: 'Remote', value: '2.4GHz, ~50m range' },
      { label: 'Battery', value: 'Rechargeable pack included' },
      { label: 'Terrain', value: 'Gravel / grass / dirt' },
    ],
    included: ['Off-road RC truck', '2.4GHz controller', 'Rechargeable battery', 'USB charging cable'],
  },
  {
    id: 12,
    name: 'RC Car LED Light Kit',
    category: 'accessories',
    price: 599,
    oldPrice: 799,
    image: '/images/night-rooftop.jpg',
    gallery: ['/images/night-rooftop.jpg', '/images/street-shot.jpg'],
    rating: 4.7,
    stock: 'in-stock',
    badge: 'Hot Deal',
    popularity: 83,
    shortDescription:
      'Ultra-bright LED headlight kit for night drift sessions — as seen in our photos.',
    description:
      'Night sessions hit different. This plug-in LED kit adds ultra-bright headlights and red tail lights to your RC car — the same setup used in our rooftop night shoots over Kathmandu. Simple installation with included wiring, powered straight from the car battery.',
    specs: [
      { label: 'LEDs', value: '2× white + 2× red' },
      { label: 'Power', value: 'From car battery' },
      { label: 'Install', value: 'Plug-in, ~10 minutes' },
      { label: 'Fits', value: 'Most 1:24 / 1:18 bodies' },
    ],
    included: ['LED set with wiring', 'Mounting tape', 'Install guide'],
  },
  {
    id: 13,
    name: 'RC Spare Motor',
    category: 'spare-parts',
    price: 1299,
    oldPrice: null,
    image: '/images/placeholders/motor.svg',
    gallery: ['/images/placeholders/motor.svg'],
    rating: 4.6,
    stock: 'in-stock',
    badge: null,
    popularity: 65,
    shortDescription:
      'Direct-replacement brushed motor for our 1:24 drift and racing cars.',
    description:
      'Motors wear out — your car should not retire with them. This is a direct-replacement brushed motor for the 1:24 drift and racing cars we stock, with the pinion pre-fitted. Swap it in with a small screwdriver in about 15 minutes and your car feels brand new again.',
    specs: [
      { label: 'Type', value: 'Brushed 130-size' },
      { label: 'Fits', value: 'Our 1:24 cars' },
      { label: 'Pinion', value: 'Pre-fitted' },
      { label: 'Install', value: '~15 minutes, screwdriver' },
    ],
    included: ['Spare motor with pinion', 'Connector wiring'],
  },
  {
    id: 14,
    name: 'RC Wheel Rim Set',
    category: 'tyres-wheels',
    price: 799,
    oldPrice: null,
    image: '/images/placeholders/rims.svg',
    gallery: ['/images/placeholders/rims.svg'],
    rating: 4.4,
    stock: 'in-stock',
    badge: null,
    popularity: 60,
    shortDescription:
      'Six-spoke alloy-look rims to give your drifter a fresh stance.',
    description:
      'Style points matter. These six-spoke alloy-look rims bolt straight onto our 1:24 cars and instantly change the whole stance. Combine with a fresh tyre set — drift slicks or grip — and make the car truly yours.',
    specs: [
      { label: 'Quantity', value: '4 rims' },
      { label: 'Design', value: '6-spoke alloy look' },
      { label: 'Fits', value: '1:24 scale cars' },
      { label: 'Tyres', value: 'Sold separately' },
    ],
    included: ['4× wheel rims', 'Fitting hardware'],
  },
  {
    id: 15,
    name: 'Drift Track Cone Set',
    category: 'accessories',
    price: 499,
    oldPrice: null,
    image: '/images/placeholders/cones.svg',
    gallery: ['/images/placeholders/cones.svg'],
    rating: 4.5,
    stock: 'in-stock',
    badge: null,
    popularity: 58,
    shortDescription:
      'Mini traffic cones to lay out gates, hairpins and full drift courses at home.',
    description:
      'Turn any room into a drift course. This set of mini traffic cones lets you lay out gates, hairpins, figure-eights and slalom runs anywhere with a smooth floor. Practice clipping points like the pros and time yourself against friends.',
    specs: [
      { label: 'Quantity', value: '10 cones' },
      { label: 'Height', value: '~5 cm' },
      { label: 'Material', value: 'Soft flexible plastic' },
      { label: 'Extras', value: 'Course layout ideas card' },
    ],
    included: ['10× mini cones', 'Layout ideas card'],
  },
]

// Handy pre-filtered lists for the homepage
export const BEST_SELLERS = PRODUCTS.filter((p) => p.badge === 'Best Seller' || p.popularity >= 90)
export const NEW_ARRIVALS = PRODUCTS.filter((p) => p.badge === 'New Arrival')

/** Look up a single product by its id (string or number) */
export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id))
}

/** Get a category object by its id */
export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id)
}

/** Related products = same category, excluding the current one */
export function getRelatedProducts(product, limit = 4) {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  )
  const others = PRODUCTS.filter(
    (p) => p.category !== product.category && p.id !== product.id
  )
  return [...sameCategory, ...others].slice(0, limit)
}

// Gallery images for the homepage gallery section
export const GALLERY_IMAGES = [
  { src: '/images/sunset-side.jpg', alt: 'RC drift car silhouette against a sunset sky' },
  { src: '/images/night-rooftop.jpg', alt: 'RC car with LED headlights on a Kathmandu rooftop at night' },
  { src: '/images/red-glow.jpg', alt: 'RC racing sports car under dramatic red light' },
  { src: '/images/street-shot.jpg', alt: 'Black Porsche 993 RC car with headlights on the street' },
  { src: '/images/green-drifter.jpg', alt: 'Classic green striped RC drift car mid-slide' },
  { src: '/images/mini-duo.jpg', alt: 'Red and blue mini RC sports cars side by side' },
  { src: '/images/neon-poster.jpg', alt: 'RC Drifters Nepal neon garage poster' },
  { src: '/images/racing-poster.jpg', alt: 'Racing sports car limited edition poster' },
]
