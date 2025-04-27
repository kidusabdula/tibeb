'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function CTABanner() {
  return (
    <section className="py-12 px-6 bg-accentGold text-primaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={ctaVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-playfair mb-4">Find Your Perfect Habesha Dress</h2>
        <p className="text-lg mb-6">
          Explore our full collection or reach out for personalized styling advice.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dresses" className="bg-primaryBg text-secondaryBg px-6 py-3 rounded hover:bg-highlightRed transition">
            Shop All Dresses
          </Link>
          <Link href="/contact-us" className="border border-primaryBg text-primaryBg px-6 py-3 rounded hover:bg-highlightRed hover:text-secondaryBg transition">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}