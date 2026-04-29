'use client'

import { useState } from 'react'

const CRITERIOS = [
  { key: 'tempo',        label: 'Tempo de atendimento' },
  { key: 'cordialidade', label: 'Cordialidade' },
  { key: 'conhecimento', label: 'Conhecimento do atendente' },
  { key: 'organizacao',  label: 'Organização da loja' },
  { key: 'limpeza',      label: 'Limpeza' },
  { key: 'facilidade',   label: 'Facilidade de encontrar produtos' },
  { key: 'clareza',      label: 'Clareza nas informações' },
  { key: 'geral',        label: 'Nota geral da experiência' },
]

const PROBLEMAS = [
  'Demora no atendimento',
  'Falta de conhecimento técnico',
  'Atendimento frio / sem empatia',
  'Loja desorganizada',
  'Loja suja',
  'Dificuldade de encontrar produtos',
  'Informação confusa',
  'Falta de estoque',
  'Outro',
]

const hoje = () => new Date().toLocaleDateString('pt-BR')

type Notas = Record<string, number>

interface FormData {
  drogaria: string
  bairro: string
  notas: Notas
  problema: string
  observacoes: string
}

function mediaNotas(notas: Notas): number {
  const vals = CRITERIOS.map(c => notas[c.key] || 0).filter(v => v > 0)
  if (!vals.length) return 0
  return vals.reduce((a, b) => a + b, 0) / vals.length
}

function mensagemMedia(media: number): { texto: string; cor: string } {
  if (media >= 4) return { texto: 'Excelente atendimento!', cor: '#4ade80' }
  if (media >= 3) return { texto: 'Atendimento regular.', cor: '#facc15' }
  return { texto: 'Atendimento precisa melhorar.', cor: '#f87171' }
}

