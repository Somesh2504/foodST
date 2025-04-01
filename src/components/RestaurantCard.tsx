import React from 'react';
import { Star } from 'lucide-react';

interface RestaurantProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
}

const RestaurantCard: React.FC<RestaurantProps> = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceForTwo,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-white font-semibold">{deliveryTime}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{cuisine}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-gray-600 text-sm">{priceForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;