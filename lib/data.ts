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
  },
  {
    slug: "thc-liquid-uk",
    title: "THC Liquid (UK): A Complete Guide for Adult Consumers",
    excerpt: "What is THC liquid and how does it work inside vape hardware? Read our comprehensive guide on distillate formulations, speed of absorption, and safety standards in the UK.",
    date: "2026-07-15",
    image: "/images/thc_liquid_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "THC liquid is a concentrated cannabis extract in liquid form, used in specialized vape products and cartridges for adult consumers. In the UK context, it generally appears in the language of online vape retailers as “THC vape oil,” “THC distillate,” or “liquid diamonds” for use in branded pens and disposables. This kind of liquid is designed for inhalation through compatible hardware rather than general mixing with standard nicotine e-liquid.\n\nMost THC liquid offered online is described as distillate produced from cannabis extracts, sometimes combined with terpenes for flavour and with careful control over potency. Retailers present it inside cartridges or sealed disposable devices rather than as free bottled liquid to reduce dosing errors and keep the product matched to specific hardware. This packaging approach reflects the strength of the liquid and the need for consistent vaporization.\n\n[IMAGE: /images/thc_liquid_blog.jpg|Premium golden THC vape liquid distillate, designed for clean vaporization and consistent potency.]\n\n## Formulations & Hardware Synergy\n\nBy enclosing the liquid inside specialized hardware, manufacturers can calibrate the heating element's temperature specifically for high-viscosity cannabis oils. Trying to use these extracts in standard sub-ohm vape setups can cause burning, leaking, or inefficient vaporization. Always ensure your device or cartridge is authentic and designed for premium distillates.\n\n## Absorption Speed & Effects Profile\n\nIn practice, THC liquid delivers rapidly felt effects because inhalation gives a faster onset than edible routes. Buyers interested in THC liquid products usually pay attention to stated THC percentages, extract type, and device format before they choose a pen, disposable, or cart. UK-focused sites emphasize lab testing, potency information, and hardware reliability as key selling points, which helps adults judge whether a given liquid product suits their experience level.\n\n## Responsible Consumer Guidelines\n\nGiven the strength of these formulations, retailers advise responsible use and highlight that high THC liquid products are for experienced adult users only. They also stress storage in cool, dark conditions and safe handling to preserve quality and avoid accidental access by children."
  },
  {
    slug: "canna-vapes-uk",
    title: "Canna Vapes (UK): Understanding Cannabis-Derived Vape Products",
    excerpt: "What are 'canna vapes' and how do you choose between THC, CBD, and full-spectrum cali pens in the UK? Explore our comprehensive buyer's guide.",
    date: "2026-07-15",
    image: "/images/canna_vapes_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "“Canna vapes” is a broad term used online in the UK for vape products linked with cannabis-derived compounds. In practice, it appears across sites that sell THC pens, mixed CBD and THC tinctures, edibles, and branded disposable devices featuring cannabis strain names or “cali” style presentation. The label does not itself define whether a given vape is THC-based, CBD-based, or a hybrid product, which is why ingredients and lab reports matter.\n\nUK-oriented retailers frame their canna vapes range around clarity and adult use. Product pages identify whether a pen is filled with THC oil, mixed THC and CBD, or hemp-derived formulations, and they highlight terpene content and flavour notes such as classic strain profiles. They often group cali vapes, THC pens, and weed cartridges in a single section so shoppers can compare potency, flavour, and format in one view.\n\n[IMAGE: /images/canna_vapes_blog.jpg|A premium, beautifully designed 'Cali' style canna vape pen featuring organic terpene formulations and clear cannabinoid indicators.]\n\n## CBD vs. THC Content in Canna Vapes\n\nFrom a user perspective, canna vapes in the UK split into two broad lines. One focuses on stronger THC content with disposable pens and carts aimed at recreational or hybrid wellness use for adults. The other centres on CBD-rich products designed for milder effects and wider accessibility, sometimes in mixed CBD:THC ratios. In both cases, reputable sites emphasise lab testing and clear cannabinoid breakdowns as key quality signals.\n\n## Responsible Consumer Choices\n\nRetailers also point to responsible vaping habits. This includes starting at lower doses, choosing devices that match experience level, and keeping pens, carts, and tinctures away from minors. They present canna vapes as a category that needs informed choice, not impulsive use. More detailed legal interpretation and clinical advice are handled in dedicated pages or external resources, so this outline stops here."
  },
  {
    slug: "dab-pen-uk",
    title: "Dab Pen (UK): Portable Vaporisers for Concentrates",
    excerpt: "Discover how portable dab pens vaporise solid cannabis concentrates like wax and shatter. Learn about hardware, maintenance, and safe adult usage guidelines.",
    date: "2026-07-15",
    image: "/images/dab_pen_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "In UK-facing content, a dab pen is described as a portable device for vaporising cannabis concentrates such as wax, shatter, or distillate rather than standard e-liquids. It usually consists of a battery, a heating chamber or atomiser designed for thick extracts, and a mouthpiece. Some UK sites list dab-style products alongside THC pens and 2 gram disposables with high potency extracts.\n\nDab pens differ from simple e-liquid vape pens because they are built to handle solid or highly viscous concentrates. Retailers note that users load small amounts of concentrate into the device and heat it to create vapour, which produces stronger effects due to the higher concentration of active compounds. This makes dab pens more suitable for experienced adult users and less suitable for people unfamiliar with cannabis concentrates.\n\n[IMAGE: /images/dab_pen_blog.jpg|A sleek, portable dab pen vaporiser resting on dark polished marble, designed for high-potency cannabis concentrates.]\n\n## How Dab Pens Work\n\nUnlike pre-filled cartridges, traditional dab pens allow users to directly place concentrates onto a heating coil (often made of ceramic or quartz). When the power button is engaged, the coil rapidly heats up, instantly vaporising the concentrate. This manual loading style offers maximum freshness and temperature customization, making it a preferred choice for connoisseurs seeking intense flavour profiles.\n\n## Maintenance and Device Longevity\n\nProduct descriptions from UK sellers emphasise battery safety, proper charging, and regular cleaning to keep performance stable. They advise using only compatible concentrates and avoiding improvised mixtures that could damage the device or produce harsh vapour. Because concentrate strength can be high, dab pen content usually includes reminders to start with low amounts and pay attention to personal tolerance.\n\n## UK Context and Safe Consumption\n\nIn terms of UK context, sites frame dab pens as part of a broader THC vape and cali products category aimed at adults, with brief references to compliance and discretion in shipping. Detailed legal analysis and medical commentary sit beyond typical product copy, so this is an appropriate stopping point."
  },
  {
    slug: "thc-vape-pen-uk",
    title: "THC Vape Pen (UK): Sleek & Portable Distillate Guides",
    excerpt: "What is a THC vape pen and how are they designed for adult users in the UK? Explore our comprehensive breakdown of styles, potency, and safety protocols.",
    date: "2026-07-15",
    image: "/images/thc_vape_pen_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "A THC vape pen in UK-oriented material is a device used to inhale vapour from THC-containing oils or distillates, offered in disposable or rechargeable formats. Retailers describe them as sleek, portable pens loaded with potent distillate or full-spectrum cannabis extracts, designed for adult users seeking fast onset and flavour-focused sessions.\n\nUK sites list THC vape pens across product ranges that include one-gram disposables, two-gram liquid diamonds pens, and premium cali-style devices with strain-specific branding. Product pages often highlight THC concentration, extract type (distillate, live resin, liquid diamonds), flavour profile, and expected puff count so buyers can match pens to their preferences and experience level.\n\n[IMAGE: /images/thc_vape_pen_blog.jpg|A premium, gold-accented THC vape pen rested on a dark luxury slate surface, engineered for high-viscosity cannabis distillates.]\n\n## Formats, Capacity, and Potency Profile\n\nThe main features promoted for THC vape pens in the UK are discreet size, ready-to-use convenience, and lab-tested formulations. Retailers stress that their pens are pre-filled and tuned for consistent draws, with child-resistant packaging and clear strength information for responsible adult use. Some brands position themselves as offering “strongest legal” THC pens with full-spectrum cannabis and specified microgram content, although regulatory details are handled on separate pages.\n\n## Safe Hardware Selection and Guidelines\n\nSafety messaging focuses on buying from sites that publish lab results, cannabinoid breakdowns, and contaminant testing, as well as using pens as directed and avoiding modification or refilling with unknown liquids. Health, legal, and clinical questions are typically referred to external guidance or specialist articles, which is beyond what general web product copy covers, so the article ends here."
  },
  {
    slug: "cali-pen-uk",
    title: "Cali Pen (UK): Premium Disposable Vaporizers & Flavours",
    excerpt: "What is a Cali Pen and why is it highly popular among UK vape enthusiasts? Read our complete overview on strain-specific profiles, exotic terpene genetics, and hardware specs.",
    date: "2026-07-15",
    image: "/images/cali_pen_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "In UK-focused content, “Cali Pen” refers to branded disposable vape pens and cartridges marketed with California-inspired cannabis aesthetics and flavour themes. These products are positioned as premium cali pens for adult users who value strong potency, distinct strain profiles, and a modern disposable format. UK retailers present cali pens within ranges of THC vapes, cali disposables, and related edibles.\n\nCali Pen product pages highlight THC-based vape options with clear details on potency, chamber design, and extract type, such as full-spectrum cannabis oil, exotic genetics distillate, or dual-chamber devices built for two strains in one pen. They position cali pens as part of a curated selection with consistency and quality standards, supported by discreet UK delivery and controlled packaging.\n\n[IMAGE: /images/cali_pen_blog.jpg|A custom, premium California-themed Cali Pen disposable vape, highlighting advanced double-chamber hardware and rich strain-specific terpene profiles.]\n\n## Terpene Profiles & Exotic Flavours\n\nCali Pens and similar brands focus on flavour and experience, often naming pens after well-known strain profiles or exotic genetics, and emphasising terpene-rich formulations for authentic taste. UK-oriented sites also publish guides on cali vapes and cali pens, including buying tips and notes on how these devices fit into the broader THC vape market.\n\n## Legal Landscape and Compliance Context\n\nLegal status and compliance questions around cali pens in the UK are treated in separate articles that discuss THC, THCa, and possession risk, indicating that the topic is complex and tied to current law rather than simple product descriptions. Since further detail depends on live regulatory interpretation, which sits outside general product content, this is a suitable stopping point."
  },
  {
    slug: "thc-carts-uk",
    title: "THC Carts (UK): A Complete Guide to Vape Cartridges",
    excerpt: "Learn how standard 510-threaded THC cartridges operate, the different types of cannabis extract formulations available, and essential safety guidelines for UK consumers.",
    date: "2026-07-15",
    image: "/images/thc_carts_blog.jpg",
    author: "The Vape Hub Team",
    category: "Guides",
    content: "THC carts, or THC cartridges, appear in UK vape catalogues as pre-filled cartridges that attach to compatible batteries, typically with standard threading such as 510 connectors. Retailers group them under THC vapes and pens alongside disposables, presenting carts as an option for users who prefer interchangeable cartridges rather than single-use devices.\n\nProduct descriptions for THC carts mention contents such as THC distillate, live resin, liquid diamonds, and cannabis oil with natural terpenes, designed to deliver potent vapour with distinctive flavour. UK-facing sites point to lab testing, clear THC percentages, and flavour lists as signals of quality and consistency, and they offer carts from recognised brands with established strain naming conventions.\n\n[IMAGE: /images/thc_carts_blog.jpg|A luxury 510-threaded glass and ceramic THC vape cartridge filled with transparent golden distillate, connected to a modern rechargeable battery.]\n\n## Operation and Compatibility with 510 Batteries\n\nUsing THC carts involves attaching the cartridge to a compatible battery, activating the device, and inhaling measured draws. Sellers advise keeping carts upright when stored, avoiding extreme temperatures, and replacing cartridges rather than attempting to refill them with unknown liquids. This helps maintain performance and reduces leakage or clogging.\n\n## Authenticity and Safety Standards\n\nUK retailers also flag the importance of avoiding counterfeit or untested THC carts, noting that branding alone does not guarantee content quality and that lab-verified products from established suppliers are a safer choice for adult consumers. Detailed legal analysis, medical commentary, and regulatory advice fall under dedicated guides or external sources, so the article concludes here."
  }
];

export const blogPosts = rawBlogPosts.map(post => ({
  ...post,
  image: post.image.startsWith('/images/') && !post.image.includes('vape_') && !post.image.includes('thc_liquid_') && !post.image.includes('canna_vapes_') && !post.image.includes('dab_pen_') && !post.image.includes('thc_vape_pen_') && !post.image.includes('cali_pen_') && !post.image.includes('thc_carts_')
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
