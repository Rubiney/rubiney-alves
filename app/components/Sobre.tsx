export default function Sobre() {
  return (
    <section id="sobre" style={{ backgroundColor: "var(--navy-card)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Sobre</p>
        <div className="gold-line mb-8" />

        <div className="flex flex-col lg:flex-row gap-16">
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
              Transformo atendimento em{" "}
              <em style={{ color: "var(--gold)" }}>resultado no varejo farmacêutico.</em>
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Atuo diretamente com operação de drogarias, analisando o que realmente acontece
              no atendimento — não na teoria, mas na prática do dia a dia.
            </p>

            <p
              className="leading-relaxed mb-3"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Na maioria das farmácias, os problemas são os mesmos:
            </p>

            <ul
              className="mb-6"
              style={{
                fontSize: "0.9rem",
                color: "var(--cream-muted)",
                paddingLeft: "1.2rem",
                lineHeight: "2",
                listStyleType: "disc",
              }}
            >
              <li>demora no atendimento</li>
              <li>falta de padrão na equipe</li>
              <li>baixa orientação ao cliente</li>
              <li>perda de vendas sem percepção</li>
            </ul>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Essas falhas passam despercebidas, mas impactam diretamente a experiência do
              cliente e o resultado da loja. Com experiência em gestão comercial e vivência no
              ambiente farmacêutico, meu foco é identificar esses pontos críticos e transformar
              atendimento em performance.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Não se trata apenas de atender bem.{" "}
              <em style={{ color: "var(--gold)" }}>
                Trata-se de atender com método, consistência e estratégia.
              </em>{" "}
              E é exatamente isso que eu aplico na prática.
            </p>
          </div>

          {/* Stats */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-6 content-start">
            {[
              { num: "+20",  label: "Anos de experiência" },
              { num: "6+",   label: "MBAs e pós-graduações" },
              { num: "3x",   label: "Promovido internamente" },
              { num: "360°", label: "Visão comercial & dados" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6 text-center"
                style={{
                  border: "1px solid var(--gold-muted)",
                  backgroundColor: "var(--navy-deep)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </p>
                <p
                  className="mt-2 text-xs tracking-wide"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
