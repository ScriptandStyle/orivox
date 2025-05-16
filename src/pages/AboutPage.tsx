<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';

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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-cool-blue/20 py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            From a simple idea to a multi-domain innovation hub – discover how Orivox is shaping the future across technology, education, healthcare, and space exploration.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-electric-violet to-accent-neon mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create innovative solutions that bridge the gap between imagination and reality, empowering people to achieve their full potential through technology, education, and collaborative exploration.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where technology seamlessly integrates with human experience, where students have equal access to opportunities, and where innovations in healthcare and space exploration improve life on Earth and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-cool-blue/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-electric-violet mb-2 font-space-grotesk">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold z-10 overflow-hidden">
                    {event.avatar}
                  </div>
                </div>
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="py-2">
                    <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Orivox.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mr-4 bg-cool-blue/20 p-4 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-space-grotesk">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-white to-cool-blue/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our <span className="gradient-text">Founding Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind Orivox who are bringing our multi-domain approach to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-1 font-space-grotesk">{member.name}</h3>
                <p className="text-electric-violet font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>📱 {member.contact}</p>
                  <p>📧 {member.email}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cool-blue hover:text-electric-violet transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-electric-violet to-accent-neon text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Join Our Journey</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Be part of a multi-domain innovator that's addressing challenges across display technology, student empowerment, and future-focused research.
            </p>
            <button className="btn btn-lg glass text-white hover:bg-white/20">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

=======
import React from 'react';
import { motion } from 'framer-motion';

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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-cool-blue/20 py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            From a simple idea to a multi-domain innovation hub – discover how Orivox is shaping the future across technology, education, healthcare, and space exploration.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-electric-violet to-accent-neon mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create innovative solutions that bridge the gap between imagination and reality, empowering people to achieve their full potential through technology, education, and collaborative exploration.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where technology seamlessly integrates with human experience, where students have equal access to opportunities, and where innovations in healthcare and space exploration improve life on Earth and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-cool-blue/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-electric-violet mb-2 font-space-grotesk">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold z-10 overflow-hidden">
                    {event.avatar}
                  </div>
                </div>
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="py-2">
                    <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Orivox.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mr-4 bg-cool-blue/20 p-4 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-space-grotesk">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-white to-cool-blue/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our <span className="gradient-text">Founding Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind Orivox who are bringing our multi-domain approach to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-1 font-space-grotesk">{member.name}</h3>
                <p className="text-electric-violet font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>📱 {member.contact}</p>
                  <p>📧 {member.email}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cool-blue hover:text-electric-violet transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-electric-violet to-accent-neon text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Join Our Journey</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Be part of a multi-domain innovator that's addressing challenges across display technology, student empowerment, and future-focused research.
            </p>
            <button className="btn btn-lg glass text-white hover:bg-white/20">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default AboutPage;