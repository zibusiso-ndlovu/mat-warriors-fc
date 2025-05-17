// src/components/services/EnhancedServicesSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight, FaClock, FaStar } from 'react-icons/fa';

const EnhancedServicesSection = () => {
  const [activeTab, setActiveTab] = useState('residential');

  const services = {
    residential: {
      title: "Residential Cleaning",
      description: "Transform your home into a pristine sanctuary with our comprehensive residential cleaning services.",
      image: "/prof_cleaning.jpg", // Add your image path
      features: [
        "Deep cleaning of all rooms",
        "Kitchen and bathroom sanitization",
        "Floor care and maintenance",
        "Window cleaning",
        "Dust and allergen removal",
        "Eco-friendly products available"
      ],
      rating: 4.9,
      reviews: 520,
      price: "From $129",
      duration: "3-4 hours"
    },
    commercial: {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for businesses that maintain a pristine work environment.",
      image: "/industrial_cleaning.jpg", // Add your image path
      features: [
        "Office space cleaning",
        "Common area maintenance",
        "Restroom sanitation",
        "Floor maintenance",
        "Window cleaning",
        "Waste management"
      ],
      rating: 4.8,
      reviews: 380,
      price: "Custom Quote",
      duration: "Flexible scheduling"
    },
    deep: {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning service that reaches every corner and surface of your space.",
      image: "/commercial-cleaning.jpg", // Add your image path
      features: [
        "Detailed surface cleaning",
        "Behind furniture cleaning",
        "Cabinet and drawer cleaning",
        "Appliance deep cleaning",
        "Baseboards and trim cleaning",
        "Air vent cleaning"
      ],
      rating: 4.9,
      reviews: 290,
      price: "From $299",
      duration: "6-8 hours"
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Professional Cleaning Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Experience the highest standard of cleanliness with our comprehensive range of services
          </motion.p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-200 p-2">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300
                  ${activeTab === key 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                {services[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Service Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center text-white mb-2">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{services[activeTab].rating}</span>
                      <span className="text-sm ml-2">
                        ({services[activeTab].reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-white">
                      <FaClock className="mr-2" />
                      <span>{services[activeTab].duration}</span>
                    </div>
                  </div>
                  <div className="text-white text-right">
                    <div className="text-2xl font-bold">
                      {services[activeTab].price}
                    </div>
                    <div className="text-sm">Starting price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeTab].title}
              </h3>
              <p className="text-xl text-gray-600">
                {services[activeTab].description}
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services[activeTab].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 
                                flex items-center justify-center">
                    <FaCheck className="h-3 w-3 text-blue-600" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group inline-flex items-center justify-center 
                               bg-blue-600 text-white px-8 py-4 rounded-lg
                               hover:bg-blue-700 transition-all duration-300">
                <span className="text-lg font-medium">Book This Service</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 
                                       transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Guarantee */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center 
                          justify-center mb-4">
              <FaStar className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Quality Guarantee
            </h4>
            <p className="text-gray-600">
              Our services are backed by a 100% satisfaction guarantee. 
              If you're not happy, we'll make it right.
            </p>
          </div>

          {/* Professional Staff */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center 
                          justify-center mb-4">
              <FaStar className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Professional Staff
            </h4>
            <p className="text-gray-600">
              Our cleaning professionals are trained, background-checked, 
              and committed to excellence.
            </p>
          </div>

          {/* Flexible Scheduling */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center 
                          justify-center mb-4">
              <FaStar className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Flexible Scheduling
            </h4>
            <p className="text-gray-600">
              Book your cleaning service at a time that works best for you, 
              including evenings and weekends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;