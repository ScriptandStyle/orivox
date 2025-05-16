import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingContactButton from '../components/FloatingContactButton';
import { useInView } from 'react-intersection-observer';

const ImmersiLearnPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  const hologramAnimation = {
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

  const benefits = [
    "Increases student engagement and joy in learning",
    "Improves concept retention with immersive methods",
    "Supports visual, auditory, and kinesthetic learners",
    "Adapts to personal pace and preferences",
    "Simplifies abstract and complex concepts",
    "Encourages self-motivation and exploration"
  ];

  const techStack = [
    { name: "AR Tools", tech: "Vuforia, ARKit (iOS), ARCore (Android)" },
    { name: "VR Platforms", tech: "Unity 3D, Unreal Engine" },
    { name: "AI & NLP", tech: "OpenAI API, Dialogflow, Google Text-to-Speech" },
    { name: "Backend", tech: "Node.js / Python Flask / Django" },
    { name: "Frontend", tech: "React / Flutter" },
    { name: "Database", tech: "Firebase / MongoDB" },
    { name: "UI/UX Tools", tech: "Figma, Adobe XD" },
    { name: "3D Modeling", tech: "Blender, Mixamo" },
    { name: "Hardware", tech: "AR-capable smartphones, Oculus Quest VR headsets" }
  ];

  const targetAudience = [
    "School & college students struggling with boring content",
    "Visual learners and neurodiverse individuals",
    "Educational institutions seeking smart EdTech",
    "Parents looking for innovative study tools for their children",
    "Curious minds who want to learn differently"
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="tech-grid"
          style={{ y }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        
        {/* Enhanced Floating Particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`,
                boxShadow: `0 0 ${Math.random() * 15 + 5}px rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.3})`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.2],
                scale: [1, Math.random() * 0.5 + 1, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Enhanced Glowing Orbs */}
        <motion.div 
          className="absolute -left-40 top-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-40 bottom-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                <motion.h1 
                  className="text-6xl md:text-7xl font-bold mb-8 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600"
                  variants={fadeIn}
                >
                  ImmersiLearn
                </motion.h1>
                <motion.p 
                  className="text-3xl font-light mb-8 text-purple-200"
                  variants={fadeIn}
                >
                  Personalized AR/VR Learning Assistant
                </motion.p>
                <motion.p 
                  className="text-xl text-gray-300 mb-12 max-w-xl mx-auto lg:mx-0"
                  variants={fadeIn}
                >
                  Revolutionize Learning. Make It Personal. Make It Fun.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-6 justify-center lg:justify-start"
                  variants={fadeIn}
                >
                  <motion.button 
                    className="btn btn-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try ImmersiLearn
                  </motion.button>
                  <motion.button 
                    className="btn btn-lg glass text-purple-300 border-purple-400/30 px-8 hover:text-white hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    For Educators
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <motion.div 
                className="ar-vr-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Enhanced Hologram Visualization */}
                <div className="hologram-container">
                  <div className="hologram-rings">
                    <motion.div 
                      className="ring ring-1" 
                      animate={{
                        rotateX: 360,
                        rotateY: 180,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="ring ring-2"
                      animate={{
                        rotateY: 360,
                        rotateX: 180,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="ring ring-3"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  <motion.div 
                    className="hologram-core"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                        '0 0 40px rgba(147, 51, 234, 0.8)',
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Traditional learning can feel boring, overwhelming, and disconnected from students' real interests. ImmersiLearn changes that by using Personalized AR/VR Technology to transform how students interact with educational content.
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether you're a fan of Marvel superheroes, love cricket, or enjoy space exploration, ImmersiLearn tailors your lessons to your passions—making learning interactive, fun, and unforgettable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is ImmersiLearn Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              What is <span className="text-cyan-400">ImmersiLearn</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              ImmersiLearn is a smart learning assistant powered by AR/VR and AI that dynamically adapts to your personality and interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Personalized Themes",
                description: "Choose your themes: Marvel, sports, anime, nature, and more.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>,
                color: "from-purple-600 to-indigo-600"
              },
              {
                title: "Interactive 3D",
                description: "Learn through interactive 3D simulations, AI-driven tutoring, and gamified experiences.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg>,
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Avatar Guidance",
                description: "Get explanations through avatars or environments that you love.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>,
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "Better Retention",
                description: "Retain better, enjoy more, and grow smarter.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
                color: "from-pink-600 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:shadow-xl transition-all duration-300 hover:border-indigo-400/40 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-100 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative">
        <motion.div 
          className="absolute -left-40 top-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              How It <span className="text-pink-400">Works</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full hidden md:block"></div>
              
              {[
                {
                  title: "Personalize Learning Themes",
                  description: "Tell ImmersiLearn what excites you—superheroes, cricket, space, racing—anything!",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>,
                  color: "from-purple-600 to-indigo-600"
                },
                {
                  title: "AI Adapts Your Content",
                  description: "Our intelligent assistant modifies the teaching style, language, and visuals based on your preferences.",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
                  color: "from-indigo-600 to-blue-600"
                },
                {
                  title: "Enter AR/VR Learning Worlds",
                  description: "Learn chemistry inside a superhero lab. Solve math puzzles in a cricket stadium. Understand physics in a space station.",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>,
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Get Real-Time Feedback",
                  description: "The system monitors your pace and progress, giving instant tips, challenges, and encouragement.",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
                  color: "from-cyan-600 to-teal-600"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex flex-col md:flex-row gap-4 mb-16 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-last md:text-left md:pl-16'}`}>
                    <div className={`inline-block mb-4 p-4 rounded-full bg-gradient-to-r ${step.color} md:hidden`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Innovative Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              What Makes It <span className="text-blue-400">Innovative</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Real-Time Personalization with AI",
                description: "Advanced machine learning adapts to individual learning styles and interests in real-time.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
                color: "bg-gradient-to-br from-purple-500 to-indigo-600"
              },
              {
                title: "Interest-Based Simulations",
                description: "Lessons featuring popular culture themes that connect with students' personal interests.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
                color: "bg-gradient-to-br from-blue-500 to-indigo-600"
              },
              {
                title: "Gamified Learning with Avatars",
                description: "Role-based avatars that guide students through interactive educational challenges.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
                color: "bg-gradient-to-br from-cyan-500 to-blue-600"
              },
              {
                title: "Interactive AR/VR Content",
                description: "Dynamic 3D experiences instead of static lessons, creating immersive learning environments.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
                color: "bg-gradient-to-br from-pink-500 to-purple-600"
              },
              {
                title: "Cross-Platform Accessibility",
                description: "Available across mobile, tablet, or VR headsets for flexible learning experiences.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
                color: "bg-gradient-to-br from-purple-500 to-pink-600"
              },
              {
                title: "It's not just learning—it's living the lesson",
                description: "Experiential education that makes abstract concepts concrete through immersive experiences.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
                color: "bg-gradient-to-br from-indigo-500 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-indigo-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/20 hover:border-indigo-400/40 shadow-lg transition-all duration-300 hover:shadow-purple-900/20 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="p-6">
                  <div className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 relative">
        <motion.div 
          className="absolute -right-40 top-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Key <span className="text-purple-400">Benefits</span>
            </h2>
          </motion.div>

          <motion.div
            className="glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-cyan-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Tech Stack <span className="text-pink-400">Behind the Magic</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-indigo-900/30 backdrop-blur-sm p-5 rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-lg font-bold mb-2 text-blue-200">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Who Is It <span className="text-purple-400">For</span>?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 gap-4">
                {targetAudience.map((audience, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 rounded-lg hover:bg-indigo-800/30 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-indigo-400 mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-200 text-lg">{audience}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future-Ready Education Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Future-Ready <span className="text-blue-400">Education</span> Starts Here
            </h2>
          </motion.div>

          <motion.div
            className="glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ImmersiLearn isn't just a project—it's a movement toward a future where learning adapts to the learner, not the other way around.
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Imagine a classroom where your favorite characters teach you, where science happens in 3D, and math feels like a game. That's ImmersiLearn.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80"></div>
          <div className="tech-grid-enhanced"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 font-orbitron text-white">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-blue-200 mb-10">
              Are you an educator, developer, parent, or investor passionate about transforming education?
              Join us in making immersive, personalized learning the new normal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button 
                className="btn btn-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button 
                className="btn btn-lg glass text-purple-200 border-purple-400/30 px-8 hover:text-white hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Newsletter
              </motion.button>
            </div>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-300">Contact us: hello@immersilearn.com</p>
              <p className="text-gray-300">Follow us on: @ImmersiLearn</p>
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-12 border-t border-indigo-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-400">ImmersiLearn – Because Learning Should Feel Like Magic.</p>
              <p className="text-gray-400 mt-2">© 2025 ImmersiLearn. All rights reserved. Powered by creativity, curiosity, and cutting-edge technology.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CSS for better effects */}
      <style>{`
        .tech-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(75, 0, 130, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75, 0, 130, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
          animation: grid-pulse 15s infinite alternate ease-in-out;
        }
        
        @keyframes grid-pulse {
          0% {
            opacity: 0.3;
            background-size: 30px 30px;
          }
          50% {
            opacity: 0.5;
            background-size: 32px 32px;
          }
          100% {
            opacity: 0.3;
            background-size: 30px 30px;
          }
        }

        .hologram-container {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto;
        }

        .hologram-rings {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(147, 51, 234, 0.5);
          border-radius: 50%;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .ring-1 {
          border-color: rgba(147, 51, 234, 0.3);
          transform: rotateX(60deg);
        }

        .ring-2 {
          border-color: rgba(79, 70, 229, 0.3);
          transform: rotateY(60deg);
        }

        .ring-3 {
          border-color: rgba(236, 72, 153, 0.3);
          transform: rotateZ(60deg);
        }

        .hologram-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(79, 70, 229, 0.4) 100%);
          border-radius: 50%;
          filter: blur(5px);
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glass-card {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .tech-grid-enhanced {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(75, 0, 130, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75, 0, 130, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
          animation: grid-pulse 15s infinite alternate ease-in-out;
        }
        
        @keyframes grid-pulse {
          0% {
            opacity: 0.3;
            background-size: 30px 30px;
          }
          50% {
            opacity: 0.5;
            background-size: 32px 32px;
          }
          100% {
            opacity: 0.3;
            background-size: 30px 30px;
          }
        }
      `}</style>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default ImmersiLearnPage; 