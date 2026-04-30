'use client'

import { useState } from 'react'

// ─── Pesquisa Física ────────────────────────────────────────────────────────

const CRITERIOS_B2 = [
  { key: 'tempo',        label: 'Tempo de atendimento',            desc: ['Muito demorado','Demorado','Regular','Rápido','Muito rápido'] },
  { key: 'cordialidade', label: 'Cordialidade no atendimento',     desc: ['Muito ruim','Ruim','Regular','Boa','Excelente'] },
  { key: 'organizacao',  label: 'Organização da loja',             desc: ['Muito desorganizada','Desorganizada','Regular','Organizada','Muito organizada'] },
  { key: 'limpeza',      label: 'Limpeza da loja',                 desc: ['Muito suja','Suja','Regular','Limpa','Muito limpa'] },
  { key: 'facilidade',   label: 'Facilidade de encontrar produtos', desc: ['Muito difícil','Difícil','Regular','Fácil','Muito fácil'] },
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

// ─── Pesquisa Digital ───────────────────────────────────────────────────────

const OPC_ENCONTROU   = ['Sim', 'Parcial', 'Não']
const OPC_NAVEGACAO   = ['Muito fácil', 'Fácil', 'Regular', 'Difícil']
const OPC_CHECKOUT    = ['Muito fácil', 'Fácil', 'Regular', 'Difícil']
const OPC_PRAZO       = ['Mais rápido que o esperado', 'Dentro do prazo', 'Atrasado']
const OPC_ATENDIMENTO = ['Excelente', 'Bom', 'Regular', 'Ruim', 'Não houve contato']

function npsClasse(n: number): { label: string; cor: string } {
  if (n === 5) return { label: 'Promotor',  cor: '#4ade80' }
  if (n === 4) return { label: 'Neutro',    cor: '#facc15' }
  return             { label: 'Detrator',  cor: '#f87171' }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const hoje  = () => new Date().toLocaleDateString('pt-BR')
const agora = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

type Notas = Record<string, number>

interface FormFisica {
  drogaria: string; bairro: string; telefone: string
  dataAtendimento: string; horaAtendimento: string
  horarioVisita: string; movimentoLoja: string
  nps: number
  notas: Notas; problema: string; observacoes: string
  ticketAlto: string; notaCusto: number
  maisde3med: string
  disponivel: string; notaDisponib: number
  atendidoFarm: string
  farmExplicou: string; farmConhecimento: number
  farmSeguro: string; farmInteresse: string
}

interface FormDigital {
  site: string
  dataAtendimento: string; horaAtendimento: string
  nps: number
  encontrou: string; navegacao: string
  checkout: string; prazo: string
  atendimento: string; influenciou: string
}

function mediaNotas(notas: Notas) {
  const v = CRITERIOS_B2.map(c => notas[c.key] || 0).filter(x => x > 0)
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0
}

function msgMedia(m: number) {
  if (m >= 4) return { texto: 'Excelente atendimento!',      cor: '#4ade80' }
  if (m >= 3) return { texto: 'Atendimento regular.',        cor: '#facc15' }
  return             { texto: 'Precisa melhorar.',           cor: '#f87171' }
}

// ─── Página principal ───────────────────────────────────────────────────────

export default function Pesquisa() {
  const [tipo, setTipo] = useState<'fisica' | 'digital' | 'farmaceutico'>('fisica')

  return (
    <>
      <style>{`
        @keyframes pulso { 0%{transform:scale(1)} 40%{transform:scale(1.35)} 100%{transform:scale(1)} }
        .estrela-ativa { animation: pulso 0.25s ease; }
      `}</style>

      <div style={s.page}>

        <div style={s.header}>
          <p style={s.eyebrow}>Pesquisa Acadêmica</p>
          <h1 style={s.title}>Termômetro de Atendimento</h1>
          <p style={s.subtitle}>Varejo Farmacêutico · Macapá – AP</p>
          <p style={s.author}>Rubiney Alves · {hoje()} · {agora()}</p>
        </div>

        {/* Toggle */}
        <div style={s.toggleWrap}>
          <div style={s.toggle}>
            <button type="button"
              style={{ ...s.toggleBtn, ...(tipo === 'fisica' ? s.toggleAtivo : {}) }}
              onClick={() => setTipo('fisica')}>
              🏪 Loja Física
            </button>
            <button type="button"
              style={{ ...s.toggleBtn, ...(tipo === 'digital' ? s.toggleAtivo : {}) }}
              onClick={() => setTipo('digital')}>
              🛒 E-commerce
            </button>
          </div>
          <button type="button"
            style={{ ...s.toggleBtnFull, ...(tipo === 'farmaceutico' ? s.toggleAtivo : {}) }}
            onClick={() => setTipo('farmaceutico')}>
            💊 Atendimento Farmacêutico
          </button>
        </div>

        {tipo === 'fisica'      && <FormFisicaComp />}
        {tipo === 'digital'     && <FormDigitalComp />}
        {tipo === 'farmaceutico'&& <FormFarmaceuticoComp />}

      </div>
    </>
  )
}

// ─── Formulário Físico ──────────────────────────────────────────────────────

function FormFisicaComp() {
  const [form, setForm] = useState<FormFisica>({
    drogaria: '', bairro: '', telefone: '', dataAtendimento: '', horaAtendimento: '',
    horarioVisita: '', movimentoLoja: '', nps: -1,
    notas: {}, problema: '', observacoes: '',
    ticketAlto: '', notaCusto: 0,
    maisde3med: '', disponivel: '', notaDisponib: 0,
    atendidoFarm: '', farmExplicou: '', farmConhecimento: 0,
    farmSeguro: '', farmInteresse: '',
  })
  const [enviado, setEnviado]     = useState(false)
  const [enviando, setEnviando]   = useState(false)
  const [erro, setErro]           = useState('')
  const [mediaFinal, setMediaFinal] = useState(0)

  const set = (k: keyof FormFisica, v: string | number) =>
    setForm(f => ({ ...f, [k]: v }))
  const setNota = (key: string, val: number) =>
    setForm(f => ({ ...f, notas: { ...f.notas, [key]: val } }))

  const preenchidos    = CRITERIOS_B2.filter(c => form.notas[c.key]).length
  const notasCompletas = preenchidos === CRITERIOS_B2.length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.nps < 0)    { setErro('Responda a pergunta de recomendação (0–10).'); return }
    if (!notasCompletas) { setErro('Avalie todos os critérios antes de enviar.'); return }
    setErro(''); setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tipo: 'fisica', data: hoje(), horaResposta: agora() }),
      })
      if (!res.ok) throw new Error()
      setMediaFinal(mediaNotas(form.notas))
      setEnviado(true)
    } catch { setErro('Erro ao enviar. Tente novamente.') }
    setEnviando(false)
  }

  if (enviado) {
    const { texto, cor } = msgMedia(mediaFinal)
    return (
      <div style={s.thanks}>
        <div style={s.thanksBadge}>✓</div>
        <h2 style={s.thanksTitle}>Avaliação registrada!</h2>
        <div style={s.scoreBox}>
          <p style={{ ...s.scoreMsg, color: cor }}>{texto}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n => (
              <span key={n} style={{ fontSize: 32, color: n <= Math.round(mediaFinal) ? '#C9A84C' : '#1e2e50' }}>★</span>
            ))}
          </div>
          <p style={s.scoreNum}>{mediaFinal.toFixed(1)} / 5.0</p>
        </div>
        <p style={s.thanksText}>Obrigado pela sua participação.</p>
        <p style={s.thanksSmall}>Varejo Farmacêutico · Macapá–AP</p>
        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>← Rubiney Alves</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={s.progressWrap}>
        <div style={s.progressBar}>
          <div style={{ ...s.progressFill, width: `${(preenchidos / CRITERIOS.length) * 100}%` }} />
        </div>
        <p style={s.progressText}>{preenchidos} de {CRITERIOS_B2.length} critérios avaliados{notasCompletas ? ' ✓' : ''}</p>
      </div>

      {/* BLOCO 0 — Identificação da Visita */}
      <Secao label="Bloco 0 · Identificação da Visita">
        <Campo label="Nome da drogaria (opcional)">
          <input style={s.input} placeholder="Nome, cor, slogan, esquina com..."
            value={form.drogaria} onChange={e => set('drogaria', e.target.value)} />
        </Campo>
        <p style={s.hint}>Ex: farmácia verde · "Saúde é tudo" · esquina da Av. FAB com Rua Cândido Mendes</p>
        <Campo label="Bairro *">
          <input style={s.input} required placeholder="Ex: Central"
            value={form.bairro} onChange={e => set('bairro', e.target.value)} />
        </Campo>
        <Campo label="Celular para contato (opcional)">
          <input style={s.input} placeholder="(96) 9 0000-0000" maxLength={16}
            value={form.telefone}
            onChange={e => {
              let v = e.target.value.replace(/\D/g,'')
              if (v.length > 0)  v = '(' + v
              if (v.length > 3)  v = v.slice(0,3) + ') ' + v.slice(3)
              if (v.length > 10) v = v.slice(0,10) + ' ' + v.slice(10)
              if (v.length > 15) v = v.slice(0,15) + '-' + v.slice(15)
              set('telefone', v)
            }} />
        </Campo>
        <div style={{ display: 'flex', gap: 12 }}>
          <Campo label="Data da visita">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="DD/MM/AAAA" maxLength={10}
              value={form.dataAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2)
                if (v.length > 5) v = v.slice(0,5) + '/' + v.slice(5)
                set('dataAtendimento', v)
              }} />
          </Campo>
          <Campo label="Horário">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="HH:MM" maxLength={5}
              value={form.horaAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + ':' + v.slice(2)
                set('horaAtendimento', v)
              }} />
          </Campo>
        </div>
        <Campo label="Período da visita">
          <RadioGroup value={form.horarioVisita} onChange={v => set('horarioVisita', v)}
            options={[
              { value: 'manha', label: '🌅 Manhã'  },
              { value: 'tarde', label: '☀️ Tarde'  },
              { value: 'noite', label: '🌙 Noite'  },
            ]} />
        </Campo>
        <Campo label="Movimento da loja">
          <RadioGroup value={form.movimentoLoja} onChange={v => set('movimentoLoja', v)}
            options={[
              { value: 'baixo', label: 'Baixo'  },
              { value: 'medio', label: 'Médio'  },
              { value: 'alto',  label: 'Alto'   },
            ]} />
        </Campo>
      </Secao>

      {/* BLOCO 1 — NPS */}
      <Secao label="Bloco 1 · Recomendação (NPS)">
        <Campo label="De 0 a 10, o quanto você recomendaria esta drogaria? *">
          <NpsButtons value={form.nps} onChange={v => set('nps', v)} />
        </Campo>
        {form.nps >= 0 && (
          <p style={{ ...s.hint, fontWeight: 600, marginTop: 4,
            color: form.nps >= 9 ? '#4ade80' : form.nps >= 7 ? '#facc15' : '#f87171' }}>
            {form.nps >= 9 ? '😊 Promotor — você adorou!' : form.nps >= 7 ? '😐 Neutro — satisfeito, mas não encantado.' : '😞 Detrator — algo precisa melhorar.'}
          </p>
        )}
      </Secao>

      {/* BLOCO 3 — Atendimento Farmacêutico */}
      <Secao label="Bloco 3 · Atendimento Farmacêutico">
        <Campo label="Você foi atendido por um farmacêutico?">
          <RadioGroup value={form.atendidoFarm} onChange={v => set('atendidoFarm', v)}
            options={[{ value: 'sim', label: 'Sim' }, { value: 'nao', label: 'Não' }]} />
        </Campo>

        {form.atendidoFarm === 'sim' && (<>
          <Campo label="O farmacêutico explicou corretamente o uso do medicamento?">
            <RadioGroup value={form.farmExplicou} onChange={v => set('farmExplicou', v)}
              options={[
                { value: 'sim',     label: 'Sim, totalmente' },
                { value: 'parcial', label: 'Parcialmente'    },
                { value: 'nao',     label: 'Não'             },
              ]} />
          </Campo>

          <Campo label="Demonstrou conhecimento técnico?">
            <EstrelasRow label="" value={form.farmConhecimento}
              onChange={v => set('farmConhecimento', v)}
              desc={['Muito ruim','Ruim','Regular','Bom','Excelente']} />
          </Campo>

          <Campo label="Você se sentiu seguro com a orientação?">
            <RadioGroup value={form.farmSeguro} onChange={v => set('farmSeguro', v)}
              options={[
                { value: 'sim',          label: 'Sim'          },
                { value: 'parcialmente', label: 'Parcialmente' },
                { value: 'nao',          label: 'Não'          },
              ]} />
          </Campo>

          <Campo label="Demonstrou interesse pela sua saúde?">
            <RadioGroup value={form.farmInteresse} onChange={v => set('farmInteresse', v)}
              options={[
                { value: 'sim',   label: 'Sim'   },
                { value: 'pouco', label: 'Pouco' },
                { value: 'nao',   label: 'Não'   },
              ]} />
          </Campo>
        </>)}

        {form.atendidoFarm === 'nao' && (
          <p style={{ ...s.hint, color: '#5a6a88', marginTop: 8 }}>
            Bloco 3 não se aplica. Continue para o próximo bloco.
          </p>
        )}
      </Secao>

      <Secao label="Perfil de Compra">
        <Campo label="Você gasta R$ 150 ou mais por mês nesta farmácia?">
          <RadioGroup value={form.ticketAlto} onChange={v => set('ticketAlto', v)}
            options={[{ value: 'sim', label: 'Sim' }, { value: 'nao', label: 'Não' }]} />
        </Campo>
        {form.ticketAlto && (
          <Campo label="Como avalia o custo-benefício?">
            <EstrelasRow label="" value={form.notaCusto} onChange={v => set('notaCusto', v)} />
          </Campo>
        )}
        <Campo label="Você compra mais de 3 medicamentos regularmente?">
          <RadioGroup value={form.maisde3med} onChange={v => set('maisde3med', v)}
            options={[{ value: 'sim', label: 'Sim' }, { value: 'nao', label: 'Não' }]} />
        </Campo>
        <Campo label="Os produtos que você procurou estavam disponíveis?">
          <RadioGroup value={form.disponivel} onChange={v => set('disponivel', v)}
            options={[
              { value: 'sim',      label: 'Sim' },
              { value: 'as_vezes', label: 'Às vezes' },
              { value: 'nao',      label: 'Não' },
            ]} />
        </Campo>
        {form.disponivel && (
          <Campo label="Como avalia a disponibilidade de estoque?">
            <EstrelasRow label="" value={form.notaDisponib} onChange={v => set('notaDisponib', v)} />
          </Campo>
        )}
      </Secao>

      {/* BLOCO 2 — Experiência de Loja */}
      <Secao label="Bloco 2 · Experiência de Loja">
        <p style={s.hint}>Toque nas estrelas · o rótulo aparece abaixo de cada avaliação</p>
        {CRITERIOS_B2.map(c => (
          <EstrelasRow key={c.key} label={c.label} desc={c.desc}
            value={form.notas[c.key] || 0} onChange={v => setNota(c.key, v)} />
        ))}
      </Secao>

      <Secao label="Principal Problema Observado">
        <select style={s.select} value={form.problema}
          onChange={e => set('problema', e.target.value)}>
          <option value="">Selecione...</option>
          {PROBLEMAS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </Secao>

      <Secao label="Observações Livres">
        <textarea style={s.textarea} rows={4}
          placeholder="Descreva o que observou durante a visita..."
          value={form.observacoes} onChange={e => set('observacoes', e.target.value)} />
      </Secao>

      {erro && <p style={s.erro}>{erro}</p>}
      <button type="submit"
        style={{ ...s.btn, opacity: enviando ? 0.7 : 1, cursor: enviando ? 'not-allowed' : 'pointer' }}
        disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar Avaliação'}
      </button>
    </form>
  )
}

