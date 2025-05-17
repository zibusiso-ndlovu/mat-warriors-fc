// src/components/home/HowItWorks.jsx
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Schedule Your Service",
    description: "Book online in minutes. Choose your preferred date and time for the cleaning service.",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "02",
    title: "Professional Team Arrives",
    description: "Our vetted and trained cleaning professionals arrive at your doorstep, fully equipped.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "03",
    title: "Thorough Cleaning",
    description: "Experience our detailed cleaning process, following a systematic approach to ensure quality.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "04",
    title: "Final Inspection",
    description: "Enjoy your freshly cleaned space after our thorough quality check.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const HowItWorkss = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Make It <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our seamless cleaning process from start to finish
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-3 translate-y-3"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative rounded-3xl w-full h-64 lg:h-96 object-cover shadow-xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-xl">
                  <div className="text-7xl font-bold text-blue-100 mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {step.description}
                  </p>
                  {index === steps.length - 1 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Now
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
                    </motion.button>
                  )}
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
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-blue-600 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our cleaning services
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Schedule Your Cleaning
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorkss;