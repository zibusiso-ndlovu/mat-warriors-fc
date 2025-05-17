// src/components/home/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Add this CSS to your index.css or App.css file
/*
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');

.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% 200%;
}

.bg-size-200 {
  background-size: 200% 200%;
}
*/

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        {/* Centered X-Ops Digital Solutions Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center w-full mb-12"
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-full text-lg font-semibold relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient"></div>
            <span className="relative font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              X-Ops Digital Solutions
            </span>
            <div className="absolute inset-0 rounded-full blur-sm bg-blue-500 opacity-30"></div>
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Empowering the Future of
              <span className="text-blue-400 block">Technology & Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 text-xl mb-8 max-w-xl"
            >
              Join our global community of developers, organizations, and innovators 
              building the future of technology together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center group">
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Technology Innovation"
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-8 -right-8 bg-blue-600 rounded-lg p-4 shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-lg"
              >
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative"
        >
          {/* Vertical Separator Lines */}
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
          </div>

          {/* Stats Content */}
          <div className="grid grid-cols-3 gap-0">
            <div className="text-center py-8 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-2"
              >
                <div className="text-5xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400 text-lg">Projects</div>
              </motion.div>
            </div>

            <div className="text-center py-8 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="space-y-2"
              >
                <div className="text-5xl font-bold text-blue-400">15K+</div>
                <div className="text-gray-400 text-lg">Members</div>
              </motion.div>
            </div>

            <div className="text-center py-8 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="space-y-2"
              >
                <div className="text-5xl font-bold text-blue-400">100+</div>
                <div className="text-gray-400 text-lg">Countries</div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;