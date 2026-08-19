import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-paper px-6 text-center text-ink">
      <span className="text-teal" aria-hidden="true"><TriangleAlert className="size-10" strokeWidth={2} /></span>
      <h1 className="font-display text-2xl font-semibold text-navy">Algo saiu do rumo</h1>
      <p className="max-w-md text-sm break-words text-muted">{error.message || "Ocorreu um erro inesperado. Recarregue a página."}</p>
      <Link to="/" className="mt-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-paper">Voltar ao início</Link>
    </main>
  );
}
