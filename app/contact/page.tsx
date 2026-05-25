import { MessageCircle, Mail, MapPin, Store, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | THE VAPE HUB UK',
  description: 'Get in touch with The Vape Hub UK via WhatsApp or Email.',
  alternates: {
    canonical: 'https://thevapehub.co.uk/contact',
  }
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 tracking-tight">Get in touch.</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Fastest response times in the UK. Contact us to start your wholesale order or ask tracking queries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-surface border-2 border-whatsapp/50 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 bg-whatsapp/20 w-48 h-48 rounded-full blur-3xl group-hover:bg-whatsapp/30 transition duration-500"></div>
            <MessageCircle className="w-12 h-12 text-whatsapp mb-6 relative z-10" />
            <h2 className="text-2xl font-bold font-space-grotesk mb-2 relative z-10">WhatsApp (Recommended)</h2>
            <p className="text-gray-400 mb-8 relative z-10">Our dedicated support channel for the fastest order processing and queries.</p>
            
            <table className="w-full text-sm text-gray-400 mb-8 relative z-10">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Mon - Fri</td><td className="py-2 text-right text-white">9:00 AM - 10:00 PM</td></tr>
                <tr><td className="py-2">Saturday</td><td className="py-2 text-right text-white">10:00 AM - 8:00 PM</td></tr>
                <tr><td className="py-2">Sunday</td><td className="py-2 text-right text-white">10:00 AM - 4:00 PM</td></tr>
                <tr><td className="py-2 font-bold text-white">Avg Response Time</td><td className="py-2 text-right text-whatsapp font-bold">&lt; 15 mins</td></tr>
              </tbody>
            </table>
            
            <a href="https://wa.me/447341056054" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-whatsapp text-white py-4 rounded-xl font-bold hover:bg-green-600 transition relative z-10">
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-surface border border-border p-8 rounded-3xl">
            <Mail className="w-10 h-10 text-primary mb-4" />
            <h2 className="text-xl font-bold font-space-grotesk mb-2">Email Support</h2>
            <p className="text-gray-400 text-sm mb-6">Best for wholesale applications, corporate compliance, and large bespoke orders.</p>
            <a href="mailto:sales@thevapehub.co.uk" className="inline-flex items-center gap-2 text-white font-bold pb-1 border-b-2 border-primary hover:text-primary transition">
              sales@thevapehub.co.uk
            </a>
          </div>

          <div className="bg-black border border-border p-8 rounded-3xl">
            <h3 className="font-bold text-xl mb-6 font-space-grotesk">Our 4-Step Order Flow</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="bg-surface w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary shrink-0 border border-border text-sm">1</span>
                <div>
                  <div className="font-bold text-sm">Build Your Order</div>
                  <div className="text-xs text-gray-400 mt-1">Use the website to add products to your cart order builder.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-surface w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary shrink-0 border border-border text-sm">2</span>
                <div>
                  <div className="font-bold text-sm">Send to Us</div>
                  <div className="text-xs text-gray-400 mt-1">Submit the order via WhatsApp or Email.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-surface w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary shrink-0 border border-border text-sm">3</span>
                <div>
                  <div className="font-bold text-sm">Invoice & Payment</div>
                  <div className="text-xs text-gray-400 mt-1">We confirm stock and send a secure payment link via email/msg.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-surface w-8 h-8 rounded-full flex items-center justify-center font-bold text-whatsapp shrink-0 border border-border text-sm">✓</span>
                <div>
                  <div className="font-bold text-sm">Dispatch & Tracking</div>
                  <div className="text-xs text-gray-400 mt-1">Order processed. Tracking number provided instantly.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          <div className="bg-error/10 border-l-4 border-error p-6 rounded-r-xl flex items-start gap-4">
            <Store className="w-8 h-8 text-error shrink-0" />
            <div>
              <h3 className="font-bold text-error mb-1">Online Only - No Walk-ins</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                For security and efficiency, our warehouse locations are not open to the public. All orders must be placed online and shipped. Collection is not available under any circumstances.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-3xl p-8">
            <h3 className="text-xl font-bold font-space-grotesk mb-6 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary"/> Safety Rules</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5"/> 18+ Only. Verification via ID required for first-time buyers.</li>
              <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5"/> Do not share payment links. Secure links are generated per invoice.</li>
              <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5"/> We do NOT accept cash. Bank transfer or secure card processor only.</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <div className="font-bold mb-1">London</div>
              <div className="text-xs text-gray-500">Primary Dispatch Site</div>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <div className="font-bold mb-1">Northern Ireland</div>
              <div className="text-xs text-gray-500">Regional Distribution</div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-3xl overflow-hidden mt-6">
             <table className="w-full text-sm">
               <thead className="bg-background">
                 <tr>
                   <th className="p-4 text-left font-bold border-b border-border text-white">Shipping Method</th>
                   <th className="p-4 text-right font-bold border-b border-border text-white">Cost</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-border">
                 <tr>
                   <td className="p-4 text-gray-400">Royal Mail Tracked 48</td>
                   <td className="p-4 text-right text-white">£3.99</td>
                 </tr>
                 <tr>
                   <td className="p-4 text-gray-400">Royal Mail Tracked 24</td>
                   <td className="p-4 text-right text-white">£5.99</td>
                 </tr>
                 <tr>
                   <td className="p-4 text-gray-400">Orders over £50</td>
                   <td className="p-4 text-right text-whatsapp font-bold">FREE</td>
                 </tr>
               </tbody>
             </table>
          </div>

        </div>

      </div>
    </div>
  );
}
