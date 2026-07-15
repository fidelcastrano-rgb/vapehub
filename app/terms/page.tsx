import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | THE VAPE HUB UK',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.thevapehub.co.uk/terms',
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-24">
      <Breadcrumbs items={[{ label: 'Terms of Use', href: '/terms' }]} />
      <h1 className="text-4xl font-bold font-space-grotesk mb-8">Terms of Use</h1>
      <div className="prose prose-invert prose-lg text-gray-400">
        <p>Last Updated: May 21, 2026</p>
        <h2>1. Age Restriction</h2>
        <p>By accessing this website, you confirm you are 18 years of age or older. We employ strict age verification protocols; any attempt to purchase by minors will result in immediate cancellation and potential reporting to local authorities.</p>
        <h2>2. Use of Products</h2>
        <p>Our products contain nicotine or THC/CBD where stated. These substances are highly addictive. Products are sold for personal or verified wholesale use only.</p>
        <h2>3. Liability</h2>
        <p>The Vape Hub UK is not liable for any health conditions arising from the use of products purchased. Consult a medical professional before use.</p>
        <h2>4. Ordering and Payments</h2>
        <p>We accept Crypto (Bitcoin, USDT, USDC, Ethereum) and Bank Transfer. Due to banking restrictions surrounding our industry, Bank Transfer is strictly limited to orders above £100. Any orders under £100 must be paid via Crypto. We reserve the right to cancel any order flagged by our fraud systems.</p>
      </div>
    </div>
  );
}
