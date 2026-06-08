const antibioticos = [
  'Amoxicilina', 'Amoxicilina+Clavulanato', 'Azitromicina',
  'Cefalexina', 'Cefadroxila', 'Cefaclor', 'Cefuroxima',
  'Claritromicina', 'Ciprofloxacino', 'Doxiciclina',
  'Metronidazol', 'Nitrofurantoína', 'Bactrim',
];

const antipireticos = ['Ibuprofeno', 'Dipirona', 'Paracetamol'];

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        fontSize: '0.62rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        border: '1px solid rgba(232,160,32,0.25)',
        color: 'var(--cream-muted)',
        borderRadius: '2px',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

function ChipGroup({ label, items, maxVisible }: { label: string; items: string[]; maxVisible: number }) {
  const visible = items.slice(0, maxVisible);
  const hidden = items.length - maxVisible;
  return (
    <div className="mb-3">
      <p
        className="mb-2"
        style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.6 }}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {visible.map((item) => <Chip key={item} label={item} />)}
        {hidden > 0 && (
          <span
            style={{
              display: 'inline-block',
              padding: '2px 8px',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: 'var(--gold)',
              opacity: 0.7,
              whiteSpace: 'nowrap',
            }}
          >
            +{hidden} mais
          </span>
        )}
      </div>
    </div>
  );
}

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

          {/* Card GuiaDose — com chips */}
          <a
            href="https://guiadose.vercel.app/"
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
              Posologia · Calculadora Clínica
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
              GuiaDose
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--cream-muted)' }}
            >
              Calculadora de posologia para adultos e crianças, com doses
              baseadas em bula ANVISA — para orientação precisa no ponto de
              venda e na prática clínica.
            </p>

            {/* Chips de medicamentos */}
            <div
              className="mb-6 p-4 flex-1"
              style={{ backgroundColor: 'rgba(15,22,53,0.5)', borderLeft: '2px solid rgba(232,160,32,0.2)' }}
            >
              <ChipGroup label="Antibióticos" items={antibioticos} maxVisible={4} />
              <ChipGroup label="Antipiréticos" items={antipireticos} maxVisible={3} />
            </div>

            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--gold)' }}
            >
              Acessar ferramenta →
            </span>
          </a>

          {/* Card AzitroCal */}
          <a
            href="https://guiadose.vercel.app/azitromicina.html"
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
              Azitromicina · Calculadora Especializada
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
              AzitroCal
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: 'var(--cream-muted)' }}
            >
              Calculadora específica para posologia de Azitromicina em adultos
              e crianças. Com regime de dose, link direto à bula ANVISA e opção
              de impressão para o ponto de venda.
            </p>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--gold)' }}
            >
              Calcular posologia →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
