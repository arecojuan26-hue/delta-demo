import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Delta Ingenieria - Tratamiento de Agua y Efluentes en Cordoba',
  description: 'Soluciones industriales en tratamiento de agua y efluentes. Osmosis inversa, ablandadores, plantas de tratamiento. Ingenieria aplicada en Cordoba, Argentina.',
  keywords: 'tratamiento de agua, osmosis inversa industrial, ablandadores de agua, plantas de tratamiento de efluentes, mantenimiento industrial, Cordoba, Argentina',
}

export const viewport: Viewport = {
  themeColor: '#0a2463',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
