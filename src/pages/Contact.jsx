// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="bg-gray-110 pt-[104px]"> {/* Added padding-top for fixed header */}
      {/* Header Section - Made bigger and more prominent */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team for any inquiries or support needs
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center mt-12 space-x-4">
              <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-300 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-200 rounded-full"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Gradient fade to content */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-110"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+44 7879 377579"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.222!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0MC43Ilc!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+44 7879 377579</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@xopsdigitalsolutions.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Business Street<br />
                      Suite 100<br />
                      City, State 12345<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Office Hours Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-100"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h2>
            <div className="inline-grid grid-cols-2 gap-x-12 gap-y-4 text-left">
              <div className="font-semibold text-gray-800">Monday - Friday:</div>
              <div className="text-gray-600">9:00 AM - 6:00 PM</div>
              <div className="font-semibold text-gray-800">Saturday:</div>
              <div className="text-gray-600">10:00 AM - 4:00 PM</div>
              <div className="font-semibold text-gray-800">Sunday:</div>
              <div className="text-gray-600">Closed</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;