const bookings = [
  { id: 'RD-2024-001', guest: 'Carlos Rodríguez', property: 'Apartamento Bocagrande', checkIn: '2024-02-05', checkOut: '2024-02-08', nights: 3, guests: 2, amount: 1350000, status: 'confirmed' },
  { id: 'RD-2024-002', guest: 'Ana María López', property: 'Penthouse El Poblado', checkIn: '2024-02-07', checkOut: '2024-02-12', nights: 5, guests: 4, amount: 3400000, status: 'pending' },
  { id: 'RD-2024-003', guest: 'John Smith', property: 'Apartamento Bocagrande', checkIn: '2024-02-10', checkOut: '2024-02-14', nights: 4, guests: 2, amount: 1800000, status: 'confirmed' },
  { id: 'RD-2024-004', guest: 'Patricia Gómez', property: 'Casa Santa Marta', checkIn: '2024-02-15', checkOut: '2024-02-20', nights: 5, guests: 6, amount: 4450000, status: 'confirmed' },
]

export default function ReservasPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reservas</h1>
          <p className="text-white/50">Gestiona todas las reservas de tus propiedades</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {[{ label: 'Todas', count: 4, active: true }, { label: 'Confirmadas', count: 3 }, { label: 'Pendientes', count: 1 }].map((f) => (
          <button key={f.label} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${f.active ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-white/60 border border-white/10'}`}>
            {f.label} <span className="ml-2 text-white/40">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-white/40 text-sm border-b border-white/10 bg-white/5">
              <th className="text-left px-6 py-4 font-medium">Reserva</th>
              <th className="text-left px-6 py-4 font-medium">Huésped</th>
              <th className="text-left px-6 py-4 font-medium">Propiedad</th>
              <th className="text-left px-6 py-4 font-medium">Fechas</th>
              <th className="text-right px-6 py-4 font-medium">Monto</th>
              <th className="text-center px-6 py-4 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-amber-400">{booking.id}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold">{booking.guest[0]}</div>
                    <div>
                      <p className="font-medium">{booking.guest}</p>
                      <p className="text-xs text-white/40">{booking.guests} huéspedes</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-white/80">{booking.property}</td>
                <td className="px-6 py-4">
                  <p className="text-sm">{booking.checkIn} → {booking.checkOut}</p>
                  <p className="text-xs text-white/40">{booking.nights} noches</p>
                </td>
                <td className="px-6 py-4 text-right font-semibold">${booking.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
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
