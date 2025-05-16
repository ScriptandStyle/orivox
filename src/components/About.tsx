<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
      });
    });
  }, []);

  const cards = [
    {
      title: 'Transparent Display Technology',
      description:
        'Revolutionizing visual technology with cutting-edge transparent displays. Our innovations bridge the gap between digital content and physical space.',
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Script&Style Freelancing',
      description:
        'Empowering college students through our innovative freelancing ecosystem. Build portfolios, share knowledge, and gain real-world experience.',
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Health & Space Ideation Lab',
      description:
        'A collaborative space where innovative ideas in healthcare and space technology come to life. Pushing boundaries and creating future solutions.',
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-container bg-gradient-to-b from-white to-cool-blue/10"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Orivox</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're a multi-domain startup pushing the boundaries of technology and
          innovation across different sectors.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">{card.icon}</div>
              <h3 className="card-title font-orbitron text-xl mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
      });
    });
  }, []);

  const cards = [
    {
      title: 'Transparent Display Technology',
      description:
        'Revolutionizing visual technology with cutting-edge transparent displays. Our innovations bridge the gap between digital content and physical space.',
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Script&Style Freelancing',
      description:
        'Empowering college students through our innovative freelancing ecosystem. Build portfolios, share knowledge, and gain real-world experience.',
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Health & Space Ideation Lab',
      description:
        'A collaborative space where innovative ideas in healthcare and space technology come to life. Pushing boundaries and creating future solutions.',
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-container bg-gradient-to-b from-white to-cool-blue/10"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Orivox</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're a multi-domain startup pushing the boundaries of technology and
          innovation across different sectors.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">{card.icon}</div>
              <h3 className="card-title font-orbitron text-xl mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default About; 