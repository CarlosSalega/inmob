export interface Property {
  id: string;
  slug: string;
  title: string;
  type: "Depto" | "Casa" | "PH" | "Local Comercial";
  operation: "Venta" | "Alquiler";
  neighborhood: string;
  address: string;
  description: string;
  price: number;
  currency: "USD" | "ARS";
  priceLabel?: string;
  specs: {
    ambientes?: number;
    dormitorios?: number;
    bathrooms?: number;
    superficieTotal?: number;
    superficieCubierta?: number;
    antiguedad?: string;
    expensas?: number;
    estacionamiento?: number;
  };
  features: string[];
  images: string[];
  featured?: boolean;
  lat?: number;
  lng?: number;
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "depto-3amb-belgrano-c",
    title: "Depto 3 ambientes en Belgrano C",
    type: "Depto",
    operation: "Venta",
    neighborhood: "Belgrano C",
    address: "Av. Cabildo 2800, Belgrano C",
    description:
      "Hermoso departamento de 3 ambientes sobre Av. Cabildo, totalmente reformado. Living-comedor amplio, cocina integrada con barra, dormitorio principal con vestidor, segundo dormitorio, baño completo. Excelente iluminación natural. Edificio con seguridad 24hs.",
    price: 185000,
    currency: "USD",
    specs: {
      ambientes: 3,
      dormitorios: 2,
      bathrooms: 1,
      superficieTotal: 75,
      superficieCubierta: 68,
      antiguedad: "30 años",
      expensas: 85000,
      estacionamiento: 0,
    },
    features: [
      "Reformado",
      "Living-comedor",
      "Cocina integrada",
      "Vestidor",
      "Seguridad 24hs",
      "Luminoso",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: true,
    lat: -34.5631,
    lng: -58.4583,
  },
  {
    id: "2",
    slug: "casa-4amb-coghlan",
    title: "Casa 4 ambientes con jardín en Coghlan",
    type: "Casa",
    operation: "Venta",
    neighborhood: "Coghlan",
    address: "Av. Tronador 2100, Coghlan",
    description:
      "Casa estilo colonial en excelente estado. Planta baja: living, comedor, cocina, toilette. Planta alta: 3 dormitorios, baño completo, balcón. Jardín delantero y trasero con parrilla. Cochera para 2 autos. Zona residencial tranquila cerca de todo.",
    price: 320000,
    currency: "USD",
    specs: {
      ambientes: 4,
      dormitorios: 3,
      bathrooms: 2,
      superficieTotal: 220,
      superficieCubierta: 150,
      antiguedad: "45 años",
      expensas: 0,
      estacionamiento: 2,
    },
    features: [
      "Jardín",
      "Parrilla",
      "Cochera doble",
      "Balcón",
      "Toilette",
      "Zona tranquila",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: true,
    lat: -34.556,
    lng: -58.478,
  },
  {
    id: "3",
    slug: "monoambiente-palermo",
    title: "Monoambiente moderno en Palermo Soho",
    type: "Depto",
    operation: "Alquiler",
    neighborhood: "Palermo",
    address: "Honduras 4500, Palermo Soho",
    description:
      "Monoambiente totalmente amoblado en el corazón de Palermo Soho. Kitchenette equipada, baño completo con columba de hidromasaje. Edificio nuevo con amenities: SUM, laundry, terraza. Ideal para profesionales o parejas jóvenes.",
    price: 350000,
    currency: "ARS",
    priceLabel: "$350.000/mes",
    specs: {
      ambientes: 1,
      dormitorios: 0,
      bathrooms: 1,
      superficieTotal: 35,
      superficieCubierta: 32,
      antiguedad: "2 años",
      expensas: 45000,
      estacionamiento: 0,
    },
    features: [
      "Amoblado",
      "Kitchenette",
      "Hidromasaje",
      "SUM",
      "Laundry",
      "Terraza",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: true,
    lat: -34.5889,
    lng: -58.4278,
  },
  {
    id: "4",
    slug: "depto-2amb-belgrano",
    title: "Depto 2 ambientes frente a plaza en Belgrano",
    type: "Depto",
    operation: "Alquiler",
    neighborhood: "Belgrano",
    address: "Mendoza 1800, Belgrano",
    description:
      "Departamento de 2 ambientes sobre plaza Barrancas de Belgrano. Living-comedor con balcón, dormitorio separado, cocina completa, baño con bañera. Piso de parquet, calefacción central. Edificio clásico bien mantenido.",
    price: 280000,
    currency: "ARS",
    priceLabel: "$280.000/mes",
    specs: {
      ambientes: 2,
      dormitorios: 1,
      bathrooms: 1,
      superficieTotal: 52,
      superficieCubierta: 48,
      antiguedad: "40 años",
      expensas: 38000,
      estacionamiento: 0,
    },
    features: [
      "Frente a plaza",
      "Balcón",
      "Parquet",
      "Calefacción central",
      "Bañera",
      "Cocina completa",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.5625,
    lng: -58.4542,
  },
  {
    id: "5",
    slug: "ph-3amb-villa-urquiza",
    title: "PH 3 ambientes sin expensas en Villa Urquiza",
    type: "PH",
    operation: "Venta",
    neighborhood: "Villa Urquiza",
    address: "Franklin D. Roosevelt 3200, Villa Urquiza",
    description:
      "PH de 3 ambientes en planta baja con patio propio. Living-comedor, cocina-comedor, 2 dormitorios, baño completo. Patio de 20m² con lavadero. Sin expensas, ideal para familias. Cerca de estación Urquiza y Av. Triunvirato.",
    price: 145000,
    currency: "USD",
    specs: {
      ambientes: 3,
      dormitorios: 2,
      bathrooms: 1,
      superficieTotal: 110,
      superficieCubierta: 75,
      antiguedad: "35 años",
      expensas: 0,
      estacionamiento: 0,
    },
    features: [
      "Sin expensas",
      "Patio propio",
      "Planta baja",
      "Lavadero",
      "Cerca del subte",
      "Zona comercial",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: true,
    lat: -34.578,
    lng: -58.492,
  },
  {
    id: "6",
    slug: "depto-4amb-nunez",
    title: "Depto 4 ambientes premium en Núñez",
    type: "Depto",
    operation: "Venta",
    neighborhood: "Núñez",
    address: "Av. del Libertador 6800, Núñez",
    description:
      "Departamento de categoría en torre sobre Av. del Libertador. 4 ambientes: living-comedor, cocina con laundry, suite principal con vestidor y baño, 2 dormitorios adicionales, baño completo. Vista al río, amenities completos del edificio.",
    price: 250000,
    currency: "USD",
    specs: {
      ambientes: 4,
      dormitorios: 3,
      bathrooms: 2,
      superficieTotal: 120,
      superficieCubierta: 110,
      antiguedad: "10 años",
      expensas: 120000,
      estacionamiento: 1,
    },
    features: [
      "Vista al río",
      "Suite con vestidor",
      "Laundry",
      "Pileta",
      "Gym",
      "Seguridad 24hs",
      "Cochera",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.5455,
    lng: -58.463,
  },
  {
    id: "7",
    slug: "casa-5amb-saavedra",
    title: "Casa 5 ambientes doble altura en Saavedra",
    type: "Casa",
    operation: "Venta",
    neighborhood: "Saavedra",
    address: "Monge 1500, Saavedra",
    description:
      "Casa de diseño con doble altura en living. Planta baja: living doble altura, comedor, cocina integrada, toilette, dormitorio de servicio. Planta alta: suite principal, 2 dormitorios, baño familiar, estudio. Jardín con pileta y quincho.",
    price: 410000,
    currency: "USD",
    specs: {
      ambientes: 5,
      dormitorios: 4,
      bathrooms: 3,
      superficieTotal: 350,
      superficieCubierta: 240,
      antiguedad: "8 años",
      expensas: 0,
      estacionamiento: 2,
    },
    features: [
      "Doble altura",
      "Pileta",
      "Quincho",
      "Cocina integrada",
      "Suite",
      "Estudio",
      "Jardín amplio",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.552,
    lng: -58.505,
  },
  {
    id: "8",
    slug: "depto-2amb-colegiales",
    title: "Depto 2 ambientes a estrenar en Colegiales",
    type: "Depto",
    operation: "Alquiler",
    neighborhood: "Colegiales",
    address: "Av. Forest 1200, Colegiales",
    description:
      "Departamento a estrenar en edificio nuevo. Living-comedor con balcón, dormitorio con placard, cocina completa con tendedero, baño con columba. Piso porcelanato, aire acondicionado frío/calor. Edificio con SUM y laundry.",
    price: 220000,
    currency: "ARS",
    priceLabel: "$220.000/mes",
    specs: {
      ambientes: 2,
      dormitorios: 1,
      bathrooms: 1,
      superficieTotal: 48,
      superficieCubierta: 44,
      antiguedad: "A estrenar",
      expensas: 35000,
      estacionamiento: 0,
    },
    features: [
      "A estrenar",
      "Balcón",
      "Aire acondicionado",
      "Porcelanato",
      "SUM",
      "Laundry",
      "Placard",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.57,
    lng: -58.468,
  },
  {
    id: "9",
    slug: "depto-3amb-belgrano-r",
    title: "Depto 3 ambientes reciclado en Belgrano R",
    type: "Depto",
    operation: "Venta",
    neighborhood: "Belgrano R",
    address: "Sucre 2100, Belgrano R",
    description:
      "Departamento totalmente reciclado en calle tranquila de Belgrano R. 3 ambientes amplios: living-comedor, cocina-comedor con barra, 2 dormitorios (uno en suite), baño completo. Cocina con electrodomésticos incluidos. Edificio de pocos vecinos.",
    price: 210000,
    currency: "USD",
    specs: {
      ambientes: 3,
      dormitorios: 2,
      bathrooms: 2,
      superficieTotal: 85,
      superficieCubierta: 78,
      antiguedad: "25 años (reciclado)",
      expensas: 72000,
      estacionamiento: 0,
    },
    features: [
      "Reciclado",
      "Suite",
      "Electrodomésticos incluidos",
      "Barra",
      "Pocos vecinos",
      "Calle tranquila",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.559,
    lng: -58.451,
  },
  {
    id: "10",
    slug: "local-comercial-av-cabildo",
    title: "Local comercial sobre Av. Cabildo",
    type: "Local Comercial",
    operation: "Alquiler",
    neighborhood: "Belgrano",
    address: "Av. Cabildo 2200, Belgrano",
    description:
      "Local comercial de 60m² sobre Av. Cabildo, zona de alto tránsito peatonal. Vidriera de 6 metros, baño, pequeño depósito. Ideal para retail, gastronomía o servicios. Excelente ubicación frente a estación Belgrano C.",
    price: 450000,
    currency: "ARS",
    priceLabel: "$450.000/mes",
    specs: {
      ambientes: 1,
      superficieTotal: 60,
      superficieCubierta: 55,
      antiguedad: "20 años",
      expensas: 25000,
    },
    features: [
      "Vidriera 6m",
      "Baño",
      "Depósito",
      "Alto tránsito",
      "Cerca del subte",
      "Zona comercial",
    ],
    images: [
      "/placeholder-property.webp",
      "/placeholder-property.webp",
      "/placeholder-property.webp",
    ],
    featured: false,
    lat: -34.564,
    lng: -58.456,
  },
];

export const neighborhoods = [
  "Todos",
  "Belgrano",
  "Belgrano C",
  "Belgrano R",
  "Palermo",
  "Coghlan",
  "Núñez",
  "Saavedra",
  "Villa Urquiza",
  "Colegiales",
];

export const propertyTypes = [
  "Todos",
  "Depto",
  "Casa",
  "PH",
  "Local Comercial",
];

export const operations = ["Todas", "Venta", "Alquiler"];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
