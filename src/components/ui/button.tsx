import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-tight transition-[color,background-color,transform,opacity] duration-150 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
  {
    variants: {
      variant: {
        default: "bg-navy text-paper hover:bg-navy-mid",
        teal: "bg-teal text-navy-deep hover:bg-teal-deep hover:text-paper",
        outline: "border border-navy/15 bg-transparent text-navy hover:bg-navy/5",
        outlineDark: "border border-paper/25 bg-transparent text-paper hover:bg-paper/10",
        ghost: "text-navy hover:bg-navy/5",
        ghostDark: "text-paper/80 hover:bg-paper/10 hover:text-paper",
        cream: "bg-cream text-navy hover:bg-paper",
        danger: "bg-danger text-paper hover:opacity-90",
      },
      size: {
        sm: "h-9 rounded-lg px-3.5 text-sm",
        md: "h-11 rounded-xl px-5 text-sm",
        lg: "h-12 rounded-xl px-6 text-[0.95rem]",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export function Button({ className, variant, size, asChild, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
export { buttonVariants };
