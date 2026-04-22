'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

const GAP = 16
const LBL_H = 90

const nodes: Record<number, { svgX: number; svgY: number; side: 'left' | 'right' }> = {
  1: { svgX: 580, svgY: 140,  side: 'left'  },
  2: { svgX: 320, svgY: 270,  side: 'right' },
  3: { svgX: 580, svgY: 400,  side: 'left'  },
  4: { svgX: 320, svgY: 530,  side: 'right' },
  5: { svgX: 590, svgY: 660,  side: 'left'  },
  6: { svgX: 310, svgY: 790,  side: 'right' },
  7: { svgX: 580, svgY: 910,  side: 'left'  },
}

const cursos = [
  { id: 1, nome: 'MBA em Gestão de Indicadores e Desempenho',                       inst: 'Anhanguera',      carga: '360h', ano: '03/2026' },
  { id: 2, nome: 'Pós em Ciência de Dados e Inteligência Artificial',               inst: 'Anhanguera',      carga: '360h', ano: '03/2026' },
  { id: 3, nome: 'Pós em Gestão de Pessoas e Psicologia Organizacional',            inst: 'Anhanguera',      carga: '360h', ano: '06/2025' },
  { id: 4, nome: 'MBA Executivo em Negócios e Competências Digitais',               inst: 'Anhanguera',      carga: '360h', ano: '03/2025' },
  { id: 5, nome: 'MBA em Gestão Estratégica de Marketing e Inteligência Competitiva', inst: 'Anhanguera',   carga: '360h', ano: '02/2025' },
  { id: 6, nome: 'Pós em Liderança e Gestão de Equipes de Alta Performance',        inst: 'Anhanguera',      carga: '360h', ano: '01/2025' },
  { id: 7, nome: 'Bacharelado em Sistemas de Informação',                           inst: 'Faculdade Atual', carga: '',     ano: '11/2015' },
]

const disciplinas: Record<number, string[]> = {
  1: ['Gestão da informação', 'Sistemas digitais de relatórios gerenciais por indicadores & BSC', 'Gestão do conhecimento', 'Gerenciamento de processos', 'Construção, mensuração e fomento de indicadores de desempenho', 'Gestão de desempenho com ênfase em data mining e resultados de alta performance', 'Métodos quantitativos aplicados ao risco', 'Gestão da qualidade e produtividade', 'Estratégia executiva'],
  2: ['Introdução à inteligência artificial', 'Linguagens de programação para ciência de dados (Python com Spark)', 'Analytics e inteligência artificial (IA)', 'Processamento de linguagem natural', 'Desenvolvimento de aplicações IA — robótica, imagem e visão computacional', 'Análise e modelagem preditiva', 'BI: a inteligência de negócios', 'Governança de dados', 'Projeto em ciência de dados com soluções para processamento paralelo e distribuído de dados'],
  3: ['Cultura organizacional', 'Construção, mensuração e fomento de indicadores de desempenho', 'Ferramentas e técnicas de coaching', 'Dimensão humana na governança corporativa', 'Fundamentos da psicologia positiva', 'Estratégias de gerenciamento de gente', 'O papel do psicólogo nas organizações', 'Treinamento e desenvolvimento', 'Recrutamento e seleção'],
  4: ['Cultura organizacional', 'Construção, mensuração e fomento de indicadores de desempenho', 'Ferramentas e técnicas de coaching', 'Dimensão humana na governança corporativa', 'Fundamentos da psicologia positiva', 'Estratégias de gerenciamento de gente', 'O papel do psicólogo nas organizações', 'Treinamento e desenvolvimento', 'Recrutamento e seleção'],
  5: ['Gestão mercadológica e comportamento do consumidor', 'Economia e mercados', 'Gestão estratégica da marca e percepção digital', 'BI: a inteligência de negócios', 'Marketing estratégico e inteligência competitiva', 'Gestão de mercados e estratégias de marketing', 'Gestão customer oriented', 'Estratégia executiva', 'Negociação e marketing empresarial'],
  6: ['Gestão de equipes de alta performance', 'Agile leadership practices', 'Liderança positiva', 'Gestão de desempenho com ênfase em data mining e resultados de alta performance', 'Comunicação e motivação nas organizações', 'OKRs (objectives and key results)', 'Estratégias de gerenciamento de gente', 'Fundamentos da psicologia positiva', 'Programação Neurolinguística (PNL)'],
}

const yearLabels = [
  { x: 632, y: 144, text: '2026' },
  { x: 200, y: 274, text: '2026' },
  { x: 632, y: 404, text: '2025' },
  { x: 200, y: 534, text: '2025' },
  { x: 642, y: 664, text: '2025' },
  { x: 190, y: 794, text: '2025' },
  { x: 632, y: 914, text: '2015' },
]

