import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SiteSearch } from "@/components/site-search";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { authEnabled, signOut } from "@/lib/auth/client";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/especialidades", label: "Especialidades" },
  { to: "/profissionais", label: "Profissionais" },
  { to: "/planos", label: "Planos" },
  { to: "/laudos", label: "Laudos" },
  { to: "/triagem", label: "Triagem" },
] as const;

function AuthSlot() {
  const { user } = useCurrentUserState();
  if (user) {
    const label = user.displayName ?? user.primaryEmail ?? "Conta";
    return (
      <div className="flex items-center gap-2">
        <Link to="/minha-conta" className="flex items-center gap-2 rounded-full py-1 pr-2 pl-1 hover:bg-paper/10">
          {user.profileImageUrl ? (
            <img src={user.profileImageUrl} alt="" className="size-8 rounded-full object-cover" />
          ) : (
            <span className="grid size-8 place-items-center rounded-full bg-teal text-xs font-semibold text-navy-deep">
              {label.charAt(0).toUpperCase()}
            </span>
          )}
          <span className="hidden max-w-28 truncate text-sm font-medium text-paper sm:inline">{label.split(" ")[0]}</span>
        </Link>
        {authEnabled ? (
          <button type="button" onClick={() => void signOut("/")} className="text-sm text-paper/60 hover:text-paper">Sair</button>
        ) : null}
      </div>
    );
  }
  return (
    <Link to="/login" search={{ next: "/" }}>
      <Button variant="ghostDark" size="sm">Entrar</Button>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-navy-deep/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" aria-label="Porto Vida — início" onClick={() => setOpen(false)}><Logo invert /></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className={cn("rounded-lg px-3 py-2 text-sm font-medium text-paper/70 transition-colors hover:bg-paper/8 hover:text-paper", pathname.startsWith(item.to) && "bg-paper/10 text-paper")}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SiteSearch tone="dark" />
          <div className="hidden sm:block"><AuthSlot /></div>
          <Link to="/prontuario" className="hidden lg:block"><Button variant="ghostDark" size="sm">Prontuário</Button></Link>
          <Link to="/agendar" search={{}} className="hidden sm:block"><Button variant="teal" size="sm">Agendar</Button></Link>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-xl text-paper lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-paper/10 bg-navy lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-paper hover:bg-paper/8">{item.label}</Link>
            ))}
            <Link to="/agendar" search={{}} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-paper hover:bg-paper/8">Agendar consulta</Link>
            <Link to="/minha-conta" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-paper hover:bg-paper/8">Minha conta</Link>
            <div className="px-3 py-2"><AuthSlot /></div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
