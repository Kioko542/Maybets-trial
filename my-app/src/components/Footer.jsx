import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitch, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-orange-500 text-sm">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500 text-sm">About Us</a></li>
              <li><a href="/faq" className="hover:text-orange-500 text-sm">FAQs</a></li>
              <li><a href="/terms" className="hover:text-orange-500 text-sm">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-orange-500 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/support" className="hover:text-orange-500 text-sm">Customer Support</a></li>
              <li><a href="/live-chat" className="hover:text-orange-500 text-sm">Live Chat</a></li>
              <li><a href="/help" className="hover:text-orange-500 text-sm">Help Center</a></li>
              <li><a href="/contact" className="hover:text-orange-500 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Affiliate */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Affiliate Program</h3>
            <ul className="space-y-2">
              <li><a href="/affiliate" className="hover:text-orange-500 text-sm">Become an Affiliate</a></li>
              <li><a href="/partners" className="hover:text-orange-500 text-sm">Our Partners</a></li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
            <ul className="space-y-2">
              <li><span className="text-sm">Credit Cards</span></li>
              <li><span className="text-sm">PayPal</span></li>
              <li><span className="text-sm">Cryptocurrency</span></li>
              <li><span className="text-sm">Bank Transfers</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Middle: Newsletter Signup */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated with Our Latest Offers!</h3>
          <p className="text-sm text-gray-400 mb-4">Join our newsletter and never miss out on the latest promotions, betting odds, and news!</p>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-1/3 rounded-lg text-black focus:outline-none text-sm"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom: Social Media & Legal Links */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaPinterestP />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xl">
                <FaTwitch />
              </a>
            </div>

            {/* Legal & Copyright Text */}
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 BettingSite. All Rights Reserved.</p>
              <p className="text-gray-500 mt-2">
                This site is intended for players 18+ years of age. Please bet responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
