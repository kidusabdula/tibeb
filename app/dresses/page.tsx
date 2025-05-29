import DressesHero from '@/components/DressesHero';
import ProductGrid from '@/components/ProductGrid';
import CulturalSpotlight from '@/components/CulturalSpotlight';
import FeaturedCollections from '@/components/FeaturedCollections';
import StyleGuide from '@/components/StyleGuide';
import CustomerReviews from '@/components/CustomerReviews';
import DressesFAQ from '@/components/DressesFAQ';
import CTABanner from '@/components/CTABanner';
import { Product } from '@/types';

// Hardcode base URL for development; use environment variable in production
const BASE_URL = 'http://localhost:3000';

export default async function DressesPage() {
  // Fetch all dresses
  const productsRes = await fetch(`${BASE_URL}/api/products?category=Dresses`, { cache: 'no-store' });
  if (!productsRes.ok) {
    throw new Error(`Failed to fetch products: ${productsRes.statusText}`);
  }
  const { data: products } = await productsRes.json() as { data: Product[] };

  // Fetch featured collections
  const newArrivalsRes = await fetch(`${BASE_URL}/api/products?category=Dresses&is_new_arrival=true&limit=5`, { cache: 'no-store' });
  if (!newArrivalsRes.ok) {
    throw new Error(`Failed to fetch new arrivals: ${newArrivalsRes.statusText}`);
  }
  const { data: newArrivals } = await newArrivalsRes.json() as { data: Product[] };

  const onSaleRes = await fetch(`${BASE_URL}/api/products?category=Dresses&is_sale=true&limit=5`, { cache: 'no-store' });
  if (!onSaleRes.ok) {
    throw new Error(`Failed to fetch on sale products: ${onSaleRes.statusText}`);
  }
  const { data: onSale } = await onSaleRes.json() as { data: Product[] };

  const bestSellersRes = await fetch(`${BASE_URL}/api/products?category=Dresses&order=stock&ascending=false&limit=5`, { cache: 'no-store' });
  if (!bestSellersRes.ok) {
    throw new Error(`Failed to fetch best sellers: ${bestSellersRes.statusText}`);
  }
  const { data: bestSellers } = await bestSellersRes.json() as { data: Product[] };

  const featuredCollections = [
    { title: 'New Arrivals', products: newArrivals || [] },
    { title: 'On Sale', products: onSale || [] },
    { title: 'Best Sellers', products: bestSellers || [] },
  ];

  // Fetch customer reviews
  const reviewsRes = await fetch(`${BASE_URL}/api/reviews?category=Dresses&limit=3`, { cache: 'no-store' });
  if (!reviewsRes.ok) {
    throw new Error(`Failed to fetch reviews: ${reviewsRes.statusText}`);
  }
  const { data: reviews } = await reviewsRes.json() as { data: { quote: string; name: string; photo: string }[] };

  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <DressesHero />
      <ProductGrid initialProducts={products || []} />
      <CulturalSpotlight />
      <FeaturedCollections collections={featuredCollections} />
      <StyleGuide />
      <CustomerReviews reviews={reviews || []} />
      <DressesFAQ />
      <CTABanner />
    </div>
  );
}

export const metadata = {
  title: 'Tibeb - Habesha Dresses',
  description: 'Explore our collection of traditional Habesha dresses, perfect for events, weddings, and cultural celebrations.',
};