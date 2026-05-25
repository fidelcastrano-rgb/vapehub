import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | THE VAPE HUB UK',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://thevapehub.co.uk/privacy',
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-24">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      <h1 className="text-4xl font-bold font-space-grotesk mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-lg text-gray-400">
        <p>Last Updated: May 21, 2026</p>
        <h2>1. Data Collection</h2>
        <p>We collect necessary information to fulfill your orders, including name, shipping address, and contact details (email/WhatsApp). Payment information is processed securely by our global payment partners and never stored directly on our servers.</p>
        <h2>2. Data Usage</h2>
        <p>Your data is strictly used for order fulfillment, fraud prevention, and optional promotional marketing. We do not sell your data to third parties.</p>
        <h2>3. Local Storage</h2>
        <p>We use local storage mechanisms to persist your &quot;Order Builder&quot; session accurately. No sensitive data is held in local storage.</p>
        <h2>4. Your Rights</h2>
        <p>Under GDPR, you have the right to request deletion of your account and order history by contacting sales@thevapehub.co.uk.</p>
      </div>
    </div>
  );
}
