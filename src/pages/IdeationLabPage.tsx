import React from 'react';
import { motion } from 'framer-motion';
import IdeationLab from '../components/IdeationLab';

const IdeationLabPage = () => {
  const healthcareInnovations = [
    {
      title: "Remote Patient Monitoring",
      description: "Advanced sensors and AI systems that allow healthcare providers to monitor patients remotely, reducing hospital visits and improving outcomes.",
      stage: "Beta Testing",
    },
    {
      title: "Neural Interface for Paralysis",
      description: "Brain-computer interface technology that allows patients with paralysis to control assistive devices through thought alone.",
      stage: "Research",
    },
    {
      title: "Predictive Disease Analytics",
      description: "AI-powered systems that analyze patient data to predict potential health issues before they become serious.",
      stage: "Development",
    },
    {
      title: "Nano Drug Delivery",
      description: "Targeted medication delivery using nanoparticles to increase efficacy and reduce side effects.",
      stage: "Clinical Trials",
    }
  ];

  const spaceInnovations = [
    {
      title: "Modular Space Habitats",
      description: "Customizable living quarters for long-term space missions, featuring artificial gravity and radiation shielding.",
      stage: "Prototype",
    },
    {
      title: "Solar Sail Propulsion",
      description: "Advanced propulsion technology utilizing solar radiation pressure for interplanetary travel.",
      stage: "Testing",
    },
    {
      title: "Space Resource Extraction",
      description: "Systems for mining and processing resources from asteroids and other celestial bodies.",
      stage: "Design",
    },
    {
      title: "Life Support Recycling",
      description: "Closed-loop systems that recycle air, water, and waste with near 100% efficiency for long-duration missions.",
      stage: "Development",
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-electric-violet to-accent-neon py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ideation Lab
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the frontiers of innovation in healthcare and space technology
          </motion.p>
        </div>
      </section>

      {/* Innovation Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-center font-space-grotesk"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Innovation Approach
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At the Ideation Lab, we believe that true innovation comes from the intersection of diverse disciplines. We bring together experts from medicine, engineering, physics, computer science, and more to tackle humanity's biggest challenges in healthcare and space exploration. Our collaborative approach, combined with cutting-edge technology and a fearless attitude toward what's possible, allows us to develop solutions that push the boundaries of what's possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Healthcare Innovations */}
      <section className="py-16 bg-gradient-to-b from-white to-cool-blue/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Healthcare <span className="gradient-text">Innovations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pioneering solutions to improve patient care, treatment outcomes, and medical accessibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-space-grotesk">{innovation.title}</h3>
                  <span className="badge bg-electric-violet text-white">{innovation.stage}</span>
                </div>
                <p className="text-gray-600">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Innovations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Space <span className="gradient-text">Innovations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Developing technologies to advance human presence beyond Earth and explore the cosmos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaceInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-space-grotesk">{innovation.title}</h3>
                  <span className="badge bg-accent-neon text-white">{innovation.stage}</span>
                </div>
                <p className="text-gray-600">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Component */}
      <IdeationLab />
    </div>
  );
};

export default IdeationLabPage; 