import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import FloatingContactButton from '../components/FloatingContactButton';

const ImmersiLearnPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('ar-tools');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

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

  const keyFeatures = [
    {
      emoji: "🎭",
      title: "Personalized Themes",
      description: "Marvel, sports, anime, nature—whatever excites you.",
      color: "from-purple-600 to-indigo-600",
      hoverColor: "hover:from-purple-700 hover:to-indigo-700"
    },
    {
      emoji: "🧬",
      title: "Interactive 3D Simulations",
      description: "Visualize tough concepts like never before.",
      color: "from-blue-600 to-cyan-600",
      hoverColor: "hover:from-blue-700 hover:to-cyan-700"
    },
    {
      emoji: "🧑‍🏫",
      title: "Avatar-Based Guidance",
      description: "Favorite characters become your tutors.",
      color: "from-cyan-600 to-teal-600",
      hoverColor: "hover:from-cyan-700 hover:to-teal-700"
    },
    {
      emoji: "🕹️",
      title: "Gamified Learning",
      description: "Puzzles, challenges, points, levels.",
      color: "from-pink-600 to-rose-600",
      hoverColor: "hover:from-pink-700 hover:to-rose-700"
    },
    {
      emoji: "📱",
      title: "Cross-Platform",
      description: "Works on mobile, tablet, and VR headsets.",
      color: "from-indigo-600 to-purple-600",
      hoverColor: "hover:from-indigo-700 hover:to-purple-700"
    }
  ];

  const innovationFeatures = [
    {
      icon: "⚡",
      title: "Real-Time AI Adaptation",
      description: "Advanced machine learning adapts to individual learning styles instantly."
    },
    {
      icon: "🎬",
      title: "Pop-Culture Simulations", 
      description: "Learn through immersive worlds featuring your favorite themes."
    },
    {
      icon: "👤",
      title: "Role-Based Avatars",
      description: "Character guides that match your interests and learning style."
    },
    {
      icon: "🌐",
      title: "Immersive AR/VR Environments",
      description: "Step into 3D learning worlds that make abstract concepts tangible."
    },
    {
      icon: "🎯",
      title: "Support for All Learning Styles", 
      description: "Visual, auditory, kinesthetic - we adapt to how you learn best."
    },
    {
      icon: "📲",
      title: "Multi-Platform Accessibility",
      description: "Learn anywhere, anytime on any device with seamless sync."
    }
  ];

  const targetProfiles = [
    {
      emoji: "📚",
      title: "Students",
      description: "bored by traditional methods",
      color: "bg-purple-600/20"
    },
    {
      emoji: "🧠",
      title: "Visual/Neurodiverse Learners",
      description: "seeking engaging alternatives",
      color: "bg-blue-600/20"
    },
    {
      emoji: "🏫",
      title: "Schools & Universities",
      description: "embracing innovation",
      color: "bg-cyan-600/20"
    },
    {
      emoji: "👪",
      title: "Parents",
      description: "seeking innovative solutions",
      color: "bg-pink-600/20"
    },
    {
      emoji: "🌟",
      title: "Lifelong Learners",
      description: "and curious explorers",
      color: "bg-indigo-600/20"
    }
  ];

  const benefits = [
    { emoji: "🎉", text: "Boosts engagement and fun" },
    { emoji: "🧠", text: "Improves retention" },
    { emoji: "🔍", text: "Personalized and adaptive" },
    { emoji: "🎮", text: "Makes learning a game" },
    { emoji: "💬", text: "Supports all learning styles" },
    { emoji: "🚀", text: "Encourages curiosity and confidence" }
  ];

  const techStack: Record<string, { name: string; tech: string }[]> = {
    'ar-tools': [
      { name: "AR Development", tech: "Vuforia, ARKit, ARCore" },
      { name: "Motion Tracking", tech: "SLAM, Computer Vision" },
      { name: "Object Recognition", tech: "AI-powered image detection" }
    ],
    'vr-platforms': [
      { name: "VR Engines", tech: "Unity 3D, Unreal Engine" },
      { name: "VR SDKs", tech: "Oculus SDK, OpenXR" },
      { name: "Spatial Audio", tech: "3D immersive sound systems" }
    ],
    'ai-nlp': [
      { name: "AI Models", tech: "OpenAI API, Custom LLMs" },
      { name: "NLP Processing", tech: "Dialogflow, Google TTS" },
      { name: "Personalization", tech: "Machine learning algorithms" }
    ],
    'backend': [
      { name: "Server Tech", tech: "Node.js, Python Django" },
      { name: "APIs", tech: "REST, GraphQL, WebSockets" },
      { name: "Cloud Services", tech: "AWS, Google Cloud" }
    ],
    'frontend': [
      { name: "Web Apps", tech: "React, Next.js, TypeScript" },
      { name: "Mobile Apps", tech: "React Native, Flutter" },
      { name: "State Management", tech: "Redux, Zustand" }
    ],
    'database': [
      { name: "Primary DB", tech: "MongoDB, PostgreSQL" },
      { name: "Real-time", tech: "Firebase, Supabase" },
      { name: "Caching", tech: "Redis, Memcached" }
    ],
    '3d-design': [
      { name: "3D Modeling", tech: "Blender, Maya, 3ds Max" },
      { name: "Character Animation", tech: "Mixamo, Autodesk" },
      { name: "Asset Pipeline", tech: "FBX, glTF workflows" }
    ],
    'ui-ux': [
      { name: "Design Tools", tech: "Figma, Adobe XD" },
      { name: "Prototyping", tech: "Framer, Principle" },
      { name: "User Testing", tech: "UsabilityHub, Maze" }
    ],
    'hardware': [
      { name: "AR Devices", tech: "iOS/Android phones, HoloLens" },
      { name: "VR Headsets", tech: "Oculus Quest, PICO, Valve Index" },
      { name: "Accessories", tech: "Hand tracking, haptic feedback" }
    ]
  };

  const tabNames: Record<string, string> = {
    'ar-tools': 'AR Tools',
    'vr-platforms': 'VR Platforms', 
    'ai-nlp': 'AI & NLP',
    'backend': 'Backend',
    'frontend': 'Frontend',
    'database': 'Database',
    '3d-design': '3D Design',
    'ui-ux': 'UI/UX Tools',
    'hardware': 'Hardware'
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-hidden relative`}>
      
      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-purple-600/20 backdrop-blur-md border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </motion.button>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="tech-grid"
          style={{ y: y1 }}
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
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                background: isDarkMode 
                  ? `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`
                  : `rgba(${Math.random() * 155 + 50}, ${Math.random() * 155 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.3 + 0.1})`,
                boxShadow: isDarkMode 
                  ? `0 0 ${Math.random() * 15 + 5}px rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.2})`
                  : `0 0 ${Math.random() * 10 + 3}px rgba(${Math.random() * 155 + 50}, ${Math.random() * 155 + 50}, ${Math.random() * 200 + 55}, ${Math.random() * 0.2 + 0.1})`,
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
          className={`absolute -left-40 top-20 w-96 h-96 ${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-400/30'} rounded-full blur-3xl`}
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
          className={`absolute -right-40 bottom-20 w-96 h-96 ${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-400/30'} rounded-full blur-3xl`}
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
      
      {/* Hero Section - "Revolutionize Learning. Make It Personal. Make It Fun." */}
      <section className="relative py-32 pt-44 overflow-hidden">
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
                  className={`text-6xl md:text-7xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-500 to-pink-600' : 'from-indigo-600 via-purple-700 to-pink-700'}`}
                  variants={fadeIn}
                >
                  ImmersiLearn
                </motion.h1>
                <motion.p 
                  className={`text-2xl md:text-3xl font-light mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}
                  variants={fadeIn}
                >
                  Your Personalized AR/VR Learning Assistant
                </motion.p>
                <motion.p 
                  className={`text-xl md:text-2xl font-medium mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  variants={fadeIn}
                >
                  Revolutionize Learning. Make It Personal. Make It Fun.
                </motion.p>
                <motion.p 
                  className={`text-lg mb-12 max-w-xl mx-auto lg:mx-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  variants={fadeIn}
                >
                  Transform how students learn using interest-driven, avatar-guided, and gamified immersive content.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-6 justify-center lg:justify-start"
                  variants={fadeIn}
                >
                  <motion.button 
                    className="btn btn-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-4 rounded-full shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 transition-all duration-300 font-medium text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Demo
                  </motion.button>
                  <motion.button 
                    className={`btn btn-lg px-8 py-4 rounded-full border-2 font-medium text-lg transition-all duration-300 ${isDarkMode ? 'glass text-purple-300 border-purple-400/30 hover:text-white hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/20' : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50 hover:border-purple-400 shadow-lg'}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join the Movement
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
                {/* Enhanced VR/AR Visualization */}
                <div className="hologram-container">
                  <div className="hologram-rings">
                    <motion.div 
                      className="hologram-ring hologram-ring-1" 
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
                      className="hologram-ring hologram-ring-2"
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
                      className="hologram-ring hologram-ring-3"
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
                  {/* Floating Education Elements */}
                  <motion.div 
                    className="absolute -top-8 -left-8 text-4xl"
                    {...floatingAnimation}
                  >
                    🎓
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 text-3xl"
                    animate={{
                      y: [0, -15, 0],
                      transition: {
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 1
                      }
                    }}
                  >
                    🧪
                  </motion.div>
                  <motion.div 
                    className="absolute top-4 -right-12 text-3xl"
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 0.5
                      }
                    }}
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is ImmersiLearn Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-indigo-400' : 'from-purple-600 to-indigo-600'}`}>
              What Is ImmersiLearn?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A smart assistant powered by AR/VR + AI that dynamically adapts to each student's interest, built for fun, engagement, and better retention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className={`${isDarkMode ? 'glass-card bg-indigo-900/30' : 'bg-white shadow-xl'} backdrop-blur-md p-8 rounded-2xl border ${isDarkMode ? 'border-indigo-500/20' : 'border-purple-200'}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🤖</div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Smart Assistant</h3>
                </div>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Powered by AR/VR + AI technology
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎯</div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Dynamically Adapts</h3>
                </div>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  To each student's interests and learning style
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${isDarkMode ? 'glass-card bg-purple-900/30' : 'bg-white shadow-xl'} backdrop-blur-md p-8 rounded-2xl border ${isDarkMode ? 'border-purple-500/20' : 'border-purple-200'}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎮</div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Built for Fun</h3>
                </div>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Gamified, 3D-first, and avatar-supported
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎨</div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Interest-Driven</h3>
                </div>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tailors content to Marvel, sports, anime, space, etc.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section - "Learning That Feels Like Play" */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600'}`}>
              Learning That Feels Like <span className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>Play</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${isDarkMode ? 'bg-indigo-900/30 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-400/40' : 'bg-white shadow-lg border-gray-200 hover:border-purple-300'} rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.emoji}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>{feature.description}</p>
                <div className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - 4-step infographic */}
      <section className="py-20 relative">
        <motion.div 
          className={`absolute -left-40 top-20 w-80 h-80 ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-400/30'} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-blue-400' : 'from-indigo-600 to-blue-600'}`}>
              How It Works
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  emoji: "🎯",
                  title: "Pick What You Love",
                  description: "Cricket? Marvel? Space? Choose your vibe.",
                  color: "from-purple-600 to-indigo-600"
                },
                {
                  step: "02", 
                  emoji: "🤖",
                  title: "AI Customizes Content",
                  description: "Language, tone, and visuals adjust to you.",
                  color: "from-indigo-600 to-blue-600"
                },
                {
                  step: "03",
                  emoji: "🧪",
                  title: "Enter Learning Worlds",
                  description: "3D environments tailored to each subject.",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  step: "04",
                  emoji: "🧠",
                  title: "Get Real-Time Feedback",
                  description: "Progress tracking, tips, and motivation.",
                  color: "from-cyan-600 to-teal-600"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl mb-6 shadow-lg`}>
                    {step.step}
                  </div>
                  <div className="text-6xl mb-4">{step.emoji}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{step.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>{step.description}</p>
                  
                  {/* Connecting line for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Innovative Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'}`}>
              What Makes It <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Innovative</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {innovationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${isDarkMode ? 'bg-indigo-900/30 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-400/40' : 'bg-white shadow-lg border-gray-200 hover:border-purple-300'} rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with tabbed layout */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-purple-600'}`}>
              Tech Stack <span className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>Behind the Magic</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.entries(tabNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg`
                      : isDarkMode 
                        ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {techStack[activeTab].map((tech: { name: string; tech: string }, index: number) => (
                <motion.div
                  key={tech.name}
                  className={`${isDarkMode ? 'bg-indigo-900/30 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-400/40' : 'bg-white shadow-lg border-gray-200 hover:border-purple-300'} p-6 rounded-xl border transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-blue-200' : 'text-gray-800'}`}>{tech.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{tech.tech}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Is It For Section with profile cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'}`}>
              Who Is It <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>For</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {targetProfiles.map((profile, index) => (
              <motion.div
                key={profile.title}
                className={`${isDarkMode ? 'bg-indigo-900/30 backdrop-blur-sm border-indigo-500/20' : 'bg-white shadow-lg border-gray-200'} p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-xl group cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {profile.emoji}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{profile.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{profile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 relative">
        <motion.div 
          className={`absolute -right-40 top-20 w-80 h-80 ${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-400/30'} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600'}`}>
              Key <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Benefits</span>
            </h2>
          </motion.div>

          <motion.div
            className={`${isDarkMode ? 'glass-card bg-indigo-900/30' : 'bg-white shadow-xl'} backdrop-blur-md p-12 rounded-2xl border ${isDarkMode ? 'border-indigo-500/20' : 'border-purple-200'} max-w-5xl mx-auto`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.emoji}
                  </div>
                  <span className={`text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - "Future-Ready Education Starts Here" */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80' : 'bg-gradient-to-br from-indigo-100/80 via-purple-100/80 to-blue-100/80'}`}></div>
          <div className="tech-grid-enhanced"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'}`}>
              Future-Ready <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Education</span> Starts Here
            </h2>
            <motion.p 
              className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ImmersiLearn isn't just a product. It's a movement toward personalized, interest-driven education.
            </motion.p>
            <motion.p 
              className={`text-lg md:text-xl mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Imagine a classroom where your favorite characters teach you, where science happens in 3D, and math feels like a game. That's ImmersiLearn.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <motion.button 
                className="btn btn-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-10 py-4 rounded-full shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access
              </motion.button>
              <motion.button 
                className={`btn btn-lg px-10 py-4 rounded-full border-2 font-medium text-lg transition-all duration-300 ${isDarkMode ? 'glass text-purple-300 border-purple-400/30 hover:text-white hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/20' : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50 hover:border-purple-400 shadow-lg'}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch in Action
              </motion.button>
            </div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>Contact us: hello@immersilearn.com</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>Follow us on: @ImmersiLearn</p>
            </motion.div>
            
            <motion.div 
              className={`mt-12 pt-12 border-t ${isDarkMode ? 'border-indigo-500/20' : 'border-purple-200'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg font-medium`}>ImmersiLearn – Because Learning Should Feel Like Magic.</p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>© 2025 ImmersiLearn. All rights reserved. Powered by creativity, curiosity, and cutting-edge technology.</p>
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
            linear-gradient(${isDarkMode ? 'rgba(75, 0, 130, 0.1)' : 'rgba(75, 0, 130, 0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(75, 0, 130, 0.1)' : 'rgba(75, 0, 130, 0.05)'} 1px, transparent 1px);
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

        .hologram-ring {
          position: absolute;
          border: 2px solid ${isDarkMode ? 'rgba(147, 51, 234, 0.5)' : 'rgba(147, 51, 234, 0.7)'};
          border-radius: 50%;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .hologram-ring-1 {
          border-color: ${isDarkMode ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.5)'};
          transform: rotateX(60deg);
        }

        .hologram-ring-2 {
          border-color: ${isDarkMode ? 'rgba(79, 70, 229, 0.3)' : 'rgba(79, 70, 229, 0.5)'};
          transform: rotateY(60deg);
        }

        .hologram-ring-3 {
          border-color: ${isDarkMode ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.5)'};
          transform: rotateZ(60deg);
        }

        .hologram-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: ${isDarkMode 
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(79, 70, 229, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(79, 70, 229, 0.3) 100%)'
          };
          border-radius: 50%;
          filter: blur(5px);
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glass-card {
          background: ${isDarkMode ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(12px);
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(147, 51, 234, 0.1)'};
          box-shadow: ${isDarkMode 
            ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            : '0 8px 32px 0 rgba(147, 51, 234, 0.1)'
          };
        }

        .glass {
          background: ${isDarkMode ? 'rgba(17, 24, 39, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
          backdrop-filter: blur(8px);
        }

        .tech-grid-enhanced {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(${isDarkMode ? 'rgba(75, 0, 130, 0.1)' : 'rgba(75, 0, 130, 0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(75, 0, 130, 0.1)' : 'rgba(75, 0, 130, 0.05)'} 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
          animation: grid-pulse 15s infinite alternate ease-in-out;
        }
      `}</style>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default ImmersiLearnPage;
