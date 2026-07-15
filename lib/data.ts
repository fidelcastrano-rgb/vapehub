export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  description: string;
  badge: string;
  category: string;
  image: string;
  variants: string[];
  coa: string;
  inStock: boolean;
};

const rawProducts: Product[] = [
  {
    "id": "elf-bar-600",
    "name": "Elf Bar 600",
    "slug": "elf-bar-600",
    "price": 5.99,
    "originalPrice": 8.98,
    "description": "The Elf Bar 600 is a premium disposable vape engineered for outstanding flavor and reliable delivery. UK best-selling disposable. 600 puffs, 20mg nic salt. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "hot",
    "category": "disposable",
    "image": "/images/elf-bar-600.webp",
    "variants": [
      "Single",
      "3 Pack",
      "10 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "lost-mary-bm6000",
    "name": "Lost Mary BM6000",
    "slug": "lost-mary-bm6000",
    "price": 7.99,
    "originalPrice": 11.98,
    "description": "The Lost Mary BM6000 is a premium disposable vape engineered for outstanding flavor and reliable delivery. 6,000 puffs, rechargeable, bold fruity flavours. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/lost-mary-bm6000.webp",
    "variants": [
      "Single",
      "3 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "ske-crystal-bar",
    "name": "SKE Crystal Bar",
    "slug": "ske-crystal-bar",
    "price": 5.49,
    "originalPrice": 8.23,
    "description": "The SKE Crystal Bar is a premium disposable vape engineered for outstanding flavor and reliable delivery. Crystal pod for purer flavour. 600 puffs. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "sale",
    "category": "disposable",
    "image": "/images/ske-crystal-bar.webp",
    "variants": [
      "Single",
      "5 Pack",
      "10 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "ivg-bar-plus",
    "name": "IVG Bar Plus",
    "slug": "ivg-bar-plus",
    "price": 6.49,
    "originalPrice": 9.73,
    "description": "The IVG Bar Plus is a premium disposable vape engineered for outstanding flavor and reliable delivery. Award-winning British brand. 800 puffs. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/ivg-bar-plus.jpg",
    "variants": [
      "Single",
      "3 Pack",
      "10 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "hayati-pro-ultra-25k",
    "name": "Hayati Pro Ultra 25K",
    "slug": "hayati-pro-ultra-25k",
    "price": 14.99,
    "originalPrice": 22.48,
    "description": "The Hayati Pro Ultra 25K is a premium disposable vape engineered for outstanding flavor and reliable delivery. 25,000 puffs. TPD compliant big-puff device. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "hot",
    "category": "disposable",
    "image": "/images/hayati-pro-ultra-25k.webp",
    "variants": [
      "Single",
      "2 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "hayati-pro-max",
    "name": "Hayati Pro Max+",
    "slug": "hayati-pro-max",
    "price": 9.99,
    "originalPrice": 14.98,
    "description": "The Hayati Pro Max+ is a premium disposable vape engineered for outstanding flavor and reliable delivery. 6,000+ puffs, OLED smart screen, 850mAh. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/hayati-pro-max.webp",
    "variants": [
      "Single",
      "3 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "snow-wolf-vape",
    "name": "Snowwolf Vape",
    "slug": "snow-wolf-vape",
    "price": 12.99,
    "originalPrice": 19.48,
    "description": "The Snowwolf Vape is a premium disposable vape engineered for outstanding flavor and reliable delivery. 9,000 puffs, Hip Hop design, digital display. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/snow-wolf-vape.webp",
    "variants": [
      "Single",
      "3 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "tornado-vape",
    "name": "Tornado Vape",
    "slug": "tornado-vape",
    "price": 12.99,
    "originalPrice": 19.48,
    "description": "The Tornado Vape is a premium disposable vape engineered for outstanding flavor and reliable delivery. Transparent design, digital display, Black Ice. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/tornado-vape.webp",
    "variants": [
      "Single",
      "3 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "vaporesso-xros5",
    "name": "Vaporesso XROS 5",
    "slug": "vaporesso-xros5",
    "price": 21.99,
    "originalPrice": 32.98,
    "description": "The Vaporesso XROS 5 is a premium refillable pod kit engineered for outstanding flavor and reliable delivery. UK #1 pod kit. 1500mAh, 80% charge in 20min. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "hot",
    "category": "pod-kit",
    "image": "/images/vaporesso-xros5.webp",
    "variants": [
      "Single",
      "+ 2 Pods"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "oxva-xlim-pro-3",
    "name": "OXVA XLIM Pro 3",
    "slug": "oxva-xlim-pro-3",
    "price": 24.99,
    "originalPrice": 37.48,
    "description": "The OXVA XLIM Pro 3 is a premium refillable pod kit engineered for outstanding flavor and reliable delivery. Photon chipset — 80% flavour at 20% battery. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "pod-kit",
    "image": "/images/oxva-xlim-pro-3.webp",
    "variants": [
      "Single",
      "+ 2 Pods"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "oxva-xlim-pro-2",
    "name": "OXVA XLIM Pro 2",
    "slug": "oxva-xlim-pro-2",
    "price": 19.99,
    "originalPrice": 29.98,
    "description": "The OXVA XLIM Pro 2 is a premium refillable pod kit engineered for outstanding flavor and reliable delivery. X-Treme Flavor, top-fill, carbon fibre panel. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "pod-kit",
    "image": "/images/oxva-xlim-pro-2.webp",
    "variants": [
      "Single",
      "+ 2 Pods"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "uwell-caliburn-g5",
    "name": "Uwell Caliburn G5",
    "slug": "uwell-caliburn-g5",
    "price": 19.99,
    "originalPrice": 29.98,
    "description": "The Uwell Caliburn G5 is a premium refillable pod kit engineered for outstanding flavor and reliable delivery. Pro-FOCS flavour technology. Best taste clarity. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "pod-kit",
    "image": "/images/uwell-caliburn-g5.jpg",
    "variants": [
      "Single",
      "+ 2 Pods"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "geekvape-aegis-hero-5",
    "name": "Geekvape Aegis Hero 5",
    "slug": "geekvape-aegis-hero-5",
    "price": 29.99,
    "originalPrice": 44.98,
    "description": "The Geekvape Aegis Hero 5 is a premium refillable pod kit engineered for outstanding flavor and reliable delivery. IP68 waterproof, shockproof, dustproof. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "pod-kit",
    "image": "/images/geekvape-aegis-hero-5.webp",
    "variants": [
      "Single",
      "Bundle"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "vampire-vape-heisenberg",
    "name": "Vampire Vape Heisenberg",
    "slug": "vampire-vape-heisenberg",
    "price": 3.99,
    "originalPrice": 5.99,
    "description": "The Vampire Vape Heisenberg is a premium eliquid engineered for outstanding flavor and reliable delivery. UK most iconic e-liquid. Berry and menthol. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "hot",
    "category": "eliquid",
    "image": "/images/vampire-vape-heisenberg.webp",
    "variants": [
      "10ml Nic Salt",
      "50ml Shortfill"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "elf-bar-elfliq",
    "name": "Elf Bar Elfliq Nic Salt",
    "slug": "elf-bar-elfliq",
    "price": 3.99,
    "originalPrice": 5.99,
    "description": "The Elf Bar Elfliq Nic Salt is a premium eliquid engineered for outstanding flavor and reliable delivery. Exact Elf Bar flavours in 10ml. 20mg nic salt. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "eliquid",
    "image": "/images/elf-bar-elfliq.webp",
    "variants": [
      "10ml x1",
      "10ml x3",
      "10ml x5"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "drifter-bar-salt",
    "name": "Drifter Bar Salt 10ml",
    "slug": "drifter-bar-salt",
    "price": 2.99,
    "originalPrice": 4.49,
    "description": "The Drifter Bar Salt 10ml is a premium eliquid engineered for outstanding flavor and reliable delivery. Double-concentrate bold flavours. Best value. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "sale",
    "category": "eliquid",
    "image": "/images/drifter-bar-salt.webp",
    "variants": [
      "10ml x1",
      "10ml x5",
      "10ml x10"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "elux-nic-salts",
    "name": "Elux Legend Nic Salts",
    "slug": "elux-nic-salts",
    "price": 3.49,
    "originalPrice": 5.24,
    "description": "The Elux Legend Nic Salts is a premium eliquid engineered for outstanding flavor and reliable delivery. Double-concentrated Elux Legend flavours. 20mg. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "eliquid",
    "image": "/images/elux-nic-salts.webp",
    "variants": [
      "10ml x1",
      "10ml x3",
      "10ml x5"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "starter-bundle",
    "name": "Starter Bundle",
    "slug": "starter-bundle",
    "price": 34.99,
    "originalPrice": 52.48,
    "description": "The Starter Bundle is a premium bundle engineered for outstanding flavor and reliable delivery. Elf Bar 600 + Vaporesso XROS 5 + 3x Nic Salts. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "bundle",
    "category": "bundle",
    "image": "/images/starter-bundle.webp",
    "variants": [
      "Bundle",
      "Bundle x2"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "heavy-vaper-bundle",
    "name": "Heavy Vaper Bundle",
    "slug": "heavy-vaper-bundle",
    "price": 49.99,
    "originalPrice": 74.98,
    "description": "The Heavy Vaper Bundle is a premium bundle engineered for outstanding flavor and reliable delivery. Hayati 25K + Vaporesso XROS 5 + 5x E-Liquids. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "bundle",
    "category": "bundle",
    "image": "/images/heavy-vaper-bundle.avif",
    "variants": [
      "Bundle"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "ace-carts",
    "name": "Ace Carts",
    "slug": "ace-carts",
    "price": 7.99,
    "originalPrice": 11.98,
    "description": "The Ace Carts is a premium disposable vape engineered for outstanding flavor and reliable delivery. Premium THC cart range with smooth draws and full flavour. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/1.webp",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "boutiq-switch",
    "name": "Boutiq Switch",
    "slug": "boutiq-switch",
    "price": 8.49,
    "originalPrice": 12.73,
    "description": "The Boutiq Switch is a premium disposable vape engineered for outstanding flavor and reliable delivery. High-performance disposable vape with crisp flavour and easy use. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/2.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "cookies-carts",
    "name": "Cookies Carts",
    "slug": "cookies-carts",
    "price": 7.49,
    "originalPrice": 11.23,
    "description": "The Cookies Carts is a premium disposable vape engineered for outstanding flavor and reliable delivery. Authentic Cookies cartridge flavours in a compact, travel-friendly design. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/3.webp",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "dabwoods",
    "name": "Dabwoods",
    "slug": "dabwoods",
    "price": 8.99,
    "originalPrice": 13.48,
    "description": "The Dabwoods is a premium disposable vape engineered for outstanding flavor and reliable delivery. Premium disposable carts built for rich flavour and reliable performance. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/4.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "dmt-vape-pen",
    "name": "DMT Vape Pen",
    "slug": "dmt-vape-pen",
    "price": 9.49,
    "originalPrice": 14.23,
    "description": "The DMT Vape Pen is a premium disposable vape engineered for outstanding flavor and reliable delivery. Slim battery vape pen with smooth hits and long-lasting battery life. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/5.jpg",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "fryd-carts",
    "name": "Fryd Carts",
    "slug": "fryd-carts",
    "price": 7.29,
    "originalPrice": 10.94,
    "description": "The Fryd Carts is a premium disposable vape engineered for outstanding flavor and reliable delivery. Popular carts delivering consistent flavour and effortless use. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/6.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "jeeter-juice",
    "name": "Jeeter Juice",
    "slug": "jeeter-juice",
    "price": 8.29,
    "originalPrice": 12.43,
    "description": "The Jeeter Juice is a premium disposable vape engineered for outstanding flavor and reliable delivery. Premium juice carts with cult-favourite strain blends. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/7.webp",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "jungle-boys",
    "name": "Jungle Boys",
    "slug": "jungle-boys",
    "price": 8.99,
    "originalPrice": 13.48,
    "description": "The Jungle Boys is a premium disposable vape engineered for outstanding flavor and reliable delivery. Top-shelf disposable carts from the iconic Jungle Boys brand. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/8.webp",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "muha-meds",
    "name": "Muha Meds",
    "slug": "muha-meds",
    "price": 7.99,
    "originalPrice": 11.98,
    "description": "The Muha Meds is a premium disposable vape engineered for outstanding flavor and reliable delivery. Premium cartridge flavours made for smooth, scaled hits. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/9.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "packman-vape",
    "name": "Packman Vape",
    "slug": "packman-vape",
    "price": 8.19,
    "originalPrice": 12.29,
    "description": "The Packman Vape is a premium disposable vape engineered for outstanding flavor and reliable delivery. Stylish disposable vape with bold flavours and easy activation. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/10.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "packwoods",
    "name": "Packwoods",
    "slug": "packwoods",
    "price": 8.49,
    "originalPrice": 12.73,
    "description": "The Packwoods is a premium disposable vape engineered for outstanding flavor and reliable delivery. Premium packaged carts with smooth draws and authentic strain profiles. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/11.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "piff-bar",
    "name": "Piff Bar",
    "slug": "piff-bar",
    "price": 8.79,
    "originalPrice": 13.18,
    "description": "The Piff Bar is a premium disposable vape engineered for outstanding flavor and reliable delivery. Compact disposable bar with premium terpene-rich flavour. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/12.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "plug-play",
    "name": "Plug Play",
    "slug": "plug-play",
    "price": 7.79,
    "originalPrice": 11.69,
    "description": "The Plug Play is a premium disposable vape engineered for outstanding flavor and reliable delivery. Ready-to-use disposable vape with dependable flavour and smooth hits. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/13.webp",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "raw-garden",
    "name": "Raw Garden",
    "slug": "raw-garden",
    "price": 8.99,
    "originalPrice": 13.48,
    "description": "The Raw Garden is a premium disposable vape engineered for outstanding flavor and reliable delivery. Authentic Raw Garden carts delivering rich terpene flavour. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/14.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "shroom-chocolate-bars",
    "name": "Shroom Chocolate Bars",
    "slug": "shroom-chocolate-bars",
    "price": 9.99,
    "originalPrice": 14.98,
    "description": "The Shroom Chocolate Bars is a premium disposable vape engineered for outstanding flavor and reliable delivery. Novel edibles-inspired chocolate bar format for a premium experience. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "Popular",
    "category": "disposable",
    "image": "/images/15.webp",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "turn-pen",
    "name": "Turn Pen",
    "slug": "turn-pen",
    "price": 9.29,
    "originalPrice": 13.93,
    "description": "The Turn Pen is a premium disposable vape engineered for outstanding flavor and reliable delivery. High-performance pen vape with strong flavour and ergonomic design. With an ergonomic design and high-grade safety protections, it ensures a consistent, satisfying puff every time. Ideal for both daily users and collectors seeking genuine quality. Fully authentic, certified, and sourced directly from audited manufacturer batches.",
    "badge": "new",
    "category": "disposable",
    "image": "/images/16.jpg",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "stiiizy-vape-pod",
    "name": "Stiiizy Vape Pod",
    "slug": "stiiizy-vape",
    "price": 29.99,
    "originalPrice": 40.00,
    "description": "Original Stiiizy THC vape pod. Features premium distillates with custom cannabis-derived terpenes for a clean, natural taste.",
    "badge": "Popular",
    "category": "thc-carts",
    "image": "/images/stiiizy_vape.jpg",
    "variants": [
      "Single",
      "2 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "alien-labs-disposable",
    "name": "Alien Labs Disposable",
    "slug": "alien-labs-vape",
    "price": 34.99,
    "originalPrice": 50.00,
    "description": "High-quality THC disposable vape pen, neon green and black branding. Smooth and flavorful.",
    "badge": "hot",
    "category": "thc-disposable",
    "image": "/images/alien_labs_vape.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "big-chief-cart",
    "name": "Big Chief Cart",
    "slug": "big-chief-vape",
    "price": 19.99,
    "originalPrice": 30.00,
    "description": "Premium THC vape cartridge with a wood tip and golden pure oil.",
    "badge": "",
    "category": "thc-carts",
    "image": "/images/big_chief_vape.jpg",
    "variants": [
      "Single",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "rove-cartridge",
    "name": "Rove Cartridge",
    "slug": "rove-vape",
    "price": 24.99,
    "originalPrice": 40.00,
    "description": "Sleek Rove THC vape cartridge featuring strong golden oil and unique flavors.",
    "badge": "sale",
    "category": "thc-carts",
    "image": "/images/rove_vape.jpg",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "jeeter-juice-disposable",
    "name": "Jeeter Juice Disposable",
    "slug": "jeeter-juice-vape",
    "price": 39.99,
    "originalPrice": 55.00,
    "description": "High-quality Jeeter Juice disposable THC vape pen with colorful packaging. Smooth hits.",
    "badge": "hot",
    "category": "thc-disposable",
    "image": "/images/jeeter_juice_vape.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "raw-garden-cartridge",
    "name": "Raw Garden Cartridge",
    "slug": "raw-garden-vape",
    "price": 29.99,
    "originalPrice": 45.00,
    "description": "Premium Raw Garden THC vape cartridge with clean green and white branding.",
    "badge": "new",
    "category": "thc-carts",
    "image": "/images/raw_garden_vape.jpg",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "muha-meds-disposable",
    "name": "Muha Meds Disposable",
    "slug": "muha-meds-vape",
    "price": 34.99,
    "originalPrice": 50.00,
    "description": "Premium Muha Meds THC disposable vape pen featuring their distinct gold and black branding.",
    "badge": "",
    "category": "thc-disposable",
    "image": "/images/muha_meds_vape.jpg",
    "variants": [
      "Single",
      "2 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "kushy-punch-disposable",
    "name": "Kushy Punch Disposable",
    "slug": "kushy-punch-vape",
    "price": 32.99,
    "originalPrice": 45.00,
    "description": "Vibrant and flavorful Kushy Punch disposable THC vape pen. Great taste and effect.",
    "badge": "sale",
    "category": "thc-disposable",
    "image": "/images/kushy_punch_vape.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "plug-play-pod-system",
    "name": "Plug Play Pod System",
    "slug": "plug-play-vape",
    "price": 35.99,
    "originalPrice": 50.00,
    "description": "Premium Plug Play THC vape pod system with a sleek black battery. Known for potent hits.",
    "badge": "new",
    "category": "thc-carts",
    "image": "/images/plug_play_vape.jpg",
    "variants": [
      "Starter Kit",
      "Pod Only"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "select-elite-cartridge",
    "name": "Select Elite Cartridge",
    "slug": "select-elite-vape",
    "price": 28.99,
    "originalPrice": 40.00,
    "description": "Select Elite THC vape cartridge with broad-spectrum oil, standing upright with blue and white branding.",
    "badge": "",
    "category": "thc-carts",
    "image": "/images/select_elite_vape.jpg",
    "variants": [
      "Single",
      "2 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "cookies-disposable",
    "name": "Cookies Disposable",
    "slug": "cookies-vape",
    "price": 44.99,
    "originalPrice": 60.00,
    "description": "Authentic Cookies THC disposable vape pen, featuring signature baby blue branding and smooth design.",
    "badge": "hot",
    "category": "thc-disposable",
    "image": "/images/cookies_vape.jpg",
    "variants": [
      "Single",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "heavy-hitters-cartridge",
    "name": "Heavy Hitters Cartridge",
    "slug": "heavy-hitters-vape",
    "price": 32.99,
    "originalPrice": 50.00,
    "description": "Heavy Hitters ultra potent THC vape cartridge, silver and glass design standing upright.",
    "badge": "sale",
    "category": "thc-carts",
    "image": "/images/heavy_hitters_vape.jpg",
    "variants": [
      "Single",
      "2 Pack",
      "5 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "dankwoods-white-fire",
    "name": "Dankwoods White Fire",
    "slug": "dankwoods-white-fire",
    "price": 35,
    "originalPrice": 45,
    "description": "Dankwoods White Fire is a premium pre-roll with high-quality flower wrapped in an all-natural leaf and dusted in kief. Smooth burn, intense flavor.",
    "badge": "Popular",
    "category": "pre-rolls",
    "image": "/images/dankwoods_white_fire.png",
    "variants": [
      "Single Pack",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  },
  {
    "id": "dankwoods-skywalker-og",
    "name": "Dankwoods Skywalker OG",
    "slug": "dankwoods-skywalker-og",
    "price": 35,
    "originalPrice": 45,
    "description": "Dankwoods Skywalker OG features classic earthy flavors in a slow-burning leaf, ensuring maximum potency and a long-lasting, relaxed experience.",
    "badge": "Popular",
    "category": "pre-rolls",
    "image": "/images/dankwoods_skywalker_og.png",
    "variants": [
      "Single Pack",
      "3 Pack"
    ],
    "coa": "Verified Authentic",
    "inStock": true
  }];

export const products: Product[] = rawProducts.map(p => ({
  ...p,
  image: p.image.startsWith('data:')
    ? p.image
    : (p.image.startsWith('/images/') && !p.image.includes('logo') ? `https://yartsland.co.uk${p.image}` : p.image)
}));

const rawBlogPosts = [
  {
    slug: "guide-tpd-compliance",
    title: "Understanding TPD Compliance & Safety Regulations in the UK",
    excerpt: "What exactly does TPD formulation mean for disposable vapes and e-liquids? Find out the rules that govern legal tanks and nicotine strengths.",
    date: "2026-01-10",
    image: "/images/vape_blog_tpd.png",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "The Tobacco Products Directive (TPD) establishes strict safety rules for vaping hardware and e-liquids in the UK and Europe. When shopping at The Vape Hub, every device we offer is strictly TPD compliant, ensuring a safe, verified authentic experience.\n\n## Core TPD Requirements\n\nTypically, legal compliances focus on child protection, tank volumes, and ingredient analysis to assure public safety. Here are the core specifications established under TPD guidelines for the UK scene:\n\n1. Tank Size Limit: No refillable tank or enclosed disposable pod can have an e-liquid capacity exceeding 2.0ml. This is why legal pods carry strict limits.\n2. Nicotine Concentration: E-liquids cannot contain more than 20mg/ml (2%) nicotine strength. This ensures standard consumer safety thresholds.\n3. Bottle Sizes: Standalone nicotine-containing e-liquids can only be sold in bottles of up to 10ml, such as the Elux Legend Nic Salts.\n4. Childproof Packaging: All packaging must incorporate child-resistant caps and prominent tactile warning labels to avoid hazards.\n\n## Why Compliance Benefits Vapers\n\nRegulatory compliance isn't just a hurdle; it is a security standard. Buying TPD-registered hardware protects you from unregulated, untillable ingredients and low-quality battery cells. Check any batch certification or check our Verified COA tags on our products to guarantee trace validation."
  },
  {
    slug: "transitioning-to-pod-kits",
    title: "How to Switch from Disposables to Reusable Pod Kits",
    excerpt: "With the upcoming UK disposable ban, switching to refillable pod vapes saves you money while protecting the planet.",
    date: "2026-02-14",
    image: "/images/vape_quality_control.png",
    author: "The Vape Hub Team",
    category: "Product Reviews",
    content: "As regulatory trends shift, smart vapers are transitioning away from single-use devices to environmental, cost-effective rechargeable hardware. Refillable pod systems provide an exceptional compromise without sacrificing flavour intensity or smoke quality.\n\n## Why Refillable Systems Outperform Disposables\n\nRefillable pod kits like the Vaporesso XROS 5 operate on high-capacity internal batteries that recharge quickly via USB-C. Instead of throwing away an entire device, you only replace the pods or refill them with your choice of premium nic salts.\n\n1. Immense Cost Savings: Transitioning saves typical daily vapers over £120 per month compared to buying traditional 600-puff single-use items.\n2. Flavor Variety: You can choose from hundreds of premium e-liquid profiles, such as the full line of Drifter Bar Salt 10ml.\n3. Lower Environmental Impact: Millions of disposable batteries unnecessarily enter landfills every year. Refillable kits protect the environment.\n\n## Setting Up Your New Pod System\n\nRefilling a pod system is extremely simple. Just pop open the silicone stopper, fill with salt e-liquid, let it saturate for five minutes, and you are ready to enjoy clean, premium draw-activated clouds."
  },
  {
    slug: "nicotine-salts-vs-freebase",
    title: "Nicotine Salts vs. Freebase E-Liquids Explained",
    excerpt: "Learn the differences in throat hit, nicotine absorption, and which type of e-liquid fits your personal vape habit.",
    date: "2026-03-05",
    image: "/images/1.webp",
    author: "The Vape Hub Team",
    category: "Buying Guides",
    content: "Understanding which blend of e-liquid to use is crucial for a satisfying experience. In the modern vape landscape, the two primary forms of nicotine are nic salts and standard freebase.\n\n## What are Nicotine Salts?\n\nNicotine salts involve adding weak acids to organic nicotine, altering the pH level. This delivers several key advantages:\n\n1. Smoother Inhale: Allows high nicotine strengths (like 20mg/ml) to be inhaled without a harsh throat scratch.\n2. Rapid Absorption: Enters the bloodstream in as fast as six seconds, mimicking traditional cigarettes.\n3. Device Synergy: Excellent for lower-wattage kits like the Uwell Caliburn G5.\n\n## What is Freebase Nicotine?\n\nFreebase is the pure form of nicotine. It has a stronger throat bite and slower absorption, making it optimal for larger, high-wattage sub-ohm cloud setups where lower nicotine (such as 3mg or 6mg) is desired.\n\nIf you prefer a rich pod experience, explore our premium Nic Salts collections for smooth throat hits and crisp flavors."
  },
  {
    slug: "vape-authenticity-guide",
    title: "How to Spot and Avoid Counterfeit Vaping Hardware",
    excerpt: "Fake vapes can contain dangerous heavy metals or incorrect battery configurations. Learn how to verify your products.",
    date: "2026-03-24",
    image: "/images/vape_wholesale_boxes.png",
    author: "The Vape Hub Team",
    category: "Safety",
    content: "Counterfeit hardware is a major risk in the unregulated vaping market. At The Vape Hub, safety is our absolute priority, and we only import direct manufacturer-verified batches with working COAs.\n\n## Three Simple Steps to Verify Authenticity\n\n1. Check the Scratch-to-Reveal: Every premium product like our Hayati Pro Max plus comes with an official scratch-and-verify hologram sticker. Scan the barcode and check the official manufacturer URL carefully (avoid spoof sites).\n2. Inspect Build Quality: Legitimate hardware features clean, premium alignments, perfect print labels, and does not leak or rattle.\n3. Compare the Retail Pricing: If an online retailer is listing top brands like Lost Mary BM6000 at suspiciously low prices, it is highly likely a replica clone from an unauthorized source.\n\n## Purchase Safely\n\nVape safety starts with choosing certified, trustable suppliers. Stay safe and choose verified stock."
  },
  {
    slug: "wholesale-buying-guide",
    title: "The Comprehensive 2026 UK Vape Wholesale Playbook",
    excerpt: "Optimize your store margins, navigate bulk taxes, and secure next-day delivery on verified authentic bulk stock.",
    date: "2026-04-02",
    image: "/images/heavy-vaper-bundle.avif",
    author: "The Vape Hub Team",
    category: "Enterprise",
    content: "Running a successful retail store requires a highly efficient, reliable wholesale partner. Our wholesale catalog offers top-selling bulk products like the SKE Crystal Bar at unmatched distributor pricing tiers.\n\n## Maximizing Your Retail Margins\n\n1. Bulk Logistics: Consolidating your orders cuts shipping overheads and guarantees next-day courier delivery.\n2. Curate Top-Sellers: Stock a balanced inventory of disposables, starter pod systems, and high-margin nic salts to cater to all customer demographics.\n3. Strict Regulatory Audits: Keep your business secure by ensuring all stocked brands have active TPD approvals and official batch certificates.\n\n## Contact Partner Billing\n\nOur dedicated account representatives can customize bulk shipping rates to help you build stable profit channels. Connect with us via WhatsApp to build your purchase plan today."
  },
  {
    slug: "understanding-big-puff-vapes",
    title: "The Engineering Behind Modern Legal High-Puff Devices",
    excerpt: "Explore how legal big-puff vapes offer up to 25,000 puffs, and how to operate them safely.",
    date: "2026-04-18",
    image: "/images/2.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "Modern big-puff devices like the Hayati Pro Ultra 25K and Lost Mary BM6000 have completely transformed the vaping market. They provide thousands of puffs legally by integrating smart rechargeable batteries with internal sub-containers.\n\n## How Big-Puff Devices Work Legally\n\nTypically, TPD limits pre-filled pod tanks to 2.0ml. High-puff devices circumvent this elegantly by supplying separate, modular leak-proof containers within the box. Once inserted, the container automatically feeds into the main pod tank, maintaining 100% legal compliance while providing weeks of active usage.\n\n1. Dual-Tank Systems: Devices like the Hayati Pro Ultra 25K feature multi-chamber rotation systems, letting you switch between pods easily.\n2. Aesthetic OLED Displays: Built-in screens monitor battery status and estimated remaining liquid in real-time, eliminating dry hits.\n3. Rechargeable Synergy: Leveraging rechargeable batteries means smaller physical sizes while retaining impressive endurance.\n\n## High Puff Security\n\nDiscover our clean range of legal, high-performance big puff devices today."
  }
];

export const blogPosts = rawBlogPosts.map(post => ({
  ...post,
  image: post.image.startsWith('/images/') && !post.image.includes('vape_') 
    ? `https://yartsland.co.uk${post.image}` 
    : post.image
}));

export const faqs = [
  {
    category: "Shipping & Orders",
    questions: [
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to Ireland, USA, Canada, and Europe. UK Next-Day is £3.99, and International is €22."
      },
      {
        q: "What is the minimum order value?",
        a: "The minimum order value for an order to qualify for our wholesale pricing is €100."
      }
    ]
  }
];