// ─── Formulário Digital ─────────────────────────────────────────────────────

function FormDigitalComp() {
  const [form, setForm] = useState<FormDigital>({
    site: '', dataAtendimento: '', horaAtendimento: '',
    nps: 0, encontrou: '', navegacao: '',
    checkout: '', prazo: '', atendimento: '', influenciou: '',
  })
  const [enviado, setEnviado]   = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro]         = useState('')

  const set = (k: keyof FormDigital, v: string | number) =>
    setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nps) { setErro('Avalie o site com estrelas antes de enviar.'); return }
    setErro(''); setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tipo: 'digital', data: hoje(), horaResposta: agora() }),
      })
      if (!res.ok) throw new Error()
      setEnviado(true)
    } catch { setErro('Erro ao enviar. Tente novamente.') }
    setEnviando(false)
  }

  if (enviado) {
    const { label, cor } = npsClasse(form.nps)
    return (
      <div style={s.thanks}>
        <div style={s.thanksBadge}>✓</div>
        <h2 style={s.thanksTitle}>Avaliação registrada!</h2>
        <div style={s.scoreBox}>
          <p style={{ ...s.scoreMsg, color: cor }}>{label}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n => (
              <span key={n} style={{ fontSize: 32, color: n <= form.nps ? '#C9A84C' : '#1e2e50' }}>★</span>
            ))}
          </div>
          <p style={{ ...s.scoreNum, color: cor }}>{form.nps}.0 / 5.0</p>
        </div>
        <p style={s.thanksText}>Obrigado pela sua participação.</p>
        <p style={s.thanksSmall}>Varejo Farmacêutico Digital · Macapá–AP</p>
        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>← Rubiney Alves</a>
      </div>
    )
  }

  const { label: npsLabel, cor: npsCor } = form.nps ? npsClasse(form.nps) : { label: '', cor: '' }

  return (
    <form onSubmit={handleSubmit}>

      <Secao label="Identificação">
        <Campo label="Nome ou URL do site (opcional)">
          <input style={s.input} placeholder="Ex: drogaria.com.br"
            value={form.site} onChange={e => set('site', e.target.value)} />
        </Campo>
        <div style={{ display: 'flex', gap: 12 }}>
          <Campo label="Data da compra">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="DD/MM/AAAA" maxLength={10}
              value={form.dataAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2)
                if (v.length > 5) v = v.slice(0,5) + '/' + v.slice(5)
                set('dataAtendimento', v)
              }} />
          </Campo>
          <Campo label="Horário">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="HH:MM" maxLength={5}
              value={form.horaAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + ':' + v.slice(2)
                set('horaAtendimento', v)
              }} />
          </Campo>
        </div>
      </Secao>

      <Secao label="Recomendação">
        <Campo label="Você recomendaria este site? *">
          <EstrelasRow label="" value={form.nps} onChange={v => set('nps', v)} />
        </Campo>
        {form.nps > 0 && (
          <p style={{ ...s.hint, color: npsCor, fontWeight: 600, marginTop: 4 }}>
            {npsLabel} {form.nps === 5 ? '— Você é um promotor!' : form.nps === 4 ? '— Opinião neutra.' : '— Sua opinião é muito importante.'}
          </p>
        )}
      </Secao>

      <Secao label="Experiência de Compra">
        <Campo label="Você encontrou o produto que procurava?">
          <RadioGroup value={form.encontrou} onChange={v => set('encontrou', v)}
            options={OPC_ENCONTROU.map(o => ({ value: o, label: o }))} />
        </Campo>
        <Campo label="Facilidade de navegação no site:">
          <RadioGroup value={form.navegacao} onChange={v => set('navegacao', v)}
            options={OPC_NAVEGACAO.map(o => ({ value: o, label: o }))} />
        </Campo>
        <Campo label="Processo de compra (checkout):">
          <RadioGroup value={form.checkout} onChange={v => set('checkout', v)}
            options={OPC_CHECKOUT.map(o => ({ value: o, label: o }))} />
        </Campo>
      </Secao>

      <Secao label="Entrega e Atendimento">
        <Campo label="O prazo de entrega foi:">
          <RadioGroup value={form.prazo} onChange={v => set('prazo', v)}
            options={OPC_PRAZO.map(o => ({ value: o, label: o }))} />
        </Campo>
        <Campo label="Qualidade do atendimento (se houve contato):">
          <RadioGroup value={form.atendimento} onChange={v => set('atendimento', v)}
            options={OPC_ATENDIMENTO.map(o => ({ value: o, label: o }))} />
        </Campo>
      </Secao>

      <Secao label="Sua Opinião">
        <Campo label="O que mais influenciou sua experiência?">
          <textarea style={s.textarea} rows={4}
            placeholder="Conte o que fez diferença — positivo ou negativo..."
            value={form.influenciou} onChange={e => set('influenciou', e.target.value)} />
        </Campo>
      </Secao>

      {erro && <p style={s.erro}>{erro}</p>}
      <button type="submit"
        style={{ ...s.btn, opacity: enviando ? 0.7 : 1, cursor: enviando ? 'not-allowed' : 'pointer' }}
        disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar Avaliação'}
      </button>
    </form>
  )
}

