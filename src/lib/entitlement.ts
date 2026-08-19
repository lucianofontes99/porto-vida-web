import { getPlan, type Plan } from "@/lib/catalog";

export type Entitlement =
  | { ok: true; mode: "included" | "avulso" | "laudo"; plan?: Plan; notice?: string }
  | { ok: false; reason: string; cta?: { to: "/planos" | "/laudos" | "/familia"; label: string } };

export function entitlementFor(opts: {
  planSlug?: string | null;
  forDependent: boolean;
  specialtyId: string;
  dependentRelation?: string | null;
}): Entitlement {
  const plan = opts.planSlug ? getPlan(opts.planSlug) : undefined;
  const isLaudo = opts.specialtyId === "laudos";

  if (isLaudo) {
    return {
      ok: true,
      mode: "laudo",
      plan,
      notice: "Avaliação e emissão de laudo: R$ 600,00 por parecer — não entra como consulta do plano.",
    };
  }

  if (opts.forDependent) {
    const isChild = opts.dependentRelation === "filho" || opts.dependentRelation === "filha";
    if (plan?.audience === "pediatria" && opts.specialtyId === "pediatria" && isChild) {
      return {
        ok: true,
        mode: "included",
        plan,
        notice: "Consulta de pediatria coberta pelo plano do titular, para o filho cadastrado.",
      };
    }
    return {
      ok: true,
      mode: "avulso",
      plan,
      notice:
        "Só o pagador do plano tem direito à consulta inclusa. Familiar usa consulta avulsa — ou, se for criança, o plano Pediatria (a partir de R$ 250/mês).",
    };
  }

  if (plan && (plan.audience === "individual" || plan.audience === "familia") && plan.consultsPerMonth > 0) {
    return {
      ok: true,
      mode: "included",
      plan,
      notice: `Consulta do titular (${plan.name}). Dependentes não usam esta vaga.`,
    };
  }

  if (plan?.audience === "pediatria") {
    return {
      ok: true,
      mode: "avulso",
      plan,
      notice: "O plano Pediatria cobre a criança cadastrada, não a consulta do adulto titular.",
    };
  }

  if (plan?.audience === "medico") {
    return {
      ok: true,
      mode: "avulso",
      plan,
      notice: "Plano médico não inclui consulta de paciente. Esta será avulsa.",
    };
  }

  return { ok: true, mode: "avulso", plan };
}
