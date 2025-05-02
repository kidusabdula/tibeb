'use client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartItem } from '@/types';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
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
    if (error) alert(error.message);
    else if (paymentIntent.status === 'succeeded') alert('Payment successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-secondaryBg rounded shadow">
      <h2 className="text-3xl font-playfair text-primaryBg mb-6">Checkout</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <span>{item.name} (x{item.quantity})</span>
          <span>{`ETB ${item.price * item.quantity}`}</span>
        </div>
      ))}
      <div className="flex justify-between mb-6">
        <span className="font-bold">Total:</span>
        <span>{`ETB ${total}`}</span>
      </div>
      <CardElement className="border p-3 rounded mb-6" />
      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full bg-accentGold text-primaryBg px-4 py-2 rounded hover:bg-highlightRed hover:text-secondaryBg transition"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-primaryBg py-12">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
