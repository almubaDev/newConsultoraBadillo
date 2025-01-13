"use client";
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="inicio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Contenido */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Consultora Badillo
            </h1>
            <h4 className=" text-primary font-bold mb-6">Soluciones contables y tributarias integrales para tu empresa</h4>
           
            <p className="text-gray-600 mb-8">
              Ofrecemos servicios profesionales especializados en contabilidad, 
              tributación y asesoría PYME, ayudando a nuestros clientes a 
              optimizar sus procesos y cumplir con sus obligaciones fiscales.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contacto" 
                className="bg-[#aac3c0] text-white px-6 py-3 rounded-md hover:bg-[#aac3c0]/90 transition-opacity duration-200"
              >
                Contáctanos
              </a>
              <a 
                href="#servicios" 
                className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors duration-200"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>

          {/* Imágenes en línea */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-48 h-64 relative rounded-lg overflow-hidden shadow-xl mb-2">
                <Image
                  src="/tamara.jpg"
                  alt="Tamara"
                  width={192}
                  height={256}
                  className="object-contain bg-gray-100"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">Tamara Badillo</h3>
                <h6 className="text-sm font-semibold text-primary">Mg. en Dirección Tributaria</h6>
                <h6 className="text-sm font-semibold text-primary">Contador Auditor</h6>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-48 h-64 relative rounded-lg overflow-hidden shadow-xl mb-2">
                <Image
                  src="/ellen.jpg"
                  alt="Ellen"
                  width={192}
                  height={256}
                  className="object-contain bg-gray-100"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">Ellen Barraza</h3>
                <h6 className="text-sm font-semibold text-primary">Técnico en Contabilidad</h6>
                <p className="text-sm text-gray-600">Asistente Administrativa Contable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;