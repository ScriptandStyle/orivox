<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import ScriptStyle from '../components/ScriptStyle';

const ScriptStylePage = () => {
  const studentServices = [
    {
      title: 'Final Year Project Websites',
      description: 'Turn your academic project into a professional-grade website, complete with design, documentation, and interactivity.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    {
      title: 'Personal Portfolios',
      description: 'Showcase your skills, resume, GitHub, and achievements with a responsive, modern portfolio site.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    {
      title: 'Blogs & Knowledge Spaces',
      description: 'Create your own blog or academic journal with easy-to-manage templates and built-in SEO.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
    },
    {
      title: 'One-on-One Consultation',
      description: 'Get guidance on UI/UX, hosting, domain setup, and branding from our design mentors.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
    },
  ];

  const startupServices = [
    {
      title: 'Mini-SaaS Projects by Students',
      description: 'Need a quick MVP? We\'ll connect you with student developers who can build it cost-effectively.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    {
      title: 'Club Websites & Event Pages',
      description: 'Promote college fests, tech talks, and club updates with interactive event sites and registration forms.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    },
    {
      title: 'Design + Dev + Strategy',
      description: 'We combine creative design, efficient development, and smart consulting – all powered by student freelancers.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const highlights = [
    {
      title: 'Student-Centric',
      description: 'Built by students, for students.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    },
    {
      title: 'Affordable & High Quality',
      description: 'Great design doesn\'t have to be expensive.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: 'Skill Growth',
      description: 'Get mentorship, practice real-world tools, and grow your freelance career.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      title: 'Innovation Hub',
      description: 'Explore unique freelance projects in emerging tech, education, and AI.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const testimonials = [
    {
      quote: "Script&Style helped me turn my project into a stunning portfolio piece that landed me internships!",
      author: "Akhil R., Final Year CS Student"
    },
    {
      quote: "The consultation was spot on. I now have my own blog and I'm growing my personal brand!",
      author: "Divya S., Blogger & Student Creator"
    }
  ];

  const statistics = [
    { label: 'Active Students', value: '5,000+' },
    { label: 'Universities', value: '200+' },
    { label: 'Projects Completed', value: '12,000+' },
    { label: 'Success Rate', value: '97%' },
  ];

  const partners = [
    'MIT', 'Stanford University', 'Google', 'Microsoft', 'Adobe', 'Facebook', 'Amazon', 'University of California'
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-cool-blue to-electric-violet py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Script&Style
          </motion.h1>
          <motion.div 
            className="text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">What is Script&Style?</h2>
            <p className="mb-6">
              Script&Style is a revolutionary freelancing ecosystem designed exclusively for college students and recent graduates. We bridge the gap between academic knowledge and industry experience by creating opportunities for young tech talent to work on real-world projects while building their professional portfolios.
            </p>
            <p className="mb-6">
              Our platform serves as both a launchpad for student careers and a talent pool for businesses seeking fresh, innovative perspectives. With Script&Style, students can monetize their coding, design, and content creation skills while gaining the professional experience employers value most.
            </p>
            <p>
              From building stunning portfolio websites and e-commerce platforms to developing custom applications, our network of student freelancers delivers high-quality, affordable solutions while developing the skills that will define their future careers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn btn-lg bg-white text-electric-violet hover:bg-cool-blue hover:text-white border-none">
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
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
              What We <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>

          {/* For Students */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 font-space-grotesk text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              For Students:
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-cool-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-space-grotesk">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Startups & Clubs */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 font-space-grotesk text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              For Startups & Clubs:
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-cool-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-space-grotesk">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Script&Style */}
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
              Why <span className="gradient-text">Script&Style?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-gradient-to-br from-electric-violet to-cool-blue p-6 rounded-xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center font-space-grotesk">{highlight.title}</h3>
                <p className="text-center">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="gradient-text">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 text-electric-violet">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.385 3.07a1 1 0 01.21 1.394l-.385.49c.704.456 1.31 1.064 1.755 1.8 1.44 2.355 1.384 5.42-.168 7.718-.397.598-.774 1.017-1.233 1.243-.437.218-.91.33-1.494.33h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2.5c.464 0 .812-.203 1.005-.587.247-.49.231-1.175-.071-1.836-.535-1.135-1.904-1.907-3.354-1.907h-.9a1 1 0 01-1-1v-1a1 1 0 011-1h2.93zM19.385 3.07a1 1 0 01.21 1.394l-.388.49c.706.456 1.313 1.064 1.758 1.8 1.44 2.355 1.384 5.42-.168 7.718-.397.598-.773 1.017-1.233 1.243-.437.218-.91.33-1.494.33h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2.5c.464 0 .812-.203 1.005-.587.247-.49.231-1.175-.071-1.836-.535-1.135-1.904-1.907-3.354-1.907h-.9a1 1 0 01-1-1v-1a1 1 0 011-1h2.93z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-electric-violet">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-b from-cool-blue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-electric-violet mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cool-blue to-electric-violet text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Let's Build Together!</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're a student looking to shine, or a college club needing an online presence — Script&Style is your creative engine.
            </p>
            <p className="text-xl font-bold mb-10">
              Start your journey today. Let's script your story and style your future.
            </p>
            <button className="btn btn-lg bg-white text-electric-violet hover:bg-cool-blue/20 hover:text-white">
              Join Script&Style
            </button>
          </motion.div>
        </div>
      </section>

      {/* Original Component */}
      <ScriptStyle />
    </div>
  );
};

=======
import React from 'react';
import { motion } from 'framer-motion';
import ScriptStyle from '../components/ScriptStyle';

const ScriptStylePage = () => {
  const studentServices = [
    {
      title: 'Final Year Project Websites',
      description: 'Turn your academic project into a professional-grade website, complete with design, documentation, and interactivity.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    {
      title: 'Personal Portfolios',
      description: 'Showcase your skills, resume, GitHub, and achievements with a responsive, modern portfolio site.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    },
    {
      title: 'Blogs & Knowledge Spaces',
      description: 'Create your own blog or academic journal with easy-to-manage templates and built-in SEO.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
    },
    {
      title: 'One-on-One Consultation',
      description: 'Get guidance on UI/UX, hosting, domain setup, and branding from our design mentors.',
      icon: <svg className="w-6 h-6 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
    },
  ];

  const startupServices = [
    {
      title: 'Mini-SaaS Projects by Students',
      description: 'Need a quick MVP? We\'ll connect you with student developers who can build it cost-effectively.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    },
    {
      title: 'Club Websites & Event Pages',
      description: 'Promote college fests, tech talks, and club updates with interactive event sites and registration forms.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    },
    {
      title: 'Design + Dev + Strategy',
      description: 'We combine creative design, efficient development, and smart consulting – all powered by student freelancers.',
      icon: <svg className="w-6 h-6 text-cool-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const highlights = [
    {
      title: 'Student-Centric',
      description: 'Built by students, for students.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    },
    {
      title: 'Affordable & High Quality',
      description: 'Great design doesn\'t have to be expensive.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: 'Skill Growth',
      description: 'Get mentorship, practice real-world tools, and grow your freelance career.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      title: 'Innovation Hub',
      description: 'Explore unique freelance projects in emerging tech, education, and AI.',
      icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    },
  ];

  const testimonials = [
    {
      quote: "Script&Style helped me turn my project into a stunning portfolio piece that landed me internships!",
      author: "Akhil R., Final Year CS Student"
    },
    {
      quote: "The consultation was spot on. I now have my own blog and I'm growing my personal brand!",
      author: "Divya S., Blogger & Student Creator"
    }
  ];

  const statistics = [
    { label: 'Active Students', value: '5,000+' },
    { label: 'Universities', value: '200+' },
    { label: 'Projects Completed', value: '12,000+' },
    { label: 'Success Rate', value: '97%' },
  ];

  const partners = [
    'MIT', 'Stanford University', 'Google', 'Microsoft', 'Adobe', 'Facebook', 'Amazon', 'University of California'
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-cool-blue to-electric-violet py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Script&Style
          </motion.h1>
          <motion.div 
            className="text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">What is Script&Style?</h2>
            <p className="mb-6">
              Script&Style is a revolutionary freelancing ecosystem designed exclusively for college students and recent graduates. We bridge the gap between academic knowledge and industry experience by creating opportunities for young tech talent to work on real-world projects while building their professional portfolios.
            </p>
            <p className="mb-6">
              Our platform serves as both a launchpad for student careers and a talent pool for businesses seeking fresh, innovative perspectives. With Script&Style, students can monetize their coding, design, and content creation skills while gaining the professional experience employers value most.
            </p>
            <p>
              From building stunning portfolio websites and e-commerce platforms to developing custom applications, our network of student freelancers delivers high-quality, affordable solutions while developing the skills that will define their future careers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="btn btn-lg bg-white text-electric-violet hover:bg-cool-blue hover:text-white border-none">
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
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
              What We <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>

          {/* For Students */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 font-space-grotesk text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              For Students:
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-cool-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-space-grotesk">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Startups & Clubs */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 font-space-grotesk text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              For Startups & Clubs:
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-cool-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-space-grotesk">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Script&Style */}
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
              Why <span className="gradient-text">Script&Style?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-gradient-to-br from-electric-violet to-cool-blue p-6 rounded-xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center font-space-grotesk">{highlight.title}</h3>
                <p className="text-center">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="gradient-text">Testimonials</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 text-electric-violet">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.385 3.07a1 1 0 01.21 1.394l-.385.49c.704.456 1.31 1.064 1.755 1.8 1.44 2.355 1.384 5.42-.168 7.718-.397.598-.774 1.017-1.233 1.243-.437.218-.91.33-1.494.33h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2.5c.464 0 .812-.203 1.005-.587.247-.49.231-1.175-.071-1.836-.535-1.135-1.904-1.907-3.354-1.907h-.9a1 1 0 01-1-1v-1a1 1 0 011-1h2.93zM19.385 3.07a1 1 0 01.21 1.394l-.388.49c.706.456 1.313 1.064 1.758 1.8 1.44 2.355 1.384 5.42-.168 7.718-.397.598-.773 1.017-1.233 1.243-.437.218-.91.33-1.494.33h-2a1 1 0 01-1-1v-3a1 1 0 011-1h2.5c.464 0 .812-.203 1.005-.587.247-.49.231-1.175-.071-1.836-.535-1.135-1.904-1.907-3.354-1.907h-.9a1 1 0 01-1-1v-1a1 1 0 011-1h2.93z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-electric-violet">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-b from-cool-blue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-electric-violet mb-2 font-orbitron">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cool-blue to-electric-violet text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Let's Build Together!</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're a student looking to shine, or a college club needing an online presence — Script&Style is your creative engine.
            </p>
            <p className="text-xl font-bold mb-10">
              Start your journey today. Let's script your story and style your future.
            </p>
            <button className="btn btn-lg bg-white text-electric-violet hover:bg-cool-blue/20 hover:text-white">
              Join Script&Style
            </button>
          </motion.div>
        </div>
      </section>

      {/* Original Component */}
      <ScriptStyle />
    </div>
  );
};

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default ScriptStylePage; 