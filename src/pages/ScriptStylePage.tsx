import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import FloatingContactButton from '../components/FloatingContactButton';

const ScriptStylePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const studentServices = [
    {
      title: 'Final Year Project Websites',
      description: 'Turn your academic project into a professional-grade website, complete with design, documentation, and interactivity.',
      icon: <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    {
      title: 'Personal Portfolios',
      description: 'Showcase your skills, resume, GitHub, and achievements with a responsive, modern portfolio site.',
      icon: <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    {
      title: 'Blogs & Knowledge Spaces',
      description: 'Create your own blog or academic journal with easy-to-manage templates and built-in SEO.',
      icon: <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
    },
    {
      title: 'One-on-One Consultation',
      description: 'Get guidance on UI/UX, hosting, domain setup, and branding from our design mentors.',
      icon: <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
    },
  ];

  const startupServices = [
    {
      title: 'Mini-SaaS Projects by Students',
      description: 'Need a quick MVP? We\'ll connect you with student developers who can build it cost-effectively.',
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    {
      title: 'Club Websites & Event Pages',
      description: 'Promote college fests, tech talks, and club updates with interactive event sites and registration forms.',
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    },
    {
      title: 'Design + Dev + Strategy',
      description: 'We combine creative design, efficient development, and smart consulting – all powered by student freelancers.',
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const highlights = [
    {
      title: 'Student-Centric',
      description: 'Built by students, for students.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    },
    {
      title: 'Affordable & High Quality',
      description: 'Great design doesn\'t have to be expensive.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: 'Skill Growth',
      description: 'Get mentorship, practice real-world tools, and grow your freelance career.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      title: 'Innovation Hub',
      description: 'Explore unique freelance projects in emerging tech, education, and AI.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const testimonials = [
    {
      quote: "Script&Style helped me turn my project into a stunning portfolio piece that landed me internships!",
      author: "Akhil R., Final Year CS Student"
    },
    {
      quote: "The consultation was spot on. I now have my own blog and I'm growing my personal brand!",
      author: "Divya S., Blogger & Student Creator"
    }
  ];

  const statistics = [
    { label: 'Active Students', value: '5,000+' },
    { label: 'Universities', value: '200+' },
    { label: 'Projects Completed', value: '12,000+' },
    { label: 'Success Rate', value: '97%' },
  ];

  const partners = [
    'MIT', 'Stanford University', 'Google', 'Microsoft', 'Adobe', 'Facebook', 'Amazon', 'University of California'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹150 - ₹600',
      features: [
        'Frontend Development (Basic UI & Responsive Design)',
        'Basic Animations & Styling',
        '1 Revision Included'
      ],
      highlight: false,
    },
    {
      name: 'Advanced',
      price: '₹1500 - ₹3000',
      features: [
        'Frontend + Backend Development',
        'API Integration & Secure Database',
        'Advanced Animations & Custom UI',
        '3 Revisions Included'
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '₹5000 - ₹7000',
      features: [
        'Full Website (Frontend + Backend + Hosting)',
        'Premium UI/UX, Security & Optimization',
        'Domain + Server Setup',
        'Unlimited Revisions & 24/7 Support'
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "I can't code. Can I still get a website?",
      answer: "Yes! We support no-code setups."
    },
    {
      question: "Can I showcase my art or projects?",
      answer: "Absolutely. Add galleries, blogs, and embedded content."
    },
    {
      question: "I already have a resume. What next?",
      answer: "We convert it into a visual portfolio with interactivity."
    },
  ];

  const successStories = [
    {
      quote: "Landed my first freelance project thanks to Script&Style!",
      author: "Arjun S., PSG"
    },
    {
      quote: "Got internship offers via my portfolio.",
      author: "Nivetha R., VIT"
    },
    {
      quote: "Built 2 projects through the community.",
      author: "Rohit M., SRM"
    }
  ];

  // Enhanced animation variants
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

  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(99, 102, 241, 0.5)',
        '0 0 40px rgba(99, 102, 241, 0.8)',
        '0 0 20px rgba(99, 102, 241, 0.5)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 py-20">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y, opacity, scale }}
        >
          {/* Enhanced Circuit Pattern */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
          
          {/* Enhanced Floating Elements */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br"
              style={{
                background: `radial-gradient(circle, ${['rgba(99,102,241,0.2)', 'rgba(79,70,229,0.2)', 'rgba(67,97,238,0.2)'][i % 3]} 0%, transparent 70%)`,
                height: `${Math.random() * 400 + 100}px`,
                width: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(30px)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Enhanced Grid Scan Line */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="w-full h-full opacity-10">
              <motion.div 
                className="h-2 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                animate={{ 
                  y: ['0%', '100%'],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
              <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600"
              variants={fadeInUp}
            >
              Script&Style
              </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-8 text-purple-200"
              variants={fadeInUp}
            >
              Student-Driven Digital Identity Movement
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your academic projects into stunning digital experiences. Built by students, for students.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              variants={fadeInUp}
            >
              <motion.button 
                className="btn btn-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="btn btn-lg glass text-purple-300 border-purple-400/30 px-8 hover:text-white hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
              variants={fadeInUp}
            >
              Student Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Everything you need to showcase your skills and build your digital presence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card bg-indigo-900/30 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl mb-4 w-14 h-14 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
        <motion.div 
                key={stat.label}
                className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
                  animate={glowAnimation.animate}
                >
                  {stat.value}
                    </motion.div>
                <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              variants={fadeInUp}
            >
              Student-Friendly Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Affordable packages designed for students and young creators
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border ${
                  plan.highlight 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-indigo-500/20'
                } hover:border-indigo-400/40 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: plan.highlight 
                    ? "0 20px 25px -5px rgba(147, 51, 234, 0.3), 0 10px 10px -5px rgba(147, 51, 234, 0.2)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        {plan.price}
                    </div>
                <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                    ))}
                  </ul>
                  <motion.button 
                  className={`w-full btn ${
                      plan.highlight 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'glass text-purple-300 border-purple-400/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
              variants={fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card bg-indigo-900/30 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
                <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Ready to transform your digital presence? Let's talk!
            </motion.p>
          </motion.div>

              <motion.div
            className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card bg-indigo-900/30 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
                      hello@scriptstyle.com
                    </p>
                    <p className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 1234567890
                    </p>
          </div>
        </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CSS */}
      <style>{`
        .glass-card {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

          .bg-circuit-pattern {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

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
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.8);
          }
        }
      `}</style>

      <FloatingContactButton />
    </div>
  );
};

export default ScriptStylePage; 