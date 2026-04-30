const progressoes = [
  {
    empresa: "Takeda Comércio Ltda",
    periodo: "Dez 2000 — Nov 2005",
    etapas: [
      { cargo: "Vendedor",          de: "Dez 2000" },
      { cargo: "Gerente Comercial", de: "Mai 2003", promocao: true },
    ],
    nota: "Promoção interna em menos de três anos — reflexo de desempenho consistente e capacidade de liderar pessoas e processos.",
  },
  {
    empresa: "Farmácias Pague Menos",
    periodo: "Jun 2012 — Dez 2017",
    etapas: [
      { cargo: "Consultor de Vendas", de: "Jun 2012" },
      { cargo: "Gerente Comercial",   de: "Jul 2015", promocao: true },
    ],
    nota: "Maior escala, equipe maior e responsabilidade sobre indicadores financeiros e de performance.",
  },
];

const competencias = [
  "Gestão de equipes de vendas",
  "Controle financeiro e acompanhamento de metas",
  "Atendimento consultivo e fidelização de carteira",
  "Estruturação de processos internos",
  "Prospecção ativa e pós-venda estruturado",
];

export default function Trajetoria() {
  return (
    <section id="trajetoria" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Trajetória</p>
        <div className="gold-line mb-12" />

        {/* ── Bloco 1 — Introdução ── */}
        <div className="mb-14" style={{ maxWidth: "720px" }}>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              color: "var(--cream)",
            }}
          >
            Uma carreira construída{" "}
            <em style={{ color: "var(--gold)" }}>de dentro para fora</em>
          </h2>

          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            Mais de 20 anos no varejo farmacêutico não foram apenas de permanência.
            Foram de progressão — consistente, comprovada e orientada a resultado.
          </p>

          <p
            className="leading-relaxed"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            A trajetória começa no balcão. Não por acaso, mas porque é de lá que se entende
            o que realmente move uma drogaria: o atendimento, o cliente e a decisão de
            compra em tempo real.
          </p>
        </div>

        {/* ── Separador ── */}
        <Divisor label="Da Operação à Gestão" />

        {/* ── Bloco 2 — Progressões ── */}
        <div className="flex flex-col gap-10 mb-14">
          {progressoes.map((p) => (
            <div key={p.empresa}>
              {/* Cabeçalho da empresa */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--cream)",
                  }}
                >
                  {p.empresa}
                </h3>
                <span
                  className="text-xs tracking-wide"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  {p.periodo}
                </span>
              </div>

              {/* Linha do tempo das etapas */}
              <div className="relative pl-8 ml-3">
                <div
                  className="absolute left-0 top-2 bottom-2 w-px"
                  style={{ backgroundColor: "var(--gold-muted)" }}
                />
                {p.etapas.map((et) => (
                  <div key={et.cargo} className="relative mb-5 last:mb-0">
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: et.promocao ? "var(--gold)" : "var(--navy-card)",
                        border: `1px solid ${et.promocao ? "var(--gold)" : "var(--gold-muted)"}`,
                      }}
                    >
                      {et.promocao && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "var(--navy-deep)" }}
                        />
                      )}
                    </div>
                    {/* Texto */}
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: "var(--navy-card)",
                        borderLeft: et.promocao
                          ? "3px solid var(--gold)"
                          : "1px solid var(--gold-muted)",
                      }}
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: et.promocao ? "var(--gold)" : "var(--cream)" }}
                      >
                        {et.cargo}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--cream-muted)", opacity: 0.7 }}>
                        a partir de {et.de}
                        {et.promocao && (
                          <span
                            className="ml-2 px-2 py-0.5 rounded"
                            style={{
                              background: "rgba(201,168,76,0.12)",
                              color: "var(--gold)",
                              fontSize: "10px",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                            }}
                          >
                            promoção interna
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Nota da progressão */}
                <p
                  className="mt-4 text-sm leading-relaxed italic"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {p.nota}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque: duas promoções */}
        <div
          className="mb-14 p-6"
          style={{
            backgroundColor: "var(--navy-card)",
            borderLeft: "3px solid var(--gold)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 400,
              color: "var(--cream)",
              lineHeight: 1.5,
            }}
          >
            Promovido internamente.{" "}
            <em style={{ color: "var(--gold)" }}>Duas vezes.</em>{" "}
            Em empresas diferentes.
            <br />
            <span style={{ color: "var(--cream-muted)", fontSize: "0.9rem" }}>
              Isso não é coincidência. É método.
            </span>
          </p>
        </div>

        {/* ── Separador ── */}
        <Divisor label="O Que Essa Trajetória Revela" />

        {/* ── Bloco 3 — Competências ── */}
        <div className="mb-14" style={{ maxWidth: "680px" }}>
          <p
            className="leading-relaxed mb-8"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            Cada etapa da carreira foi construída sobre a anterior.
            Não houve salto sem base. Não houve cargo sem entrega.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {competencias.map((c) => (
              <div
                key={c}
                className="flex items-center gap-4 p-4"
                style={{
                  backgroundColor: "var(--navy-card)",
                  borderBottom: "1px solid var(--gold-muted)",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "0.7rem", flexShrink: 0 }}>◆</span>
                <p className="text-sm" style={{ color: "var(--cream-muted)" }}>{c}</p>
              </div>
            ))}
          </div>

          <p
            className="leading-relaxed italic"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            Não são competências listadas em currículo.
            São práticas exercidas diariamente, em ambientes reais,
            com pressão de resultado e responsabilidade sobre pessoas.
          </p>
        </div>

        {/* ── Separador ── */}
        <Divisor label="Visão Atual" />

        {/* ── Bloco 4 — Síntese ── */}
        <div style={{ maxWidth: "680px" }}>
          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            A vivência acumulada no varejo farmacêutico — da operação à gestão —
            é o que sustenta a capacidade analítica aplicada hoje.
          </p>

          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            Não é possível identificar falhas no atendimento de uma drogaria
            sem ter vivido o atendimento de uma drogaria.
          </p>

          <p
            className="leading-relaxed mb-10"
            style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
          >
            É exatamente essa combinação —{" "}
            <em style={{ color: "var(--gold)" }}>experiência de campo + visão estratégica</em>{" "}
            — que diferencia uma análise superficial de um diagnóstico real.
          </p>

          <a
            href="#formacao"
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            Conheça a formação que estrutura essa visão ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Divisor({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-shrink-0 h-px w-6" style={{ backgroundColor: "var(--gold)" }} />
      <p
        className="text-xs font-medium tracking-widest uppercase flex-shrink-0"
        style={{ color: "var(--cream)" }}
      >
        {label}
      </p>
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--gold-muted)" }} />
    </div>
  );
}
