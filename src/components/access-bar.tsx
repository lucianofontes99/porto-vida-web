import { Link } from "@tanstack/react-router";
import { Calendar, FileText, HeartPulse, ShieldAlert, Users, Stethoscope, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { to: "/agendar", search: {}, label: "Agendar", icon: Calendar },
  { to: "/prontuario", label: "Prontuário", icon: HeartPulse },
  { to: "/laudos", label: "Laudos R$ 600", icon: FileText },
  { to: "/urgencia", label: "Urgência 192", icon: ShieldAlert },
  { to: "/planos", label: "Planos", icon: CreditCard },
  { to: "/familia", label: "Família", icon: Users },
  { to: "/para-medicos", label: "Para médicos", icon: Stethoscope },
] as const;

export function AccessBar({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7", className)}>
      {ITEMS.map((item) => (
        <Link key={item.to} to={item.to} search={"search" in item ? item.search : undefined} className="flex items-center gap-2 rounded-xl border border-navy/8 bg-paper px-3 py-3 text-sm font-semibold text-navy hover:border-teal/40 hover:bg-cream/50">
          <item.icon className="size-4 shrink-0 text-teal" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
