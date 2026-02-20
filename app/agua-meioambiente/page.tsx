"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
   Activity,
   ArrowRight,
   ArrowUpRight,
   CheckCircle2,
   ChevronDown,
   Cpu,
   Droplets,
   FileText,
   Microscope, // Adicionado para dar o tom tech
   Network // Adicionado
   ,

   Phone,
   ShieldCheck,
   Zap
} from "lucide-react";
import { useRef } from "react";

/* =========================================================================
   DADOS ESTRATÉGICOS (AETHERIS HYDRO-DIVISION)
   ========================================================================= */
const SOLUTIONS = [
  { 
    title: "Purificação Quântica", 
    desc: "Desestabilização de partículas via ressonância, eliminando turbidez sem polímeros.", 
    icon: <Droplets className="w-6 h-6" /> 
  },
  { 
    title: "Extração de Isótopos", 
    desc: "Isolamento magnético de metais pesados e materiais radioativos.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Scrubbing Atmosférico", 
    desc: "Neutralização de vapores tóxicos e sulfurosos em nível molecular.", 
    icon: <Network className="w-6 h-6" /> 
  },
  { 
    title: "Reset de Carga", 
    desc: "Algoritmos biológicos que aceleram o decaimento de matéria orgânica em 500%.", 
    icon: <Zap className="w-6 h-6" /> 
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

export default function AetherisHydro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax e Progresso
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Barra de Progresso Superior */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-600 z-[100] origin-left shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

      {/* ======================================================
          1. HERO (AETHERIS DEEP FLUID)
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#00050A]">
        
        {/* Background Layered */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00050A]/70 via-[#00050A]/80 to-[#020617] z-10" />
          <video
            src="/videos/agua-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-50 grayscale-[50%] contrast-125"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-6xl mt-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-300 uppercase">Aetheris Hydro-Division</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">
              Reconfiguração <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-indigo-400 animate-pulse">
                Hidro-Molecular.
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Não filtramos água. Nós reprogramamos sua estrutura. Tecnologia de nanovetores que elimina <strong className="text-cyan-200 font-medium">Entropia Biológica e Materiais Pesados</strong> com precisão cirúrgica.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#" 
                className="group flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1"
              >
                INICIAR PROTOCOLO <ArrowUpRight size={20} />
              </a>
              <a href="#solucoes" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 text-slate-300 hover:bg-white/5 transition-all font-medium backdrop-blur-sm">
                Acessar Dados <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================================================
          2. DIAGNÓSTICO (TECH GRID)
      ====================================================== */}
      <section id="solucoes" className="py-32 bg-[#0B1121] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">System Diagnostics</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tratamos efluentes como falhas de código. Nossa abordagem identifica "bugs" biológicos e os neutraliza na fonte geradora.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
               <a href="#" className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest font-mono">
                 Ver todas as APIs <ArrowRight size={16} />
               </a>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-[2rem] bg-[#151E32] border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 flex items-center justify-center text-cyan-400 mb-8 shadow-inner border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          3. FICHA TÉCNICA (LABORATÓRIO SINTÉTICO)
      ====================================================== */}
      <section className="py-32 bg-[#020617] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Visual do Produto (Holográfico) */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn>
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#0B1121] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-12 group">
                   
                   {/* Background Gradient Sutil */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-indigo-900/20 opacity-50" />
                   
                   <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-8 border border-cyan-500/30 animate-[pulse_3s_infinite]">
                         <Cpu size={64} className="text-cyan-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tighter">AQUA-SYNTH™</h3>
                      <span className="inline-block px-3 py-1 rounded bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">Versão v9.0 Beta</span>
                   </div>

                   {/* Cards Flutuantes */}
                   <div className="absolute bottom-8 left-8 right-8 bg-[#151E32]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-1.5 bg-emerald-900/30 rounded-full border border-emerald-500/30">
                            <CheckCircle2 size={16} className="text-emerald-400" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Bio-Safe Certified</span>
                      </div>
                      <p className="text-slate-400 text-xs font-medium leading-relaxed">Segurança total para operadores e ecossistemas sintéticos.</p>
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Dados Técnicos */}
            <div className="w-full lg:w-1/2">
               <FadeIn delay={0.2}>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm font-mono">Specs Técnicas</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                   Arquitetura <br/> Microbiológica.
                 </h2>
                 
                 <div className="space-y-8">
                   {/* Princípio Ativo Destaque */}
                   <div className="flex gap-6 p-6 bg-[#0F172A] rounded-2xl border border-white/5 shadow-sm hover:border-cyan-500/30 transition-colors">
                      <div className="shrink-0">
                         <div className="w-12 h-12 bg-cyan-950/30 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/10">
                            <Microscope size={24} />
                         </div>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-white mb-1">Núcleo Ativo</h4>
                         <p className="text-slate-400 text-sm leading-relaxed">Blend exclusivo de nanobots biológicos com alta resistência osmótica e capacidade de auto-replicação.</p>
                      </div>
                   </div>

                   {/* Grid de Propriedades */}
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Estabilidade pH", val: "Nível 6.5 - 7.5" },
                        { label: "Densidade Mol.", val: "1.05 g/cm³" },
                        { label: "Solubilidade", val: "100% Líquida" },
                        { label: "Taxa Diluição", val: "1:10.000" },
                      ].map((spec, i) => (
                        <div key={i} className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 hover:bg-[#1E293B] transition-colors">
                           <span className="block text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-wider">{spec.label}</span>
                           <span className="block text-xl font-mono font-bold text-cyan-100">{spec.val}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="pt-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:gap-5 transition-all text-sm uppercase tracking-wide border-b-2 border-cyan-500/30 pb-1 hover:border-cyan-400 font-mono"
                      >
                         <FileText size={18} />
                         Download Arquivo Confidencial
                      </a>
                   </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. DASHBOARD DE RESULTADOS (DARK MODE OTIMIZADO)
      ====================================================== */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden border-t border-white/5">
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
               <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Métricas de Performance</h2>
                  <p className="text-slate-400">Dados de telemetria coletados em planta de processamento (Setor Alfa) - Ciclo de 20 rotações.</p>
               </div>
               <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mt-4 md:mt-0 animate-pulse">
                  <Activity size={16} /> Live Data Stream
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* Painel DBO (Entropia) */}
               <FadeIn delay={0.1} className="bg-[#151E32] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                  
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Entropia Orgânica</h3>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Nível de Toxicidade A</span>
                     </div>
                     <span className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg text-lg font-bold border border-emerald-500/20 font-mono">-77%</span>
                  </div>
                  
                  <div className="space-y-8">
                     {/* Barra Entrada */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-400 font-mono">
                           <span>Input Bruto</span>
                           <span>4.728 U/L</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-slate-600 rounded-full"></div>
                        </div>
                     </div>
                     {/* Barra Saída */}
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-cyan-300 font-bold font-mono">
                           <span>Output (Aetheris)</span>
                           <span>1.090 U/L</span>
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

               {/* Painel DQO (Química) */}
               <FadeIn delay={0.2} className="bg-[#151E32] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                  
                  <div className="flex justify-between items-start mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Demanda Química</h3>
                        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Resistência Molecular</span>
                     </div>
                     <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-lg font-bold border border-blue-500/20 font-mono">-72%</span>
                  </div>
                  
                  <div className="space-y-8">
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-slate-400 font-mono">
                           <span>Input Bruto</span>
                           <span>Referência 100%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-slate-600 rounded-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2 text-blue-300 font-bold font-mono">
                           <span>Output (Aetheris)</span>
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
          5. CTA FINAL (FUTURISTA)
      ====================================================== */}
      <section className="py-32 px-6 flex justify-center bg-[#00050A] border-t border-white/5">
        <div className="max-w-5xl w-full bg-gradient-to-br from-[#0B1121] to-[#020617] border border-white/10 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-cyan-900/10">
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-emerald-950/30 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                 <Zap size={14} fill="currentColor" /> Eficiência Energética Maximizada
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Transforme Passivo em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Ativo Estratégico.</span>
              </h2>
              
              <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Conformidade com protocolos ambientais globais, redução drástica de custos operacionais e segurança de dados biológicos.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                 <a 
                   href="#" 
                   className="flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-cyan-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-2xl hover:-translate-y-1"
                 >
                    <Phone size={20} /> Contatar Comando
                 </a>
                 <a 
                   href="#" 
                   className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all hover:bg-cyan-950/30"
                 >
                    Solicitar Deploy
                 </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}