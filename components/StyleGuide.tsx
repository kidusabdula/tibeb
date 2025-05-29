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
        <h2 className="text-3xl font-playfair text-center mb-8">How to Style Your Habesha Dress</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Accessorize with Gold Jewelry</h3>
              <p>
                Habesha dresses pair beautifully with gold jewelry, reflecting the rich cultural symbolism of gold in Ethiopian traditions. Opt for statement necklaces, earrings, or bangles to complement the intricate embroidery of your dress.
              </p>
            </div>
            <img src="/selam.jpg" alt="Gold Jewelry" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-last">
              <h3 className="text-xl font-medium mb-2">2. Pair with a Netela</h3>
              <p>
                A Netela, a traditional Ethiopian shawl, adds elegance and authenticity to your look. Drape it over your shoulders or wrap it around your head for a regal appearance, especially for formal events like weddings.
              </p>
            </div>
            <img src="/habesha-dress.jpg" alt="Netela" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">3. Choose the Right Footwear</h3>
              <p>
                Complete your look with traditional Ethiopian sandals or modern heels in neutral tones like gold or white. For a more casual look, opt for simple flats that let the dress take center stage.
              </p>
            </div>
            <img src="/blog3.jpg" alt="Footwear" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}