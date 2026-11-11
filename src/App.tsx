import { Route, Routes } from "react-router-dom";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import type { Locale } from "./i18n/types";

function LocaleHome({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <HomePage />
    </LocaleProvider>
  );
}

function ProjectRoute({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <ProjectPage />
    </LocaleProvider>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LocaleHome locale="pt-BR" />} />
      <Route path="/en" element={<LocaleHome locale="en" />} />
      <Route path="/es" element={<LocaleHome locale="es" />} />
      <Route path="/projetos/:slug" element={<ProjectRoute locale="pt-BR" />} />
      <Route path="/en/projects/:slug" element={<ProjectRoute locale="en" />} />
      <Route path="/es/proyectos/:slug" element={<ProjectRoute locale="es" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
