"use client"
import Link from 'next/link'
import { useState } from 'react'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#17A2B8] rounded-lg flex items-center justify-center text-white font-bold text-sm">RD</div>
          <span className="font-bold">Renta Diario</span>
        </Link>
        <Link href="/dashboard/propiedades/nueva" className="w-10 h-10 flex items-center justify-center bg-[#17A2B8] rounded-xl">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </Link>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-r border-white/10 flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold">RD</div>
                <div>
                  <span className="font-bold">Renta Diario</span>
                  <p className="text-xs text-white/40">Host Panel</p>
                </div>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex-1 p-4 overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                      {item.badge && <span className="ml-auto bg-[#17A2B8] text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
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
                  <p className="text-xs text-white/40">Superhost</p>
                </div>
              </div>
              <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition text-white/60 mt-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                <span>Sign out</span>
              </Link>
            </div>
          </aside>
        </div>
      )}

      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 h-screen sticky top-0 bg-[#0a0a0a] border-r border-white/10 flex-col">
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
              <div>
                <span className="text-lg font-bold">Renta Diario</span>
                <p className="text-xs text-white/40">Host Panel</p>
              </div>
            </Link>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition text-white/70 hover:text-white">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.badge && <span className="ml-auto bg-[#17A2B8] text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
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

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:min-h-0">
          {/* Desktop Header */}
          <header className="hidden lg:flex h-16 border-b border-white/10 items-center justify-between px-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Link href="/dashboard/propiedades/nueva" className="flex items-center gap-2 px-4 py-2 bg-[#17A2B8] text-white rounded-xl hover:bg-[#138496] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              New Property
            </Link>
          </header>
          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
