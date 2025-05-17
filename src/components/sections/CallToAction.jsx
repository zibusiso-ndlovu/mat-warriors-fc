// src/components/CallToAction.jsx
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the
              <span className="text-blue-300"> Perfect Clean</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us with their cleaning needs. 
              Book your first service today and enjoy a spotless space.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center 
                               bg-white text-blue-900 px-8 py-4 rounded-lg
                               hover:bg-blue-50 transition-all duration-300
                               font-medium text-lg group">
                Book Now
                <FaArrowRight className="ml-2 group-hover:translate-x-1 
                                       transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center justify-center 
                               border-2 border-white text-white px-8 py-4 
                               rounded-lg hover:bg-white/10 transition-all 
                               duration-300 font-medium text-lg group">
                <FaPlay className="mr-2" />
                Watch How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
                <div className="text-sm">
                  <div className="font-bold text-white">24/7</div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
                </svg>
                <div className="text-sm">
                  <div className="font-bold text-white">100%</div>
                  <div className="text-blue-200">Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM9 9h6v2H9V9zm0 4h6v2H9v-2z"/>
                </svg>
                <div className="text-sm">
                  <div className="font-bold text-white">5,000+</div>
                  <div className="text-blue-200">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg
                         hover:bg-blue-700 transition-colors duration-300
                         font-medium text-lg"
              >
                Get Quote Now
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              No commitment required. Free estimate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;