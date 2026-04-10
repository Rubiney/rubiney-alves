export default function Artigos() {
  return (
    <section id="artigos" style={{ backgroundColor: "var(--navy-card)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Autoridade & Conteúdo</p>
        <div className="gold-line mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Artigo científico — referência */}
          <div
            className="p-8 relative"
            style={{
              backgroundColor: "var(--navy-deep)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            {/* Eyebrow */}
            <p className="eyebrow mb-4">Referência Científica</p>

            <h3
              className="mb-4 leading-snug"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "var(--cream)",
              }}
            >
              The Impact of Leadership and Motivation on Sales Performance
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--cream-muted)" }}
            >
              Estudo que investiga a relação entre estilo de liderança, motivação de equipes e
              desempenho em vendas — base conceitual que fundamenta a prática de gestão
              orientada a pessoas e resultados.
            </p>

            <div
              className="p-4 italic text-sm leading-relaxed"
              style={{
                borderLeft: "2px solid var(--gold-muted)",
                color: "var(--cream-muted)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1rem",
              }}
            >
              "Gerir meta é cobrar número. Gerir motivação é monitorar comportamento."
            </div>

            <p
              className="mt-4 text-xs"
              style={{ color: "var(--gold)", opacity: 0.6 }}
            >
              Fonte: UFPR / Revista Brasileira de Marketing
            </p>
          </div>

          {/* Tema do post — Gestão Comercial */}
          <div
            className="p-8"
            style={{
              backgroundColor: "var(--navy-deep)",
              border: "1px solid var(--gold-muted)",
            }}
          >
            <p className="eyebrow mb-4">Gestão Comercial</p>

            <h3
              className="mb-4 leading-snug"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "var(--cream)",
              }}
            >
              Você está gerindo metas ou gerindo{" "}
              <em style={{ color: "var(--gold)" }}>motivação?</em>
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--cream-muted)" }}
            >
              São coisas diferentes. E você provavelmente não sabe em qual está. A diferença
              entre líderes que apenas cobram números e líderes que transformam comportamentos
              — e por que isso define o resultado da equipe.
            </p>

            <div className="flex gap-3 flex-wrap">
              {["Liderança", "Vendas", "Gestão de Pessoas", "Data-Driven"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs tracking-wide"
                  style={{
                    border: "1px solid var(--gold-muted)",
                    color: "var(--cream-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p
          className="mt-8 text-center text-xs tracking-widest uppercase"
          style={{ color: "var(--cream-faint)" }}
        >
          AUCTORITAS · INTEGRITAS · EXCELLENTIA
        </p>
      </div>
    </section>
  );
}
