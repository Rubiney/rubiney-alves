const blocos = [
  {
    label: 'O Problema da Liderança',
    intro: 'Antes de falar em processo ou receita, existe uma pergunta anterior que a maioria dos gestores evita: que tipo de líder você está sendo?',
    cards: [
      {
        tema: 'Liderança · Gestão Comercial',
        titulo: 'O Gestor Que Sabe Vender — Mas Não Sabe Gerir',
        chamada: 'O erro mais sistemático na gestão comercial brasileira: promover o melhor vendedor a gestor. Vender e gerir são competências completamente diferentes. E confundir as duas tem um custo que a empresa demora a perceber.',
        impacto: '58% dos gestores comerciais assumiram o cargo sem nenhum treinamento formal de liderança.',
        fonte: 'Gartner',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
      {
        tema: 'Liderança · Comportamento',
        titulo: '3 Comportamentos Que Determinam Se Seu Vendedor É Motivado Por Dentro — Ou Só Pelo Incentivo',
        chamada: 'Você monitora resultado ou comportamento? Você explica o porquê da meta ou só cobra o número? Você dá feedback sobre o processo ou só sobre o fechamento? Três perguntas. Três comportamentos. A resposta revela o tipo de equipe que você está formando.',
        impacto: 'Gestores que cobram só resultado criam vendedores que só funcionam com incentivo externo. Quando a comissão some, a motivação vai junto.',
        fonte: 'Moreno, Prado & Richarde · ReMark, v.23, n.3, 2024',
        link: 'https://lnkd.in/dDA3ch5m',
      },
      {
        tema: 'Liderança · Retenção de Talentos',
        titulo: 'Reconhecimento vs. Bônus: O Que Realmente Retém Um Time de Vendas',
        chamada: 'A crença mais comum na gestão comercial: "vendedor é motivado por dinheiro." Parcialmente verdade — mas apenas no curto prazo. O fator número 1 de retenção em times de alta performance não é a comissão. É a qualidade do gestor direto. Vendedores saem de gestores — não de empresas.',
        impacto: 'Reconhecimento não financeiro aumenta produtividade em até 37%.',
        fonte: 'McKinsey',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
    ],
  },
  {
    label: 'O Problema do Processo',
    intro: 'Liderança define o ambiente. Processo define o resultado. A maioria das empresas tem um dos dois — e acha que tem os dois.',
    cards: [
      {
        tema: 'Gestão Comercial · Processo',
        titulo: 'A Reunião de Resultado Que Não Resolve Nada',
        chamada: 'A maioria das reuniões de resultado segue o mesmo roteiro: o gestor pergunta o número, o vendedor justifica por que não bateu, o gestor cobra — e a reunião termina sem nenhuma mudança de processo. Isso não é gestão. É relatório oral. O problema que derrubou o resultado do mês foi gerado 3 ou 4 semanas antes. E ninguém interveio.',
        impacto: 'Gestores que revisam funil semanalmente têm times com taxa de conversão 15% maior do que gestores que revisam só no fechamento.',
        fonte: 'Salesforce',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
      {
        tema: 'Gestão Comercial · Diagnóstico',
        titulo: 'Alta Atividade, Resultado Baixo — Onde Está o Problema?',
        chamada: 'O time faz ligações. Envia propostas. Participa de reuniões. E o número não fecha. O erro clássico do gestor: exigir mais atividade. Mais do mesmo que não funciona não resolve. Quando há alta atividade e baixo resultado, existe um gargalo específico no funil — e ele precisa ser encontrado, não escondido com volume.',
        impacto: '58% dos gestores de vendas não sabem em qual etapa do funil perdem mais oportunidades.',
        fonte: 'Salesforce',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
      {
        tema: 'Gestão Comercial · Compliance',
        titulo: 'NR-1 2025: Pressão por Metas Virou Risco Ocupacional — e as Empresas Ainda Não Perceberam',
        chamada: 'Em maio de 2025, entrou em vigor a atualização da NR-1. As empresas agora são legalmente obrigadas a mapear e prevenir riscos psicossociais no ambiente de trabalho. Pressão crônica por metas está explicitamente na lista. E a responsabilidade é do gestor direto — não do RH.',
        impacto: 'Equipes de vendas estão no topo dos ambientes de maior risco psicossocial segundo a NR-1 atualizada. Maio de 2026: início da fiscalização ativa.',
        fonte: 'Ministério do Trabalho e Emprego · 2025',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
    ],
  },
  {
    label: 'O Problema da Receita',
    intro: 'No fim, tudo converge para um número. Mas o número não aparece sozinho — é consequência de tudo que aconteceu antes: no funil, no processo, na liderança.',
    cards: [
      {
        tema: 'Pipeline · Previsibilidade de Receita',
        titulo: 'Pipeline Cheio Não É Previsibilidade',
        chamada: 'Um funil cheio de oportunidades dá sensação de segurança. Mas se os critérios de qualificação são frouxos, o funil está inflado — e a receita que você projeta não vai acontecer. A pergunta certa não é "quantas oportunidades temos?". É: quantas oportunidades qualificadas temos, em qual etapa, com qual probabilidade histórica de conversão?',
        impacto: 'Apenas 45% dos negócios previstos para fechar no trimestre efetivamente fecham.',
        fonte: 'Gartner',
        link: 'https://www.linkedin.com/in/rubineyalves',
      },
      {
        tema: 'Metas · Planejamento · CRM',
        titulo: 'Planejamento de Metas B2B com CRM: Sua Meta Foi Construída — Ou Chutada?',
        chamada: 'A maioria das empresas define metas assim: "Ano passado fechamos X. Este ano vamos crescer 20%." Parece razoável. Mas ignora completamente ticket médio real por segmento, tempo de ciclo por etapa e taxa de conversão histórica por estágio. Sem esses três dados, o número não tem lastro operacional. É ambição sem estrutura.',
        impacto: 'Empresas que usam dados históricos do CRM para definir metas têm forecast 2x mais preciso.',
        fonte: 'Salesforce',
        link: 'https://lnkd.in/dA5DeuFV',
      },
    ],
  },
]

export default function Referencias() {
  return (
    <section id="referencias" style={{ backgroundColor: 'var(--navy-deep)' }}>
      <div className="section">
        <p className="eyebrow mb-4">Referências</p>
        <div className="gold-line mb-12" />

        {/* ── Abertura ── */}
        <div className="mb-16" style={{ maxWidth: '680px' }}>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400,
              color: 'var(--cream)',
            }}
          >
            O que eu estudo, analiso e publico sobre{' '}
            <em style={{ color: 'var(--gold)' }}>gestão comercial.</em>
          </h2>

          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Cada artigo aqui nasceu de uma observação real — de uma reunião que não
            funcionou, de uma equipe que travou, de um número que não fechou sem que
            ninguém soubesse o porquê.
          </p>

          <p
            className="leading-relaxed italic"
            style={{ fontSize: '0.9rem', color: 'var(--cream-muted)' }}
          >
            Não é conteúdo por conteúdo. É análise com propósito.
          </p>
        </div>

        {/* ── Blocos de cards ── */}
        {blocos.map((bloco) => (
          <div key={bloco.label} className="mb-16">

            {/* Cabeçalho do bloco */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 h-px w-6" style={{ backgroundColor: 'var(--gold)' }} />
              <p
                className="text-xs font-medium tracking-widest uppercase flex-shrink-0"
                style={{ color: 'var(--cream)' }}
              >
                {bloco.label}
              </p>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--gold-muted)' }} />
            </div>

            <p
              className="leading-relaxed mb-8 italic"
              style={{ fontSize: '0.88rem', color: 'var(--cream-muted)', maxWidth: '600px' }}
            >
              {bloco.intro}
            </p>

            {/* Grid de cards */}
            <div className={`grid grid-cols-1 gap-5 ${bloco.cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {bloco.cards.map((card) => (
                <div
                  key={card.titulo}
                  className="flex flex-col p-6"
                  style={{
                    backgroundColor: 'var(--navy-card)',
                    borderTop: '3px solid var(--gold)',
                  }}
                >
                  {/* Tema */}
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-4"
                    style={{ color: 'var(--gold)', opacity: 0.75 }}
                  >
                    {card.tema}
                  </p>

                  {/* Título */}
                  <h3
                    className="mb-4 leading-snug"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--cream)',
                      flex: '0 0 auto',
                    }}
                  >
                    {card.titulo}
                  </h3>

                  {/* Chamada */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: 'var(--cream-muted)' }}
                  >
                    {card.chamada}
                  </p>

                  {/* Dado de impacto */}
                  <div
                    className="mb-5 p-4"
                    style={{
                      backgroundColor: 'var(--navy-deep)',
                      borderLeft: '2px solid var(--gold)',
                    }}
                  >
                    <p
                      className="text-sm leading-relaxed italic mb-1"
                      style={{ color: 'var(--cream)' }}
                    >
                      {card.impacto}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--gold)', opacity: 0.65 }}
                    >
                      — {card.fonte}
                    </p>
                  </div>

                  {/* Link */}
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase flex items-center gap-2"
                    style={{ color: 'var(--gold)', textDecoration: 'none' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ler no LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── Fechamento / CTA ── */}
        <div
          className="mt-4 p-8"
          style={{
            backgroundColor: 'var(--navy-card)',
            borderTop: '1px solid var(--gold-muted)',
          }}
        >
          <p
            className="mb-2 leading-relaxed italic"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.1rem',
              color: 'var(--cream)',
            }}
          >
            Gestão comercial eficaz não começa pelo número.{' '}
            <em style={{ color: 'var(--gold)' }}>
              Começa pela pergunta certa — feita no momento certo.
            </em>
          </p>

          <p
            className="text-sm mb-8"
            style={{ color: 'var(--cream-muted)' }}
          >
            Acompanhe a produção completa:
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/rubineyalves"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ color: 'var(--cream-muted)', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <span style={{ color: 'var(--gold-muted)' }}>·</span>
            <a
              href="https://www.instagram.com/rubiney_alves/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ color: 'var(--cream-muted)', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>

          <a
            href="#contato"
            className="btn-gold"
            style={{ display: 'inline-block' }}
          >
            Entrar em contato
          </a>
        </div>

      </div>
    </section>
  )
}
