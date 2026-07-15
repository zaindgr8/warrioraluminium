import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  icon?: ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-bright shadow-[0_8px_24px_-8px_rgba(184,137,43,0.6)] hover:shadow-[0_10px_30px_-6px_rgba(184,137,43,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-current/30 text-current hover:border-gold hover:text-gold",
  ghost: "text-current hover:text-gold",
};

export function Button({
  children,
  className,
  variant = "primary",
  icon,
  href,
  target,
}: CommonProps & { href: string; target?: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
