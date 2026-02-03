import { Suspense } from 'react';
import { createServerClient } from '@/lib/supabase/server';
import SearchForm from '@/components/SearchForm';
import PropertyGrid from '@/components/property/PropertyGrid';
import SearchFilters from '@/components/SearchFilters';
import { SearchFilters as SearchFiltersType } from '@/types';

interface SearchPageProps {
  searchParams: {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    adults?: string;
    children?: string;
    infants?: string;
    priceMin?: string;
    priceMax?: string;
    propertyTypes?: string;
    amenities?: string;
    instantBooking?: string;
    page?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const filters: SearchFiltersType = {
    location: searchParams.location,
    checkIn: searchParams.checkIn,
    checkOut: searchParams.checkOut,
    guests: searchParams.guests ? parseInt(searchParams.guests) : undefined,
    adults: searchParams.adults ? parseInt(searchParams.adults) : undefined,
    children: searchParams.children ? parseInt(searchParams.children) : undefined,
    infants: searchParams.infants ? parseInt(searchParams.infants) : undefined,
    priceMin: searchParams.priceMin ? parseFloat(searchParams.priceMin) : undefined,
    priceMax: searchParams.priceMax ? parseFloat(searchParams.priceMax) : undefined,
    propertyTypes: searchParams.propertyTypes?.split(',') as any[],
    amenities: searchParams.amenities?.split(','),
    instantBooking: searchParams.instantBooking === 'true',
  };

  const page = parseInt(searchParams.page || '1');

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchForm initialFilters={filters} />
        </div>

        <div className="lg:flex lg:gap-8">
          <aside className="lg:w-80 mb-8 lg:mb-0">
            <SearchFilters filters={filters} />
          </aside>

          <main className="flex-1">
            <Suspense fallback={<PropertyGridSkeleton />}>
              <PropertySearchResults filters={filters} page={page} />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}

async function PropertySearchResults({
  filters,
  page,
}: {
  filters: SearchFiltersType;
  page: number;
}) {
  const supabase = createServerClient();
  
  let query = supabase
    .from('properties')
    .select(`
      *,
      photos:property_photos(*),
      host:profiles!properties_host_id_fkey(*),
      amenities:property_amenities(amenity:amenities(*))
    `)
    .eq('is_active', true);

  // Apply filters
  if (filters.location) {
    query = query.or(
      `city.ilike.%${filters.location}%,department.ilike.%${filters.location}%,address.ilike.%${filters.location}%`
    );
  }

  if (filters.guests) {
    query = query.gte('max_guests', filters.guests);
  }

  if (filters.priceMin) {
    query = query.gte('base_price', filters.priceMin);
  }

  if (filters.priceMax) {
    query = query.lte('base_price', filters.priceMax);
  }

  if (filters.propertyTypes?.length) {
    query = query.in('property_type', filters.propertyTypes);
  }

  if (filters.instantBooking) {
    query = query.eq('instant_booking', true);
  }

  // Check availability if dates provided
  if (filters.checkIn && filters.checkOut) {
    const { data: availableProperties } = await supabase.rpc(
      'get_available_properties',
      {
        check_in_date: filters.checkIn,
        check_out_date: filters.checkOut,
      }
    );

    if (availableProperties) {
      const availableIds = availableProperties.map((p: any) => p.id);
      query = query.in('id', availableIds);
    }
  }

  const limit = 12;
  const offset = (page - 1) * limit;

  const { data: properties, error, count } = await query
    .range(offset, offset + limit - 1)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Search error:', error);
    return <div className="text-red-400">Error al buscar propiedades</div>;
  }

  return (
    <PropertyGrid
      properties={properties || []}
      total={count || 0}
      page={page}
      limit={limit}
    />
  );
}

function PropertyGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-xl overflow-hidden animate-pulse"
        >
          <div className="h-48 bg-slate-700" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-slate-700 rounded w-3/4" />
            <div className="h-3 bg-slate-700 rounded w-1/2" />
            <div className="h-4 bg-slate-700 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}