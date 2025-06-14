'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DressesHero() {
  return (
    <div className="relative h-[80vh]">
      {/* Video for desktop */}
      <div className="hidden md:block absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/public/videos//hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Image for mobile */}
      <div className="md:hidden absolute inset-0">
        <Image src="/hero-image.jpg" alt="Dresses Hero" layout="fill" objectFit="cover" priority />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-playfair mb-4">
          Timeless Habesha Dresses
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-2xl mb-8 max-w-2xl">
          Celebrate your heritage with our handcrafted dresses, designed for elegance and cultural pride.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="#products" className="bg-accentGold text-primaryBg px-6 py-3 rounded hover:bg-highlightRed transition">
            Explore Dresses
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}