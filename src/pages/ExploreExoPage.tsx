import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import FloatingContactButton from '../components/FloatingContactButton';

// Import Lottie animations
import planetOrbitAnimation from '../assets/animations/planet-orbit.json';
import telescopeScanAnimation from '../assets/animations/telescope-scan.json';
import rocketLaunchAnimation from '../assets/animations/rocket-launch.json';

const ExploreExoPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0.8, 0.5, 0.2]);
  const galaxyRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Enhanced Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlow = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const cosmicParticle = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced Exoplanet catalog with educational data
  const exoplanets = [
    {
      name: "Kepler-186f",
      type: "Super-Earth",
      description: "Often called Earth's cousin, this exoplanet orbits within the habitable zone of its red dwarf star.",
      discoveryMethod: "Transit Method",
      facts: ["1.11 times Earth's radius", "Receives similar energy from its star as Earth", "Could have liquid water oceans"],
      distance: "500 light years",
      yearDiscovered: 2014,
      temperature: "Unknown",
      funFact: "If you lived here, you'd see a red sunset every day!",
      color: "from-green-500 to-blue-600"
    },
    {
      name: "TRAPPIST-1e",
      type: "Terrestrial",
      description: "Part of an amazing system of seven Earth-sized planets orbiting an ultra-cool dwarf star.",
      discoveryMethod: "Transit Method",
      facts: ["Rocky composition", "Part of a 7-planet system", "Likely tidally locked"],
      distance: "40 light years",
      yearDiscovered: 2017,
      temperature: "-22°C to -1°C",
      funFact: "Three of its sibling planets might also have water!",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "HD 189733 b",
      type: "Hot Jupiter",
      description: "A stunning cobalt blue gas giant with the most extreme weather in the known universe.",
      discoveryMethod: "Transit Method",
      facts: ["Cobalt blue color", "Winds up to 8,700 km/h", "Rains molten glass sideways"],
      distance: "63 light years",
      yearDiscovered: 2005,
      temperature: "1,200°C",
      funFact: "The blue color comes from silicate particles in its atmosphere!",
      color: "from-blue-600 to-indigo-800"
    },
    {
      name: "TOI-700 d",
      type: "Earth-sized",
      description: "The first Earth-sized planet discovered in the habitable zone by NASA's TESS mission.",
      discoveryMethod: "Transit Method",
      facts: ["20% larger than Earth", "Receives 86% of Earth's stellar energy", "Potentially rocky"],
      distance: "100 light years",
      yearDiscovered: 2020,
      temperature: "Unknown",
      funFact: "It's tidally locked, so one side always faces its star!",
      color: "from-cyan-500 to-blue-700"
    },
    {
      name: "K2-18 b",
      type: "Sub-Neptune",
      description: "A planet where scientists have detected water vapor in its atmosphere - a major discovery!",
      discoveryMethod: "Transit Method",
      facts: ["2.2 times Earth's radius", "Water vapor detected", "8.6 times Earth's mass"],
      distance: "124 light years",
      yearDiscovered: 2015,
      temperature: "-73°C to 47°C",
      funFact: "It might have clouds and rain, just like Earth!",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "55 Cancri e",
      type: "Super-Earth",
      description: "The famous 'diamond planet' - a world that might be covered in graphite and diamond!",
      discoveryMethod: "Radial Velocity",
      facts: ["Surface could be diamond", "2,000°C surface temperature", "Year lasts only 18 hours"],
      distance: "40 light years",
      yearDiscovered: 2004,
      temperature: "2,000°C",
      funFact: "This planet is worth more than Earth's entire economy!",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  // Mind-blowing space facts for the carousel
  const spaceFacts = [
    {
      title: "Raining Diamonds",
      fact: "On Neptune and Uranus, it literally rains diamonds! The extreme pressure turns carbon into diamond crystals.",
      icon: "💎",
      category: "Extreme Weather"
    },
    {
      title: "Time Dilation",
      fact: "If you spent a year on a planet orbiting a black hole, thousands of years could pass on Earth!",
      icon: "⏰",
      category: "Physics"
    },
    {
      title: "Galactic Speed",
      fact: "Our entire solar system is racing through space at 828,000 km/h around the Milky Way!",
      icon: "🌌",
      category: "Motion"
    },
    {
      title: "Stellar Nurseries",
      fact: "The Eagle Nebula creates 1,000 new stars every million years - it's a cosmic baby factory!",
      icon: "⭐",
      category: "Star Formation"
    },
    {
      title: "Cosmic Distances",
      fact: "Light from the nearest star (besides the Sun) takes 4.37 years to reach us - that's 41 trillion kilometers!",
      icon: "🔭",
      category: "Distance"
    },
    {
      title: "Neutron Star Density",
      fact: "A teaspoon of neutron star material would weigh 6 billion tons - as much as Mount Everest!",
      icon: "🏔️",
      category: "Density"
    }
  ];

  // Learning modules data
  const learningModules = [
    {
      title: "Exoplanet Detection",
      description: "Learn how scientists find planets orbiting distant stars",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Space Habitats",
      description: "Discover what makes a planet potentially habitable",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Stellar Evolution",
      description: "Explore how stars are born, live, and die",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Space Missions",
      description: "Learn about the spacecraft that help us discover new worlds",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    }
  ];

  useEffect(() => {
    // Initialize enhanced star field animation
    const createStars = () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * 3;
        gsap.to(star, {
          opacity: Math.random() * 0.7 + 0.3,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      });
    };

    // Auto-scroll space facts
    const factsInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % spaceFacts.length);
    }, 6000);

    createStars();

    return () => {
      clearInterval(factsInterval);
    };
  }, [spaceFacts.length]);

  return (
    <div ref={mainRef} className="bg-gray-950 text-gray-100 overflow-hidden relative min-h-screen">
      {/* Interactive background */}
      <motion.div 
        className="fixed inset-0 z-0" 
        style={{ 
          opacity: starsOpacity,
          y: backgroundY 
        }}
      >
        {/* Star field background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div 
              key={`star-${i}`} 
              className="star absolute rounded-full bg-white" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
      </div>
      
        {/* Nebula/galaxy effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/10 to-blue-900/20 opacity-50"></div>
        <div className="absolute inset-0 nebula-bg"></div>
      </motion.div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - ExploreEXO: Beyond the Known */}
        <section className="min-h-screen relative py-10 pt-32 overflow-hidden">
          {/* Enhanced Cosmic Background Elements */}
          <motion.div
            className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-60"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            style={{ filter: 'blur(8px)' }}
          />

          <motion.div
            className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1.5s", filter: 'blur(6px)' }}
          />

          {/* Cosmic particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={cosmicParticle}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.5 }}
            />
          ))}

          {/* Shooting stars */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-80"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
              x: [0, 100, 200]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeOut"
            }}
          />

          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeInUp} className="inline-block mb-6">
                    <div className="badge badge-accent text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 text-cyan-100 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                      🌌 BEYOND THE KNOWN UNIVERSE
                    </div>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-5xl lg:text-8xl font-bold mb-8 font-orbitron tracking-tight leading-none"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500">
                      ExploreEXO
                    </span>
                    <br />
                    <span className="text-3xl lg:text-5xl text-gray-300 font-light">
                      Beyond the Known
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    className="text-xl lg:text-2xl font-light mb-6 text-blue-200 leading-relaxed"
                  >
                    Unveil the mysteries of distant worlds and cosmic facts that defy imagination
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-300 mb-10 text-lg max-w-2xl leading-relaxed"
                  >
                    Journey through space and time to discover exoplanets, mind-bending physics, and the incredible stories written in starlight. Every click reveals wonders that will reshape how you see the universe.
                  </motion.p>

                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-6 justify-center lg:justify-start"
                  >
                    <button
                      type="button"
                      className="btn btn-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 border-0 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 shadow-2xl shadow-blue-600/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <span className="mr-3 text-xl">🚀</span>
                      Dive Into the Cosmos
                    </button>
                    <button
                      type="button"
                      className="btn btn-lg btn-outline border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900/40 hover:text-cyan-200 hover:border-cyan-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <span className="mr-3 text-xl">🔭</span>
                      Discover More
                    </button>
                  </motion.div>

                  {/* Add Lottie Animation for Hero */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-8 flex justify-center lg:justify-start"
                  >
                    <div className="w-16 h-16">
                      <Lottie
                        animationData={rocketLaunchAnimation}
                        loop={true}
                        className="w-full h-full"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Simplified Cosmic Animation with Lottie */}
              <div className="lg:w-1/2 relative h-[500px] flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                >
                  {/* Simplified background glow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Main Lottie Planet Animation */}
                  <motion.div
                    className="relative z-10 w-64 h-64"
                    variants={floatAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <Lottie
                      animationData={planetOrbitAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </motion.div>

                  {/* Telescope Lottie Animation */}
                  <motion.div
                    className="absolute bottom-16 left-16 w-20 h-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    <Lottie
                      animationData={telescopeScanAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </motion.div>

                  {/* Simplified cosmic particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        top: `${30 + Math.random() * 40}%`,
                        left: `${30 + Math.random() * 40}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1.5, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Floating down indicator */}
          <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-300 flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 2,
                duration: 1
              }}
            >
              <p className="text-sm mb-2">Scroll to explore</p>
              <motion.div 
                className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center py-1"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                />
          </motion.div>
            </motion.div>
          </div>
        </section>
          
        {/* Exoplanet Discovery Section */}
        <section className="py-24 relative">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950"></div>

          <motion.div
            className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/15 to-cyan-600/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <motion.div
            className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/10 blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="badge badge-secondary mb-6 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-violet-900 to-purple-900 text-violet-100 border border-violet-500/30 shadow-lg shadow-violet-500/20">
                🪐 EXOPLANET DISCOVERY
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-orbitron leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500">
                  Worlds Beyond
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-300 font-light">
                  Our Solar System
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Journey to distant worlds where diamonds rain from the sky, where years last only hours,
                and where the impossible becomes reality. Each planet tells a story written in starlight.
              </p>
            </motion.div>

            {/* Enhanced Interactive Exoplanet Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {exoplanets.map((planet, index) => (
                <motion.div
                  key={planet.name}
                  initial={{ opacity: 0, y: 60, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-violet-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className={`relative card bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/40 h-full`}>
                    {/* Planet visualization */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50">
                      <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} opacity-20`}></div>

                      {/* Planet with Lottie Animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          {/* Background planet */}
                          <motion.div
                            className={`w-full h-full rounded-full bg-gradient-to-br ${planet.color} shadow-2xl relative`}
                            initial={{ scale: 0.8 }}
                            animate={{
                              scale: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{
                              boxShadow: `0 0 40px ${planet.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' :
                                                     planet.color.includes('green') ? 'rgba(34, 197, 94, 0.4)' :
                                                     planet.color.includes('purple') ? 'rgba(147, 51, 234, 0.4)' :
                                                     planet.color.includes('orange') ? 'rgba(249, 115, 22, 0.4)' :
                                                     'rgba(56, 189, 248, 0.4)'}`
                            }}
                          >
                            {/* Planet surface details */}
                            <div className="absolute inset-2 rounded-full overflow-hidden opacity-60">
                              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/6 rounded-full bg-white/25 rotate-12"></div>
                              <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/6 rounded-full bg-white/15 -rotate-12"></div>
                              <div className="absolute top-1/2 left-1/3 w-1/4 h-1/8 rounded-full bg-white/20 rotate-45"></div>
                            </div>
                          </motion.div>

                          {/* Overlay Lottie Animation */}
                          <div className="absolute inset-0 opacity-30">
                            <Lottie
                              animationData={planetOrbitAnimation}
                              loop={true}
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Discovery method badge */}
                      <div className="absolute top-4 right-4">
                        <div className="badge badge-sm bg-black/50 text-cyan-300 border-cyan-500/30 backdrop-blur-sm">
                          {planet.discoveryMethod}
                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="card-body p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="card-title text-xl font-bold font-orbitron text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          {planet.name}
                        </h3>
                        <div className="badge badge-outline border-violet-400 text-violet-300 text-xs">
                          {planet.type}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{planet.description}</p>

                      {/* Key facts */}
                      <div className="space-y-3 text-sm mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-300 text-xs">🔭</span>
                          </div>
                          <span className="text-gray-400">
                            <span className="text-gray-200 font-medium">{planet.distance}</span> away
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-300 text-xs">📅</span>
                          </div>
                          <span className="text-gray-400">
                            Discovered in <span className="text-gray-200 font-medium">{planet.yearDiscovered}</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-300 text-xs">🌡️</span>
                          </div>
                          <span className="text-gray-400">
                            Temperature: <span className="text-gray-200 font-medium">{planet.temperature}</span>
                          </span>
                        </div>
                      </div>

                      {/* Fun fact */}
                      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg p-3 mb-4 border border-indigo-700/30">
                        <p className="text-cyan-200 text-sm font-medium">💡 Fun Fact:</p>
                        <p className="text-gray-300 text-xs mt-1">{planet.funFact}</p>
                      </div>

                      <div className="card-actions justify-between items-center mt-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="btn btn-sm bg-gradient-to-r from-cyan-600 to-blue-600 border-0 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:scale-105"
                        >
                          <span className="mr-1">🚀</span>
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button
                type="button"
                className="btn btn-outline border-blue-500/50 text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/80 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">🔍</span> Discover More Exoplanets
              </button>
            </motion.div>
          </div>
        </section>

        {/* Mind-Blowing Space Facts Carousel */}
        <section className="py-24 relative overflow-hidden">
          {/* Cosmic background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>

          {/* Floating cosmic elements */}
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/70"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-32 right-32 w-1 h-1 bg-cyan-300 rounded-full shadow-md shadow-cyan-300/50"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 2, 1],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="badge badge-accent mb-6 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-pink-900 to-purple-900 text-pink-100 border border-pink-500/30 shadow-lg shadow-pink-500/20">
                🌌 COSMIC WONDERS
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-orbitron leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600">
                  Mind-Blowing
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-300 font-light">
                  Space Facts
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Prepare to have your mind blown by the most incredible facts about our universe.
                Reality is stranger than fiction when it comes to space!
              </p>
            </motion.div>

            {/* Auto-scrolling facts carousel */}
            <div className="relative max-w-6xl mx-auto">
              <motion.div
                className="flex gap-6 pb-6"
                animate={{ x: [0, -100 * spaceFacts.length] }}
                transition={{
                  duration: spaceFacts.length * 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...spaceFacts, ...spaceFacts].map((fact, index) => (
                  <motion.div
                    key={`${fact.title}-${index}`}
                    className="flex-shrink-0 w-80 h-64"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-2xl shadow-black/40 relative overflow-hidden group">
                      {/* Background glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-4xl">{fact.icon}</div>
                          <div>
                            <h3 className="text-lg font-bold text-cyan-300 font-orbitron">{fact.title}</h3>
                            <div className="badge badge-sm bg-purple-900/50 text-purple-300 border-purple-700/50">
                              {fact.category}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                          {fact.fact}
                        </p>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">Mind = Blown 🤯</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      {/* Learn & Play Section */}
      <section className="py-20 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 z-0"></div>
          
          <motion.div 
            className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/70"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-green-400 shadow-md shadow-green-400/50"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <div className="badge badge-accent mb-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-800 text-cyan-100 border-cyan-700">
                COSMIC ADVENTURES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">
                  Learn & Play
                </span>
              </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Blast into space science with fun activities, games, and interactive challenges!
            </p>
          </motion.div>

            {/* Learning tabs */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="tabs tabs-boxed bg-gray-900/50 backdrop-blur-sm p-2 flex justify-center rounded-full mb-8 border border-blue-900/30 overflow-x-auto no-scrollbar">
                <a className="tab tab-sm md:tab-md transition-all duration-300 text-sm md:text-base rounded-full bg-blue-600 text-white">Beginner</a>
                <a className="tab tab-sm md:tab-md transition-all duration-300 text-sm md:text-base rounded-full text-blue-300 hover:text-blue-200">Explorer</a>
                <a className="tab tab-sm md:tab-md transition-all duration-300 text-sm md:text-base rounded-full text-blue-300 hover:text-blue-200">Scientist</a>
                <a className="tab tab-sm md:tab-md transition-all duration-300 text-sm md:text-base rounded-full text-blue-300 hover:text-blue-200">Expert</a>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
            {learningModules.map((module, index) => (
              <motion.div
                key={module.title}
                    initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                      transition: { duration: 0.2 }
                }}
                    className="card bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800/80 shadow-xl border border-gray-700 hover:border-blue-700/50 transition-all duration-300"
              >
                    <div className="card-body p-6 flex flex-row items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} flex-shrink-0 transform -rotate-3 shadow-lg`}>
                    {module.icon}
                  </div>
                  <div>
                        <h3 className="card-title font-semibold text-cyan-300 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{module.description}</p>
                        
                        <div className="card-actions justify-between items-center mt-4">
                          <span className="badge badge-sm bg-blue-900/50 text-blue-300 border-blue-800">
                            Beginner Friendly
                          </span>
                          <button className="btn btn-sm btn-ghost text-blue-400 hover:text-blue-300 flex items-center gap-1">
                            Start Learning
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                        </div>
                  </div>
                </div>
              </motion.div>
            ))}
              </motion.div>
          </div>
          
            {/* Fun Quiz */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/30 shadow-2xl shadow-blue-900/10 max-w-4xl mx-auto"
            >
              <div className="p-2 bg-gradient-to-r from-cyan-600 to-blue-700">
                <h3 className="text-center text-white font-bold font-orbitron text-lg">🚀 Space Quiz Challenge 🚀</h3>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-6">
                  <h4 className="text-xl text-cyan-300 font-medium mb-3">Which planet is known as "Earth's Cousin"?</h4>
                  <p className="text-gray-400 text-sm mb-4">Choose the exoplanet that scientists often compare to Earth because of its similar size and position in the habitable zone.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {["TRAPPIST-1e", "Kepler-186f", "Proxima Centauri b", "HD 189733 b"].map((option, i) => (
                    <motion.button
                      key={option}
                        whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-lg border ${option === 'Kepler-186f' 
                          ? 'border-green-500/50 bg-green-900/20 text-green-300' 
                          : 'border-blue-900/30 bg-gray-800/40 text-gray-300 hover:border-blue-800/80 hover:bg-gray-800/60'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span>{option}</span>
                        </div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
                <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 text-xl">✓</div>
                    <div>
                      <p className="text-green-300 font-medium">Correct!</p>
                      <p className="text-gray-300 text-sm">Kepler-186f is often called Earth's cousin because it orbits in the habitable zone of its star and is roughly Earth-sized.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">Question 1/5</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-1/5 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary btn-sm bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
                    Next Question
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Space Discoveries Section */}
      <section className="py-20 relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950 z-0"></div>
          
          <motion.div 
            className="absolute top-10 right-10 w-40 h-40 rounded-full bg-violet-600/5 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity
            }}
          />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <div className="badge badge-secondary mb-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-800 text-violet-100 border-violet-700">
                COSMIC NEWS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                  Latest Discoveries
                </span>
              </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay up to date with the newest findings from space agencies around the world
            </p>
          </motion.div>

            {/* News cards carousel */}
            <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box max-w-6xl mx-auto">
            {[
              {
                  title: "NASA's James Webb Telescope Finds Water on Distant Exoplanet",
                  image: "/images/news-webb.jpg",
                date: "June 15, 2025",
                  summary: "The James Webb Space Telescope has detected water vapor in the atmosphere of a potentially habitable exoplanet, marking a significant discovery in our search for life beyond Earth.",
                  category: "Telescope"
                },
                {
                  title: "New Earth-sized Planet Discovered in Habitable Zone",
                  image: "/images/news-planet.jpg",
                  date: "May 22, 2025",
                  summary: "Astronomers have found a new Earth-sized exoplanet orbiting within its star's habitable zone, making it a prime candidate in our search for worlds that could support life.",
                  category: "Exoplanet"
                },
                {
                  title: "Student Discovers Unique Exoplanet During School Project",
                  image: "/images/news-student.jpg",
                  date: "April 3, 2025",
                  summary: "A high school student participating in a citizen science project has helped identify a unique exoplanet with unusual orbital characteristics, proving anyone can contribute to space science.",
                  category: "Discovery"
              }
            ].map((news, index) => (
              <motion.div
                  key={news.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="carousel-item w-full md:w-96 h-96"
                >
                  <div className="card w-full h-full bg-gray-800/70 shadow-xl image-full overflow-hidden border border-purple-900/30">
                    {/* Placeholder for news image */}
                    <figure className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                    </figure>
                    
                    <div className="card-body justify-between z-10 relative">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="badge badge-sm badge-outline text-purple-300 border-purple-500">
                      {news.category}
                          </div>
                          <div className="text-sm text-gray-400">{news.date}</div>
                        </div>
                        <h3 className="card-title text-lg text-cyan-300 mb-2">{news.title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-3">{news.summary}</p>
                  </div>
                  
                      <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-ghost text-cyan-400 hover:text-cyan-300">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
            {/* Navigation dots */}
            <div className="flex justify-center w-full py-4 gap-2 mt-4">
              <a href="#item1" className="w-3 h-3 rounded-full bg-blue-600"></a> 
              <a href="#item2" className="w-3 h-3 rounded-full bg-gray-600"></a> 
              <a href="#item3" className="w-3 h-3 rounded-full bg-gray-600"></a>
          </div>
        </div>
      </section>

        {/* Interactive Cosmic Map Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="badge badge-accent mb-6 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-indigo-900 to-blue-900 text-indigo-100 border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                🗺️ COSMIC NAVIGATION
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-orbitron leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400">
                  Interactive
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-300 font-light">
                  Galaxy Map
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore where these incredible exoplanets are located in our galaxy.
                Click on stars to discover their planetary systems!
              </p>
            </motion.div>

            {/* Mini Galaxy Simulation */}
            <motion.div
              className="relative max-w-4xl mx-auto h-96 bg-gradient-to-br from-gray-900/50 to-black/80 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {/* Galaxy spiral background */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-transparent"></div>

              {/* Interactive star systems */}
              {exoplanets.slice(0, 4).map((planet, index) => (
                <motion.div
                  key={planet.name}
                  className="absolute cursor-pointer group"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: `${15 + index * 20}%`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    opacity: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  {/* Star */}
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50 relative">
                    <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur-sm"></div>
                  </div>

                  {/* Planet orbit */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-12 h-12 border border-cyan-400/30 rounded-full"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className={`absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r ${planet.color} rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
                  </motion.div>

                  {/* Info tooltip */}
                  <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 min-w-48">
                    <h4 className="text-cyan-300 font-semibold text-sm">{planet.name}</h4>
                    <p className="text-gray-300 text-xs">{planet.distance} away</p>
                    <p className="text-gray-400 text-xs">{planet.type}</p>
                  </div>
                </motion.div>
              ))}

              {/* Galaxy center */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"></div>
              </motion.div>

              {/* Cosmic dust */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`cosmic-dust-${i}`}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Call-to-Action Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative cosmic elements */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-cyan-600/20 blur-3xl"></div>

                  <div className="relative">
                    <div className="mb-8">
                      <div className="badge badge-primary mb-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
                        🚀 JOIN THE MISSION
                      </div>
                      <h3 className="text-4xl font-bold font-orbitron text-white mb-6 leading-tight">
                        Become a Cosmic Explorer!
                      </h3>
                      <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                        Join thousands of young space enthusiasts on an incredible journey through the cosmos.
                        Discover, learn, and explore the wonders of the universe together!
                      </p>
                    </div>

                    <div className="space-y-6 mb-10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-600/30">
                          <span className="text-white text-xl">🏆</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-300 text-lg">Earn Cosmic Badges</h4>
                          <p className="text-gray-300">Complete space missions and quizzes to unlock exclusive achievements and become a certified space explorer!</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-600/30">
                          <span className="text-white text-xl">👨‍🚀</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-300 text-lg">Safe Learning Environment</h4>
                          <p className="text-gray-300">Kid-friendly, moderated community where curiosity thrives and every question leads to amazing discoveries!</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-600/30">
                          <span className="text-white text-xl">🔭</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-300 text-lg">Exclusive Space Content</h4>
                          <p className="text-gray-300">Access special missions, interactive games, and educational resources created by real space scientists!</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <button
                        type="button"
                        className="btn btn-lg bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-blue-600/30 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                      >
                        <span className="mr-2 text-xl">🚀</span>
                        Start Your Journey - Free!
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg btn-outline border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900/40 hover:text-cyan-200 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <span className="mr-2 text-xl">📚</span>
                        Learn More
                      </button>
                    </div>

                    {/* Add Lottie Animation for CTA */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12">
                        <Lottie
                          animationData={rocketLaunchAnimation}
                          loop={true}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center py-10 px-6">
                  {/* Avatar badges display */}
            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
              viewport={{ once: true }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                      <motion.div 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="avatar online"
                      >
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-gray-300">
                          <span className="text-2xl">👧</span>
                        </div>
            </motion.div>
                    </div>
            
                    <div className="absolute top-1/4 right-1/4 transform translate-x-1/2">
            <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="avatar online"
                      >
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 bg-gray-300">
                          <span className="text-2xl">👦</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
                      <motion.div 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="avatar offline"
                      >
                        <div className="w-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 bg-gray-300">
                          <span className="text-2xl">👨‍🦱</span>
                        </div>
            </motion.div>
          </div>
                    
                    <div className="absolute bottom-0 right-1/3 transform translate-x-1/2">
                      <motion.div 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="avatar online"
                      >
                        <div className="w-16 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2 bg-gray-300">
                          <span className="text-2xl">👩‍🦰</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="avatar">
                        <div className="w-24 rounded-full ring ring-cyan-500 ring-offset-base-100 ring-offset-4 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-3xl">🌍</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                      <line x1="25%" y1="15%" x2="50%" y2="50%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                      <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                      <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                      <line x1="70%" y1="85%" x2="50%" y2="50%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

        {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-orbitron text-white mb-4">Contact Mission Control</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have questions or want to learn more? Our team of space experts is here to help!
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-medium text-cyan-300 mb-4">For Young Explorers</h3>
                <p className="text-gray-300 mb-6">
                  Need help with homework? Curious about space? We'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                      <span className="text-cyan-300">📧</span>
                </div>
                <div>
                      <p className="text-gray-400 text-sm">Email us at:</p>
                      <p className="text-blue-300">kids@exploreexo.com</p>
                  </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                      <span className="text-cyan-300">💬</span>
                </div>
                <div>
                      <p className="text-gray-400 text-sm">Chat with our bot:</p>
                      <p className="text-blue-300">AstroBot on our website</p>
                </div>
              </div>
            </div>
        </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-medium text-cyan-300 mb-4">For Parents & Educators</h3>
                <p className="text-gray-300 mb-6">
                  Looking for educational resources or classroom activities?
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                      <span className="text-cyan-300">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email us at:</p>
                      <p className="text-blue-300">education@exploreexo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                      <span className="text-cyan-300">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call us:</p>
                      <p className="text-blue-300">1-800-SPACE-KID</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-gray-400 text-sm mb-4">Follow us on social media for daily space facts and updates!</p>
              <div className="flex justify-center gap-4">
                <button className="btn btn-circle btn-outline border-blue-700 text-blue-400 hover:bg-blue-900/50 hover:border-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </button>
                <button className="btn btn-circle btn-outline border-cyan-700 text-cyan-400 hover:bg-cyan-900/50 hover:border-cyan-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </button>
                <button className="btn btn-circle btn-outline border-purple-700 text-purple-400 hover:bg-purple-900/50 hover:border-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </button>
                <button className="btn btn-circle btn-outline border-red-700 text-red-400 hover:bg-red-900/50 hover:border-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-10 bg-gray-900/80 backdrop-blur-md border-t border-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                CosmoKids Explorer
              </h2>
              <p className="text-sm text-gray-400 mb-6">Inspiring young minds, one planet at a time.</p>
              
              <div className="divider max-w-xs mx-auto my-4 opacity-30"></div>
              
              <p className="text-xs text-gray-500 mt-6">© 2025 ExploreExo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default ExploreExoPage; 