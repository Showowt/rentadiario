export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
      };
      properties: {
        Row: Property;
        Insert: Omit<Property, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Property, 'id' | 'created_at'>>;
      };
      // ... other tables
    };
  };
}

// types/index.ts
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  avatar_url?: string;
  is_host: boolean;
  is_verified: boolean;
  identity_document?: string;
  identity_verified: boolean;
  phone_verified: boolean;
  bio?: string;
  languages?: string[];
  preferred_currency: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  host_id: string;
  title: string;
  description: string;
  property_type: PropertyType;
  address: string;
  city: string;
  department: string;
  latitude?: number;
  longitude?: number;
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  base_price: number;
  currency: string;
  cleaning_fee: number;
  security_deposit: number;
  min_stay: number;
  max_stay?: number;
  instant_booking: boolean;
  house_rules?: string;
  cancellation_policy: CancellationPolicy;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  photos?: PropertyPhoto[];
  amenities?: Amenity[];
  host?: Profile;
  average_rating?: number;
  review_count?: number;
}

export interface PropertyPhoto {
  id: string;
  property_id: string;
  photo_url: string;
  alt_text?: string;
  display_order: number;
  is_primary: boolean;
  created_at: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
  category: AmenityCategory;
  created_at: string;
}

export interface Booking {
  id: string;
  property_id: string;
  guest_id: string;
  host_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  adults: number;
  children: number;
  infants: number;
  nights: number;
  base_amount: number;
  cleaning_fee: number;
  service_fee: number;
  taxes: number;
  total_amount: number;
  currency: string;
  status: BookingStatus;
  payment_status: PaymentStatus;
  wompi_transaction_id?: string;
  special_requests?: string;
  cancellation_reason?: string;
  cancelled_at?: string;
  created_at: string;
  updated_at: string;
  property?: Property;
  guest?: Profile;
  host?: Profile;
}

export interface Review {
  id: string;
  booking_id: string;
  reviewer_id: string;
  reviewee_id: string;
  property_id?: string;
  rating: number;
  cleanliness_rating?: number;
  accuracy_rating?: number;
  communication_rating?: number;
  location_rating?: number;
  checkin_rating?: number;
  value_rating?: number;
  comment?: string;
  response?: string;
  response_date?: string;
  is_public: boolean;
  created_at: string;
  reviewer?: Profile;
  property?: Property;
}

export interface Conversation {
  id: string;
  guest_id: string;
  host_id: string;
  property_id?: string;
  booking_id?: string;
  last_message_at: string;
  created_at: string;
  guest?: Profile;
  host?: Profile;
  property?: Property;
  messages?: Message[];
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  message_type: MessageType;
  is_read: boolean;
  created_at: string;
  sender?: Profile;
}

export interface SearchFilters {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  adults?: number;
  children?: number;
  infants?: number;
  priceMin?: number;
  priceMax?: number;
  propertyTypes?: PropertyType[];
  amenities?: string[];
  instantBooking?: boolean;
  minRating?: number;
}

export interface SearchResult {
  properties: Property[];
  total: number;
  page: number;
  limit: number;
  filters: SearchFilters;
}

// Enums
export type PropertyType = 'apartment' | 'house' | 'villa' | 'cabin' | 'loft' | 'studio';
export type AmenityCategory = 'basics' | 'safety' | 'accessibility' | 'entertainment' | 'kitchen' | 'outdoor';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type CancellationPolicy = 'flexible' | 'moderate' | 'strict';
export type MessageType = 'text' | 'image' | 'system';

// Forms
export interface SignUpForm {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  agreeToTerms: boolean;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface PropertyForm {
  title: string;
  description: string;
  property_type: PropertyType;
  address: string;
  city: string;
  department: string;
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  base_price: number;
  cleaning_fee: number;
  security_deposit: number;
  min_stay: number;
  max_stay?: number;
  instant_booking: boolean;
  house_rules?: string;
  cancellation_policy: CancellationPolicy;
  amenities: string[];
  photos: File[];
}

export interface BookingForm {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  infants: number;
  specialRequests?: string;
}

// API Responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface WompiPaymentResponse {
  data: {
    id: string;
    amount_in_cents: number;
    currency: string;
    status: string;
    reference: string;
    payment_method: any;
    created_at: string;
  };
}

export interface UploadResponse {
  url: string;
  path: string;
}