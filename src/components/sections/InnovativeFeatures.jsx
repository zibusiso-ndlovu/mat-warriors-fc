// src/components/features/InnovativeFeatures.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaRobot, FaCalendarCheck, FaUserClock, FaMobileAlt } from 'react-icons/fa';

const InnovativeFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: <FaRobot className="h-8 w-8" />,
      title: "Smart Scheduling AI",
      description: "Our AI-powered system optimizes cleaning schedules based on your preferences and availability.",
      image: "/images/smart-scheduling.jpg", // Add your image
      benefits: [
        "Intelligent time slot recommendations",
        "Automated recurring bookings",
        "Real-time availability updates",
        "Weather-aware scheduling"
      ],
      color: "blue"
    },
    {
      id: 1,
      icon: <FaCalendarCheck className="h-8 w-8" />,
      title: "Custom Cleaning Plans",
      description: "Personalized cleaning solutions tailored to your specific needs and space requirements.",
      image: "/images/custom-plans.jpg", // Add your image
      benefits: [
        "Customized cleaning checklists",
        "Room-specific treatments",
        "Special requirements handling",
        "Flexible service adjustments"
      ],
      color: "green"
    },
    {
      id: 2,
      icon: <FaUserClock className="h-8 w-8" />,
      title: "Real-Time Tracking",
      description: "Monitor your cleaning service progress and get updates in real-time.",
      image: "/images/real-time-tracking.jpg", // Add your image
      benefits: [
        "Live service tracking",
        "Instant status updates",
        "Digital checklist completion",
        "Photo documentation"
      ],
      color: "purple"
    },
    {
      id: 3,
      icon: <FaMobileAlt className="h-8 w-8" />,
      title: "Mobile Experience",
      description: "Manage your cleaning services on-the-go with our user-friendly mobile app.",
      image: "/images/mobile-app.jpg", // Add your image
      benefits: [
        "Easy booking management",
        "Instant notifications",
        "Secure payments",
        "Service history access"
      ],
      color: "orange"
    }
  ];

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
            Transform Your Cleaning Experience
            <span className="text-blue-600"> — powered by smart technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Experience the future of cleaning services with our innovative technology solutions
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300
                            ${activeFeature === index 
                              ? `bg-${feature.color}-50 border-2 border-${feature.color}-500` 
                              : 'bg-white border-2 border-transparent hover:bg-gray-50'}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-${feature.color}-100 
                                   text-${feature.color}-600`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Feature Preview */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Feature Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay with Benefits */}
              <div className="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-black/80 to-transparent p-8">
                <h4 className="text-white text-xl font-semibold mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-white"
                    >
                      <svg
                        className={`h-5 w-5 text-${features[activeFeature].color}-400`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                          flex space-x-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                            ${activeFeature === index 
                              ? `bg-${feature.color}-500` 
                              : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`View ${feature.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <button className="inline-flex items-center justify-center 
                           bg-blue-600 text-white px-8 py-4 rounded-lg
                           hover:bg-blue-700 transition-all duration-300
                           font-medium text-lg">
            Experience Smart Cleaning
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;