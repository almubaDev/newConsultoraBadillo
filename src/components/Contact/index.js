"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSent(false);

    try {
      await emailjs.sendForm(
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
         e.target,
         process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setSent(true);
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    }
    setSending(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contacto" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12"
        >
          Contacto
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
        >
          {/* Información de contacto */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-4 md:space-y-6">
              <motion.a
                href="mailto:info@Consultorabadillo.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 md:gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent-button/20 rounded-full flex items-center justify-center group-hover:bg-accent-button/30 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-button" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-accent-button transition-colors duration-300">
                  info@consultorabadillo.com
                </span>
              </motion.a>

              <motion.a
                href={`https://wa.me/56963560612?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 md:gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent-button/20 rounded-full flex items-center justify-center group-hover:bg-accent-button/30 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-button" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-accent-button transition-colors duration-300">
                  +56 9 6356 0612
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <motion.input
                  type="text"
                  name="user_name"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    scale: focusedField === 'name' ? 1.02 : 1,
                  }}
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="user_email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    scale: focusedField === 'email' ? 1.02 : 1,
                  }}
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <motion.textarea
                  name="message"
                  required
                  rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                  }}
                  className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-black transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className="w-full bg-accent-button text-white py-3 sm:py-3.5 px-6 rounded-lg hover:bg-accent-button-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md hover:shadow-lg"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">¡Mensaje enviado con éxito!</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 sm:p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">Hubo un error. Por favor, intenta nuevamente.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;