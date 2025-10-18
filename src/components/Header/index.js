"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#contacto', text: 'Contacto' },
    { href: '#clientes', text: 'Clientes' }
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-shadow duration-300 bg-white ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-end h-16 sm:h-20">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text hover:text-primary transition-colors duration-200 font-medium relative group whitespace-nowrap"
                >
                  {link.text}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={handleLinkClick}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-16 sm:top-20 bg-white shadow-2xl z-40 border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text hover:text-primary hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-md font-medium"
              onClick={handleLinkClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
