// src/components/home/HowItWorks.jsx
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClipboardDocumentCheckIcon, 
  SparklesIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    title: "Book Online",
    description: "Schedule your cleaning service in 60 seconds through our easy-to-use booking system.",
    icon: CalendarIcon,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "We Confirm Details",
    description: "Receive instant confirmation and a detailed overview of your scheduled service.",
    icon: ClipboardDocumentCheckIcon,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "We Clean",
    description: "Our professional team arrives on time and delivers exceptional cleaning service.",
    icon: SparklesIcon,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "You Relax",
    description: "Enjoy your spotless space while we take care of all the cleaning work.",
    icon: UserGroupIcon,
    color: "bg-orange-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your cleaning service in just a few simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="flex flex-col items-center">
                  {/* Step Number with Icon */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg mb-2`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="group relative inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Your Cleaning
            <svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
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

export default HowItWorks;