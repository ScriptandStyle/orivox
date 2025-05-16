<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('ventures');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reset animation when tab changes
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

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
      year: '2020',
      title: 'Founding Vision',
      description: 'Orivox was established with a mission to bridge imagination and reality.'
    },
    {
      year: '2021',
      title: 'CrystalView Prototype',
      description: 'Developed our first transparent display proof of concept.'
    },
    {
      year: '2022',
      title: 'Script&Style Launch',
      description: 'Launched our student-centric freelancing platform.'
    },
    {
      year: '2023',
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
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50">
      <Hero />
      
      {/* Tabs Section */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="tabs tabs-boxed flex justify-center mb-8 bg-white/70 p-1 backdrop-blur-sm max-w-xl mx-auto rounded-lg shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'ventures' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
              onClick={() => setActiveTab('ventures')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Ventures
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'timeline' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
              onClick={() => setActiveTab('timeline')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Timeline
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'testimonials' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
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
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white flex-grow w-full">
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
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">Core Solutions</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Our <span className="text-indigo-800 relative inline-block">
                      Ventures
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
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
                      className="card glass backdrop-blur-sm shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col bg-white/70"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
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
                          className="card-title text-2xl font-bold font-space-grotesk text-gray-800"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="divider my-1"></div>
                        <motion.p 
                          className="text-gray-700 mb-6 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="card-actions justify-end mt-auto">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link to={project.link} className="btn btn-primary bg-indigo-800 hover:bg-indigo-900 border-none text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Explore
                            </Link>
                          </motion.div>
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
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">Our Journey</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Growth <span className="text-indigo-800 relative inline-block">
                      Timeline
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    The evolution of Orivox from inception to the present day, marking our key milestones.
                  </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {milestones.map((milestone, index) => (
                      <motion.li
                        key={milestone.year}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.3 + (index * 0.15),
                          type: "spring", 
                          stiffness: 100 
                        }}
                      >
                        <motion.div 
                          className="timeline-middle"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 + (index * 0.15) }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-indigo-800">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <div className={index % 2 === 0 ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"}>
                          <motion.time 
                            className="font-mono text-lg font-bold text-indigo-800"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.15) }}
                          >
                            {milestone.year}
                          </motion.time>
                          <motion.div 
                            className="text-lg font-bold font-space-grotesk text-gray-800"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + (index * 0.15) }}
                          >
                            {milestone.title}
                          </motion.div>
                          <motion.p 
                            className="text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 + (index * 0.15) }}
                          >
                            {milestone.description}
                          </motion.p>
                        </div>
                        <motion.hr 
                          className={index % 2 === 0 ? "bg-indigo-800" : "bg-blue-800"}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.4 + (index * 0.15) }}
                        />
                      </motion.li>
                    ))}
                  </ul>
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
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">What People Say</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Client <span className="text-indigo-800 relative inline-block">
                      Testimonials
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    Hear what our partners and users have to say about Orivox's solutions.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="card bg-white shadow-lg border border-gray-200 h-full"
                      variants={itemVariants}
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                      <div className="card-body flex flex-col">
                        <motion.div 
                          className="chat chat-start flex-grow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.3 + (index * 0.2) 
                          }}
                        >
                          <motion.div 
                            className="chat-bubble chat-bubble-primary bg-indigo-800 text-white"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.4 + (index * 0.2),
                              type: "spring" 
                            }}
                          >
                            "{testimonial.quote}"
                          </motion.div>
                        </motion.div>
                        <motion.div 
                          className="flex justify-end mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + (index * 0.2) 
                          }}
                        >
                          <div className="text-right">
                            <p className="font-bold text-lg text-gray-800">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-800 text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">Ready to Shape the Future Together?</h2>
            <p className="text-xl mb-8">
              Whether you're interested in our display technology, student freelancing platform, or innovation labs — we're ready to collaborate.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/about" className="btn btn-lg glass text-white border-white hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Learn More About Orivox
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Partners Logos Carousel */}
      <section className="py-10 bg-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Trusted by Innovative Organizations</h3>
          </div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="carousel carousel-center p-4 space-x-4 bg-white rounded-box max-w-4xl w-full shadow-sm">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div 
                  key={item} 
                  className="carousel-item"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-center w-40 h-20 bg-gray-100 rounded-lg">
                    <span className="text-gray-500 font-semibold">Partner {item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('ventures');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reset animation when tab changes
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

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
      year: '2020',
      title: 'Founding Vision',
      description: 'Orivox was established with a mission to bridge imagination and reality.'
    },
    {
      year: '2021',
      title: 'CrystalView Prototype',
      description: 'Developed our first transparent display proof of concept.'
    },
    {
      year: '2022',
      title: 'Script&Style Launch',
      description: 'Launched our student-centric freelancing platform.'
    },
    {
      year: '2023',
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
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50">
      <Hero />
      
      {/* Tabs Section */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="tabs tabs-boxed flex justify-center mb-8 bg-white/70 p-1 backdrop-blur-sm max-w-xl mx-auto rounded-lg shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'ventures' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
              onClick={() => setActiveTab('ventures')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Ventures
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'timeline' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
              onClick={() => setActiveTab('timeline')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Timeline
            </motion.button>
            <motion.button 
              className={`tab tab-lg flex-1 transition-all ${activeTab === 'testimonials' ? 'tab-active bg-indigo-800 text-white' : 'hover:bg-indigo-100 text-gray-800'}`}
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
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white flex-grow w-full">
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
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">Core Solutions</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Our <span className="text-indigo-800 relative inline-block">
                      Ventures
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
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
                      className="card glass backdrop-blur-sm shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col bg-white/70"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
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
                          className="card-title text-2xl font-bold font-space-grotesk text-gray-800"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="divider my-1"></div>
                        <motion.p 
                          className="text-gray-700 mb-6 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="card-actions justify-end mt-auto">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link to={project.link} className="btn btn-primary bg-indigo-800 hover:bg-indigo-900 border-none text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Explore
                            </Link>
                          </motion.div>
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
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">Our Journey</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Growth <span className="text-indigo-800 relative inline-block">
                      Timeline
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    The evolution of Orivox from inception to the present day, marking our key milestones.
                  </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {milestones.map((milestone, index) => (
                      <motion.li
                        key={milestone.year}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.3 + (index * 0.15),
                          type: "spring", 
                          stiffness: 100 
                        }}
                      >
                        <motion.div 
                          className="timeline-middle"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 + (index * 0.15) }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-indigo-800">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <div className={index % 2 === 0 ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"}>
                          <motion.time 
                            className="font-mono text-lg font-bold text-indigo-800"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.15) }}
                          >
                            {milestone.year}
                          </motion.time>
                          <motion.div 
                            className="text-lg font-bold font-space-grotesk text-gray-800"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + (index * 0.15) }}
                          >
                            {milestone.title}
                          </motion.div>
                          <motion.p 
                            className="text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 + (index * 0.15) }}
                          >
                            {milestone.description}
                          </motion.p>
                        </div>
                        <motion.hr 
                          className={index % 2 === 0 ? "bg-indigo-800" : "bg-blue-800"}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.4 + (index * 0.15) }}
                        />
                      </motion.li>
                    ))}
                  </ul>
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
              >
                <motion.div
                  className="text-center mb-12"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={badgeVariants}>
                    <div className="badge badge-lg badge-outline badge-primary mb-4 border-indigo-800 text-indigo-800">What People Say</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-800"
                    variants={headingVariants}
                  >
                    Client <span className="text-indigo-800 relative inline-block">
                      Testimonials
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-indigo-800"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-700 max-w-2xl mx-auto"
                    variants={itemVariants}
                  >
                    Hear what our partners and users have to say about Orivox's solutions.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="card bg-white shadow-lg border border-gray-200 h-full"
                      variants={itemVariants}
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                      <div className="card-body flex flex-col">
                        <motion.div 
                          className="chat chat-start flex-grow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.3 + (index * 0.2) 
                          }}
                        >
                          <motion.div 
                            className="chat-bubble chat-bubble-primary bg-indigo-800 text-white"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: 0.4 + (index * 0.2),
                              type: "spring" 
                            }}
                          >
                            "{testimonial.quote}"
                          </motion.div>
                        </motion.div>
                        <motion.div 
                          className="flex justify-end mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + (index * 0.2) 
                          }}
                        >
                          <div className="text-right">
                            <p className="font-bold text-lg text-gray-800">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-800 text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">Ready to Shape the Future Together?</h2>
            <p className="text-xl mb-8">
              Whether you're interested in our display technology, student freelancing platform, or innovation labs — we're ready to collaborate.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/about" className="btn btn-lg glass text-white border-white hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Learn More About Orivox
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Partners Logos Carousel */}
      <section className="py-10 bg-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Trusted by Innovative Organizations</h3>
          </div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="carousel carousel-center p-4 space-x-4 bg-white rounded-box max-w-4xl w-full shadow-sm">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div 
                  key={item} 
                  className="carousel-item"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-center w-40 h-20 bg-gray-100 rounded-lg">
                    <span className="text-gray-500 font-semibold">Partner {item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default HomePage; 