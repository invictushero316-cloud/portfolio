export const experience = [
  {
    id: "codynect",
    company: "CODYNECT",
    start: "2018-03-01",
    end: "2020-12-01",
  },
  {
    id: "fabrica",
    company: "Fábrica de Softwares",
    start: "2021-05-01",
    end: "2024-07-01",
  },
  {
    id: "plego",
    company: "Plego",
    start: "2025-01-01",
    end: "2026-09-01",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];
