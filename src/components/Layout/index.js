"use client";
import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Services from '../Services';
import Contact from '../Contact';
import ClientCarousel from '../ClientCarousel';


const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <Hero />
        <Services />
        <Contact />
        <ClientCarousel />
        {/* Aquí irán las demás secciones */}
      </main>

      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Consultora Badillo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;