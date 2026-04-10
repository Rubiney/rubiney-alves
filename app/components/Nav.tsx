"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#sobre",      label: "Sobre" },
  { href: "#pilares",    label: "Pilares" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao",   label: "Formação" },
  { href: "#artigos",    label: "Artigos" },
  { href: "#contato",    label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,22,53,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(184,146,58,0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 600 }}
        >
          <span style={{ color: "var(--cream)" }}>R</span>
          <span style={{ color: "var(--gold)" }}>A</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-200"
              style={{ backgroundColor: "var(--gold)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(13,22,53,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase py-2"
              style={{ color: "var(--cream-muted)", borderBottom: "1px solid var(--gold-muted)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
