// src/data/series.ts
export interface Serie {
  id: number;
  titulo: string;
  anios: string;
  actores: string[];
  observaciones: string;
  imagenMini: string;
  imagenGrande: string;
}

export const series: Serie[] = [
  {
    id: 1,
    titulo: "The Mentalsit",
    anios: "2000-2012",
    actores: ["Adam West (Patrck Jane)", "Burt Ward (Tereza Lisbon)", "Yvonne Craig (Reb Jonh)"],
    observaciones: "Un famoso mentalista pierde su familia y ahora busca venganza ",
    imagenMini: "/images/mentalist-mini.jpg",
    imagenGrande: "/images/mentalist.jpg",


  },
   {
    id: 2,
    titulo: "Game of Thornes",
    anios: "2010-2017",
    actores: ["Adam West (John Snow)", "Burt Ward (Dane)", "Yvonne Craig (batgirl)"],
    observaciones: "EL rey de Los siete Reinos muere y ahora todos buscan como dejarse el trono",
    imagenMini: "/images/god-mini.jpg",
    imagenGrande: "/images/god.jpg",
  },

  {
    id: 3,
    titulo: "The office",
    anios: "2010-2017",
    actores: ["Adam West (John Snow)", "Burt Ward (Dane)", "Yvonne Craig (batgirl)"],
    observaciones: "Cuenta El dia a dia de una oficina de papeleria",
    imagenMini: "/images/oficce-mini.jpg",
    imagenGrande: "/images/oficce.jpg",
  },

  {
    id: 4,
    titulo: "Doctor House",
    anios: "2010-2017",
    actores: ["Adam West (John Snow)", "Burt Ward (Dane)", "Yvonne Craig (batgirl)"],
    observaciones: "un Egocentrico Doctor que es espacialista en diacnostigar",
    imagenMini: "/images/house-mini.jpg",
    imagenGrande: "/images/house.jpg",
  },
];
