import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import FloatingContactButton from '../components/FloatingContactButton';

const ExploreExoPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 0.8, 0.6, 0.4]);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
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
        duration: 40,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Exoplanet catalog data
  const exoplanets = [
    {
      name: "Kepler-186f",
      type: "Super-Earth",
      description: "Often called Earth's cousin, this exoplanet orbits within the habitable zone of its star.",
      image: "/images/kepler-186f.jpg",
      facts: ["Similar size to Earth", "Orbits a red dwarf star", "Could potentially support liquid water"],
      distance: "500 light years",
      yearDiscovered: 2014
    },
    {
      name: "TRAPPIST-1e",
      type: "Terrestrial",
      description: "Part of a system of seven Earth-sized planets, several of which could harbor water.",
      image: "/images/trappist-1e.jpg",
      facts: ["Rocky planet", "Part of a 7-planet system", "Potentially habitable"],
      distance: "40 light years",
      yearDiscovered: 2017
    },
    {
      name: "HD 189733 b",
      type: "Hot Jupiter",
      description: "A gas giant with deep blue color, possibly from glass particles in its atmosphere.",
      image: "/images/hd-189733b.jpg",
      facts: ["Cobalt blue color", "Extreme weather", "Rains molten glass sideways"],
      distance: "63 light years",
      yearDiscovered: 2005
    },
    {
      name: "55 Cancri e",
      type: "Super-Earth",
      description: "A diamond planet! Scientists believe its surface could be covered in graphite and diamond.",
      image: "/images/55-cancri-e.jpg",
      facts: ["Surface could be made of diamond", "Very hot surface temperature", "Year lasts only 18 hours"],
      distance: "40 light years",
      yearDiscovered: 2004
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
    // Initialize star field animation
    const createStars = () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const duration = Math.random() * 1 + 1;
        const delay = Math.random() * 2;
        gsap.to(star, {
          opacity: Math.random() * 0.5 + 0.5,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true
        });
      });
    };

    createStars();
  }, []);

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
        {/* Hero Section with Parallax and Interactive Elements */}
        <section className="min-h-screen relative py-10 overflow-hidden">
          {/* Animated cosmic objects */}
              <motion.div
            className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 blur-sm"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          />
          
          <motion.div 
            className="absolute bottom-40 left-10 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 blur-sm"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
          
          <motion.div 
            className="absolute top-1/3 left-1/4 w-2 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 0.7, height: 100 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
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
                  <motion.div variants={fadeIn} className="inline-block mb-4">
                    <div className="badge badge-accent text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-900 text-cyan-100 border-cyan-700">
                      COSMIC ADVENTURE FOR CURIOUS MINDS
                    </div>
                  </motion.div>
                  
                <motion.h1 
                  variants={fadeIn}
                    className="text-6xl lg:text-7xl font-bold mb-6 font-orbitron tracking-tight"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
                      Cosmo<span className="text-white">Kids</span>
                    </span>
                </motion.h1>
                  
                <motion.p 
                  variants={fadeIn}
                    className="text-2xl font-light mb-6 text-blue-200"
                >
                    Discover the Wonders of Exoplanets and Beyond!
                </motion.p>
                  
                <motion.p 
                  variants={fadeIn}
                    className="text-gray-300 mb-8 text-lg max-w-lg"
                >
                    An interactive space journey for curious kids, students, and anyone fascinated by the mysteries of exoplanets and the universe.
                </motion.p>
                  
                <motion.div 
                  variants={fadeIn}
                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                    <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-violet-600 border-0 text-white hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-700/20">
                      <span className="mr-2">🚀</span> Start Exploring
                  </button>
                    <button className="btn btn-outline border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-300">
                      <span className="mr-2">👨‍🚀</span> Join the Crew
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
              {/* Interactive Planet Animation */}
              <div className="lg:w-1/2 relative h-96">
              <motion.div 
                  className="absolute w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  {/* Orbit rings */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-500/30"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  />
                  
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-500/20"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Main planet */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 shadow-2xl shadow-purple-900/50"
                    variants={floatAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    {/* Planet atmosphere */}
                    <div className="absolute inset-0 rounded-full bg-cyan-500/10 backdrop-blur-md"></div>
                    
                    {/* Planet details/texture */}
                    <div className="absolute inset-2 rounded-full overflow-hidden">
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/5 rounded-full bg-white/10 rotate-12"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/6 rounded-full bg-white/5 -rotate-12"></div>
                    </div>
                  </motion.div>
                  
                  {/* Orbiting moon */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-6 h-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                <motion.div 
                      className="absolute top-0 right-40 w-6 h-6 rounded-full bg-cyan-300 shadow-lg shadow-cyan-500/50"
                      variants={pulseAnimation}
                      initial="initial"
                  animate="animate"
                    />
                  </motion.div>
                  
                  {/* Floating asteroid */}
                <motion.div 
                    className="absolute top-20 right-20 w-4 h-4 rounded-sm bg-gray-600"
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, 20, 0], rotate: 360 }}
                    transition={{ 
                      y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  />
                  
                  {/* Floating satellite */}
                  <motion.div 
                    className="absolute bottom-20 left-20 w-10 h-3 bg-gray-400 rounded-sm"
                    initial={{ y: 0, x: 0 }}
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute top-0 left-full w-6 h-1 bg-blue-400 rounded-sm"></div>
                  </motion.div>
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
          
        {/* Discover Exoplanets Section */}
        <section className="py-20 relative">
          {/* Decorative elements */}
            <motion.div 
            className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"
              animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3] 
              }}
              transition={{
              duration: 8, 
                repeat: Infinity,
              repeatType: "reverse"
              }}
          />
          
            <motion.div 
            className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{
              duration: 10, 
                repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <div className="badge badge-secondary mb-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-800 text-violet-100 border-violet-700">
                COSMIC EXPLORATION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600">
                  Discover Exoplanets
                </span>
              </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore amazing worlds beyond our solar system with interactive planet cards
            </p>
          </motion.div>

            {/* Interactive exoplanet cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exoplanets.map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                    y: -12,
                  transition: { duration: 0.3 }
                }}
                  className="card bg-gradient-to-b from-gray-800/80 to-gray-900/90 backdrop-blur-md rounded-lg overflow-hidden border border-purple-900/30 shadow-xl shadow-purple-900/20 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* Planet image or placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-900/20 flex items-center justify-center">
                      <motion.div 
                        className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 shadow-lg shadow-purple-800/50"
                        initial={{ scale: 0.9, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ 
                          scale: { 
                            duration: 3, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          },
                          rotate: { 
                            duration: 30, 
                            repeat: Infinity,
                            ease: "linear" 
                          }
                        }}
                      >
                        {/* Planet texture/detail */}
                        <div className="absolute inset-3 rounded-full overflow-hidden opacity-50">
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/6 rounded-full bg-white/20 rotate-12"></div>
                          <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/6 rounded-full bg-white/10 -rotate-12"></div>
                  </div>
                      </motion.div>
                </div>
                
                    {/* Planet name overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                      <div className="flex justify-between items-center">
                        <h3 className="card-title text-lg font-bold font-orbitron text-cyan-300 group-hover:text-cyan-200">
                          {planet.name}
                        </h3>
                        <div className="badge badge-outline badge-sm border-purple-400 text-purple-300">
                      {planet.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body p-5">
                    <p className="text-gray-300 text-sm mb-4">{planet.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-900 flex items-center justify-center">
                          <span className="text-blue-300 text-xs">🔭</span>
                    </div>
                        <span className="text-gray-400">Distance: <span className="text-gray-200">{planet.distance}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-900 flex items-center justify-center">
                          <span className="text-purple-300 text-xs">📅</span>
                        </div>
                        <span className="text-gray-400">Discovered: <span className="text-gray-200">{planet.yearDiscovered}</span></span>
                    </div>
                  </div>
                  
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-sm btn-ghost text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20 gap-2">
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                      </button>
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
              className="text-center mt-12"
            >
              <button className="btn btn-outline border-blue-500/50 text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/80 px-8">
                <span className="mr-2">🔍</span> Discover More Exoplanets
              </button>
            </motion.div>
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

        {/* Community Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/90 to-blue-900/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-blue-900/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-cyan-600/20 blur-3xl"></div>
                  
                  <div className="relative">
                    <div className="mb-6">
                      <div className="badge badge-primary mb-2">JOIN US</div>
                      <h3 className="text-3xl font-bold font-orbitron text-white mb-4">
                        Become a Space Explorer!
                      </h3>
                      <p className="text-blue-200 mb-8">
                        Join our community of young space enthusiasts! Learn, share discoveries, and connect with fellow explorers.
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/70 flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-300 text-lg">🏆</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-300">Earn Space Badges</h4>
                          <p className="text-sm text-gray-300">Complete challenges and quizzes to collect cosmic achievements</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/70 flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-300 text-lg">👨‍🚀</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-300">Safe Community</h4>
                          <p className="text-sm text-gray-300">Kid-friendly, moderated environment for learning and sharing</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/70 flex items-center justify-center flex-shrink-0">
                          <span className="text-cyan-300 text-lg">🔭</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-300">Exclusive Content</h4>
                          <p className="text-sm text-gray-300">Access special missions, games and educational resources</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white px-8">
                      Join Now - It's Free!
                    </button>
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
      
      {/* Floating Action Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <div className="dropdown dropdown-top dropdown-end">
          <label tabIndex={0} className="btn btn-circle bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/70">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-gray-800/95 backdrop-blur-md rounded-box w-52 border border-blue-900/30 text-gray-200">
            <li><a className="hover:bg-blue-900/30">Help & FAQs</a></li>
            <li><a className="hover:bg-blue-900/30">Contact Support</a></li>
            <li><a className="hover:bg-blue-900/30">Report an Issue</a></li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreExoPage; 