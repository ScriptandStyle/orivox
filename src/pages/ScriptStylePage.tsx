import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import FloatingContactButton from '../components/FloatingContactButton';

// Hero Component for Script&Style
const Hero = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-indigo-900/30 to-purple-900/30'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50'
      }`}
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Code-like floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute text-xs font-mono opacity-20 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['<div>', '</div>', 'function()', 'const', 'return', '{}', '[]', '=>'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

        {/* Floating design elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`design-${i}`}
            className={`absolute w-4 h-4 rounded-full ${
              isDarkMode ? 'bg-purple-400/30' : 'bg-purple-500/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation - Left Side */}
          <motion.div
            className="hidden lg:block"
            style={{ y: y1, opacity }}
          >
            <div className="relative">
              {/* Code window frame */}
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
              }`}>
                {/* Window header */}
                <div className={`flex items-center px-4 py-3 border-b ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'
                }`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className={`ml-4 text-sm font-mono ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    script-style.tsx
                  </div>
                </div>

                {/* Animation container */}
                <div className="p-4">
                  <Player
                    autoplay
                    loop
                    src={require("../asset/SandS.json")}
                    style={{ width: '100%', height: '400px' }}
                  />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            className="text-center lg:text-left"
            style={{ y: y2, opacity }}
          >
            {/* Heading */}
            <div className="relative mb-6 md:mb-8">
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`relative block ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Code That
                    <motion.span
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                className="overflow-hidden mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`relative block ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Connects.
                    <motion.span
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                className="overflow-hidden mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Design That Speaks.
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDarkMode ? 'text-purple-200' : 'text-purple-700'
              }`}>
                Script&Style – Where Aesthetic Meets Algorithm.
              </h2>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Crafting stunning websites, responsive apps, and digital experiences for students, startups, and industries.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#services"
                  className="btn btn-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  Let's Build Together
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#portfolio"
                  className={`btn btn-lg btn-outline border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                      : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Portfolio
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#services"
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                }`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ScriptStylePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // What We Offer - Grid of Services
  const services = [
    {
      id: 'web-dev',
      title: 'Custom Website Development',
      description: 'Full-stack web solutions with modern frameworks and responsive design.',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['React/Next.js', 'Responsive Design', 'SEO Optimized']
    },
    {
      id: 'app-dev',
      title: 'App Design & Development',
      description: 'Mobile and web applications with intuitive user experiences.',
      icon: '📱',
      gradient: 'from-cyan-500 to-teal-500',
      features: ['React Native', 'Flutter', 'Progressive Web Apps']
    },
    {
      id: 'portfolios',
      title: 'Portfolio Sites for Students',
      description: 'Professional portfolios that showcase your skills and projects.',
      icon: '🧑‍🎓',
      gradient: 'from-teal-500 to-green-500',
      features: ['GitHub Integration', 'Project Showcase', 'Resume Builder']
    },
    {
      id: 'branding',
      title: 'Startup Branding Packages',
      description: 'Complete brand identity and digital presence for new ventures.',
      icon: '🏢',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      id: 'cms',
      title: 'CMS Integration',
      description: 'WordPress, Headless CMS, and content management solutions.',
      icon: '⚙️',
      gradient: 'from-emerald-500 to-blue-500',
      features: ['WordPress', 'Strapi', 'Contentful']
    },
    {
      id: 'ux',
      title: 'UI/UX Optimization',
      description: 'User research, wireframing, and interface design excellence.',
      icon: '🧠',
      gradient: 'from-purple-500 to-indigo-500',
      features: ['User Research', 'Prototyping', 'Usability Testing']
    },
    {
      id: 'branding-design',
      title: 'Digital Branding & Logo Design',
      description: 'Visual identity that captures your brand essence and values.',
      icon: '🎨',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Logo Design', 'Brand Identity', 'Style Guides']
    }
  ];

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'
    }`}>
      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-24 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.button>

      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} />

      {/* What We Offer - Services Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        id="services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">🛠️</span>
              <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              Our Creative Services
            </motion.h2>

            <motion.p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              From concept to deployment, we blend creativity with technology to deliver exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative group cursor-pointer transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800/80 border-gray-700'
                    : 'bg-white border-gray-200'
                } backdrop-blur-sm rounded-2xl border overflow-hidden shadow-lg hover:shadow-2xl`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mb-4 leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Animated underline */}
                  <motion.div
                    className={`h-[2px] bg-gradient-to-r ${service.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-r from-gray-900 via-indigo-900/30 to-purple-900/30'
          : 'bg-gradient-to-r from-gray-100 via-blue-100/50 to-purple-100/50'
      }`}>
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <Player
            autoplay
            loop
            src={require("../asset/SandS.json")}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              You bring the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">vision</span>.
              <br />
              We build it – <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">stylishly</span>.
            </motion.h2>

            <motion.p
              className={`text-xl mb-10 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Ready to transform your ideas into stunning digital experiences? Let's collaborate and create something amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn btn-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                  Get a Free Quote
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="mailto:hello@scriptstyle.com"
                  className={`btn btn-lg btn-outline border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                      : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule a Call
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default ScriptStylePage;
