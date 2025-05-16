import React from 'react';
import { motion } from 'framer-motion';

const ScriptStyle = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Computer Science Student',
      image: 'https://i.pravatar.cc/150?img=11',
      quote:
        'Script&Style helped me build my portfolio and land my first internship. The community is incredibly supportive!',
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Design Student',
      image: 'https://i.pravatar.cc/150?img=5',
      quote:
        'The platform connected me with amazing projects that helped me grow my design skills exponentially.',
    },
    {
      name: 'Michael Park',
      role: 'Web Development Student',
      image: 'https://i.pravatar.cc/150?img=8',
      quote:
        'Thanks to Script&Style, I was able to work on real projects while still in college. It\'s been an invaluable experience.',
    },
  ];

  const faqs = [
    {
      question: 'How does Script&Style work?',
      answer:
        'Script&Style connects college students with real-world projects, allowing them to gain experience while earning. Students can create portfolios, collaborate with peers, and access mentorship opportunities.',
    },
    {
      question: 'Who can join Script&Style?',
      answer:
        'Any college student with skills in programming, design, writing, or digital marketing can join. We verify student status through institutional email addresses.',
    },
    {
      question: 'What types of projects are available?',
      answer:
        'Projects range from web development and app design to content creation and digital marketing. We ensure all projects are student-friendly and provide learning opportunities.',
    },
    {
      question: 'How do you ensure project quality?',
      answer:
        'We have a thorough vetting process for both clients and projects. Each project is reviewed to ensure it matches our quality standards and provides fair compensation.',
    },
  ];

  return (
    <section id="scriptstyle" className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Script&Style</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering college students through our innovative freelancing ecosystem.
          Build your portfolio, gain experience, and earn while you learn.
        </p>
      </motion.div>

      {/* Testimonials Carousel */}
      <div className="mb-20">
        <div className="carousel w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <div className="flex flex-col items-center justify-center w-full px-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <blockquote className="text-lg text-gray-600 text-center max-w-2xl mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="font-semibold text-electric-violet">
                  {testimonial.name}
                </cite>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? testimonials.length : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${
                    index === testimonials.length - 1 ? 1 : index + 2
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="join join-vertical w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow join-item">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ScriptStyle; 