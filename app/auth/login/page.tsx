import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent p-12 flex-col justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">R</div>
          <span className="text-xl font-bold">RentaDiario</span>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-4">Administra tus propiedades como un profesional</h1>
          <p className="text-white/60 text-lg">Unete a miles de anfitriones que ya gestionan sus alquileres con RentaDiario</p>
        </div>
        <div className="flex items-center gap-8 text-white/40 text-sm">
          <div><span className="text-2xl font-bold text-white">2,500+</span><br/>Propiedades</div>
          <div><span className="text-2xl font-bold text-white">50K+</span><br/>Reservas</div>
          <div><span className="text-2xl font-bold text-white">4.9</span><br/>Calificacion</div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Demo Banner */}
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
            <div className="flex items-center gap-2 text-amber-400 font-medium mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Modo Demo
            </div>
            <p className="text-sm text-white/60">Usa las credenciales prellenadas para explorar el panel completo</p>
          </div>

          <h2 className="text-2xl font-bold mb-2">Bienvenido de nuevo</h2>
          <p className="text-white/50 mb-8">Ingresa a tu cuenta para continuar</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Correo electronico</label>
              <input type="email" defaultValue="maria@rentadiario.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500/50 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Contrasena</label>
              <input type="password" defaultValue="demo1234" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-amber-500/50 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500/50" />
                <span className="text-white/60">Recordarme</span>
              </label>
              <a href="#" className="text-amber-400 hover:text-amber-300">Olvidaste tu contrasena?</a>
            </div>
            <Link href="/dashboard" className="block w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold rounded-xl text-center hover:from-amber-500 hover:to-amber-700 transition">
              Acceder al Demo
            </Link>
          </form>

          <div className="mt-8 text-center text-white/40 text-sm">
            No tienes cuenta? <Link href="/registro" className="text-amber-400 hover:text-amber-300">Registrate gratis</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
