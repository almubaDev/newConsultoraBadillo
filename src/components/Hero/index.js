"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
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

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen flex items-center py-20 md:py-24"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="flex flex-col gap-8 md:gap-16 xl:gap-24 w-full">
          {/* FILA SUPERIOR: Logo grande | Título + Texto + Botones - SIN EFECTOS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* COLUMNA IZQUIERDA: Logo grande CENTRADO con movimiento flotante */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="flex justify-center items-center"
            >
              <Image
                src="/logo.png"
                alt="Consultora Badillo"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56"
              />
            </motion.div>

            {/* COLUMNA DERECHA: Título + Texto + Botones - SIN EFECTOS */}
            <div className="space-y-4 md:space-y-6 text-center xl:text-left">
              {/* Título */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] xl:leading-[1.1] font-jakarta font-bold text-primary">
                Consultora Badillo
              </h1>

              {/* Texto */}
              <p className="text-base md:text-lg xl:text-xl text-gray-600 leading-[150%] max-w-[680px] mx-auto xl:mx-0 px-4 md:px-0">
                Soluciones contables y tributarias integrales para tu empresa
              </p>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                <a
                  href="#contacto"
                  className="bg-accent-button text-white h-[50px] px-8 rounded-[14px] hover:bg-accent-button-hover shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center font-medium text-base w-full sm:w-[220px]"
                >
                  Contáctanos
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-primary text-primary h-[50px] px-8 rounded-[14px] hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center font-medium text-base w-full sm:w-[220px]"
                >
                  Nuestros Servicios
                </a>
              </div>
            </div>
          </div>

          {/* FILA INFERIOR: Fotos centradas - CON EFECTOS LIMPIOS */}
          <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full px-4 sm:px-0">
              {/* Foto Tamara */}
              <div className="relative flex items-center w-full sm:w-auto animate-fadeInUp">
                <div
                  className="relative rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-white z-10 w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                >
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 20%' }}
                    priority
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </div>
                <div className="bg-white rounded-r-[18px] shadow-md hover:shadow-lg transition-all duration-300 pl-16 md:pl-20 pr-4 md:pr-6 py-4 md:py-5 -ml-12 md:-ml-16 w-full sm:w-[350px] h-[110px] md:h-[150px] flex items-center">
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-bold text-primary mb-1">
                      {teamMembers[0].name}
                    </h3>
                    {teamMembers[0].titles.map((title, idx) => (
                      <p key={idx} className="text-[10px] md:text-xs font-semibold text-primary/80 leading-tight">
                        {title}
                      </p>
                    ))}
                    <p className="text-[10px] md:text-xs text-gray-600 mt-1">{teamMembers[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Foto Ellen */}
              <div className="relative flex items-center flex-row-reverse w-full sm:w-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div
                  className="relative rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-white z-10 w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                >
                  <Image
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 20%' }}
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </div>
                <div className="bg-white rounded-l-[18px] shadow-md hover:shadow-lg transition-all duration-300 pr-16 md:pr-20 pl-2 md:pl-3 py-4 md:py-5 -mr-12 md:-mr-16 w-full sm:w-[350px] h-[110px] md:h-[150px] flex items-center">
                  <div className="flex-1 pl-16 md:pl-20 text-right">
                    <h3 className="text-sm md:text-base font-bold text-primary mb-1">
                      {teamMembers[1].name}
                    </h3>
                    {teamMembers[1].titles.map((title, idx) => (
                      <p key={idx} className="text-[10px] md:text-xs font-semibold text-primary/80 leading-tight">
                        {title}
                      </p>
                    ))}
                    <p className="text-[10px] md:text-xs text-gray-600 mt-1">{teamMembers[1].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto adicional debajo de las fotos - CON EFECTO LIMPIO */}
            <p
              className="text-sm md:text-base xl:text-lg text-gray-600 text-center max-w-[900px] italic px-6 md:px-0 md:whitespace-nowrap animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-2xl md:text-3xl font-bold">"</span>Ayudando a nuestros clientes a optimizar sus procesos y cumplir con sus obligaciones fiscales.<span className="text-2xl md:text-3xl font-bold">"</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue - centrado al pie con animación */}
      <motion.div
        className="hidden xl:block absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-60"
        variants={chevronVariants}
        animate="animate"
      >
        <a
          href="#servicios"
          className="flex flex-col items-center gap-1 group cursor-pointer"
          aria-label="Desplazarse a servicios"
        >
          <svg
            className="w-6 h-6 text-primary group-hover:opacity-100 transition-opacity duration-300"
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
