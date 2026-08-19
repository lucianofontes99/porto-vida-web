import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { CLINIC } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo invert withDomain />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
            Teleconsultas e atendimento presencial em Manaus. Confiança, conexão, acolhimento e tecnologia.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-teal">CUIDADO</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link to="/especialidades" className="hover:text-paper">Especialidades</Link></li>
            <li><Link to="/profissionais" className="hover:text-paper">Profissionais</Link></li>
            <li><Link to="/agendar" search={{}} className="hover:text-paper">Agendar</Link></li>
            <li><Link to="/unidade" className="hover:text-paper">Unidade Adrianópolis</Link></li>
            <li><Link to="/triagem" className="hover:text-paper">Triagem de sintomas</Link></li>
            <li><Link to="/urgencia" className="hover:text-paper">Urgência — 192</Link></li>
            <li><Link to="/planos" className="hover:text-paper">Planos</Link></li>
            <li><Link to="/laudos" className="hover:text-paper">Laudos · R$ 600</Link></li>
            <li><Link to="/para-medicos" className="hover:text-paper">Para médicos</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-teal">PORTO VIDA</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link to="/sobre" className="hover:text-paper">Sobre nós</Link></li>
            <li><Link to="/contato" className="hover:text-paper">Contato</Link></li>
            <li><Link to="/convenios" className="hover:text-paper">Convênios e reembolso</Link></li>
            <li><Link to="/saude" className="hover:text-paper">Orientações de saúde</Link></li>
            <li><Link to="/faq" className="hover:text-paper">Perguntas frequentes</Link></li>
            <li><Link to="/minha-conta" className="hover:text-paper">Minha conta</Link></li>
            <li><Link to="/prontuario" className="hover:text-paper">Prontuário</Link></li>
            <li><Link to="/familia" className="hover:text-paper">Família</Link></li>
            <li><Link to="/login" search={{ next: "/" }} className="hover:text-paper">Entrar</Link></li>
          </ul>
        </div>
        <div className="text-sm text-paper/80">
          <p className="text-xs font-semibold tracking-[0.14em] text-teal">CLÍNICA</p>
          <p className="mt-3">{CLINIC.address}</p>
          <p>{CLINIC.city}</p>
          <p className="mt-2">{CLINIC.phone}</p>
          <p>{CLINIC.email}</p>
          <p className="mt-2 text-paper/55">{CLINIC.hours}</p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {CLINIC.legal} · CNPJ {CLINIC.cnpj}
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <Link to="/privacidade" className="hover:text-paper/80">Privacidade</Link>
            <Link to="/termos" className="hover:text-paper/80">Termos</Link>
            <span>Telemedicina CFM 2.314/2022 · LGPD</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
