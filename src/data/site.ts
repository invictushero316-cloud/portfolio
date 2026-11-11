export const identity = {
  name: "Matheus Silva",
} as const;

export const sectionIds = [
  "inicio",
  "sobre",
  "experiencia",
  "habilidades",
  "projetos",
  "laboratorio",
  "certificacoes",
] as const;

export type SectionId = (typeof sectionIds)[number];
