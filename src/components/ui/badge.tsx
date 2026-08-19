import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const tones = {
  navy: "bg-navy/8 text-navy",
  teal: "bg-teal-soft text-teal-deep",
  cream: "bg-cream text-navy",
  ok: "bg-ok/10 text-ok",
  warn: "bg-warn/10 text-warn",
  danger: "bg-danger/10 text-danger",
  muted: "bg-navy/6 text-muted",
  onDark: "bg-paper/10 text-paper/90",
};

export function Badge({ className, tone = "navy", ...props }: HTMLAttributes<HTMLSpanElement> & { tone?: keyof typeof tones }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide", tones[tone], className)} {...props} />
  );
}
