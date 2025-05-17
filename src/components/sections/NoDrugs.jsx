import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="overflow-hidden py-2 bg-red-50">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-red-600 font-bold">SAY NO TO DRUGS</span>
        <span className="mx-4 text-red-600 font-bold">CHOOSE LIFE</span>
        <span className="mx-4 text-red-600 font-bold">STAY CLEAN</span>
        <span className="mx-4 text-red-600 font-bold">YOUR LIFE MATTERS</span>
      </div>
    </div>
  );
};

const NoDrugs = () => {
  const images = [
    "https://www.drugfreeworld.org/assets/images/truth-about-drugs-booklet.jpg",
    "https://media.istockphoto.com/id/1404900285/vector/say-no-to-drugs-concept-hand-refusing-narcotics-offer.jpg?s=612x612&w=0&k=20&c=qA_YZut-KQw_fTcq_8Gl1YqEUbRfHRKTZyQREwZJPLw=",
    "https://thumbs.dreamstime.com/b/no-drugs-allowed-sign-white-background-no-drugs-allowed-sign-white-background-vector-illustration-121424193.jpg",
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MovingText />
      
      <div className="flex items-center justify-center px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-2xl p-8 sm:p-16 max-w-4xl mx-auto"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-8 leading-tight"
          >
            No to Drugs and Substance Abuse
          </motion.h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={img} 
                  alt="Anti-drug campaign" 
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
          >
            We stand united in the fight against drug and substance abuse.
            Say no to addiction — say yes to life, health, and purpose. Together, we can make
            a difference in our communities.
          </motion.p>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-red-50 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-red-600">70%</h3>
              <p className="text-gray-600">Of addicts start before age 18</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-blue-50 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600">200+</h3>
              <p className="text-gray-600">Deaths daily from drug overdose</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-green-50 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-green-600">75%</h3>
              <p className="text-gray-600">Recovery rate with proper support</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Learn More
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-red-100"
            >
              Get Help
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoDrugs;