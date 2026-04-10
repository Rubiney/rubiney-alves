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

export default function Pilares() {
  return (
    <section id="pilares" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Pilares</p>
        <div className="gold-line mb-12" />

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
