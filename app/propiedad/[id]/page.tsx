import Link from 'next/link'

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
            <span className="text-xl font-bold">Renta Diario</span>
          </Link>
          <Link href="/auth/login" className="px-4 py-2 bg-[#17A2B8] text-white rounded-xl hover:bg-[#138496] transition">Login</Link>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#17A2B8] to-[#138496]"></div>
          <div className="bg-gradient-to-br from-[#4A90E2] to-[#17A2B8]"></div>
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600"></div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600"></div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="pb-8 border-b border-white/10">
              <h1 className="text-3xl font-bold mb-2">Apartamento Estudio Tipo Loft - El Laguito</h1>
              <p className="text-white/60 mb-4">El Laguito, Cartagena, Colombia</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1"><span className="text-[#17A2B8]">★</span> 4.9 (124 reviews)</span>
                <span className="px-2 py-1 bg-[#17A2B8]/10 text-[#17A2B8] rounded-full text-xs">Superhost</span>
              </div>
            </div>
            <div className="flex gap-8 pb-8 border-b border-white/10">
              <div className="text-center"><p className="text-2xl font-bold">4</p><p className="text-white/50 text-sm">Guests</p></div>
              <div className="text-center"><p className="text-2xl font-bold">1</p><p className="text-white/50 text-sm">Bedroom</p></div>
              <div className="text-center"><p className="text-2xl font-bold">2</p><p className="text-white/50 text-sm">Beds</p></div>
              <div className="text-center"><p className="text-2xl font-bold">1</p><p className="text-white/50 text-sm">Bath</p></div>
            </div>
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-xl font-semibold mb-4">About this space</h2>
              <p className="text-white/70">Experience the best of Cartagena in this stylish loft apartment. Located in the prestigious El Laguito neighborhood, steps away from beaches, restaurants, and nightlife.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['🌊 Ocean View', '❄️ AC', '📶 WiFi', '🅿️ Parking', '🏊 Pool', '👨‍🍳 Kitchen'].map((a) => (
                  <div key={a} className="p-3 bg-white/5 rounded-xl">{a}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-baseline justify-between mb-6">
                <div><span className="text-2xl font-bold">$76.69</span><span className="text-white/50"> / night</span></div>
                <span className="text-sm">★ 4.9</span>
              </div>
              <div className="border border-white/20 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-white/20">
                    <label className="block text-xs text-white/50 mb-1">CHECK-IN</label>
                    <input type="date" className="w-full bg-transparent text-sm" />
                  </div>
                  <div className="p-3">
                    <label className="block text-xs text-white/50 mb-1">CHECK-OUT</label>
                    <input type="date" className="w-full bg-transparent text-sm" />
                  </div>
                </div>
                <div className="p-3 border-t border-white/20">
                  <label className="block text-xs text-white/50 mb-1">GUESTS</label>
                  <select className="w-full bg-transparent text-sm"><option>2 guests</option></select>
                </div>
              </div>
              <button className="w-full py-4 bg-[#17A2B8] text-white font-semibold rounded-xl hover:bg-[#138496] transition">Reserve</button>
              <p className="text-center text-white/50 text-sm mt-4">You wont be charged yet</p>
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-white/70"><span>$76.69 x 3 nights</span><span>$230.07</span></div>
                <div className="flex justify-between text-white/70"><span>Cleaning fee</span><span>$25</span></div>
                <div className="flex justify-between text-white/70"><span>Service fee</span><span>$15</span></div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-white/10"><span>Total</span><span>$270.07</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
