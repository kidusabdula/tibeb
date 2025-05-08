'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Video for desktop */}
      <div className="hidden md:block absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/public/videos//hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Image for mobile */}
      <div className="md:hidden absolute inset-0">
        <Image src="/hero-image.jpg" alt="Hero" layout="fill" objectFit="cover" priority />
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
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-playfair mb-4">
          Discover the Beauty of Traditional Habesha Clothing
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8">
          Shop our latest collection of dresses, men’s wear, and couples’ sets.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/dresses" className="bg-accentGold text-primaryBg px-6 py-3 rounded hover:bg-highlightRed transition">
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}