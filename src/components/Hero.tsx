import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Hero = () => {
  const features = [
    "Transparent Display", 
    "Student Innovation", 
    "Healthcare Tech", 
    "Space Solutions"
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gray-900 pt-20"
      id="hero"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"
          style={{ width: '100%', height: '100%', opacity: 0.2 }}
        />
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-1 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lottie Animation - Left Side */}
          <div className="hidden lg:block">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_iorpbol0.json"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
          {/* Text Content - Right Side - Static Version */}
          <div className="text-center lg:text-left">
            {/* Static Heading */}
            <div className="relative mb-4 md:mb-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight inline-block">
                  <span className="text-gray-200 relative">
                    See Beyond.
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-500"></span>
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden mt-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight inline-block">
                  <span className="text-gray-200 relative">
                    Build Beyond.
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500"></span>
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden mt-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-indigo-400 inline-block">
                    Orivox.
                  </span>
                </h1>
              </div>
            </div>
            
            {/* Static Description */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Pioneering the future through transparent displays, student innovation, and groundbreaking ideation in healthcare and space technology.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 md:mb-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="badge badge-outline badge-lg py-3 px-4 border-indigo-400 text-indigo-400 bg-gray-800/70 hover:bg-gray-700"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-12">
              <div>
                <Link
                  to="/services"
                  className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white btn-lg shadow-lg w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Discover Our Mission
                </Link>
              </div>
              
              <div>
                <Link
                  to="/about"
                  className="btn btn-outline border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white btn-lg glass w-full sm:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero; 