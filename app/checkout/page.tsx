'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useOrder } from '@/lib/order-context';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { 
  ShoppingBag, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Lock,
  Mail,
  Phone,
  User,
  MapPin,
  FileText,
  CreditCard
} from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, clearOrder } = useOrder();

  // Contact State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Delivery Address State
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('United Kingdom');

  // Shipping Method
  const [shippingMethod, setShippingMethod] = useState<'normal' | 'express'>('normal');
  const shippingFee = shippingMethod === 'express' ? 60 : 12;

  // Payment Options
  // Options: 'Crypto', 'Gift Card', 'Bank Transfer'
  const [paymentMethod, setPaymentMethod] = useState<'Crypto' | 'Gift Card' | 'Bank Transfer'>('Crypto');

  // Specific Payment Details
  const [cryptoCoin, setCryptoCoin] = useState('USDT (TRC20)');
  const [txid, setTxid] = useState('');

  const [giftCardBrand, setGiftCardBrand] = useState('Amazon UK Gift Card');
  const [giftCardCode, setGiftCardCode] = useState('');
  const [giftCardPin, setGiftCardPin] = useState('');
  const [giftCardAmount, setGiftCardAmount] = useState('');

  const [bankSenderName, setBankSenderName] = useState('');
  const [bankReference] = useState(() => 'VH-' + Math.floor(100000 + Math.random() * 900000));

  // UI Status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [apiResult, setApiResult] = useState<any>(null);

  const grandTotal = total + shippingFee;


  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) return setError('Please enter your full name.');
    if (!email.trim() || !email.includes('@')) return setError('Please enter a valid email address.');
    if (!phone.trim()) return setError('Please enter your phone number.');
    if (!addressLine1.trim()) return setError('Please enter your street address.');
    if (!city.trim()) return setError('Please enter your city.');
    if (!postcode.trim()) return setError('Please enter your postcode.');

    if (paymentMethod === 'Crypto') {
      if (!txid.trim()) {
        return setError('Please enter the Crypto Transaction Hash (TXID) or sender address to verify payment.');
      }
    } else if (paymentMethod === 'Gift Card') {
      if (!giftCardCode.trim()) {
        return setError('Please enter the Gift Card Claim Code / Serial Number.');
      }
      if (!giftCardAmount.trim()) {
        return setError('Please enter the denomination/amount on the gift card.');
      }
    } else if (paymentMethod === 'Bank Transfer') {
      if (total < 100) {
        return setError('Bank Transfer is strictly restricted to orders exceeding £100.');
      }
      if (!bankSenderName.trim()) {
        return setError('Please enter the sender account name for bank transfer verification.');
      }
    }

    setSubmitting(true);

    const fullAddress = `${addressLine1}${addressLine2 ? ', ' + addressLine2 : ''}\n${city}\n${postcode}\n${country}`;

    let paymentDetails: any = {};
    if (paymentMethod === 'Crypto') {
      paymentDetails = { cryptoCoin, txid };
    } else if (paymentMethod === 'Gift Card') {
      paymentDetails = { giftCardBrand, giftCardCode, giftCardPin, giftCardAmount };
    } else if (paymentMethod === 'Bank Transfer') {
      paymentDetails = { bankReference, bankSenderName };
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address: fullAddress,
          items: items.map(item => ({
            name: item.name,
            variant: item.variant,
            price: item.price,
            qty: item.qty
          })),
          subtotal: total,
          shippingMethod: shippingMethod === 'express' ? 'Express discreet shipping' : 'Normal discreet shipping',
          shippingFee,
          grandTotal,
          paymentMethod,
          paymentDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit order. Please try again.');
      }

      setApiResult(data);
      setSubmitted(true);
      clearOrder(); // Empty client cart upon successful checkout
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // 1. Success Screen
  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-surface border border-border rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-whatsapp to-primary"></div>
          
          <div className="w-20 h-20 bg-whatsapp/10 border-2 border-whatsapp/50 text-whatsapp rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs text-primary font-bold uppercase tracking-widest">Order Success</span>
          <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk mt-3 mb-6">Discreet Order Received!</h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Thank you, <span className="font-bold text-white">{name}</span>! Your order has been securely processed. 
            Both you and our dispatch team have been notified. Your package is now scheduled for <strong>100% discreet packaging and rapid dispatch</strong>.
          </p>

          {/* Email Notification Report Box */}
          <div className="bg-[#18181b] border border-border rounded-2xl p-6 text-left max-w-2xl mx-auto mb-10">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-border/50 pb-2">
              <ShieldCheck className="w-4 h-4 text-whatsapp" /> Notification Dispatched
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-whatsapp mt-1.5 shrink-0"></div>
                <div>
                  <strong className="text-gray-200">Customer Confirmation Email Sent to:</strong>
                  <div className="font-mono text-xs text-primary mt-0.5">{email}</div>
                  <p className="text-xs text-gray-500 mt-1">Contains full order list, safe packaging details, and WhatsApp support linkages.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-whatsapp mt-1.5 shrink-0"></div>
                <div>
                  <strong className="text-gray-200">Admin Notification Dispatched to Fulfillment Center:</strong>
                  <div className="font-mono text-xs text-primary mt-0.5">{apiResult?.recipientEmails?.admin || 'sales@thevapehub.co.uk'}</div>
                  <p className="text-xs text-gray-500 mt-1">Alerts dispatch staff to prepare discreet white-label parcel and register Next Day dispatch.</p>
                </div>
              </div>

              {apiResult?.simulation && (
                <div className="bg-primary/10 border-l-2 border-primary p-3 rounded text-xs text-gray-300 leading-relaxed mt-4">
                  <strong>ℹ️ Sandbox Mode Notice:</strong> Mail is running in sandbox/simulation mode. No physical SMTP servers were configured in `.env.example`, so logs were securely printed to the terminal with perfect validation.
                </div>
              )}
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
            <div className="bg-[#111] p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-white mb-2 font-space-grotesk text-base">🛡️ What happens next?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our team processes vapes using generic packaging (blank mailers). There is zero indication of contents or the brand &quot;The Vape Hub UK&quot; on the external label, protecting your privacy.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-white mb-2 font-space-grotesk text-base">💬 Need Speed?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                To fast-track your order or send a screenshot of your payment, message our dispatch operators directly on WhatsApp. We reply under 15 minutes!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/447341056054" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-whatsapp hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-xl transition flex items-center gap-2 shadow-lg"
            >
              Confirm on WhatsApp
            </a>
            <Link 
              href="/products" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3.5 px-8 rounded-xl transition"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Empty State Screen
  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-xl">
          <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            You don&apos;t have any authentic DMT Vapes, Lost Mary devices, or Hayati pods in your order builder yet. Add items first to complete checkout.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" /> Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  // 3. Main Form Checkout Screen
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <Breadcrumbs items={[{ label: 'Checkout', href: '/checkout' }]} />

      <div className="flex items-center gap-4 mb-8">
        <Link href="/products" className="text-gray-400 hover:text-white transition">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tight">Secure Checkout</h1>
          <p className="text-sm text-gray-400 mt-1">Complete your order with discreet shipping guaranteed.</p>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-error/15 border-l-4 border-error rounded-r-xl text-error text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <div>{error}</div>
        </div>
      )}

      <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Forms (8 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Discreet Shipping / Vape Laws Information Notice Banner */}
          <div className="bg-primary/10 border-l-4 border-primary rounded-r-2xl p-6 relative overflow-hidden">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1.5 font-space-grotesk text-base">⚠️ Crucial Privacy &amp; Classification Warning</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Notice: <span className="text-primary font-bold">Crypto and Gift Cards</span> are the safest, most private, and highly preferred payment methods for vape purchases. 
                  Due to strict bank classifications and legal regulations targeting premium disposable vapes and DMT Vapes, Crypto and Gift Card transactions bypass traditional bank auditing. 
                  This guarantees your transactions remain 100% private, and your packages are processed immediately for <strong>discreet white-label shipping</strong> (plain cardboard boxes, absolutely no external labels listing contents).
                </p>
              </div>
            </div>
          </div>

          {/* Form Section 1: Contact Information */}
          <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-space-grotesk text-white">1. Contact Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Liam Smith"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="liam.smith@example.co.uk"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                />
                <p className="text-[10px] text-gray-500">Order tracking and receipt notifications will be sent here.</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Phone Number (WhatsApp Preferred)</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +44 7123 456789"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                />
                <p className="text-[10px] text-gray-500">Required by the shipping courier to send SMS tracking updates.</p>
              </div>
            </div>
          </div>

          {/* Form Section 2: Delivery Address */}
          <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-space-grotesk text-white">2. Shipping Address</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Address Line 1</label>
                <input 
                  type="text" 
                  required
                  placeholder="Building Name, Street Address"
                  value={addressLine1}
                  onChange={e => setAddressLine1(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Address Line 2 (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Apartment, Suite, Unit, Flat"
                  value={addressLine2}
                  onChange={e => setAddressLine2(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">City / Town</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. London"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Postcode</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. SW1A 1AA"
                    value={postcode}
                    onChange={e => setPostcode(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Country / Destination</label>
                <select 
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition cursor-pointer"
                >
                  <option value="United Kingdom">United Kingdom (UK)</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Europe">Europe (Continental EU)</option>
                  <option value="Australia">Australia</option>
                </select>
                <p className="text-[10px] text-gray-500">We ship securely and discreetly to all of these regions with custom declarations bypass.</p>
              </div>
            </div>
          </div>

          {/* Form Section 3: Shipping Method Selection */}
          <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Truck className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-space-grotesk text-white">3. Shipping Options</h2>
            </div>

            <div className="grid gap-4">
              {/* Normal Shipping */}
              <label 
                className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition ${
                  shippingMethod === 'normal' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-gray-700 bg-black/20'
                }`}
              >
                <input 
                  type="radio" 
                  name="shippingMethod" 
                  checked={shippingMethod === 'normal'}
                  onChange={() => setShippingMethod('normal')}
                  className="mt-1 text-primary focus:ring-primary accent-primary"
                />
                <div className="flex-1">
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>Normal Shipping</span>
                    <span className="text-primary font-space-grotesk">£12.00</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {country === 'United Kingdom' && 'Standard courier delivery (2-3 working days across the UK). Registered with full discreet tracking numbers. No signature required.'}
                    {country === 'Ireland' && 'Discreet registered postal routing to Ireland (3-5 working days). Safely vacuum sealed and custom declared as generic electronics.'}
                    {country === 'Europe' && 'Discreet European postal routing (4-7 working days). Safely vacuum sealed and customs declared as generic household items.'}
                    {country === 'Australia' && 'Discreet long-distance routing to Australia (7-10 working days). Double vacuum-sealed olfactory bypass for absolute delivery guarantee.'}
                  </p>
                </div>
              </label>

              {/* Express Shipping */}
              <label 
                className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition ${
                  shippingMethod === 'express' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-gray-700 bg-black/20'
                }`}
              >
                <input 
                  type="radio" 
                  name="shippingMethod" 
                  checked={shippingMethod === 'express'}
                  onChange={() => setShippingMethod('express')}
                  className="mt-1 text-primary focus:ring-primary accent-primary"
                />
                <div className="flex-1">
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>Express Delivery</span>
                    <span className="text-primary font-space-grotesk">£60.00</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {country === 'United Kingdom' && 'VIP Priority Courier shipping. Dispatched immediately. Delivered next-day across the UK with absolute anonymity.'}
                    {country === 'Ireland' && 'Premium Express Courier to Ireland (1-2 working days). Rapid transit, blank white-label outer packaging, no invoice or tags.'}
                    {country === 'Europe' && 'Premium Express Air Courier to Europe (2-3 working days). Rapid customs clearance, blank packaging, completely anonymous.'}
                    {country === 'Australia' && 'Priority Air Courier to Australia (3-5 working days). Premium express logistics with full end-to-end discreet customs handling.'}
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Form Section 4: Payment Details */}
          <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold font-space-grotesk text-white">4. Payment Information</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {/* Crypto (Always Available) */}
              <button 
                type="button"
                onClick={() => setPaymentMethod('Crypto')}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center font-bold text-xs uppercase tracking-wider transition ${
                  paymentMethod === 'Crypto' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-border text-gray-400 hover:text-white bg-black/20'
                }`}
              >
                <Lock className="w-5 h-5" />
                Crypto (Preferred)
              </button>

              {/* Gift Card (Always Available) */}
              <button 
                type="button"
                onClick={() => setPaymentMethod('Gift Card')}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center font-bold text-xs uppercase tracking-wider transition ${
                  paymentMethod === 'Gift Card' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-border text-gray-400 hover:text-white bg-black/20'
                }`}
              >
                <FileText className="w-5 h-5" />
                Gift Card (Preferred)
              </button>

              {/* Bank Transfer (Conditional!) */}
              <button 
                type="button"
                disabled={total < 100}
                onClick={() => setPaymentMethod('Bank Transfer')}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center font-bold text-xs uppercase tracking-wider transition relative ${
                  total < 100 
                    ? 'border-border/20 text-gray-600 bg-black/5 opacity-50 cursor-not-allowed' 
                    : paymentMethod === 'Bank Transfer'
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border text-gray-400 hover:text-white bg-black/20'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Bank Transfer
                {total < 100 && (
                  <span className="absolute top-1 right-1.5 bg-error text-white text-[8px] px-1 rounded-full uppercase scale-90 font-medium">Locked</span>
                )}
              </button>
            </div>

            {/* Bank Transfer Disabled Information */}
            {total < 100 && (
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs text-yellow-400 leading-relaxed">
                ⚠️ <strong>Bank Transfer is locked:</strong> Due to regulatory vape laws and high processing thresholds, direct wire transfers are strictly locked to bulk/wholesale orders exceeding <strong className="text-white">£100</strong>. Please select Crypto or Gift Card, or increase your cart quantity above £100 to enable bank transfers.
              </div>
            )}

            {/* Render Payment Method Specifics */}
            
            {/* 1. CRYPTO METHOD DETAILS */}
            {paymentMethod === 'Crypto' && (
              <div className="bg-[#111] border border-border p-5 rounded-2xl space-y-5">
                <div className="border-b border-border/50 pb-2">
                  <h3 className="font-bold text-white text-sm">Crypto Payment Instructions</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Select your preferred cryptocurrency below. To prevent network flagging, our secure, single-use wallet address will be dispatched directly to your email and WhatsApp instantly upon order submission.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Select Currency</label>
                  <select 
                    value={cryptoCoin}
                    onChange={e => setCryptoCoin(e.target.value)}
                    className="w-full bg-[#18181b] border border-border rounded-xl p-3 text-sm text-white outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="USDT (TRC20)">USDT (TRC20 - Tron Network) - Highly Recommended</option>
                    <option value="BTC (Bitcoin)">Bitcoin (BTC)</option>
                    <option value="ETH (Ethereum / ERC20)">Ethereum (ETH)</option>
                    <option value="USDC (ERC20)">USDC (ERC20 - Ethereum Network)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Transaction Hash (TXID) or Sender Address</label>
                  <input 
                    type="text"
                    required={paymentMethod === 'Crypto'}
                    placeholder="Enter TXID, Sender Wallet, or 'WhatsApp Request'"
                    value={txid}
                    onChange={e => setTxid(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition font-mono"
                  />
                  <p className="text-[10px] text-gray-500">If you already have our wallet address, paste your TXID. Otherwise, enter your wallet address or type &apos;WhatsApp Request&apos; to receive payment details.</p>
                </div>
              </div>
            )}

            {/* 2. GIFT CARD METHOD DETAILS */}
            {paymentMethod === 'Gift Card' && (
              <div className="bg-[#111] border border-border p-5 rounded-2xl space-y-4">
                <div className="border-b border-border/50 pb-2">
                  <h3 className="font-bold text-white text-sm">Gift Card Payment Instructions</h3>
                  <p className="text-xs text-gray-400 mt-1">We accept major UK digital gift cards which we process securely. Sourced codes must be valid.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Select Gift Card Brand</label>
                    <select 
                      value={giftCardBrand}
                      onChange={e => setGiftCardBrand(e.target.value)}
                      className="w-full bg-[#18181b] border border-border rounded-xl p-3 text-sm text-white outline-none focus:border-primary cursor-pointer"
                    >
                      <option value="Amazon UK Gift Card">Amazon UK Digital Gift Card</option>
                      <option value="Apple UK Gift Card">Apple UK Gift Card</option>
                      <option value="Steam UK Gift Card">Steam Gift Card (UK GBP)</option>
                      <option value="Vanilla Visa UK">Vanilla Visa UK Gift Card</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Gift Card Face Value Amount (£)</label>
                    <input 
                      type="number"
                      required={paymentMethod === 'Gift Card'}
                      placeholder="e.g. 50"
                      value={giftCardAmount}
                      onChange={e => setGiftCardAmount(e.target.value)}
                      className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Gift Card Claim Code / Serial Number</label>
                  <input 
                    type="text"
                    required={paymentMethod === 'Gift Card'}
                    placeholder="Enter claim code (e.g., AQXX-XXXX-XXXX-XXXX)"
                    value={giftCardCode}
                    onChange={e => setGiftCardCode(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Card PIN / Security Code (If Applicable)</label>
                  <input 
                    type="text"
                    placeholder="Enter card PIN / Passcode (leave blank if none)"
                    value={giftCardPin}
                    onChange={e => setGiftCardPin(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition font-mono"
                  />
                  <p className="text-[10px] text-gray-500">Ensure the claim code has not been redeemed yet. Codes are vetted within 15 minutes of checkout.</p>
                </div>
              </div>
            )}

            {/* 3. BANK TRANSFER METHOD DETAILS */}
            {paymentMethod === 'Bank Transfer' && total >= 100 && (
              <div className="bg-[#111] border border-border p-5 rounded-2xl space-y-4">
                <div className="border-b border-border/50 pb-2">
                  <h3 className="font-bold text-white text-sm">Direct Bank Wire Instructions</h3>
                  <p className="text-xs text-gray-400 mt-1">Please transfer the precise grand total using the generated reference key below.</p>
                </div>

                <div className="p-4 bg-[#18181b] border border-border rounded-xl space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 block">Bank Name</span>
                      <strong className="text-white text-sm">Barclays Bank UK</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Account Holder Name</span>
                      <strong className="text-white text-sm">THE VAPE HUB LTD</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Sort Code</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <strong className="text-white text-sm font-mono">20-45-14</strong>
                        <button 
                          type="button"
                          onClick={() => copyToClipboard('204514', 'sort')}
                          className="text-primary hover:underline"
                        >
                          {copiedText === 'sort' ? <Check className="w-3 h-3 text-whatsapp" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Account Number</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <strong className="text-white text-sm font-mono">74839201</strong>
                        <button 
                          type="button"
                          onClick={() => copyToClipboard('74839201', 'acc')}
                          className="text-primary hover:underline"
                        >
                          {copiedText === 'acc' ? <Check className="w-3 h-3 text-whatsapp" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 bg-black/50 p-2.5 rounded border border-border/40 flex justify-between items-center">
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">Strict Payment Reference</span>
                        <strong className="text-primary text-sm font-mono">{bankReference}</strong>
                      </div>
                      <button 
                        type="button"
                        onClick={() => copyToClipboard(bankReference, 'ref')}
                        className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-1 px-3 rounded text-xs transition flex items-center gap-1"
                      >
                        {copiedText === 'ref' ? <Check className="w-3 h-3 text-whatsapp" /> : <Copy className="w-3 h-3" />}
                        {copiedText === 'ref' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Sender Account Name</label>
                  <input 
                    type="text"
                    required={paymentMethod === 'Bank Transfer'}
                    placeholder="Enter the name on your bank account"
                    value={bankSenderName}
                    onChange={e => setBankSenderName(e.target.value)}
                    className="w-full bg-[#111] border border-border focus:border-primary rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                  />
                  <p className="text-[10px] text-gray-500">Required so our finance department can cross-reference the incoming wire.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 space-y-6 sticky top-28">
            <h2 className="text-xl font-bold font-space-grotesk text-white border-b border-border pb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Order Summary
            </h2>

            {/* Cart Items List */}
            <div className="max-h-[250px] overflow-y-auto divide-y divide-border/30 pr-2">
              {items.map((item) => (
                <div key={item.key} className="flex justify-between items-start py-3 first:pt-0 gap-3">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Variant: {item.variant}</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Qty: {item.qty} × £{item.price.toFixed(2)}</p>
                  </div>
                  <strong className="text-sm text-white shrink-0">£{(item.price * item.qty).toFixed(2)}</strong>
                </div>
              ))}
            </div>

            {/* Bill Calculation */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">£{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping ({shippingMethod === 'express' ? 'Express Next Day' : 'Normal Courier'})</span>
                <span className="text-white font-medium">£{shippingFee.toFixed(2)}</span>
              </div>
              
              <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 flex justify-between items-center text-sm text-gray-400">
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-primary" /> Discreet Packaging Guarantee</span>
                <span className="text-primary font-bold uppercase text-[10px]">Free</span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-border/80">
                <span className="text-base font-bold text-white font-space-grotesk">Grand Total</span>
                <strong className="text-2xl text-primary font-space-grotesk font-black">£{grandTotal.toFixed(2)}</strong>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button 
              type="submit"
              disabled={submitting}
              className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg text-base cursor-pointer ${
                submitting 
                  ? 'bg-primary/40 text-gray-400 cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary-hover text-white hover:shadow-primary/20'
              }`}
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Validating Payment Security...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Submit discreet order • £{grandTotal.toFixed(2)}
                </>
              )}
            </button>

            {/* Safety Badges */}
            <div className="pt-4 border-t border-border grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-black/30 rounded-lg border border-border/50">
                <ShieldCheck className="w-5 h-5 text-whatsapp mx-auto mb-1" />
                <span className="text-[9px] font-bold block text-gray-400 leading-tight">100% Authentic</span>
              </div>
              <div className="p-2 bg-black/30 rounded-lg border border-border/50">
                <Lock className="w-5 h-5 text-primary mx-auto mb-1" />
                <span className="text-[9px] font-bold block text-gray-400 leading-tight">Discreet Box</span>
              </div>
              <div className="p-2 bg-black/30 rounded-lg border border-border/50">
                <Truck className="w-5 h-5 text-[#00bcd4] mx-auto mb-1" />
                <span className="text-[9px] font-bold block text-gray-400 leading-tight">Live Tracking</span>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 text-center leading-relaxed max-w-xs mx-auto">
              By submitting this order, you verify that you are 18+ years of age. All shipments undergo double vacuum sealing for olfactory privacy.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
