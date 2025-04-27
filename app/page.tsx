import { supabase } from '@/lib/supabase';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';

// Main Home Page Component
export default async function HomePage() {
  // Fetch new arrivals from Supabase
  const { data: newArrivals } = await supabase
    .from('products')
    .select('*')
    .eq('is_new_arrival', true)
    .limit(4);

  // Fetch categories with representative images
  const categoriesData = await Promise.all(
    ['dresses', 'mens', 'couples'].map(async (cat) => {
      const { data } = await supabase
        .from('products')
        .select('image')
        .eq('category', cat)
        .limit(1);
      return { name: cat, image: data?.[0]?.image || '/default-category.jpg' };
    })
  );

  // Mock testimonials and blog posts (replace with real data as needed)
  const testimonials = [
    { quote: "Amazing quality and beautiful designs!", name: "Abebe Kebede", photo: "/abebe.jpg" },
    { quote: "I love my new dress, it's perfect for special occasions.", name: "Selam Tesfaye", photo: "/selam.jpg" },
    { quote: "Great customer service and fast shipping.", name: "Dawit Alemayehu", photo: "/dawit.jpg" },
  ];

  const blogPosts = [
    { title: "The History of Habesha Clothing", excerpt: "Learn about the rich cultural heritage behind traditional Ethiopian attire.", image: "/blog1.jpg" },
    { title: "How to Style Your Habesha Dress", excerpt: "Tips and tricks for accessorizing and wearing your dress.", image: "/blog2.jpg" },
    { title: "Behind the Scenes: Our Design Process", excerpt: "A look at how we create our unique designs.", image: "/blog3.jpg" },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <NewArrivals products={newArrivals || []} />
      <Categories categories={categoriesData} />
      <Testimonials testimonials={testimonials} />
      <Blog posts={blogPosts} />
    </div>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Tibeb - Traditional Habesha Clothing',
  description: 'Discover our collection of traditional Habesha dresses, men’s wear, and couples’ sets.',
};