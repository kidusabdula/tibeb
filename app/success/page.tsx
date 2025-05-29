'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CartItem } from '@/types';
import { CheckCircle } from 'lucide-react';

interface OrderDetails {
  items: CartItem[];
  total: number;
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const orderDetailsParam = searchParams.get('orderDetails');
    if (orderDetailsParam) {
      try {
        const parsedDetails = JSON.parse(decodeURIComponent(orderDetailsParam));
        setOrderDetails(parsedDetails);
      } catch (error) {
        console.error('Failed to parse order details:', error);
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primaryBg text-textDark">
        <span className="text-lg">Loading your order details...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-primaryBg px-4 py-16"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-flex items-center justify-center bg-accentGold text-primaryBg w-20 h-20 rounded-full mx-auto shadow-lg"
        >
          <CheckCircle size={40} strokeWidth={1.5} />
        </motion.div>

        {/* Success Message */}
        <motion.h1
          className="text-4xl md:text-5xl font-playfair text-accentGold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Thank You for Your Purchase!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your order was placed successfully. A confirmation email has been sent with the receipt.
        </motion.p>

        {/* Order Summary Card */}
        <motion.div
          className="bg-secondaryBg p-8 rounded-2xl shadow-xl space-y-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-accentGold border-b pb-3 mb-4">Order Summary</h2>
          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <p className="text-textDark font-semibold">
                  ETB {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t mt-4 flex justify-between text-xl font-bold">
            <span className="text-accentGold">Total</span>
            <span className="text-textDark">ETB {orderDetails.total.toFixed(2)}</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/dresses">
            <button className="px-6 py-3 bg-accentGold text-primaryBg rounded-full hover:bg-highlightRed hover:text-secondaryBg transition duration-300 text-lg font-medium shadow-md">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
