import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import FloatingContactButton from '../components/FloatingContactButton';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-900">
      <motion.div
        className="container mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-orbitron">
          <span className="gradient-text">Contact Us</span>
        </h1>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          We value your feedback, inquiries, and collaboration opportunities. Our team is ready to assist you with any questions you may have about our ventures, services, or partnership possibilities.
        </p>
      </motion.div>
      
      <Contact />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default ContactPage; 