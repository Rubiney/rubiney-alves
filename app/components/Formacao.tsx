const formacao = [
  { titulo: "MBA em Gestão de Indicadores e Desempenho", inst: "Anhanguera", ano: "03/2026" },
  { titulo: "Pós-Graduação em Ciência de Dados e Inteligência Artificial", inst: "Anhanguera", ano: "03/2026" },
  { titulo: "Pós-Graduação em Gestão de Pessoas e Psicologia Organizacional", inst: "Anhanguera", ano: "06/2025" },
  { titulo: "MBA Executivo em Negócios e Competências Digitais", inst: "Anhanguera", ano: "03/2025" },
  { titulo: "MBA em Gestão Estratégica de Marketing e Inteligência Competitiva", inst: "Anhanguera", ano: "02/2025" },
  { titulo: "Pós-Graduação em Liderança e Gestão de Equipes de Alta Performance", inst: "Anhanguera", ano: "01/2025" },
  { titulo: "Bacharelado em Sistemas de Informação", inst: "Faculdade Atual", ano: "11/2015" },
];

const certificacoes = [
  "Indústria 4.0",
  "Comunicação Não Violenta, Empatia e Cooperação",
  "Da Tarefa à Motivação: Propósito e Engajamento de Equipes",
  "Microsoft Excel — Nível Intermediário",
  "Microsoft Word — Nível Intermediário",
];

export default function Formacao() {
  return (
    <section id="formacao" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Formação Acadêmica</p>
        <div className="gold-line mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formação */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {formacao.map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5"
                  style={{
                    backgroundColor: "var(--navy-card)",
                    borderLeft: i === 0 ? "3px solid var(--gold)" : "1px solid var(--gold-muted)",
                  }}
                >
                  <div className="flex-1">
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.1rem",
                        fontWeight: i === 0 ? 600 : 400,
                        color: i === 0 ? "var(--gold)" : "var(--cream)",
                      }}
                    >
                      {f.titulo}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--cream-muted)" }}>
                      {f.inst}
                    </p>
                  </div>
                  <span
                    className="text-xs flex-shrink-0 mt-1"
                    style={{ color: "var(--gold)", opacity: 0.7 }}
                  >
                    {f.ano}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h3
              className="mb-6 tracking-widest text-xs font-medium uppercase"
              style={{ color: "var(--cream-muted)" }}
            >
              Certificações
            </h3>
            <div className="flex flex-col gap-3">
              {certificacoes.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
