import { Link } from "@tanstack/react-router";

export function UrgencyGate({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-2xl border border-navy/10 bg-cream/60 p-4">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 size-4 accent-[#06B0AD]" />
      <span className="text-sm leading-relaxed text-navy">
        Confirmo que <strong>não é emergência</strong> — sem dor no peito, falta de ar grave, sinais de AVC,
        trauma, sangramento que não para ou criança que não reage. Se for,{" "}
        <Link to="/urgencia" className="font-semibold text-teal-deep">ligar 192 agora</Link>, não agendar.
      </span>
    </label>
  );
}
