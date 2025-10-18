"use client";
import React from "react";
import Image from "next/image";

const ClientCarousel = () => {
  const clients = [
    {
      name: "FRANCISCA GOYCOLEA ESTUDIO",
      logo: "/clients/FCA COYCOLEA.jpg",
      url: "https://www.instagram.com/frangoycolea_estudio/"
    },
    {
      name: "BABY MATTERS",
      logo: "/clients/BABY MATTERS.webp",
      url: "https://www.babymattress.cl"
    },
    {
      name: "KUTRALCO/MARCA KO CHILE",
      logo: "/clients/KUTRALCO-MARCA KO CHILE.webp",
      url: "https://www.kochile.cl/collections/all"
    },
    {
      name: "PLR PIZZA",
      logo: "/clients/PLR PIZZA.jpg",
      url: "https://www.instagram.com/plrpizzas"
    },
    {
      name: "PROPPI",
      logo: "/clients/PROPPI.svg",
      url: "https://proppi.cl"
    },
    {
      name: "MARGARITA DEL MAR",
      logo: "/clients/Margarita del mar.avif",
      url: "https://www.margaritajoyeria.cl"
    },
    {
      name: "BLISS PLASTIC SURGERY",
      logo: "/clients/Bliss Plastic Surgery.avif",
      url: "https://www.gonzalogomez.cl"
    },
    {
      name: "VOCÉ",
      logo: "/clients/Vocé.avif",
      url: "https://www.vocebeautyclinic.cl"
    },
    {
      name: "TU HOME",
      logo: "/clients/Tu home.avif",
      url: "https://tuhomemarket.com"
    },
    {
      name: "FRANCESCA PERRY STUDIO",
      logo: "/clients/Francesca Perry Studio.jpg",
      url: "https://www.instagram.com/francescaperrystudio"
    },
    {
      name: "CLÍNICA DENTAL",
      logo: "/clients/CLINICA DENTAL.webp",
      url: "https://clinicavolans.cl"
    },
    {
      name: "WONDER DENTAL",
      logo: "/clients/Wonder Dental.jpg",
      url: "https://www.dentalsiortodoncia.cl"
    },
    {
      name: "BERNI TRAUB",
      logo: "/clients/Berni Traub.jpg",
      url: "https://www.rosariascarinci.cl"
    },
    {
      name: "ARBORISMO",
      logo: "/clients/arborismo.png",
      url: "https://arborismo.cl"
    },
    {
      name: "MILA SPA",
      logo: "/clients/mila spa.jpg",
      url: "https://www.mallasarvol.com"
    },
    {
      name: "SISTERS DRINKS",
      logo: "/clients/Sisters Drinks.avif",
      url: "https://sisterdrinks.cl"
    },
    {
      name: "IMPRENTA BADILLO",
      logo: "/clients/Imprenta Badillo.jpg",
      url: "https://www.facebook.com/p/Imprenta-Badillo-100027321292661/"
    }
  ];

  return (
    <div id='clientes' className="py-12 md:py-16 bg-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12 px-4">
        Empresas que Confían en Nosotros
      </h2>

      <div className="relative">
        {/* Degradados en los bordes para efecto de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Contenedor del carrusel infinito */}
        <div className="flex animate-scroll-seamless">
          {/* Repetimos los logos 3 veces para un loop perfecto */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 px-4 md:px-6" style={{ width: '250px' }}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="h-[100px] flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={100}
                      className="object-contain max-h-[100px] w-auto transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
