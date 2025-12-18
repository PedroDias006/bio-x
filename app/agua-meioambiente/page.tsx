"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
   Activity,
   ArrowRight,
   ArrowUpRight, // Adicionado
   CheckCircle2,
   ChevronDown, // Adicionado (Corrigido erro)
   Droplets,
   FileText, // Adicionado
   Microscope, // Adicionado (Corrigido erro)
   Phone,
   ShieldCheck,
   Sprout,
   Zap // Adicionado
} from "lucide-react";
import { useRef } from "react";

/* =========================================================================
   DADOS ESTRATÉGICOS
   ========================================================================= */
const SOLUTIONS = [
  { 
    title: "Clarificação Biológica", 
    desc: "Floculação de turbidez extrema sem uso de polímeros sintéticos.", 
    icon: <Droplets className="w-6 h-6" /> 
  },
  { 
    title: "Remoção de Metais", 
    desc: "Quelação de metais pesados tóxicos através de biosorção.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Controle de Odor", 
    desc: "Eliminação de gases sulfurosos diretamente na fonte geradora.", 
    icon: <Sprout className="w-6 h-6" /> 
  },
  { 
    title: "Redução de Carga", 
    desc: "Decaimento acelerado de DBO e DQO em lagoas industriais.", 
    icon: <Activity className="w-6 h-6" /> 
  },
];

