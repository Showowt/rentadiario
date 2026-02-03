import Link from 'next/link'

const properties = [
  { id: '1', title: 'Apartamento Estudio Tipo Loft', location: 'El Laguito, Cartagena', price: 76.69, rating: 4.9, reviews: 124, image: 'from-[#17A2B8] to-[#138496]', superhost: true, instant: false },
  { id: '2', title: 'Aparta Estudio Laureles', location: 'Laureles, Medellín', price: 104.08, rating: 4.8, reviews: 89, image: 'from-[#4A90E2] to-[#17A2B8]', superhost: false, instant: true },
  { id: '3', title: 'Palmetto Beach 1702', location: 'Bocagrande, Cartagena', price: 123.26, rating: 4.9, reviews: 201, image: 'from-teal-500 to-cyan-600', superhost: true, instant: true },
  { id: '4', title: 'Luxury 2 Bedroom with Jacuzzi', location: 'Centro, Cartagena', price: 350.00, rating: 5.0, reviews: 67, image: 'from-cyan-500 to-blue-600', superhost: true, instant: true },
  { id: '5', title: 'ILLUMINATO 3 Bedroom Luxury', location: 'Castillogrande, Cartagena', price: 399.00, rating: 4.7, reviews: 45, image: 'from-blue-500 to-indigo-600', superhost: false, instant: false },
  { id: '6', title: 'Lujosa Finca Lago Calima', location: 'Lago Calima, Valle', price: 547.80, rating: 4.9, reviews: 156, image: 'from-emerald-500 to-teal-600', superhost: true, instant: false },
  { id: '7', title: 'Cabaña Romántica Guatapé', location: 'Guatapé, Antioquia', price: 89.00, rating: 4.8, reviews: 234, image: 'from-amber-500 to-orange-600', superhost: true, instant: true },
  { id: '8', title: 'Penthouse Vista al Mar', location: 'Santa Marta, Magdalena', price: 275.00, rating: 4.6, reviews: 78, image: 'from-violet-500 to-purple-600', superhost: false, instant: false },
]

const filters = ['Price', 'Type', 'Rooms', 'Amenities', 'Instant Book']

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
          </Link>
          <div className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <input type="text" placeholder="Cartagena, Colombia" className="flex-1 bg-transparent outline-none" />
            <div className="w-px h-6 bg-white/20"></div>
            <input type="text" placeholder="Feb 5 - Feb 8" className="bg-transparent outline-none w-32" />
            <div className="w-px h-6 bg-white/20"></div>
            <input type="text" placeholder="2 guests" className="bg-transparent outline-none w-24" />
            <button className="w-10 h-10 bg-[#17A2B8] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
          <Link href="/auth/login" className="px-4 py-2 border border-white/20 rounded-xl hover:bg-white/5">Login</Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto">
          {filters.map((f) => (
            <button key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm whitespace-nowrap hover:bg-white/10 transition">{f}</button>
          ))}
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm whitespace-nowrap hover:bg-white/10 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            Filters
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Cartagena, Colombia</h1>
            <p className="text-white/50">{properties.length} properties available · Feb 5-8 · 2 guests</p>
          </div>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm">
            <option>Sort: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((p) => (
            <Link key={p.id} href={`/propiedad/${p.id}`} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.image}`}></div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                {p.instant && (
                  <span className="absolute bottom-3 left-3 px-2 py-1 bg-[#17A2B8] text-white text-xs rounded-lg">Instant Book</span>
                )}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{p.title}</h3>
                  <p className="text-white/50 text-sm">{p.location}</p>
                  <p className="mt-1"><span className="font-semibold">${p.price}</span> <span className="text-white/50">/ night</span></p>
                </div>
                <div className="flex items-center gap-1 text-sm shrink-0">
                  <svg className="w-4 h-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>{p.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <a href="https://wa.me/573103611110" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
