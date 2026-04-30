const canais = [
  {
    icone: '✉',
    label: 'E-mail',
    valor: 'sr.rubiney@gmail.com',
    href: 'mailto:sr.rubiney@gmail.com',
  },
  {
    icone: '✆',
    label: 'WhatsApp',
    valor: '(96) 99137-3225',
    href: 'https://wa.me/5596991373225',
  },
  {
    icone: 'in',
    label: 'LinkedIn',
    valor: 'linkedin.com/in/rubineyalves',
    href: 'https://www.linkedin.com/in/rubineyalves',
    externo: true,
  },
  {
    icone: '◎',
    label: 'Localização',
    valor: 'Macapá — AP, Brasil',
    href: null,
    sub: 'Disponível para projetos remotos e presenciais',
  },
]

const perfis = [
  {
    para: 'Recrutadores e gestores de RH',
    corpo: 'Estou disponível para conversas sobre oportunidades em gestão comercial, liderança de equipes de vendas e estruturação de processos comerciais.',
    detalhe: 'Meu perfil é de gestor sênior com mais de 20 anos de operação no varejo farmacêutico — com histórico comprovado de promoção interna, gestão data-driven e entrega orientada a resultado.',
    cta: 'LinkedIn ou WhatsApp',
    btns: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rubineyalves', externo: true },
      { label: 'WhatsApp', href: 'https://wa.me/5596991373225', externo: true },
    ],
  },
  {
    para: 'Gestores e empresários do varejo farmacêutico',
    corpo: 'Se identificou algum dos problemas que abordei aqui — no atendimento, no processo, na equipe ou no resultado — posso ajudar a mapear onde está o gargalo real.',
    detalhe: 'Não ofereço fórmula pronta. Ofereço análise baseada em experiência de campo e visão estratégica construída ao longo de mais de duas décadas no ambiente que você opera.',
    cta: 'WhatsApp ou e-mail',
    btns: [
      { label: 'WhatsApp', href: 'https://wa.me/5596991373225', externo: true },
      { label: 'E-mail', href: 'mailto:sr.rubiney@gmail.com', externo: false },
    ],
  },
]

export default function Contato() {
  return (
    <section id="contato" style={{ backgroundColor: 'var(--navy-card)' }}>
      <div className="section">
        <p className="eyebrow mb-4">Contato</p>
        <div className="gold-line mb-12" />

        {/* ── Abertura ── */}
        <div className="mb-16" style={{ maxWidth: '640px' }}>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--cream)',
            }}
          >
            Você chegou até aqui.{' '}
            <em style={{ color: 'var(--gold)' }}>Isso já diz algo.</em>
          </h2>

          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Gestores que chegam ao fim de um portfólio não estão procurando currículo.
            Estão avaliando se existe alinhamento real.
          </p>

          <p
            className="leading-relaxed italic"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Se você encontrou esse alinhamento — a conversa já tem valor antes de começar.
          </p>
        </div>

        {/* ── Para quem é essa conversa ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-shrink-0 h-px w-6" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-xs font-medium tracking-widest uppercase flex-shrink-0" style={{ color: 'var(--cream)' }}>
            Para Quem É Essa Conversa
          </p>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--gold-muted)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {perfis.map((p) => (
            <div
              key={p.para}
              className="flex flex-col p-8"
              style={{
                backgroundColor: 'var(--navy-deep)',
                borderTop: '3px solid var(--gold)',
              }}
            >
              <p
                className="text-xs font-medium tracking-widest uppercase mb-5"
                style={{ color: 'var(--gold)', opacity: 0.75 }}
              >
                {p.para}
              </p>

              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: 'var(--cream-muted)' }}
              >
                {p.corpo}
              </p>

              <p
                className="text-sm leading-relaxed mb-8 italic"
                style={{ color: 'var(--cream-muted)' }}
              >
                {p.detalhe}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {p.btns.map((btn, i) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target={btn.externo ? '_blank' : undefined}
                    rel={btn.externo ? 'noopener noreferrer' : undefined}
                    className={i === 0 ? 'btn-gold' : 'text-xs tracking-widest uppercase'}
                    style={
                      i === 0
                        ? { display: 'inline-block' }
                        : {
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '11px 16px',
                            border: '1px solid var(--gold-muted)',
                            color: 'var(--cream-muted)',
                            textDecoration: 'none',
                          }
                    }
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Canais + Assinatura ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-shrink-0 h-px w-6" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-xs font-medium tracking-widest uppercase flex-shrink-0" style={{ color: 'var(--cream)' }}>
            Canais de Contato
          </p>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--gold-muted)' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">

          {/* Canais */}
          <div className="flex-1 flex flex-col gap-5">
            {canais.map((c) => {
              const inner = (
                <>
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid var(--gold-muted)' }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>{c.icone}</span>
                  </div>
                  <div>
                    <p className="text-xs eyebrow mb-0.5">{c.label}</p>
                    <p className="text-sm" style={{ color: 'var(--cream)' }}>{c.valor}</p>
                    {c.sub && (
                      <p className="text-xs mt-0.5" style={{ color: 'var(--cream-muted)' }}>{c.sub}</p>
                    )}
                  </div>
                </>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.externo ? '_blank' : undefined}
                  rel={c.externo ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4">
                  {inner}
                </div>
              )
            })}
          </div>

          {/* Assinatura */}
          <div
            className="flex-shrink-0 w-full lg:w-72 p-8"
            style={{
              backgroundColor: 'var(--navy-deep)',
              borderTop: '3px solid var(--gold)',
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--cream)',
              }}
            >
              Rubiney Alves
            </h3>
            <p className="text-sm mb-1 font-medium tracking-wider" style={{ color: 'var(--cream-muted)' }}>
              Gerente Comercial Sênior
            </p>
            <p className="text-xs mb-8" style={{ color: 'var(--gold)', opacity: 0.6 }}>
              Varejo Farmacêutico · Gestão Data-Driven
            </p>

            <div className="mb-6" style={{ borderTop: '1px solid var(--gold-muted)' }} />

            {['AUCTORITAS', 'INTEGRITAS', 'EXCELLENTIA'].map((v) => (
              <p key={v} className="text-xs tracking-widest mb-2" style={{ color: 'var(--gold)', opacity: 0.55 }}>
                {v}
              </p>
            ))}

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/rubineyalves"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: 'var(--gold)', opacity: 0.7 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rubiney_alves/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: 'var(--gold)', opacity: 0.7 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        className="border-t py-6 text-center"
        style={{ borderColor: 'var(--gold-muted)' }}
      >
        <p className="text-xs tracking-widest" style={{ color: 'var(--cream-faint, #4a5a78)' }}>
          © {new Date().getFullYear()} Rubiney Alves de Melo · Todos os direitos reservados
        </p>
      </div>
    </section>
  )
}
