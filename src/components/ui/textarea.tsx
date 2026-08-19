import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={cn("min-h-28 w-full rounded-xl border border-navy/12 bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted/80","outline-none transition-shadow duration-150","focus:border-teal focus:ring-4 focus:ring-teal/20", className)} {...props} />
  );
}
