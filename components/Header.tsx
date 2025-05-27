'use client';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';
import CartPopup from './CartPopup';

export default function Header() {
  const { isSignedIn } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDressDropdownOpen, setIsDressDropdownOpen] = useState(false);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const { cartItems, setItemAdded } = useCart();

  useEffect(() => {
    console.log('useEffect triggered'); // This should appear immediately
    
    async function fetchSubcategories() {
      console.log('fetchSubcategories called'); // Should appear right after
      try {
        const res = await fetch('/api/subcategories');
        console.log('API response status:', res.status);
        const data = await res.json();
        console.log('API response data:', data);
        setSubcategories(data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    }
    
    fetchSubcategories();
  }, []);

  return (
    <header className="w-full bg-secondaryBg">
      {/* Main Header */}
      <div className="py-4 px-6">
        {/* Top Row: Language, Logo, Search, and Icons */}
        <div className="flex items-center justify-between">
          {/* Left: Language/Currency */}
          <div className="flex items-center space-x-2 text-sm text-textDark">
            <Image src="/flag-ethiopia.svg" alt="Ethiopia Flag" width={16} height={16} />
            <span>ENGLISH</span>
            <span>|</span>
            <span>ETB</span>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <h1 className="text-3xl font-playfair text-accentGold">TIBEB</h1>
            </Link>
          </div>

          {/* Right: Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Inline on Desktop, Toggle on Mobile) */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="p-1 border rounded text-textDark text-sm w-32"
                aria-label="Search products"
              />
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Toggle search"
            >
              <Image src="/search-icon.svg" alt="Search" width={20} height={20} />
            </button>

            {/* Favorites */}
            <Link href="/favorites" aria-label="Favorites">
              <Image src="/heart-icon.svg" alt="Favorites" width={20} height={20} />
            </Link>

            {/* User Account (Clerk) */}
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Link href="/sign-in" aria-label="Sign in">
                <Image src="/user-icon.svg" alt="User" width={20} height={20} />
              </Link>
            )}

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative"
              aria-label="Cart"
            >
              <Image src="/cart-icon.svg" alt="Cart" width={20} height={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-highlightRed text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Image src="/menu-icon.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* Navigation (Centered Below Logo) */}
        <nav className="hidden md:flex justify-center space-x-6 text-textDark font-medium mt-4">
          <div className="relative">
            <button
              onClick={() => setIsDressDropdownOpen(!isDressDropdownOpen)}
              className="hover:text-accentGold transition"
              aria-label="Dresses menu"
              aria-expanded={isDressDropdownOpen}
            >
              DRESSES
            </button>
            {isDressDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-secondaryBg shadow-lg rounded-md z-10">
                {subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    href={`/dresses?subcategory=${subcategory}`}
                    className="block px-4 py-2 text-sm hover:bg-primaryBg hover:text-accentGold transition"
                    onClick={() => setIsDressDropdownOpen(false)}
                  >
                    {subcategory.replace('-', ' ').toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/mens" className="hover:text-accentGold transition">
            MEN'S
          </Link>
          <Link href="/couples" className="hover:text-accentGold transition">
            COUPLES'
          </Link>
          <Link href="/about" className="hover:text-accentGold transition">
            ABOUT US
          </Link>
          <Link href="/faq" className="hover:text-accentGold transition">
            FAQ
          </Link>
        </nav>
      </div>

      {/* Search Bar (Toggles on Mobile) */}
      {isSearchOpen && (
        <div className="md:hidden bg-secondaryBg py-4 px-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded text-textDark"
            autoFocus
            aria-label="Search products"
          />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primaryBg text-secondaryBg py-4 px-6">
          <div className="relative">
            <button
              onClick={() => setIsDressDropdownOpen(!isDressDropdownOpen)}
              className="block py-2 hover:text-accentGold transition w-full text-left"
              aria-label="Dresses menu"
              aria-expanded={isDressDropdownOpen}
            >
              DRESSES
            </button>
            {isDressDropdownOpen && (
              <div className="mt-2">
                {subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    href={`/dresses?subcategory=${subcategory}`}
                    className="block px-4 py-2 text-sm hover:bg-secondaryBg hover:text-accentGold transition"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDressDropdownOpen(false);
                    }}
                  >
                    {subcategory.replace('-', ' ').toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/mens"
            className="block py-2 hover:text-accentGold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            MEN'S
          </Link>
          <Link
            href="/couples"
            className="block py-2 hover:text-accentGold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            COUPLES'
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-accentGold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/faq"
            className="block py-2 hover:text-accentGold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </nav>
      )}

      {/* Cart Popup */}
      <CartPopup
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
          setItemAdded(false);
        }}
      />
    </header>
  );
}
