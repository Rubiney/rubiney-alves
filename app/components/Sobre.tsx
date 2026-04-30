"use client";
import { useState } from "react";

const diagnostico = [
  {
    num: "01",
    title: "Tempo de Espera Elevado",
    desc: "A espera por atendimento é um dos principais pontos de insatisfação nas farmácias. Em pesquisa conduzida pela Decomposer em farmácias da Grande São Paulo, a espera recebeu nota média de 7,3 — desempenho considerado crítico. O consumidor contemporâneo não tolera demora. Filas longas são um dos gatilhos mais diretos de abandono do ponto de venda e migração para a concorrência.",
  },
  {
    num: "02",
    title: "Atendimento Sem Empatia",
    desc: "Funcionários desmotivados ou mal-humorados geram uma experiência negativa em um espaço que deveria oferecer acolhimento. Pesquisas estimam que, de cada 10 clientes insatisfeitos, apenas 2 reclamam para o gerente — os outros 8 buscam a concorrência e fazem propaganda negativa.",
  },
  {
    num: "03",
    title: "Ruptura de Estoque",
    desc: "Muitas vendas são perdidas por falta de produto. O estabelecimento passa a ser conhecido como 'a farmácia do amanhã'. Investir no estoque pode aumentar as vendas em 30% a 40%. A ruptura é um problema de gestão operacional que impacta diretamente o indicador de conversão.",
  },
  {
    num: "04",
    title: "Mix de Produtos Inadequado",
    desc: "Um sortimento inadequado frustra o cliente e transmite desorganização. Farmácias que não conhecem o perfil do seu shopper regional operam com sortimento genérico, perdendo relevância competitiva e estimulando compras por impulso na concorrência.",
  },
  {
    num: "05",
    title: "Layout e Ambientação Mal Planejados",
    desc: "Corredores estreitos e produtos mal sinalizados dificultam a circulação. A escaneabilidade do espaço físico é tão importante quanto a de um texto — quando o cliente não encontra o que busca rapidamente, a fricção na jornada aumenta e a conversão cai.",
  },
  {
    num: "06",
    title: "Falta de Conhecimento Técnico",
    desc: "Equipes sem treinamento transmitem insegurança, indicam produtos errados e não conseguem orientar sobre alternativas terapêuticas ou programas de desconto (PBMs), gerando insatisfação e perda de credibilidade institucional.",
  },
  {
    num: "07",
    title: "Falha na Comunicação de Benefícios",
    desc: "Muitas farmácias limitam as condições de parcelamento no cartão e esquecem de perguntar sobre planos de saúde ou PBMs. Essa falha representa oportunidade perdida para o cliente e para o estabelecimento — impacta diretamente o ticket médio e a percepção de valor.",
  },
  {
    num: "08",
    title: "Papel do Farmacêutico Subutilizado",
    desc: "Por algum tempo, o farmacêutico perdeu sua identidade e virou entregador de caixinha. A ausência de um farmacêutico atuante e visível reduz a percepção de autoridade técnica do estabelecimento — um diferencial competitivo negligenciado pela maioria das redes.",
  },
];

export default function Sobre() {
  const [open, setOpen] = useState(false);

  return (
    <section id="sobre" style={{ backgroundColor: "var(--navy-card)" }}>
      <div className="section">
        <p className="eyebrow mb-4">Sobre</p>
        <div className="gold-line mb-8" />

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--cream)",
              }}
            >
              Transformo atendimento em{" "}
              <em style={{ color: "var(--gold)" }}>resultado no varejo farmacêutico.</em>
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Atuo diretamente com operação de drogarias, analisando o que realmente acontece
              no atendimento — não na teoria, mas na prática do dia a dia.
            </p>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Na maioria das farmácias, os problemas são os mesmos —{" "}
              <button
                onClick={() => setOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "var(--gold)",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  textDecoration: "underline dotted",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                }}
              >
                ver diagnóstico completo
              </button>
              .
            </p>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Essas falhas passam despercebidas, mas impactam diretamente a experiência do
              cliente e o resultado da loja. Com experiência em gestão comercial e vivência no
              ambiente farmacêutico, meu foco é identificar esses pontos críticos e transformar
              atendimento em performance.
            </p>

            <p
              className="leading-relaxed"
              style={{ fontSize: "0.9rem", color: "var(--cream-muted)" }}
            >
              Não se trata apenas de atender bem.{" "}
              <em style={{ color: "var(--gold)" }}>
                Trata-se de atender com método, consistência e estratégia.
              </em>{" "}
              E é exatamente isso que eu aplico na prática.
            </p>
          </div>

          {/* Stats */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-6 content-start">
            {[
              { num: "+20",  label: "Anos de experiência" },
              { num: "6+",   label: "MBAs e pós-graduações" },
              { num: "3x",   label: "Promovido internamente" },
              { num: "360°", label: "Visão comercial & dados" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6 text-center"
                style={{
                  border: "1px solid var(--gold-muted)",
                  backgroundColor: "var(--navy-deep)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </p>
                <p
                  className="mt-2 text-xs tracking-wide"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal diagnóstico */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(5,10,28,0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--navy-card)",
              border: "1px solid var(--gold-muted)",
              borderRadius: "4px",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              padding: "40px 36px 32px",
              position: "relative",
            }}
          >
            {/* Fechar */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 20,
                background: "none",
                border: "none",
                color: "var(--cream-muted)",
                fontSize: "1.4rem",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <p className="eyebrow mb-2">Diagnóstico</p>
            <h3
              className="mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "var(--cream)",
              }}
            >
              Principais causas de experiência ruim em drogarias
            </h3>

            <div className="flex flex-col gap-5">
              {diagnostico.map((d) => (
                <div
                  key={d.num}
                  style={{ borderBottom: "1px solid var(--gold-muted)", paddingBottom: "16px" }}
                >
                  <p
                    className="mb-1 text-xs tracking-widest"
                    style={{ color: "var(--gold)", opacity: 0.7 }}
                  >
                    {d.num}
                  </p>
                  <p
                    className="mb-2 text-sm font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    {d.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-6 text-sm leading-relaxed"
              style={{
                color: "var(--cream-muted)",
                borderTop: "1px solid var(--gold-muted)",
                paddingTop: "20px",
              }}
            >
              Os problemas se distribuem em três camadas:{" "}
              <strong style={{ color: "var(--cream)" }}>operacional</strong> (estoque, fila,
              layout),{" "}
              <strong style={{ color: "var(--cream)" }}>humana</strong> (atendimento, empatia,
              capacitação) e{" "}
              <strong style={{ color: "var(--cream)" }}>estratégica</strong> (mix, posicionamento,
              papel do farmacêutico). O cliente não verbaliza a insatisfação — ele simplesmente
              não volta.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
