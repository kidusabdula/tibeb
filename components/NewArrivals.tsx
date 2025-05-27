'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import Image from 'next/image';

export default function NewArrivals({ products }: { products: Product[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> {/* Increased max-w and gap */}
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between" 
          >
            <div className="mb-6 overflow-hidden rounded-t-lg"> {/* Wrapper for image */}
              <Image
                src={product.image}
                alt={product.name}
                width={600}  // Increased base width
                height={600} // Increased base height
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /* Larger image with hover effect */
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 px-2">{product.name}</h3> {/* Larger text */}
            <p className="text-accentGold text-lg font-medium mb-6 px-2">USD ${product.price}</p> {/* Larger price */}
            <button className="mt-auto bg-accentGold hover:bg-highlightRed text-primaryBg font-medium py-3 px-6 rounded-md transition-colors duration-300">
              Add to Cart
            </button> {/* Larger button */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}