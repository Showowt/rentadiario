'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { addDays, differenceInDays, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from '@/components/ui/Calendar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Alert } from '@/components/ui/Alert';
import { createBooking } from '@/app/actions/bookings';
import { calculateBookingTotal } from '@/lib/utils/pricing';
import { Property } from '@/types';

const bookingSchema = z.object({
  checkIn: z.string().min(1, 'Selecciona fecha de llegada'),
  checkOut: z.string().min(1, 'Selecciona fecha de salida'),
  adults: z.number().min(1, 'Mínimo 1 adulto').max(16),
  children: z.number().min(0).max(16),
  infants: z.number().min(0).max(16),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  property: Property;
  initialData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  };
}

export default function BookingForm({ property, initialData }: BookingFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [pricing, setPricing] = useState<any>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkIn: initialData?.checkIn || '',
      checkOut: initialData?.checkOut || '',
      adults: Math.min(initialData?.guests || 1, property.max_guests),
      children: 0,
      infants: 0,
      specialRequests: '',
    },
  });

  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');
  const adults = watch('adults');
  const children = watch('children');
  const infants = watch('infants');

  // Calculate pricing when dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const nights = differenceInDays(new Date(checkOut), new Date(checkIn));
      if (nights > 0) {
        const total = calculateBookingTotal({
          basePrice: property.base_price,
          nights,
          cleaningFee: property.cleaning_fee,
          guests: adults + children,
        });
        setPricing(total);
      }
    }
  }, [checkIn, checkOut, adults, children, property]);

  // Load unavailable dates
  useEffect(() => {
    // This would fetch unavailable dates from the API
    // For now, we'll simulate some unavailable dates
    setUnavailableDates([]);
  }, [property.id]);

  const onSubmit = async (data: BookingFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      const nights = differenceInDays(new Date(data.checkOut), new Date(data.checkIn));
      const totalGuests = data.adults + data.children + data.infants;

      if (nights < property.min_stay) {
        throw new Error(`Estancia mínima: ${property.min_stay} noches`);
      }

      if (totalGuests > property.max_guests) {
        throw new Error(`Máximo ${property.max_guests} huéspedes permitidos`);
      }

      const booking = await createBooking({
        propertyId: property.id,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        adults: data.adults,
        children: data.children,
        infants: data.infants,
        specialRequests: data.specialRequests,
      });

      if (booking.success) {
        router.push(`/pago/${booking.data.id}`);
      } else {
        setError(booking.error || 'Error al crear la reserva');
      }
    } catch (err: any) {
      setError(err.message || 'Error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  const totalGuests = adults + children + infants;
  const maxGuestsReached = totalGuests >= property.max_guests;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <Alert variant="destructive">{error}</Alert>}

      {/* Date Selection */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Fechas</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Llegada
            </label>
            <Controller
              name="checkIn"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  min={format(new Date(), 'yyyy-MM-dd')}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              )}
            />
            {errors.checkIn && (
              <p className="text-red-400 text-sm mt-1">{errors.checkIn.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Salida
            </label>
            <Controller
              name="checkOut"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="date"
                  min={checkIn || format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              )}
            />
            {errors.checkOut && (
              <p className="text-red-400 text-sm mt-1">{errors.checkOut.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Guest Selection */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Huéspedes</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Adultos</p>
              <p className="text-slate-400 text-sm">13 años o más</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('adults', Math.max(1, adults - 1))}
                disabled={adults <= 1}
                className="w-8 h-8 p-0"
              >
                -
              </Button>
              <span className="text-white w-8 text-center">{adults}</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('adults', adults + 1)}
                disabled={maxGuestsReached}
                className="w-8 h-8 p-0"
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Niños</p>
              <p className="text-slate-400 text-sm">2-12 años</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('children', Math.max(0, children - 1))}
                disabled={children <= 0}
                className="w-8 h-8 p-0"
              >
                -
              </Button>
              <span className="text-white w-8 text-center">{children}</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('children', children + 1)}
                disabled={maxGuestsReached}
                className="w-8 h-8 p-0"
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Bebés</p>
              <p className="text-slate-400 text-sm">Menores de 2 años</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('infants', Math.max(0, infants - 1))}
                disabled={infants <= 0}
                className="w-8 h-8 p-0"
              >
                -
              </Button>
              <span className="text-white w-8 text-center">{infants}</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setValue('infants', infants + 1)}
                disabled={maxGuestsReached}
                className="w-8 h-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Solicitudes especiales (opcional)
        </label>
        <Textarea
          {...register('specialRequests')}
          placeholder="¿Algo especial que necesites durante tu estadía?"
          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          rows={3}
        />
      </div>

      {/* Pricing Summary */}
      {pricing && (
        <div className="bg-slate-700/30 rounded-lg p-4 space-y-2">
          <h4 className="font-semibold text-white mb-3">Resumen de precios</h4>
          <div className="flex justify-between text-slate-300">
            <span>${property.base_price.toLocaleString('es-CO')} COP × {pricing.nights} noches</span>
            <span>${pricing.subtotal.toLocaleString('es-CO')} COP</span>
          </div>
          {pricing.cleaningFee > 0 && (
            <div className="flex justify-between text-slate-300">
              <span>Tarifa de limpieza</span>
              <span>${pricing.cleaningFee.toLocaleString('es-CO')} COP</span>
            </div>
          )}
          <div className="flex justify-between text-slate-300">
            <span>Tarifa de servicio</span>
            <span>${pricing.serviceFee.toLocaleString('es-CO')} COP</span>
          </div>
          <hr className="border-slate-600" />
          <div className="flex justify-between font-semibold text-white">
            <span>Total</span>
            <span>${pricing.total.toLocaleString('es-CO')} COP</span>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading || !pricing}
        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
      >
        {isLoading ? 'Procesando...' : 'Continuar al pago'}
      </Button>
    </form>
  );
}