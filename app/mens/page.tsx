import { supabase } from "@/lib/supabase";
import { Collection } from "@/types";
import MensHero from "@/components/MensHero";
import SubcategoryFilter from "@/components/SubcategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import CulturalSpotlight from "@/components/MensCulturalSpotlight";
import FeaturedCollections from "@/components/FeaturedCollections";
import StyleGuide from "@/components/MensStyleGuide";
import CustomerReviews from "@/components/CustomerReviews";
import MensFAQ from "@/components/MensFAQ";
import CTABanner from "@/components/CTABanner";

export default async function MensPage() {
  // Fetch subcategories for mens
  const { data: categoriesData } = await supabase.rpc("get_subcategories", {
    category_name: "mens",
  });

  const subcategories = categoriesData?.map(
    (cat: { subcategory: string }) => cat.subcategory
  ) || ["formal-wear", "casual-wear", "wedding-attire"];

  // Fetch all men's products (initial load)
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("category", "mens");

  // Fetch featured collections
  const { data: newArrivals } = await supabase
    .from("products")
    .select("*")
    .eq("category", "mens")
    .eq("is_new_arrival", true)
    .limit(5);

  const { data: onSale } = await supabase
    .from("products")
    .select("*")
    .eq("category", "mens")
    .eq("is_sale", true)
    .limit(5);

  const { data: bestSellers } = await supabase
    .from("products")
    .select("*")
    .eq("category", "mens")
    .order("stock", { ascending: false })
    .limit(5);

  const featuredCollections: Collection[] = [
    { title: "New Arrivals", products: newArrivals || [] },
    { title: "On Sale", products: onSale || [] },
    { title: "Best Sellers", products: bestSellers || [] },
  ];

  // Fetch customer reviews for mens
  const { data: reviews } = await supabase
    .from("reviews")
    .select("quote, name, photo")
    .eq("category", "mens")
    .limit(3);

  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <MensHero />
      <SubcategoryFilter subcategories={subcategories} />
      <ProductGrid initialProducts={products || []} />
      <CulturalSpotlight />
      <FeaturedCollections collections={featuredCollections} />
      <StyleGuide />
      <CustomerReviews reviews={reviews || []} />
      <MensFAQ />
      <CTABanner />
    </div>
  );
}

export const metadata = {
  title: "Tibeb - Men&apos;s Habesha Clothing",
  description:
    "Discover our collection of traditional Habesha men&apos;s clothing, perfect for cultural events and celebrations.",
};
