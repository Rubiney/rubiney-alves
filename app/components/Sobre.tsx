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
              Mais de 20 anos construindo{" "}
              <em style={{ color: "var(--gold)" }}>resultados reais.</em>
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Profissional comercial com trajetória consolidada no varejo farmacêutico e em
              segmentos de alto giro. Especialista em vendas consultivas, gestão de equipes de
              alta performance e tomada de decisão orientada a dados.
            </p>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Combina maturidade comercial com capacidade analítica — formação técnica em
              Sistemas de Informação aliada a múltiplos MBAs em Gestão Estratégica, Marketing,
              Liderança e Ciência de Dados, sustentando uma visão que equilibra resultado
              imediato e estratégia de longo prazo.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Baseado em Macapá — AP, atua com adaptabilidade a ambientes de alta performance
              e comprometimento com metas organizacionais.
            </p>
          </div>

          {/* Stats */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-6 content-start">
            {[
              { num: "+20", label: "Anos de experiência" },
              { num: "6+",  label: "MBAs e pós-graduações" },
              { num: "3x",  label: "Promovido internamente" },
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
