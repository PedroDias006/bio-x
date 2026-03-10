"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Droplets,
  FileText,
  Leaf,
  Phone,
  ShieldCheck,
  Waves,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { memo } from "react";

/* =========================================================================
   DADOS
   ========================================================================= */
const SOLUTIONS = [
  {
    title: "Clarificação Natural",
    desc: "Atua na redução de impurezas em suspensão, melhorando a transparência e a qualidade visual da água.",
    icon: Droplets,
  },
  {
    title: "Equilíbrio Aquático",
    desc: "Restaura a biologia natural de lagos, lagoas e tanques, criando um ecossistema vital e saudável.",
    icon: Waves,
  },
  {
    title: "Redução de Odores",
    desc: "Ação direta na degradação da matéria orgânica, mitigando gases e maus odores de forma eficaz.",
    icon: Wind,
  },
  {
    title: "Aplicação Prática",
    desc: "Solução simples, segura e sem complicações regulatórias, facilitando o manejo do seu sistema.",
    icon: ShieldCheck,
  },
];

const SPECS = [
  { label: "Composição", val: "100% Natural" },
  { label: "Aplicação", val: "Direta na Água" },
  { label: "Ação Principal", val: "Clarificação" },
  { label: "Burocracia", val: "Zero Registros" },
];

/* =========================================================================
   ANIMAÇÃO LEVE
   ========================================================================= */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SolutionCard = memo(function SolutionCard({
  title,
  desc,
  Icon,
  delay,
}: {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="h-full rounded-3xl bg-white border border-slate-200 p-6 md:p-8 transition-transform duration-200 hover:-translate-y-1">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
      </div>
    </FadeIn>
  );
});

