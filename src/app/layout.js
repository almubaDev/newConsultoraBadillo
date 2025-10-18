import { Inter } from 'next/font/google'
import { plusJakarta } from './fonts'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Consultora Badillo',
  description: 'Soluciones contables y tributarias integrales para tu empresa',
  metadataBase: new URL('https://consultorabadillo.com'),
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
    shortcut: [
      { url: '/favicon.ico' }
    ],
  },
  openGraph: {
    title: 'Consultora Badillo - Servicios Contables y Tributarios',
    description: 'Soluciones contables y tributarias integrales para tu empresa. Servicios profesionales especializados en contabilidad, tributación y asesoría PYME.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://consultorabadillo.com',
    siteName: 'Consultora Badillo',
    images: [
      {
        url: 'https://consultorabadillo.com/logo.png',
        width: 800,
        height: 600,
        alt: 'Consultora Badillo - Servicios Contables y Tributarios',
        type: 'image/png',
      }
    ],
  },
  other: {
    'og:image': 'https://consultorabadillo.com/logo.png',
    'og:image:width': '800',
    'og:image:height': '600',
    'og:type': 'website',
    'og:url': 'https://consultorabadillo.com',
    'og:site_name': 'Consultora Badillo',
    'og:locale': 'es_ES',
    'og:title': 'Consultora Badillo - Servicios Contables y Tributarios',
    'og:description': '¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo. Servicios profesionales en contabilidad y asesoría PYME.',
    'format-detection': 'telephone=no',
    'theme-color': '#aac3c0', // Color del botón del componente Contact
    'msapplication-TileColor': '#aac3c0',
    // WhatsApp específico
    'whatsapp:title': 'Consultora Badillo',
    'whatsapp:description': '¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo.',
    'whatsapp:image': 'https://consultorabadillo.com/logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Consultora Badillo - Servicios Contables y Tributarios" />
        <meta property="og:description" content="¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo." />
        <meta property="og:image" content="https://consultorabadillo.com/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content="https://consultorabadillo.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Consultora Badillo" />
        {/* Meta tags para compartir en WhatsApp */}
        <meta property="whatsapp:title" content="Consultora Badillo" />
        <meta property="whatsapp:description" content="¡Hola! Me gustaría obtener más información sobre los servicios de Consultora Badillo." />
        <meta property="whatsapp:image" content="https://consultorabadillo.com/logo.png" />
        {/* Links para favicon y manifest */}
        <link rel="canonical" href="https://consultorabadillo.com" />
      </head>
      <body className={`${inter.className} ${plusJakarta.variable}`}>{children}</body>
    </html>
  )
}