import { CLINIC } from "@/lib/catalog";

export function WhatsAppFab() {
  const href = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta no Porto Vida.")}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" data-whatsapp className="fixed bottom-5 left-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-sm font-semibold text-paper shadow-card hover:bg-navy-mid" aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" className="size-5 fill-teal" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.06 6.49 2.06 12c0 1.76.46 3.48 1.34 5L2 22l5.17-1.36A9.93 9.93 0 0 0 12.04 22c5.5 0 9.97-4.49 9.97-10 0-2.67-1.04-5.18-2.96-7.09zM12.04 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.07.8.82-2.99-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.18-8.28 8.18zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
