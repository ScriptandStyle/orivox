import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ email: '', message: '' });
    setIsOpen(false);
    // You can add actual form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80"
          >
            <div className="card bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-black/40">
              <div className="card-body p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="card-title text-lg font-bold text-gray-200 font-orbitron">Contact Us</h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-sm btn-ghost text-gray-400 hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-400 mb-4 text-sm">Interested in our services? Let's connect!</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300 text-sm">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="input input-bordered bg-gray-700/50 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-700"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300 text-sm">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered bg-gray-700/50 border-gray-600 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-700 h-20"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105"
                    >
                      <span className="mr-2">📧</span>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-circle btn-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      </motion.button>
    </div>
  );
};

export default FloatingContactButton; 