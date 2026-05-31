'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              🛍️ OrderHubbs
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition">
                Shop
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition">
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/shop" className="block text-gray-700 hover:text-blue-600">
                Shop
              </Link>
              <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/auth/login" className="block text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link href="/auth/register" className="block bg-blue-600 text-white px-4 py-2 rounded-lg">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to OrderHubbs</h1>
            <p className="text-xl mb-8">
              Shop from multiple online stores and earn rewards with our gamified e-commerce platform
            </p>
            <div className="space-x-4">
              <Link
                href="/shop"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Start Shopping
              </Link>
              <Link
                href="/auth/register"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OrderHubbs?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2">Multi-Store Shopping</h3>
              <p className="text-gray-600">
                Shop from multiple online stores all in one place. We bring the best products to you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gamification & Rewards</h3>
              <p className="text-gray-600">
                Earn points on every purchase, unlock badges, and redeem exclusive rewards and discounts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your data is protected with industry-standard security and encrypted transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Earn & Unlock</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-5xl mb-2">⭐</div>
              <h3 className="font-bold mb-2">Points</h3>
              <p className="text-gray-600">1 point per $1 spent</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-5xl mb-2">🏆</div>
              <h3 className="font-bold mb-2">Badges</h3>
              <p className="text-gray-600">Unlock achievements</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-5xl mb-2">📈</div>
              <h3 className="font-bold mb-2">Levels</h3>
              <p className="text-gray-600">Climb the leaderboard</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-5xl mb-2">🎁</div>
              <h3 className="font-bold mb-2">Rewards</h3>
              <p className="text-gray-600">Redeem for discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8">Join thousands of happy shoppers earning rewards every day</p>
          <Link
            href="/auth/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About OrderHubbs</h4>
              <p className="text-gray-400 text-sm">Your ultimate e-commerce platform with gamification</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 OrderHubbs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
