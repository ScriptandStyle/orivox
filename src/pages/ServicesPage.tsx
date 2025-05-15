import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      title: "Transparent Display Technology",
      subtitle: "CrystalView",
      description: "Next-generation transparent displays that integrate seamlessly into environments—from automotive HUDs to smart glass for retail and healthcare.",
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

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
              Our <span className="text-indigo-800">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our multi-domain solutions across transparent display technology, student freelancing, and healthcare/space innovation.
            </p>
          </motion.div>

          {/* Floating Service Panels */}
          <div className="relative mt-20">
            {/* 3D Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: service.delay,
                    type: "spring",
                    bounce: 0.3
                  }}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <Link 
                    to={service.link} 
                    className="block h-full"
                  >
                    <div className={`bg-gradient-to-br ${service.bgGradient} rounded-xl shadow-xl p-6 flex flex-col h-full transform perspective-1000 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden group`}>
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      
                      {/* Circuit-like pattern background */}
                      <div className="absolute inset-0 bg-circuit-pattern opacity-20 pointer-events-none"></div>
                      
                      {/* Content */}
                      <div className="text-white z-10">
                        <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 backdrop-blur-sm">
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-2 font-space-grotesk">{service.title}</h3>
                        <div className="badge badge-lg bg-white/30 text-white backdrop-blur-sm mb-4">
                          {service.subtitle}
                        </div>
                        <p className="text-white/90 mb-8 flex-grow">{service.description}</p>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-white/90 text-sm">Explore Service</span>
                          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Why Choose <span className="text-indigo-800">Orivox</span> Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our multi-domain approach creates unique synergies and opportunities across different technology sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Integrated Innovation",
                description: "Our services complement each other, creating a holistic ecosystem of future-focused solutions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Cutting-Edge Technology",
                description: "We're constantly pushing boundaries in display technology, student empowerment, and scientific exploration.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Future-Focused Solutions",
                description: "Our services are designed with scalability and long-term impact in mind, anticipating tomorrow's challenges.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Cross-Domain Expertise",
                description: "We bring diverse knowledge and skills together, creating unique perspectives and innovative approaches.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-indigo-800/10 text-indigo-800 p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-space-grotesk">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-cool-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Ready to Experience the Future?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Discover how our innovative services can transform your ideas into reality.
            </p>
            <Link to="/about" className="btn btn-lg glass text-white hover:bg-white/20">
              Learn More About Orivox
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 