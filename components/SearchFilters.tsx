'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function SearchFilters({ onFilter }: { onFilter?: (filters: any) => void }) {
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 space-y-4">
      <h3 className="font-semibold text-white">Filtros</h3>
      <div>
        <label className="text-sm text-slate-400">Precio por noche</label>
        <div className="flex gap-2 mt-1">
          <Input placeholder="Min" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
          <Input placeholder="Max" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="text-sm text-slate-400">Habitaciones</label>
        <Input type="number" min="1" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="mt-1" />
      </div>
      <Button onClick={() => onFilter?.({ priceMin, priceMax, bedrooms })} className="w-full">Aplicar</Button>
    </div>
  )
}
