'use client'

import { useState } from 'react'

// ─── Dados ──────────────────────────────────────────────────────────────────

const CRITERIOS_B2 = [
  { key: 'tempo',        label: 'Tempo de atendimento',             desc: ['Muito demorado','Demorado','Regular','Rápido','Muito rápido'] },
  { key: 'cordialidade', label: 'Cordialidade no atendimento',      desc: ['Muito ruim','Ruim','Regular','Boa','Excelente'] },
  { key: 'organizacao',  label: 'Organização da loja',              desc: ['Muito desorganizada','Desorganizada','Regular','Organizada','Muito organizada'] },
  { key: 'limpeza',      label: 'Limpeza da loja',                  desc: ['Muito suja','Suja','Regular','Limpa','Muito limpa'] },
  { key: 'facilidade',   label: 'Facilidade de encontrar produtos', desc: ['Muito difícil','Difícil','Regular','Fácil','Muito fácil'] },
]

const PROBLEMAS_B5 = [
  'Demora no atendimento',
  'Falta de conhecimento técnico',
  'Atendimento frio / sem empatia',
  'Loja desorganizada',
  'Loja suja',
  'Dificuldade de encontrar produtos',
  'Falta de produtos',
  'Problema no serviço farmacêutico',
  'Outro',
]

const OPC_ENCONTROU   = ['Sim', 'Parcial', 'Não']
const OPC_NAVEGACAO   = ['Muito fácil', 'Fácil', 'Regular', 'Difícil']
const OPC_PRAZO       = ['Mais rápido que o esperado', 'Dentro do prazo', 'Atrasado']
const OPC_ATENDIMENTO = ['Excelente', 'Bom', 'Regular', 'Ruim', 'Não houve contato']

// ─── Helpers ────────────────────────────────────────────────────────────────

const hoje  = () => new Date().toLocaleDateString('pt-BR')
const agora = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

type Notas = Record<string, number>

function mediaNotas(notas: Notas) {
  const v = CRITERIOS_B2.map(c => notas[c.key] || 0).filter(x => x > 0)
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0
}
function msgMedia(m: number) {
  if (m >= 4) return { texto: 'Excelente atendimento!', cor: '#4ade80' }
  if (m >= 3) return { texto: 'Atendimento regular.',   cor: '#facc15' }
  return             { texto: 'Precisa melhorar.',      cor: '#f87171' }
}
function npsClasse(n: number) {
  if (n >= 9) return { label: 'Promotor',  cor: '#4ade80' }
  if (n >= 7) return { label: 'Neutro',    cor: '#facc15' }
  return             { label: 'Detrator',  cor: '#f87171' }
}

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface FormFisica {
  drogaria: string; bairro: string; telefone: string
  dataAtendimento: string; horaAtendimento: string
  horarioVisita: string; movimentoLoja: string
  nps: number; notas: Notas
  // Bloco 3
  atendidoFarm: string; farmExplicou: string
  farmConhecimento: number; farmSeguro: string; farmInteresse: string
  // Bloco 4
  utilizouServico: string; tipoServico: string
  servLocal: string; servExplicou: string
  servMateriais: string; servSeguro: string; servOrientacao: string
  // Bloco 5
  problema: string; melhorias: string; positivo: string
}

interface FormDigital {
  site: string; dataAtendimento: string; horaAtendimento: string
  nps: number; encontrou: string; navegacao: string
  checkout: string; prazo: string; atendimento: string; influenciou: string
}

// ─── Página principal ────────────────────────────────────────────────────────

