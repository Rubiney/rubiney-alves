import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--navy-deep)" }}
    >
      {/* Decorative top gold bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "var(--gold)" }}
      />

      {/* Background circle accent */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(232,160,32,0.08)" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(232,160,32,0.05)" }}
      />

      <div className="section w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — text content */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="eyebrow mb-6">Portfólio Executivo</p>

            {/* Name */}
            <h1
              className="leading-none mb-2"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "var(--cream)",
              }}
            >
              RUBINEY
            </h1>
            <h1
              className="leading-none mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 700,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "var(--gold)",
              }}
            >
              ALVES
            </h1>

            {/* Title & specialty */}
            <p
              className="text-sm font-medium tracking-widest uppercase mb-1"
              style={{ color: "var(--cream)" }}
            >
              Gerente Comercial Sênior
            </p>
            <p
              className="text-sm tracking-wide mb-4"
              style={{ color: "var(--cream-muted)" }}
            >
              Varejo Farmacêutico · Gestão Data-Driven
            </p>

            {/* Tagline */}
            <p
              className="italic mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.15rem",
                color: "var(--gold-light)",
              }}
            >
              Resultado mensurável. Liderança com propósito.
            </p>

            {/* Pillars */}
            <div className="flex gap-6 mb-10">
              {["DECISÃO", "PROCESSO", "RESULTADO"].map((p) => (
                <span
                  key={p}
                  className="text-xs font-medium tracking-widest"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="btn-gold">
                Entre em Contato
              </a>
              <a
                href="#experiencia"
                className="px-6 py-3 text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--cream-muted)" }}
              >
                Ver Experiências ↓
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <div
              className="relative w-64 lg:w-80 overflow-hidden"
              style={{
                border: "2px solid var(--gold-muted)",
                aspectRatio: "3/4",
              }}
            >
              {/* Amber corner accent */}
              <div
                className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-10"
                style={{
                  borderTop: "2px solid var(--gold)",
                  borderLeft: "2px solid var(--gold)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none z-10"
                style={{
                  borderBottom: "2px solid var(--gold)",
                  borderRight: "2px solid var(--gold)",
                }}
              />
              <Image
                src="/rubiney-alves.png"
                alt="Rubiney Alves — Gerente Comercial Sênior"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Values row */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-8 lg:gap-16"
          style={{ borderTop: "1px solid var(--gold-muted)" }}
        >
          {[
            { label: "AUCTORITAS", sub: "Autoridade que inspira" },
            { label: "INTEGRITAS", sub: "Conduta sem concessões" },
            { label: "EXCELLENTIA", sub: "Entrega acima do padrão" },
          ].map((v) => (
            <div key={v.label}>
              <p className="text-xs font-medium tracking-widest" style={{ color: "var(--cream)" }}>
                {v.label}
              </p>
              <p
                className="italic mt-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "0.95rem",
                  color: "var(--gold)",
                }}
              >
                {v.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
