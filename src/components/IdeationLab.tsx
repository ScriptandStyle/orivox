import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const IdeationLab = () => {
  const [activeTab, setActiveTab] = useState('healthcare');

  const healthcareIdeas = [
    {
      title: 'AI-Powered Diagnostics',
      description:
        'Developing advanced machine learning algorithms for early disease detection and diagnosis.',
      status: 'In Progress',
      completion: 75,
    },
    {
      title: 'Smart Patient Monitoring',
      description:
        'IoT-based system for real-time patient monitoring and automated alert systems.',
      status: 'Research Phase',
      completion: 40,
    },
    {
      title: 'VR Therapy Platform',
      description:
        'Virtual reality solutions for mental health treatment and rehabilitation.',
      status: 'Prototyping',
      completion: 60,
    },
  ];

  const spaceIdeas = [
    {
      title: 'Nano Satellite Network',
      description:
        'Developing a network of nano-satellites for improved global communication.',
      status: 'Planning',
      completion: 30,
    },
    {
      title: 'Space Debris Tracker',
      description:
        'AI-powered system for tracking and predicting space debris movements.',
      status: 'Development',
      completion: 85,
    },
    {
      title: 'Mars Habitat Design',
      description:
        'Innovative habitat designs for sustainable living on Mars.',
      status: 'Concept Phase',
      completion: 25,
    },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="ideation" className="section-container relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_iorpbol0.json"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Ideation Lab</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Where groundbreaking ideas in healthcare and space technology take
            shape. Explore our current projects and innovations.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="tabs tabs-boxed justify-center mb-8">
          <button
            className={`tab tab-lg ${
              activeTab === 'healthcare' ? 'tab-active' : ''
            }`}
            onClick={() => setActiveTab('healthcare')}
          >
            Healthcare
          </button>
          <button
            className={`tab tab-lg ${activeTab === 'space' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('space')}
          >
            Space Technology
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeTab === 'healthcare' ? healthcareIdeas : spaceIdeas).map(
                (idea, index) => (
                  <motion.div
                    key={idea.title}
                    className="card bg-white shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-body">
                      <h3 className="card-title font-orbitron">{idea.title}</h3>
                      <p className="text-gray-600 mb-4">{idea.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Status:</span>
                          <span className="font-medium text-electric-violet">
                            {idea.status}
                          </span>
                        </div>
                        <progress
                          className="progress progress-primary w-full"
                          value={idea.completion}
                          max="100"
                        ></progress>
                        <div className="text-right text-sm text-gray-500">
                          {idea.completion}% Complete
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IdeationLab; 