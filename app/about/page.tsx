import Image from 'next/image';
import { ShieldCheck, Truck, Clock, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | THE VAPE HUB UK',
  description: 'Learn about our mission to supply safe, premium, verified vapes in the UK.',
  alternates: {
    canonical: 'https://www.thevapehub.co.uk/about',
  }
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-10">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-5">
          <h1 className="text-[20vw] font-bold whitespace-nowrap leading-none select-none text-white font-space-grotesk tracking-tighter mix-blend-overlay">
            AUTHENTIC
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 md:px-8 w-full z-10 text-center flex flex-col items-center">
          <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />
          
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk leading-tight tracking-tight mb-6">
            Setting the standard <br />for <span className="text-primary">UK Vaping.</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            We built The Vape Hub to eliminate the counterfeit market. Authentic devices, transparent testing, and reliable delivery for retail and wholesale.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          <div className="text-center">
            <div className="text-4xl font-bold font-space-grotesk text-primary mb-2">2021</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Established</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-space-grotesk text-primary mb-2">10k+</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Active Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-space-grotesk text-primary mb-2">0</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Counterfeits Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-space-grotesk text-primary mb-2">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Customer Support</div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">Our Story.</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>The UK vape market has been saturated with fake products offering poor quality and significant health risks. We watched this develop and knew there had to be a secure, trusted corridor for consumers and small shops to get verified stock.</p>
              <p>The Vape Hub was founded with a singular protocol: absolutely zero unverified merchandise touches our inventory. If we cannot trace the product directly back to the manufacturer, we don&apos;t sell it.</p>
            </div>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck className="w-32 h-32"/></div>
             <h3 className="text-2xl font-bold mb-4 font-space-grotesk text-white">COA Data Card</h3>
             <p className="text-gray-400 mb-6 text-sm">Every batch of premium stock is accompanied by a Certificate of Analysis assuring heavy metal absence and precise potency.</p>
             <div className="space-y-3 font-mono text-xs">
               <div className="flex justify-between border-b border-border pb-2"><span>Heavy Metals</span><span className="text-emerald-400">PASS</span></div>
               <div className="flex justify-between border-b border-border pb-2"><span>Pesticides</span><span className="text-emerald-400">PASS</span></div>
               <div className="flex justify-between border-b border-border pb-2"><span>Solvents</span><span className="text-emerald-400">PASS</span></div>
               <div className="flex justify-between border-b border-border pb-2"><span>Potency Match</span><span className="text-emerald-400">PASS</span></div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-surface rounded-[40px] border border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-space-grotesk mb-4">Core Principles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: ShieldCheck, title: 'Uncompromising Safety', desc: 'No grey-market products.'},
            {icon: Truck, title: 'Speed & Reliability', desc: 'Orders placed before 2PM leave the warehouse the same day.'},
            {icon: CheckCircle2, title: 'Rigorous Verification', desc: 'Every brand is vetted and monitored.'}
          ].map((v, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-8 hover:border-primary transition group">
               <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                 <v.icon className="w-7 h-7 text-primary" />
               </div>
               <h3 className="font-bold text-xl mb-3 text-white">{v.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-24">
        <h2 className="text-4xl font-bold font-space-grotesk mb-16 text-center">Company Timeline</h2>
        <div className="space-y-12">
          {[
            { year: '2021', text: 'Launched original London warehouse' },
            { year: '2022', text: 'Expanded to cover Northern Ireland distribution' },
            { year: '2023', text: 'Implemented strict 3-tier authenticity protocol' },
            { year: '2024', text: 'Reached 10,000 active retail/wholesale clients' },
            { year: '2025', text: 'Launched updated platform with seamless ordering builder' },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start relative before:absolute before:left-3.5 before:top-10 before:-bottom-12 before:w-[2px] before:bg-border last:before:hidden">
              <div className="w-8 h-8 rounded-full bg-primary shrink-0 z-10 flex items-center justify-center border-4 border-background text-[10px] font-bold text-white shadow-lg" />
              <div>
                <h4 className="font-bold text-xl font-space-grotesk text-primary mb-2">{item.year}</h4>
                <p className="text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scam Warning Section */}
      <section className="border-t-2 border-error bg-surface relative">
        <div className="absolute inset-0 bg-error/5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10">
          <div className="bg-error text-white font-bold px-6 py-4 rounded-xl flex items-center gap-4 mb-12 shadow-[0_0_20px_rgba(255,68,68,0.2)]">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            VAPE SCAM WARNING: Be aware of counterfeit operators across Telegram and Instagram.
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
             <div className="bg-background border border-error/30 p-6 rounded-xl">
               <XCircle className="w-8 h-8 text-error mb-4" />
               <h4 className="font-bold mb-2">Fake Websites</h4>
               <p className="text-sm text-gray-400">Scammers clone legitimate brands. Always check the URL and look for verified TrustPilot reviews.</p>
             </div>
           <div className="bg-background border border-error/30 p-6 rounded-xl">
             <XCircle className="w-8 h-8 text-error mb-4" />
             <h4 className="font-bold mb-2">Social Media Traps</h4>
             <p className="text-sm text-gray-400">Telegram channels offering prices that are &quot;too good to be true&quot; usually ship fakes or nothing at all.</p>
           </div>
           <div className="bg-background border border-error/30 p-6 rounded-xl">
             <XCircle className="w-8 h-8 text-error mb-4" />
             <h4 className="font-bold mb-2">Cheap Prices = Fakes</h4>
             <p className="text-sm text-gray-400">If a disposable is selling for £2 below standard wholesale, it&apos;s counterfeit logic.</p>
           </div>
          </div>

          <div className="bg-background rounded-2xl border border-border overflow-hidden">
             <table className="w-full text-left text-sm">
               <thead className="bg-surface">
                 <tr>
                   <th className="p-4 font-bold text-gray-300">Feature</th>
                   <th className="p-4 font-bold text-gray-300 border-l border-border">Legitimate (The Vape Hub)</th>
                   <th className="p-4 font-bold text-error border-l border-border">Counterfeit / Scams</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 text-gray-400">Packaging</td>
                    <td className="p-4 border-l border-border text-emerald-400 font-medium">Vibrant print, working scratch/QR code</td>
                    <td className="p-4 border-l border-border text-error/80">Missing codes, poor print quality</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400">Battery Life</td>
                    <td className="p-4 border-l border-border text-emerald-400 font-medium">True to puff count</td>
                    <td className="p-4 border-l border-border text-error/80">Dies after 1/3 of advertised puffs</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400">Customer Service</td>
                    <td className="p-4 border-l border-border text-emerald-400 font-medium">Responsive email / WhatsApp</td>
                    <td className="p-4 border-l border-border text-error/80">Blocked immediately after payment</td>
                  </tr>
               </tbody>
             </table>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="font-bold text-2xl font-space-grotesk mb-6">5-Step Verification Guide</h3>
            <ol className="text-left max-w-2xl mx-auto space-y-4 text-gray-400 list-decimal list-inside">
              <li>Open your device and locate the authentication label.</li>
              <li>Scratch off the foil to reveal the secure QR code.</li>
              <li>Scan the code with your phone camera.</li>
              <li>Ensure the link takes you to the &quot;official&quot; brand website (check URL spelling).</li>
              <li>Confirm the query result says &quot;Authentic&quot; and has not been scanned 5,000 times.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
