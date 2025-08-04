import React from 'react';
import { Link } from 'react-router-dom';
import FloatingContactButton from '../components/FloatingContactButton';

const CrystalViewPitchDeck = () => {
  return (
    <div className="pitch-deck-container">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-r from-accent-neon to-cool-blue pt-20">
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">CrystalView</h1>
            <p className="text-2xl font-medium mb-4">Smart. Seamless. See-Through.</p>
            <p className="text-xl mb-8 italic">"See Through Innovation – Experience the Future Without Obstruction."</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="#project-overview" className="btn btn-lg btn-primary">Learn More</Link>
              <Link to="#contact" className="btn btn-lg btn-outline btn-secondary">Get in Touch</Link>
            </div>
            <div className="mt-12 text-sm opacity-80">
              <p>Sri Eshwar College of Engineering, Orivox Startup</p>
              <p>Ideathon 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project-overview" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl font-orbitron mb-8 text-center">Project Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Objective:</h3>
                <p className="text-lg">
                  To create a cost-effective, energy-efficient transparent display technology that blends seamlessly with environments—retail, vehicles, homes, and smart cities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: "Transparent OLED/microLED",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  },
                  {
                    title: "Modular and scalable",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                  },
                  {
                    title: "AR integration ready",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  },
                  {
                    title: "IoT-compatible",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  },
                  {
                    title: "Energy-efficient",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  },
                  {
                    title: "Aesthetic design",
                    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  }
                ].map((feature, index) => (
                  <div key={index} className="stat bg-base-200 shadow rounded-box">
                    <div className="stat-figure text-primary">
                      {feature.icon}
                    </div>
                    <div className="stat-title text-primary-content">Key Feature</div>
                    <div className="stat-value text-lg">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Market Opportunity */}
      <section id="problem" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl font-orbitron mb-6 text-error">The Problem</h2>
                <div className="space-y-4">
                  {[
                    "Obstruct view and require dedicated space",
                    "Not aesthetically integrated with modern environments",
                    "Consume significant energy",
                    "Limited contextual or ambient interaction"
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start">
                      <div className="badge badge-error mr-2 mt-1">❌</div>
                      <p className="text-base-content">{problem}</p>
                    </div>
                  ))}
                  <div className="alert alert-info mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Need: A next-gen display that communicates without intruding.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Market Opportunity */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl font-orbitron mb-6 text-success">Market Opportunity</h2>
                <div className="space-y-4">
                  {[
                    "Smart Cities Mission (India): 100+ cities",
                    "Electric Vehicle Boom: Need for smart HUDs",
                    "AR/VR Healthcare tools on the rise",
                    "Retail: Shift to immersive customer experience",
                    "Global Market: $10B+ by 2030"
                  ].map((opportunity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="badge badge-success mr-2 mt-1">🚀</div>
                      <p className="text-base-content">{opportunity}</p>
                    </div>
                  ))}
                  <div className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>CrystalView is a cross-sector innovation with massive demand.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Proposed Solution & Methodology */}
      <section id="solution" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-orbitron text-center mb-16">Proposed Solution & Methodology</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Solution */}
            <div className="flex-1">
              <div className="card bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                  <h3 className="text-2xl font-bold mb-6">CrystalView Solution</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-primary-content bg-opacity-30 p-2 rounded-full mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Glass + Smart Display</h4>
                        <p>Transparent OLED/microLED that doubles as a smart display</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-primary-content bg-opacity-30 p-2 rounded-full mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Smart Visibility</h4>
                        <p>Shows only when needed, with contextual AR overlays</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-primary-content bg-opacity-30 p-2 rounded-full mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Universal Compatibility</h4>
                        <p>Easily embedded into windows, mirrors, helmets, car windshields</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-primary-content bg-opacity-30 p-2 rounded-full mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">IoT Ready</h4>
                        <p>Modular controller with IoT capabilities for smart interactions</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Methodology */}
            <div className="flex-1">
              <div className="card bg-neutral text-neutral-content shadow-xl">
                <div className="card-body">
                  <h3 className="text-2xl font-bold mb-6">Methodology</h3>
                  
                  <div className="space-y-6">
                    <div className="collapse collapse-plus bg-neutral-focus rounded-box">
                      <input type="checkbox" defaultChecked /> 
                      <div className="collapse-title text-xl font-medium">
                        <div className="badge badge-secondary mr-2">1</div> 
                        Phase 1: MVP Build
                      </div>
                      <div className="collapse-content"> 
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Integrate transparent panel + controller (local prototyping)</li>
                          <li>Display driver + basic UI control logic</li>
                          <li>Initial power management system</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="collapse collapse-plus bg-neutral-focus rounded-box">
                      <input type="checkbox" /> 
                      <div className="collapse-title text-xl font-medium">
                        <div className="badge badge-secondary mr-2">2</div> 
                        Phase 2: Smart Integration
                      </div>
                      <div className="collapse-content"> 
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Add sensors for ambient light and motion detection</li>
                          <li>Optimize power usage with sleep/wake cycles</li>
                          <li>Expand interface capabilities</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="collapse collapse-plus bg-neutral-focus rounded-box">
                      <input type="checkbox" /> 
                      <div className="collapse-title text-xl font-medium">
                        <div className="badge badge-secondary mr-2">3</div> 
                        Phase 3: AR/IoT Expansion
                      </div>
                      <div className="collapse-content"> 
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Connect to cloud/IoT platform for real-time data</li>
                          <li>Enable AR interaction through camera/display sync</li>
                          <li>Develop industry-specific applications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-neutral-focus">
                    <h4 className="font-bold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="badge badge-outline">Transparent OLED</div>
                      <div className="badge badge-outline">microLED</div>
                      <div className="badge badge-outline">ESP32/RPi</div>
                      <div className="badge badge-outline">Smart Controller</div>
                      <div className="badge badge-outline">AR Layer</div>
                      <div className="badge badge-outline">Modular Firmware</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Analysis */}
      <section id="market-analysis" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-orbitron text-center mb-16">Market Analysis</h2>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Sector</th>
                      <th>Opportunity Size (India)</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Automotive</td>
                      <td>₹10,000 Cr+</td>
                      <td>HUDs, dashboards, passenger windows</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Retail</td>
                      <td>₹7,000 Cr+</td>
                      <td>Storefronts, info panels, interactive displays</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Smart Cities</td>
                      <td>₹15,000 Cr+</td>
                      <td>ATMs, kiosks, bus stops, public information</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Healthcare</td>
                      <td>₹5,000 Cr+</td>
                      <td>AR surgery glass, patient info overlays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="alert alert-info mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>CrystalView sits at the intersection of IoT, AR, and transparent interface innovation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cost Analysis & Comparison */}
      <section id="cost-analysis" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-orbitron text-center mb-16">Cost Analysis & Comparison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Low-Cost",
                cost: "₹8K–₹15K",
                useCase: "Smart homes, education",
                color: "success",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              },
              {
                tier: "Balanced",
                cost: "₹25K–₹45K",
                useCase: "Automotive HUDs, retail panels",
                color: "primary",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              },
              {
                tier: "High-End",
                cost: "₹70K–₹1.2L",
                useCase: "Aviation, defense, smart hospitals",
                color: "secondary",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
              }
            ].map((tier, index) => (
              <div key={index} className={`card bg-${tier.color} text-${tier.color}-content shadow-xl`}>
                <div className="card-body">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="card-title text-2xl">{tier.tier}</h3>
                    <div className={`bg-${tier.color}-content bg-opacity-20 p-2 rounded-full`}>
                      {tier.icon}
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold mb-4">{tier.cost}</div>
                  
                  <p className="text-lg">{tier.useCase}</p>
                  
                  <div className="card-actions mt-6">
                    <button className={`btn btn-outline btn-${tier.color}-content`}>Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card bg-base-100 shadow-xl mt-12 border border-primary">
            <div className="card-body">
              <h3 className="card-title text-center text-xl mb-4">Cost Advantage</h3>
              <p className="text-center">
                CrystalView uses modular design and local sourcing to keep costs lower than global alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default CrystalViewPitchDeck; 