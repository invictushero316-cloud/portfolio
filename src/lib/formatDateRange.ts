export function formatDateRange(locale: string, start: string, end: string): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return `${formatter.format(new Date(start))} – ${formatter.format(new Date(end))}`;
}
