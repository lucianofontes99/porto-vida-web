import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { articles } from "@/lib/content";

export const Route = createFileRoute("/saude/")({ component: Page });

function Page() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal">ORIENTAÇÃO</p>
        <h1 className="font-display mt-2 max-w-2xl text-4xl font-semibold text-navy">Texto de médico. Sem milagre, sem anúncio de suplemento.</h1>
        <p className="mt-4 max-w-2xl text-muted">Artigos do corpo clínico do Porto Vida — para ler com calma e, se fizer sentido, marcar a consulta certa. Não substituem atendimento.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} to="/saude/$slug" params={{ slug: a.slug }} className="group overflow-hidden rounded-2xl bg-paper shadow-card">
              <img src={a.photo} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-teal">{a.kicker.toUpperCase()}</p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-navy group-hover:underline">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <p className="mt-4 text-xs text-muted">{a.author} · {a.minutes} min · {a.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