// ─── Formulário Farmacêutico ────────────────────────────────────────────────

interface FormFarmaceutico {
  drogaria: string
  dataAtendimento: string; horaAtendimento: string
  identificacao: number
  clareza: number
  interacoes: string
  privacidade: string
  conhecimento: number
  seguranca: number
  observacoes: string
}

function FormFarmaceuticoComp() {
  const [form, setForm] = useState<FormFarmaceutico>({
    drogaria: '', dataAtendimento: '', horaAtendimento: '',
    identificacao: 0, clareza: 0,
    interacoes: '', privacidade: '',
    conhecimento: 0, seguranca: 0,
    observacoes: '',
  })
  const [enviado, setEnviado]   = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro]         = useState('')

  const set = (k: keyof FormFarmaceutico, v: string | number) =>
    setForm(f => ({ ...f, [k]: v }))

  const notasEstrela = [form.identificacao, form.clareza, form.conhecimento, form.seguranca]
  const notasPreench = notasEstrela.filter(n => n > 0).length
  const media = notasPreench === 4
    ? (notasEstrela.reduce((a, b) => a + b, 0) / 4)
    : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (notasPreench < 4) { setErro('Avalie todos os critérios com estrelas antes de enviar.'); return }
    setErro(''); setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tipo: 'farmaceutico', data: hoje(), horaResposta: agora() }),
      })
      if (!res.ok) throw new Error()
      setEnviado(true)
    } catch { setErro('Erro ao enviar. Tente novamente.') }
    setEnviando(false)
  }

  if (enviado) {
    const { texto, cor } = msgMedia(media)
    return (
      <div style={s.thanks}>
        <div style={s.thanksBadge}>✓</div>
        <h2 style={s.thanksTitle}>Avaliação registrada!</h2>
        <div style={s.scoreBox}>
          <p style={{ ...s.scoreMsg, color: cor }}>{texto}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n => (
              <span key={n} style={{ fontSize: 32, color: n <= Math.round(media) ? '#C9A84C' : '#1e2e50' }}>★</span>
            ))}
          </div>
          <p style={s.scoreNum}>{media.toFixed(1)} / 5.0</p>
        </div>
        <p style={s.thanksText}>Obrigado pela sua participação.</p>
        <p style={s.thanksSmall}>Atendimento Farmacêutico · Macapá–AP</p>
        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>← Rubiney Alves</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>

      <Secao label="Identificação">
        <Campo label="Farmácia (opcional)">
          <input style={s.input} placeholder="Nome, cor, slogan, esquina com..."
            value={form.drogaria} onChange={e => set('drogaria', e.target.value)} />
        </Campo>
        <div style={{ display: 'flex', gap: 12 }}>
          <Campo label="Data do atendimento">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="DD/MM/AAAA" maxLength={10}
              value={form.dataAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2)
                if (v.length > 5) v = v.slice(0,5) + '/' + v.slice(5)
                set('dataAtendimento', v)
              }} />
          </Campo>
          <Campo label="Horário">
            <input style={{ ...s.input, textAlign: 'center' }} placeholder="HH:MM" maxLength={5}
              value={form.horaAtendimento}
              onChange={e => {
                let v = e.target.value.replace(/\D/g, '')
                if (v.length > 2) v = v.slice(0,2) + ':' + v.slice(2)
                set('horaAtendimento', v)
              }} />
          </Campo>
        </div>
      </Secao>

      <Secao label="Avaliação do Atendimento Farmacêutico">
        <p style={s.hint}>1 = péssimo · 5 = excelente</p>
        <EstrelasRow label="Identificação e disponibilidade do farmacêutico"
          value={form.identificacao} onChange={v => set('identificacao', v)} />
        <EstrelasRow label="Clareza das orientações sobre o medicamento"
          value={form.clareza} onChange={v => set('clareza', v)} />
        <EstrelasRow label="Conhecimento técnico demonstrado"
          value={form.conhecimento} onChange={v => set('conhecimento', v)} />
        <EstrelasRow label="Segurança transmitida durante o atendimento"
          value={form.seguranca} onChange={v => set('seguranca', v)} />
      </Secao>

      <Secao label="Conduta Técnica">
        <Campo label="Foram verificadas possíveis interações medicamentosas?">
          <RadioGroup value={form.interacoes} onChange={v => set('interacoes', v)}
            options={[
              { value: 'sim',        label: 'Sim' },
              { value: 'nao',        label: 'Não' },
              { value: 'nao_aplica', label: 'Não se aplica' },
            ]} />
        </Campo>
        <Campo label="Sua privacidade foi respeitada durante o atendimento?">
          <RadioGroup value={form.privacidade} onChange={v => set('privacidade', v)}
            options={[
              { value: 'sim',          label: 'Sim' },
              { value: 'parcialmente', label: 'Parcialmente' },
              { value: 'nao',          label: 'Não' },
            ]} />
        </Campo>
      </Secao>

      <Secao label="Observações">
        <textarea style={s.textarea} rows={4}
          placeholder="Descreva sua experiência com o atendimento farmacêutico..."
          value={form.observacoes} onChange={e => set('observacoes', e.target.value)} />
      </Secao>

      {erro && <p style={s.erro}>{erro}</p>}
      <button type="submit"
        style={{ ...s.btn, opacity: enviando ? 0.7 : 1, cursor: enviando ? 'not-allowed' : 'pointer' }}
        disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar Avaliação'}
      </button>
    </form>
  )
}

