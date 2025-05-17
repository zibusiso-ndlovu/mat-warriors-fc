// src/components/learning/LearningPaths.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, FaBuilding, FaBroom, FaSprayCan, 
  FaLeaf, FaClock, FaStar, FaArrowRight 
} from 'react-icons/fa';

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 'residential',
      icon: <FaHome className="h-8 w-8" />,
      title: "Residential Cleaning",
      description: "Learn about our comprehensive home cleaning services",
      modules: 5,
      hours: 2,
      color: 'blue',
      paths: [
        "Basic House Cleaning",
        "Deep Cleaning Services",
        "Move In/Out Cleaning",
        "Recurring Services",
        "Special Treatments"
      ]
    },
    {
      id: 'commercial',
      icon: <FaBuilding className="h-8 w-8" />,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for businesses",
      modules: 6,
      hours: 3,
      color: 'purple',
      paths: [
        "Office Cleaning",
        "Retail Space Maintenance",
        "Industrial Cleaning",
        "Healthcare Facility Services",
        "Educational Institution Services",
        "Restaurant Cleaning"
      ]
    },
    {
      id: 'specialized',
      icon: <FaBroom className="h-8 w-8" />,
      title: "Specialized Services",
      description: "Advanced cleaning techniques for specific needs",
      modules: 4,
      hours: 1.5,
      color: 'green',
      paths: [
        "Carpet Cleaning",
        "Window Cleaning",
        "Upholstery Care",
        "Floor Maintenance"
      ]
    },
    {
      id: 'eco',
      icon: <FaLeaf className="h-8 w-8" />,
      title: "Eco-Friendly Cleaning",
      description: "Sustainable cleaning practices and solutions",
      modules: 3,
      hours: 1,
      color: 'teal',
      paths: [
        "Green Cleaning Products",
        "Sustainable Practices",
        "Environmental Impact"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our comprehensive range of professional cleaning services
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {learningPaths.map((path) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Card Header */}
              <div className={`p-6 bg-${path.color}-50`}>
                <div className={`text-${path.color}-600 mb-4`}>
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600">
                  {path.description}
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <FaClock className="mr-2" />
                    <span>{path.hours} hours</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaStar className="mr-2" />
                    <span>{path.modules} modules</span>
                  </div>
                </div>

                {/* Path List */}
                <ul className="space-y-2">
                  {path.paths.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${path.color}-400 mr-2`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedPath(path.id)}
                    className={`
                      w-full flex items-center justify-center
                      px-4 py-2 rounded-md
                      bg-${path.color}-600 hover:bg-${path.color}-700
                      text-white font-medium
                      transition-colors duration-300
                    `}
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 
                         rounded-xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4">
                  New Customer Special Offer
                </h3>
                <p className="text-blue-100 mb-6">
                  Get 20% off your first cleaning service. Experience the 
                  difference with our professional cleaning team.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md
                                 font-medium hover:bg-blue-50 transition-colors">
                  Book Now
                </button>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3">
                {/* Add an illustration or image here */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">
              Popular Services
            </h4>
            <ul className="space-y-2">
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Deep Cleaning
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Weekly Maintenance
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Move In/Out Cleaning
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">
              Resources
            </h4>
            <ul className="space-y-2">
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Cleaning Guides
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Service Checklist
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-900 mb-2">
              Support
            </h4>
            <ul className="space-y-2">
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Contact Us
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Schedule Service
              </li>
              <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Get a Quote
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
