import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import ScriptStyle from '../components/ScriptStyle';
import FloatingContactButton from '../components/FloatingContactButton';

const ScriptStylePage = () => {
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

  // Pricing plans data
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

  // FAQ data
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

  // Success stories
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

  // Animation controls
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  // Animated counter hook for pricing
  const Counter = ({ from, to, duration = 1.5 }: { from: number; to: number; duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const controls = useAnimation();
    const inView = useInView(nodeRef, { once: true });
    
    useEffect(() => {
      if (inView) {
        // Just animate opacity since we can't use custom 'count' property
        controls.start({ 
          opacity: 1,
          transition: { duration }
        });
      }
    }, [inView, controls, duration]);
    
    // Instead of using complex custom animation for the count, 
    // we'll display the final value directly when in view
    return (
      <motion.span
        ref={nodeRef}
        animate={controls}
        initial={{ opacity: 0 }}
        className="font-bold"
      >
        {inView ? to : from}
      </motion.span>
    );
  };

  return (
    <div className="bg-gray-900 text-gray-200 overflow-hidden">
      {/* Hero Banner with Advanced Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circuit board pattern */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
          
          {/* Floating animated elements */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br"
              style={{
                background: `radial-gradient(circle, ${['rgba(99,102,241,0.2)', 'rgba(79,70,229,0.2)', 'rgba(67,97,238,0.2)'][i % 3]} 0%, transparent 70%)`,
                height: `${Math.random() * 300 + 100}px`,
                width: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(20px)',
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Grid scan line effect */}
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
                  y: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-indigo-500/30"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
          >
            <div className="relative mb-6">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-xl opacity-30"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.9, 1.01, 0.9],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 font-orbitron relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Script&Style Consultancy
              </motion.h1>
            </div>
            
            <motion.div 
              className="max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Empowering Students with Digital Identity, Community, and Opportunity
              </h2>
              <p className="text-xl mb-8">
                Transform your skills into an online identity. Build your portfolio, join a talent hub, and unlock your future.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="btn btn-lg bg-gradient-to-r from-indigo-600 to-indigo-800 text-white hover:from-indigo-700 hover:to-indigo-900 border-none shadow-lg shadow-indigo-700/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Your Portfolio
              </motion.button>
              <motion.button 
                className="btn btn-lg bg-transparent text-white hover:bg-white/20 border border-white backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
              <motion.button 
                className="btn btn-lg bg-transparent text-white hover:bg-white/20 border border-white backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Talent Hub
              </motion.button>
            </motion.div>
            
            {/* Animated scroll indicator */}
            <motion.div 
              className="mt-16 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.a 
                href="#about"
                className="inline-block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7-7H3"></path>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Floating code elements for tech feel */}
          <div className="absolute top-10 left-10 opacity-30 hidden md:block">
            <motion.pre 
              className="text-xs text-indigo-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {`<div className="portfolio">
  <Header />
  <Projects />
</div>`}
            </motion.pre>
          </div>
          <div className="absolute bottom-10 right-10 opacity-30 hidden md:block">
            <motion.pre 
              className="text-xs text-indigo-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              {`const Skills = () => {
  return (
    <section>
      {/* Your code here */}
    </section>
  )
}`}
            </motion.pre>
          </div>
        </div>
      </section>

      {/* About Us with enhanced styling and animations */}
      <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-indigo-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 blur-lg opacity-30"
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.9, 1.05, 0.9],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron relative z-10">
                We Help Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Build Digital Presence</span>
              </h2>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Script&Style is ORIVOX's student-focused web consultancy. We believe every student deserves a stunning online presence. Our platform empowers you to build your portfolio, join our freelance community, and gain real-world experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-gray-700 p-6 rounded-xl shadow-2xl border border-gray-600 backdrop-blur-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Card shine effect */}
                <motion.div 
                  className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10"
                  animate={{ left: ['150%', '-50%'] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 5,
                    repeatDelay: 3
                  }}
                />
                
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
                
                {/* Bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-tl-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with enhanced styling */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC42MjcgMEw4NS4zNTcxIDU5SDIzLjg5NzFMNTQuNjI3IDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJzY2FsZSgwLjcwNykgcm90YXRlKDQ1LCAzMCwgMzApIi8+CiAgICA8cGF0aCBkPSJNNTQuNjI3IDBMODUuMzU3MSA1OUgyMy44OTcxTDU0LjYyNyAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIGZpbGw9Im5vbmUiIHRyYW5zZm9ybT0ic2NhbGUoMC4xNDE0KSByb3RhdGUoNDUsIDMwLCAzMCkiLz4KPC9zdmc+')] opacity-10"></div>
        
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <motion.span 
                className="px-4 py-1 text-sm rounded-full bg-indigo-900/50 border border-indigo-700/70 text-indigo-300 inline-block mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                WHAT WE OFFER
              </motion.span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Services</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From personal branding to campus club websites, we've got you covered with affordable, student-friendly web services.
            </p>
          </motion.div>

          <div className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-1 h-8 bg-indigo-500 mr-4 rounded-full"></div>
              <h3 className="text-2xl font-bold text-indigo-300">For Students</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-700 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)" }}
                >
                  {/* Glass effect background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 rounded-xl z-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-indigo-500/10 -rotate-45 transform origin-top-right"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900/50 mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-200 group-hover:text-indigo-300 transition-colors duration-300">{service.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                  </div>
                  
                  {/* Bottom link indicator */}
                  <div className="mt-4 flex justify-end">
                    <motion.div 
                      className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-10">
              <div className="w-1 h-8 bg-blue-500 mr-4 rounded-full"></div>
              <h3 className="text-2xl font-bold text-blue-300">For Startups & Clubs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {startupServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-6 border border-gray-700 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)" }}
                >
                  {/* Card shine effect */}
                  <motion.div 
                    className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10"
                    animate={{ left: ['150%', '-50%'] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 5,
                      repeatDelay: 3 + index
                    }}
                  />
                  
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/50 mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-200 group-hover:text-blue-300 transition-colors duration-300">{service.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with enhanced styling and animations */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNSAzMEMyLjIgMzAgMCAyNy44IDAgMjVzMi4yLTUgNS01IDUgMi4yIDUgNS0yLjIgNS01IDV6bTI1LTVDMjcuMiAyNSAyNSAyMi44IDI1IDIwczIuMi01IDUtNSA1IDIuMiA1IDUtMi4yIDUtNSA1em0yNSAzYy0yLjggMC01LTIuMi01LTVzMi4yLTUgNS01IDUgMi4yIDUgNS0yLjIgNS01IDV6TTEwIDQ1Yy0yLjggMC01LTIuMi01LTVzMi4yLTUgNS01IDUgMi4yIDUgNS0yLjIgNS01IDV6bTI1IDNjLTIuOCAwLTUtMi4yLTUtNXMyLjItNSA1LTUgNSAyLjIgNSA1LTIuMiA1LTUgNXptMjUgMGMtMi44IDAtNS0yLjItNS01czIuMi01IDUtNSA1IDIuMiA1IDUtMi4yIDUtNSA1eiIgZmlsbD0iIzJhMmE2MyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Animated gradient lines */}
        <motion.div 
          className="absolute left-0 right-0 h-px top-0"
          initial={{ opacity: 0.3, backgroundImage: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.7), transparent)' }}
          animate={{ 
            opacity: [0.1, 0.5, 0.1],
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        <motion.div 
          className="absolute left-0 right-0 h-px bottom-0"
          initial={{ opacity: 0.3, backgroundImage: 'linear-gradient(90deg, transparent, rgba(244, 114, 182, 0.7), transparent)' }}
          animate={{ 
            opacity: [0.1, 0.5, 0.1],
            backgroundPosition: ['100% 0%', '0% 0%', '100% 0%'] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        {/* Floating orbs animation */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              background: i % 2 ? 
                'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(56, 189, 248, 0.1) 70%)' : 
                'radial-gradient(circle, rgba(244, 114, 182, 0.8) 0%, rgba(244, 114, 182, 0.1) 70%)',
              height: `${Math.random() * 300 + 100}px`,
              width: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated text highlight wrapper */}
            <div className="relative inline-block mb-6">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                initial={{ opacity: 0.2, background: "radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0) 70%)" }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <h2 className="text-6xl md:text-7xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-200 relative z-10 px-4">
                Subscription Plans
              </h2>
            </div>
            
            <motion.p 
              className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300 max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose What Fits You!
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>

          {/* Price cards with enhanced animation and interaction */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`group relative rounded-2xl ${
                  plan.highlight ? 'border-2 border-red-500/50' : 'border border-gray-700'
                } overflow-hidden backdrop-blur-sm shadow-2xl`}
                style={{
                  background: plan.highlight ? 
                    'linear-gradient(145deg, rgba(185, 28, 28, 0.2), rgba(220, 38, 38, 0.8))' : 
                    'linear-gradient(145deg, rgba(17, 24, 39, 0.7), rgba(31, 41, 55, 0.9))'
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                  style={{
                    background: plan.highlight ?
                      'linear-gradient(145deg, rgba(220, 38, 38, 0.4), rgba(185, 28, 28, 0.9))' :
                      'linear-gradient(145deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.95))'
                  }}
                />
                
                {/* Top accent bar */}
                <motion.div 
                  className={`h-1.5 w-full ${
                    plan.highlight ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.2 }}
                />
                
                {/* Holographic shimmer effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-30"
                  animate={{
                    left: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                {/* Plan icon with animation */}
                <div className="absolute top-6 right-6">
                  <motion.div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      plan.highlight ? 'bg-red-600' : 'bg-gray-800'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20, 
                      delay: 0.3 + index * 0.2 
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d={
                          index === 0 ? "M12 4v16m8-8H4" : 
                          index === 1 ? "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" :
                          "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        } 
                      />
                    </svg>
                  </motion.div>
                </div>
                
                <div className="p-8 z-10 relative">
                  {/* Title with animated underline */}
                  <div className="mb-12">
                    <motion.h3 
                      className={`text-3xl font-bold font-orbitron ${
                        plan.highlight ? 'text-white' : 'text-white'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                    >
                      {plan.name}
                    </motion.h3>
                    
                    <motion.div 
                      className={`h-0.5 w-20 mt-2 ${
                        plan.highlight ? 'bg-red-400' : 'bg-cyan-400'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                    />
                  </div>
                  
                  {/* Animated price */}
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`absolute -inset-1 rounded-lg opacity-50 ${
                          plan.highlight ? 'bg-red-500/20' : 'bg-blue-500/20'
                        } blur-md`}
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <p className={`text-4xl font-bold ${
                        plan.highlight ? 'text-white' : 'text-white'
                      } relative z-10 px-4 py-2 rounded-lg inline-block`}>
                        {plan.price}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Features list with staggered animation */}
                  <ul className="space-y-6 mb-12 min-h-[280px]">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) + (i * 0.1) }}
                      >
                        {/* Animated checkmark */}
                        <motion.div 
                          className={`flex-shrink-0 w-6 h-6 ${
                            plan.highlight ? 'text-red-300' : 'text-cyan-300'
                          } mr-3 mt-1`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20, 
                            delay: 0.6 + (index * 0.2) + (i * 0.1) 
                          }}
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <span className={`text-${plan.highlight ? 'gray-100' : 'gray-300'} text-lg`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button with hover animation */}
                  <motion.button 
                    className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 relative overflow-hidden ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500' 
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 border border-cyan-500/50 hover:border-cyan-500'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: plan.highlight 
                        ? "0 10px 25px -5px rgba(239, 68, 68, 0.5)"
                        : "0 10px 25px -5px rgba(8, 145, 178, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                  >
                    <span className="relative z-10">Choose Plan</span>
                    
                    {/* Button hover effect */}
                    <motion.div 
                      className="absolute inset-0 w-full h-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: plan.highlight 
                          ? 'radial-gradient(circle at center, rgba(244, 114, 182, 0.8) 0%, transparent 70%)'
                          : 'radial-gradient(circle at center, rgba(56, 189, 248, 0.8) 0%, transparent 70%)'
                      }}
                    />
                  </motion.button>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom section with animated elements */}
          <motion.div 
            className="text-center mt-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Background glowing accent */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0) 70%)' }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <p className="text-xl text-white mb-2 font-orbitron relative">
              Contact us to get started!
            </p>
            
            <motion.div 
              className="inline-flex items-center space-x-2 mb-6 relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-7 h-px bg-gradient-to-r from-transparent to-cyan-400"></span>
              <motion.a
                href="#contact"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Now
              </motion.a>
              <motion.svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
              <span className="w-7 h-px bg-gradient-to-l from-transparent to-cyan-400"></span>
            </motion.div>
            
            <p className="text-gray-400 opacity-80 text-sm">
              * Price depends on project scope
            </p>
          </motion.div>
        </div>
        
        {/* CSS for animations */}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
            }
            
            @keyframes pulse-glow {
              0%, 100% {
                opacity: 0.5;
                box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
              }
              50% {
                opacity: 1;
                box-shadow: 0 0 50px rgba(56, 189, 248, 0.6);
              }
            }
            
            .-skew-x-30 {
              transform: skewX(-30deg);
            }
          `}
        </style>
      </section>

      {/* Testimonials with enhanced styling */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC42MjcgMEw4NS4zNTcxIDU5SDIzLjg5NzFMNTQuNjI3IDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJzY2FsZSgwLjcwNykgcm90YXRlKDQ1LCAzMCwgMzApIi8+CiAgICA8cGF0aCBkPSJNNTQuNjI3IDBMODUuMzU3MSA1OUgyMy44OTcxTDU0LjYyNyAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIGZpbGw9Im5vbmUiIHRyYW5zZm9ybT0ic2NhbGUoMC4xNDE0KSByb3RhdGUoNDUsIDMwLCAzMCkiLz4KPC9zdmc+')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="px-4 py-1 text-sm rounded-full bg-indigo-900/50 border border-indigo-700/70 text-indigo-300 inline-block mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              TESTIMONIALS
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Success Stories</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Hear from students who transformed their digital presence with our help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...testimonials, ...successStories].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-gray-700 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(15, 23, 42, 0.35)"
                }}
              >
                {/* Quotation mark */}
                <div className="absolute -top-4 -left-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300 shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-4">
                  <p className="text-lg italic mb-6 text-gray-300 leading-relaxed">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-indigo-300">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative accent */}
                <motion.div 
                  className="absolute bottom-6 right-6 text-indigo-700/20 rotate-12"
                  animate={{ 
                    rotate: [12, 8, 12],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with animation */}
      <section className="py-16 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 mb-2 font-orbitron"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: 0.3 + index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                >{stat.value}</motion.p>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with animations */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="px-4 py-1 text-sm rounded-full bg-indigo-900/50 border border-indigo-700/70 text-indigo-300 inline-block mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              FAQ
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Still have questions? Get in touch with our team.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2)"
                }}
              >
                <div className="collapse collapse-arrow">
                  <input type="checkbox" /> 
                  <div className="collapse-title text-xl font-medium text-gray-200 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3 text-indigo-400 text-sm font-bold">
                      Q
                    </div>
                    {faq.question}
                  </div>
                  <div className="collapse-content text-gray-300 pl-11"> 
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
          {/* Animated wave background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="#ffffff" 
                animate={{ 
                  d: [
                    "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,160L48,186.7C96,213,192,267,288,272C384,277,480,235,576,224C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </svg>
          </div>
          
          {/* Floating elements */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-white opacity-10 mix-blend-overlay"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(50px)',
              }}
              animate={{
                x: [0, Math.random() * 30 - 15],
                y: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.3 + 0.9, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto backdrop-blur-sm p-10 rounded-2xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6 rounded-full px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                JOIN OUR COMMUNITY
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-orbitron">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have transformed their online presence and career prospects with Script&Style.
            </p>
            <motion.button 
              className="btn btn-lg glass text-white hover:bg-white/30 border border-white/50 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
            
            {/* Accent lines */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/30"></div>
              <div className="text-white/50 text-sm">No credit card required</div>
              <div className="h-px w-16 bg-white/30"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactButton />
      
      {/* CSS for animations */}
      <style>
        {`
          .bg-circuit-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 3c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
          
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
          
          .text-gradient-shine {
            background: linear-gradient(to right, #818cf8 20%, #4f46e5 40%, #6366f1 60%, #818cf8 80%);
            background-size: 200% auto;
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScriptStylePage; 