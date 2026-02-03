import Link from 'next/link'

const categories = [
  { name: 'Glamping', icon: '⛺' },
  { name: 'Hotel', icon: '🏨' },
  { name: 'House', icon: '🏠' },
  { name: 'Cabin', icon: '🏡' },
  { name: 'Farm', icon: '🌾' },
  { name: 'Room', icon: '🛏️' },
  { name: 'Apartment', icon: '🏢' },
]

const properties = [
  { id: '1', title: 'Apartamento Estudio Tipo Loft', location: 'El Laguito, Cartagena', price: 76.69, rating: 4.9, image: 'from-[#17A2B8] to-[#138496]', instant: false },
  { id: '2', title: 'Aparta Estudio Laureles', location: 'Laureles, Medellín', price: 104.08, rating: 4.8, image: 'from-[#4A90E2] to-[#17A2B8]', instant: true },
  { id: '3', title: 'Palmetto Beach 1702', location: 'Bocagrande, Cartagena', price: 123.26, rating: 4.9, image: 'from-teal-500 to-cyan-600', instant: true },
  { id: '4', title: 'Luxury 2 Bedroom Jacuzzi', location: 'Centro, Cartagena', price: 350.00, rating: 5.0, image: 'from-cyan-500 to-blue-600', instant: true },
  { id: '5', title: 'ILLUMINATO 3 Bedroom', location: 'Castillogrande, Cartagena', price: 399.00, rating: 4.7, image: 'from-blue-500 to-indigo-600', instant: false },
  { id: '6', title: 'Lujosa Finca Lago Calima', location: 'Lago Calima, Valle', price: 547.80, rating: 4.9, image: 'from-emerald-500 to-teal-600', instant: false },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-[#4A90E2]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
            <span className="text-xl font-bold text-white">Renta Diario</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-white/80 hover:text-white transition">Become a Host</Link>
            <Link href="/ayuda" className="text-white/80 hover:text-white transition">Help Center</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-white text-[#4A90E2] font-medium rounded-xl hover:bg-white/90 transition">Login</Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-[#17A2B8] via-[#1a8a9a] to-[#4A90E2] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">A place for everyone!</h1>
          <p className="text-xl text-white/80 mb-10">Discover unique stays across Colombia</p>
          <form action="/buscar" className="max-w-4xl mx-auto bg-white rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
            <div className="flex-1 px-4 py-3">
              <label className="block text-xs text-gray-500 mb-1">Location</label>
              <input type="text" placeholder="Where are you going?" className="w-full text-gray-800 outline-none" />
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="px-4 py-3">
              <label className="block text-xs text-gray-500 mb-1">Check-in</label>
              <input type="date" className="text-gray-800 outline-none" />
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="px-4 py-3">
              <label className="block text-xs text-gray-500 mb-1">Check-out</label>
              <input type="date" className="text-gray-800 outline-none" />
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="px-4 py-3">
              <label className="block text-xs text-gray-500 mb-1">Travelers</label>
              <select className="text-gray-800 outline-none bg-transparent"><option>2 guests</option></select>
            </div>
            <button type="submit" className="px-8 py-4 bg-[#17A2B8] text-white font-semibold rounded-xl hover:bg-[#138496] transition">Search</button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-6 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/buscar?type=${cat.name.toLowerCase()}`} className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition shrink-0">
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm text-white/70">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Trending Properties</h2>
          <Link href="/buscar" className="text-[#17A2B8] hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <Link key={p.id} href={`/propiedad/${p.id}`} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.image} group-hover:scale-105 transition duration-300`}></div>
                {p.instant && <span className="absolute bottom-3 left-3 px-2 py-1 bg-[#17A2B8] text-white text-xs rounded-lg">Instant Book</span>}
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/50 text-sm">{p.location}</p>
                  <p className="mt-1"><span className="font-semibold">${p.price}</span> <span className="text-white/50">/ night</span></p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>{p.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#17A2B8] to-[#4A90E2] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Host</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join thousands of hosts earning income by sharing their properties on Renta Diario</p>
          <Link href="/dashboard" className="inline-block px-8 py-4 bg-white text-[#17A2B8] font-semibold rounded-xl hover:bg-white/90 transition">Start Hosting</Link>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Press Room</a></li>
              <li><a href="#" className="hover:text-white">Foundation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white">Daily Assurance</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cancellation</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white">Become a Host</a></li>
              <li><a href="#" className="hover:text-white">Pro Hosts</a></li>
              <li><a href="#" className="hover:text-white">Travelers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="https://facebook.com/rentadiario" className="hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com/Renta_Diario" className="hover:text-white">Twitter</a></li>
              <li><a href="https://instagram.com/rentadiariocom" className="hover:text-white">Instagram</a></li>
              <li><a href="https://youtube.com/@RentaDiariooficial" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold">RD</div>
              <span className="font-bold">Renta Diario</span>
            </div>
            <p className="text-white/50 text-sm">© 2024 LN Enterprise Inc.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/573103611110" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
