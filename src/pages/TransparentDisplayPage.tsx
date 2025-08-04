
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import FloatingContactButton from '../components/FloatingContactButton';

// Hero Component for Crystal View
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gray-900 pt-20"
      id="hero"
    >
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/30"></div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-1 bg-black/20 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation - Left Side */}
          <motion.div
            className="hidden lg:block"
            style={{ y: y1, opacity }}
          >
            <div className="relative">
              <Player
                autoplay
                loop
                src={require("../asset/TRANS.json")}
                style={{ width: '100%', height: '500px' }}
              />
              {/* Glow effect around animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-200 relative block">
                    See Through
                    <motion.span
                      className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-cyan-400 to-blue-500"
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    the Future.
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              className="mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Pioneering the era of transparent display technologies – from screens to surfaces,
                <span className="text-cyan-400 font-medium"> revolutionizing how we interact with digital content.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#showcase"
                  className="btn btn-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Request Demo
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#tech-stack"
                  className="btn btn-lg btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Explore Tech
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#use-cases"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
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

const TransparentDisplayPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeUseCase, setActiveUseCase] = useState('laptop');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

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
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Use Cases Data - Where Transparency Transforms
  const useCases = [
    {
      id: 'laptop',
      title: 'Transparent Laptop',
      subtitle: 'Computing Redefined',
      description: 'Revolutionary transparent laptops that blend digital workspace with physical environment, offering unprecedented visual freedom.',
      icon: '💻',
      gradient: 'from-cyan-500 to-blue-600',
      features: ['See-through display technology', 'Ultra-lightweight design', 'Enhanced productivity', 'Futuristic aesthetics'],
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 'retail',
      title: 'Retail Display Panels',
      subtitle: 'Shopping Reimagined',
      description: 'Interactive storefront displays that showcase products while maintaining complete visibility into the store interior.',
      icon: '🏪',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Dynamic product showcases', 'Customer engagement', 'Inventory integration', 'Smart analytics'],
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 'kiosks',
      title: 'Smart City Kiosks',
      subtitle: 'Urban Intelligence',
      description: 'Public information kiosks that provide real-time city data, navigation, and services without visual obstruction.',
      icon: '🏙️',
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Real-time city data', 'Interactive navigation', 'Emergency alerts', 'Tourism information'],
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 'hud',
      title: 'Heads-Up Interfaces',
      subtitle: 'Augmented Reality',
      description: 'Advanced HUD systems for vehicles, helmets, and wearables that overlay critical information seamlessly.',
      icon: '🥽',
      gradient: 'from-purple-500 to-pink-600',
      features: ['AR integration', 'Real-time data overlay', 'Safety enhancement', 'Contextual information'],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Tech Stack Data - How It Works
  const techStack = [
    {
      id: 'hardware',
      title: 'Hardware Architecture',
      description: 'Advanced transparent OLED technology with quantum dot enhancement for superior clarity and color accuracy.',
      icon: '🔧',
      gradient: 'from-cyan-500 to-blue-600',
      details: ['Transparent OLED panels', 'Quantum dot enhancement', 'Ultra-thin form factor', 'Flexible substrate technology']
    },
    {
      id: 'display',
      title: 'Display Technology Layer',
      description: 'Multi-layer transparent display system with adaptive brightness and context-aware content rendering.',
      icon: '📱',
      gradient: 'from-blue-500 to-indigo-600',
      details: ['Adaptive brightness control', 'Context-aware rendering', 'Multi-touch capability', 'Anti-glare coating']
    },
    {
      id: 'control',
      title: 'Control Unit',
      description: 'AI-powered processing unit that manages content display, user interaction, and environmental adaptation.',
      icon: '🧠',
      gradient: 'from-indigo-500 to-purple-600',
      details: ['AI-powered processing', 'Real-time optimization', 'Edge computing', 'Low-latency response']
    },
    {
      id: 'software',
      title: 'Software Interface',
      description: 'Intuitive software platform with AR integration, gesture control, and seamless device connectivity.',
      icon: '💻',
      gradient: 'from-purple-500 to-pink-600',
      details: ['AR integration', 'Gesture recognition', 'Voice control', 'Cloud connectivity']
    }
  ];

  // Why Crystal View Features
  const whyCrystalView = [
    {
      title: 'Ultra Lightweight',
      description: 'Revolutionary materials make our displays 70% lighter than traditional screens while maintaining durability.',
      icon: '🪶',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Energy Efficient',
      description: 'Advanced power management extends battery life by 40% compared to conventional display technologies.',
      icon: '🔋',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Seamlessly Integrable',
      description: 'Modular design allows integration into any glass surface, from windows to vehicle windshields.',
      icon: '🔗',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
      <Hero />
      {/* Use Cases Section - Where Transparency Transforms */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
        id="use-cases"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">🔮</span>
              <span className={`font-medium ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                Where Transparency Transforms
              </span>
            </motion.div>

            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              Revolutionary Applications
            </motion.h2>

            <motion.p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              From transparent laptops to smart city kiosks, discover how Crystal View is reshaping the future of display technology.
            </motion.p>
          </motion.div>

          {/* Use Cases Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                className={`relative group cursor-pointer transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800/80 border-gray-700'
                    : 'bg-white/80 border-gray-300'
                } backdrop-blur-sm rounded-2xl border overflow-hidden`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: isDarkMode
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                onClick={() => setActiveUseCase(useCase.id)}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${useCase.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {useCase.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {useCase.title}
                  </h3>

                  <p className={`text-lg font-medium mb-3 bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                    {useCase.subtitle}
                  </p>

                  <p className={`mb-4 leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {useCase.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {useCase.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Animated underline */}
                  <motion.div
                    className={`h-[2px] bg-gradient-to-r ${useCase.gradient} rounded-full`}
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

      {/* Tech Stack Section - How It Works */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        id="tech-stack"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">⚙️</span>
              <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                How It Works
              </span>
            </motion.div>

            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              Advanced Technology Stack
            </motion.h2>

            <motion.p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Discover the cutting-edge technologies that power our transparent display revolution.
            </motion.p>
          </motion.div>

          {/* Tech Stack Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full ${
              isDarkMode ? 'bg-gradient-to-b from-cyan-500 to-purple-500' : 'bg-gradient-to-b from-cyan-600 to-purple-600'
            }`}></div>

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className={`relative p-6 rounded-2xl border transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-gray-800/80 border-gray-700'
                        : 'bg-white border-gray-300'
                    } backdrop-blur-sm group`}
                    whileHover={{
                      y: -5,
                      boxShadow: isDarkMode
                        ? "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                        : "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {/* Gradient glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tech.gradient} flex items-center justify-center text-2xl mr-4`}>
                          {tech.icon}
                        </div>
                        <h3 className={`text-xl font-bold ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {tech.title}
                        </h3>
                      </div>

                      <p className={`mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {tech.description}
                      </p>

                      <div className="space-y-2">
                        {tech.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient} mr-3`}></div>
                            <span className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.gradient} flex items-center justify-center text-2xl shadow-lg border-4 ${
                      isDarkMode ? 'border-gray-900' : 'border-white'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About CrystalView Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`} id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">💎</span>
              <span className={`font-medium ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Why Crystal View?
              </span>
            </motion.div>

            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              The Future is Transparent
            </motion.h2>

            <motion.p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Experience the next generation of display technology that seamlessly blends digital content with the physical world.
            </motion.p>
          </motion.div>

          {/* Why Crystal View Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyCrystalView.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`relative p-8 rounded-2xl border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800/80 border-gray-700'
                    : 'bg-white border-gray-300'
                } backdrop-blur-sm group text-center`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: isDarkMode
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {feature.icon}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>

                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className={`h-[2px] bg-gradient-to-r ${feature.gradient} mt-6 rounded-full mx-auto`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        id="showcase"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              variants={itemVariants}
            >
              Experience the Magic
            </motion.h2>

            <motion.p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              See Crystal View in action through our interactive demonstrations and prototype showcases.
            </motion.p>
          </motion.div>

          {/* Large Lottie Animation Showcase */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={`relative p-8 rounded-3xl border transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-gray-50 border-gray-300'
            } backdrop-blur-sm`}>
              <div className="relative">
                <Player
                  autoplay
                  loop
                  src={require("../asset/TRANS.json")}
                  style={{ width: '100%', height: '400px' }}
                />
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`text-center p-6 rounded-2xl backdrop-blur-md ${
                    isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'
                  } max-w-md`}>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      Crystal Clear Innovation
                    </h3>
                    <p className={`${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Witness the future of transparent display technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CrystalView Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`} id="about-detail">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 md:p-12 rounded-3xl border transition-colors duration-300 ${
            isDarkMode
              ? 'bg-gray-800/80 border-gray-700'
              : 'bg-white border-gray-300'
          } backdrop-blur-sm shadow-xl`}>
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-2xl mr-3">🔍</span> About CrystalView
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <motion.p
                  className={`text-lg leading-relaxed mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  variants={itemVariants}
                >
                  CrystalView is a next-generation transparent display technology that transforms glass surfaces into interactive, high-resolution screens—bridging the physical and digital worlds.
                </motion.p>
                <motion.p
                  className={`text-lg leading-relaxed mb-8 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  variants={itemVariants}
                >
                  Whether it's a smart car windshield, a storefront info panel, or an augmented learning window, CrystalView delivers clarity, context, and communication with zero visual clutter.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={itemVariants}
                >
                  {["Transparent", "Interactive", "Contextual", "Innovative", "Futuristic"].map((badge, idx) => (
                    <motion.span
                      key={badge}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1624969862644-791f3dc98927?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Transparent Display Concept"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      Smart. Seamless. See-Through.
                    </h3>
                    <p className="text-white/90">
                      Experience information without obstruction.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Let's Build Transparent Futures */}
      <section className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-gradient-to-r from-gray-900 via-blue-900/20 to-cyan-900/30' : 'bg-gradient-to-r from-gray-100 via-blue-100/50 to-cyan-100/50'
      }`}>
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <Player
            autoplay
            loop
            src={require("../asset/TRANS.json")}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-cyan-400' : 'bg-cyan-600'
              } opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
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
              Let's Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent Futures</span>
            </motion.h2>

            <motion.p
              className={`text-xl mb-10 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Ready to revolutionize how the world interacts with digital content? Join us in creating the next generation of transparent display technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn btn-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                  Partner with Us
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="mailto:info@orivox.com"
                  className={`btn btn-lg btn-outline border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600'
                      : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Technical Call
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <motion.a
          href="#hero"
          className={`btn btn-circle shadow-lg transition-colors duration-300 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
              : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default TransparentDisplayPage;