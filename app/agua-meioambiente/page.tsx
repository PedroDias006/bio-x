"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
   Wind
} from "lucide-react";
import { useRef } from "react";

/* =========================================================================
   DADOS ESTRATÉGICOS (PRIDE CLEAN)
   ========================================================================= */
const SOLUTIONS = [
  { 
    title: "Clarificação Natural", 
    desc: "Atua na redução de impurezas em suspensão, melhorando a transparência e a qualidade visual da água.", 
    icon: <Droplets className="w-6 h-6" /> 
  },
  { 
    title: "Equilíbrio Aquático", 
    desc: "Restaura a biologia natural de lagos, lagoas e tanques, criando um ecossistema vital e saudável.", 
    icon: <Waves className="w-6 h-6" /> 
  },
  { 
    title: "Redução de Odores", 
    desc: "Ação direta na degradação da matéria orgânica, mitigando gases e maus odores de forma eficaz.", 
    icon: <Wind className="w-6 h-6" /> 
  },
  { 
    title: "Aplicação Prática", 
    desc: "Solução simples, segura e sem complicações regulatórias, facilitando o manejo do seu sistema.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
];

/* =========================================================================
   COMPONENTES UI
   ========================================================================= */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function PrideCleanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax e Progresso
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      
      {/* Barra de Progresso Superior */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 z-[100] origin-left shadow-[0_0_20px_rgba(56,189,248,0.5)]" />

      {/* ======================================================
          1. HERO (PRIDE CLEAN) - 100% LIMPO
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* Background Layered (SEM CORTINA BRANCA) */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <video
            src="/videos/agua-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay suave na tela toda para garantir leitura do texto escuro sem criar caixas/cards */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />
        </motion.div>

        {/* CONTAINER DO TEXTO - Totalmente limpo */}
        <div className="relative z-20 text-center max-w-6xl mt-12 px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-md mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-700 uppercase">Tratamento Natural de Águas</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
              Qualidade e Equilíbrio <br />
              <span className="text-blue-600">
                para suas águas.
              </span>
            </h1>

            {/* Texto sem o fundo branco/card que estava antes */}
            <p className="text-slate-800 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium mb-12">
              O aditivo natural que atua na clarificação e redução de impurezas em <strong className="text-blue-800 font-black">lagos, lagoas, tanques e efluentes</strong>, restaurando a saúde e a vitalidade do ambiente aquático.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#" 
                className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 uppercase tracking-widest text-sm"
              >
                FALAR COM ESPECIALISTA <ArrowUpRight size={20} />
              </a>
              <a href="#solucoes" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-200 text-slate-800 hover:bg-white hover:text-blue-600 transition-all font-bold bg-white/80 backdrop-blur-md uppercase tracking-widest text-sm shadow-lg">
                Ver Benefícios <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================================================
          2. DIAGNÓSTICO E SOLUÇÕES (CLEAN GRID)
      ====================================================== */}
      <section id="solucoes" className="py-32 bg-slate-50 relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Cuidado Integrado</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Desenvolvido para atuar diretamente na causa dos desequilíbrios aquáticos. Ajudamos a criar um ambiente vital, livre de odores, sem a necessidade de intervenções químicas complexas.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
               <a href="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest font-mono">
                 Conhecer o Produto <ArrowRight size={16} />
               </a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          3. FICHA TÉCNICA (DESTAQUE PRODUTO COM IMAGEM MAIOR)
      ====================================================== */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Visual do Produto (FOTO) */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn>
                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl flex flex-col items-center justify-center p-8 md:p-12 group perspective-1000">
                   
                   {/* Background Gradient Sutil */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 via-transparent to-blue-50/50" />
                   
                   {/* IMAGEM DO PRODUTO - TAMANHO AUMENTADO */}
                   <motion.div
                     whileHover={{ scale: 1.02, y: -5 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                     className="relative z-10 flex flex-col items-center justify-center w-full"
                   >
                     <img
                       src="/images/pride-clean.png"
                       alt="Resultado Pride Clean"
                       /* Ajustes feitos aqui: Imagem ocupa quase toda a largura, cantos arredondados, sombra para integrar com o fundo */
                       className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] object-cover rounded-2xl shadow-lg relative z-20 mb-8 border border-white"
                     />
                     
                     <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">PRIDE CLEAN</h3>
                     <span className="inline-block px-3 py-1 mt-2 mb-16 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono uppercase tracking-widest font-semibold">Aditivo 100% Natural</span>
                   </motion.div>

                   {/* Card Flutuante */}
                   <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] z-30">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-1.5 bg-emerald-100 rounded-full text-emerald-600">
                            <CheckCircle2 size={16} />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Eficácia Visível</span>
                      </div>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">Seguro para o meio ambiente, fauna aquática e flora do seu lago.</p>
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Dados Técnicos */}
            <div className="w-full lg:w-1/2">
               <FadeIn delay={0.2}>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-blue-500 rounded-full shadow-sm" />
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm font-mono">Detalhes do Produto</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                   Ação Biológica <br/> Contínua.
                 </h2>
                 
                 <div className="space-y-8">
                   {/* Princípio Ativo Destaque */}
                   <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm">
                      <div className="shrink-0">
                         <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 border border-slate-100 shadow-sm">
                            <Leaf size={24} />
                         </div>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">Base Orgânica</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">Formulado a partir de extratos vegetais que promovem a saúde da água sem gerar passivos químicos.</p>
                      </div>
                   </div>

                   {/* Grid de Propiedades */}
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Composição", val: "100% Natural" },
                        { label: "Aplicação", val: "Direta na Água" },
                        { label: "Ação Principal", val: "Clarificação" },
                        { label: "Burocracia", val: "Zero Registros" },
                      ].map((spec, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all">
                           <span className="block text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-wider">{spec.label}</span>
                           <span className="block text-xl font-mono font-bold text-slate-800">{spec.val}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="pt-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 hover:border-blue-600 font-mono"
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
          4. DASHBOARD DE RESULTADOS (IMPACTO VISUAL CLARO)
      ====================================================== */}
      <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-8">
               <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">O Impacto na Água</h2>
                  <p className="text-slate-500">Resultados práticos observados na redução de carga orgânica e melhoria estética visual após a estabilização do sistema.</p>
               </div>
               <div className="flex items-center gap-2 text-blue-600 font-mono text-sm mt-4 md:mt-0 font-bold bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                  <Activity size={16} /> Ecossistema Ativo
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* Painel Matéria Orgânica */}
               <FadeIn delay={0.1} className="bg-white border border-slate-100 shadow-sm p-8 rounded-3xl relative overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Matéria Orgânica</h3>
                        <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Geração de Odores</span>
                     </div>
                     <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg text-lg font-bold border border-emerald-100 font-mono">Estabilizado</span>
                  </div>
                  
                  <div className="space-y-8">
                     {/* Barra Entrada (Suja) */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-500 font-mono font-medium">
                           <span>Sem Tratamento</span>
                           <span>Alto Índice</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full w-[85%] bg-amber-700/60 rounded-full"></div>
                        </div>
                     </div>
                     {/* Barra Saída (Limpa) */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-blue-600 font-bold font-mono">
                           <span>Com Pride Clean</span>
                           <span>Equilibrado</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "25%" }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "circOut" }} 
                              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" 
                           />
                        </div>
                     </div>
                  </div>
               </FadeIn>

               {/* Painel Turbidez */}
               <FadeIn delay={0.2} className="bg-white border border-slate-100 shadow-sm p-8 rounded-3xl relative overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Turbidez e Impurezas</h3>
                        <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Clarificação Visual</span>
                     </div>
                     <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-lg font-bold border border-blue-100 font-mono">Água Clara</span>
                  </div>
                  
                  <div className="space-y-8">
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-500 font-mono font-medium">
                           <span>Antes</span>
                           <span>Alta Turbidez</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full w-[90%] bg-stone-500/50 rounded-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-sky-500 font-bold font-mono">
                           <span>Depois</span>
                           <span>Transparência</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "15%" }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "circOut" }} 
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
          5. CTA FINAL (CLEAN & TRUST)
      ====================================================== */}
      <section className="py-32 px-6 flex justify-center bg-white border-t border-slate-100">
        <div className="max-w-5xl w-full bg-gradient-to-br from-blue-600 to-cyan-600 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)]">
           
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                 <Droplets size={14} fill="currentColor" /> Equilíbrio e Vitalidade
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                Águas cristalinas e <br/>
                ecossistema saudável.
              </h2>
              
              <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Garanta a melhoria visual e biológica dos seus lagos, tanques e efluentes de maneira simples e sem dores de cabeça com registros.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                 <a 
                   href="#" 
                   className="flex items-center justify-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 uppercase tracking-widest text-sm"
                 >
                    <Phone size={20} /> Solicitar Orçamento
                 </a>
                 <a 
                   href="#" 
                   className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-10 py-5 rounded-full font-bold hover:border-white hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                 >
                    Falar no WhatsApp
                 </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}