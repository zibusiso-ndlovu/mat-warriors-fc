// src/components/home/CleaningServices.jsx
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: "Domestic Cleaning",
    description: "Regular home cleaning services tailored to your schedule. We'll keep your living space spotless and comfortable.",
    icon: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Residential Cleaning",
    description: "Comprehensive cleaning solutions for houses and apartments. From living rooms to bathrooms, we ensure every space shines.",
    icon: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "Deep Cleaning",
    description: "Intensive cleaning service that reaches every corner. Perfect for seasonal cleaning or special occasions.",
    icon: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Move In/Out Cleaning",
    description: "Specialized cleaning service for property transitions. Ensure your new home is pristine or leave your old one spotless.",
    icon: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    title: "Recurring Cleaning",
    description: "Regular scheduled cleaning services. Weekly, bi-weekly, or monthly visits to maintain your space's cleanliness.",
    icon: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 6,
    title: "Vacation Rental Cleaning",
    description: "Professional cleaning services for Airbnb and vacation rentals. Quick turnaround to keep your property guest-ready.",
    icon: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className={`h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${service.color}`}>
        <div className="relative h-48">
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {service.description}
          </p>
          
          <motion.button
            whileHover={{ x: 5 }}
            className={`inline-flex items-center text-sm font-semibold ${service.iconColor} group`}
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const CleaningServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">
            Professional Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of professional cleaning services, 
            each tailored to meet your specific needs and expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book A Service
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CleaningServices;