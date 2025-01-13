"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const ClientCarousel = () => {
    const settings = {
      dots: false, // Quitamos los puntos
      infinite: true,
      speed: 300, // Reducimos la velocidad de transición (era 500)
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Reducimos el tiempo entre slides (era 3000)
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  const clients = [
    {
      name: "MADISON",
      logo: "/clients/MADISON.avif",
      url: "https://madisonyco.cl"
    },
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
    <div id='clientes' className="client-carousel py-16 px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        Empresas que Confían en Nosotros
      </h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="client-slide px-4">
            <a 
              href={client.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center hover:opacity-80 transition-opacity duration-300"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-[100px] flex items-center justify-center mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-[100px]"
                  />
                </div>
                {/* <p className="text-xs text-gray-600 font-medium">
                  {client.name}
                </p> */}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;