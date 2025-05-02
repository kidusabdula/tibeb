import { supabase } from '@/lib/supabase';
import { Product, Review, Collection } from '@/types';
import CouplesHero from '@/components/CouplesHero';
import SubcategoryFilter from '@/components/SubcategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import CulturalSpotlight from '@/components/CouplesCulturalSpotlight';
import FeaturedCollections from '@/components/FeaturedCollections';
import StyleGuide from '@/components/CouplesStyleGuide';
import CustomerReviews from '@/components/CustomerReviews';
import CouplesFAQ from '@/components/CouplesFAQ';
import CTABanner from '@/components/CTABanner';

export default async function CouplesPage() {
  // Fetch subcategories for couples
  const { data: categoriesData } = await supabase
    .rpc('get_subcategories', { category_name: 'couples' });

  const subcategories = categoriesData?.map((cat: { subcategory: string }) => cat.subcategory) || [
    'wedding-sets',
    'anniversary-sets',
    'casual-sets',
  ];

  // Fetch all couples' products (initial load)
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'couples');

  // Fetch featured collections
  const { data: newArrivals } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'couples')
    .eq('is_new_arrival', true)
    .limit(5);

  const { data: onSale } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'couples')
    .eq('is_sale', true)
    .limit(5);

  const { data: bestSellers } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'couples')
    .order('stock', { ascending: false })
    .limit(5);

  const featuredCollections: Collection[] = [
    { title: 'New Arrivals', products: newArrivals || [] },
    { title: 'On Sale', products: onSale || [] },
    { title: 'Best Sellers', products: bestSellers || [] },
  ];

  const { data: reviews } = await supabase
    .from('reviews')
    .select('quote, name, photo')
    .eq('category', 'couples')
    .limit(3);

  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <CouplesHero />
      <SubcategoryFilter subcategories={subcategories} />
      <ProductGrid initialProducts={products || []} />
      <CulturalSpotlight />
      <FeaturedCollections collections={featuredCollections} />
      <StyleGuide />
      <CustomerReviews reviews={reviews || []} />
      <CouplesFAQ />
      <CTABanner />
    </div>
  );
}

export const metadata = {
  title: 'Tibeb - Couples&apos; Matching Habesha Clothing',
  description: 'Discover our collection of matching Habesha clothing sets for couples, perfect for weddings, anniversaries, and cultural celebrations.',
};
