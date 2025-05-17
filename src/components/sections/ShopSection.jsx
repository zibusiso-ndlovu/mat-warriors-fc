// src/components/sections/ShopSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ShopSection = () => {
  const products = [
    {
      id: 1,
      name: 'Home Kit 2023/24',
      price: 'KES 2,999',
      image: '/images/products/home-kit.jpg',
      isNew: true,
    },
    {
      id: 2,
      name: 'Away Kit 2023/24',
      price: 'KES 2,999',
      image: '/images/products/away-kit.jpg',
      isNew: true,
    },
    {
      id: 3,
      name: 'Training Jersey',
      price: 'KES 1,999',
      image: '/images/products/training-kit.jpg',
      isNew: false,
    },
    {
      id: 4,
      name: 'Lifestyle Cap',
      price: 'KES 999',
      image: '/images/products/cap.jpg',
      isNew: false,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            WEAR THE PRIDE
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rep your team with the latest Mat Warriors FC merchandise. 
            From match day kits to lifestyle wear.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#DC2626] text-white text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>
                )}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 
                             transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {product.name}
                      </h3>
                      <p className="text-white/90 font-medium">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Info for Non-Hover State */}
              <div className="mt-4 px-2">
                <h3 className="text-black font-semibold text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/shop"
            className="inline-flex items-center space-x-2 bg-[#DC2626] text-white 
                     px-8 py-3 rounded-md font-semibold tracking-wide
                     hover:bg-[#b91c1c] transition-colors duration-300
                     shadow-md hover:shadow-lg group"
          >
            <span>VISIT SHOP</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Optional Decorative Elements */}
      <div className="absolute left-0 top-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent opacity-50" />
    </section>
  );
};

export default ShopSection;