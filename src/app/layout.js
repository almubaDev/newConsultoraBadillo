import { Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
 openGraph: {
   title: 'Consultora Badillo',
   description: 'Soluciones contables y tributarias integrales para tu empresa',
   type: 'website',
   url: 'https://consultorabadillo.com',
   images: [{
     url: 'https://consultorabadillo.com/logo.png',
     width: 800,
     height: 600,
     alt: 'Consultora Badillo Logo',
     type: 'image/png',
   }],
   siteName: 'Consultora Badillo',
 },
 other: {
   'og:image': 'https://consultorabadillo.com/logo.png',
   'og:image:width': '800',
   'og:image:height': '600',
   'og:type': 'website',
   'og:url': 'https://consultorabadillo.com',
   'og:site_name': 'Consultora Badillo',
 }
};

export default function RootLayout({ children }) {
 return (
   <html lang="es">
     <body className={inter.className}>{children}</body>
   </html>
 )
}