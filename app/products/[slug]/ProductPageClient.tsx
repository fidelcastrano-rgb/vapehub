'use client';

import { useOrder } from '@/lib/order-context';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { useState, use, Suspense } from 'react';
import { MessageCircle, Mail, Check, ShieldCheck, FileCheck, Package2, Shield, Calendar } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Image from 'next/image';

export function ProductContent({ product }: { product: any }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [activeTab, setActiveTab] = useState<'content' | 'storage' | 'supply'>('content');
  const [added, setAdded] = useState(false);
  const { addItem } = useOrder();

  const handleAdd = () => {
    addItem({ name: product.name, variant: selectedVariant, price: product.price, qty: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <Breadcrumbs items={[
        { label: 'Products', href: '/products' },
        { label: product.name }
      ]} />
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        {/* Left: Image & Switcher */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="absolute top-4 right-4 z-10 opacity-70 w-16 h-16 pointer-events-none">
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
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative aspect-square border border-primary rounded-xl overflow-hidden cursor-pointer"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" referrerPolicy="no-referrer" /></div>
            <div className="relative aspect-square border border-border bg-surface rounded-xl overflow-hidden cursor-pointer"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover opacity-50" referrerPolicy="no-referrer" /></div>
            <div className="relative aspect-square border border-border bg-surface rounded-xl overflow-hidden cursor-pointer"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover opacity-50" referrerPolicy="no-referrer" /></div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col items-start pt-4">
          <div className="text-xs text-primary font-bold tracking-wider mb-4 uppercase bg-primary/10 px-3 py-1 rounded-full">{product.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight flex items-center gap-3">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold">from £{product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="text-xl text-gray-500 line-through">£{product.originalPrice.toFixed(2)}</span>}
            <span className="bg-whatsapp/10 text-whatsapp px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"><Check className="w-4 h-4"/> In Stock</span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>
          
          <div className="w-full mb-8">
            <h4 className="font-bold mb-3">Select Variant:</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {product.variants.map((v: string) => (
                <button 
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold transition ${selectedVariant === v ? 'border-primary bg-primary/20 text-white' : 'border-border bg-surface text-gray-400 hover:border-gray-500'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 mb-8">
            <button onClick={handleAdd} className={`w-full py-4 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2 ${added ? 'bg-whatsapp text-white' : 'bg-primary hover:bg-primary-hover text-white'}`}>
              {added ? <><Check className="w-5 h-5"/> Added to Builder</> : 'Build Order'}
            </button>
            <div className="grid grid-cols-2 gap-4">
              <a href={`https://wa.me/447341056054?text=Hi, I want to order ${product.name} (${selectedVariant})`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-transparent border border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white py-3 rounded-xl font-bold transition">
                <MessageCircle className="w-4 h-4"/> WhatsApp
              </a>
              <a href={`mailto:sales@thevapehub.co.uk?subject=Order ${product.name}`} className="flex items-center justify-center gap-2 bg-transparent border border-border hover:bg-surface py-3 rounded-xl font-bold transition">
                <Mail className="w-4 h-4"/> Email Order
              </a>
            </div>
          </div>

          {/* Info boxes */}
          <div className="w-full grid md:grid-cols-2 gap-4 mb-8">
             <div className="border-l-4 border-primary bg-surface p-4 rounded-r-xl">
               <h4 className="text-sm font-bold mb-1 flex items-center gap-2 text-primary"><Package2 className="w-4 h-4"/> How Ordering Works</h4>
               <p className="text-xs text-gray-400 leading-relaxed">Add items to order builder, submit via WhatsApp/Email. We send a secure payment link.</p>
             </div>
             <div className="border-l-4 border-error bg-surface p-4 rounded-r-xl">
               <h4 className="text-sm font-bold mb-1 flex items-center gap-2 text-error"><Shield className="w-4 h-4"/> Safety Protocol</h4>
               <p className="text-xs text-gray-400 leading-relaxed">Age verification required. Authentic QR codes on all packaging.</p>
             </div>
          </div>

          <button className="w-full bg-background border border-border p-4 rounded-xl flex justify-between items-center hover:bg-surface transition">
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="font-bold text-sm">View Certificate of Analysis (COA)</div>
                <div className="text-xs text-emerald-400 font-mono">{product.coa}</div>
              </div>
            </div>
            <span className="text-sm">View &rarr;</span>
          </button>
        </div>
      </div>
      
      {/* 3 Tabs */}
      <div className="max-w-3xl mb-24">
        <div className="flex gap-8 border-b border-border mb-8 overflow-x-auto">
          <button onClick={() => setActiveTab('content')} className={`pb-4 font-bold ${activeTab === 'content' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}>Package Contents</button>
          <button onClick={() => setActiveTab('storage')} className={`pb-4 font-bold ${activeTab === 'storage' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}>Storage</button>
          <button onClick={() => setActiveTab('supply')} className={`pb-4 font-bold ${activeTab === 'supply' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}>Supply Chain</button>
        </div>
        <div className="text-gray-400 leading-relaxed">
           {activeTab === 'content' && <p>Depending on the product, you will receive the device, official packaging, scratch-to-verify authentication labels, and an instruction leaflet. Carts come securely sealed in child-resistant tubes.</p>}
           {activeTab === 'storage' && <p>Store all vapes and distillates at room temperature, away from direct sunlight. Do not leave in hot vehicles. Keep upright to prevent leaking and maintain coil wicking.</p>}
           {activeTab === 'supply' && <p>We source directly from licensed UK distributors and global manufacturers. Our complete supply chain guarantees you will never receive counterfeit products.</p>}
        </div>
      </div>

      <div className="border-t border-border pt-24 mb-12">
        <h2 className="text-3xl font-bold font-space-grotesk mb-8">Related Supply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
