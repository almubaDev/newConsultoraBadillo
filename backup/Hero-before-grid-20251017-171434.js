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
          className="flex flex-col gap-12 max-w-7xl mx-auto"
        >
          {/* FILA SUPERIOR: Izquierda (Antetítulo + Logo + Título) | Derecha (Botones) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* COLUMNA IZQUIERDA: Antetítulo + Logo + Título */}
            <div className="space-y-4">
              {/* Antetítulo */}
              <motion.h2
                className="text-sm sm:text-base text-primary font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Soluciones contables y tributarias integrales para tu empresa
              </motion.h2>

              {/* Logo + Título */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src="/logo.png"
                  alt="Consultora Badillo"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Consultora Badillo
                </h1>
              </motion.div>
            </div>

            {/* COLUMNA DERECHA: Botones */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
          </div>

          {/* FILA INFERIOR: Fotos izquierda | Texto derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8">
            {/* COLUMNA IZQUIERDA: Fotos del equipo en círculos con info extendida */}
            <div className="flex flex-col gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="relative flex items-center group"
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                >
                  {/* Foto circular - más grande para contener mejor la imagen */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 flex-shrink-0 z-10 border-4 border-white">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: '50% 20%' }}
                      priority={index === 0}
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                    />
                  </div>

                  {/* Etiqueta extendida desde el círculo - sin card separado */}
                  <div className="absolute left-24 sm:left-28 md:left-32 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm pl-10 pr-6 py-3 rounded-r-lg shadow-lg group-hover:shadow-xl transition-all duration-300 min-w-[200px] sm:min-w-[220px]">
                    <h3 className="text-sm sm:text-base font-bold text-primary group-hover:text-primary-light transition-colors duration-300 whitespace-nowrap">
                      {member.name}
                    </h3>
                    {member.titles.map((title, idx) => (
                      <p key={idx} className="text-xs sm:text-sm font-semibold text-primary/80">
                        {title}
                      </p>
                    ))}
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* COLUMNA DERECHA: Texto descriptivo */}
            <motion.div
              variants={itemVariants}
              className="flex items-center"
            >
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Ofrecemos servicios profesionales especializados en contabilidad,
                tributación y asesoría PYME, ayudando a nuestros clientes a
                optimizar sus procesos y cumplir con sus obligaciones fiscales.
              </motion.p>
            </motion.div>
          </div>
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