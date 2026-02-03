import Link from 'next/link'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Properties', href: '/dashboard/propiedades', icon: '🏠' },
  { name: 'Reservations', href: '/dashboard/reservas', icon: '📅' },
  { name: 'Messages', href: '/dashboard/mensajes', icon: '💬', badge: 3 },
  { name: 'Income', href: '/dashboard/ingresos', icon: '💰' },
  { name: 'Calendar', href: '/dashboard/calendario', icon: '🗓️' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
            <div>
              <span className="text-lg font-bold">Renta Diario</span>
              <p className="text-xs text-white/40">Host Panel</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition text-white/70 hover:text-white">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-[#17A2B8] text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#17A2B8] to-[#138496] rounded-full flex items-center justify-center font-bold">M</div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">María González</p>
              <p className="text-xs text-white/40">Superhost - Cartagena</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/propiedades/nueva" className="flex items-center gap-2 px-4 py-2 bg-[#17A2B8] text-white rounded-xl hover:bg-[#138496] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              New Property
            </Link>
          </div>
        </header>
        <div className="flex-1 p-6 overflow-auto">{children}</div>
      </main>
    </div>
  )
}
