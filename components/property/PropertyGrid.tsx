import Link from 'next/link'
import { formatCOP } from '@/lib/utils/pricing'

interface Property {
  id: string
  title: string
  city: string
  price_per_night: number
  bedrooms: number
  bathrooms: number
  max_guests: number
  images?: string[]
}

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  if (!properties?.length) {
    return <div className="text-center py-12 text-slate-400">No se encontraron propiedades</div>
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((p) => (
        <Link key={p.id} href={`/propiedad/${p.id}`}>
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition">
            <div className="aspect-[4/3] bg-slate-700" />
            <div className="p-4">
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.city}</p>
              <p className="text-amber-400 font-semibold mt-2">{formatCOP(p.price_per_night)} / noche</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
