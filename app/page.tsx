import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-400">RentaDiario</h1>
          <Link href="/iniciar-sesion" className="text-slate-300 hover:text-white">
            Iniciar Sesión
          </Link>
        </div>
      </nav>
      
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Encuentra tu <span className="text-amber-400">estadía perfecta</span>
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Los mejores alojamientos en Colombia para viajes cortos
        </p>
        
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 max-w-3xl mx-auto border border-slate-700">
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="¿A dónde vas?" 
              className="flex-1 bg-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400"
            />
            <input 
              type="date" 
              className="bg-slate-700 rounded-lg px-4 py-3 text-white"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg">
              Buscar
            </button>
          </form>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-8">Destinos Populares</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Cartagena', 'Medellín', 'Bogotá'].map(city => (
            <div key={city} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition">
              <h4 className="text-xl font-semibold mb-2">{city}</h4>
              <p className="text-slate-400">Explora alojamientos</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
