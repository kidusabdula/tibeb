'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05 },
};

export default function FeaturedCollections({
  collections,
}: {
  collections: { title: string; products: Product[] }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % collections.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length);
  };

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">Featured Collections</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={handlePrev} className="text-accentGold text-2xl">←</button>
          <h3 className="text-2xl font-medium">{collections[currentIndex].title}</h3>
          <button onClick={handleNext} className="text-accentGold text-2xl">→</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {collections[currentIndex].products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white p-4 rounded shadow"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h4 className="text-lg font-medium">{product.name}</h4>
              <p className="text-accentGold">{`ETB ${product.price}`}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}