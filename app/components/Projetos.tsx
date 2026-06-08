const projetos = [
  {
    status: 'Em produção',
    statusDot: 'gold',
    titulo: 'GuiaDose',
    subtitulo: 'Calculadora de Posologia Farmacêutica',
    desc: 'Ferramenta de apoio à prática clínica para farmacêuticos e profissionais de saúde. Calcula posologia de adultos e crianças com doses baseadas em bula ANVISA.',
    tags: ['13 antibióticos', 'Antipiréticos', 'PWA', 'Bula ANVISA'],
    cta: 'Acessar ferramenta',
    href: 'https://guiadose.vercel.app/',
    nota: null,
  },
  {
    status: 'Beta',
    statusDot: 'steel',
    titulo: 'VitaDose',
    subtitulo: 'Companion Farmacêutico para Pacientes Crônicos',
    desc: 'App para pacientes polimedicados e cuidadores. Gerencia horários de dose, controle de estoque e emite alertas de interações medicamentosas e alimentares.',
    tags: ['Alertas de dose', 'Controle de estoque', 'Interações', 'PWA'],
    cta: 'Ver demonstração',
    href: 'https://vitadose.vercel.app/',
    nota: 'Produto em desenvolvimento ativo.',
  },
];

export default function Projetos() {
  return (
    <section id="projetos" style={{ backgroundColor: 'var(--navy-deep)' }}>
      <div className="section">
        <p className="eyebrow mb-4">Projetos</p>
        <div className="gold-line mb-10" />

        <div className="mb-12" style={{ maxWidth: '560px' }}>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--cream)',
            }}
          >
            Da prática clínica{' '}
            <em style={{ color: 'var(--gold)' }}>ao código.</em>
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Ferramentas que desenvolvi para resolver problemas reais do dia a dia
            farmacêutico — porque a melhor tecnologia nasce de quem conhece o problema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projetos.map((p) => (
            <a
              key={p.titulo}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6"
              style={{
                backgroundColor: 'var(--navy-card)',
                borderTop: `3px solid ${p.statusDot === 'gold' ? 'var(--gold)' : 'var(--steel)'}`,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: p.statusDot === 'gold' ? 'var(--gold)' : 'var(--steel)',
                    display: 'inline-block',
                  }}
                />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{
                    color: p.statusDot === 'gold' ? 'var(--gold)' : 'var(--steel)',
                  }}
                >
                  {p.status}
                </span>
              </div>

              {/* Título */}
              <h3
                className="mb-1 leading-none"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  color: 'var(--cream)',
                }}
              >
                {p.titulo}
              </h3>
              <p
                className="mb-4 text-xs tracking-wide uppercase"
                style={{ color: 'var(--cream-muted)', letterSpacing: '0.08em' }}
              >
                {p.subtitulo}
              </p>

              {/* Descrição */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: 'var(--cream-muted)' }}
              >
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '2px 9px',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      border: `1px solid ${p.statusDot === 'gold' ? 'rgba(232,160,32,0.25)' : 'rgba(91,143,201,0.25)'}`,
                      color: 'var(--cream-muted)',
                      borderRadius: '2px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Nota beta */}
              {p.nota && (
                <p
                  className="mb-4 italic text-xs"
                  style={{ color: 'var(--steel)', opacity: 0.8 }}
                >
                  {p.nota}
                </p>
              )}

              {/* CTA */}
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: p.statusDot === 'gold' ? 'var(--gold)' : 'var(--steel)',
                }}
              >
                {p.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
