'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function SearchForm() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('ciudad', location)
    if (checkIn) params.set('entrada', checkIn)
    if (checkOut) params.set('salida', checkOut)
    if (guests) params.set('huespedes', guests)
    router.push(`/buscar?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <Input placeholder="¿A dónde vas?" value={location} onChange={(e) => setLocation(e.target.value)} />
      <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      <Input type="number" min="1" max="16" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-24" />
      <Button type="submit">Buscar</Button>
    </form>
  )
}
