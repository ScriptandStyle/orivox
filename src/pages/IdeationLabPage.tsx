import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import FloatingContactButton from '../components/FloatingContactButton';

const IdeationLab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    category: '',
    description: '',
    file: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Featured Projects Data
  const featuredProjects = [
    {
      id: "immersilearn",
      title: "ImmersiLearn",
      subtitle: "Gamified XR Learning Platform",
      description: "A gamified, immersive learning platform built with XR and AI. Combines spatial learning, holographic education, and personalized AI tutors for kids and young learners.",
      status: "Prototype",
      path: "/immersilearn",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      icon: "🥽",
      features: ["XR Integration", "AI Tutors", "Spatial Learning", "Gamification"],
      progress: 75
    },
    {
      id: "exploreexpo-cosmokids",
      title: "ExploreExpo: CosmoKids",
      subtitle: "Interactive Space Education",
      description: "Interactive space education for kids powered by storytelling and play. Kids can explore planets, build their own galaxies, and unlock space secrets — all in a digital playground.",
      status: "Beta",
      path: "/exploreexo",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "🚀",
      features: ["Planet Exploration", "Galaxy Builder", "Story Mode", "Educational Games"],
      progress: 90
    }
  ];

  // Ideation Process Steps
  const ideationSteps = [
    {
      step: "01",
      title: "Ideate",
      description: "Community submits innovative concepts through our open platform",
      icon: "💡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      step: "02",
      title: "Prototype",
      description: "Selected ideas are developed into working prototypes with our R&D team",
      icon: "🔬",
      color: "from-blue-400 to-purple-500"
    },
    {
      step: "03",
      title: "Launch",
      description: "Successful prototypes are scaled and launched as full products",
      icon: "🚀",
      color: "from-green-400 to-blue-500"
    }
  ];

  // Form Categories
  const categories = [
    "EdTech",
    "Space & Astronomy",
    "AI & Machine Learning",
    "Social Impact",
    "Healthcare",
    "Environment",
    "Gaming",
    "Other"
  ];

  // Form Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardHover = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3 }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-white overflow-hidden">
      {/* Hero Section - "Where Ideas Take Flight" */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Neural Network Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="neural-grid"></div>
          </div>

          {/* Floating Data Visualizations */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-cyan-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['{ }', '[ ]', '< >', '0x1A', 'AI', 'XR', 'ML', 'IoT'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}

          {/* Neon Glow Orbs */}
          <motion.div
            className="absolute -left-40 top-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />

          <motion.div
            className="absolute right-0 bottom-40 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-2xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 2 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lottie Animation - Left Side */}
            <motion.div
              className="hidden lg:block"
              style={{ y: y1 }}
            >
              <div className="relative">
                {/* Holographic Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
                  {/* Hologram Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="text-sm font-mono text-cyan-400">ideation_hub.exe</div>
                  </div>

                  {/* Animation Container */}
                  <div className="p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20">
                    <div className="w-full h-80 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center overflow-hidden">
                      {/* Idea Lottie Animation */}
                      <Player
                        autoplay
                        loop
                        src={require("../asset/idea.json")}
                        style={{ width: '100%', height: '100%', maxWidth: '400px', maxHeight: '320px' }}
                        className="drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Holographic Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div
              className="text-center lg:text-left"
              style={{ y: y2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-2xl mr-2">🧬</span>
                <span className="font-medium text-cyan-400">Orivox R&D Division</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-white">Where Ideas</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Take Flight
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-light mb-4 text-purple-200">
                  Welcome to the Ideation Hub – Powering the Next Big Thing.
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-300">
                  We experiment, prototype, and incubate innovations that could shape tomorrow.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="btn btn-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Explore Projects
                </motion.a>

                <motion.a
                  href="#submit-idea"
                  className="btn btn-lg btn-outline border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Submit Your Idea
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900/50 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">🚀</span>
              <span className="font-medium text-cyan-400">Featured Projects</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Innovation in Action
            </motion.h2>

            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              Discover our current moonshot projects that are reshaping the future of education and exploration.
            </motion.p>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-cyan-500/20"
                variants={itemVariants}
                whileHover={cardHover}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                    {project.status}
                  </span>
                </div>

                <div className="p-8 relative z-10">
                  {/* Project Icon & Header */}
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-3xl shadow-lg mr-4`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-cyan-400 font-medium">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300 border border-gray-600/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Development Progress</span>
                      <span className="text-sm font-bold text-cyan-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <Link
                      to={project.path}
                      className="flex-1 btn btn-sm bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 border-none text-white transition-all duration-300"
                    >
                      View Demo
                    </Link>
                    <button className="btn btn-sm btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300">
                      Read Concept
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ideation Loop - "How We Build" */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="circuit-pattern"></div>
          </div>

          {/* Floating Whiteboard Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-cyan-400/30 rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">⚡</span>
              <span className="font-medium text-green-400">Our Process</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              How We Build the Future
            </motion.h2>

            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              From spark to reality: Our three-stage innovation pipeline transforms community ideas into world-changing products.
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-yellow-400 via-blue-400 to-green-400 transform -translate-y-1/2 z-0"></div>

              {ideationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-4xl shadow-2xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                        <span className="text-xs font-bold text-cyan-400">{step.step}</span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>

                    {/* Animated Underline */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-6 mx-auto`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Idea Section */}
      <section id="submit-idea" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Background Lottie Animation */}
          <div className="absolute inset-0 opacity-20">
            <Player
              autoplay
              loop
              src={require("../asset/idea.json")}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Digital Rain Effect */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 100}px`,
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl mr-2">💡</span>
              <span className="font-medium text-pink-400">Submit Your Vision</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Got a Vision? <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Share It With Us.</span>
            </motion.h2>

            <motion.p
              className="text-xl max-w-3xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              Your idea could be the next breakthrough. Join our innovation ecosystem and help shape the future.
            </motion.p>
          </motion.div>

          {/* Idea Submission Form */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <motion.div
                      className="form-control"
                      variants={itemVariants}
                    >
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input input-bordered bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="form-control"
                      variants={itemVariants}
                    >
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input input-bordered bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Idea Title */}
                    <motion.div
                      className="form-control"
                      variants={itemVariants}
                    >
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Idea Title *</span>
                      </label>
                      <input
                        type="text"
                        name="ideaTitle"
                        value={formData.ideaTitle}
                        onChange={handleInputChange}
                        className="input input-bordered bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Give your idea a catchy name"
                        required
                      />
                    </motion.div>

                    {/* Category */}
                    <motion.div
                      className="form-control"
                      variants={itemVariants}
                    >
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Category *</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="select select-bordered bg-gray-700/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.div
                    className="form-control"
                    variants={itemVariants}
                  >
                    <label className="label">
                      <span className="label-text text-gray-300 font-medium">Description *</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered h-32 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Describe your idea in detail. What problem does it solve? How would it work? What makes it innovative?"
                      required
                    />
                  </motion.div>

                  {/* File Upload */}
                  <motion.div
                    className="form-control"
                    variants={itemVariants}
                  >
                    <label className="label">
                      <span className="label-text text-gray-300 font-medium">Upload Sketch / PDF / Presentation (Optional)</span>
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleInputChange}
                      className="file-input file-input-bordered bg-gray-700/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      accept=".pdf,.ppt,.pptx,.jpg,.jpeg,.png,.sketch"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="text-center pt-6"
                    variants={itemVariants}
                  >
                    <motion.button
                      type="submit"
                      className="btn btn-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-12"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Launch Your Idea
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Your idea has entered the lab!</h3>
                  <p className="text-xl text-gray-300 mb-6">We'll review your submission and get back to you soon.</p>
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement - Community Callout */}
      <section className="py-20 bg-gradient-to-br from-purple-900/40 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Constellation Pattern */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
              variants={itemVariants}
            >
              Be a part of the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">next innovation</span>.
              <br />
              Or <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">invent your own</span>.
            </motion.h2>

            <motion.p
              className="text-xl mb-10 leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              Join a community of creators, researchers, and students who are building tomorrow's solutions today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 border-none text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Join Orivox Labs
              </motion.button>

              <motion.button
                className="btn btn-lg btn-outline border-2 border-pink-400 text-pink-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2m-8 0V4" />
                </svg>
                Pitch Your Prototype
              </motion.button>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "500+", label: "Ideas Submitted" },
                { number: "50+", label: "Prototypes Built" },
                { number: "12", label: "Products Launched" },
                { number: "∞", label: "Possibilities" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CSS */}
      <style>{`
        .neural-grid {
          background-image:
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .circuit-pattern {
          background-image:
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }

        /* Form focus effects */
        .input:focus, .textarea:focus, .select:focus {
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
          border-color: #06b6d4;
        }

        /* Glassmorphism effect */
        .glass-card {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        /* Animation keyframes */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.8);
          }
        }

        /* Neon text effect */
        .neon-text {
          text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
        }
      `}</style>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default IdeationLab; 