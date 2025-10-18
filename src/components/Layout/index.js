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

      <main>
        {/* Hero sin padding top porque ocupa 100vh y tiene su propio padding */}
        <Hero />

        {/* Las demás secciones sin padding top extra */}
        <Services />
        <Contact />
        <ClientCarousel />
      </main>

      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">© Octubre {new Date().getFullYear()} Consultora Badillo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;