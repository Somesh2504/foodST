import React, { useState } from 'react';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import FoodCard from './components/FoodCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const restaurants = [
  {
    id: 1,
    name: "The Spice Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cuisine: "Indian, Chinese, Thai",
    rating: 4.5,
    deliveryTime: "30-40 min",
    priceForTwo: "$30 for two"
  },
  {
    id: 2,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    cuisine: "American, Fast Food",
    rating: 4.2,
    deliveryTime: "25-35 min",
    priceForTwo: "$25 for two"
  },
  {
    id: 3,
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cuisine: "Italian, Pizza",
    rating: 4.7,
    deliveryTime: "35-45 min",
    priceForTwo: "$35 for two"
  },
  {
    id: 4,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    cuisine: "Japanese, Sushi",
    rating: 4.8,
    deliveryTime: "40-50 min",
    priceForTwo: "$45 for two"
  }
];

const foodItems = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Fresh mozzarella, tomatoes, and basil on a crispy thin crust",
    price: 14.99,
    rating: 4.8,
    category: "Pizza",
    isVegetarian: true
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    description: "Grilled chicken in a rich, creamy tomato sauce with Indian spices",
    price: 16.99,
    rating: 4.7,
    category: "Indian",
    isVegetarian: false
  },
  {
    id: 3,
    name: "Vegetable Sushi Roll",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Avocado, cucumber, and carrot wrapped in sushi rice and nori",
    price: 12.99,
    rating: 4.5,
    category: "Japanese",
    isVegetarian: true
  },
  {
    id: 4,
    name: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 13.99,
    rating: 4.6,
    category: "Burgers",
    isVegetarian: false
  },
  {
    id: 5,
    name: "Pad Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Stir-fried rice noodles with tofu, shrimp, peanuts, and tamarind sauce",
    price: 15.99,
    rating: 4.7,
    category: "Thai",
    isVegetarian: false
  },
  {
    id: 6,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
    price: 10.99,
    rating: 4.4,
    category: "Salads",
    isVegetarian: true
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 8.99,
    rating: 4.9,
    category: "Desserts",
    isVegetarian: true
  },
  {
    id: 8,
    name: "Spicy Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Japanese noodle soup with pork, soft-boiled egg, and spicy miso broth",
    price: 14.99,
    rating: 4.8,
    category: "Japanese",
    isVegetarian: false
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pizza', 'Indian', 'Japanese', 'Burgers', 'Thai', 'Salads', 'Desserts'];
  
  const filteredFoodItems = selectedCategory === 'All' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Food delivery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Delicious Food Delivered
              </h1>
              <p className="text-xl text-white mb-8">
                Order from your favorite restaurants
              </p>
              <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Featured Restaurants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                {...restaurant}
              />
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Menu</h2>
          
          {/* Category Filter */}
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Food Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFoodItems.map((item) => (
              <FoodCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;