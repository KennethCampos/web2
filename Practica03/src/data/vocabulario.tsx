// src/data/vocabulario.ts
export interface Pregunta {
  id: number;
  descripcion: string;
  respuesta: string;
  imagen: string;
}

export const vocabulario: Pregunta[] = [
  {
    id: 1,
    descripcion: "Lugar de la casa donde se preparan los alimentos",
    respuesta: "cocina",
    imagen: "/images/cocina.png",
  },
  {
    id: 2,
    descripcion: "Lugar de la casa donde se duerme",
    respuesta: "dormitorio",
    imagen: "/images/dormitorio.jpg",
  },
  {
    id: 3,
    descripcion: "Lugar donde se recibe a las visitas",
    respuesta: "sala",
    imagen: "/images/sala.jpg",
  },
  {
    id: 4,
    descripcion: "Lugar donde se guarda el coche",
    respuesta: "garaje",
    imagen: "/images/garaje.jpg",
  },
];
