const pilares = [
  {
    title: "DECISÃO",
    icon: "◈",
    desc: "Liderança baseada em dados e análise criteriosa. Cada decisão sustentada por inteligência comercial e visão estratégica.",
  },
  {
    title: "PROCESSO",
    icon: "◇",
    desc: "Estruturação de rotinas de alta performance. Metodologias que transformam esforço individual em resultado coletivo consistente.",
  },
  {
    title: "RESULTADO",
    icon: "◆",
    desc: "Entrega mensurável acima do padrão. Comprometimento com metas e geração de valor real para clientes, equipes e organização.",
  },
];

const passos = [
  {
    num: "01",
    title: "Observação da experiência do cliente",
    desc: "Avaliação de tempo de atendimento, abordagem e condução da venda.",
  },
  {
    num: "02",
    title: "Análise do atendimento farmacêutico",
    desc: "Verificação da qualidade da orientação, segurança e clareza das informações.",
  },
  {
    num: "03",
    title: "Avaliação da operação da loja",
    desc: "Organização, limpeza, facilidade de encontrar produtos e fluxo de atendimento.",
  },
  {
    num: "04",
    title: "Identificação dos pontos críticos",
    desc: "Mapeamento das falhas que geram perda de clientes e impacto nas vendas.",
  },
  {
    num: "05",
    title: "Direcionamento de melhoria",
    desc: "Indicação clara do que precisa ser ajustado para melhorar o desempenho.",
  },
];

export default function Pilares() {
  return (
    <section id="metodo" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Método</p>
        <div className="gold-line mb-8" />

        {/* Intro */}
        <h2
          className="mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 400,
            color: "var(--cream)",
          }}
        >
          Como identificar falhas no atendimento e{" "}
          <em style={{ color: "var(--gold)" }}>transformar isso em resultado</em>
        </h2>

        <p
          className="leading-relaxed mb-4"
          style={{ fontSize: "0.9rem", color: "var(--cream-muted)", maxWidth: "680px" }}
        >
          O atendimento em drogarias não melhora apenas com esforço — melhora com análise.
          Por isso, utilizo um modelo estruturado que avalia o que realmente impacta a
          experiência do cliente e as vendas.
        </p>

        <p
          className="leading-relaxed mb-8"
          style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
        >
          O processo é simples e direto:
        </p>

        {/* 5 passos */}
        <div className="flex flex-col gap-4 mb-12">
          {passos.map((p) => (
            <div
              key={p.num}
              className="flex gap-6 items-start p-6"
              style={{
                backgroundColor: "var(--navy-card)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                  opacity: 0.6,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {p.num}
              </span>
              <div>
                <h3
                  className="mb-1 text-sm font-medium tracking-wide"
                  style={{ color: "var(--cream)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <p
          className="leading-relaxed mb-16"
          style={{ fontSize: "0.9rem", color: "var(--cream-muted)", maxWidth: "680px" }}
        >
          Com esse diagnóstico, é possível sair do{" "}
          <em style={{ color: "var(--gold)" }}>&ldquo;achismo&rdquo;</em> e tomar decisões
          baseadas no que realmente acontece no atendimento.{" "}
          <strong style={{ color: "var(--cream)" }}>
            Não é sobre opinião. É sobre evidência.
          </strong>
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="p-8 relative"
              style={{
                backgroundColor: "var(--navy-card)",
                borderTop: "3px solid var(--gold)",
              }}
            >
              <p
                className="mb-4"
                style={{ fontSize: "1.5rem", color: "var(--gold)", opacity: 0.7 }}
              >
                {p.icon}
              </p>
              <h3
                className="mb-4 tracking-widest text-sm font-medium"
                style={{ color: "var(--cream)" }}
              >
                {p.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--cream-muted)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
