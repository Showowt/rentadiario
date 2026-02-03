import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { formatCOP } from '@/lib/utils/pricing'

export default function BuscarPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">RentaDiario</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <input 
                type="text" 
                placeholder="Buscar destino..." 
                className="bg-transparent border-none outline-none text-white placeholder-white/40 w-48"
              />
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link href="/auth/login" className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Filters Bar */}
      <div className="border-b border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {['Todos', 'Playa', 'Montaña', 'Ciudad', 'Lujo', 'Pet Friendly', 'Piscina', 'WiFi'].map((filter, i) => (
              <button 
                key={filter}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  i === 0 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-white/70 hover:bg-white/10 border border-white/10 whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Propiedades en Colombia</h1>
            <p className="text-white/50">{properties.length} lugares increíbles para hospedarte</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/50">
            <span className="text-sm">Ordenar por:</span>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
              <option>Recomendados</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Mejor calificados</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Link key={property.id} href={`/propiedad/${property.id}`} className="group">
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 mb-4">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Premium badge */}
                  {index < 2 && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                        SUPERHOST
                      </span>
                    </div>
                  )}
                  
                  {/* Favorite button */}
                  <button className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition group/btn">
                    <svg className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  {/* Image placeholder with city gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-amber-600/40 to-orange-800/40' :
                    index % 4 === 1 ? 'from-emerald-600/40 to-teal-800/40' :
                    index % 4 === 2 ? 'from-blue-600/40 to-indigo-800/40' :
                    'from-rose-600/40 to-pink-800/40'
                  }`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-white/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                      <span className="text-white/40 text-sm">{property.city}</span>
                    </div>
                  </div>
                  
                  {/* Image dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[1,2,3,4,5].map((dot) => (
                      <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-medium">{property.rating}</span>
                        <span className="text-white/40 text-sm">({property.review_count} reseñas)</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition line-clamp-1">
                        {property.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-white/40 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {property.city}, Colombia
                  </p>
                  
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <span>{property.bedrooms} habitaciones</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span>{property.bathrooms} baños</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span>{property.max_guests} huéspedes</span>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-xl font-bold text-white">{formatCOP(property.price_per_night)}</span>
                    <span className="text-white/40"> / noche</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            Cargar más propiedades
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  )
}
