import React, { useState } from 'react';
import { Search, MapPin, User, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500">FoodHub</h1>
          </div>
          
          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-red-500 font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurants, cuisine or a dish"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-red-500 font-medium">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-red-500 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 font-medium">Contact</a>
            </nav>
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for food or restaurants"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;