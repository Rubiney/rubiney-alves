const ferramentas = [
  {
    tag: 'Posologia · Calculadora Clínica',
    titulo: 'GuiaDose',
    desc: '13 calculadoras de antibióticos — adulto e pediátrico — com doses baseadas em bula ANVISA. Desenvolvida para orientação precisa no ponto de venda e na prática clínica farmacêutica.',
    cta: 'Acessar ferramenta',
    href: 'https://guiadose.vercel.app/',
  },
  {
    tag: 'Azitromicina · Calculadora Especializada',
    titulo: 'AzitroCal',
    desc: 'Calculadora específica para posologia de Azitromicina em adultos e crianças. Com regime de dose, link direto à bula ANVISA e opção de impressão para o ponto de venda.',
    cta: 'Calcular posologia',
    href: 'https://guiadose.vercel.app/azitromicina.html',
  },
];

export default function Ferramentas() {
  return (
    <section id="ferramentas" style={{ backgroundColor: 'var(--navy-card)' }}>
      <div className="section">
        <p className="eyebrow mb-4">Ferramentas</p>
        <div className="gold-line mb-10" />

        <div className="mb-12" style={{ maxWidth: '560px' }}>
          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--cream)',
            }}
          >
            Farmacêutico clínico que{' '}
            <em style={{ color: 'var(--gold)' }}>constrói o que precisa.</em>
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Além da gestão comercial, desenvolvo ferramentas de apoio à prática
            clínica — porque orientar vai além de dispensar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ferramentas.map((f) => (
            <a
              key={f.titulo}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6"
              style={{
                backgroundColor: 'var(--navy-deep)',
                borderTop: '3px solid var(--gold)',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <p
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: 'var(--gold)', opacity: 0.75 }}
              >
                {f.tag}
              </p>
              <h3
                className="mb-3 leading-snug"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--cream)',
                }}
              >
                {f.titulo}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--cream-muted)' }}
              >
                {f.desc}
              </p>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--gold)' }}
              >
                {f.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
