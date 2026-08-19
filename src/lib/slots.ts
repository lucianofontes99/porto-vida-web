const TZ = "America/Manaus";
function pad(n: number) { return String(n).padStart(2, "0"); }
export function manausNow() { return new Date(new Date().toLocaleString("en-US", { timeZone: TZ })); }
export function dayKey(d: Date) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
export function listDays(count = 14) {
  const start = manausNow();
  start.setHours(0, 0, 0, 0);
  const days: { key: string; label: string; weekday: string; date: number; weekend: boolean }[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const weekend = d.getDay() === 0 || d.getDay() === 6;
    days.push({
      key: dayKey(d),
      label: d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
      weekday: d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
      date: d.getDate(),
      weekend,
    });
  }
  return days;
}
function hash(str: string) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }
export function listSlots(doctorId: string, day: string, kind: "tele" | "presencial") {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const weekend = date.getDay() === 0 || date.getDay() === 6;
  if (kind === "presencial" && weekend) return [];
  const startH = kind === "tele" ? 7 : 8;
  const endH = kind === "tele" ? 21 : 18;
  const slots: { time: string; iso: string; taken: boolean }[] = [];
  const seed = hash(`${doctorId}:${day}:${kind}`);
  const now = manausNow();
  const todayKey = dayKey(now);
  for (let h = startH; h < endH; h++) {
    for (const min of [0, 30]) {
      const time = `${pad(h)}:${pad(min)}`;
      const iso = `${day}T${time}:00-04:00`;
      const past = day < todayKey || (day === todayKey && (h < now.getHours() || (h === now.getHours() && min <= now.getMinutes())));
      const taken = past || (seed + h * 7 + min) % 5 === 0;
      slots.push({ time, iso, taken });
    }
  }
  return slots;
}
