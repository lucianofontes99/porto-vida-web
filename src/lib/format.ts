export function formatBRL(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
export function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "America/Manaus" });
}
export function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", timeZone: "America/Manaus" });
}
export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Manaus" });
}
export function initials(name: string) {
  return name.split(" ").filter((p) => p.length > 2).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}