export default function Pesquisa() {
  const [form, setForm] = useState<FormData>({
    drogaria: '',
    bairro: '',
    notas: {},
    problema: '',
    observacoes: '',
  })
  const [enviado, setEnviado]   = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro]         = useState('')
  const [mediaFinal, setMediaFinal] = useState(0)

  const setNota = (key: string, val: number) =>
    setForm(f => ({ ...f, notas: { ...f.notas, [key]: val } }))

  const preenchidos   = CRITERIOS.filter(c => form.notas[c.key]).length
  const notasCompletas = preenchidos === CRITERIOS.length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!notasCompletas) {
      setErro('Avalie todos os critérios antes de enviar.')
      return
    }
    setErro('')
    setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, data: hoje() }),
      })
      if (!res.ok) throw new Error()
      setMediaFinal(mediaNotas(form.notas))
      setEnviado(true)
    } catch {
      setErro('Erro ao enviar. Tente novamente.')
    }
    setEnviando(false)
  }

  // — Tela de resultado (B + C) —
  if (enviado) {
    const { texto, cor } = mensagemMedia(mediaFinal)
    const estrelasTela = Math.round(mediaFinal)
    return (
      <div style={s.thanks}>
        <div style={s.thanksBadge}>✓</div>
        <h2 style={s.thanksTitle}>Avaliação registrada!</h2>

        <div style={s.scoreBox}>
          <p style={{ ...s.scoreMsg, color: cor }}>{texto}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n => (
              <span key={n} style={{ fontSize: 32, color: n <= estrelasTela ? '#C9A84C' : '#1e2e50' }}>★</span>
            ))}
          </div>
          <p style={s.scoreNum}>{mediaFinal.toFixed(1)} / 5.0</p>
        </div>

        <p style={s.thanksText}>Obrigado pela sua participação.</p>
        <p style={s.thanksSmall}>Varejo Farmacêutico · Macapá–AP</p>

        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>
          ← Conheça o trabalho de Rubiney Alves
        </a>
      </div>
    )
  }

  // — Formulário —
  return (
    <>
      {/* D) CSS da animação de pulso */}
      <style>{`
        @keyframes pulso {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.35); }
          100% { transform: scale(1); }
        }
        .estrela-ativa { animation: pulso 0.25s ease; }
      `}</style>

      <div style={s.page}>

        <div style={s.header}>
          <p style={s.eyebrow}>Pesquisa Acadêmica</p>
          <h1 style={s.title}>Termômetro de Atendimento</h1>
          <p style={s.subtitle}>Varejo Farmacêutico · Macapá – AP</p>
          <p style={s.author}>Rubiney Alves · {hoje()}</p>
        </div>

        {/* A) Barra de progresso */}
        <div style={s.progressWrap}>
          <div style={s.progressBar}>
            <div style={{ ...s.progressFill, width: `${(preenchidos / CRITERIOS.length) * 100}%` }} />
          </div>
          <p style={s.progressText}>
            {preenchidos} de {CRITERIOS.length} critérios avaliados
            {notasCompletas ? ' ✓' : ''}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={s.form}>

          <Secao label="Identificação da Farmácia">
            <Campo label="Como identificar a farmácia? (opcional)">
              <input style={s.input}
                placeholder="Nome, cor, slogan, esquina com..."
                value={form.drogaria}
                onChange={e => setForm(f => ({ ...f, drogaria: e.target.value }))} />
            </Campo>
            <p style={s.hint}>Ex: farmácia verde · "Saúde é tudo" · esquina da Av. FAB com Rua Cândido Mendes</p>
            <Campo label="Bairro *">
              <input style={s.input} required
                placeholder="Ex: Central"
                value={form.bairro}
                onChange={e => setForm(f => ({ ...f, bairro: e.target.value }))} />
            </Campo>
          </Secao>

          <Secao label="Avaliação dos Critérios">
            <p style={s.hint}>Toque nas estrelas · 1 = péssimo · 5 = excelente</p>
            {CRITERIOS.map(c => (
              <EstrelasRow
                key={c.key}
                label={c.label}
                value={form.notas[c.key] || 0}
                onChange={v => setNota(c.key, v)}
              />
            ))}
          </Secao>

          <Secao label="Principal Problema Observado">
            <select style={s.select} value={form.problema}
              onChange={e => setForm(f => ({ ...f, problema: e.target.value }))}>
              <option value="">Selecione...</option>
              {PROBLEMAS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </Secao>

          <Secao label="Observações Livres">
            <textarea style={s.textarea} rows={4}
              placeholder="Descreva o que observou durante a visita..."
              value={form.observacoes}
              onChange={e => setForm(f => ({ ...f, observacoes: e.target.value }))} />
          </Secao>

          {erro && <p style={s.erro}>{erro}</p>}

          <button
            type="submit"
            style={{ ...s.btn, opacity: enviando ? 0.7 : 1, cursor: enviando ? 'not-allowed' : 'pointer' }}
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar Avaliação'}
          </button>

        </form>
      </div>
    </>
  )
}

function Secao({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={s.secao}>
      <p style={s.secaoLabel}>{label}</p>
      {children}
    </div>
  )
}

function Campo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={s.campo}>
      <label style={s.campoLabel}>{label}</label>
      {children}
    </div>
  )
}

