import Link from 'next/link'

const property = {
  id: '1',
  title: 'Apartamento de Lujo en Bocagrande',
  subtitle: 'Espectacular vista al mar con terraza privada',
  location: 'Bocagrande, Cartagena',
  rating: 4.9,
  reviewCount: 124,
  superhost: true,
  price: 450000,
  cleaningFee: 80000,
  serviceFee: 45000,
  guests: 6,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  description: 'Disfruta de este lujoso apartamento con vista panoramica al mar Caribe. Ubicado en el corazon de Bocagrande, a pasos de las mejores playas, restaurantes y vida nocturna de Cartagena. El apartamento cuenta con acabados de primera, aire acondicionado en todas las habitaciones, cocina totalmente equipada y una terraza privada perfecta para disfrutar el atardecer.',
  amenities: [
    { icon: '🌊', name: 'Vista al mar' },
    { icon: '❄️', name: 'Aire acondicionado' },
    { icon: '📶', name: 'WiFi 300 Mbps' },
    { icon: '🅿️', name: 'Estacionamiento' },
    { icon: '🏊', name: 'Piscina' },
    { icon: '🏋️', name: 'Gimnasio' },
    { icon: '👨‍🍳', name: 'Cocina equipada' },
    { icon: '📺', name: 'Smart TV 65"' },
    { icon: '🧺', name: 'Lavadora/Secadora' },
    { icon: '🛗', name: 'Ascensor' },
    { icon: '🔒', name: 'Seguridad 24/7' },
    { icon: '☀️', name: 'Terraza privada' },
  ],
  host: {
    name: 'Maria Gonzalez',
    image: null,
    superhost: true,
    joined: 'Enero 2020',
    responseRate: 99,
    responseTime: '1 hora',
    reviewCount: 312,
  },
  reviews: [
    { id: 1, author: 'Carlos R.', date: 'Enero 2024', rating: 5, comment: 'Increible apartamento! La vista es espectacular y Maria fue una anfitriona excepcional. Muy limpio y tal como en las fotos.' },
    { id: 2, author: 'Ana M.', date: 'Diciembre 2023', rating: 5, comment: 'Perfecta ubicacion, a pasos de todo. El apartamento tiene todo lo necesario. Volveria sin dudarlo.' },
    { id: 3, author: 'John S.', date: 'Noviembre 2023', rating: 5, comment: 'Amazing place! Maria was very helpful and the apartment exceeded our expectations. Highly recommend!' },
  ],
  images: [
    'from-amber-500 to-orange-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-green-600',
    'from-purple-500 to-pink-600',
    'from-rose-500 to-red-600',
  ]
}

export default function PropertyDetailPage() {
  const nights = 3
  const subtotal = property.price * nights
  const total = subtotal + property.cleaningFee + property.serviceFee

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">R</div>
            <span className="text-xl font-bold">RentaDiario</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Compartir
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Guardar
            </button>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px] rounded-2xl overflow-hidden">
          <div className={`col-span-2 row-span-2 bg-gradient-to-br ${property.images[0]} flex items-center justify-center cursor-pointer hover:opacity-90 transition`}>
            <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          {property.images.slice(1).map((gradient, i) => (
            <div key={i} className={`bg-gradient-to-br ${gradient} flex items-center justify-center cursor-pointer hover:opacity-90 transition`}>
              <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          ))}
          <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition hidden">
            Ver todas las fotos
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Section */}
            <div className="pb-8 border-b border-white/10">
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <p className="text-white/60 text-lg mb-4">{property.subtitle}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="font-semibold">{property.rating}</span>
                  <span className="text-white/40">({property.reviewCount} resenas)</span>
                </div>
                {property.superhost && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Superanfitrion
                  </span>
                )}
                <span className="text-white/60">{property.location}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pb-8 border-b border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold">{property.guests}</p>
                <p className="text-white/50 text-sm">Huespedes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{property.bedrooms}</p>
                <p className="text-white/50 text-sm">Habitaciones</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{property.beds}</p>
                <p className="text-white/50 text-sm">Camas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{property.bathrooms}</p>
                <p className="text-white/50 text-sm">Banos</p>
              </div>
            </div>

            {/* Host */}
            <div className="flex items-center gap-4 pb-8 border-b border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl">M</div>
              <div className="flex-1">
                <p className="font-semibold">Anfitrion: {property.host.name}</p>
                <p className="text-white/50 text-sm">{property.host.superhost ? 'Superanfitriona' : 'Anfitriona'} desde {property.host.joined}</p>
              </div>
              <button className="px-4 py-2 border border-white/20 rounded-xl hover:bg-white/5 transition">Contactar</button>
            </div>

            {/* Description */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-xl font-semibold mb-4">Acerca de este espacio</h2>
              <p className="text-white/70 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-xl font-semibold mb-6">Lo que ofrece este lugar</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="text-white/80">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <h2 className="text-xl font-semibold">{property.rating} - {property.reviewCount} resenas</h2>
              </div>
              <div className="space-y-6">
                {property.reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center font-bold">{review.author[0]}</div>
                      <div>
                        <p className="font-medium">{review.author}</p>
                        <p className="text-white/40 text-sm">{review.date}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-white/70">{review.comment}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition">
                Ver las {property.reviewCount} resenas
              </button>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold">${property.price.toLocaleString()}</span>
                  <span className="text-white/50"> COP / noche</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>{property.rating}</span>
                </div>
              </div>

              {/* Date Inputs */}
              <div className="border border-white/20 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-white/20">
                    <label className="block text-xs text-white/50 mb-1">LLEGADA</label>
                    <input type="date" defaultValue="2024-02-05" className="w-full bg-transparent text-sm focus:outline-none" />
                  </div>
                  <div className="p-3">
                    <label className="block text-xs text-white/50 mb-1">SALIDA</label>
                    <input type="date" defaultValue="2024-02-08" className="w-full bg-transparent text-sm focus:outline-none" />
                  </div>
                </div>
                <div className="p-3 border-t border-white/20">
                  <label className="block text-xs text-white/50 mb-1">HUESPEDES</label>
                  <select className="w-full bg-transparent text-sm focus:outline-none">
                    <option value="1">1 huesped</option>
                    <option value="2" selected>2 huespedes</option>
                    <option value="3">3 huespedes</option>
                    <option value="4">4 huespedes</option>
                    <option value="5">5 huespedes</option>
                    <option value="6">6 huespedes</option>
                  </select>
                </div>
              </div>

              {/* Reserve Button */}
              <Link href="/reservar/1" className="block w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold rounded-xl text-center text-lg hover:from-amber-500 hover:to-amber-700 transition mb-4">
                Reservar
              </Link>

              <p className="text-center text-white/50 text-sm mb-6">No se hara ningun cargo todavia</p>

              {/* Price Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-white/70">
                  <span>${property.price.toLocaleString()} x {nights} noches</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tarifa de limpieza</span>
                  <span>${property.cleaningFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tarifa de servicio</span>
                  <span>${property.serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-3 border-t border-white/10">
                  <span>Total</span>
                  <span>${total.toLocaleString()} COP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
