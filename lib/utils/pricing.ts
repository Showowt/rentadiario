export function formatCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount)
}

export function calculateTotalPrice(
  pricePerNight: number,
  checkIn: Date,
  checkOut: Date,
  serviceFeePercent: number = 10
) {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  const subtotal = pricePerNight * nights
  const serviceFee = Math.round(subtotal * (serviceFeePercent / 100))
  const total = subtotal + serviceFee
  return { nights, subtotal, serviceFee, total }
}

export function calculateBookingTotal(params: {
  basePrice: number
  nights: number
  cleaningFee?: number
  guests?: number
  serviceFeePercent?: number
}) {
  const { basePrice, nights, cleaningFee = 0, serviceFeePercent = 10 } = params
  const subtotal = basePrice * nights
  const serviceFee = Math.round(subtotal * (serviceFeePercent / 100))
  const total = subtotal + cleaningFee + serviceFee
  return { nights, subtotal, cleaningFee, serviceFee, total }
}
