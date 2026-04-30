const criterios = [
  "Tempo de atendimento",
  "Qualidade da abordagem ao cliente",
  "Organização e limpeza da loja",
  "Clareza nas orientações",
  "Atendimento farmacêutico",
  "Execução de serviços clínicos",
];

export default function Pilares() {
  return (
    <section id="aplicacao" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Aplicação</p>
        <div className="gold-line mb-12" />

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — texto principal */}
          <div className="flex-1">
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                color: "var(--cream)",
              }}
            >
              Como o método é{" "}
              <em style={{ color: "var(--gold)" }}>aplicado na prática</em>
            </h2>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Para transformar análise em resultado, desenvolvi um sistema estruturado
              de avaliação de drogarias.
            </p>

            <p
              className="leading-relaxed mb-10"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Esse sistema permite analisar, de forma objetiva, os principais pontos
              que impactam o atendimento e a experiência do cliente.
            </p>

            {/* Lista de critérios */}
            <p
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "var(--cream)" }}
            >
              Na prática, a avaliação considera:
            </p>

            <ul className="mb-10" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {criterios.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 mb-3"
                  style={{ fontSize: "0.88rem", color: "var(--cream-muted)" }}
                >
                  <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>◆</span>
                  {c}
                </li>
              ))}
            </ul>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Cada ponto é avaliado com critérios definidos, permitindo identificar falhas
              que normalmente passam despercebidas no dia a dia da operação.
            </p>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              O resultado é uma visão clara do que está funcionando e do que precisa ser ajustado.
            </p>

            <p
              className="leading-relaxed mb-4"
              style={{
                fontSize: "0.9rem",
                color: "var(--cream-muted)",
                fontStyle: "italic",
              }}
            >
              Não se trata de opinião.
              <br />
              É uma análise baseada em estrutura, padrão e observação real.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Esse modelo pode ser utilizado tanto para avaliação individual quanto para
              análise comparativa entre diferentes drogarias.
            </p>
          </div>

          {/* Right — CTA */}
          <div
            className="flex-shrink-0 w-full lg:w-72 p-8"
            style={{
              backgroundColor: "var(--navy-card)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Agora você pode ver isso na prática
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: "0.88rem", color: "var(--cream-muted)" }}
            >
              Acesse a avaliação e identifique os pontos críticos no atendimento.
            </p>
            <a
              href="/pesquisa"
              className="btn-gold"
              style={{ display: "inline-block", textAlign: "center", width: "100%" }}
            >
              Avaliar agora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
