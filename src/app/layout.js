import { Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Consultora Badillo',
  description: 'Soluciones contables y tributarias integrales para tu empresa',
  openGraph: {
    title: 'Consultora Badillo',
    description: 'Soluciones contables y tributarias integrales para tu empresa',


    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '32x32' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    images: [{
      // Aquí necesitamos la URL completa cuando el sitio esté desplegado
      url: 'https://www.consultorabadillo.com/logo.png', // Reemplazar con tu dominio real
      width: 800,
      height: 600,
      alt: 'Consultora Badillo Logo',
    }],
  },
  // Agregar meta tags específicos para WhatsApp
  other: {
    'og:image': 'https://www.consultorabadillo.com/logo.png', // Reemplazar con tu dominio real
    'og:image:width': '800',
    'og:image:height': '600',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Agregar el favicon */}
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}