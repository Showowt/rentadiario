import Link from 'next/link'

const properties = [
  { id: '1', title: 'Apartamento de Lujo en Bocagrande', city: 'Cartagena', status: 'active', price: 450000, rating: 4.9, reviews: 124, bookings: 8, occupancy: 92, revenue: 3600000, image: 'from-orange-500 to-pink-500' },
  { id: '2', title: 'Penthouse en El Poblado', city: 'Medellín', status: 'active', price: 680000, rating: 4.8, reviews: 89, bookings: 5, occupancy: 85, revenue: 3400000, image: 'from-green-500 to-emerald-500' },
  { id: '3', title: 'Casa Frente al Mar', city: 'Santa Marta', status: 'active', price: 890000, rating: 5.0, reviews: 34, bookings: 3, occupancy: 78, revenue: 2670000, image: 'from-cyan-500 to-blue-500' },
]

export default function PropiedadesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Mis Propiedades</h1>
          <p className="text-white/50">Administra tus alojamientos</p>
        </div>
        <Link href="/dashboard/nueva-propiedad" className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold px-5 py-2.5 rounded-xl">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Agregar Propiedad
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-white/50 text-sm">Total</p><p className="text-2xl font-bold">3</p></div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-white/50 text-sm">Activas</p><p className="text-2xl font-bold text-green-400">3</p></div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-white/50 text-sm">Reservas</p><p className="text-2xl font-bold">16</p></div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-white/50 text-sm">Ingresos</p><p className="text-2xl font-bold text-amber-400">$9.67M</p></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition">
            <div className="flex">
              <div className={`w-48 h-full bg-gradient-to-br ${property.image} flex-shrink-0 flex items-center justify-center min-h-[180px]`}>
                <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <p className="text-white/50 text-sm">{property.city}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">Activa</span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span>{property.rating}</span>
                    <span className="text-white/40">({property.reviews})</span>
                  </div>
                  <span className="text-white/50">${property.price.toLocaleString()} / noche</span>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div><p className="text-white/40 text-xs">Reservas</p><p className="font-semibold">{property.bookings}</p></div>
                  <div><p className="text-white/40 text-xs">Ocupación</p><p className="font-semibold">{property.occupancy}%</p></div>
                  <div><p className="text-white/40 text-xs">Ingresos</p><p className="font-semibold text-amber-400">${(property.revenue / 1000000).toFixed(1)}M</p></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
