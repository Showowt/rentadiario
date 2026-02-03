import Link from 'next/link'

const categories = [
  { name: 'Glamping', icon: '⛺', slug: 'glamping' },
  { name: 'Hotel Bar', icon: '🏨', slug: 'hotel-bar' },
  { name: 'House', icon: '🏠', slug: 'house' },
  { name: 'Cabin', icon: '🏡', slug: 'cabin' },
  { name: 'Farm', icon: '🌾', slug: 'farm' },
  { name: 'Room', icon: '🛏️', slug: 'room' },
  { name: 'Apartment', icon: '🏢', slug: 'apartment' },
]

const trendingProperties = [
  { id: 1, title: 'Apartamento Estudio Tipo Loft – El Laguito', type: 'Apartment', location: 'Cartagena, Colombia', price: 76.69, rating: 1, reviews: 1, instant: false, image: 'from-cyan-500 to-teal-600' },
  { id: 2, title: 'Aparta Estudio (Loft) en Laureles', type: 'Apartment', location: 'Medellín, Colombia', price: 104.08, rating: 1, reviews: 1, instant: false, image: 'from-teal-500 to-cyan-600' },
  { id: 3, title: 'Palmetto Beach 1702', type: 'Apartment', location: 'Cartagena, Colombia', price: 123.26, rating: 5, reviews: 0, instant: true, image: 'from-sky-500 to-blue-600' },
  { id: 4, title: 'Luxury 2 Bedroom Apt with Jacuzzi', type: 'Apartment', location: 'Cartagena, Colombia', price: 350, rating: 1, reviews: 1, instant: true, image: 'from-blue-500 to-indigo-600' },
  { id: 5, title: 'ILLUMINATO 3 Bedroom Guest Friendly', type: 'Apartment', location: 'Cartagena, Colombia', price: 399, rating: 5, reviews: 2, instant: false, image: 'from-indigo-500 to-purple-600' },
  { id: 6, title: 'Lujosa Finca Lago Calima', type: 'Farm', location: 'Calima, Colombia', price: 547.80, rating: 5, reviews: 0, instant: false, image: 'from-emerald-500 to-green-600' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#4A90E2]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#17A2B8] font-bold text-xl">RD</div>
            <span className="text-xl font-bold text-white">Renta Diario</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <Link href="/whyhost" className="hover:text-white transition">Become a Host</Link>
            <Link href="/help" className="hover:text-white transition">Help Center</Link>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm">
              <span>US$ USD</span>
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 text-white hover:bg-white/10 rounded-xl transition">Login</Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-white text-[#4A90E2] font-semibold rounded-xl hover:bg-white/90 transition">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#4A90E2] via-[#17A2B8] to-[#138496] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/beach-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            A place for everyone!
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl">
            Discover unique stays across Colombia. From beachfront apartments to mountain cabins, find your perfect getaway.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-4xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">Location</label>
                <input type="text" placeholder="Where are you going?" className="w-full text-gray-800 font-medium focus:outline-none" />
              </div>
              <div className="w-px bg-gray-200 hidden md:block"></div>
              <div className="flex-1 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">Check-in</label>
                <input type="date" className="w-full text-gray-800 font-medium focus:outline-none" />
              </div>
              <div className="w-px bg-gray-200 hidden md:block"></div>
              <div className="flex-1 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">Check-out</label>
                <input type="date" className="w-full text-gray-800 font-medium focus:outline-none" />
              </div>
              <div className="w-px bg-gray-200 hidden md:block"></div>
              <div className="flex-1 px-4 py-3">
                <label className="block text-xs text-gray-500 mb-1">Travelers</label>
                <select className="w-full text-gray-800 font-medium focus:outline-none bg-transparent">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <Link href="/buscar" className="px-8 py-4 bg-[#17A2B8] text-white font-semibold rounded-xl hover:bg-[#138496] transition flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Browse by property type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/buscar?roomtype=${cat.slug}`} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#17A2B8]/50 hover:bg-[#17A2B8]/5 transition text-center">
              <span className="text-4xl block mb-3">{cat.icon}</span>
              <span className="text-sm font-medium text-white/80 group-hover:text-[#17A2B8] transition">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Properties */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Trending stays</h2>
          <Link href="/buscar" className="text-[#17A2B8] hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProperties.map((property) => (
            <Link key={property.id} href={`/propiedad/${property.id}`} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#17A2B8]/50 transition">
              <div className={`h-48 bg-gradient-to-br ${property.image} relative`}>
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                {property.instant && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-[#17A2B8] text-white text-xs font-medium rounded-lg">Instant Book</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-[#17A2B8] transition truncate">{property.title}</h3>
                    <p className="text-white/50 text-sm">{property.location}</p>
                  </div>
                  {property.reviews > 0 && (
                    <div className="flex items-center gap-1 ml-2">
                      <svg className="w-4 h-4 text-[#17A2B8]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="text-sm text-white/70">({property.reviews})</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/60">{property.type}</span>
                  <p className="font-semibold"><span className="text-[#17A2B8]">${property.price}</span> <span className="text-white/50 font-normal">/ night</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-r from-[#17A2B8]/10 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">Why book with Renta Diario?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#17A2B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">24/7 Customer Service</h3>
              <p className="text-white/50 text-sm">WhatsApp support available anytime you need help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#17A2B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">Daily Assurance</h3>
              <p className="text-white/50 text-sm">Payment protection & travel safety system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#17A2B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">Flexible Cancellations</h3>
              <p className="text-white/50 text-sm">Understanding policies for all your bookings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#17A2B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#17A2B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">Verified Accounts</h3>
              <p className="text-white/50 text-sm">Trust & safety verification for all users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#17A2B8] to-[#4A90E2] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Host</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Turn your property into income. Join thousands of hosts across Colombia who trust Renta Diario to manage their rentals.
          </p>
          <Link href="/whyhost" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#17A2B8] font-semibold rounded-xl hover:bg-white/90 transition">
            Start Hosting
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/573103611110" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Footer */}
      <footer className="bg-[#111] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
                <span className="text-xl font-bold">Renta Diario</span>
              </div>
              <p className="text-white/50 text-sm">A place for everyone!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/about/home" className="hover:text-[#17A2B8] transition">About Us</Link></li>
                <li><Link href="/about/renta-diario" className="hover:text-[#17A2B8] transition">About Daily Rental</Link></li>
                <li><Link href="/about/press-room" className="hover:text-[#17A2B8] transition">Press Room</Link></li>
                <li><Link href="/about/foundation" className="hover:text-[#17A2B8] transition">Foundation</Link></li>
                <li><Link href="/help" className="hover:text-[#17A2B8] transition">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Discover</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/daily-assurance" className="hover:text-[#17A2B8] transition">Daily Assurance</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#17A2B8] transition">Privacy Policy</Link></li>
                <li><Link href="/cancellation-policies" className="hover:text-[#17A2B8] transition">Cancellation Policies</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-[#17A2B8] transition">Terms and Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/whyhost" className="hover:text-[#17A2B8] transition">Become a Host</Link></li>
                <li><Link href="/professional-hosts" className="hover:text-[#17A2B8] transition">Professional Hosts</Link></li>
                <li><Link href="/traveler" className="hover:text-[#17A2B8] transition">Travelers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/people/Renta-Diario/61567892262721/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#17A2B8] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://twitter.com/Renta_Diario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#17A2B8] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://www.instagram.com/rentadiariocom/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#17A2B8] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@RentaDiariooficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#17A2B8] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            <p>&copy; 2024 LN Enterprise Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
