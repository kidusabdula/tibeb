import FAQHero from '@/components/FAQHero';
import GeneralFAQ from '@/components/GeneralFAQ';
import ProductFAQ from '@/components/ProductFAQ';
import ShippingFAQ from '@/components/ShippingFAQ';
import ReturnsFAQ from '@/components/ReturnsFAQ';
import CTABanner from '@/components/CTABanner';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <FAQHero />
      <GeneralFAQ />
      <ProductFAQ />
      <ShippingFAQ />
      <ReturnsFAQ />
      <CTABanner />
    </div>
  );
}

export const metadata = {
  title: 'Tibeb - Frequently Asked Questions',
  description: 'Find answers to common questions about Tibeb, our traditional Habesha clothing, shipping, returns, and more.',
};
