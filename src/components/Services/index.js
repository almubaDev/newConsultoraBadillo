"use client";
import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('contables');

  const services = {
    contables: {
      title: 'Servicios Contables',
      items: [
        'Registro de operaciones en sistema contable',
        'Confección y presentación de los impuestos mensuales, F29 y F50',
        'Preparación de informes financieros periódicos, estado de flujos, Balance y Estado de Resultados',
        'Preparación y presentación de Declaraciones Juradas Operación Renta',
        'Presentación de las Declaraciones de Renta de la empresa y socios',
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
        'Asesorías normas anti evasión y elusión por ejecución de actos jurídicos',
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

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(services).map((service) => (
            <button
              key={service}
              onClick={() => setActiveTab(service)}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === service
                  ? 'bg-primary text-white'
                  : 'border border-primary text-primary hover:bg-primary/10'
              }`}
            >
              {services[service].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              {services[activeTab].title}
            </h3>
            <ul className="list-none">
              {services[activeTab].items.map((item, index) => (
                <li key={index} className="flex mb-4 last:mb-0">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;