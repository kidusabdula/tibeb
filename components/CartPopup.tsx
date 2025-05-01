'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  itemAdded?: boolean; // To trigger opening when an item is added
}

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

export default function CartPopup({ isOpen, onClose, itemAdded }: CartPopupProps) {
  // Simulate cart state (in a real app, this would come from global state/context)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      product_id: 'prod-1',
      name: 'Elegant Wedding Kemis',
      price: 2500,
      image: '/cart-item-1.jpg',
      quantity: 1,
    },
    {
      id: 'cart-2',
      product_id: 'prod-2',
      name: 'Men’s Kamis Shirt',
      price: 1500,
      image: '/cart-item-2.jpg',
      quantity: 2,
    },
  ]);

  // Automatically open the popup when an item is added
  useEffect(() => {
    if (itemAdded && !isOpen) {
      onClose(); // This will toggle isOpen to true via the parent component
    }
  }, [itemAdded, isOpen, onClose]);

  const handleRemoveItem = async (cartItemId: string) => {
    try {
      const response = await fetch(`/api/cart/${cartItemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCartItems(cartItems.filter((item) => item.id !== cartItemId));
      } else {
        alert('Failed to remove item from cart.');
      }
    } catch {
      alert('An error occurred while removing the item.');
    }
  };

  const handleQuantityChange = (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      {/* Overlay Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Cart Popup */}
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
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-playfair text-primaryBg">Your Cart</h2>
                <button onClick={onClose} className="text-primaryBg text-2xl">
                  ×
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-textDark mb-4">Your cart is empty</h3>
                  <p className="text-textDark mb-6">Explore our collection to find the perfect Habesha attire!</p>
                  <Link
                    href="/dresses"
                    onClick={onClose}
                    className="bg-accentGold text-primaryBg px-6 py-3 rounded hover:bg-highlightRed transition"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <>
                  {/* List of Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="flex items-center gap-4 p-4 bg-white rounded shadow"
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
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="bg-primaryBg text-secondaryBg px-2 py-1 rounded hover:bg-highlightRed transition"
                            >
                              −
                            </button>
                            <span className="text-textDark">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="bg-primaryBg text-secondaryBg px-2 py-1 rounded hover:bg-highlightRed transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-highlightRed hover:text-red-700 transition"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtotal and Actions */}
                  <div className="border-t border-primaryBg pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-textDark">Subtotal:</span>
                      <span className="text-lg font-medium text-accentGold">{`ETB ${calculateSubtotal()}`}</span>
                    </div>
                    <Link
                      href="/checkout"
                      onClick={onClose}
                      className="block w-full bg-accentGold text-primaryBg text-center py-3 rounded hover:bg-highlightRed transition mb-4"
                    >
                      Proceed to Checkout
                    </Link>
                    <button
                      onClick={onClose}
                      className="block w-full border border-primaryBg text-primaryBg text-center py-3 rounded hover:bg-primaryBg hover:text-secondaryBg transition"
                    >
                      Continue Shopping
                    </button>
                  </div>

                  {/* Additional Info */}
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
