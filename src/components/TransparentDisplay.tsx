import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const TransparentDisplay = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const features = [
    {
      title: 'Crystal Clear Transparency',
      description:
        'Advanced optical technology providing unmatched clarity and transparency.',
      icon: (
        <svg
          className="w-12 h-12 text-electric-violet"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Interactive Touch',
      description:
        'Multi-touch capability with precise response and gesture recognition.',
      icon: (
        <svg
          className="w-12 h-12 text-electric-violet"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      ),
    },
    {
      title: 'Energy Efficient',
      description:
        'Low power consumption with smart brightness adjustment technology.',
      icon: (
        <svg
          className="w-12 h-12 text-electric-violet"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const applications = [
    'Retail Displays',
    'Automotive HUDs',
    'Smart Home Windows',
    'Medical Imaging',
    'Educational Tools',
    'Gaming Interfaces',
  ];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="display"
      className="section-container bg-gradient-to-b from-white to-cool-blue/10"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Transparent Display</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Revolutionary display technology that transforms how we interact with
          digital content in physical spaces.
        </p>
      </motion.div>

      {/* Parallax Display Mockup */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-[400px] mb-16 overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-electric-violet/20 to-accent-neon/20 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-orbitron text-white text-center">
              The Future is
              <br />
              Transparent
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-card card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="card-title font-orbitron">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Applications */}
      <motion.div
        className="bg-white rounded-xl p-8 shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Future Applications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {applications.map((app, index) => (
            <motion.div
              key={app}
              className="bg-gray-50 rounded-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-electric-violet font-medium">{app}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TransparentDisplay; 