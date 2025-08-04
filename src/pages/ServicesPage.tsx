import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import FloatingContactButton from "../components/FloatingContactButton";

// Hero Component for Services Page
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gray-900 pt-20"
      id="hero"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"
          style={{ width: '100%', height: '100%', opacity: 0.2 }}
        />
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-1 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lottie Animation - Left Side */}
          <div className="hidden lg:block">
            <Player
              autoplay
              loop
              src={require("../asset/Service.json")}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <div className="relative mb-4 md:mb-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight inline-block">
                  <span className="text-gray-200 relative">
                    Orivox –
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-500"></span>
                  </span>
                </h1>
              </div>

              <div className="overflow-hidden mt-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight inline-block">
                  <span className="text-gray-200 relative">
                    Powering the
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500"></span>
                  </span>
                </h1>
              </div>

              <div className="overflow-hidden mt-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-indigo-400 inline-block">
                    Transparent Future.
                  </span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Across Devices, Code & Ideas. Three specialized divisions working in synergy to create breakthrough solutions for tomorrow's world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-12">
              <div>
                <a
                  href="#divisions"
                  className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white btn-lg shadow-lg w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Explore Our Verticals
                </a>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="btn btn-outline border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white btn-lg glass w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('divisions');
  const [showContent, setShowContent] = useState(true);

  // Handle tab switching with smooth transition
  const handleTabChange = (newTab: string) => {
    if (newTab !== activeTab) {
      setShowContent(false);
      setTimeout(() => {
        setActiveTab(newTab);
        setShowContent(true);
      }, 150);
    }
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Helper function to render division lottie animations
  const renderDivisionLottie = (divisionId: number, className: string = "") => {
    const getAnimationSrc = () => {
      switch (divisionId) {
        case 1:
          return require("../asset/TRANS.json"); // Crystal View - Transparent displays
        case 2:
          return require("../asset/SandS.json"); // Script&Style - Web development
        case 3:
          return require("../asset/idea.json"); // Ideation Hub - Innovation
        default:
          return require("../asset/Service.json"); // Default service animation
      }
    };

    return (
      <div className={`${className} w-8 h-8 flex items-center justify-center`}>
        <Player
          autoplay
          loop
          src={getAnimationSrc()}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  };

  // Division data with enhanced futuristic styling
  const divisions = [
    {
      id: 1,
      title: 'Crystal View',
      subtitle: 'See Through. Think Beyond.',
      description: 'Developing transparent laptops, phones, kiosks & smart displays that seamlessly integrate digital content with the physical world.',
      link: '/transparent-display',
      bgColor: 'bg-gradient-to-br from-cyan-800 via-blue-800 to-indigo-900',
      ctaText: 'View Our Hardware Concepts',
      features: ["Transparent OLED Displays", "Holographic Interfaces", "Smart Glass Solutions", "XR Integration"],
      lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json", // Holographic/transparent display animation
      glowColor: "from-cyan-400 to-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Script & Style',
      subtitle: 'Designs That Code. Code That Connects.',
      description: 'Providing custom websites, portfolios, digital branding, and apps for students, startups, and small industries.',
      link: '/scriptstyle',
      bgColor: 'bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900',
      ctaText: 'Build with Us',
      features: ["Custom Web Development", "Digital Branding", "Student Portfolios", "Startup Solutions"],
      lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json", // Web development/coding animation
      glowColor: "from-blue-400 to-indigo-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Ideation Hub',
      subtitle: 'Ideas Aren\'t Born. They\'re Engineered.',
      description: 'A creative space to incubate moonshot ideas, run deep-tech experiments, and mentor innovators in healthcare and space technology.',
      link: '/ideation-lab',
      bgColor: 'bg-gradient-to-br from-indigo-800 via-purple-800 to-teal-900',
      ctaText: 'Submit Your Idea / Collaborate Now',
      features: ["Moonshot Incubation", "Deep-tech Experiments", "Innovation Mentoring", "Healthcare & Space Tech"],
      lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_qmfs6c3i.json", // Innovation/brainstorming animation
      glowColor: "from-purple-400 to-teal-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const whyOrivox = [
    {
      title: 'Transparent Future',
      description: 'Leading the revolution in transparent display technology that merges digital and physical worlds.',
      icon: '🔮',
      lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: 'Student Innovation',
      description: 'Empowering the next generation of developers and designers through real-world experience.',
      icon: '🚀',
      lottieUrl: "https://assets8.lottiefiles.com/packages/lf20_v9riyrde.json",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: 'Deep-tech Labs',
      description: 'Incubating breakthrough ideas in healthcare and space exploration technologies.',
      icon: '🧬',
      lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_qmfs6c3i.json",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: 'Interconnected Ecosystem',
      description: 'Three specialized divisions working in synergy to create comprehensive solutions.',
      icon: '🌐',
      lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_DMgKk1.json",
      gradient: "from-indigo-500 to-teal-600"
    }
  ];

  const testimonials = [
    {
      quote: "Orivox's transparent display technology is revolutionary. We're exploring implementations across our retail locations to create immersive shopping experiences.",
      author: "Sarah Chen",
      role: "Innovation Director, RetailTech Solutions",
      avatar: "🏢",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      quote: "The Script&Style platform gave me real-world experience while still in college. It transformed my career trajectory and connected me with amazing mentors.",
      author: "Raj Patel",
      role: "UI/UX Designer & Former Student",
      avatar: "👨‍💻",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      quote: "Working with Ideation Hub on our healthcare AI project was incredible. Their deep-tech expertise accelerated our development by months.",
      author: "Dr. Maria Rodriguez",
      role: "Chief Medical Officer, HealthTech Innovations",
      avatar: "👩‍⚕️",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      quote: "Orivox doesn't just build technology—they engineer the future. Their holistic approach across all three divisions is unmatched.",
      author: "Alex Thompson",
      role: "CTO, Future Systems Inc.",
      avatar: "🚀",
      gradient: "from-indigo-400 to-teal-500"
    }
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`flex flex-col min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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

      <Hero />

      {/* Tabs Section */}
      <section className={`py-12 w-full transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-100 to-gray-200'
      }`} id="divisions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`tabs tabs-boxed flex justify-center mb-8 p-1 backdrop-blur-sm max-w-xl mx-auto rounded-lg shadow-sm border transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-800/70 border-gray-700'
                : 'bg-white/70 border-gray-300'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              className={`tab tab-lg flex-1 transition-all ${
                activeTab === 'divisions'
                  ? 'tab-active bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleTabChange('divisions')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Divisions
            </motion.button>
            <motion.button
              className={`tab tab-lg flex-1 transition-all ${
                activeTab === 'why-orivox'
                  ? 'tab-active bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleTabChange('why-orivox')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Why Orivox?
            </motion.button>
            <motion.button
              className={`tab tab-lg flex-1 transition-all ${
                activeTab === 'testimonials'
                  ? 'tab-active bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleTabChange('testimonials')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Testimonials
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tab Content Container */}
      <section className={`py-12 flex-grow w-full transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-200 to-gray-300'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divisions Section */}
          <AnimatePresence mode="wait">
            {activeTab === 'divisions' && showContent && (
              <motion.div
                key="divisions"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-400 text-indigo-400">Specialized Divisions</div>
                  </motion.div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200"
                    variants={headingVariants}
                  >
                    Powering the <span className="text-indigo-400 relative inline-block">
                      Transparent Future
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-400 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    Three specialized divisions working in synergy to create breakthrough solutions across devices, code, and ideas.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {divisions.map((division, index) => (
                    <motion.div
                      key={division.title}
                      className="relative card glass backdrop-blur-sm shadow-xl overflow-hidden border border-gray-700 h-full flex flex-col bg-gray-800/70 group"
                      variants={itemVariants}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${division.glowColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>

                      <figure className={`${division.bgColor} p-8 text-white flex justify-center items-center relative overflow-hidden`}>
                        {/* Background Lottie Animation */}
                        <div className="absolute inset-0 opacity-30">
                          <Player
                            autoplay
                            loop
                            src={division.lottieUrl}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>

                        {/* Icon with enhanced animation */}
                        <motion.div
                          className="w-20 h-20 flex items-center justify-center relative z-10"
                          initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
                          animate={{ rotate: 0, scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                          whileHover={{
                            rotate: [0, -5, 5, 0],
                            scale: 1.1,
                            transition: { duration: 0.5 }
                          }}
                        >
                          {division.icon}
                        </motion.div>
                      </figure>

                      <div className="card-body flex flex-col flex-grow relative">
                        <motion.h3
                          className="card-title text-xl font-orbitron text-gray-200 mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        >
                          {division.title}
                        </motion.h3>

                        <motion.h4
                          className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          {division.subtitle}
                        </motion.h4>

                        <motion.p
                          className="text-gray-400 flex-grow mb-4 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        >
                          {division.description}
                        </motion.p>

                        {/* Features list */}
                        <motion.div
                          className="mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        >
                          <div className="flex flex-wrap gap-1">
                            {division.features.slice(0, 2).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="badge badge-sm bg-gray-700 text-gray-300 border-gray-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        <div className="card-actions justify-end mt-auto">
                          <Link
                            to={division.link}
                            className="btn btn-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 border-none text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          >
                            {division.ctaText}
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Why Orivox Section */}
            {activeTab === 'why-orivox' && showContent && (
              <motion.div
                key="why-orivox"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="py-8"
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-400 text-indigo-400">Our Advantage</div>
                  </motion.div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200"
                    variants={headingVariants}
                  >
                    Why Choose <span className="text-indigo-400 relative inline-block">
                      Orivox?
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-400 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    Whether you see the future, build it, or dream it — Orivox is your launchpad for innovation.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {whyOrivox.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="relative card bg-gray-800/80 backdrop-blur-sm shadow-xl border border-gray-700 overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                        scale: 1.02
                      }}
                    >
                      {/* Background Lottie Animation */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Player
                          autoplay
                          loop
                          src={item.lottieUrl}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>

                      {/* Gradient glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="card-body relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="text-4xl mr-4">{item.icon}</div>
                          <div className="w-16 h-16 opacity-60">
                            <Player
                              autoplay
                              loop
                              src={item.lottieUrl}
                              style={{ width: '100%', height: '100%' }}
                            />
                          </div>
                        </div>

                        <h3 className="card-title text-xl font-orbitron text-gray-200 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Animated underline */}
                        <motion.div
                          className={`h-[2px] bg-gradient-to-r ${item.gradient} mt-4 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonials Section */}
            {activeTab === 'testimonials' && showContent && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="py-8"
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-400 text-indigo-400">What People Say</div>
                  </motion.div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200"
                    variants={headingVariants}
                  >
                    Client <span className="text-indigo-400 relative inline-block">
                      Testimonials
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-400 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    Hear from our partners and clients about their experience with Orivox's innovative solutions.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.author}
                      className={`relative card backdrop-blur-sm shadow-xl border overflow-hidden group transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-gray-800/80 border-gray-700'
                          : 'bg-white/80 border-gray-300'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                        scale: 1.02
                      }}
                    >
                      {/* Gradient glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="card-body relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="text-4xl mr-4">{testimonial.avatar}</div>
                          <svg className={`w-10 h-10 mb-3 transition-colors duration-300 ${
                            isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                          }`} fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
                          </svg>
                        </div>

                        <p className={`text-lg italic mb-4 leading-relaxed transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          "{testimonial.quote}"
                        </p>

                        <div className="mt-auto">
                          <h3 className={`font-bold mb-1 transition-colors duration-300 ${
                            isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                          }`}>
                            {testimonial.author}
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {testimonial.role}
                          </p>
                        </div>

                        {/* Animated underline */}
                        <motion.div
                          className={`h-[2px] bg-gradient-to-r ${testimonial.gradient} mt-4 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white w-full overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_DMgKk1.json"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 font-orbitron leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Whether you <span className="text-cyan-300">see the future</span>,
              <br className="hidden md:block" />
              <span className="text-blue-300">build it</span>, or
              <span className="text-purple-300"> dream it</span> —
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Orivox is your launchpad.
              </span>
            </motion.h2>

            <motion.p
              className="text-xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to transform your ideas into breakthrough solutions? Let's collaborate across our specialized divisions.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn btn-lg bg-white text-indigo-800 hover:bg-gray-100 border-none font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Book a Consultation
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-indigo-800 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Join the Revolution
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/ideation-lab"
                  className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Pitch to the Lab
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </motion.svg>
                </Link>
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

export default ServicesPage;

