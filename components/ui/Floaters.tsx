'use client';
import { useOrder } from '@/lib/order-context';
import { ShoppingBag, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const shippingOptions = [
  { id: 'tracked-24', name: 'Royal Mail Tracked 24', price: 4.99, description: 'Next Day UK' },
  { id: 'tracked-48', name: 'Royal Mail Tracked 48', price: 3.50, description: '2-3 Days UK' },
  { id: 'special-delivery', name: 'Special Delivery by 1pm', price: 8.99, description: 'Guaranteed Next Day' },
  { id: 'international', name: 'International Tracked Worldwide', price: 14.99, description: '5-7 Days Global' },
];

export function Floaters() {
  const { items, total, removeItem } = useOrder();
  const [orderOpen, setOrderOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Crypto (USDT / USDC / BTC / ETH)');
  const [shippingOption, setShippingOption] = useState('tracked-24');

  // Trigger drawer top open auto as soon as products list changes length and items are added
  useEffect(() => {
    if (items.length > 0) {
      const timer = setTimeout(() => {
        setOrderOpen(true);
      }, 0);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [items.length]);

  const selectedShipping = shippingOptions.find(o => o.id === shippingOption) || shippingOptions[0];
  const grandTotal = total + selectedShipping.price;

  const handleWhatsApp = () => {
    let msg = 'Hi The Vape Hub UK, I would like to order:\n\n';
    msg += `Customer Details:\nName: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nDelivery Address: ${address || 'N/A'}\n\n`;
    msg += `Shipping Selection:\n- ${selectedShipping.name} (£${selectedShipping.price.toFixed(2)})\n\n`;
    msg += `Payment Selection:\n- ${paymentMethod}\n\n`;
    msg += `Products:\n`;
    items.forEach(i => {
      msg += `- ${i.qty}x ${i.name} (${i.variant}) @ £${i.price.toFixed(2)}\n`;
    });
    msg += `\nSubtotal: £${total.toFixed(2)}\n`;
    msg += `Shipping: £${selectedShipping.price.toFixed(2)}\n`;
    msg += `Grand Total: £${grandTotal.toFixed(2)}\n`;
    window.open(`https://wa.me/447341056054?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleEmail = () => {
    let msg = 'Hi The Vape Hub UK, I would like to order:\n\n';
    msg += `Customer Details:\nName: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nDelivery Address: ${address || 'N/A'}\n\n`;
    msg += `Shipping Selection:\n- ${selectedShipping.name} (£${selectedShipping.price.toFixed(2)})\n\n`;
    msg += `Payment Selection:\n- ${paymentMethod}\n\n`;
    msg += `Products:\n`;
    items.forEach(i => {
      msg += `- ${i.qty}x ${i.name} (${i.variant}) @ £${i.price.toFixed(2)}\n`;
    });
    msg += `\nSubtotal: £${total.toFixed(2)}\n`;
    msg += `Shipping: £${selectedShipping.price.toFixed(2)}\n`;
    msg += `Grand Total: £${grandTotal.toFixed(2)}\n`;
    window.open(`mailto:sales@thevapehub.co.uk?subject=New Order Request&body=${encodeURIComponent(msg)}`);
  };

  return (
    <>
      <a
        href="https://wa.me/447341056054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-whatsapp hover:bg-green-600 text-white rounded-full p-4 shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold hidden md:inline">Chat with us</span>
      </a>

      {items.length > 0 && (
        <div 
          className={`fixed bottom-6 right-6 z-40 bg-[#111111] opacity-100 border-2 border-primary rounded-xl shadow-2xl w-[95vw] sm:w-[380px] md:w-[400px] flex flex-col transition-transform duration-300 ${
            orderOpen ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'
          }`}
          style={{ maxHeight: '85vh' }}
        >
          {/* Header */}
          <div 
            className="h-[60px] px-4 flex items-center justify-between cursor-pointer bg-[#18181b] rounded-t-xl border-b border-border shrink-0"
            onClick={() => setOrderOpen(!orderOpen)}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {items.length}
                </span>
              </div>
              <span className="font-bold text-sm tracking-wide text-white uppercase font-space-grotesk">Order Builder</span>
            </div>
            <span className="font-bold text-white">£{total.toFixed(2)}</span>
          </div>

          {/* Scrollable Body - Completely Non-transparent Solid color backgrounds */}
          {orderOpen && (
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 bg-[#111111] text-white">
              {/* 1. Items in Order List */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary border-b border-border/50 pb-1">Items in Order</h4>
                <div className="flex flex-col gap-3 divide-y divide-border/20">
                  {items.map((item) => (
                    <div key={item.key} className="flex justify-between items-start pt-2 first:pt-0 gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold truncate text-white">{item.name}</div>
                        <div className="text-xs text-zinc-400">{item.variant}</div>
                        <div className="text-xs text-zinc-500 mt-0.5">Qty: {item.qty} x £{item.price.toFixed(2)}</div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.key)}
                        className="text-zinc-500 hover:text-error transition p-1"
                        title="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Customer Form Info */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary border-b border-border/50 pb-1">Contact & Delivery Info</h4>
                <div className="flex flex-col gap-2.5">
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      className="bg-[#18181b] border border-border/80 focus:border-primary/80 rounded px-2.5 py-2 text-sm text-white w-full outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      className="bg-[#18181b] border border-border/80 focus:border-primary/80 rounded px-2.5 py-2 text-sm text-white w-full outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 7123 456789" 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)} 
                      className="bg-[#18181b] border border-border/80 focus:border-primary/80 rounded px-2.5 py-2 text-sm text-white w-full outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Delivery Address</label>
                    <textarea 
                      placeholder="Street Address, City, Postcode, Country" 
                      value={address} 
                      onChange={e => setAddress(e.target.value)} 
                      className="bg-[#18181b] border border-border/80 focus:border-primary/80 rounded px-2.5 py-2 text-sm text-white w-full outline-none transition min-h-[60px] resize-none" 
                    />
                  </div>
                </div>
              </div>

              {/* 3. Shipping Options */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary border-b border-border/50 pb-1">Shipping Category</h4>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Select Postal Courier</label>
                  <select 
                    value={shippingOption} 
                    onChange={e => setShippingOption(e.target.value)}
                    className="bg-[#18181b] text-white border border-border/80 rounded p-2 text-sm w-full outline-none focus:border-primary transition cursor-pointer"
                  >
                    {shippingOptions.map(opt => (
                      <option key={opt.id} value={opt.id} className="bg-zinc-950 text-white">
                        {opt.name} (+£{opt.price.toFixed(2)}) — {opt.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Payment Selection */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary border-b border-border/50 pb-1">Payment Options</h4>
                <div>
                  <label className="block text-[11px] text-zinc-400 mb-1 font-medium">Choose Payment Method</label>
                  <select 
                    value={paymentMethod} 
                    onChange={e => setPaymentMethod(e.target.value)}
                    className="bg-[#18181b] text-white border border-border/80 rounded p-2 text-sm w-full outline-none focus:border-primary transition cursor-pointer mb-2"
                  >
                    <option value="Crypto (USDT / USDC / BTC / ETH)" className="bg-zinc-950 text-white">Crypto (USDT / USDC / BTC / ETH)</option>
                    <option value="Bank Transfer (Min £100)" className="bg-zinc-950 text-white">Bank Transfer (Strictly Orders Over £100)</option>
                    <option value="Western Union / MoneyGram" className="bg-zinc-950 text-white">Western Union / MoneyGram</option>
                  </select>
                </div>

                {/* Info Text Boxes */}
                {paymentMethod.includes('Crypto') && (
                  <div className="text-xs text-gray-400 leading-relaxed bg-[#18181b] p-3 rounded-lg border border-border">
                    <div className="font-bold text-gray-200 mb-1">Supported Coins:</div>
                    <ul className="list-disc pl-4 mb-2 space-y-1">
                      <li><span className="font-semibold text-primary">Bitcoin:</span> 1Hb3EVsnHJ3zHZC2qPopPyvruapETTRMpp</li>
                      <li><span className="font-semibold text-primary">USDT (Tron TRC20):</span> TGCL2BMvqCJSRQzL2T7ZpQgJnnbrFcvpUP</li>
                      <li><span className="font-semibold text-primary">USDC / ETH:</span> 0x9a30850453dc0a81cda59a8a59575ad19ae51bf3</li>
                    </ul>
                  </div>
                )}

                {paymentMethod.includes('Bank') && (
                  <div className="text-xs text-gray-400 leading-relaxed bg-[#18181b] p-3 rounded-lg border border-border">
                    <p className="text-yellow-400 font-bold mb-1">Limit Restriction:</p>
                    <p>Due to industry classification regulations, direct bank transfer is exclusively restricted to wholesale/bulk orders exceeding <span className="font-bold text-white">£100</span>.</p>
                  </div>
                )}

                {paymentMethod.includes('Western') && (
                  <div className="text-xs text-gray-400 leading-relaxed bg-[#18181b] p-3 rounded-lg border border-border">
                    <p className="font-bold text-gray-200 mb-1">Remittance Instruction:</p>
                    <p>Once you submit the order, the payment details for Western Union or MoneyGram transfer will be provided details instantly.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          {orderOpen && (
            <div className="p-4 border-t border-border bg-[#18181b] rounded-b-xl flex flex-col gap-3 shrink-0">
              <div className="space-y-1 text-sm border-b border-border/40 pb-2">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Shipping ({selectedShipping.name})</span>
                  <span>£{selectedShipping.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-white text-base pt-1">
                  <span>Grand Total</span>
                  <span className="text-primary">£{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full bg-whatsapp text-white py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Submit Order via WhatsApp
              </button>
              <button 
                onClick={handleEmail}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg font-bold text-sm transition"
              >
                Submit Order via Email
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
