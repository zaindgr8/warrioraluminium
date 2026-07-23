import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navLinks, services, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80 grain">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
              <Logo variant="white" className="h-20 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-paper/60 max-w-xs">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-soft mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-soft mb-5">
              What We Do
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/what-we-do#${service.slug}`}
                    className="text-sm text-paper/70 hover:text-gold transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-soft mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 text-sm text-paper/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.75} />
                  {site.phoneLocal}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 text-sm text-paper/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.75} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-paper/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.75} />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center gap-4 border-t border-border-dark pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-paper/40">
            © 2023 Warriors Aluminium &amp; Glass, a division of Warriors Group. All rights reserved.
          </p>
          <p className="text-xs text-paper/40">
            Serving {site.areas}
          </p>
        </div>
      </Container>
    </footer>
  );
}