/* =========================================================================
   COMPONENTES UI (Refinados)
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

export default function AguaMeioAmbientePremium() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax e Progresso
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-900 overflow-x-hidden">
      
      {/* Barra de Progresso Superior */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-[100] origin-left shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

      {/* ======================================================
          1. HERO (IMPACTO PROFUNDO - DARK BLUE)
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0F172A]">
        
        {/* Background Layered */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/90 to-[#0F172A] z-10" />
          <video
            src="/videos/agua-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-6xl mt-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">Blue Tech Revolution</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-8 leading-[0.95]">
              Saneamento de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-blue-400">
                Alta Precisão.
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Tecnologia biológica que substitui químicos agressivos por inteligência enzimática. Reduza <strong className="text-white font-medium">DBO, DQO e Metais Pesados</strong> com impacto zero.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20tratamento%20de%20%C3%A1gua." 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:-translate-y-1"
              >
                FALAR COM ESPECIALISTA <ArrowUpRight size={20} />
              </a>
              <a href="#solucoes" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 text-slate-300 hover:bg-white/5 transition-all font-medium">
                Conhecer Processos <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================================================
          2. PROBLEMATIZAÇÃO & SOLUÇÃO (GRID TÉCNICO)
      ====================================================== */}
      <section id="solucoes" className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Diagnóstico & Cura</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Tratamos a água como um organismo vivo. Nossa abordagem identifica e neutraliza patologias industriais na fonte.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
               <a href="/tecnologia" className="text-cyan-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                  Ver todas as aplicações <ArrowRight size={16} />
               </a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-[2rem] bg-slate-50 border border-slate-200 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-cyan-600 mb-8 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
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
          3. FICHA TÉCNICA (LAYOUT ASSIMÉTRICO DE ALTO NÍVEL)
      ====================================================== */}
      <section className="py-32 bg-[#F1F5F9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Visual do Produto (Vidro Fosco) */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn>
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-2xl flex flex-col items-center justify-center p-12 group">
                   
                   {/* Background Gradient Sutil */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 via-white to-white opacity-50" />
                   
                   <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto bg-cyan-100 rounded-full flex items-center justify-center mb-8 animate-pulse">
                         <Droplets size={64} className="text-cyan-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Sanaqua™</h3>
                      <span className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-500 text-xs font-mono uppercase tracking-widest">Versão Industrial 4.0</span>
                   </div>

                   {/* Cards Flutuantes */}
                   <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-1.5 bg-emerald-100 rounded-full">
                            <CheckCircle2 size={16} className="text-emerald-600" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Non-Toxic Certified</span>
                      </div>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">Segurança total para operadores e biota aquática.</p>
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Dados Técnicos (Estilo Tabela Dinâmica) */}
            <div className="w-full lg:w-1/2">
               <FadeIn delay={0.2}>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-cyan-500 rounded-full" />
                    <span className="text-cyan-700 font-bold tracking-widest uppercase text-sm">Especificações</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                    Engenharia <br/> Microbiológica.
                 </h2>
                 
                 <div className="space-y-8">
                    {/* Princípio Ativo Destaque */}
                    <div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-cyan-300 transition-colors">
                       <div className="shrink-0">
                          <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600">
                             <Microscope size={24} />
                          </div>
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">Princípio Ativo</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">Blend exclusivo de microrganismos facultativos com alta resistência osmótica.</p>
                       </div>
                    </div>

                    {/* Grid de Propriedades */}
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { label: "pH Solução", val: "6.5 - 7.5" },
                         { label: "Densidade", val: "1.05 g/cm³" },
                         { label: "Solubilidade", val: "100%" },
                         { label: "Diluição", val: "1:10.000" },
                       ].map((spec, i) => (
                         <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <span className="block text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-wider">{spec.label}</span>
                            <span className="block text-xl font-mono font-bold text-slate-900">{spec.val}</span>
                         </div>
                       ))}
                    </div>
                    
                    <div className="pt-6">
                       <a 
                         href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20gostaria%20da%20ficha%20t%C3%A9cnica%20do%20Sanaqua." 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-3 text-cyan-700 font-bold hover:gap-5 transition-all text-sm uppercase tracking-wide border-b-2 border-cyan-200 pb-1 hover:border-cyan-600"
                       >
                          <FileText size={18} />
                          Baixar Ficha Técnica Completa
                       </a>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. DASHBOARD DE RESULTADOS (DARK MODE REAL)
      ====================================================== */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
               <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Performance Comprovada</h2>
                  <p className="text-slate-400">Dados reais de eficiência coletados em planta industrial (Minas Gerais) - Ciclo de 20 dias.</p>
               </div>
               <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mt-4 md:mt-0">
                  <Activity size={16} /> Live Data Analysis
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* Painel DBO */}
               <FadeIn delay={0.1} className="bg-[#151E32] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                  
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Redução de DBO</h3>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Demanda Bioquímica</span>
                     </div>
                     <span className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg text-lg font-bold border border-emerald-500/20">-77%</span>
                  </div>
                  
                  <div className="space-y-8">
                     {/* Barra Entrada */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-400 font-mono">
                           <span>Entrada</span>
                           <span>4.728 mg/L</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-slate-600 rounded-full"></div>
                        </div>
                     </div>
                     {/* Barra Saída */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-cyan-300 font-bold font-mono">
                           <span>Saída (Bio-X)</span>
                           <span>1.090 mg/L</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "23%" }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "circOut" }} 
                              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full" 
                           />
                        </div>
                     </div>
                  </div>
               </FadeIn>

               {/* Painel DQO */}
               <FadeIn delay={0.2} className="bg-[#151E32] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                  
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Redução de DQO</h3>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Demanda Química</span>
                     </div>
                     <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-lg font-bold border border-blue-500/20">-72%</span>
                  </div>
                  
                  <div className="space-y-8">
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-400 font-mono">
                           <span>Entrada</span>
                           <span>Referência 100%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-slate-600 rounded-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-blue-300 font-bold font-mono">
                           <span>Saída (Bio-X)</span>
                           <span>Referência 28%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: "28%" }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "circOut" }} 
                              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" 
                           />
                        </div>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* ======================================================
          5. CTA FINAL (ELEGÂNCIA MÁXIMA)
      ====================================================== */}
      <section className="py-32 px-6 flex justify-center bg-white border-t border-slate-100">
        <div className="max-w-5xl w-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-slate-200/50">
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                 <Zap size={14} fill="currentColor" /> Resultados Garantidos
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Transforme seu Passivo em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Ativo Ambiental.</span>
              </h2>
              
              <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Conformidade com órgãos ambientais, redução drástica de custos operacionais e segurança biológica total.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                 <a 
                   href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20engenheiro%20da%20Bio-X." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                 >
                    <Phone size={20} /> Falar com Engenheiro
                 </a>
                 <a 
                   href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20ind%C3%BAstria." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-700 transition-all shadow-sm"
                 >
                    Solicitar Orçamento
                 </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}