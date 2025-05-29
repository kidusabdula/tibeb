'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CulturalSpotlight() {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">The Art of Habesha Dresses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Habesha dresses, also known as “Habesha Kemis,” are traditional Ethiopian garments that embody the rich cultural heritage of the region. These dresses are often handwoven from cotton or a cotton-silk blend, featuring intricate patterns and designs that reflect centuries of craftsmanship.
            </p>
            <p className="mb-4">
              Typically worn for special occasions such as weddings, holidays, and cultural ceremonies, Habesha dresses are known for their elegant silhouette and detailed embroidery, often in the form of crosses or geometric shapes. The white fabric symbolizes purity, while the colorful patterns represent joy and celebration.
            </p>
            <p>
              At Tibeb, we work with local artisans to preserve these traditions, ensuring each dress tells a story of heritage and pride. Whether you’re attending a coffee ceremony or a wedding, our dresses are designed to make you feel connected to your roots.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/blog1.jpg" alt="Habesha Dress 1" className="w-full h-48 object-cover rounded" />
            <img src="/blog2.jpg" alt="Habesha Dress 2" className="w-full h-48 object-cover rounded" />
            <img src="/habesha-couples.jpg" alt="Habesha Dress 3" className="w-full h-48 object-cover rounded" />
            <img src="/habesha-dress.jpg" alt="Habesha Dress 4" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}