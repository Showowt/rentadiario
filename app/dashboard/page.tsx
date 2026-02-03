import Link from 'next/link'

const stats = [
  { label: 'Ingresos del Mes', value: '$4,850,000', change: '+12.5%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Reservas Activas', value: '12', change: '+3', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Tasa de Ocupación', value: '87%', change: '+5.2%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { label: 'Calificación', value: '4.9', change: '★★★★★', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
]

const recentBookings = [
  { id: 'RD-2024-001', guest: 'Carlos Rodríguez', property: 'Apartamento Bocagrande', dates: 'Feb 5 - Feb 8', amount: 1350000, status: 'confirmed' },
  { id: 'RD-2024-002', guest: 'Ana María López', property: 'Penthouse El Poblado', dates: 'Feb 7 - Feb 12', amount: 3400000, status: 'pending' },
  { id: 'RD-2024-003', guest: 'John Smith', property: 'Apartamento Bocagrande', dates: 'Feb 10 - Feb 14', amount: 1800000, status: 'confirmed' },
  { id: 'RD-2024-004', guest: 'Patricia Gómez', property: 'Casa Santa Marta', dates: 'Feb 15 - Feb 20', amount: 4450000, status: 'confirmed' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium text-green-400">{stat.change}</span>
            </div>
            <p className="text-white/50 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Ingresos Mensuales</h2>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option>Últimos 6 meses</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2">
            {[65, 45, 80, 55, 90, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-amber-500/50 to-amber-400/80 rounded-t-lg" style={{ height: `${height}%` }} />
                <span className="text-xs text-white/40">{['Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Ocupación por Propiedad</h2>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="20" />
              <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="377" strokeDashoffset="49" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">87%</span>
              <span className="text-white/40 text-sm">Ocupado</span>
            </div>
          </div>
          <div className="space-y-3">
            {[{ name: 'Bocagrande', value: 92 }, { name: 'El Poblado', value: 85 }, { name: 'Santa Marta', value: 78 }].map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">{p.name}</span>
                    <span className="text-white/50">{p.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" style={{ width: `${p.value}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Reservas Recientes</h2>
          <Link href="/dashboard/reservas" className="text-amber-400 text-sm hover:text-amber-300">Ver todas →</Link>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-white/40 text-sm border-b border-white/10">
              <th className="text-left pb-4 font-medium">ID</th>
              <th className="text-left pb-4 font-medium">Huésped</th>
              <th className="text-left pb-4 font-medium">Propiedad</th>
              <th className="text-left pb-4 font-medium">Fechas</th>
              <th className="text-right pb-4 font-medium">Monto</th>
              <th className="text-right pb-4 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking) => (
              <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-4 text-sm text-white/50">{booking.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full flex items-center justify-center text-sm font-medium">{booking.guest[0]}</div>
                    <span className="text-sm">{booking.guest}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-white/70">{booking.property}</td>
                <td className="py-4 text-sm text-white/50">{booking.dates}</td>
                <td className="py-4 text-sm text-right font-medium">${booking.amount.toLocaleString()}</td>
                <td className="py-4 text-right">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {booking.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
