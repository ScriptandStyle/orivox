import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section-container bg-gray-900">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a question or want to collaborate? We'd love to hear from you.
          Reach out to us using the form below.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-300">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200"
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-300">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-gray-300">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-gray-300">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32 bg-gray-800 border-gray-700 text-gray-200"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>

          {/* Contact Information */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-indigo-400">Contact Information</h3>
            
            {/* Address */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-200 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Address
              </h4>
              <address className="not-italic text-gray-400 ml-7">
                Sri Eshwar College of Engineering<br />
                Coimbatore, Coimbatore<br />
                Tamil Nadu 641202<br />
                <span className="text-sm text-gray-500">Plus Code: R3H6+56 Kondampatty, Tamil Nadu</span>
              </address>
            </div>
            
            {/* Phone */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-200 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Phone
              </h4>
              <p className="text-gray-400 ml-7">
                <a href="tel:8778848565" className="hover:text-indigo-400 transition-colors duration-200">
                  8778848565
                </a>
              </p>
            </div>
            
            {/* Email */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-200 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email
              </h4>
              <p className="text-gray-400 ml-7">
                <a href="mailto:orivox8@gmail.com" className="hover:text-indigo-400 transition-colors duration-200">
                  orivox8@gmail.com
                </a>
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-200 mb-3">Connect With Us</h4>
              <div className="flex space-x-3 ml-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="btn btn-sm btn-circle bg-gray-700 hover:bg-indigo-600 text-gray-300 hover:text-white border border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Title */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-200">Find Us</h3>
          <p className="text-gray-400">Visit our campus in Coimbatore</p>
        </motion.div>

        {/* Map Iframe */}
        <motion.div 
          className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.328623418453!2d77.02332597584146!3d10.932802556997377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba866bd6aaaaaab%3A0xc650b8a75e7b51f0!2sSri%20Eshwar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1698579272386!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Eshwar College of Engineering Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 