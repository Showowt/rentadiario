import Link from 'next/link'

const stats = [
  { label: 'Revenue', value: '$12,450', change: '+12.5%', up: true },
  { label: 'Bookings', value: '8', change: '+3', up: true },
  { label: 'Occupancy', value: '87%', change: '+5%', up: true },
  { label: 'Rating', value: '4.9', change: '0.0', up: true },
]

const recentBookings = [
  { id: 'RD-001', guest: 'Carlos R.', property: 'Loft El Laguito', dates: 'Feb 5-8', amount: '$230', status: 'confirmed' },
  { id: 'RD-002', guest: 'Ana M.', property: 'Palmetto Beach', dates: 'Feb 7-12', amount: '$615', status: 'pending' },
  { id: 'RD-003', guest: 'John S.', property: 'Luxury Jacuzzi', dates: 'Feb 10-14', amount: '$1,400', status: 'confirmed' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome - Mobile */}
      <div className="lg:hidden">
        <h1 className="text-xl font-bold">Welcome back, María 👋</h1>
        <p className="text-white/50 text-sm">Here is what is happening with your properties</p>
      </div>

      {/* Stats Grid - 2x2 on mobile, 4 col on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <p className="text-white/50 text-xs lg:text-sm mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-xl lg:text-3xl font-bold">{stat.value}</p>
              <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions - Mobile only */}
      <div className="lg:hidden grid grid-cols-4 gap-2">
        {[
          { icon: '🏠', label: 'Properties', href: '/dashboard/propiedades' },
          { icon: '📅', label: 'Bookings', href: '/dashboard/reservas' },
          { icon: '💬', label: 'Messages', href: '/dashboard/mensajes' },
          { icon: '💰', label: 'Income', href: '/dashboard/ingresos' },
        ].map((action) => (
          <Link key={action.label} href={action.href} className="flex flex-col items-center gap-1 p-3 bg-white/5 rounded-xl">
            <span className="text-2xl">{action.icon}</span>
            <span className="text-xs text-white/60">{action.label}</span>
          </Link>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold lg:text-lg">Recent Bookings</h2>
          <Link href="/dashboard/reservas" className="text-[#17A2B8] text-sm hover:underline">View all</Link>
        </div>
        
        {/* Mobile: Card layout */}
        <div className="lg:hidden space-y-3">
          {recentBookings.map((b) => (
            <div key={b.id} className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#17A2B8] to-[#4A90E2] rounded-full flex items-center justify-center text-sm font-bold">{b.guest[0]}</div>
                  <div>
                    <p className="font-medium text-sm">{b.guest}</p>
                    <p className="text-xs text-white/40">{b.id}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${b.status === 'confirmed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                  {b.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-white/60">{b.property}</p>
                  <p className="text-white/40 text-xs">{b.dates}</p>
                </div>
                <p className="font-semibold">{b.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table layout */}
        <table className="hidden lg:table w-full">
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
                  <span className={`px-3 py-1 rounded-full text-xs ${b.status === 'confirmed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Actions */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div className="flex-1">
            <h3 className="font-medium text-yellow-400">1 Pending Approval</h3>
            <p className="text-sm text-white/60 mt-1">Ana M. wants to book Palmetto Beach for Feb 7-12</p>
            <div className="flex gap-2 mt-3">
              <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg">Approve</button>
              <button className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
