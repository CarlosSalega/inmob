export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  operation: "Compra" | "Venta" | "Alquiler";
  rating: number;
  text: string;
  propertyType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María García",
    neighborhood: "Belgrano C",
    operation: "Compra",
    rating: 5,
    text: "Encontramos nuestro depto ideal gracias a InmoBel. Nos acompañaron en todo el proceso, desde la primera visita hasta la escritura. Muy profesionales.",
    propertyType: "Depto 3 ambientes",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    neighborhood: "Núñez",
    operation: "Venta",
    rating: 5,
    text: "Vendimos nuestra casa en menos de un mes. La tasación fue justa y la difusión en su web generó muchas consultas. Excelente servicio.",
    propertyType: "Casa 4 ambientes",
  },
  {
    id: "3",
    name: "Laura Martínez",
    neighborhood: "Palermo",
    operation: "Alquiler",
    rating: 4,
    text: "Alquilé un monoambiente cerca de todo. Me mostraron varias opciones y me ayudaron a elegir la que mejor se adaptaba a mi presupuesto.",
    propertyType: "Monoambiente",
  },
  {
    id: "4",
    name: "Diego Fernández",
    neighborhood: "Saavedra",
    operation: "Compra",
    rating: 5,
    text: "Buscaba una casa con jardín para mi familia. InmoBel entendió exactamente lo que necesitaba y me mostró opciones que no había visto en portales.",
    propertyType: "Casa 5 ambientes",
  },
  {
    id: "5",
    name: "Ana López",
    neighborhood: "Coghlan",
    operation: "Venta",
    rating: 5,
    text: "Vendí mi PH sin expensas en tiempo récord. Las fotos profesionales y la descripción detallada hicieron toda la diferencia.",
    propertyType: "PH 3 ambientes",
  },
  {
    id: "6",
    name: "Martín Suárez",
    neighborhood: "Villa Urquiza",
    operation: "Alquiler",
    rating: 4,
    text: "Como inquilino valoro la transparencia. Me explicaron todo sobre el contrato, garantías y expensas antes de firmar. Muy recomendable.",
    propertyType: "Depto 2 ambientes",
  },
];
