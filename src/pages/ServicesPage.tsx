import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Player } from '@lottiefiles/react-lottie-player';
import FloatingContactButton from '../components/FloatingContactButton';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Services data with working Lottie animations
  const services = [
    {
      title: "Transparent Display Technology",
      subtitle: "CrystalView",
      description: "Next-generation transparent displays that integrate seamlessly into environments—from automotive HUDs to smart glass for retail and healthcare.",
      lottieUrl: "https://lottie.host/87c9c7c2-8c4a-4f7a-9c8d-2e5f6a7b8c9d/abcdef123456.json",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgGradient: "from-accent-neon to-cool-blue",
      link: "/transparent-display",
      delay: 0,
    },
    {
      title: "Student Freelancing Platform",
      subtitle: "Script & Style",
      description: "A dynamic freelancing ecosystem built exclusively for college students. Create personal websites, collaborate on real projects, and gain valuable industry experience.",
      lottieUrl: "https://lottie.host/a4f2c8d1-3b5e-4f7a-8c9d-1e2f3a4b5c6d/abcdef123456.json",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      bgGradient: "from-cool-blue to-electric-violet",
      link: "/scriptstyle",
      delay: 0.2,
    },
    {
      title: "Innovation Hub",
      subtitle: "Ideation Lab",
      description: "Our innovation hub focused on pioneering solutions in healthcare and space exploration, bringing together experts from diverse backgrounds.",
      lottieUrl: "https://lottie.host/b5g3d9e2-4c6f-5g8b-9d0e-2f3g4b5c6d7e/abcdef123456.json",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgGradient: "from-electric-violet to-indigo-800",
      link: "/ideation-lab",
      delay: 0.4,
    }
  ];

  // GSAP Hero animations and scroll effects
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);

    if (!isLoading && heroRef.current) {
      // Hero background parallax
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Parallax effect for floating particles
      gsap.utils.toArray('.floating-particle').forEach((particle: any, index) => {
        gsap.to(particle, {
          y: -100 * (index + 1),
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Service cards scroll reveal
      gsap.utils.toArray('.service-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            rotationX: 15
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      });

      // Text reveal animations
      gsap.utils.toArray('.reveal-text').forEach((text: any) => {
        gsap.fromTo(text,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Loading screen with fallback animation
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Fallback CSS animation if Lottie fails */}
          <motion.div
            className="w-20 h-20 border-4 border-accent-neon border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-white text-xl font-orbitron"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Services...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Hero Section with GSAP animations */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`,
          y: backgroundY
        }}
      >
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="floating-particle absolute top-1/4 left-1/4 w-2 h-2 bg-accent-neon rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="floating-particle absolute top-3/4 right-1/4 w-1 h-1 bg-electric-violet rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="floating-particle absolute top-1/2 left-3/4 w-3 h-3 bg-cool-blue rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="floating-particle absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-accent-neon to-electric-violet rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Animated Hero Icon */}
          <motion.div
            ref={lottieRef}
            className="mb-8 flex justify-center"
            style={{ scale: heroScale }}
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 border-4 border-accent-neon/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-4 border-2 border-electric-violet/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner content */}
              <div className="absolute inset-8 bg-gradient-to-br from-accent-neon/20 to-electric-violet/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-electric-violet to-cool-blue"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Our Services
          </motion.h1>

          <motion.p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Explore our multi-domain solutions across transparent display technology, student freelancing, and healthcare/space innovation.
          </motion.p>

          {/* Enhanced Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-accent-neon/50 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-accent-neon to-electric-violet rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <p className="text-white/60 text-sm mt-2 font-light">Scroll to explore</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-900 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16 reveal-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-electric-violet">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets innovative thinking
            </p>
          </motion.div>

          {/* Services Grid with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative service-card"
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: service.delay,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Link to={service.link} className="block h-full">
                  {/* Glassmorphism Card */}
                  <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:bg-white/10 transition-all duration-500">
                    {/* Neon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-neon/20 via-transparent to-electric-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-neon via-electric-violet to-cool-blue p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-full w-full bg-gray-900 rounded-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with fallback */}
                      <motion.div
                        className="mb-6 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300">
                          <motion.div
                            className="text-white"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {service.icon}
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Service Title */}
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-3 font-orbitron text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-neon group-hover:to-electric-violet transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Subtitle Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-neon/20 to-electric-violet/20 rounded-full border border-white/20 mb-4 w-fit">
                        <span className="text-sm font-medium text-white">{service.subtitle}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        className="flex items-center justify-between mt-auto"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white/80 font-medium">Explore Service</span>
                        <div className="w-10 h-10 bg-gradient-to-r from-accent-neon to-electric-violet rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-neon/50 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Enhanced with Framer Motion */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16 reveal-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron text-white">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-electric-violet">Orivox</span> Services
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our multi-domain approach creates unique synergies and opportunities across different technology sectors.
            </p>
          </motion.div>

          {/* Features Grid with Staggered Animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Integrated Innovation",
                description: "Our services complement each other, creating a holistic ecosystem of future-focused solutions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                title: "Cutting-Edge Technology",
                description: "We're constantly pushing boundaries in display technology, student empowerment, and scientific exploration.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                gradient: "from-accent-neon to-cool-blue"
              },
              {
                title: "Future-Focused Solutions",
                description: "Our services are designed with scalability and long-term impact in mind, anticipating tomorrow's challenges.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                gradient: "from-electric-violet to-purple-600"
              },
              {
                title: "Cross-Domain Expertise",
                description: "We bring diverse knowledge and skills together, creating unique perspectives and innovative approaches.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: "from-green-400 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:bg-white/10 transition-all duration-500">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="h-full w-full bg-gray-800 rounded-2xl"></div>
                  </div>

                  <div className="relative z-10 flex items-start space-x-4">
                    {/* Icon with Gradient Background */}
                    <motion.div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl font-bold mb-3 text-white font-orbitron"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Lottie and Advanced Animations */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-neon/10 via-transparent to-electric-violet/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-accent-neon/30 to-electric-violet/30 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main CTA Icon */}
            <motion.div
              className="mb-8 flex justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-accent-neon/20 to-electric-violet/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 240, 255, 0.3)",
                    "0 0 40px rgba(138, 43, 226, 0.5)",
                    "0 0 20px rgba(0, 240, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-electric-violet to-cool-blue"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Experience the Future?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how our innovative services can transform your ideas into reality.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-accent-neon to-electric-violet rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-accent-neon/50 transition-all duration-300 overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-violet to-accent-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10 mr-3">Learn More About Orivox</span>

                {/* Animated Arrow */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Enhanced CSS Styles */}
      <style>
        {`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .neon-glow {
          box-shadow:
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            0 0 20px currentColor;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00f0ff, #8A2BE2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #8A2BE2, #4169E1);
        }
        `}
      </style>
    </div>
  );
};

export default ServicesPage; 