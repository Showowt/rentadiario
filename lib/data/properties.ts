export const properties = [
  {
    id: "1",
    title: "Apartamento de Lujo en Bocagrande",
    city: "Cartagena",
    description: "Hermoso apartamento con vista al mar en la mejor zona de Cartagena",
    price_per_night: 450000,
    bedrooms: 2,
    bathrooms: 2,
    max_guests: 4,
    images: ["/placeholder.jpg"],
    amenities: ["WiFi", "Piscina", "Aire acondicionado", "Cocina"],
    rating: 4.9,
    review_count: 124
  },
  {
    id: "2", 
    title: "Penthouse en El Poblado",
    city: "Medellín",
    description: "Espectacular penthouse con vista panorámica de la ciudad",
    price_per_night: 680000,
    bedrooms: 3,
    bathrooms: 3,
    max_guests: 6,
    images: ["/placeholder.jpg"],
    amenities: ["WiFi", "Gimnasio", "Terraza", "Jacuzzi"],
    rating: 4.8,
    review_count: 89
  },
  {
    id: "3",
    title: "Loft Moderno en Chapinero",
    city: "Bogotá", 
    description: "Loft contemporáneo en el corazón de la zona gastronómica",
    price_per_night: 320000,
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    images: ["/placeholder.jpg"],
    amenities: ["WiFi", "Netflix", "Cocina equipada"],
    rating: 4.7,
    review_count: 56
  },
  {
    id: "4",
    title: "Casa Frente al Mar",
    city: "Santa Marta",
    description: "Casa privada con acceso directo a la playa",
    price_per_night: 890000,
    bedrooms: 4,
    bathrooms: 3,
    max_guests: 8,
    images: ["/placeholder.jpg"],
    amenities: ["Playa privada", "BBQ", "Kayaks", "Chef disponible"],
    rating: 5.0,
    review_count: 34
  },
  {
    id: "5",
    title: "Cabaña en San Andrés",
    city: "San Andrés",
    description: "Cabaña tropical a pasos del mar de siete colores",
    price_per_night: 520000,
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    images: ["/placeholder.jpg"],
    amenities: ["Snorkel", "Bicicletas", "Hamacas", "WiFi"],
    rating: 4.9,
    review_count: 67
  },
  {
    id: "6",
    title: "Suite Ejecutiva",
    city: "Barranquilla",
    description: "Suite moderna ideal para viajeros de negocios",
    price_per_night: 280000,
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    images: ["/placeholder.jpg"],
    amenities: ["WiFi", "Escritorio", "Gym", "Desayuno"],
    rating: 4.6,
    review_count: 42
  }
]

export function getProperty(id: string) {
  return properties.find(p => p.id === id)
}
