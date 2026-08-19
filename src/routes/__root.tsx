import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Porto Vida";

function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-paper px-6 text-center">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-teal">404</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-navy">Página não encontrada</h1>
        <p className="mt-2 text-sm text-muted">Esse endereço não existe no Porto Vida.</p>
        <Link to="/" className="mt-6 inline-flex h-11 items-center rounded-xl bg-navy px-5 text-sm font-semibold text-paper">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#01224D" },
      {
        name: "description",
        content:
          "Porto Vida — teleconsultas e atendimento presencial em Manaus. Todas as especialidades médicas, pagamento online e vídeo consulta.",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/brand/logo-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster position="top-center" richColors={false} toastOptions={{ className: "font-sans" }} />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
