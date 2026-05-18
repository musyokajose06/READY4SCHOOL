import React from 'react'
import { ShoppingCart } from 'lucide-react'

export default function DisplayProducts({ products }) {
  return (
    <div className="w-full px-4 pb-8">
      {products.length === 0 ? (
        <div className="text-center text-black text-xl">No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Price and Add to Cart */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
