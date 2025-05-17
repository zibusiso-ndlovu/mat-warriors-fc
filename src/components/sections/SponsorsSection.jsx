// src/components/sections/SponsorsSection.jsx
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Nike',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nike_Logo.svg/1200px-Nike_Logo.svg.png',
    },
    {
      id: 2,
      name: 'Adidas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png',
    },
    {
      id: 3,
      name: 'Puma',
      image: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png',
    },
    {
      id: 4,
      name: 'Coca Cola',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/800px-Coca-Cola_logo.svg.png',
    },
    {
      id: 5,
      name: 'Emirates',
      image: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png',
    },
    {
      id: 6,
      name: 'Samsung',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
    },
    {
      id: 7,
      name: 'Microsoft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
    },
    {
      id: 8,
      name: 'Apple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
          OUR PARTNERS
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Proud to be associated with leading brands that support our vision
        </p>
      </div>

      <div className="relative overflow-hidden bg-gray-50">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden py-12">
          {/* First Scroll Track */}
          <div className="flex animate-scroll-slow space-x-16 min-w-full">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 w-[200px] flex items-center justify-center"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain filter grayscale 
                           hover:grayscale-0 transition-all duration-300 
                           transform hover:scale-110"
                />
              </div>
            ))}
          </div>
          {/* Duplicate Track for Seamless Loop */}
          <div className="flex animate-scroll-slow space-x-16 min-w-full">
            {sponsors.map((sponsor) => (
              <div
                key={`${sponsor.id}-duplicate`}
                className="flex-shrink-0 w-[200px] flex items-center justify-center"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain filter grayscale 
                           hover:grayscale-0 transition-all duration-300 
                           transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-slow {
          animation: scroll 50s linear infinite; /* Even slower animation */
        }

        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }

        /* Ensure smooth animation */
        .flex {
          -webkit-font-smoothing: antialiased;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;