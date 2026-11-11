import { useLocale } from "../hooks/useLocale";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a className="skip-link" href="#conteudo">
      {t.a11y.skip}
    </a>
  );
}
