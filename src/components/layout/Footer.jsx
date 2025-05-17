// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight
} from 'react-icons/fa';

const Footer = () => {
  const mainLinks = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT', path: '/about' },
    { title: 'NEWS', path: '/news' },
    { title: 'TEAM', path: '/team' },
    { title: 'FIXTURES', path: '/fixtures' },
    { title: 'TICKETS', path: '/tickets' },
    { title: 'SHOP', path: '/shop' },
  ];

  const supportLinks = [
    { title: 'Contact Us', path: '/contact' },
    { title: 'FAQs', path: '/faqs' },
    { title: 'Terms & Conditions', path: '/terms' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Careers', path: '/careers' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={18} />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter size={18} />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram size={18} />, url: '#', label: 'Instagram' },
    { icon: <FaYoutube size={18} />, url: '#', label: 'YouTube' },
    { icon: <FaTiktok size={18} />, url: '#', label: 'TikTok' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter submission logic here
  };

  return (
    <footer className="bg-black text-center">
      {/* Newsletter Section */}
    

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Social */}
          <div className="flex flex-col items-center space-y-6">
            <Link to="/" className="block">
              <img 
                src="/logo.png" 
                alt="Mat Warriors FC" 
                className="h-28 object-contain hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#DC2626] flex items-center justify-center
                           hover:bg-white hover:text-[#DC2626] transition-all duration-300
                           shadow-lg hover:shadow-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-6">MAIN MENU</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300
                             flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-[#DC2626] text-sm 
                                             transform group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-6">SUPPORT</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300
                             flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-[#DC2626] text-sm 
                                             transform group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-6">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#DC2626] flex-shrink-0" />
                <span className="text-gray-400">
                  123 Stadium Road, Machakos, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#DC2626] flex-shrink-0" />
                <a 
                  href="tel:+254123456789" 
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                >
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#DC2626] flex-shrink-0" />
                <a 
                  href="mailto:info@matwarriorsfc.com"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                >
                  info@matwarriorsfc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center space-x-6">
              <img 
                src="/images/sponsors/sponsor1.png" 
                alt="Sponsor 1" 
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="/images/sponsors/sponsor2.png" 
                alt="Sponsor 2" 
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mat Warriors FC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;