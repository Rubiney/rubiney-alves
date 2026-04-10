const experiencias = [
  {
    cargo: "Consultor de Vendas",
    empresa: "Farmácia Popular",
    periodo: "Fev 2024 — Jan 2026",
    desc: "Vendas consultivas com foco em atendimento personalizado e dispensação de medicamentos. Prospecção ativa, cadastro em programas de fidelização e suporte técnico.",
  },
  {
    cargo: "Gerente Comercial",
    empresa: "Farmácias Pague Menos",
    periodo: "Jul 2015 — Dez 2017",
    highlight: true,
    desc: "Promovido internamente. Gerenciamento de equipe de vendas, controle financeiro, acompanhamento de metas e estruturação de processos internos.",
  },
  {
    cargo: "Consultor de Vendas",
    empresa: "Farmácias Pague Menos",
    periodo: "Jun 2018 — Jan 2020",
    desc: "Retorno à operação comercial. Atendimento consultivo, fidelização de clientes e prospecção ativa.",
  },
  {
    cargo: "Consultor de Vendas",
    empresa: "Farmácias Pague Menos",
    periodo: "Jun 2012 — Jun 2015",
    desc: "Atendimento consultivo, fidelização de carteira e pós-venda estruturado. Período que culminou em promoção interna.",
  },
  {
    cargo: "Vendedor",
    empresa: "SB Comércio Ltda",
    periodo: "Abr 2009 — Ago 2011",
    desc: "Vendas e atendimento ao público com foco em relacionamento e cumprimento de metas.",
  },
  {
    cargo: "Consultor de Vendas",
    empresa: "Globo Farma Ltda",
    periodo: "Ago 2006 — Mar 2008",
    desc: "Atendimento e vendas consultivas no segmento farmacêutico.",
  },
  {
    cargo: "Gerente Comercial",
    empresa: "Takeda Comércio Ltda",
    periodo: "Mai 2003 — Nov 2005",
    desc: "Gestão da operação comercial, liderança de equipe e acompanhamento de metas.",
  },
  {
    cargo: "Vendedor",
    empresa: "Takeda Comércio Ltda",
    periodo: "Dez 2000 — Abr 2003",
    desc: "Início da trajetória na Takeda, com promoção interna ao cargo de Gerente Comercial.",
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" style={{ backgroundColor: "var(--navy-card)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Experiência Profissional</p>
        <div className="gold-line mb-12" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--gold-muted)" }}
          />

          <div className="flex flex-col gap-8">
            {experiencias.map((e, i) => (
              <div key={i} className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center mt-1"
                    style={{
                      backgroundColor: e.highlight ? "var(--gold)" : "var(--navy-deep)",
                      border: `1px solid ${e.highlight ? "var(--gold)" : "var(--gold-muted)"}`,
                    }}
                  >
                    {e.highlight && (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--navy-deep)" }} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6"
                  style={{
                    backgroundColor: "var(--navy-deep)",
                    borderLeft: e.highlight ? "3px solid var(--gold)" : "1px solid var(--gold-muted)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: e.highlight ? "var(--gold)" : "var(--cream)",
                        }}
                      >
                        {e.cargo}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--cream-muted)" }}
                      >
                        {e.empresa}
                      </p>
                    </div>
                    <span
                      className="text-xs tracking-wide"
                      style={{ color: "var(--gold)", opacity: 0.7 }}
                    >
                      {e.periodo}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
