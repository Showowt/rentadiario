'use server';

import { revalidatePath } from 'next/cache';
import { createServerClient } from '@/lib/supabase/server';
import { differenceInDays } from 'date-fns';
import { calculateBookingTotal } from '@/lib/utils/pricing';

export async function createBooking(data: {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  infants: number;
  specialRequests?: string;
}) {
  try {
    const supabase = createServerClient();
    
    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: 'Usuario no autenticado' };
    }

    // Get property details
    const { data: property, error: propertyError } = await supabase
      .from('properties')
      .select('*')
      .eq('id', data.propertyId)
      .eq('is_active', true)
      .single();

    if (propertyError || !property) {
      return { success: false, error: 'Propiedad no encontrada' };
    }

    // Validate dates and guests
    const nights = differenceInDays(new Date(data.checkOut), new Date(data.checkIn));
    const totalGuests = data.adults + data.children + data.infants;

    if (nights < property.min_stay) {
      return { 
        success: false, 
        error: `Estancia mínima: ${property.min_stay} noches` 
      };
    }

    if (totalGuests > property.max_guests) {
      return { 
        success: false, 
        error: `Máximo ${property.max_guests} huéspedes permitidos` 
      };
    }

    // Check availability
    const { data: conflictingBookings } = await supabase
      .from('bookings')
      .select('id')
      .eq('property_id', data.propertyId)
      .in('status', ['confirmed', 'pending'])
      .or(
        `and(check_in.lte.${data.checkIn},check_out.gt.${data.checkIn}),` +
        `and(check_in.lt.${data.checkOut},check_out.gte.${data.checkOut}),` +
        `and(check_in.gte.${data.checkIn},check_out.lte.${data.checkOut})`
      );

    if (conflictingBookings && conflictingBookings.length > 0) {
      return { 
        success: false, 
        error: 'Las fechas seleccionadas no están disponibles' 
      };
    }

    // Calculate pricing
    const pricing = calculateBookingTotal({
      basePrice: property.base_price,
      nights,
      cleaningFee: property.cleaning_fee,
      guests: totalGuests,
    });

    // Create booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        property_id: data.propertyId,
        guest_id: user.id,
        host_id: property.host_id,
        check_in: data.checkIn,
        check_out: data.checkOut,
        guests: totalGuests,
        adults: data.adults,
        children: data.children,
        infants: data.infants,
        nights,
        base_amount: pricing.subtotal,
        cleaning_fee: pricing.cleaningFee,
        service_fee: pricing.serviceFee,
        total_amount: pricing.total,
        status: property.instant_booking ? 'confirmed' : 'pending',
        special_requests: data.specialRequests,
      })
      .select()
      .single();

    if (bookingError) {
      console.error('Booking creation error:', bookingError);
      return { success: false, error: 'Error al crear la reserva' };
    }

    revalidatePath('/mis-reservas');
    return { success: true, data: booking };

  } catch (error) {
    console.error('Booking error:', error);
    return { success: false, error: 'Error inesperado' };
  }
}

export async function updateBookingStatus(
  bookingId: string, 
  status: 'confirmed' | 'cancelled'
) {
  try {
    const supabase = createServerClient();
    
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: 'Usuario no autenticado' };
    }

    // Verify user can modify this booking
    const { data: booking } = await supabase
      .from('bookings')
      .select('host_id, guest_id')
      .eq('id', bookingId)
      .single();

    if (!booking || (booking.host_id !== user.id && booking.guest_id !== user.id)) {
      return { success: false, error: 'No autorizado' };
    }

    const updateData: any = { status };
    if (status === 'cancelled') {
      updateData.cancelled_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from('bookings')
      .update(updateData)
      .eq('id', bookingId);

    if (error) {
      return { success: false, error: 'Error al actualizar la reserva' };
    }

    revalidatePath('/mis-reservas');
    revalidatePath('/anfitrion');
    return { success: true };

  } catch (error) {
    return { success: false, error: 'Error inesperado' };
  }
}