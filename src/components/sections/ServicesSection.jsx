// src/components/ServicesSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaSprayCan, FaBoxOpen, 
         FaCalendarCheck, FaLeaf, FaSnowflake, FaStar } from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaHome className="h-8 w-8" />,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services tailored to your specific needs and schedule.",
      features: [
        "Deep cleaning of all rooms",
        "Kitchen and bathroom sanitization",
        "Floor care and maintenance",
        "Dusting and air quality improvement"
      ],
      color: "blue"
    },
    {
      id: 2,
      icon: <FaBuilding className="h-8 w-8" />,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
      features: [
        "Office space cleaning",
        "Lobby and common area maintenance",
        "Restroom sanitation",
        "Window cleaning"
      ],
      color: "green"
    },
    {
      id: 3,
      icon: <FaSprayCan className="h-8 w-8" />,
      title: "Deep Cleaning",
      description: "Intensive cleaning service that reaches every corner and surface.",
      features: [
        "Detailed surface cleaning",
        "Behind furniture and appliances",
        "Wall and ceiling cleaning",
        "Deep carpet cleaning"
      ],
      color: "purple"
    },
    {
      id: 4,
      icon: <FaBoxOpen className="h-8 w-8" />,
      title: "Move In/Out Cleaning",
      description: "Thorough cleaning services for moving transitions.",
      features: [
        "Complete property cleaning",
        "Cabinet and drawer cleaning",
        "Appliance cleaning",
        "Window and blind cleaning"
      ],
      color: "orange"
    },
    {
      id: 5,
      icon: <FaCalendarCheck className="h-8 w-8" />,
      title: "Recurring Services",
      description: "Regular cleaning services on a schedule that works for you.",
      features: [
        "Weekly or bi-weekly options",
        "Customized cleaning plans",
        "Consistent cleaning team",
        "Flexible scheduling"
      ],
      color: "red"
    },
    {
      id: 6,
      icon: <FaLeaf className="h-8 w-8" />,
      title: "Green Cleaning",
      description: "Eco-friendly cleaning services using sustainable products.",
      features: [
        "Eco-friendly products",
        "Sustainable practices",
        "Allergen-free cleaning",
        "Pet-safe solutions"
      ],
      color: "teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
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
            Our Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Choose from our wide range of professional cleaning services
            designed to meet your specific needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className={`
                relative overflow-hidden bg-white rounded-2xl shadow-lg
                transform transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              `}
            >
              {/* Service Card Content */}
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`
                    p-3 rounded-lg
                    bg-${service.color}-100 text-${service.color}-600
                  `}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <FaStar className={`
                        h-4 w-4 mr-2 text-${service.color}-500
                      `} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="absolute bottom-8 left-8 right-8">
                  <button
                    className={`
                      w-full py-3 px-6 rounded-lg
                      bg-${service.color}-600 hover:bg-${service.color}-700
                      text-white font-medium
                      transition-colors duration-300
                    `}
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r
                  from-${service.color}-600/20 to-${service.color}-600/0
                  transition-opacity duration-300
                  ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which service you need?
          </h3>
          <button className="
            bg-blue-600 hover:bg-blue-700
            text-white font-medium
            py-3 px-8 rounded-lg
            transition-colors duration-300
          ">
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;