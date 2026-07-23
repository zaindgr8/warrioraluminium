"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/">
          <Logo variant={scrolled || open ? "sticky" : "white"} />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors py-1",
                  scrolled ? "text-ink" : "text-paper",
                  active ? "text-gold" : "hover:text-gold",
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-ink hover:text-gold" : "text-paper hover:text-gold",
            )}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneLocal}
          </a>
          <Link
            href="/what-we-do"
            className="inline-flex items-center rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink transition-all hover:bg-gold-bright hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full cursor-pointer",
            scrolled || open ? "text-ink" : "text-paper",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-paper border-b border-border"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 text-base border-b border-border/60 last:border-none",
                    pathname === link.href ? "text-gold" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
              >
                <Phone className="h-4 w-4" /> Call {site.phoneLocal}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
