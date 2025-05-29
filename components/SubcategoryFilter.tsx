'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductGrid from './ProductGrid';

const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: '#D4AF37', color: '#1C2526', transition: { duration: 0.2 } },
  active: { backgroundColor: '#D4AF37', color: '#1C2526' },
};

export default function SubcategoryFilter({ subcategories, initialSubcategory }: { subcategories: string[]; initialSubcategory?: string }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(initialSubcategory || null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `/api/products?category=dresses${selectedSubcategory ? `&subcategory=${selectedSubcategory}` : ''}`;
      const response = await fetch(query);
      const data = await response.json();
      setProducts(data.data || []);
    };
    fetchProducts();
  }, [selectedSubcategory]);

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">Browse Dresses</h2>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {subcategories.map((sub) => (
          <motion.button
            key={sub}
            onClick={() => setSelectedSubcategory(sub)}
            variants={buttonVariants}
            whileHover="hover"
            animate={selectedSubcategory === sub ? 'active' : ''}
            className="px-4 py-2 rounded bg-primaryBg text-accentGold"
          >
            {sub.replace('-', ' ').toUpperCase()}
          </motion.button>
        ))}
        <motion.button
          onClick={() => setSelectedSubcategory(null)}
          variants={buttonVariants}
          whileHover="hover"
          animate={selectedSubcategory === null ? 'active' : ''}
          className="px-4 py-2 rounded bg-primaryBg text-accentGold"
        >
          ALL
        </motion.button>
      </div>
      <ProductGrid initialProducts={products} />
    </section>
  );
}
