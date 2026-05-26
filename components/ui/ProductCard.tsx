'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useOrder } from '@/lib/order-context';
import { Check } from 'lucide-react';

export function ProductCard({ product }: { product: any }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useOrder();

  const handleAdd = () => {
    addItem({
      name: product.name,
      variant: selectedVariant,
      price: product.price,
      qty: 1
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col bg-background rounded-2xl border border-border overflow-hidden group hover:border-gray-600 transition">
      <div className="relative aspect-square bg-surface p-6">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.badge}
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 opacity-70 w-12 h-12 pointer-events-none">
          <Image 
            src="/images/logo.png"
            alt="The Vape Hub UK"
            fill
            className="object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
        <Image 
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-primary font-bold tracking-wider mb-2 uppercase">{product.category}</div>
        <h3 className="font-bold text-lg mb-2 font-space-grotesk leading-tight">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-xl">£{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">£{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <div className="text-xs text-emerald-400 bg-emerald-400/10 inline-block px-2 py-1 rounded mb-4 font-mono font-medium">
          {product.coa}
        </div>
        
        <div className="mt-auto flex flex-col gap-3">
          <select 
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="w-full bg-[#1a1a1f] border border-border text-sm rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer"
          >
            {product.variants.map((v: string) => (
              <option key={v} value={v} className="bg-[#1a1a1f] text-white">{v}</option>
            ))}
          </select>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 flex justify-center py-2.5 rounded-lg font-bold text-sm transition-all ${
                added ? 'bg-whatsapp text-white' : 'bg-primary hover:bg-primary-hover text-white'
              }`}
            >
              {added ? (
                <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Added</span>
              ) : 'Add to Order'}
            </button>
            <Link 
              href={`/products/${product.slug}`}
              className="bg-surface hover:bg-gray-800 text-white border border-border py-2.5 px-4 rounded-lg text-sm font-medium transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
