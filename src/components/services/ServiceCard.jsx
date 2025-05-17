// src/components/services/ServiceCard.jsx
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({ service, onSelect, onBook }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden
                 transform transition-all duration-300
                 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          <p className="text-white/90 text-sm mt-1">Starting at ${service.startingPrice}</p>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <FaStar className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onBook}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white
                     py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Book Now
          </button>
          <button
            onClick={onSelect}
            className="flex-1 border border-blue-600 text-blue-600
                     hover:bg-blue-50 py-2 px-4 rounded-lg
                     transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;