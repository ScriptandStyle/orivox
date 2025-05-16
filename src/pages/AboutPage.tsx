import React from 'react';
import { motion } from 'framer-motion';
import FloatingContactButton from '../components/FloatingContactButton';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const timelineEvents = [
    {
      year: '2024 Jan',
      title: 'Foundation',
      description: 'Orivox was founded as a multi-domain startup with a focus on transparent display technology, student freelancing, and healthcare/space innovation.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">24</div>
    },
    {
      year: '2024 Mar',
      title: 'CrystalView Concept',
      description: 'Development of our transparent display concept and initial technical specifications.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-electric-violet rounded-full flex items-center justify-center text-white font-bold">CV</div>
    },
    {
      year: '2024 Jun',
      title: 'Script&Style Launch',
      description: 'Launched our freelancing ecosystem for college students, providing a platform for young talent to gain real-world experience.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-electric-violet to-cool-blue rounded-full flex items-center justify-center text-white font-bold">S&S</div>
    },
    {
      year: '2024 Sep',
      title: 'Ideation Lab Formation',
      description: 'Established our Ideation Lab focused on healthcare and space innovations, bringing together experts from various disciplines.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-cool-blue to-accent-neon rounded-full flex items-center justify-center text-white font-bold">IL</div>
    },
    {
      year: '2024 Dec',
      title: 'First Investor Pitch',
      description: 'Successfully secured initial funding after presenting our multi-domain approach and early prototypes.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-accent-neon to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">IP</div>
    },
    {
      year: '2025 Mar',
      title: 'CrystalView Prototype',
      description: 'Completed our first functional transparent display prototype, showcasing revolutionary integration possibilities.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">CP</div>
    },
    {
      year: '2025 Jun',
      title: 'Global Partnerships',
      description: 'Established key partnerships with universities and research institutions across Asia, Europe, and North America.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-electric-violet rounded-full flex items-center justify-center text-white font-bold">GP</div>
    },
    {
      year: '2025 Oct',
      title: 'Market Expansion',
      description: 'Expanded all three domains of our business, reaching students in 50+ universities and developing industrial partnerships for our technology.',
      avatar: <div className="w-10 h-10 bg-gradient-to-br from-electric-violet to-cool-blue rounded-full flex items-center justify-center text-white font-bold">ME</div>
    }
  ];

  const coreValues = [
    {
      title: 'Innovation Without Boundaries',
      description: "We believe in pushing the limits of what's possible, constantly exploring new territories and ideas.",
      icon: <svg className="w-8 h-8 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    },
    {
      title: 'Collaborative Excellence',
      description: 'We thrive on collaboration, bringing together diverse perspectives to create exceptional results.',
      icon: <svg className="w-8 h-8 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    },
    {
      title: 'Empowering Education',
      description: "We're committed to empowering the next generation through knowledge sharing and real-world opportunities.",
      icon: <svg className="w-8 h-8 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
    },
    {
      title: 'Human-Centered Design',
      description: 'We place humans at the center of all our innovations, ensuring technology serves people in meaningful ways.',
      icon: <svg className="w-8 h-8 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    },
  ];

  const leadershipTeam = [
    {
      name: 'Aswin Krishna C.P',
      role: 'Team Member',
      bio: 'EEE Engineer with expertise in transparent display technologies.',
      contact: '8807301284',
      email: 'aswinkrishna.cp2023eee@sece.ac.in',
      linkedin: 'https://www.linkedin.com/in/aswin-krishna-c-p-6b78612bb',
      avatar: (
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-800 to-cool-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AK
        </div>
      )
    },
    {
      name: 'Aswini M S',
      role: 'Team Member',
      bio: 'Electrical and electronics engineering specialist focusing on innovative display solutions.',
      contact: '7010917929',
      email: 'aswini.ms2023eee@sece.ac.in',
      linkedin: 'https://linkedin.com/in/aswini-m-s-8b10a8310',
      avatar: (
        <div className="w-24 h-24 bg-gradient-to-br from-cool-blue to-electric-violet rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AM
        </div>
      )
    },
    {
      name: 'Anu Priya D',
      role: 'Team Member',
      bio: 'Leading our freelancing platform with a focus on connecting college students with industry projects.',
      contact: '7358152723',
      email: 'anupriya.d2023eee@sece.ac.in',
      linkedin: 'https://linkedin.com/in/anu-jesaura2027',
      avatar: (
        <div className="w-24 h-24 bg-gradient-to-br from-electric-violet to-accent-neon rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AP
        </div>
      )
    },
    {
      name: 'Bala Mugesh M K',
      role: 'Team Member',
      bio: 'Spearheading research and innovation in healthcare and space technology applications.',
      contact: '8778848565',
      email: 'balamugesh.mk2023eee@sece.ac.in',
      linkedin: 'https://www.linkedin.com/in/bala-mugesh-m-k',
      avatar: (
        <div className="w-24 h-24 bg-gradient-to-br from-accent-neon to-cool-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
          BM
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron text-gray-200">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            From a simple idea to a multi-domain innovation hub – discover how Orivox is shaping the future across technology, education, healthcare, and space exploration.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-electric-violet to-accent-neon mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk text-gray-200">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To create innovative solutions that bridge the gap between imagination and reality, empowering people to achieve their full potential through technology, education, and collaborative exploration.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk text-gray-200">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where technology seamlessly integrates with human experience, where students have equal access to opportunities, and where innovations in healthcare and space exploration improve life on Earth and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The evolution of Orivox from concept to reality, marking our key milestones along the way.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric-violet to-accent-neon rounded-full"></div>
            
            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year} 
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600">
                    <h3 className="text-2xl font-bold text-electric-violet mb-2 font-space-grotesk">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold z-10 overflow-hidden border border-gray-600">
                    {event.avatar}
                  </div>
                </div>
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="py-2">
                    <span className="text-sm font-medium text-indigo-300 bg-indigo-900 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Orivox.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex bg-gray-700 p-6 rounded-xl shadow-md border border-gray-600"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mr-4 bg-electric-violet/20 p-4 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-space-grotesk text-gray-200">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-gray-200">
              Our <span className="gradient-text">Founding Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries behind Orivox who are bringing our multi-domain approach to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-4 text-center">
                  <div className="mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-200">{member.name}</h3>
                  <p className="text-indigo-400 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-300 mb-3 text-sm">{member.bio}</p>
                  
                  <div className="mt-3 border-t border-gray-600 pt-3">
                    <div className="flex items-center justify-center gap-3">
                      <a href={`tel:${member.contact}`} className="text-gray-300 hover:text-electric-violet transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-electric-violet transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                        </svg>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-violet transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="absolute z-0 opacity-10" width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#fff"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-orbitron">Ready to Join Our Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with us to explore partnership opportunities, careers, or just to learn more about what we're building.
            </p>
            <Link to="/contact" className="btn btn-lg glass text-white border-white hover:bg-white/20">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default AboutPage;