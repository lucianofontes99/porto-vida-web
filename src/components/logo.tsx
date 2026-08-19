import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string; invert?: boolean }) {
  return (
    <img src="/brand/logo-3d.png" alt="" className={cn("h-11 w-auto object-contain object-left", className)} />
  );
}

export function LogoSculpture({ className }: { className?: string }) {
  return (
    <img src="/brand/logo-3d.png" alt="Símbolo Porto Vida — o P e o rio" className={cn("logo-sculpture w-full object-contain", className)} />
  );
}

export function Logo({ className, invert, withDomain }: { className?: string; invert?: boolean; withDomain?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-11 w-auto" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-sans text-[1.15rem] font-extrabold tracking-tight", invert ? "text-paper" : "text-navy")}>
          Porto Vida
        </span>
        {withDomain ? (
          <span className={cn("mt-1 text-[0.62rem] font-semibold tracking-[0.14em]", invert ? "text-paper/70" : "text-navy/55")}>
            PORTOVIDA<span className="text-teal">BRASIL</span>.COM.BR
          </span>
        ) : null}
      </span>
    </span>
  );
}
