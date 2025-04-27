'use client';
import { motion } from 'framer-motion';

const valueVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05 },
};

export default function OurValues() {
  const values = [
    {
      title: 'Cultural Preservation',
      description: 'We are committed to preserving Ethiopia’s rich weaving traditions by working with local artisans and using authentic techniques.',
      icon: '/value-cultural.svg',
    },
    {
      title: 'Sustainability',
      description: 'Our clothing is made with eco-friendly materials and processes, ensuring a minimal environmental impact.',
      icon: '/value-sustainability.svg',
    },
    {
      title: 'Community Empowerment',
      description: 'We support our artisans with fair wages and opportunities, helping to uplift local communities.',
      icon: '/value-community.svg',
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every piece is handcrafted with care, ensuring the highest standards of quality and durability.',
      icon: '/value-quality.svg',
    },
  ];

  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <h2 className="text-3xl font-playfair text-center mb-8">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={valueVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="bg-white p-6 rounded shadow text-center"
          >
            <img src={value.icon} alt={value.title} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-primaryBg mb-2">{value.title}</h3>
            <p className="text-textDark">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
