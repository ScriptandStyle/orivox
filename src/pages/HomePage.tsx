import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, AnimatePresence } from "framer-motion";
import FloatingContactButton from "../components/FloatingContactButton";
import Hero from "../components/Hero";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('ventures');
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Helper function to render division lottie animations (currently unused but kept for future use)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const projects = [
    {
      title: 'Script & Style',
      description: 'A dynamic freelancing ecosystem built exclusively for college students. Create personal websites, collaborate on real projects, and gain valuable industry experience.',
      link: '/scriptstyle',
      bgColor: 'bg-gradient-to-br from-blue-800 to-indigo-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Ideation Lab',
      description: 'Our innovation hub focused on pioneering solutions in healthcare and space exploration, bringing together experts from diverse backgrounds.',
      link: '/ideation-lab',
      bgColor: 'bg-gradient-to-br from-indigo-800 to-teal-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Transparent Display',
      description: 'CrystalView technology brings next-gen transparent displays that integrate seamlessly into environments—from automotive HUDs to smart glass for retail and healthcare.',
      link: '/transparent-display',
      bgColor: 'bg-gradient-to-br from-teal-800 to-blue-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Founding Vision',
      description: 'Orivox was established with a mission to bridge imagination and reality.'
    },
    {
      year: '2024',
      title: 'CrystalView Ideations',
      description: 'Developing our first transparent display proof of concept.'
    },
    {
      year: '2024',
      title: 'Script&Style Launch',
      description: 'Launched our student-centric freelancing platform.'
    },
    {
      year: '2025',
      title: 'Ideation Lab Formation',
      description: 'Created our healthcare and space innovation hub.'
    }
  ];

  const testimonials = [
    {
      quote: "Orivox's transparent display technology is revolutionary. We're exploring implementations across our retail locations.",
      author: "Sarah Chen",
      role: "Innovation Director, RetailTech Solutions"
    },
    {
      quote: "The Script&Style platform gave me real-world experience while still in college. It transformed my career trajectory.",
      author: "Raj Patel",
      role: "UI/UX Designer & Former Student"
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
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Hero />
      
      {/* Tabs Section */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="tabs tabs-boxed flex justify-center mb-8 bg-gray-800/70 p-1 backdrop-blur-sm max-w-xl mx-auto rounded-lg shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'ventures' ? 'tab-active bg-indigo-700 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab('ventures')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Ventures
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'timeline' ? 'tab-active bg-indigo-700 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab('timeline')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Timeline
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'testimonials' ? 'tab-active bg-indigo-700 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab('testimonials')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Testimonials
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Tab Content Container - Keeping the same background for all tabs */}
      <section className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 flex-grow w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ventures Section */}
          <AnimatePresence mode="wait">
            {activeTab === 'ventures' && showContent && (
              <motion.div
                key="ventures"
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
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-400 text-indigo-400">Core Solutions</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200"
                    variants={headingVariants}
                  >
                    Our <span className="text-indigo-400 relative inline-block">
                      Ventures
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
                    Explore Orivox's innovative projects across multiple domains, each driving the future of technology and human experience.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="card glass backdrop-blur-sm shadow-xl overflow-hidden border border-gray-700 h-full flex flex-col bg-gray-800/70"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <figure className={`${project.bgColor} p-8 text-white flex justify-center items-center`}>
                        <motion.div 
                          className="w-16 h-16 flex items-center justify-center"
                          initial={{ rotate: -10, scale: 0.9 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        >
                          {project.icon}
                        </motion.div>
                      </figure>
                      <div className="card-body flex flex-col flex-grow">
                        <motion.h3 
                          className="card-title text-xl font-orbitron text-gray-200"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-400 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="card-actions justify-end mt-4">
                          <Link 
                            to={project.link} 
                            className="btn btn-sm bg-indigo-700 hover:bg-indigo-800 border-none text-white"
                          >
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
            
            {/* Timeline Section */}
            {activeTab === 'timeline' && showContent && (
              <motion.div
                key="timeline"
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
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-400 text-indigo-400">Our Journey</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200"
                    variants={headingVariants}
                  >
                    Innovation <span className="text-indigo-400 relative inline-block">
                      Timeline
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
                    The evolution of Orivox through key milestones that have shaped our journey.
                  </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-700 to-purple-700"></div>
                    
                    {/* Timeline Items */}
                    {milestones.map((milestone, index) => (
                      <motion.div 
                        key={milestone.year}
                        className={`flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {/* Year */}
                        <div className="w-1/2 pr-8 text-right">
                          {index % 2 === 0 ? (
                            <div className="text-right">
                              <h3 className="text-2xl font-bold text-indigo-400">{milestone.year}</h3>
                              <h4 className="text-lg font-semibold text-gray-200">{milestone.title}</h4>
                              <p className="text-gray-400">{milestone.description}</p>
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center shadow-lg text-white font-bold">
                              {milestone.year}
                            </div>
                          )}
                        </div>
                        
                        {/* Point */}
                        <div className="relative h-8 w-8 rounded-full bg-indigo-600 border-4 border-gray-800 shadow-glow z-10"></div>
                        
                        {/* Content */}
                        <div className="w-1/2 pl-8">
                          {index % 2 === 1 ? (
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-400">{milestone.year}</h3>
                              <h4 className="text-lg font-semibold text-gray-200">{milestone.title}</h4>
                              <p className="text-gray-400">{milestone.description}</p>
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center shadow-lg text-white font-bold">
                              {milestone.year}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                    Hear from those who have experienced our innovations firsthand.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.author}
                      className="card bg-gray-800 shadow-xl border border-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      <div className="card-body">
                        <svg className="w-10 h-10 text-indigo-400 mb-3" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
                        </svg>
                        <p className="text-lg italic text-gray-300 mb-4">{testimonial.quote}</p>
                        <div className="mt-auto">
                          <h3 className="font-bold text-indigo-400">{testimonial.author}</h3>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section - Enhanced with glassmorphic design */}
      <section className="relative py-24 overflow-hidden w-full">
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-purple-600/30 animate-pulse"></div>

          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 cta-geometric-pattern"></div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[20%] top-[30%]"></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[35%] top-[50%]"></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[50%] top-[30%]"></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[65%] top-[70%]"></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[80%] top-[50%]"></div>
            <div className="absolute w-2 h-2 bg-white/20 rounded-full floating-particle left-[95%] top-[30%]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glassmorphic container */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-nunito text-white">
                  Ready to Shape the{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Future Together?
                  </span>
                </h2>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Whether you're interested in our display technology, student freelancing platform, or innovation labs — we're ready to collaborate and build tomorrow's solutions today.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to="/about"
                    className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="relative z-10">Discover Orivox</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Start Conversation</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section - Enhanced with modern design */}
      <section className="relative py-16 overflow-hidden w-full">
        {/* Background with subtle gradient and pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-violet-50/30"></div>

          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#4f46e5_1px,_transparent_0)] bg-[length:40px_40px]"></div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-violet-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-blue-700">Partnerships</span>
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-800 font-nunito mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Innovative Organizations
              </span>
            </motion.h3>

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join the growing community of forward-thinking companies and institutions that choose Orivox for cutting-edge solutions.
            </motion.p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full">
              {[
                { name: 'TechCorp', category: 'Technology' },
                { name: 'EduInnovate', category: 'Education' },
                { name: 'HealthTech Pro', category: 'Healthcare' },
                { name: 'SpaceVentures', category: 'Aerospace' },
                { name: 'RetailNext', category: 'Retail' },
                { name: 'FinanceFlow', category: 'Finance' },
                { name: 'GreenEnergy', category: 'Sustainability' },
                { name: 'MediaStream', category: 'Media' },
                { name: 'LogiChain', category: 'Logistics' },
                { name: 'CloudScale', category: 'Cloud Services' }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Glassmorphic partner card */}
                  <div className="relative backdrop-blur-sm bg-white/70 rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/80">
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                    {/* Partner logo placeholder */}
                    <div className="flex items-center justify-center h-16 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {partner.name.charAt(0)}
                      </div>
                    </div>

                    {/* Partner info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {partner.category}
                      </p>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action for partnerships */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-600 mb-6">
              Interested in partnering with us?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-full hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-4-3v9a2 2 0 002 2h9a2 2 0 002-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2z" />
                </svg>
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default HomePage;