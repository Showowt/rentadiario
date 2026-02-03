import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RentaDiario - Alquiler de Propiedades en Colombia',
  description: 'Encuentra los mejores alojamientos para tu estadía en Colombia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-white min-h-screen">{children}</body>
    </html>
  )
}