export default function PrideCleanPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden">
      {/* ======================================================
          HERO (OTIMIZADO CONTRA TELA PRETA)
      ====================================================== */}
      <section className="relative min-h-[90svh] w-full flex items-center justify-center px-4 sm:px-6 bg-white overflow-hidden">
        
        <div className="absolute inset-0 z-0 bg-white">
          {/* TRUQUE INVISÍVEL: O Next.js vai injetar essa imagem no <head> com prioridade máxima.
            Quando a página abrir, a foto já está baixada e no cache do navegador.
          */}
          <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
            <Image 
              src="/images/agua-hero-poster.jpg" 
              alt="Preload" 
              fill 
              priority 
              quality={80} 
            />
          </div>

          {/* Vídeo só aparece em md+ */}
          <div className="hidden md:block absolute inset-0">
            {/* CSS INLINE MATADOR: O background-image CSS roda antes do HTML renderizar o player de vídeo.
              O backgroundColor '#ffffff' anula a tela preta nativa do HTML5. 
            */}
            <video
              src="/videos/agua-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                backgroundImage: "url('/images/agua-hero-poster.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#ffffff",
              }}
              className="w-full h-full object-cover opacity-35"
            />
          </div>

          {/* Poster/imagem para telas pequenas (Usando o mesmo esquema inline) */}
          <div
            className="md:hidden absolute inset-0 bg-center bg-cover opacity-20"
            style={{ 
              backgroundImage: "url('/images/agua-hero-poster.jpg')",
              backgroundColor: "#ffffff"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/60 to-slate-50" />
        </div>

        <div className="relative z-10 max-w-6xl text-center pt-20 pb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 bg-white mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase">
                Tratamento Natural de Águas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1]">
              Qualidade e Equilíbrio <br />
              <span className="text-blue-600">para suas Águas.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-700 leading-relaxed mb-10 px-2">
              O aditivo natural que atua na clarificação e redução de impurezas em{" "}
              <strong className="text-blue-800">
                lagos, lagoas, tanques e efluentes
              </strong>
              , restaurando a saúde e a vitalidade do ambiente aquático.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-full font-bold transition-colors uppercase tracking-wider text-xs sm:text-sm"
              >
                FALAR COM ESPECIALISTA <ArrowUpRight size={18} />
              </a>

              <a
                href="#solucoes"
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-slate-300 text-slate-800 hover:bg-white transition-colors font-bold bg-white uppercase tracking-wider text-xs sm:text-sm"
              >
                Ver Benefícios
                <ChevronDown size={16} className={!reduceMotion ? "transition-transform group-hover:translate-y-1" : ""} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================================================
          SOLUÇÕES
      ====================================================== */}
      <section id="solucoes" className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 md:mb-16 gap-6">
            <FadeIn className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Cuidado Integrado
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Desenvolvido para atuar diretamente na causa dos desequilíbrios aquáticos.
                Ajudamos a criar um ambiente vital, livre de odores, sem a necessidade
                de intervenções químicas complexas.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <a
                href="#"
                className="text-blue-600 font-bold flex items-center gap-2 uppercase text-xs tracking-widest"
              >
                Conhecer o Produto <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SOLUTIONS.map((item, i) => (
              <SolutionCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                Icon={item.icon}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUTO
      ====================================================== */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 p-6 sm:p-8 md:p-10 flex flex-col items-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 via-transparent to-blue-50" />

                  <div className="relative z-10 flex flex-col items-center w-full">
                    <Image
                      src="/images/pride-clean.png"
                      alt="Embalagem Pride Clean"
                      width={400}
                      height={500}
                      priority={false}
                      loading="lazy"
                      quality={70}
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                      className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[360px] h-auto object-contain mb-6"
                    />

                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 tracking-tight text-center">
                      PRIDE CLEAN
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-widest text-center">
                      Aditivo 100% Natural
                    </span>
                  </div>

                  <div className="mt-8 w-full bg-white p-5 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-emerald-100 rounded-full text-emerald-600">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Eficácia Visível
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Seguro para o meio ambiente, fauna aquática e flora do seu lago.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.08}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-1 bg-blue-500 rounded-full" />
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
                    Detalhes do Produto
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                  Ação Biológica <br /> Contínua.
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="shrink-0">
                      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-blue-600 border border-slate-200">
                        <Leaf size={22} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Base Orgânica</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Formulado a partir de extratos vegetais que promovem a saúde da
                        água sem gerar passivos químicos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {SPECS.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-200"
                      >
                        <span className="block text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-wider">
                          {spec.label}
                        </span>
                        <span className="block text-base sm:text-lg font-bold text-slate-800">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 text-blue-600 font-bold text-sm uppercase tracking-wide"
                    >
                      <FileText size={18} />
                      Consultar Ficha Técnica
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          IMPACTO
      ====================================================== */}
      <section className="py-20 md:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 md:mb-16 border-b border-slate-200 pb-6 gap-5">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                O Impacto na Água
              </h2>
              <p className="text-slate-600">
                Resultados práticos observados na redução de carga orgânica e melhoria
                estética visual após a estabilização do sistema.
              </p>
            </div>

            <div className="flex items-center gap-2 text-blue-600 text-sm mt-2 md:mt-0 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100 w-fit">
              <Activity size={16} /> Ecossistema Ativo
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={0.08} className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
              <div className="flex justify-between items-start mb-8 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                    Matéria Orgânica
                  </h3>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    Geração de Odores
                  </span>
                </div>
                <span className="bg-emerald-50 text-emerald-600 px-3 py-2 rounded-lg text-sm md:text-base font-bold border border-emerald-100 whitespace-nowrap">
                  Estabilizado
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-slate-500 font-medium">
                    <span>Sem Tratamento</span>
                    <span>Alto Índice</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-amber-700/60 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-blue-600 font-bold">
                    <span>Com Pride Clean</span>
                    <span>Equilibrado</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.9 }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
              <div className="flex justify-between items-start mb-8 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                    Turbidez e Impurezas
                  </h3>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    Clarificação Visual
                  </span>
                </div>
                <span className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm md:text-base font-bold border border-blue-100 whitespace-nowrap">
                  Água Clara
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-slate-500 font-medium">
                    <span>Antes</span>
                    <span>Alta Turbidez</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-stone-500/50 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-sky-500 font-bold">
                    <span>Depois</span>
                    <span>Transparência</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.9 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-sky-300 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-6 flex justify-center bg-white border-t border-slate-100">
        <div className="max-w-5xl w-full bg-gradient-to-br from-blue-600 to-cyan-600 p-8 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest">
              <Droplets size={14} fill="currentColor" /> Equilíbrio e Vitalidade
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Águas cristalinas e <br />
              ecossistema saudável.
            </h2>

            <p className="text-blue-100 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Garanta a melhoria visual e biológica dos seus lagos, tanques e
              efluentes de maneira simples e sem dores de cabeça com registros.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors uppercase tracking-wider text-sm"
              >
                <Phone size={18} /> Solicitar Orçamento
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors uppercase tracking-wider text-sm"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}