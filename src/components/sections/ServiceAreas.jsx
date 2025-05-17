// src/components/home/ServiceAreas.jsx
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

const ServiceAreas = () => {
  const locations = [
    { city: "West Midlands", image: "https://images.unsplash.com/photo-1596587452405-3a67c33070b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { city: "Brighton", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { city: "Stoke-on-Trent", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { city: "Leicester", image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Coverage Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide professional cleaning services and reliable temporary or permanent staff to businesses across:
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Location Image */}
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Location Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-6 w-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {location.city}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Check Service Availability
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;