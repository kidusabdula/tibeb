'use client';
import { motion } from 'framer-motion';

const artisanVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MeetTheArtisans() {
  const artisans = [
    {
      name: 'Aster Kebede',
      role: 'Master Weaver',
      image: '/artisan-aster.jpg',
      story: 'Aster has been weaving since she was a child, learning the craft from her mother. Her expertise in traditional embroidery patterns brings authenticity to every piece.',
    },
    {
      name: 'Dawit Mengistu',
      role: 'Textile Designer',
      image: '/artisan-dawit.jpg',
      story: 'Dawit specializes in blending modern designs with traditional techniques, creating unique patterns that resonate with today’s generation.',
    },
    {
      name: 'Lidya Tadesse',
      role: 'Quality Inspector',
      image: '/artisan-lidya.jpg',
      story: 'Lidya ensures that every garment meets our high standards, meticulously checking for quality and durability before it reaches you.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">Meet Our Artisans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artisans.map((artisan, index) => (
          <motion.div
            key={index}
            variants={artisanVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded shadow"
          >
            <img src={artisan.image} alt={artisan.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-lg font-medium">{artisan.name}</h3>
            <p className="text-accentGold mb-2">{artisan.role}</p>
            <p className="text-textDark">{artisan.story}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
