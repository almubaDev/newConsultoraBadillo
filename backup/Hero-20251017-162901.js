"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const teamMembers = [
    {
      name: 'Tamara Badillo',
      image: '/tamara.jpg',
      titles: ['Mg. en Dirección Tributaria', 'Contador Auditor'],
      role: 'CEO',
    },
    {
      name: 'Ellen Barraza',
      image: '/ellen.jpg',
      titles: ['Técnico en Contabilidad'],
      role: 'Asistente Administrativa Contable',
    },
  ];

  const chevronVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen lg:h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center justify-center max-w-7xl mx-auto"
        >
          {/* Contenido */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Consultora Badillo
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soluciones contables y tributarias integrales para tu empresa
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ofrecemos servicios profesionales especializados en contabilidad,
              tributación y asesoría PYME, ayudando a nuestros clientes a
              optimizar sus procesos y cumplir con sus obligaciones fiscales.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent-button text-white px-8 py-4 rounded-lg hover:bg-accent-button-hover shadow-lg hover:shadow-xl transition-all duration-300 text-center font-medium text-lg"
              >
                Contáctanos
              </motion.a>
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center font-medium text-lg"
              >
                Nuestros Servicios
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imágenes del equipo - Responsive */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center lg:items-start"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="flex flex-col items-center group"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
              >
                <div className="w-48 h-60 sm:w-52 sm:h-64 md:w-56 md:h-72 lg:w-60 lg:h-80 relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index === 0}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 208px, (max-width: 1024px) 224px, 240px"
                  />
                </div>
                <div className="text-center mt-4 relative z-20">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 group-hover:text-primary-light transition-colors duration-300">
                    {member.name}
                  </h3>
                  {member.titles.map((title, idx) => (
                    <h6 key={idx} className="text-sm sm:text-base font-semibold text-primary/80">
                      {title}
                    </h6>
                  ))}
                  <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Chevron animado - Solo visible en desktop */}
      <motion.div
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={chevronVariants}
        animate="animate"
      >
        <a
          href="#servicios"
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Desplazarse a servicios"
        >
          <span className="text-primary text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            Descubre más
          </span>
          {/* Chevron minimalista - solo la V invertida */}
          <svg
            className="w-10 h-10 text-primary opacity-70 group-hover:opacity-100 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;