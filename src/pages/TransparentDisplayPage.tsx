<<<<<<< HEAD
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