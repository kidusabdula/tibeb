'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartItem } from '@/types';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartItems(data);
    };
    fetchCart();
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      (await (await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total * 100 }), // Stripe expects amount in cents
      })).json()).clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      }
    );

    setLoading(false);
    if (error) {
      alert(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      // Redirect to success page with order details
      const orderDetails = encodeURIComponent(JSON.stringify({ items: cartItems, total }));
      router.push(`/success?orderDetails=${orderDetails}`);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primaryBg to-secondaryBg py-12 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header with progress indicator */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Complete Your Purchase
          </h1>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              className="h-full bg-accentGold"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <p className="text-xl text-white">Your cart is empty.</p>
            <button 
              className="mt-4 bg-accentGold text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
              onClick={() => window.location.href = '/'}
            >
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-2xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Order Summary */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-playfair font-semibold text-accentGold mb-6 pb-2 border-b border-gray-700">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex justify-between items-center py-3 border-b border-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-accentGold font-medium">
                        ETB {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white">ETB {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-300">Shipping</span>
                    <span className="text-white">FREE</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-accentGold">ETB {total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>

              {/* Payment Form */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-playfair font-semibold text-accentGold mb-6 pb-2 border-b border-gray-700">
                  Payment Details
                </h3>
                
                <div className="mb-6">
                  <CardElement 
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#ffffff',
                          '::placeholder': {
                            color: '#a0aec0',
                          },
                          iconColor: '#f6e05e',
                        },
                        invalid: {
                          color: '#f56565',
                        },
                      },
                    }}
                    className="border border-gray-600 p-4 rounded-lg bg-gray-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !stripe}
                  onClick={handleSubmit}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-bold transition-all duration-300 ${
                    loading || !stripe 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-accentGold text-gray-900 hover:bg-yellow-500 hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    'Complete Secure Payment'
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center space-x-2">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span className="text-sm text-gray-400">Payments are secure and encrypted</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}