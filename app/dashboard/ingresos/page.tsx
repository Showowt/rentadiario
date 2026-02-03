const earnings = [
  { month: 'Enero 2024', bookings: 14, revenue: 4250000, fees: 425000, net: 3825000 },
  { month: 'Diciembre 2023', bookings: 18, revenue: 5680000, fees: 568000, net: 5112000 },
  { month: 'Noviembre 2023', bookings: 12, revenue: 3450000, fees: 345000, net: 3105000 },
  { month: 'Octubre 2023', bookings: 10, revenue: 2890000, fees: 289000, net: 2601000 },
]

export default function IngresosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Ingresos</h1>
          <p className="text-white/50">Gestiona tus ganancias y pagos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6">
          <p className="text-white/60 text-sm">Balance Disponible</p>
          <p className="text-3xl font-bold text-amber-400">$4,250,000</p>
          <p className="text-sm text-green-400 mt-2">+12.5% vs mes anterior</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white/60 text-sm">Proximo Pago</p>
          <p className="text-3xl font-bold">$2,450,000</p>
          <p className="text-xs text-white/40 mt-2">Feb 15, 2024</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white/60 text-sm">Ingresos Este Ano</p>
          <p className="text-3xl font-bold">$28.4M</p>
          <p className="text-xs text-green-400 mt-2">+23% vs ano anterior</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white/60 text-sm">Total Pagado</p>
          <p className="text-3xl font-bold">$18.3M</p>
          <p className="text-xs text-white/40 mt-2">69 reservas completadas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Historial de Ganancias</h2>
          <table className="w-full">
            <thead>
              <tr className="text-white/40 text-sm border-b border-white/10">
                <th className="text-left pb-4 font-medium">Periodo</th>
                <th className="text-center pb-4 font-medium">Reservas</th>
                <th className="text-right pb-4 font-medium">Ingresos</th>
                <th className="text-right pb-4 font-medium">Comision</th>
                <th className="text-right pb-4 font-medium">Neto</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((e) => (
                <tr key={e.month} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 font-medium">{e.month}</td>
                  <td className="py-4 text-center text-white/60">{e.bookings}</td>
                  <td className="py-4 text-right">${e.revenue.toLocaleString()}</td>
                  <td className="py-4 text-right text-white/40">-${e.fees.toLocaleString()}</td>
                  <td className="py-4 text-right font-semibold text-amber-400">${e.net.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Cuenta Bancaria</h2>
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4 mb-4">
            <p className="text-lg font-bold mb-2">Bancolombia</p>
            <p className="text-white/60 text-sm">Cuenta de Ahorros</p>
            <p className="text-lg font-mono mt-2">**** **** **** 4532</p>
            <p className="text-white/40 text-sm mt-2">Maria Gonzalez</p>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold rounded-xl">
            Solicitar Pago Manual
          </button>
        </div>
      </div>
    </div>
  )
}
