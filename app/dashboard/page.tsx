const stats = [
  { label: 'Total Revenue', value: '$12,450', change: '+12.5%', up: true },
  { label: 'Active Bookings', value: '8', change: '+3', up: true },
  { label: 'Occupancy Rate', value: '87%', change: '+5%', up: true },
  { label: 'Avg Rating', value: '4.9', change: '0.0', up: true },
]

const recentBookings = [
  { id: 'RD-001', guest: 'Carlos Rodriguez', property: 'Loft El Laguito', dates: 'Feb 5-8', amount: '$230', status: 'confirmed' },
  { id: 'RD-002', guest: 'Ana Maria Lopez', property: 'Palmetto Beach', dates: 'Feb 7-12', amount: '$615', status: 'pending' },
  { id: 'RD-003', guest: 'John Smith', property: 'Luxury Jacuzzi', dates: 'Feb 10-14', amount: '$1,400', status: 'confirmed' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/50 text-sm mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold">{stat.value}</p>
              <span className="text-sm px-2 py-1 rounded-lg bg-green-500/10 text-green-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Bookings</h2>
          <a href="/dashboard/reservas" className="text-[#17A2B8] text-sm hover:underline">View all</a>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-white/40 text-sm border-b border-white/10">
              <th className="text-left pb-4">ID</th>
              <th className="text-left pb-4">Guest</th>
              <th className="text-left pb-4">Property</th>
              <th className="text-left pb-4">Dates</th>
              <th className="text-right pb-4">Amount</th>
              <th className="text-center pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((b) => (
              <tr key={b.id} className="border-b border-white/5">
                <td className="py-4 text-[#17A2B8]">{b.id}</td>
                <td className="py-4">{b.guest}</td>
                <td className="py-4 text-white/60">{b.property}</td>
                <td className="py-4 text-white/60">{b.dates}</td>
                <td className="py-4 text-right font-semibold">{b.amount}</td>
                <td className="py-4 text-center">
                  <span className={b.status === 'confirmed' ? 'px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400' : 'px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-400'}>
                    {b.status}
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