export default function Pesquisa() {
  const [tipo, setTipo] = useState<'fisica' | 'digital'>('fisica')

  return (
    <>
      <style>{`
        @keyframes pulso{0%{transform:scale(1)}40%{transform:scale(1.35)}100%{transform:scale(1)}}
        .ep{animation:pulso 0.25s ease}
      `}</style>
      <div style={s.page}>
        <div style={s.header}>
          <p style={s.eyebrow}>Pesquisa Acadêmica</p>
          <h1 style={s.title}>Termômetro de Atendimento</h1>
          <p style={s.subtitle}>Varejo Farmacêutico · Macapá – AP</p>
          <p style={s.author}>Rubiney Alves · {hoje()} · {agora()}</p>
        </div>

        <div style={s.toggleWrap}>
          <div style={s.toggleRow}>
            <Tbtn label="🏪 Loja Física"  ativo={tipo==='fisica'}  onClick={()=>setTipo('fisica')} />
            <Tbtn label="🛒 E-commerce"   ativo={tipo==='digital'} onClick={()=>setTipo('digital')} />
          </div>
        </div>

        {tipo === 'fisica'  && <FormFisicaComp />}
        {tipo === 'digital' && <FormDigitalComp />}
      </div>
    </>
  )
}

// ─── Formulário Loja Física ──────────────────────────────────────────────────

