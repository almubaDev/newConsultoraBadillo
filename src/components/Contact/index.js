"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

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

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@Consultorabadillo.com" className="text-gray-700 hover:text-primary">
                  info@consultorabadillo.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`https://wa.me/56963560612?text=${encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo.')}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                  +56 9 6356 0612
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-black"
                  
              />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-black"

                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#aac3c0] text-white py-3 px-6 rounded-md hover:bg-[#aac3c0]/90 transition-colors duration-200 disabled:opacity-50"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>

              {sent && (
                <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
              )}

              {error && (
                <p className="text-red-600 text-center">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;