import { en } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
  es,
};