function FormFisicaComp() {
  const [form, setForm] = useState<FormFisica>({
    drogaria:'', bairro:'', telefone:'',
    dataAtendimento:'', horaAtendimento:'',
    horarioVisita:'', movimentoLoja:'', nps:-1, notas:{},
    atendidoFarm:'', farmExplicou:'', farmConhecimento:0, farmSeguro:'', farmInteresse:'',
    utilizouServico:'', tipoServico:'',
    servLocal:'', servExplicou:'', servMateriais:'', servSeguro:'', servOrientacao:'',
    problema:'', melhorias:'', positivo:'',
  })
  const [enviado, setEnviado]     = useState(false)
  const [enviando, setEnviando]   = useState(false)
  const [erro, setErro]           = useState('')
  const [mediaFinal, setMediaFinal] = useState(0)

  const set = (k: keyof FormFisica, v: string | number) => setForm(f=>({...f,[k]:v}))
  const setNota = (k: string, v: number) => setForm(f=>({...f,notas:{...f.notas,[k]:v}}))

  const preenchidos    = CRITERIOS_B2.filter(c=>form.notas[c.key]).length
  const notasCompletas = preenchidos === CRITERIOS_B2.length

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.nps < 0)    { setErro('Responda o NPS (0–10) antes de enviar.'); return }
    if (!notasCompletas) { setErro('Avalie todos os critérios de Experiência de Loja.'); return }
    setErro(''); setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({...form, tipo:'fisica', data:hoje(), horaResposta:agora()}),
      })
      if (!res.ok) throw new Error()
      setMediaFinal(mediaNotas(form.notas)); setEnviado(true)
    } catch { setErro('Erro ao enviar. Tente novamente.') }
    setEnviando(false)
  }

  if (enviado) {
    const { texto, cor } = msgMedia(mediaFinal)
    const { label: npsLbl, cor: npsCor } = npsClasse(form.nps)
    return (
      <div style={s.thanks}>
        <div style={s.thanksBadge}>✓</div>
        <h2 style={s.thanksTitle}>Avaliação registrada!</h2>
        <div style={s.scoreBox}>
          <p style={{fontSize:12,color:'#8a9ab8',margin:'0 0 4px'}}>NPS</p>
          <p style={{fontSize:22,fontWeight:700,color:npsCor,margin:'0 0 12px'}}>{npsLbl} · {form.nps}/10</p>
          <p style={{fontSize:12,color:'#8a9ab8',margin:'0 0 4px'}}>Média de atendimento</p>
          <p style={{...s.scoreMsg,color:cor,margin:'0 0 8px'}}>{texto}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n=>(
              <span key={n} style={{fontSize:28,color:n<=Math.round(mediaFinal)?'#C9A84C':'#1e2e50'}}>★</span>
            ))}
          </div>
          <p style={s.scoreNum}>{mediaFinal.toFixed(1)} / 5.0</p>
        </div>
        <p style={s.thanksText}>Obrigado pela participação.</p>
        <p style={s.thanksSmall}>Varejo Farmacêutico · Macapá–AP</p>
        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>← Rubiney Alves</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={s.progressWrap}>
        <div style={s.progressBar}>
          <div style={{...s.progressFill, width:`${(preenchidos/CRITERIOS_B2.length)*100}%`}} />
        </div>
        <p style={s.progressText}>{preenchidos} de {CRITERIOS_B2.length} critérios avaliados{notasCompletas?' ✓':''}</p>
      </div>

      {/* BLOCO 0 */}
      <Secao label="Identificação da Visita">
        <Campo label="Nome da drogaria (opcional)">
          <input style={s.input} placeholder="Nome, cor, slogan, esquina com..."
            value={form.drogaria} onChange={e=>set('drogaria',e.target.value)} />
        </Campo>
        <p style={s.hint}>Ex: farmácia verde · "Saúde é tudo" · esquina da Av. FAB com Rua Cândido Mendes</p>
        <Campo label="Bairro *">
          <input style={s.input} required placeholder="Ex: Central"
            value={form.bairro} onChange={e=>set('bairro',e.target.value)} />
        </Campo>
        <Campo label="Celular para contato (opcional)">
          <input style={s.input} placeholder="(96) 9 0000-0000" maxLength={16}
            value={form.telefone}
            onChange={e=>{
              let v=e.target.value.replace(/\D/g,'')
              if(v.length>0)  v='('+v
              if(v.length>3)  v=v.slice(0,3)+') '+v.slice(3)
              if(v.length>10) v=v.slice(0,10)+' '+v.slice(10)
              if(v.length>14) v=v.slice(0,14)+'-'+v.slice(14)
              set('telefone',v)
            }} />
        </Campo>
        <div style={{display:'flex',gap:12}}>
          <Campo label="Data da visita">
            <input style={{...s.input,textAlign:'center'}} placeholder="DD/MM/AAAA" maxLength={10}
              value={form.dataAtendimento}
              onChange={e=>{
                let v=e.target.value.replace(/\D/g,'')
                if(v.length>2) v=v.slice(0,2)+'/'+v.slice(2)
                if(v.length>5) v=v.slice(0,5)+'/'+v.slice(5)
                set('dataAtendimento',v)
              }} />
          </Campo>
          <Campo label="Horário">
            <input style={{...s.input,textAlign:'center'}} placeholder="HH:MM" maxLength={5}
              value={form.horaAtendimento}
              onChange={e=>{
                let v=e.target.value.replace(/\D/g,'')
                if(v.length>2) v=v.slice(0,2)+':'+v.slice(2)
                set('horaAtendimento',v)
              }} />
          </Campo>
        </div>
        <Campo label="Período da visita">
          <Rbtn value={form.horarioVisita} onChange={v=>set('horarioVisita',v)}
            opts={[{v:'manha',l:'🌅 Manhã'},{v:'tarde',l:'☀️ Tarde'},{v:'noite',l:'🌙 Noite'}]} />
        </Campo>
        <Campo label="Movimento da loja">
          <Rbtn value={form.movimentoLoja} onChange={v=>set('movimentoLoja',v)}
            opts={[{v:'baixo',l:'Baixo'},{v:'medio',l:'Médio'},{v:'alto',l:'Alto'}]} />
        </Campo>
      </Secao>

      {/* BLOCO 1 */}
      <Secao label="Recomendação (NPS)">
        <Campo label="De 0 a 10, o quanto você recomendaria esta drogaria? *">
          <NpsBtns value={form.nps} onChange={v=>set('nps',v)} />
        </Campo>
        {form.nps>=0 && (
          <p style={{...s.hint,fontWeight:600,marginTop:4,color:npsClasse(form.nps).cor}}>
            {form.nps>=9?'😊 Promotor — você adorou!':form.nps>=7?'😐 Neutro — satisfeito, mas não encantado.':'😞 Detrator — algo precisa melhorar.'}
          </p>
        )}
      </Secao>

      {/* BLOCO 2 */}
      <Secao label="Experiência de Loja">
        <p style={s.hint}>Toque nas estrelas · o rótulo aparece abaixo</p>
        {CRITERIOS_B2.map(c=>(
          <Estrelas key={c.key} label={c.label} desc={c.desc}
            value={form.notas[c.key]||0} onChange={v=>setNota(c.key,v)} />
        ))}
      </Secao>

      {/* BLOCO 3 */}
      <Secao label="Atendimento Farmacêutico">
        <Campo label="Você foi atendido por um farmacêutico?">
          <Rbtn value={form.atendidoFarm} onChange={v=>set('atendidoFarm',v)}
            opts={[{v:'sim',l:'Sim'},{v:'nao',l:'Não'}]} />
        </Campo>
        {form.atendidoFarm==='sim' && (
          <div>
            <Campo label="Explicou corretamente o uso do medicamento?">
              <Rbtn value={form.farmExplicou} onChange={v=>set('farmExplicou',v)}
                opts={[{v:'sim',l:'Sim, totalmente'},{v:'parcial',l:'Parcialmente'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="Demonstrou conhecimento técnico?">
              <Estrelas label="" value={form.farmConhecimento} onChange={v=>set('farmConhecimento',v)}
                desc={['Muito ruim','Ruim','Regular','Bom','Excelente']} />
            </Campo>
            <Campo label="Sentiu-se seguro com a orientação?">
              <Rbtn value={form.farmSeguro} onChange={v=>set('farmSeguro',v)}
                opts={[{v:'sim',l:'Sim'},{v:'parcialmente',l:'Parcialmente'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="Demonstrou interesse pela sua saúde?">
              <Rbtn value={form.farmInteresse} onChange={v=>set('farmInteresse',v)}
                opts={[{v:'sim',l:'Sim'},{v:'pouco',l:'Pouco'},{v:'nao',l:'Não'}]} />
            </Campo>
          </div>
        )}
        {form.atendidoFarm==='nao' && (
          <p style={{...s.hint,color:'#5a6a88',marginTop:8}}>Não se aplica. Continue abaixo.</p>
        )}
      </Secao>

      {/* BLOCO 4 */}
      <Secao label="Serviços Farmacêuticos">
        <Campo label="Utilizou algum serviço (injeção, PA, glicemia)?">
          <Rbtn value={form.utilizouServico} onChange={v=>set('utilizouServico',v)}
            opts={[{v:'sim',l:'Sim'},{v:'nao',l:'Não'}]} />
        </Campo>
        {form.utilizouServico==='sim' && (
          <div>
            <Campo label="Tipo de serviço:">
              <Rbtn value={form.tipoServico} onChange={v=>set('tipoServico',v)}
                opts={[{v:'injetavel',l:'Injetável'},{v:'pa',l:'Pressão arterial'},{v:'glicemia',l:'Glicemia'},{v:'outro',l:'Outro'}]} />
            </Campo>
            <Campo label="Procedimento realizado em local adequado?">
              <Rbtn value={form.servLocal} onChange={v=>set('servLocal',v)}
                opts={[{v:'sim',l:'Sim'},{v:'parcial',l:'Parcial'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="O profissional explicou o procedimento?">
              <Rbtn value={form.servExplicou} onChange={v=>set('servExplicou',v)}
                opts={[{v:'sim',l:'Sim, totalmente'},{v:'parcial',l:'Parcial'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="Uso adequado de materiais (luvas, assepsia)?">
              <Rbtn value={form.servMateriais} onChange={v=>set('servMateriais',v)}
                opts={[{v:'sim',l:'Sim'},{v:'parcial',l:'Parcial'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="Sentiu-se seguro durante o procedimento?">
              <Rbtn value={form.servSeguro} onChange={v=>set('servSeguro',v)}
                opts={[{v:'sim',l:'Sim'},{v:'mais_ou_menos',l:'Mais ou menos'},{v:'nao',l:'Não'}]} />
            </Campo>
            <Campo label="Recebeu orientação após o procedimento?">
              <Rbtn value={form.servOrientacao} onChange={v=>set('servOrientacao',v)}
                opts={[{v:'sim',l:'Sim'},{v:'parcial',l:'Parcial'},{v:'nao',l:'Não'}]} />
            </Campo>
          </div>
        )}
        {form.utilizouServico==='nao' && (
          <p style={{...s.hint,color:'#5a6a88',marginTop:8}}>Não se aplica. Continue abaixo.</p>
        )}
      </Secao>

      {/* BLOCO 5 */}
      <Secao label="Diagnóstico Final">
        <Campo label="Principal problema observado:">
          <select style={s.select} value={form.problema} onChange={e=>set('problema',e.target.value)}>
            <option value="">Selecione...</option>
            {PROBLEMAS_B5.map(p=><option key={p} value={p}>{p}</option>)}
          </select>
        </Campo>
        <Campo label="O que poderia melhorar?">
          <textarea style={s.textarea} rows={3} placeholder="Descreva sugestões de melhoria..."
            value={form.melhorias} onChange={e=>set('melhorias',e.target.value)} />
        </Campo>
        <Campo label="Deseja destacar algo positivo?">
          <textarea style={s.textarea} rows={3} placeholder="Conte o que foi positivo na sua experiência..."
            value={form.positivo} onChange={e=>set('positivo',e.target.value)} />
        </Campo>
      </Secao>

      {erro && <p style={s.erro}>{erro}</p>}
      <button type="submit"
        style={{...s.btn, opacity:enviando?0.7:1, cursor:enviando?'not-allowed':'pointer'}}
        disabled={enviando}>
        {enviando?'Enviando...':'Enviar Avaliação'}
      </button>
    </form>
  )
}

// ─── Formulário E-commerce ───────────────────────────────────────────────────

function FormDigitalComp() {
  const [form, setForm] = useState<FormDigital>({
    site:'', dataAtendimento:'', horaAtendimento:'',
    nps:0, encontrou:'', navegacao:'', checkout:'', prazo:'', atendimento:'', influenciou:'',
  })
  const [enviado, setEnviado]   = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro]         = useState('')

  const set = (k: keyof FormDigital, v: string | number) => setForm(f=>({...f,[k]:v}))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nps) { setErro('Avalie o site com estrelas antes de enviar.'); return }
    setErro(''); setEnviando(true)
    try {
      const res = await fetch('/api/pesquisa', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({...form, tipo:'digital', data:hoje(), horaResposta:agora()}),
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
          <p style={{...s.scoreMsg,color:cor}}>{label}</p>
          <div style={s.scorStars}>
            {[1,2,3,4,5].map(n=>(
              <span key={n} style={{fontSize:32,color:n<=form.nps?'#C9A84C':'#1e2e50'}}>★</span>
            ))}
          </div>
          <p style={{...s.scoreNum,color:cor}}>{form.nps}.0 / 5.0</p>
        </div>
        <p style={s.thanksText}>Obrigado pela participação.</p>
        <p style={s.thanksSmall}>E-commerce Farmacêutico · Macapá–AP</p>
        <a href="https://rubiney-alves.vercel.app" style={s.backLink}>← Rubiney Alves</a>
      </div>
    )
  }

  const {cor: npsCor} = form.nps ? npsClasse(form.nps) : {cor:''}

  return (
    <form onSubmit={handleSubmit}>
      <Secao label="Identificação">
        <Campo label="Nome ou URL do site (opcional)">
          <input style={s.input} placeholder="Ex: drogaria.com.br"
            value={form.site} onChange={e=>set('site',e.target.value)} />
        </Campo>
        <div style={{display:'flex',gap:12}}>
          <Campo label="Data da compra">
            <input style={{...s.input,textAlign:'center'}} placeholder="DD/MM/AAAA" maxLength={10}
              value={form.dataAtendimento}
              onChange={e=>{
                let v=e.target.value.replace(/\D/g,'')
                if(v.length>2) v=v.slice(0,2)+'/'+v.slice(2)
                if(v.length>5) v=v.slice(0,5)+'/'+v.slice(5)
                set('dataAtendimento',v)
              }} />
          </Campo>
          <Campo label="Horário">
            <input style={{...s.input,textAlign:'center'}} placeholder="HH:MM" maxLength={5}
              value={form.horaAtendimento}
              onChange={e=>{
                let v=e.target.value.replace(/\D/g,'')
                if(v.length>2) v=v.slice(0,2)+':'+v.slice(2)
                set('horaAtendimento',v)
              }} />
          </Campo>
        </div>
      </Secao>

      <Secao label="Recomendação (NPS)">
        <Campo label="Você recomendaria este site? *">
          <Estrelas label="" value={form.nps} onChange={v=>set('nps',v)} />
        </Campo>
        {form.nps>0 && (
          <p style={{...s.hint,fontWeight:600,marginTop:4,color:npsCor}}>
            {npsClasse(form.nps).label}{form.nps===5?' — Você é um promotor!':form.nps===4?' — Opinião neutra.':" — Sua opinião é muito importante."}
          </p>
        )}
      </Secao>

      <Secao label="Experiência de Compra">
        <Campo label="Você encontrou o produto que procurava?">
          <Rbtn value={form.encontrou} onChange={v=>set('encontrou',v)}
            opts={OPC_ENCONTROU.map(o=>({v:o,l:o}))} />
        </Campo>
        <Campo label="Facilidade de navegação no site:">
          <Rbtn value={form.navegacao} onChange={v=>set('navegacao',v)}
            opts={OPC_NAVEGACAO.map(o=>({v:o,l:o}))} />
        </Campo>
        <Campo label="Processo de compra (checkout):">
          <Rbtn value={form.checkout} onChange={v=>set('checkout',v)}
            opts={OPC_NAVEGACAO.map(o=>({v:o,l:o}))} />
        </Campo>
      </Secao>

      <Secao label="Entrega e Atendimento">
        <Campo label="O prazo de entrega foi:">
          <Rbtn value={form.prazo} onChange={v=>set('prazo',v)}
            opts={OPC_PRAZO.map(o=>({v:o,l:o}))} />
        </Campo>
        <Campo label="Qualidade do atendimento (se houve contato):">
          <Rbtn value={form.atendimento} onChange={v=>set('atendimento',v)}
            opts={OPC_ATENDIMENTO.map(o=>({v:o,l:o}))} />
        </Campo>
      </Secao>

      <Secao label="Sua Opinião">
        <Campo label="O que mais influenciou sua experiência?">
          <textarea style={s.textarea} rows={4}
            placeholder="Conte o que fez diferença — positivo ou negativo..."
            value={form.influenciou} onChange={e=>set('influenciou',e.target.value)} />
        </Campo>
      </Secao>

      {erro && <p style={s.erro}>{erro}</p>}
      <button type="submit"
        style={{...s.btn,opacity:enviando?0.7:1,cursor:enviando?'not-allowed':'pointer'}}
        disabled={enviando}>
        {enviando?'Enviando...':'Enviar Avaliação'}
      </button>
    </form>
  )
}

// ─── Componentes ─────────────────────────────────────────────────────────────

function Tbtn({label,ativo,onClick,full}:{label:string;ativo:boolean;onClick:()=>void;full?:boolean}) {
  return (
    <button type="button" onClick={onClick}
      style={{
        flex: full ? undefined : 1,
        width: full ? '100%' : undefined,
        padding:'12px 8px', border:'none', fontSize:14, cursor:'pointer',
        background: ativo ? '#C9A84C' : '#0a1428',
        color:      ativo ? '#0D1B3E' : '#8a9ab8',
        fontWeight: ativo ? 700 : 400,
        borderBottom: full ? 'none' : '1px solid #1e2e50',
        transition:'all 0.2s',
      }}>
      {label}
    </button>
  )
}

function Secao({label,children}:{label:string;children:React.ReactNode}) {
  return <div style={s.secao}><p style={s.secaoLabel}>{label}</p>{children}</div>
}

function Campo({label,children}:{label:string;children:React.ReactNode}) {
  return (
    <div style={s.campo}>
      {label && <label style={s.campoLabel}>{label}</label>}
      {children}
    </div>
  )
}

function Rbtn({value,onChange,opts}:{value:string;onChange:(v:string)=>void;opts:{v:string;l:string}[]}) {
  return (
    <div style={s.radioGroup}>
      {opts.map(o=>(
        <button key={o.v} type="button" onClick={()=>onChange(o.v)}
          style={{
            ...s.radioBtn,
            background: value===o.v ? '#C9A84C' : '#0a1428',
            color:      value===o.v ? '#0D1B3E' : '#8a9ab8',
            border:     value===o.v ? '1px solid #C9A84C' : '1px solid #1e2e50',
            fontWeight: value===o.v ? 700 : 400,
          }}>
          {o.l}
        </button>
      ))}
    </div>
  )
}

function NpsBtns({value,onChange}:{value:number;onChange:(v:number)=>void}) {
  const cor = (n:number) => n>=9?'#4ade80':n>=7?'#facc15':'#f87171'
  return (
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:4}}>
      {[0,1,2,3,4,5,6,7,8,9,10].map(n=>(
        <button key={n} type="button" onClick={()=>onChange(n)}
          style={{
            width:40,height:40,borderRadius:8,
            fontSize:14,fontWeight:700,cursor:'pointer',
            background: value===n ? cor(n) : '#0a1428',
            color:      value===n ? '#0D1B3E' : '#5a6a88',
            border:     value===n ? `2px solid ${cor(n)}` : '1px solid #1e2e50',
            transition:'all 0.15s',
          }}>
          {n}
        </button>
      ))}
    </div>
  )
}

function Estrelas({label,value,onChange,desc}:{label:string;value:number;onChange:(v:number)=>void;desc?:string[]}) {
  const [hover,setHover]   = useState(0)
  const [pulsou,setPulsou] = useState(0)
  const click = (n:number) => { onChange(n); setPulsou(n); setTimeout(()=>setPulsou(0),260) }
  const ativo = hover||value
  return (
    <div style={{borderBottom:'1px solid #0e1c36',paddingBottom:10,marginBottom:2}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:10}}>
        {label && <span style={s.estrelasLabel}>{label}</span>}
        <div style={{display:'flex',gap:2}}>
          {[1,2,3,4,5].map(n=>(
            <span key={n} className={pulsou===n?'ep':''}
              onClick={()=>click(n)}
              onMouseEnter={()=>setHover(n)} onMouseLeave={()=>setHover(0)}
              style={{fontSize:28,cursor:'pointer',transition:'color 0.15s',userSelect:'none',
                color:n<=ativo?'#C9A84C':'#1e2e50'}}>
              ★
            </span>
          ))}
        </div>
      </div>
      {desc && ativo>0 && (
        <p style={{margin:'2px 0 0',fontSize:11,color:'#C9A84C',textAlign:'right',fontStyle:'italic'}}>
          {desc[ativo-1]}
        </p>
      )}
    </div>
  )
}

// ─── Estilos ─────────────────────────────────────────────────────────────────

const s: Record<string,React.CSSProperties> = {
  page:       {maxWidth:500,margin:'0 auto',padding:'28px 18px 56px',fontFamily:"'Segoe UI',sans-serif",background:'#0D1B3E',minHeight:'100vh',color:'#fff'},
  header:     {textAlign:'center',marginBottom:20,paddingBottom:20,borderBottom:'1px solid #1a2a4a'},
  eyebrow:    {fontSize:11,color:'#C9A84C',textTransform:'uppercase',letterSpacing:2,margin:'0 0 8px'},
  title:      {fontSize:24,fontWeight:700,color:'#fff',margin:'0 0 6px'},
  subtitle:   {fontSize:14,color:'#8a9ab8',margin:'0 0 4px'},
  author:     {fontSize:12,color:'#4a5a78'},
  toggleWrap: {marginBottom:28,borderRadius:10,overflow:'hidden',border:'1px solid #1e2e50'},
  toggleRow:  {display:'flex'},
  progressWrap:{marginBottom:24},
  progressBar: {height:6,background:'#0e1c36',borderRadius:99,overflow:'hidden',marginBottom:6},
  progressFill:{height:'100%',background:'#C9A84C',borderRadius:99,transition:'width 0.3s ease'},
  progressText:{fontSize:12,color:'#8a9ab8',textAlign:'right',margin:0},
  secao:      {marginBottom:28},
  secaoLabel: {fontSize:11,fontWeight:600,color:'#C9A84C',textTransform:'uppercase',letterSpacing:1.5,marginBottom:14,paddingBottom:6,borderBottom:'1px solid #1a2a4a'},
  hint:       {fontSize:12,color:'#5a6a88',marginTop:-4,marginBottom:12},
  campo:      {marginBottom:16},
  campoLabel: {display:'block',fontSize:13,color:'#8a9ab8',marginBottom:8},
  input:      {width:'100%',padding:'11px 14px',background:'#0a1428',border:'1px solid #1e2e50',borderRadius:8,color:'#fff',fontSize:15,boxSizing:'border-box'},
  select:     {width:'100%',padding:'11px 14px',background:'#0a1428',border:'1px solid #1e2e50',borderRadius:8,color:'#fff',fontSize:14,boxSizing:'border-box'},
  textarea:   {width:'100%',padding:'11px 14px',background:'#0a1428',border:'1px solid #1e2e50',borderRadius:8,color:'#fff',fontSize:14,resize:'vertical',boxSizing:'border-box',fontFamily:'inherit'},
  radioGroup: {display:'flex',gap:8,flexWrap:'wrap'},
  radioBtn:   {padding:'9px 14px',borderRadius:8,fontSize:13,cursor:'pointer',transition:'all 0.15s',flex:1,minWidth:'fit-content'},
  estrelasLabel:{fontSize:14,color:'#c0cce4',flex:1,paddingRight:8},
  btn:        {width:'100%',padding:'15px',background:'#C9A84C',color:'#0D1B3E',fontWeight:700,fontSize:16,border:'none',borderRadius:8,marginTop:8},
  erro:       {color:'#ff6b6b',fontSize:13,textAlign:'center',marginBottom:8},
  thanks:     {maxWidth:400,margin:'0 auto',textAlign:'center',fontFamily:"'Segoe UI',sans-serif",padding:'60px 24px 40px',background:'#0D1B3E',minHeight:'100vh'},
  thanksBadge:{width:64,height:64,borderRadius:'50%',background:'#C9A84C',color:'#0D1B3E',fontSize:28,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px'},
  thanksTitle:{color:'#C9A84C',fontSize:22,margin:'0 0 20px'},
  scoreBox:   {background:'#0a1428',border:'1px solid #1e2e50',borderRadius:12,padding:'20px 24px',marginBottom:24},
  scoreMsg:   {fontSize:18,fontWeight:700,margin:'0 0 10px'},
  scorStars:  {display:'flex',justifyContent:'center',gap:4,margin:'0 0 8px'},
  scoreNum:   {fontSize:28,fontWeight:700,color:'#C9A84C',margin:0},
  thanksText: {color:'#8a9ab8',fontSize:14,margin:'0 0 6px'},
  thanksSmall:{color:'#4a5a78',fontSize:12,margin:'0 0 32px'},
  backLink:   {display:'inline-block',marginTop:8,color:'#C9A84C',fontSize:13,textDecoration:'none',borderBottom:'1px solid #C9A84C',paddingBottom:2},
}
