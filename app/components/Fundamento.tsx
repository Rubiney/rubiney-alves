'use client'

import { useState } from 'react'
import Formacao from './Formacao'

const areas = [
  {
    dominio: 'Gestão & Dados',
    curso: 'MBA em Gestão de Indicadores e Desempenho',
    argumento: 'Resultado sem métrica é percepção, não evidência.',
    contexto: 'Porque o que não é medido não pode ser gerenciado — e o que não é gerenciado não pode melhorar.',
  },
  {
    dominio: 'Tecnologia & Análise',
    curso: 'Pós em Ciência de Dados e Inteligência Artificial',
    argumento: 'O varejo que não lê seus dados não enxerga o que está perdendo.',
    contexto: 'Porque a loja que depende apenas da intuição do gestor tem um limite claro de crescimento.',
  },
  {
    dominio: 'Pessoas & Comportamento',
    curso: 'Pós em Gestão de Pessoas e Psicologia Organizacional',
    argumento: 'Equipe de alta performance não se constrói com cobrança. Constrói-se com compreensão do comportamento humano.',
    contexto: 'Porque pressão sem contexto gera rotatividade — e rotatividade destrói qualidade de atendimento.',
  },
  {
    dominio: 'Posicionamento',
    curso: 'MBA em Marketing Estratégico e Inteligência Competitiva',
    argumento: 'Posicionamento define resultado antes mesmo da venda acontecer.',
    contexto: 'Porque o cliente decide onde comprar antes de entrar na loja — e isso é construído com estratégia, não com desconto.',
  },
  {
    dominio: 'Liderança',
    curso: 'Pós em Liderança e Gestão de Equipes de Alta Performance',
    argumento: 'Liderar não é ocupar um cargo. É influenciar resultado através de pessoas.',
    contexto: 'Porque o gestor que não desenvolve sua equipe está construindo um teto, não um time.',
  },
  {
    dominio: 'Negócios Digitais',
    curso: 'MBA Executivo em Negócios e Competências Digitais',
    argumento: 'O mercado mudou. E o gestor que não mudou junto ficou para trás.',
    contexto: 'Porque competência digital deixou de ser diferencial — é requisito de permanência.',
  },
  {
    dominio: 'Base Técnica',
    curso: 'Bacharelado em Sistemas de Informação',
    argumento: 'A estrutura que sustenta o pensamento analítico e orientado a dados presente em toda a trajetória.',
    contexto: 'A formação técnica que veio antes de tudo e que fundamenta a leitura de dados, processos e sistemas.',
  },
]

export default function Fundamento() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <section id="fundamento" style={{ backgroundColor: 'var(--navy-card)' }}>
        <div className="section">
          <p className="eyebrow mb-4">Fundamento</p>
          <div className="gold-line mb-12" />

          {/* ── Bloco 1 — Abertura ── */}
          <div className="mb-14" style={{ maxWidth: '720px' }}>
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 400,
                color: 'var(--cream)',
              }}
            >
              Experiência sem estrutura é achismo.{' '}
              <em style={{ color: 'var(--gold)' }}>Estrutura sem experiência é teoria.</em>
            </h2>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              A combinação das duas é o que transforma um profissional de campo
              em um gestor estratégico.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              Mais de 20 anos de operação no varejo farmacêutico foram complementados
              por uma formação acadêmica construída com propósito — não por obrigação,
              mas por necessidade de aprofundar o que a prática já havia ensinado na essência.
            </p>
          </div>

          {/* ── Bloco 2 — Argumentos ── */}
          <Divisor label="A Base que Sustenta a Visão" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {areas.map((a) => (
              <div
                key={a.dominio}
                className="p-6"
                style={{
                  backgroundColor: 'var(--navy-deep)',
                  borderTop: '3px solid var(--gold)',
                }}
              >
                <p
                  className="text-xs font-medium tracking-widest uppercase mb-3"
                  style={{ color: 'var(--gold)', opacity: 0.7 }}
                >
                  {a.dominio}
                </p>
                <p
                  className="leading-snug mb-3 italic"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: 'var(--cream)',
                    lineHeight: 1.45,
                  }}
                >
                  &ldquo;{a.argumento}&rdquo;
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--cream-muted)' }}
                >
                  {a.contexto}
                </p>
              </div>
            ))}
          </div>

          {/* ── Bloco 3 — Síntese ── */}
          <Divisor label="O Que Essa Formação Representa na Prática" />

          <div className="mb-14" style={{ maxWidth: '680px' }}>
            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              Não se trata de acúmulo de títulos.
            </p>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              Cada área estudada responde a uma demanda real identificada na operação:
              como medir, como liderar, como posicionar, como tomar decisão com dados,
              como desenvolver pessoas.
            </p>

            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              A formação não veio antes da experiência. Veio junto — e em resposta a ela.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
            >
              Isso é o que diferencia um currículo extenso de uma{' '}
              <em style={{ color: 'var(--gold)' }}>visão estratégica consolidada.</em>
            </p>
          </div>

          {/* ── Bloco 4 — Fechamento ── */}
          <div
            className="mb-14 p-6"
            style={{
              backgroundColor: 'var(--navy-deep)',
              borderLeft: '3px solid var(--gold)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                fontWeight: 400,
                color: 'var(--cream)',
                lineHeight: 1.55,
                fontStyle: 'italic',
              }}
            >
              Formação não é credencial.{' '}
              <em style={{ color: 'var(--gold)' }}>
                É a estrutura que sustenta cada decisão tomada no campo.
              </em>
            </p>
          </div>

          {/* ── Link próxima seção ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <a
              href="#artigos"
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--gold)', textDecoration: 'none' }}
            >
              Veja como esse conhecimento é aplicado em conteúdo e análise ↓
            </a>

            {/* Toggle formação detalhada */}
            <button
              onClick={() => setAberto(!aberto)}
              className="text-xs tracking-widest uppercase flex items-center gap-2"
              style={{
                background: 'none',
                border: '1px solid var(--gold-muted)',
                color: 'var(--cream-muted)',
                padding: '8px 16px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {aberto ? 'Ocultar formação detalhada ↑' : 'Ver formação detalhada ↓'}
            </button>
          </div>
        </div>
      </section>

      {/* ── Bloco secundário: Formação com visualização ── */}
      {aberto && <Formacao />}
    </>
  )
}

function Divisor({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-shrink-0 h-px w-6" style={{ backgroundColor: 'var(--gold)' }} />
      <p
        className="text-xs font-medium tracking-widest uppercase flex-shrink-0"
        style={{ color: 'var(--cream)' }}
      >
        {label}
      </p>
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--gold-muted)' }} />
    </div>
  )
}