type BoxStyle = { left: string; top: string; width: string; height: string }
type DiscStyle = { top: string; left: string; width: string }

export default function Formacao() {
  const svgRef    = useRef<SVGSVGElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId]   = useState<number | null>(null)
  const [clickedId, setClickedId]   = useState<number | null>(null)
  const [boxStyles,  setBoxStyles]  = useState<Record<number, BoxStyle>>({})
  const [discStyles, setDiscStyles] = useState<Record<number, DiscStyle>>({})

  const positionLabels = useCallback(() => {
    if (!svgRef.current || !canvasRef.current) return
    const svgRect    = svgRef.current.getBoundingClientRect()
    const canvasRect = canvasRef.current.getBoundingClientRect()
    const scaleX     = svgRect.width  / 900
    const scaleY     = svgRect.height / 980
    const canvasW    = canvasRect.width

    const newBox:  Record<number, BoxStyle>  = {}
    const newDisc: Record<number, DiscStyle> = {}

    Object.entries(nodes).forEach(([key, n]) => {
      const id   = Number(key)
      const px   = (svgRect.left - canvasRect.left) + n.svgX * scaleX
      const py   = (svgRect.top  - canvasRect.top)  + n.svgY * scaleY
      const nodeR = 40 * scaleX

      let lblLeft: number, lblW: number
      if (n.side === 'left') {
        lblLeft = 0
        lblW    = px - nodeR - GAP
      } else {
        lblLeft = px + nodeR + GAP
        lblW    = canvasW - lblLeft
      }
      lblW = Math.max(lblW, 0)

      newBox[id] = {
        left:   `${lblLeft}px`,
        top:    `${py - LBL_H / 2}px`,
        width:  `${lblW}px`,
        height: `${LBL_H}px`,
      }

      const discW = Math.min(lblW, 380)
      newDisc[id] = {
        top:  `${py - LBL_H / 2 + LBL_H + 6}px`,
        left: n.side === 'left' ? `${lblLeft + lblW - discW}px` : `${lblLeft}px`,
        width: `${discW}px`,
      }
    })

    setBoxStyles(newBox)
    setDiscStyles(newDisc)
  }, [])

  useEffect(() => {
    positionLabels()
    window.addEventListener('resize', positionLabels)
    return () => window.removeEventListener('resize', positionLabels)
  }, [positionLabels])

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-node]')) setClickedId(null)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const isActive  = (id: number) => hoveredId === id || clickedId === id
  const isClicked = (id: number) => clickedId === id

  const onEnter = (id: number) => setHoveredId(id)
  const onLeave = (id: number) => setHoveredId(p => p === id ? null : p)
  const onClick = (id: number) => setClickedId(p => p === id ? null : id)

  return (
    <section id="formacao" style={{ backgroundColor: 'var(--navy-deep)' }}>
      <div className="section">
        <p className="eyebrow mb-4">Formação Acadêmica</p>
        <div className="gold-line mb-12" />

        <div ref={canvasRef} style={{ position: 'relative', width: '100%' }}>

          {/* ── SVG Serpentina ── */}
          <svg
            ref={svgRef}
            viewBox="0 0 900 980"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%' }}
          >
            <defs>
              <linearGradient id="ga" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#e8c878" />
                <stop offset="100%" stopColor="#8a6e2c" />
              </linearGradient>
              <linearGradient id="gb" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#d4b06a" />
                <stop offset="100%" stopColor="#7a6428" />
              </linearGradient>
              <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#b8923a" />
                <stop offset="100%" stopColor="#e8c878" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="450" cy="18" r="6" fill="#b8923a" opacity="0.5" />

            <path d="M 450 18 C 450 50, 500 70, 540 90 C 580 110, 610 125, 580 140"        fill="none" stroke="url(#ga)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 580 140 C 550 155, 480 180, 420 210 C 360 240, 300 255, 320 270"    fill="none" stroke="url(#gb)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 320 270 C 350 285, 430 310, 490 340 C 555 370, 610 385, 580 400"    fill="none" stroke="url(#gc)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 580 400 C 550 415, 480 440, 420 470 C 360 500, 295 515, 320 530"    fill="none" stroke="url(#ga)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 320 530 C 350 545, 430 575, 500 605 C 560 630, 615 645, 590 660"    fill="none" stroke="url(#gb)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 590 660 C 560 675, 480 705, 415 735 C 355 760, 295 775, 310 790"    fill="none" stroke="url(#gc)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.92" />
            <path d="M 310 790 C 340 805, 420 835, 490 865 C 555 890, 610 900, 580 910"    fill="none" stroke="url(#ga)" strokeWidth="32" strokeLinecap="round" filter="url(#glow)" opacity="0.75" />

            {/* Nós numerados */}
            {cursos.map(({ id }) => {
              const n  = nodes[id]
              const cx = n.svgX
              const cy = n.svgY
              return (
                <g
                  key={id}
                  data-node={id}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => onEnter(id)}
                  onMouseLeave={() => onLeave(id)}
                  onClick={() => onClick(id)}
                >
                  <circle cx={cx} cy={cy} r={40} style={{ fill: 'var(--navy-deep)', stroke: 'var(--gold)', strokeWidth: 2.5 }} />
                  <circle cx={cx} cy={cy} r={28} style={{ fill: isActive(id) ? 'rgba(232,160,32,0.28)' : 'rgba(232,160,32,0.12)', transition: 'fill 0.3s' }} />
                  <foreignObject x={cx - 40} y={cy - 40} width="80" height="80">
                    <div style={{
                      width: '80px', height: '80px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'CGR',var(--font-cormorant),serif",
                      fontSize: '34px', color: 'var(--gold)',
                      lineHeight: '1', pointerEvents: 'none',
                    }}>
                      {id}
                    </div>
                  </foreignObject>
                </g>
              )
            })}

            {/* Anos */}
            {yearLabels.map(({ x, y, text }, i) => (
              <text key={i} x={x} y={y} fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(232,160,32,0.3)" letterSpacing="1">
                {text}
              </text>
            ))}
          </svg>

          {/* ── Labels de texto ── */}
          {cursos.map(({ id, nome, inst, carga, ano }) => {
            const active = isActive(id)
            return (
              <div
                key={id}
                data-node={id}
                onMouseEnter={() => onEnter(id)}
                onMouseLeave={() => onLeave(id)}
                onClick={() => onClick(id)}
                style={{
                  position: 'absolute',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', alignItems: 'center',
                  textAlign: 'center',
                  padding: '14px 18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'background 0.3s, border-color 0.3s',
                  background:  active ? 'rgba(12,24,37,0.97)' : 'transparent',
                  border:      active ? '1px solid rgba(232,160,32,0.35)' : '1px solid transparent',
                  borderTop:   active ? '2px solid var(--gold)' : '2px solid transparent',
                  ...boxStyles[id],
                }}
              >
                {/* Número fantasma */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  fontFamily: "'CGR',var(--font-cormorant),serif",
                  fontSize: '72px', fontWeight: 300, lineHeight: 1,
                  color: active ? 'rgba(232,160,32,0.20)' : 'rgba(232,160,32,0.10)',
                  pointerEvents: 'none', userSelect: 'none',
                  transition: 'color 0.3s',
                }}>
                  {id}
                </div>

                {/* Nome */}
                <div style={{
                  fontFamily: "var(--font-cormorant),serif",
                  fontSize: '20px', fontWeight: 300,
                  color: active ? 'var(--cream)' : 'rgba(242,237,230,0.45)',
                  lineHeight: 1.35, position: 'relative', zIndex: 1,
                  transition: 'color 0.3s',
                }}>
                  {nome}
                </div>

                {/* Meta */}
                <div style={{
                  fontSize: '13px', fontWeight: 300,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: active ? 'rgba(232,160,32,0.65)' : 'transparent',
                  marginTop: '6px', position: 'relative', zIndex: 1,
                  transition: 'color 0.3s',
                }}>
                  {inst}{carga ? ` · ${carga}` : ''} · {ano}
                </div>
              </div>
            )
          })}

          {/* ── Painéis de disciplinas ── */}
          {cursos.map(({ id }) => {
            const shown = isClicked(id)
            const discs = disciplinas[id]
            return (
              <div
                key={id}
                data-node={id}
                style={{
                  position: 'absolute',
                  background: 'rgba(8,14,22,0.97)',
                  border: '1px solid rgba(232,160,32,0.25)',
                  borderTop: '2px solid var(--gold)',
                  padding: '18px 20px',
                  opacity: shown ? 1 : 0,
                  pointerEvents: shown ? 'all' : 'none',
                  transition: 'opacity 0.3s ease',
                  zIndex: 20,
                  ...discStyles[id],
                }}
              >
                <div style={{ fontSize: '7px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(232,160,32,0.45)', marginBottom: '10px' }}>
                  Grade Curricular
                </div>
                {discs ? (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {discs.map((d, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '11px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.45 }}>
                        <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '5px', display: 'block' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '10px', fontStyle: 'italic', color: 'var(--cream-faint)' }}>—</p>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
