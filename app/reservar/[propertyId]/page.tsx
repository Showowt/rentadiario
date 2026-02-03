import { notFound } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';
import BookingForm from '@/components/booking/BookingForm';
import PropertySummary from '@/components/booking/PropertySummary';

interface BookingPageProps {
  params: {
    propertyId: string;
  };
  searchParams: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  };
}

export default async function BookingPage({ params, searchParams }: BookingPageProps) {
  const supabase = createServerClient();

  const { data: property } = await supabase
    .from('properties')
    .select(`
      *,
      photos:property_photos(*),
      host:profiles!properties_host_id_fkey(*),
      amenities:property_amenities(amenity:amenities(*))
    `)
    .eq('id', params.propertyId)
    .eq('is_active', true)
    .single();

  if (!property) {
    notFound();
  }

  const initialData = {
    checkIn: searchParams.checkIn,
    checkOut: searchParams.checkOut,
    guests: searchParams.guests ? parseInt(searchParams.guests) : 1,
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Reservar tu estadía</h1>
            <p className="text-slate-300">Completa los detalles de tu reserva</p>
          </div>

          <div className="lg:flex lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <PropertySummary property={property} />
            </div>

            <div className="lg:w-1/2">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8">
                <BookingForm 
                  property={property} 
                  initialData={initialData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}