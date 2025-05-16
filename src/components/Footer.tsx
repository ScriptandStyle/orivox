import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Transparent Display', href: '/transparent-display' },
        { name: 'Script&Style', href: '/scriptstyle' },
        { name: 'Ideation Lab', href: '/ideation-lab' },
        { name: 'Research', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Patents', href: '#' },
        { name: 'Guidelines', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-orbitron font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-electric-violet transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block flex items-center">
                <div className="text-3xl font-orbitron font-bold flex">
                  <span style={{ color: '#a78bfa' }}>ORI</span>
                  <span style={{ color: '#818cf8' }}>VOX</span>
                </div>
              </Link>
              <p className="text-gray-400 mt-2">
                Pioneering the future of technology
              </p>
            </div>
            
            {/* Address */}
            <div>
              <h4 className="font-bold mb-2 text-white">Address</h4>
              <address className="not-italic text-gray-400">
                Sri Eshwar College of Engineering<br />
                Kinathukadavu, Coimbatore
              </address>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-2 text-white">Contact</h4>
              <p className="text-gray-400">
                <a href="tel:8778848565" className="hover:text-electric-violet transition-colors duration-200">
                  Phone: 8778848565
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:orivox8@gmail.com" className="hover:text-electric-violet transition-colors duration-200">
                  Email: orivox8@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Facebook */}
              <button 
                className="text-gray-400 hover:text-electric-violet transition-colors duration-200"
                aria-label="Facebook"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>
              
              {/* Twitter/X */}
              <button 
                className="text-gray-400 hover:text-electric-violet transition-colors duration-200"
                aria-label="Twitter"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.049 10.049 0 01-3.12 1.191 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              
              {/* Instagram */}
              <button 
                className="text-gray-400 hover:text-electric-violet transition-colors duration-200"
                aria-label="Instagram"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </button>
              
              {/* LinkedIn */}
              <button 
                className="text-gray-400 hover:text-electric-violet transition-colors duration-200"
                aria-label="LinkedIn"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              className="mt-4 md:mt-0 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              © {new Date().getFullYear()} Orivox. All rights reserved.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 