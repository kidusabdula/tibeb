'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function StyleGuide() {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">How to Style Your Couples&apos; Habesha Set</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Coordinate Accessories</h3>
              <p>
                Enhance your matching set with coordinated accessories. For her, gold jewelry like necklaces and earrings; for him, a traditional vest or shawl. Matching colors in your accessories can tie the look together beautifully.
              </p>
            </div>
            <img src="/couples-style-guide1.jpg" alt="Accessories" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-last">
              <h3 className="text-xl font-medium mb-2">2. Add a Shared Color Theme</h3>
              <p>
                Choose a shared color theme for your outfits, such as gold or red accents, to highlight your unity. This can be reflected in the embroidery patterns or additional accessories like shawls and vests.
              </p>
            </div>
            <img src="/couples-style-guide2.jpg" alt="Color Theme" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">3. Match Your Footwear</h3>
              <p>
                Complete your look with matching footwear. Traditional Ethiopian sandals for both, or modern heels and dress shoes in complementary colors, can elevate your coordinated style.
              </p>
            </div>
            <img src="/couples-style-guide3.jpg" alt="Footwear" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
