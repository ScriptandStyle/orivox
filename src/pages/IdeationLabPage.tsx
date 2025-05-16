import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IdeationLab = () => {
  // Project cards data
  const projectCards = [
    {
      id: "immersilearn",
      title: "ImmersiLearn",
      tagline: "Personalized AR/VR Learning Assistant",
      description: "Revolutionize learning with immersive, personalized AR/VR experiences tailored to individual interests and learning styles.",
      status: "New",
      path: "/immersilearn",
      color: "from-purple-600 to-indigo-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: "exploreexo",
      title: "ExploreExo",
      tagline: "Space Education Platform",
      description: "Discover the wonders of exoplanets and the universe through interactive learning experiences designed for curious minds of all ages.",
      status: "Live",
      path: "/exploreexo",
      color: "from-blue-600 to-cyan-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      )
    }
  ];

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    initial: { 
      opacity: 0, 
      y: -50 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -5px rgba(138, 43, 226, 0.4)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      id="ideation-lab" 
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Background Particles and Effects */}
      <div className="absolute inset-0 z-0">
        {/* Tech Grid */}
        <div className="tech-grid"></div>

        {/* Animated Particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, index) => (
            <motion.div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                backgroundColor: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.3})`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.2],
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

        {/* Glowing Orbs */}
        <motion.div 
          className="absolute -left-40 top-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute right-0 bottom-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
            Script&Style Ideation Lab
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Where Ideas Come Alive
          </p>
          <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          {projectCards.map((project, index) => (
            <Link to={project.path} key={project.id}>
              <motion.div
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 h-full group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Card Gradient Top Border */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8 h-full flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-400">{project.tagline}</p>
                      </div>
                    </div>
                    <span className="badge bg-indigo-900/70 text-indigo-300 border-indigo-700 py-2">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Card Body */}
                  <p className="text-gray-300 mb-8 flex-grow">{project.description}</p>
                  
                  {/* Card Footer */}
                  <div className="mt-auto">
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium">Learn More</span>
                      <svg 
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Submit Idea Button */}
        <div className="text-center">
          <motion.button
            className="btn px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 rounded-full shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Submit Your Idea
            </span>
          </motion.button>
        </div>
      </div>

      {/* CSS for background effects */}
      <style>{`
        .tech-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(75, 0, 130, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75, 0, 130, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
        }
        
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>
    </motion.section>
  );
};

export default IdeationLab; 