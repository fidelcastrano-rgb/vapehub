import fs from 'fs';

let content = fs.readFileSync('lib/data.ts', 'utf8');

const newProducts = [
  {
    id: 'dankwoods-white-fire',
    name: 'Dankwoods White Fire',
    slug: 'dankwoods-white-fire',
    price: 35.00,
    originalPrice: 45.00,
    description: 'Dankwoods White Fire is a premium pre-roll with high-quality flower wrapped in an all-natural leaf and dusted in kief. Smooth burn, intense flavor.',
    badge: 'Popular',
    category: 'pre-rolls',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiM2YWMzNjAiIC8+PGNpcmNsZSBjeD0iNjAwIiBjeT0iNjAwIiByPSIyMDAiIGZpbGw9IiMzZjg4MTciIC8+PC9zdmc+',
    variants: ['Single Pack', '3 Pack'],
    coa: 'Verified Authentic',
    inStock: true
  },
  {
    id: 'dankwoods-skywalker-og',
    name: 'Dankwoods Skywalker OG',
    slug: 'dankwoods-skywalker-og',
    price: 35.00,
    originalPrice: 45.00,
    description: 'Dankwoods Skywalker OG features classic earthy flavors in a slow-burning leaf, ensuring maximum potency and a long-lasting, relaxed experience.',
    badge: 'Popular',
    category: 'pre-rolls',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiM1ZDhiMzMiIC8+PHBvbHlnb24gcG9pbnRzPSI2MDAsMzAwIDkwMCw5MDAgMzAwLDkwMCIgZmlsbD0iIzQwNmQyZCIgLz48L3N2Zz4=',
    variants: ['Single Pack', '3 Pack'],
    coa: 'Verified Authentic',
    inStock: true
  },
  {
    id: 'packwoods-watermelon-zkittlez',
    name: 'Packwoods Watermelon Zkittlez',
    slug: 'packwoods-watermelon-zkittlez',
    price: 45.00,
    originalPrice: 55.00,
    description: 'Premium Packwoods Watermelon Zkittlez. Filled with 2g of top-shelf flower, rolled in a tobacco-free wrap with an engineered glass filter.',
    badge: 'hot',
    category: 'pre-rolls',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiNlNzczYjgiIC8+PHBvbHlnb24gcG9pbnRzPSI2MDAsMzAwIDkwMCw5MDAgMzAwLDkwMCIgZmlsbD0iI2I5MjZlMiIgLz48L3N2Zz4=',
    variants: ['Single Pack'],
    coa: 'Verified Authentic',
    inStock: true
  },
  {
    id: 'packwoods-blue-slushie',
    name: 'Packwoods Blue Slushie',
    slug: 'packwoods-blue-slushie',
    price: 45.00,
    originalPrice: 55.00,
    description: 'Packwoods Blue Slushie offers an incredibly sweet flavor profile combined with 2g of top-shelf infused flower for extra strength.',
    badge: 'new',
    category: 'pre-rolls',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IiM2MGE1ZmEiIC8+PHBvbHlnb24gcG9pbnRzPSI2MDAsMzAwIDkwMCw5MDAgMzAwLDkwMCIgZmlsbD0iIzFkNGVkOCIgLz48L3N2Zz4=',
    variants: ['Single Pack'],
    coa: 'Verified Authentic',
    inStock: true
  }
];

const insertionPoint = content.indexOf('];\n\nexport const blogPosts');
if (insertionPoint !== -1) {
  const customProductsString = newProducts.map(p => ",\n" + JSON.stringify(p, null, 2).replace(/"image": "data/g, '"image": `data').replace(/svg\+xml;base64,.*"/g, match => match.slice(0, -1) + "`")).join('');
  content = content.slice(0, insertionPoint) + customProductsString + content.slice(insertionPoint);
  fs.writeFileSync('lib/data.ts', content);
  console.log('Successfully appended products.');
} else {
  console.log('Could not find insertion point!!!');
}
