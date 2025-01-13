"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#contacto', text: 'Contacto' },
    { href: '#clientes', text: 'Clientes' }
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Consultora Badillo"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-text hover:text-primary transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={handleMenuClick}
              className="text-text p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? (
                // Ícono X para cerrar
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícono hamburguesa
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            md:hidden 
            fixed left-0 right-0 
            bg-white 
            shadow-lg 
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'top-20 opacity-100' : '-top-full opacity-0'}
          `}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors duration-200 py-2"
                onClick={handleLinkClick}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;