import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';

const Donate = () => {
  return (
    <section className="w-full min-h-[70vh] bg-gradient-to-br from-green-50 via-white to-gray-50 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -ml-32 -mb-32"></div>

          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Make a Difference Today
              </span>
              
              <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 mb-6 leading-tight">
                Support Our Youth Through Sports
              </h2>
              
              <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
                Help us create a safe space for children to dream, grow, and thrive through sports. 
                Your support makes a real difference in keeping youth off the streets.
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: FaHeart, text: "500+ Youth Supported" },
                  { icon: FaHandHoldingHeart, text: "12 Community Programs" },
                  { icon: FaShieldAlt, text: "100% Funds to Programs" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-4 rounded-2xl bg-green-50"
                  >
                    <item.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="mailto:donate@clubname.org"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaHandHoldingHeart className="w-5 h-5" />
                  Donate Now
                </motion.a>
                
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
                >
                  Contact Us
                </motion.a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-2 text-gray-600">
                <p className="font-medium">
                  Direct Donations: <span className="text-green-600">donate@clubname.org</span>
                </p>
                <p className="text-sm">
                  Your donation is tax-deductible under ID: 123-456-789
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          >
            <FaShieldAlt className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Verified Non-Profit Organization</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Donate;