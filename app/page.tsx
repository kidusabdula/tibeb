import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Hero Component
function Hero() {
  return (
    <div className="relative h-screen">
      {/* Video for desktop */}
      <div className="hidden md:block absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://your-supabase-project.supabase.co/storage/v1/object/public/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Image for mobile */}
      <div className="md:hidden absolute inset-0">
        <Image src="/hero-image.jpg" alt="Hero" layout="fill" objectFit="cover" priority />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-playfair mb-4">
          Discover the Beauty of Traditional Habesha Clothing
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8">
          Shop our latest collection of dresses, men’s wear, and couples’ sets.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/dresses" className="bg-accentGold text-primaryBg px-6 py-3 rounded hover:bg-highlightRed transition">
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// New Arrivals Component
function NewArrivals({ products }: { products: Product[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-accentGold">{`ETB ${product.price}`}</p>
            <button className="mt-2 bg-accentGold text-primaryBg px-4 py-2 rounded hover:bg-highlightRed transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Categories Component
function Categories({ categories }: { categories: { name: string; image: string }[] }) {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <h2 className="text-3xl font-playfair text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link key={category.name} href={`/${category.name}`} className="block">
            <div className="relative h-64">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h3 className="text-2xl font-playfair text-white">{category.name.toUpperCase()}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials({ testimonials }: { testimonials: { quote: string; name: string; photo: string }[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded shadow"
          >
            <p className="text-textDark mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <span className="font-medium">{testimonial.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Blog Component
function Blog({ posts }: { posts: { title: string; excerpt: string; image: string }[] }) {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <h2 className="text-3xl font-playfair text-center mb-8">From Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-medium mb-2">{post.title}</h3>
            <p className="text-textDark mb-4">{post.excerpt}</p>
            <Link href={`/blog/${index}`} className="text-accentGold hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      return { name: cat, image: data[0]?.image || '/default-category.jpg' };
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