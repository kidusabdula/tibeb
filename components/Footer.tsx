"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const linkVariants = {
  hover: { scale: 1.05, color: "#D4AF37", transition: { duration: 0.2 } },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primaryBg text-secondaryBg py-12 px-6">
      {/* Top Section: Logo, Tagline, and Newsletter */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link href="/">
              <h2 className="text-3xl font-playfair text-accentGold">TIBEB</h2>
            </Link>
            <p className="text-sm mt-2">
              Celebrating the Beauty of Habesha Culture
            </p>
          </div>
          {/* Newsletter Signup */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-medium mb-4">Join Our Newsletter</h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 p-2 rounded bg-white text-textDark"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accentGold text-primaryBg px-4 py-2 rounded hover:bg-highlightRed transition"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && <p className="mt-2 text-sm">{message}</p>}
          </div>
        </div>
      </motion.div>

      {/* Middle Section: Navigation, Customer Service, Social Media */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
      >
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Shop</h3>
          <ul className="space-y-2">
            {["Dresses", "Men’s", "Couples’"].map((item) => (
              <motion.li key={item} whileHover="hover" variants={linkVariants}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-accentGold transition"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Customer Service Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Customer Service</h3>
          <ul className="space-y-2">
            {[
              "Shipping & Returns",
              "Privacy Policy",
              "Terms of Service",
              "Contact Us",
            ].map((item) => (
              <motion.li key={item} whileHover="hover" variants={linkVariants}>
                <Link
                  href={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/\\s/g, "-")}`}
                  className="hover:text-accentGold transition"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              {
                name: "Facebook",
                icon: "/facebook-icon.svg",
                url: "<https://facebook.com/tibeb>",
              },
              {
                name: "Instagram",
                icon: "/instagram-icon.svg",
                url: "<https://instagram.com/tibeb>",
              },
              {
                name: "Twitter",
                icon: "/twitter-icon.svg",
                url: "<https://twitter.com/tibeb>",
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-secondaryBg hover:text-accentGold transition"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Section: Contact and Copyright */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto text-center border-t border-secondaryBg pt-6"
      >
        <p className="text-sm mb-2">
          Email: support@tibeb.com | Phone: +251-912-345-678
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Tibeb. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
