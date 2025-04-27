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
        <h2 className="text-3xl font-playfair text-center mb-8">The Symbolism of Couples' Matching Attire</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              In Ethiopian culture, matching attire for couples holds deep symbolic meaning, representing unity, love, and shared heritage. During weddings, anniversaries, and cultural celebrations, couples often wear coordinated Habesha clothing to signify their bond and commitment.
            </p>
            <p className="mb-4">
              These sets typically include a Habesha Kemis for the woman and a Kamis shirt with a vest or suit for the man, both adorned with matching embroidery patterns. The shared designs, often in white with colorful accents, symbolize harmony and togetherness.
            </p>
            <p>
              At Tibeb, we craft our couples' sets with meticulous attention to detail, ensuring that each piece reflects the beauty of Ethiopian traditions while celebrating modern love stories. Whether for a wedding or a casual cultural event, our sets are designed to make you and your partner shine.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/couples-cultural-image1.jpg" alt="Couples Set 1" className="w-full h-48 object-cover rounded" />
            <img src="/couples-cultural-image2.jpg" alt="Couples Set 2" className="w-full h-48 object-cover rounded" />
            <img src="/couples-cultural-image3.jpg" alt="Couples Set 3" className="w-full h-48 object-cover rounded" />
            <img src="/couples-cultural-image4.jpg" alt="Couples Set 4" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
