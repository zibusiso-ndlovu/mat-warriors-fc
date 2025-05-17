// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { 
  FaBars, 
  FaTimes, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaChevronDown
} from 'react-icons/fa';

// Dropdown Menu Component
const DropdownMenu = ({ isActive }) => {
  const teamCategories = [
    { title: 'Under 13', path: '/team/under-13' },
    { title: 'Under 17', path: '/team/under-17' },
    { title: 'Under 20', path: '/team/under-20' },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button 
        className={`flex items-center space-x-1 text-white font-semibold 
          transition-all duration-300 hover:text-[#DC2626] group text-sm uppercase
          tracking-wide ${isActive ? 'text-[#DC2626]' : ''}`}
      >
        <span>Team</span>
        <FaChevronDown className="h-4 w-4 group-hover:text-[#DC2626]" />
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-black border border-gray-800 
          rounded-md shadow-lg focus:outline-none z-50">
          <div className="py-1">
            {teamCategories.map((category) => (
              <Menu.Item key={category.title}>
                {({ active }) => (
                  <Link
                    to={category.path}
                    className={`${
                      active ? 'bg-gray-900 text-[#DC2626]' : 'text-white'
                    } block px-4 py-2 text-sm font-medium hover:text-[#DC2626] 
                      transition-colors duration-300`}
                  >
                    {category.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// NavItem Component
const NavItem = ({ item, location }) => {
  return (
    <Link
      to={item.path}
      className={`relative text-white font-semibold transition-all duration-300
        hover:text-[#DC2626] group text-sm uppercase tracking-wide ${
          location.pathname === item.path ? 'text-[#DC2626]' : ''
        }`}
    >
      {item.title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC2626] 
        transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Main Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainMenuItems = [
    { title: 'Home', path: '/' },
    { title: 'News', path: '/news' },
    { title: 'Fixtures', path: '/fixtures' },
    { title: 'Club', path: '/club' },
    { title: 'Fans', path: '/fans' },
  ];

  const topMenuItems = [
    { title: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter size={16} />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram size={16} />, url: '#', label: 'Instagram' },
    { icon: <FaYoutube size={16} />, url: '#', label: 'YouTube' },
    { icon: <FaTiktok size={16} />, url: '#', label: 'TikTok' },
  ];

  const contactInfo = [
    { icon: <FaPhone size={16} />, text: '+254 123 456 789' },
    { icon: <FaEnvelope size={16} />, text: 'info@matwarriorsfc.com' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}>
        {/* Top Bar */}
        <div className="bg-[#DC2626]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-8">
              {/* Contact Info */}
              <div className="hidden md:flex items-center space-x-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white text-sm font-medium">
                    <span>{item.icon}</span>
                    <span className="tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="text-white hover:text-black transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-[#DC2626]/10 blur-xl rounded-full"></div>
                <img 
                  src="/logo.png" 
                  alt="Mat Warriors FC" 
                  className={`transition-all duration-300 ${
                    isScrolled 
                      ? 'h-16 md:h-20'
                      : 'h-20 md:h-24'
                  } object-contain relative z-10
                    drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]
                    hover:scale-105 transition-transform duration-300`}
                />
              </div>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainMenuItems.map((item) => (
                <NavItem key={item.title} item={item} location={location} />
              ))}
              <DropdownMenu isActive={location.pathname.startsWith('/team')} />
              <div className="flex items-center space-x-4">
                {topMenuItems.map((item) => (
                  <NavItem key={item.title} item={item} location={location} />
                ))}
                {/* Donate Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#b91c1c'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#DC2626] text-white font-semibold rounded-md
                           shadow-lg transition-colors duration-300 text-sm uppercase
                           tracking-wider"
                  onClick={() => window.location.href = '/donate'}
                >
                  Donate
                </motion.button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-gray-800"
            >
              <nav className="container mx-auto px-4 py-2">
                {mainMenuItems.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.title}
                  >
                    <Link
                      to={item.path}
                      className="block py-2 text-white hover:text-[#DC2626] 
                               transition-colors duration-300 border-b border-gray-800
                               font-medium text-sm uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                {/* Team Categories for Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: mainMenuItems.length * 0.1 }}
                >
                  <div className="py-2 text-white border-b border-gray-800">
                    <span className="block font-semibold mb-1 uppercase tracking-wide">Team</span>
                    <div className="pl-4 space-y-1">
                      {['Under 13', 'Under 17', 'Under 20'].map((category, index) => (
                        <Link
                          key={category}
                          to={`/team/${category.toLowerCase().replace(' ', '-')}`}
                          className="block text-sm text-gray-300 hover:text-[#DC2626] 
                                   transition-colors duration-300 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {/* Mobile Menu Items Continued */}
                {topMenuItems.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (mainMenuItems.length + 1 + index) * 0.1 }}
                    key={item.title}
                  >
                    <Link
                      to={item.path}
                      className="block py-2 text-white hover:text-[#DC2626] 
                               transition-colors duration-300 border-b border-gray-800
                               font-medium text-sm uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                {/* Donate Button for Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (mainMenuItems.length + topMenuItems.length + 1) * 0.1 }}
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = '/donate';
                    }}
                    className="w-full mt-4 px-4 py-3 bg-[#DC2626] text-white font-semibold 
                             rounded-md shadow-lg transition-colors duration-300 
                             hover:bg-[#b91c1c] text-sm uppercase tracking-wider"
                  >
                    Donate
                  </button>
                </motion.div>
                {/* Contact and Social for Mobile */}
                <div className="pt-4 mt-4 border-t border-gray-800 space-y-2">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-white text-sm font-medium tracking-wide">
                      <span className="text-[#DC2626]">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                  <div className="flex space-x-6 pt-2">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        aria-label={social.label}
                        className="text-white hover:text-[#DC2626] transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer */}
      <div className="h-[85px]"></div>
    </>
  );
};

export default Header;