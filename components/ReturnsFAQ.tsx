'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ReturnsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unworn and undamaged items. Contact us to initiate a return, and we’ll provide instructions.',
    },
    {
      question: 'How do I return an item?',
      answer: 'Email us at support@tibeb.com with your order number and reason for return. We’ll provide a return shipping label and instructions.',
    },
    {
      question: 'Are there any return fees?',
      answer: 'Return shipping is free for defective items. For other returns, a small shipping fee may apply, depending on your location.',
    },
    {
      question: 'How long does it take to process a refund?',
      answer: 'Once we receive your return, we’ll process your refund within 5-7 business days. Refunds are issued to the original payment method.',
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
        <h2 className="text-3xl font-playfair text-center mb-8">Returns & Refunds</h2>
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
