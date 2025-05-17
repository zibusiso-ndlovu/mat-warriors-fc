// src/components/sections/HeroSection.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slide1 from '/images/hero/mat-warriors1.jpg';
import slide2 from '/images/hero/mat-warriors2.jpg';
import slide3 from '/images/hero/mat-warriors3.jpg';
import slide4 from '/images/hero/mat-warriors4.jpg';
import slide5 from '/images/hero/mat-warriors5.jpg';
import slide6 from '/images/hero/logo.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "WARRIORS TRIUMPH IN DERBY",
      subtitle: "Match Report",
      description: "Mat Warriors FC dominates local rivals in thrilling match with spectacular performance",
      image: slide1, // Update with your image path
      link: "/news/derby-victory",
      buttonText: "READ MORE"
    },
    {
      id: 2,
      title: "NEW SEASON KIT REVEAL",
      subtitle: "2023/24 Collection",
      description: "Experience the pride with our new home and away kits for the upcoming season",
      image: slide2, // Update with your image path
      link: "/shop/new-kit",
      buttonText: "SHOP NOW"
    },
    {
      id: 3,
      title: "NEXT MATCH: WARRIORS VS RIVALS",
      subtitle: "Match Day",
      description: "Join us this Saturday for an epic showdown at the Warriors Stadium",
      image: slide3, // Update with your image path
      link: "/tickets",
      buttonText: "GET TICKETS"
    },
    {
      id: 4,
      title: "WARRIORS YOUTH ACADEMY",
      subtitle: "Future Stars",
      description: "Developing the next generation of football talent in Machakos",
      image: slide4, // Update with your image path
      link: "/academy",
      buttonText: "LEARN MORE"
    },
    {
      id: 5,
      title: "WARRIORS YOUTH ACADEMY",
      subtitle: "Future Stars",
      description: "Developing the next generation of football talent in Machakos",
      image: slide5, // Update with your image path
      link: "/academy",
      buttonText: "LEARN MORE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <span className="inline-block bg-[#DC2626] text-white px-4 py-1 
                               text-sm font-semibold tracking-wider uppercase">
                  {slides[currentSlide].subtitle}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight 
                             leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  {slides[currentSlide].description}
                </p>
                <motion.a
                  href={slides[currentSlide].link}
                  className="inline-flex items-center space-x-2 bg-[#DC2626] text-white 
                           px-8 py-3 font-semibold tracking-wider hover:bg-[#b91c1c] 
                           transition-colors duration-300 uppercase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{slides[currentSlide].buttonText}</span>
                  <FaArrowRight className="text-sm" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-16 h-1 transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#DC2626]' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex space-x-4">
              <button
                onClick={handlePrevSlide}
                className="p-2 text-white hover:text-[#DC2626] transition-colors 
                         duration-300 focus:outline-none"
                aria-label="Previous slide"
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2 text-white hover:text-[#DC2626] transition-colors 
                         duration-300 focus:outline-none"
                aria-label="Next slide"
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;