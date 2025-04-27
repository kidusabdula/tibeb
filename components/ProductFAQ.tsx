'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What materials are used in your clothing?',
      answer: 'Our clothing is made from handwoven cotton or cotton-silk blends, sourced sustainably to maintain quality and authenticity.',
    },
    {
      question: 'Do you offer custom sizing?',
      answer: 'Yes, we offer custom sizing for all our products. Contact us with your measurements, and we’ll create a piece tailored just for you.',
    },
    {
      question: 'How do I care for my Habesha clothing?',
      answer: 'We recommend hand washing with mild detergent and air drying to preserve the fabric and embroidery. Avoid machine washing or harsh chemicals.',
    },
    {
      question: 'Can I request a specific design?',
      answer: 'Absolutely! We offer customization options for embroidery patterns and colors. Reach out to us to discuss your preferences.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={faqVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">Product Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-secondaryBg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
