import React from 'react';
import { Star, Plus } from 'lucide-react';

interface FoodItemProps {
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  isVegetarian: boolean;
}

const FoodCard: React.FC<FoodItemProps> = ({
  name,
  image,
  description,
  price,
  rating,
  category,
  isVegetarian,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {isVegetarian ? 
            <span className="text-green-600">🟢 Veg</span> : 
            <span className="text-red-600">🔴 Non-veg</span>
          }
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
            <p className="text-gray-500 text-sm">{category}</p>
          </div>
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-red-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;