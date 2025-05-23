import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';


const TransparentDisplay = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
          strokeWidth="2"
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
          strokeWidth="2"
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
          strokeWidth="2"
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

  return (
    <section
      ref={sectionRef}
      id="display"
      className="section-container bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
          <span className="gradient-text">Transparent Display</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Revolutionary display technology that transforms how we interact with
          digital content in physical spaces.
        </p>
        <div className="divider max-w-md mx-auto my-4"></div>
      </div>

      {/* Hero Display */}
      <div className="hero bg-gray-800 mb-16 rounded-xl overflow-hidden border border-gray-700">
        <div className="hero-overlay bg-gradient-to-r from-electric-violet/50 to-accent-neon/50 backdrop-blur-sm"></div>
        <div className="hero-content text-center text-neutral-content py-16">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-orbitron text-center font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
              The Future is
              <br />
              Transparent
            </h1>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="card bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4 bg-electric-violet/20 p-3 rounded-full">{feature.icon}</div>
              <h3 className="card-title font-orbitron text-gray-200 font-bold">{feature.title}</h3>
              <p className="text-gray-300 font-medium">{feature.description}</p>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline badge-primary">Feature</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Applications */}
      <div
        className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
          Future Applications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {applications.map((app, index) => (
            <div
              key={app}
              className="card compact bg-gray-700 border border-gray-600 hover:border-gray-500 transition-colors duration-300"
            >
              <div className="card-body items-center text-center p-4">
                <span className="text-primary font-bold">{app}</span>
                <div className="card-actions justify-center mt-2">
                  <div className="badge badge-secondary badge-sm">Coming Soon</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TransparentDisplay; 