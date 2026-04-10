export default function Contato() {
  return (
    <section id="contato" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Contato</p>
        <div className="gold-line mb-12" />

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="flex-1">
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--cream)",
              }}
            >
              Vamos construir algo{" "}
              <em style={{ color: "var(--gold)" }}>juntos.</em>
            </h2>

            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "var(--cream-muted)" }}
            >
              Aberto a conversas sobre oportunidades de liderança comercial, projetos de
              consultoria em varejo farmacêutico, gestão data-driven e desenvolvimento de
              equipes de alta performance.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5">
              <a
                href="mailto:rubiney.melo@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--gold-muted)" }}
                >
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>✉</span>
                </div>
                <div>
                  <p className="text-xs eyebrow mb-0.5">E-mail</p>
                  <p
                    className="text-sm transition-colors duration-200 group-hover:underline"
                    style={{ color: "var(--cream)" }}
                  >
                    rubiney.melo@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+5596991373225"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--gold-muted)" }}
                >
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>✆</span>
                </div>
                <div>
                  <p className="text-xs eyebrow mb-0.5">Telefone</p>
                  <p
                    className="text-sm transition-colors duration-200 group-hover:underline"
                    style={{ color: "var(--cream)" }}
                  >
                    (96) 99137-3225
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rubiney"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--gold-muted)" }}
                >
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>in</span>
                </div>
                <div>
                  <p className="text-xs eyebrow mb-0.5">LinkedIn</p>
                  <p
                    className="text-sm transition-colors duration-200 group-hover:underline"
                    style={{ color: "var(--cream)" }}
                  >
                    linkedin.com/in/rubiney
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--gold-muted)" }}
                >
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem" }}>◎</span>
                </div>
                <div>
                  <p className="text-xs eyebrow mb-0.5">Localização</p>
                  <p className="text-sm" style={{ color: "var(--cream)" }}>
                    Macapá — AP, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            className="flex-shrink-0 w-full lg:w-80 p-8"
            style={{
              backgroundColor: "var(--navy-card)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--cream)",
              }}
            >
              Rubiney Alves
            </h3>
            <p
              className="text-sm mb-1 font-medium tracking-wider"
              style={{ color: "var(--cream-muted)" }}
            >
              Gerente Comercial Sênior
            </p>
            <p
              className="text-xs mb-8"
              style={{ color: "var(--cream-faint)" }}
            >
              Varejo Farmacêutico · Gestão Data-Driven
            </p>

            <div
              className="mb-8"
              style={{ borderTop: "1px solid var(--gold-muted)" }}
            />

            {["AUCTORITAS", "INTEGRITAS", "EXCELLENTIA"].map((v) => (
              <p
                key={v}
                className="text-xs tracking-widest mb-2"
                style={{ color: "var(--gold)", opacity: 0.6 }}
              >
                {v}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="border-t py-6 text-center"
        style={{ borderColor: "var(--gold-muted)" }}
      >
        <p className="text-xs tracking-widest" style={{ color: "var(--cream-faint)" }}>
          © {new Date().getFullYear()} Rubiney Alves de Melo · Todos os direitos reservados
        </p>
      </div>
    </section>
  );
}