function EstrelasRow({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  const [hover, setHover]       = useState(0)
  const [pulsou, setPulsou]     = useState(0)

  const handleClick = (n: number) => {
    onChange(n)
    setPulsou(n)
    setTimeout(() => setPulsou(0), 260)
  }

  return (
    <div style={s.estrelasRow}>
      <span style={s.estrelasLabel}>{label}</span>
      <div style={s.estrelas}>
        {[1, 2, 3, 4, 5].map(n => (
          <span
            key={n}
            className={pulsou === n ? 'estrela-ativa' : ''}
            onClick={() => handleClick(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            style={{ ...s.estrela, color: n <= (hover || value) ? '#C9A84C' : '#1e2e50' }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: 500, margin: '0 auto',
    padding: '28px 18px 56px',
    fontFamily: "'Segoe UI', sans-serif",
    background: '#0D1B3E', minHeight: '100vh', color: '#fff',
  },
  header: {
    textAlign: 'center', marginBottom: 20,
    paddingBottom: 20, borderBottom: '1px solid #1a2a4a',
  },
  eyebrow:  { fontSize: 11, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 2, margin: '0 0 8px' },
  title:    { fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 6px' },
  subtitle: { fontSize: 14, color: '#8a9ab8', margin: '0 0 4px' },
  author:   { fontSize: 12, color: '#4a5a78' },

  // A) Progresso
  progressWrap: { marginBottom: 24 },
  progressBar:  { height: 6, background: '#0e1c36', borderRadius: 99, overflow: 'hidden', marginBottom: 6 },
  progressFill: { height: '100%', background: '#C9A84C', borderRadius: 99, transition: 'width 0.3s ease' },
  progressText: { fontSize: 12, color: '#8a9ab8', textAlign: 'right', margin: 0 },

  form: {},
  secao: { marginBottom: 28 },
  secaoLabel: {
    fontSize: 11, fontWeight: 600, color: '#C9A84C',
    textTransform: 'uppercase', letterSpacing: 1.5,
    marginBottom: 14, paddingBottom: 6,
    borderBottom: '1px solid #1a2a4a',
  },
  hint: { fontSize: 12, color: '#5a6a88', marginTop: -4, marginBottom: 12 },
  campo: { marginBottom: 14 },
  campoLabel: { display: 'block', fontSize: 13, color: '#8a9ab8', marginBottom: 6 },
  input: {
    width: '100%', padding: '11px 14px',
    background: '#0a1428', border: '1px solid #1e2e50',
    borderRadius: 8, color: '#fff', fontSize: 15, boxSizing: 'border-box',
  },
  select: {
    width: '100%', padding: '11px 14px',
    background: '#0a1428', border: '1px solid #1e2e50',
    borderRadius: 8, color: '#fff', fontSize: 14, boxSizing: 'border-box',
  },
  textarea: {
    width: '100%', padding: '11px 14px',
    background: '#0a1428', border: '1px solid #1e2e50',
    borderRadius: 8, color: '#fff', fontSize: 14,
    resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit',
  },
  estrelasRow: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', padding: '10px 0',
    borderBottom: '1px solid #0e1c36',
  },
  estrelasLabel: { fontSize: 14, color: '#c0cce4', flex: 1, paddingRight: 8 },
  estrelas: { display: 'flex', gap: 2 },
  estrela:  { fontSize: 28, cursor: 'pointer', transition: 'color 0.15s', userSelect: 'none', display: 'inline-block' },
  btn: {
    width: '100%', padding: '15px',
    background: '#C9A84C', color: '#0D1B3E',
    fontWeight: 700, fontSize: 16,
    border: 'none', borderRadius: 8, marginTop: 8,
  },
  erro: { color: '#ff6b6b', fontSize: 13, textAlign: 'center', marginBottom: 8 },

  // B + C) Tela de resultado
  thanks: {
    maxWidth: 400, margin: '0 auto',
    textAlign: 'center', fontFamily: "'Segoe UI', sans-serif",
    padding: '60px 24px 40px', background: '#0D1B3E', minHeight: '100vh',
  },
  thanksBadge: {
    width: 64, height: 64, borderRadius: '50%',
    background: '#C9A84C', color: '#0D1B3E',
    fontSize: 28, fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px',
  },
  thanksTitle: { color: '#C9A84C', fontSize: 22, margin: '0 0 20px' },
  scoreBox: {
    background: '#0a1428', border: '1px solid #1e2e50',
    borderRadius: 12, padding: '20px 24px', marginBottom: 24,
  },
  scoreMsg:  { fontSize: 18, fontWeight: 700, margin: '0 0 10px' },
  scorStars: { display: 'flex', justifyContent: 'center', gap: 4, margin: '0 0 8px' },
  scoreNum:  { fontSize: 28, fontWeight: 700, color: '#C9A84C', margin: 0 },
  thanksText:  { color: '#8a9ab8', fontSize: 14, margin: '0 0 6px' },
  thanksSmall: { color: '#4a5a78', fontSize: 12, margin: '0 0 32px' },
  backLink: {
    display: 'inline-block', marginTop: 8,
    color: '#C9A84C', fontSize: 13, textDecoration: 'none',
    borderBottom: '1px solid #C9A84C', paddingBottom: 2,
  },
}
