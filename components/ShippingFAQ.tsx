'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ShippingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Within Ethiopia, expect 3-5 business days. International orders may take 7-14 business days, depending on customs and shipping carriers.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and times will vary based on your location.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you’ll receive a tracking number via email. You can use this to track your package on our shipping partner’s website.',
    },
    {
      question: 'What are the shipping costs?',
      answer: 'Shipping costs are calculated at checkout based on your location and order size. We offer free shipping on orders over ETB 5000 within Ethiopia.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={faqVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">Shipping Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-primaryBg">
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
