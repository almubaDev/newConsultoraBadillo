"use client";
import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('contables');
  const [openMobile, setOpenMobile] = useState(null);

  const services = {
    contables: {
      title: 'Servicios Contables',
      items: [
        'Registro de operaciones en sistema contable',
        'Confección y presentación de los impuestos mensuales, F29 y F50',
        'Preparación de informes financieros periódicos, estado de flujos, Balance y Estado de Resultados',
        'Preparación y presentación de Declaraciones Juradas Operación Renta',
        'Confección y presentación F22 - declaración de renta empresa, socios y personas naturales',
        'Término de giro'
      ]
    },
    tributarios: {
      title: 'Gestión Tributaria',
      items: [
        'Consultoría Tributaria',
        'Estudio de estructura y carga tributaria actual',
        'Planificación y optimización tributaria de acuerdo a la Ley',
        'Asesoría y gestión directa en proceso de fiscalización del SII',
        'Estudio de regímenes tributarios adecuado según necesidades y estructura de cada cliente',
        'Diagnóstico situación tributaria actual de la empresa',
        'Revisión de impuestos mensuales',
        'Revisión de impuestos anuales',
        'Revisión de declaraciones juradas',
        'Revisión de registros tributarios exigidos por Ley'
      ]
    },
    pyme: {
      title: 'Asesoría PYME',
      items: [
        'Consultoría de orientación',
        'Inicio de actividades',
        'Análisis de regímenes y beneficios tributarios que se ajusten a su perfil de empresa',
        'Registro de operaciones contable',
        'Confección de declaraciones mensuales',
        'Presentación declaraciones operación renta',
        'Diseño y despliege de Landing Page y Sitio Web',
        'Desarrollo de aplicaciones y soluciones Web para su empresa',
      ]
    }
  };

  const toggleMobile = (service) => {
    setOpenMobile(openMobile === service ? null : service);
  };

  return (
    <section id="servicios" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
          Nuestros Servicios
        </h2>

        {/* Desktop Layout - Tabs a la izquierda, contenido a la derecha */}
        <div className="hidden md:grid md:grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto">
          {/* Tabs verticales a la izquierda */}
          <div className="flex flex-col gap-4">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className={`px-6 py-4 rounded-lg transition-all duration-300 text-left font-medium ${
                  activeTab === service
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-primary hover:bg-gray-200'
                }`}
              >
                {services[service].title}
              </button>
            ))}
          </div>

          {/* Contenido a la derecha */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
            <ul className="space-y-3">
              {services[activeTab].items.map((item, index) => (
                <li
                  key={`${activeTab}-${index}`}
                  className="text-base text-gray-700 leading-relaxed opacity-0 animate-fadeIn bg-white px-3 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout - Dropdown/Accordion */}
        <div className="md:hidden space-y-4">
          {Object.keys(services).map((service) => (
            <div key={service} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Header del dropdown */}
              <button
                onClick={() => toggleMobile(service)}
                className={`w-full px-6 py-4 text-left font-medium transition-all duration-300 flex items-center justify-between ${
                  openMobile === service
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 text-primary hover:bg-gray-100'
                }`}
              >
                <span>{services[service].title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openMobile === service ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Contenido del dropdown */}
              {openMobile === service && (
                <div className="overflow-hidden">
                  <ul className="px-6 py-4 bg-gray-50 space-y-3">
                    {services[service].items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-lg shadow-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
