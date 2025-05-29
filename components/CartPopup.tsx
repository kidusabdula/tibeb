'use client';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const popupVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.02 },
};

export default function CartPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleClose = () => {
    onClose();
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-secondaryBg z-50 shadow-lg overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-playfair text-primaryBg">Your Cart</h2>
                <button onClick={handleClose} className="text-primaryBg text-2xl">
                  ×
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-textDark mb-4">Your cart is empty</h3>
                  <p className="text-textDark mb-6">Explore our collection to find the perfect Habesha attire!</p>
                  <Link
                    href="/dresses"
                    onClick={handleClose}
                    className="bg-accentGold text-primaryBg px-6 py-3 rounded hover:bg-highlightRed transition"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="flex items-center gap-4 p-4 bg-white rounded shadow"
                        data-testid="cart-items"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-textDark">{item.name}</h3>
                          <p className="text-accentGold">{`ETB ${item.price}`}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-primaryBg text-secondaryBg px-2 py-1 rounded hover:bg-highlightRed transition"
                            >
                              −
                            </button>
                            <span className="text-textDark">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-primaryBg text-secondaryBg px-2 py-1 rounded hover:bg-highlightRed transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-highlightRed hover:text-red-700 transition"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-primaryBg pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-textDark">Subtotal:</span>
                      <span className="text-lg font-medium text-accentGold">{`ETB ${calculateSubtotal()}`}</span>
                    </div>
                    <Link
                      href="/checkout"
                      onClick={handleClose}
                      className="block w-full bg-accentGold text-primaryBg text-center py-3 rounded hover:bg-highlightRed transition mb-4"
                    >
                      Proceed to Checkout
                    </Link>
                    <button
                      onClick={handleClose}
                      className="block w-full border border-primaryBg text-primaryBg text-center py-3 rounded hover:bg-primaryBg hover:text-secondaryBg transition"
                    >
                      Continue Shopping
                    </button>
                  </div>

                  <div className="mt-6 text-center text-sm text-textDark">
                    <p className="mb-2">Free shipping on orders over ETB 5000 within Ethiopia.</p>
                    <p>30-day return policy on unworn items.</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}