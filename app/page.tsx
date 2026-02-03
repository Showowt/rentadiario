import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import { formatCOP } from '@/lib/utils/pricing'

export default function Home() {
  const featured = properties.slice(0, 3)
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">RentaDiario</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/buscar" className="text-white/70 hover:text-white transition">Explorar</Link>
            <Link href="#" className="text-white/70 hover:text-white transition">Sé Anfitrión</Link>
            <Link href="/auth/login" className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">+2,500 propiedades verificadas en Colombia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block">Vive Colombia</span>
            <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Como Nunca Antes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12">
            Alojamientos únicos seleccionados para viajeros que buscan experiencias extraordinarias
          </p>
          
          {/* Search Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 bg-white/5 rounded-2xl px-6 py-4 text-left hover:bg-white/10 transition cursor-pointer">
                <label className="text-xs text-white/40 uppercase tracking-wider">Destino</label>
                <div className="text-white font-medium">¿A dónde vamos?</div>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl px-6 py-4 text-left hover:bg-white/10 transition cursor-pointer">
                <label className="text-xs text-white/40 uppercase tracking-wider">Llegada</label>
                <div className="text-white font-medium">Agregar fecha</div>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl px-6 py-4 text-left hover:bg-white/10 transition cursor-pointer">
                <label className="text-xs text-white/40 uppercase tracking-wider">Salida</label>
                <div className="text-white font-medium">Agregar fecha</div>
              </div>
              <Link href="/buscar" className="bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Buscar</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/40">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Anfitriones verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Destinos Populares</h2>
              <p className="text-white/50 text-lg">Los lugares más deseados de Colombia</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Cartagena', properties: 847, gradient: 'from-orange-500 to-pink-500' },
              { name: 'Medellín', properties: 1203, gradient: 'from-green-500 to-emerald-500' },
              { name: 'Bogotá', properties: 956, gradient: 'from-blue-500 to-indigo-500' },
              { name: 'Santa Marta', properties: 432, gradient: 'from-cyan-500 to-blue-500' },
            ].map((dest, i) => (
              <Link key={dest.name} href={`/buscar?ciudad=${dest.name}`} className={`group relative overflow-hidden rounded-3xl ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative ${i === 0 ? 'p-8 md:p-12 aspect-square md:aspect-auto md:h-full min-h-[300px]' : 'p-6 aspect-square'}`}>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <h3 className={`font-bold text-white ${i === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{dest.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{dest.properties.toLocaleString()} propiedades</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">Selección Premium</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Propiedades Destacadas</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Alojamientos excepcionales elegidos por su calidad, ubicación y experiencias únicas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((property) => (
              <Link key={property.id} href={`/propiedad/${property.id}`} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">PREMIUM</span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-semibold">{property.rating}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/40 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{property.city}, Colombia</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition">{property.title}</h3>
                    
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                      <span>{property.bedrooms} hab</span>
                      <span>{property.max_guests} huésp</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <span className="text-2xl font-bold text-white">{formatCOP(property.price_per_night)}</span>
                        <span className="text-white/40 text-sm"> / noche</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/buscar" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
              Ver todas las propiedades
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why RentaDiario */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-amber-400 text-sm font-medium tracking-wider uppercase mb-4">¿Por qué RentaDiario?</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">La Nueva Era del Alojamiento en Colombia</h2>
              <p className="text-white/50 text-lg mb-8">Creamos una plataforma que entiende las necesidades de los viajeros modernos y los anfitriones colombianos.</p>
              
              <div className="space-y-6">
                {[
                  { icon: '🔒', title: 'Pagos 100% Seguros', desc: 'Wompi y métodos locales. Tu dinero protegido.' },
                  { icon: '✨', title: 'Propiedades Verificadas', desc: 'Cada alojamiento pasa por nuestro proceso de calidad.' },
                  { icon: '🇨🇴', title: 'Hecho para Colombia', desc: 'Entendemos el mercado local como nadie más.' },
                  { icon: '💬', title: 'Soporte en Español', desc: 'Atención personalizada 24/7 en tu idioma.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '2,500+', label: 'Propiedades' },
                    { number: '15,000+', label: 'Huéspedes felices' },
                    { number: '4.9', label: 'Calificación promedio' },
                    { number: '32', label: 'Ciudades' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4">
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.number}</div>
                      <div className="text-white/50 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Tienes una propiedad?</h2>
          <p className="text-white/50 text-xl mb-10">Únete a miles de anfitriones que ya están generando ingresos con RentaDiario</p>
          <Link href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
            Comienza a ganar hoy
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <span className="font-semibold">RentaDiario</span>
            </div>
            <p className="text-white/40 text-sm">© 2025 RentaDiario. Hecho con 🇨🇴 en Colombia</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
