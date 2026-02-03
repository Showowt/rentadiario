import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { formatCOP } from '@/lib/utils/pricing'

export default function BuscarPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <nav className="border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-400">RentaDiario</Link>
          <Link href="/auth/login" className="text-slate-300 hover:text-white">Iniciar Sesión</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Propiedades Disponibles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <Link key={p.id} href={`/propiedad/${p.id}`}>
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">📷 {p.city}</span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-amber-400">★</span>
                      <span className="text-white">{p.rating}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{p.city}</p>
                  <div className="flex gap-3 text-sm text-slate-400 mb-3">
                    <span>{p.bedrooms} hab</span>
                    <span>{p.bathrooms} baños</span>
                    <span>{p.max_guests} huésp</span>
                  </div>
                  <p className="text-amber-400 font-semibold">
                    {formatCOP(p.price_per_night)} <span className="text-slate-400 font-normal">/ noche</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
