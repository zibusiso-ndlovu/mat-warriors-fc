// src/components/sections/ManagementPractices.jsx
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  DocumentCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const practices = [
  {
    icon: ChartBarIcon,
    title: "Performance Management",
    description: "Optimize operations with data-driven insights and continuous monitoring for peak efficiency.",
    color: "blue"
  },
  {
    icon: CogIcon,
    title: "Process Automation",
    description: "Streamline workflows and reduce manual tasks through intelligent automation solutions.",
    color: "green"
  },
  {
    icon: UserGroupIcon,
    title: "Team Collaboration",
    description: "Foster effective communication and teamwork across departments and projects.",
    color: "purple"
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Compliance",
    description: "Ensure adherence to industry standards and best practices in security protocols.",
    color: "red"
  },
  {
    icon: DocumentCheckIcon,
    title: "Quality Assurance",
    description: "Maintain high standards through comprehensive testing and validation processes.",
    color: "indigo"
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Continuous Improvement",
    description: "Implement iterative enhancements based on performance metrics and feedback.",
    color: "orange"
  }
];

const ManagementPractices = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Management & Best Practices
          </h2>
          <p className="text-xl text-gray-600">
            Leverage industry-leading practices and management methodologies to drive excellence in your operations
          </p>
        </motion.div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 h-full border border-gray-100">
                <div className={`bg-${practice.color}-100 p-3 rounded-lg inline-block mb-4`}>
                  <practice.icon 
                    className={`w-6 h-6 text-${practice.color}-600`} 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600">
                  {practice.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6">
                  <a 
                    href="#" 
                    className={`text-${practice.color}-600 hover:text-${practice.color}-700 font-medium inline-flex items-center group`}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Practices
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementPractices;