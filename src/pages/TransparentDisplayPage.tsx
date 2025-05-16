<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> feature/logo-integration
import { Link } from 'react-router-dom';
import TransparentDisplay from '../components/TransparentDisplay';
import FloatingContactButton from '../components/FloatingContactButton';

const TransparentDisplayPage = () => {
  const [activeTab, setActiveTab] = useState('automotive');
  
  // Animation variants for fade-in effects
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Custom animation variants with delay parameter
  const getDelayedAnimation = (index = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  });

  const applications = [
    {
      id: 'automotive',
      title: "🚗 Automotive & EVs",
      description: "Smart windshield HUDs displaying navigation, alerts, and AR-assisted safety displays that enhance driver awareness without obstruction.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bulletPoints: [
        "Driver-focused information without blocking view",
        "Contextual AR alerts for road hazards",
        "Passenger window entertainment and information",
        "Vehicle status on windshield/glass surfaces"
      ]
    },
    {
      id: 'retail',
      title: "🛍️ Retail & Advertising",
      description: "Transparent storefront advertisements that engage customers without blocking the view into the store, plus in-glass product displays.",
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bulletPoints: [
        "Dynamic storefront displays that maintain visibility",
        "Interactive product showcases on glass surfaces",
        "Customer information that appears only when needed",
        "Ambient branding without physical signage"
      ]
    },
    {
      id: 'smart-cities',
      title: "🏙️ Smart Cities",
      description: "Bus stop & metro glass panels, transparent public information boards, and wayfinding displays integrated into urban environments.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bulletPoints: [
        "Real-time transit information on glass surfaces",
        "Emergency alerts with minimal visual obstruction",
        "Tourism information overlaid on landmarks",
        "Public services information on demand"
      ]
    },
    {
      id: 'healthcare',
      title: "🏥 Healthcare",
      description: "ICU vitals displayed on glass barriers, AR guidance for surgical settings, and transparent patient information systems.",
      image: "https://images.unsplash.com/photo-1516549655619-6700d94a75e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bulletPoints: [
        "Critical patient data visible without blocking patient view",
        "Surgical guidance overlays on transparent screens",
        "Patient information on room dividers/windows",
        "Reduced visual clutter in sensitive environments"
      ]
    },
    {
      id: 'smart-homes',
      title: "🏠 Smart Homes",
      description: "Mirror displays, ambient glass dashboards, and window-integrated controls for smart home devices and information.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bulletPoints: [
        "Smart mirror displays for morning information",
        "Window weather and home status updates",
        "Glass surface controls for smart appliances",
        "Ambient information that appears only when needed"
      ]
    }
  ];

  const features = [
    {
      title: "True Transparency",
      description: "Displays visuals only when needed without blocking the view, creating a seamless experience between digital and physical.",
      icon: <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    },
    {
      title: "Modular Design",
      description: "Can be embedded into windows, glass panels, helmets, or dashboards for versatile applications across industries.",
      icon: <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
    },
    {
      title: "Energy Efficient",
      description: "Designed for low power consumption in real-time applications, making it sustainable for everyday use.",
      icon: <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    {
      title: "Multi-Industry Application",
      description: "From automotive HUDs to smart glass signage, our technology adapts to diverse industry needs.",
      icon: <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    },
    {
      title: "AR-Ready",
      description: "Perfect for integration with augmented reality overlays, enhancing real-world experiences without extra hardware.",
      icon: <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    }
  ];

  return (
    <div className="crystalview-page overflow-hidden">
      {/* Hero Section with animated gradient background */}
      <section className="hero min-h-screen relative overflow-hidden" id="hero">
        {/* Dark overlay first */}
        <div className="absolute inset-0 bg-gray-900 opacity-70 z-0"></div>
        
        {/* Then the gradient background with reduced opacity */}
        <div className="hero-animated-bg absolute inset-0 bg-gradient-to-br from-accent-neon via-cool-blue to-electric-violet opacity-50 z-1">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25"></div>
        </div>
        
        {/* Circuit-like pattern overlay */}
        <div className="absolute inset-0 z-1 bg-circuit-pattern opacity-10 animate-pulse-slow"></div>
        
        {/* Enhanced floating elements with more variety and better animation */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                background: `radial-gradient(circle, ${['#4361EE', '#8A7FF9', '#4CC9F0', '#7209B7', '#3A0CA3'][i % 5]} 0%, transparent 70%)`,
                width: `${Math.random() * 20 + 10}rem`,
                height: `${Math.random() * 20 + 10}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(15px)',
                opacity: 0.2 + Math.random() * 0.3,
                animationDuration: `${Math.random() * 15 + 20}s`,
                animationDelay: `${Math.random() * 5}s`,
                mixBlendMode: 'screen',
              }}
            ></div>
          ))}
        </div>
        
        {/* Digital grid scan effect */}
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
          <div className="h-full w-full opacity-10 animate-tech-scan">
            <div className="h-10 w-full bg-gradient-to-b from-transparent via-white to-transparent blur-sm"></div>
          </div>
        </div>
        
        <div className="hero-content text-center text-white relative z-10">
          <motion.div 
            className="max-w-3xl px-4 py-16 backdrop-blur-sm bg-gray-800/50 border border-gray-700 rounded-box shadow-2xl relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)" }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-box animate-border-glow"></div>
            
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 animate-shimmer"></div>
            
            <div className="relative z-2">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 font-orbitron leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                CrystalView: The Future of Display is Transparent
              </motion.h1>
              
              <motion.p 
                className="text-xl max-w-3xl mx-auto mb-10 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="animate-glow-pulse inline-block">
                  Revolutionizing visual interaction through intelligent transparent display technology for smart cities, vehicles, homes, and more.
                </span>
              </motion.p>
              
              <motion.div 
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a 
                  href="#about" 
                  className="btn btn-lg bg-gray-900/70 border-2 border-gray-600 text-gray-100 hover:bg-gray-700 hover:border-primary transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Explore CrystalView</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <motion.svg 
                    className="w-5 h-5 ml-2 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex justify-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.span 
                  className="animate-bounce cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CrystalView Section */}
      <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background animations for the about section */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-gradient-to-tr from-electric-violet/10 to-cool-blue/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="card bg-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-600 relative">
            {/* Subtle shimmer effect on the card */}
            <div className="absolute inset-0 animate-shimmer opacity-30"></div>
            
            <div className="card-body p-8 md:p-12 relative">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-center text-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <span className="text-primary animate-glow-pulse inline-block">🔍</span> About CrystalView
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div 
                  className="order-2 md:order-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="prose prose-lg max-w-none">
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      CrystalView is a next-generation transparent display technology that transforms glass surfaces into interactive, high-resolution screens—bridging the physical and digital worlds.
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Whether it's a smart car windshield, a storefront info panel, or an augmented learning window, CrystalView delivers clarity, context, and communication with zero visual clutter.
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="mt-8 flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {["Transparent", "Interactive", "Contextual", "Innovative", "Futuristic"].map((badge, idx) => (
                      <motion.span 
                        key={badge}
                        className="badge badge-lg badge-primary" 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="order-1 md:order-2 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <motion.div 
                    className="aspect-video rounded-box overflow-hidden bg-gradient-to-br from-primary-focus to-secondary-focus shadow-lg relative"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1624969862644-791f3dc98927?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Transparent Display Concept" 
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="glass-card p-5 rounded-box backdrop-blur-md bg-white/30 max-w-xs"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        <h3 className="text-white font-bold text-xl mb-2">
                          Smart. Seamless. See-Through.
                        </h3>
                        <p className="text-white">
                          Experience information without obstruction.
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Scan line animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="w-full h-10 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-tech-scan"></div>
                    </div>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 font-orbitron text-center text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary">🚀</span> Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="card bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={getDelayedAnimation(index)}
              >
                <div className="card-body p-6">
                  <div className="card-actions justify-end">
                    <div className="badge badge-accent badge-outline">Advanced</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="card-title text-xl font-bold text-gray-200">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-ghost btn-circle">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn btn-outline btn-accent">Explore All Features</button>
          </div>
        </div>
      </section>

      {/* Use Cases Section with Tabs */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 font-orbitron text-center text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-primary">💼</span> Real-World Use Cases
          </motion.h2>
          
          <motion.div 
            className="card bg-gray-700 shadow-xl overflow-hidden border border-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="card-body p-0">
              <div className="tabs tabs-boxed bg-gray-800 rounded-t-box justify-center">
                {applications.map((app) => (
                  <a
                    key={app.id}
                    className={`tab ${activeTab === app.id ? 'tab-active bg-primary/30 text-white font-bold' : 'text-gray-100 hover:bg-gray-700 hover:text-white'}`}
                    onClick={() => setActiveTab(app.id)}
                  >
                    {app.title}
                  </a>
                ))}
              </div>
              
              <div className="p-6 md:p-10">
                <AnimatePresence mode="wait">
                  {applications.map((app) => 
                    activeTab === app.id && (
                      <motion.div
                        key={app.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={fadeIn}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                      >
                        <div className="relative h-80 md:h-96 rounded-box overflow-hidden shadow-lg">
                          <img 
                            src={app.image} 
                            alt={app.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                            <div className="p-6">
                              <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                              <p className="text-white/80">{app.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="prose max-w-none">
                            <h3 className="text-2xl font-bold mb-6 text-gray-200">Key Applications</h3>
                            <ul className="space-y-4">
                              {app.bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="badge badge-primary mr-3 mt-1">✓</span>
                                  <span className="text-lg text-gray-300">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-8">
                            <button className="btn btn-primary">
                              <span>Learn More</span>
                              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Behind the Innovation */}
      <section id="vision" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="card bg-gray-700 shadow-xl border border-gray-600">
            <div className="card-body p-10 md:p-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-12 font-orbitron text-center text-gray-200"
              >
                <span className="text-primary">💡</span> Vision Behind the Innovation
              </h2>
              
              <div className="flex flex-col items-center">
                <div 
                  className="max-w-3xl text-center mb-10"
                >
                  <div className="chat chat-start mb-4">
                    <div className="chat-bubble chat-bubble-primary font-medium text-lg">
                      "CrystalView was born from a simple question:
                    </div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-accent font-bold text-xl italic">
                      Why should screens obstruct our view of the world?"
                    </div>
                  </div>
                </div>
                
                <p 
                  className="text-xl text-center max-w-3xl text-gray-300 leading-relaxed"
                >
                  We envisioned a future where digital content flows naturally into physical environments—seamlessly, contextually, and beautifully.
                </p>
                
                <div 
                  className="divider max-w-md mx-auto my-10"
                >
                  <div className="badge badge-lg">Our Approach</div>
                </div>
                
                <div 
                  className="stats stats-vertical lg:stats-horizontal shadow-lg bg-gray-800"
                >
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="stat-title text-gray-400">Clear Vision</div>
                    <div className="stat-value text-primary">100%</div>
                    <div className="stat-desc text-gray-400">Validated problem & solution</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                      </svg>
                    </div>
                    <div className="stat-title text-gray-400">Real-World Cases</div>
                    <div className="stat-value text-secondary">5+</div>
                    <div className="stat-desc text-gray-400">Industries targeted</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-figure text-accent">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <div className="stat-title text-gray-400">Scalable Model</div>
                    <div className="stat-value text-accent">∞</div>
                    <div className="stat-desc text-gray-400">Endless applications</div>
                  </div>
                </div>
                
                <div 
                  className="alert alert-info shadow-lg mt-10 max-w-2xl"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>We're open to collaboration, mentorship, and support in bringing CrystalView to reality.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-16 font-orbitron text-center text-gray-200"
          >
            <span className="text-primary">🌐</span> What We Do
          </h2>
          
          <div className="card bg-gray-800 shadow-xl mb-16 border border-gray-700">
            <div className="card-body p-6 md:p-10">
              <p 
                className="text-xl md:text-2xl text-center mb-10 max-w-4xl mx-auto leading-relaxed text-gray-300"
              >
                CrystalView is a next-generation transparent display technology designed to seamlessly blend digital content into real-world environments. From smart homes to vehicles, retail stores to smart cities — our see-through screens bring information to life without blocking your view.
              </p>
              
              <div 
                className="flex justify-center"
              >
                <div className="badge badge-lg badge-primary mr-2">Smart.</div>
                <div className="badge badge-lg badge-secondary mr-2">Seamless.</div>
                <div className="badge badge-lg badge-accent">See-Through.</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Display Only When Needed",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
                description: "Information appears when relevant and fades when not in use, maintaining transparency.",
                color: "primary"
              },
              {
                title: "Integrate with IoT & AR",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>,
                description: "Connect with smart devices and augmented reality for contextual information delivery.",
                color: "secondary"
              },
              {
                title: "Modular Installation",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>,
                description: "Fit into glass surfaces, mirrors, helmets, and other transparent materials.",
                color: "accent"
              },
              {
                title: "Cost-Optimized for India",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
                description: "Designed with local materials and manufacturing in mind for affordability.",
                color: "info"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="card bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-600"
              >
                <div className="card-body p-6 items-center text-center">
                  <div className={`text-${item.color} mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="card-title text-lg font-bold text-gray-200">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CrystalView Matters */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200">
              Why CrystalView <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Even without a prototype, CrystalView stands out through:
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              "A clear vision and validated problem",
              "Real-world scenarios backed by user research",
              "Scalable business models and future tech readiness"
            ].map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-6"
                initial="hidden"
                animate="visible"
                variants={getDelayedAnimation(index)}
              >
                <div className="bg-accent-neon rounded-full p-1 text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg text-gray-300">{point}</p>
              </motion.div>
            ))}

            <motion.p
              className="text-center text-lg text-gray-300 mt-10"
            >
              We're open to collaborations, mentorship, and venture support to bring this to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-accent-neon to-cool-blue p-12 rounded-xl shadow-xl max-w-4xl mx-auto text-white border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-4 font-orbitron">Ready to Transform Visual Experiences?</h2>
            <p className="text-lg mb-8">
              Join us in revolutionizing how the world interacts with digital content through our transparent display technology.
            </p>
            <a href="mailto:info@orivox.com" className="btn btn-lg bg-white text-accent-neon hover:bg-cool-blue/20">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Original Component */}
      <TransparentDisplay />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
      
      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="#hero" className="btn btn-circle btn-ghost bg-gray-700 border border-gray-600 text-gray-200 shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
      </div>
      
      {/* CSS for animations */}
      <style>
        {`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(2deg);
          }
          66% {
            transform: translateY(10px) translateX(-15px) rotate(-2deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.1), 0 0 30px rgba(99, 102, 241, 0.1), inset 0 0 15px rgba(99, 102, 241, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.2), inset 0 0 30px rgba(99, 102, 241, 0.4);
          }
        }
        
        .animate-border-glow {
          animation: border-glow 5s infinite;
        }
        
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .hero-animated-bg {
          animation: gradientShift 15s ease infinite;
          background-size: 400% 400%;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        @keyframes tech-scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .animate-tech-scan {
          animation: tech-scan 3s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TransparentDisplay from '../components/TransparentDisplay';

const TransparentDisplayPage = () => {
  const applications = [
    {
      title: "Smart Cities",
      description: "Transparent traffic displays, public glass interfaces for information and wayfinding.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Automotive",
      description: "Windshield-based HUDs, rear-glass notifications, and passenger information displays.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Retail",
      description: "Transparent product advertisements on shopfronts that engage customers without obstructing store views.",
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Education",
      description: "Interactive learning on classroom windows, creating dynamic educational spaces.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Healthcare",
      description: "Transparent patient monitoring displays that provide critical information without disrupting the environment.",
      image: "https://images.unsplash.com/photo-1516549655619-6700d94a75e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Defense",
      description: "AR-based visor information systems for enhanced situational awareness and tactical information.",
      image: "https://images.unsplash.com/photo-1542323228-002ac256e7b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const features = [
    {
      title: "True Transparency",
      description: "Displays visuals only when needed without blocking the view, creating a seamless experience.",
      icon: <svg className="w-6 h-6 text-accent-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    },
    {
      title: "Modular Design",
      description: "Can be embedded into windows, glass panels, helmets, or dashboards for versatile applications.",
      icon: <svg className="w-6 h-6 text-accent-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
    },
    {
      title: "Energy Efficient",
      description: "Designed for low power consumption in real-time applications, making it sustainable for everyday use.",
      icon: <svg className="w-6 h-6 text-accent-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    {
      title: "Multi-Industry Application",
      description: "From automotive HUDs to smart glass signage, our technology adapts to diverse industry needs.",
      icon: <svg className="w-6 h-6 text-accent-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    },
    {
      title: "AR-Ready",
      description: "Perfect for integration with augmented reality overlays, enhancing real-world experiences.",
      icon: <svg className="w-6 h-6 text-accent-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-accent-neon to-cool-blue py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CrystalView: The Future of Display is Transparent
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Revolutionizing visual interaction through intelligent transparent display technology for smart cities, vehicles, homes, and more.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="#use-cases" className="btn btn-lg bg-white text-accent-neon hover:bg-cool-blue/20 hover:text-white">
              Discover Use Cases
            </Link>
            <button className="btn btn-lg bg-electric-violet text-white hover:bg-electric-violet/80">
              Pitch Deck
            </button>
            <a href="mailto:info@orivox.com" className="btn btn-lg btn-outline text-white hover:bg-white hover:text-accent-neon">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About CrystalView */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-center font-space-grotesk"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About CrystalView
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                CrystalView is a next-generation transparent display technology that transforms glass surfaces into interactive, high-resolution screens—bridging the physical and digital worlds.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it's a smart car windshield, a storefront info panel, or an augmented learning window, CrystalView delivers clarity, context, and communication with zero visual clutter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-white to-cool-blue/10" id="features">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Key <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-cool-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-space-grotesk">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20" id="use-cases">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Real-World <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforming industries with revolutionary display solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                className="card bg-white shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <figure className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-neon/50 to-cool-blue/50 z-10"></div>
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-2xl font-bold text-white font-space-grotesk">{app.title}</h3>
                  </div>
                </figure>
                <div className="card-body">
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-b from-cool-blue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
                Vision Behind the <span className="gradient-text">Innovation</span>
              </h2>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg mb-6 text-center italic">
                "CrystalView was born from a simple question: Why should screens obstruct our view of the world?"
              </p>
              <p className="text-gray-600 text-lg text-center">
                We envisioned a future where digital content flows naturally into physical environments—seamlessly, contextually, and beautifully.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why CrystalView Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Why CrystalView <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Even without a prototype, CrystalView stands out through:
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              "A clear vision and validated problem",
              "Real-world scenarios backed by user research",
              "Scalable business models and future tech readiness"
            ].map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-accent-neon rounded-full p-1 text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </motion.div>
            ))}

            <motion.p
              className="text-center text-lg text-gray-700 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're open to collaborations, mentorship, and venture support to bring this to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-accent-neon to-cool-blue p-12 rounded-xl shadow-xl max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-orbitron">Ready to Transform Visual Experiences?</h2>
            <p className="text-lg mb-8">
              Join us in revolutionizing how the world interacts with digital content through our transparent display technology.
            </p>
            <a href="mailto:info@orivox.com" className="btn btn-lg bg-white text-accent-neon hover:bg-cool-blue/20">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Original Component */}
      <TransparentDisplay />
    </div>
  );
};

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default TransparentDisplayPage; 