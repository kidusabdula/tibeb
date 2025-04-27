import { supabase } from '@/lib/supabase';
//import { Product } from '@/types';
import DressesHero from '@/components/DressesHero';
import SubcategoryFilter from '@/components/SubcategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import CulturalSpotlight from '@/components/CulturalSpotlight';
import FeaturedCollections from '@/components/FeaturedCollections';
import StyleGuide from '@/components/StyleGuide';
import CustomerReviews from '@/components/CustomerReviews';
import DressesFAQ from '@/components/DressesFAQ';
import CTABanner from '@/components/CTABanner';

export default async function DressesPage() {
  // Fetch subcategories for dresses
  const { data: categoriesData } = await supabase
    .rpc('get_subcategories', { category_name: 'dresses' });

  const subcategories = categoriesData?.map((cat: { subcategory: string }) => cat.subcategory) || [
    'events-holidays',
    'simple-dresses',
    'wedding-dresses',
    'coffee-dresses',
  ];

  // Fetch all dresses (initial load)
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'dresses');

  // Fetch featured collections (e.g., new arrivals, on sale, best sellers)
  const { data: newArrivals } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'dresses')
    .eq('is_new_arrival', true)
    .limit(5);

  const { data: onSale } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'dresses')
    .eq('is_sale', true)
    .limit(5);

  const { data: bestSellers } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'dresses')
    .order('stock', { ascending: false }) // Assuming lower stock means more sales
    .limit(5);

  const featuredCollections = [
    { title: 'New Arrivals', products: newArrivals || [] },
    { title: 'On Sale', products: onSale || [] },
    { title: 'Best Sellers', products: bestSellers || [] },
  ];

  // Fetch customer reviews for dresses
  const { data: reviews } = await supabase
    .from('reviews')
    .select('quote, name, photo')
    .eq('category', 'dresses')
    .limit(3);

  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <DressesHero />
      <SubcategoryFilter subcategories={subcategories} />
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