// ─── Componentes compartilhados ─────────────────────────────────────────────

function Secao({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={s.secao}><p style={s.secaoLabel}>{label}</p>{children}</div>
}

function Campo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={s.campo}>
      {label && <label style={s.campoLabel}>{label}</label>}
      {children}
    </div>
  )
}

function RadioGroup({ value, onChange, options }: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div style={s.radioGroup}>
      {options.map(o => (
        <button key={o.value} type="button" onClick={() => onChange(o.value)}
          style={{
            ...s.radioBtn,
            background: value === o.value ? '#C9A84C' : '#0a1428',
            color:      value === o.value ? '#0D1B3E' : '#8a9ab8',
            border:     value === o.value ? '1px solid #C9A84C' : '1px solid #1e2e50',
            fontWeight: value === o.value ? 700 : 400,
          }}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

function NpsButtons({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const cor = (n: number) => n >= 9 ? '#4ade80' : n >= 7 ? '#facc15' : '#f87171'
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
      {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
        <button key={n} type="button" onClick={() => onChange(n)}
          style={{
            width: 42, height: 42, borderRadius: 8, border: 'none',
            fontSize: 15, fontWeight: 700, cursor: 'pointer',
            background: value === n ? cor(n) : '#0a1428',
            color:      value === n ? '#0D1B3E' : '#5a6a88',
            outline:    value === n ? `2px solid ${cor(n)}` : '1px solid #1e2e50',
            transition: 'all 0.15s',
          }}>
          {n}
        </button>
      ))}
    </div>
  )
}

function EstrelasRow({ label, value, onChange, desc }: {
  label: string; value: number; onChange: (v: number) => void; desc?: string[]
}) {
  const [hover, setHover]   = useState(0)
  const [pulsou, setPulsou] = useState(0)
  const click = (n: number) => { onChange(n); setPulsou(n); setTimeout(() => setPulsou(0), 260) }
  const ativo = hover || value
  return (
    <div style={{ borderBottom: '1px solid #0e1c36', paddingBottom: 12, marginBottom: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
        {label && <span style={s.estrelasLabel}>{label}</span>}
        <div style={s.estrelas}>
          {[1,2,3,4,5].map(n => (
            <span key={n} className={pulsou === n ? 'estrela-ativa' : ''}
              onClick={() => click(n)}
              onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
              style={{ ...s.estrela, color: n <= ativo ? '#C9A84C' : '#1e2e50' }}>
              ★
            </span>
          ))}
        </div>
      </div>
      {desc && ativo > 0 && (
        <p style={{ margin: '4px 0 0', fontSize: 11, color: '#C9A84C', textAlign: 'right', fontStyle: 'italic' }}>
          {desc[ativo - 1]}
        </p>
      )}
    </div>
  )
}

// ─── Estilos ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  page:     { maxWidth: 500, margin: '0 auto', padding: '28px 18px 56px', fontFamily: "'Segoe UI', sans-serif", background: '#0D1B3E', minHeight: '100vh', color: '#fff' },
  header:   { textAlign: 'center', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #1a2a4a' },
  eyebrow:  { fontSize: 11, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 2, margin: '0 0 8px' },
  title:    { fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 6px' },
  subtitle: { fontSize: 14, color: '#8a9ab8', margin: '0 0 4px' },
  author:   { fontSize: 12, color: '#4a5a78' },
  toggleWrap:   { marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid #1e2e50' },
  toggle:       { display: 'flex' },
  toggleBtn:    { flex: 1, padding: '12px 8px', background: '#0a1428', color: '#8a9ab8', border: 'none', borderBottom: '1px solid #1e2e50', fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' },
  toggleBtnFull:{ width: '100%', padding: '12px 8px', background: '#0a1428', color: '#8a9ab8', border: 'none', fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' },
  toggleAtivo:  { background: '#C9A84C', color: '#0D1B3E', fontWeight: 700 },
  progressWrap: { marginBottom: 24 },
  progressBar:  { height: 6, background: '#0e1c36', borderRadius: 99, overflow: 'hidden', marginBottom: 6 },
  progressFill: { height: '100%', background: '#C9A84C', borderRadius: 99, transition: 'width 0.3s ease' },
  progressText: { fontSize: 12, color: '#8a9ab8', textAlign: 'right', margin: 0 },
  secao:      { marginBottom: 28 },
  secaoLabel: { fontSize: 11, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 14, paddingBottom: 6, borderBottom: '1px solid #1a2a4a' },
  hint:       { fontSize: 12, color: '#5a6a88', marginTop: -4, marginBottom: 12 },
  campo:      { marginBottom: 16 },
  campoLabel: { display: 'block', fontSize: 13, color: '#8a9ab8', marginBottom: 8 },
  input:      { width: '100%', padding: '11px 14px', background: '#0a1428', border: '1px solid #1e2e50', borderRadius: 8, color: '#fff', fontSize: 15, boxSizing: 'border-box' },
  select:     { width: '100%', padding: '11px 14px', background: '#0a1428', border: '1px solid #1e2e50', borderRadius: 8, color: '#fff', fontSize: 14, boxSizing: 'border-box' },
  textarea:   { width: '100%', padding: '11px 14px', background: '#0a1428', border: '1px solid #1e2e50', borderRadius: 8, color: '#fff', fontSize: 14, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' },
  radioGroup: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  radioBtn:   { padding: '9px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer', transition: 'all 0.15s', flex: 1, minWidth: 'fit-content' },
  estrelasRow:  { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #0e1c36' },
  estrelasLabel:{ fontSize: 14, color: '#c0cce4', flex: 1, paddingRight: 8 },
  estrelas:   { display: 'flex', gap: 2 },
  estrela:    { fontSize: 28, cursor: 'pointer', transition: 'color 0.15s', userSelect: 'none', display: 'inline-block' },
  btn:        { width: '100%', padding: '15px', background: '#C9A84C', color: '#0D1B3E', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 8, marginTop: 8 },
  erro:       { color: '#ff6b6b', fontSize: 13, textAlign: 'center', marginBottom: 8 },
  thanks:     { maxWidth: 400, margin: '0 auto', textAlign: 'center', fontFamily: "'Segoe UI', sans-serif", padding: '60px 24px 40px', background: '#0D1B3E', minHeight: '100vh' },
  thanksBadge:{ width: 64, height: 64, borderRadius: '50%', background: '#C9A84C', color: '#0D1B3E', fontSize: 28, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' },
  thanksTitle:{ color: '#C9A84C', fontSize: 22, margin: '0 0 20px' },
  scoreBox:   { background: '#0a1428', border: '1px solid #1e2e50', borderRadius: 12, padding: '20px 24px', marginBottom: 24 },
  scoreMsg:   { fontSize: 18, fontWeight: 700, margin: '0 0 10px' },
  scorStars:  { display: 'flex', justifyContent: 'center', gap: 4, margin: '0 0 8px' },
  scoreNum:   { fontSize: 28, fontWeight: 700, color: '#C9A84C', margin: 0 },
  thanksText: { color: '#8a9ab8', fontSize: 14, margin: '0 0 6px' },
  thanksSmall:{ color: '#4a5a78', fontSize: 12, margin: '0 0 32px' },
  backLink:   { display: 'inline-block', marginTop: 8, color: '#C9A84C', fontSize: 13, textDecoration: 'none', borderBottom: '1px solid #C9A84C', paddingBottom: 2 },
}
