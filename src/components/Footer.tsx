import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FoodHub</h3>
            <p className="text-sm">Your favorite food, delivered fast and fresh.</p>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help & Support</a></li>
              <li><a href="#" className="hover:text-white">Partner with us</a></li>
              <li><a href="#" className="hover:text-white">Ride with us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Social Links</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FoodHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;