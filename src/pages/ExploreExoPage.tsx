import React from 'react';
import { motion } from 'framer-motion';
import FloatingContactButton from '../components/FloatingContactButton';

const ExploreExoPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      }
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

  const orbitAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
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

  return (
    <div className="bg-gray-900 text-gray-100 overflow-hidden relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>
      
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-blue-900/70"></div>
          <div className="nebula-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                  variants={fadeIn}
                >
                  ExploreExo
                </motion.h1>
                <motion.p 
                  className="text-2xl font-light mb-8 text-blue-200"
                  variants={fadeIn}
                >
                  Discover the Wonders of Exoplanets and the Universe
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
                  variants={fadeIn}
                >
                  The interactive space application created especially for curious kids, students, and anyone fascinated by the mysteries beyond our solar system.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  variants={fadeIn}
                >
                  <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-out">
                    Explore Now
                  </button>
                  <button className="btn glass text-blue-300 border-blue-400/30 hover:border-blue-400/50 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 ease-out">
                    Join the Community
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Planet Animation */}
            <div className="lg:w-1/2 relative">
              <motion.div 
                className="planet-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.div 
                  className="orbit-ring"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div 
                  className="planet"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="planet-atmosphere"></div>
                </motion.div>
                <motion.div 
                  className="satellite"
                  animate="animate"
                  variants={orbitAnimation}
                ></motion.div>
                <motion.div 
                  className="glow"
                  animate="animate"
                  variants={pulseAnimation}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-blue-300">Welcome to ExploreExo</h2>
            <p className="text-xl text-gray-300 mb-8">
              Dive into the exciting world of exoplanets—planets that orbit stars beyond our Sun—and learn how scientists discover these distant worlds.
            </p>
            <p className="text-lg text-gray-400">
              Whether you're just starting your space journey or want to explore the latest discoveries, ExploreExo makes learning fun, easy, and inspiring.
            </p>
          </motion.div>
          
          {/* Floating space objects */}
          <div className="space-objects">
            <motion.div 
              className="floating-asteroid asteroid-1"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: 360
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="floating-asteroid asteroid-2"
              animate={{
                y: [0, 20, 0],
                x: [0, -15, 0],
                rotate: -360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="floating-star"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Discover Exoplanets Section */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-indigo-900/10 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Discover Exoplanets</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive catalog of confirmed exoplanets, each with detailed profiles and stunning visuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exoplanets.map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border border-indigo-900/50 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                  <div className="planet-image-placeholder bg-gradient-to-br from-indigo-600 to-purple-900 h-full w-full flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-20">{planet.name.charAt(0)}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">{planet.name}</h3>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-900/50 text-purple-200 border border-purple-700/30">
                      {planet.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm">{planet.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="w-24 text-gray-500">Distance:</span>
                      <span className="text-gray-300">{planet.distance}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-24 text-gray-500">Discovered:</span>
                      <span className="text-gray-300">{planet.yearDiscovered}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                      <span className="font-medium text-sm">View Details</span>
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn glass text-blue-300 border-blue-500/20 hover:border-blue-500/40"
            >
              View All Exoplanets
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Learn & Play Section */}
      <section className="py-20 relative">
        <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Learn & Play</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Education meets entertainment with interactive learning modules that make space science fun!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-900/30 group"
              >
                <div className="p-6 flex items-start gap-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${module.color} flex-shrink-0`}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">{module.title}</h3>
                    <p className="text-gray-400">{module.description}</p>
                    
                    <button className="mt-4 px-4 py-2 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      Explore Module
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Interactive Quiz Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-blue-900/30"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-300">Test Your Space Knowledge</h3>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <p className="text-xl mb-4 text-gray-200">Which exoplanet is nicknamed "Earth's Cousin"?</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {["TRAPPIST-1e", "Kepler-186f", "Proxima Centauri b", "HD 189733 b"].map(option => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/60 text-left ${option === 'Kepler-186f' ? 'bg-blue-900/20' : 'bg-gray-800/60'}`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-0 px-8"
                >
                  Check Answer
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Space Discoveries Section */}
      <section className="py-20 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">Latest Space Discoveries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with real-time news from NASA, ESA, and other space agencies around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Water Vapor Found on K2-18b",
                source: "NASA/ESA",
                date: "June 15, 2025",
                image: "water-vapor-exoplanet.jpg",
                excerpt: "Astronomers have detected water vapor in the atmosphere of K2-18b, a potentially habitable exoplanet.",
                category: "Exoplanet Discovery"
              },
              {
                title: "New Exoplanet Detection Method Announced",
                source: "SETI Institute",
                date: "May 28, 2025",
                image: "detection-method.jpg",
                excerpt: "Scientists have developed a groundbreaking method to detect smaller, Earth-like exoplanets with greater accuracy.",
                category: "Research"
              },
              {
                title: "Hubble Captures Stunning Aurora on Hot Jupiter",
                source: "Space Telescope Science Institute",
                date: "April 10, 2025",
                image: "aurora-hot-jupiter.jpg",
                excerpt: "The Hubble Space Telescope has captured spectacular auroras on a hot Jupiter exoplanet that are 1,000 times brighter than Earth's.",
                category: "Observation"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-900/30 group h-full flex flex-col"
              >
                {/* News Image Placeholder */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
                  <div className="bg-gradient-to-br from-cyan-900 to-blue-900 h-full w-full flex items-center justify-center">
                    <span className="text-5xl opacity-10">{news.category.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-900/40 text-cyan-200 border border-cyan-700/30">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-400">{news.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors mb-3">{news.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm flex-grow">{news.excerpt}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-500">Source: {news.source}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn glass text-blue-300 border-blue-500/20 hover:border-blue-500/40"
            >
              View All News & Updates
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Space Community Section */}
      <section className="py-20 relative">
        <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Join the Space Community</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a global network of young explorers and space enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-purple-900/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-300">For Kids & Students</h3>
              <ul className="space-y-4">
                {[
                  "Create your own explorer profile",
                  "Earn badges for completing space missions",
                  "Join challenges and quizzes",
                  "Track your learning progress",
                  "Share discoveries with friends"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mt-8 w-full hover:from-purple-700 hover:to-pink-700"
              >
                Create Explorer Profile
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-purple-900/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-300">For Educators & Parents</h3>
              <ul className="space-y-4">
                {[
                  "Access curriculum-aligned lesson plans",
                  "Download classroom activities",
                  "Monitor student progress",
                  "Connect with other educators",
                  "Receive regular educational resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 mt-8 w-full hover:from-blue-700 hover:to-cyan-700"
              >
                Access Educator Resources
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action & Footer */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-white">Get Started Today</h2>
            <p className="text-xl text-blue-200 mb-10">
              Begin your journey among the stars with ExploreExo—where curiosity meets discovery.
              <br />Explore, learn, and reach for the stars!
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 px-8"
              >
                Explore Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-700/20 hover:shadow-purple-700/40 px-8"
              >
                Join the Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn glass text-gray-200 border-gray-400/20 hover:border-gray-400/40 px-8"
              >
                Contact Us
              </motion.button>
            </div>
            
            <div className="mt-16 pt-10 border-t border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
                  <p className="text-gray-400">
                    Email: support@exploreexo.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    {['instagram', 'youtube', 'twitter'].map(social => (
                      <a key={social} href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Legal</h3>
                  <p className="text-gray-400">
                    © 2025 ExploreExo. All rights reserved.
                    <br />
                    <span className="text-sm">Inspiring young minds, one planet at a time.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS Styles */}
      <style>{`
        .nebula-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/nebula-bg.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          mix-blend-mode: screen;
        }
        
        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          z-index: 0;
        }
        
        .stars-small {
          background-image: radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0));
          background-size: 100px 100px;
          animation: twinkle 8s ease-in-out infinite alternate;
        }
        
        .stars-medium {
          background-image: radial-gradient(2px 2px at 50% 50%, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0));
          background-size: 200px 200px;
          animation: twinkle 15s ease-in-out infinite alternate;
        }
        
        .stars-large {
          background-image: radial-gradient(3px 3px at 50% 50%, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0));
          background-size: 300px 300px;
          animation: twinkle 30s ease-in-out infinite alternate;
        }
        
        .planet-container {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .planet {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(45deg, #1a237e, #4a148c, #311b92);
          box-shadow: 0 0 50px rgba(63, 81, 181, 0.4), 
                      0 0 25px rgba(103, 58, 183, 0.4) inset;
          overflow: hidden;
          z-index: 2;
        }
        
        .planet-atmosphere {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-image: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
            repeating-linear-gradient(20deg, transparent, transparent 10px, rgba(176, 190, 255, 0.15) 10px, rgba(176, 190, 255, 0.15) 20px);
        }
        
        .orbit-ring {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 1px solid rgba(135, 206, 250, 0.3);
          box-shadow: 0 0 20px rgba(135, 206, 250, 0.2);
          z-index: 1;
        }
        
        .satellite {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #64b5f6, #0d47a1);
          box-shadow: 0 0 10px #29b6f6;
          z-index: 3;
        }
        
        .glow {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background-color: transparent;
          box-shadow: 0 0 100px 20px rgba(103, 58, 183, 0.5);
          z-index: 1;
        }
        
        .space-objects {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .floating-asteroid {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, #6a6a6a, #1a1a1a);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }
        
        .asteroid-1 {
          width: 30px;
          height: 25px;
          top: 20%;
          left: 15%;
          opacity: 0.6;
        }
        
        .asteroid-2 {
          width: 25px;
          height: 20px;
          bottom: 30%;
          right: 10%;
          opacity: 0.5;
        }
        
        .floating-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          top: 50%;
          left: 50%;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <FloatingContactButton />
    </div>
  );
};

export default ExploreExoPage; 