'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function ProductListClient({ initialProducts }: { initialProducts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'disposable', label: 'Disposables' },
    { id: 'pod-kit', label: 'Pod Kits' },
    { id: 'nic-salt', label: 'E-Liquids' },
    { id: 'thc-carts', label: 'THC Carts' },
    { id: 'thc-disposable', label: 'THC Disposables' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? initialProducts 
    : initialProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }]} />
      
      {/* Dynamic Filter Bar */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border py-4 mb-10 flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                isActive 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-surface border-border hover:border-gray-500 text-gray-300'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded-3xl bg-surface/30">
          <p className="text-gray-400 font-medium">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
