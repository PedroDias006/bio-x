"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, ArrowRight, Database, Microscope, Minus, Plus, Zap } from "lucide-react";
import { useRef, useState } from "react";

/* =========================================================================
   DADOS & CONFIGURAÇÕES (PROTOCOLOS AETHERIS BIO-Z)
   ========================================================================= */
const PROCESS_STEPS = [
  {
    id: "01",
    title: "Sintetização de Substrato",
    subtitle: "Ignitor Biológico de Solo",
    desc: "A tecnologia AETHERIS atua como um sistema de overclocking para a microbiota. Nanovetores desbloqueiam minerais complexos, preparando o terreno para biomassa de alta densidade.",
    img: "/images/solo.jpg", 
    icon: <Database className="text-amber-700" size={24} />,
    details: [
      "Otimização de CTC: +30% de retenção iônica",
      "Solubilização de Fósforo: >85% de eficiência via agentes",
      "Descompactação estrutural via expansão radicular assistida",
      "Ativação enzimática Beta-glicosidase Nível 4"
    ]
  },
  {
    id: "02",
    title: "Vetor de Biomassa",
    subtitle: "Otimização de Captação Energética",
    desc: "Sistemas radiculares profundos acessam camadas de nutrientes inalcançáveis. O output vegetal apresenta densidade proteica e Brix molecular superior aos padrões de mercado.",
    img: "/images/pasto.jpg",
    icon: <Activity className="text-amber-700" size={24} />,
    details: [
      "Proteína Bruta (PB): Estabilizada em 22% na MS",
      "Massa Foliar: Geometria otimizada para pastejo de precisão",
      "Índice de Brix (Sacarose): Estágio Superior a 12°",
      "Resiliência Térmica: Arquitetura celular protegida"
    ]
  },
  {
    id: "03",
    title: "Conversão de Massa Crítica",
    subtitle: "Performance Sistêmica Animal",
    desc: "Unidades biológicas (rebanho) com ecossistema ruminal otimizado convertem biomassa em peso com perda mínima de energia. Carcaça de alta densidade e imunidade blindada.",
    img: "/images/animal.jpg",
    icon: <Microscope className="text-amber-700" size={24} />,
    details: [
      "GMD (Output Diário): 1.2kg em sistema de pastejo",
      "Eficiência de Conversão: Upgrade de 15% no processamento",
      "Yield de Carcaça: +2.5 pontos percentuais via Bio-Z",
      "Redução de Emissões Entéricas (Standard Sustentável)"
    ]
  }
];

// Tipagem automática baseada na estrutura dos seus dados (A Vacina do TypeScript)
type ProcessStepType = typeof PROCESS_STEPS[0];

export default function AetherisBioZootecnia() {
  // Correção 1: Avisando ao TypeScript que a referência é de uma DIV
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      
      {/* BARRA DE TELEMETRIA */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 z-[100] origin-left shadow-[0_0_20px_rgba(217,119,6,0.5)]"
      />

      {/* ======================================================
          1. HERO: BIO-Z INTERFACE
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0A0A0A]">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <video
            src="/videos/saude-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-60 grayscale-[30%] contrast-125"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-1 rounded border border-white/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white font-bold">Protocolo Bio-Z v.26 Instalado</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6 text-white uppercase">
            ENGENHARIA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-amber-500">
              ZOOTÉCNICA
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Otimizamos o ciclo de conversão de energia do solo ao rebanho. 
            <strong className="text-white font-bold block mt-2 font-mono uppercase tracking-widest text-sm">Output de alta performance via biossíntese.</strong>
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="/carrinho" className="group relative px-10 py-5 bg-amber-600 text-black font-black rounded-sm overflow-hidden transition-all hover:bg-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2 uppercase text-xs tracking-widest">
              INICIAR DEPLOY <ArrowRight size={16} />
            </a>
            <a href="#sticky-scroll" className="px-10 py-5 bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors font-mono text-xs uppercase tracking-widest flex items-center justify-center rounded-sm backdrop-blur-md">
              Acessar Telemetria ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. STICKY SCROLL: O CICLO SINTÉTICO
      ====================================================== */}
      <section id="sticky-scroll" className="relative bg-white py-32 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:max-w-2xl">
             <div className="w-12 h-1 bg-amber-600 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tighter">
              Ciclo de <br /><span className="text-amber-700 font-mono uppercase italic text-3xl md:text-5xl">Transmutação de Massa.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Um pipeline sistêmico em três fases projetado para extrair o potencial termodinâmico máximo do bioma.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

            <div className="flex flex-col gap-40">
              {PROCESS_STEPS.map((step, index) => (
                <StickyCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3. SCANNER DE PERFORMANCE
      ====================================================== */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 uppercase tracking-tighter">Telemetria de Ganho</h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              Análise comparativa de densidade orgânica entre sistemas legados e o protocolo ativado AETHERIS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
            {/* LADO A: LEGACY */}
            <div className="relative group overflow-hidden rounded-sm border border-slate-200 bg-slate-100 h-[400px] md:h-full">
               <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 z-20" />
               <img src="/images/antes.jpg" className="w-full h-full object-cover grayscale brightness-75 transition-opacity duration-500" />
               
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-slate-900 text-white px-6 py-1 font-mono text-[10px] uppercase tracking-widest shadow-xl">
                     Sistema Convencional (Legacy)
                  </div>
                  <div className="mt-6 text-center bg-white p-6 shadow-2xl border border-slate-100">
                     <span className="block text-4xl font-black text-slate-400">-15%</span>
                     <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Captação Fotônica</span>
                  </div>
               </div>
            </div>

            {/* LADO B: AETHERIS */}
            <div className="relative group overflow-hidden rounded-sm border border-amber-500/20 bg-white shadow-2xl h-[400px] md:h-full">
               <div className="absolute top-0 left-0 w-full h-1 bg-amber-600 z-20 shadow-[0_0_15px_#d97706]" />
               <img src="/images/depois.jpg" className="w-full h-full object-cover contrast-125 transition-transform duration-700 group-hover:scale-105" />
               
               <div className="absolute top-0 w-full h-[2px] bg-amber-500 shadow-[0_0_20px_#d97706] animate-scan opacity-80" />

               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-amber-600 text-white px-6 py-1 font-mono text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(217,119,6,0.5)]">
                     Protocolo Aetheris Bio-Z
                  </div>
                  <div className="mt-6 text-center bg-white p-6 shadow-2xl border border-amber-100">
                     <span className="block text-4xl font-black text-slate-900">+29.1%</span>
                     <span className="text-[10px] text-amber-700 font-bold uppercase flex items-center justify-center gap-2 tracking-widest">
                        <Zap size={10} fill="currentColor" /> Conversão Sistêmica
                     </span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. UPLINK FINAL
      ====================================================== */}
      <section className="py-32 px-6 flex justify-center bg-white">
        <div className="max-w-5xl w-full bg-[#050505] p-12 md:p-24 rounded-sm relative overflow-hidden text-center group shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
           
           <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
           <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
           <h2 className="relative z-10 text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
             Inicie o Protocolo de <span className="text-amber-500">Massa Crítica.</span>
           </h2>
           <p className="relative z-10 text-slate-500 mb-12 max-w-xl mx-auto text-lg font-light font-mono">
             Não opere em regimes sub-otimizados. Sincronize seu rebanho com a biotecnologia Aetheris agora.
           </p>
           
           <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
              <a href="/carrinho" className="flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-sm font-black hover:bg-amber-500 transition-all duration-300 uppercase text-xs tracking-widest">
                 ADQUIRIR UNIDADES <ArrowRight size={16} />
              </a>
              <a href="/contato" className="flex items-center justify-center gap-3 border border-white/20 text-white px-12 py-5 rounded-sm font-bold hover:border-amber-500 hover:text-amber-500 bg-transparent transition-all duration-300 uppercase text-xs tracking-widest font-mono">
                 Contactar Engenharia
              </a>
           </div>
        </div>
      </section>

    </div>
  );
}

/* =========================================================================
   SUB-COMPONENTES: STICKY CARD (EXPANDABLE HUB)
   ========================================================================= */
// Correção 2: Substituindo o 'any' pela tipagem real dos passos
function StickyCard({ step, index }: { step: ProcessStepType, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start"
    >
      <div className={`relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
         <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-100 shadow-2xl group">
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-amber-500 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-amber-500 z-20" />
            
            <img 
                src={step.img} 
                alt={step.title} 
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110"
            />
            
            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur px-4 py-1 text-amber-500 font-mono text-[10px] border border-white/10 font-bold uppercase tracking-[0.2em]">
                DATA_LOG_0{step.id}
            </div>
         </div>
      </div>

      <div className={`${index % 2 !== 0 ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
         <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
             <span className="text-5xl md:text-7xl font-black text-slate-100 select-none font-mono">0{step.id}</span>
             <div className="p-3 bg-slate-50 rounded border border-slate-100 text-amber-700 shadow-sm">
                {step.icon}
             </div>
         </div>
         
         <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tighter">{step.title}</h3>
         <p className="text-amber-600 font-mono text-xs tracking-[0.3em] mb-8 uppercase font-bold">{step.subtitle}</p>
         
         <p className="text-slate-500 text-lg leading-relaxed font-light mb-8 max-w-xl">
            {step.desc}
         </p>

         <div className={`flex flex-col ${index % 2 !== 0 ? 'items-end' : 'items-start'}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-2 mb-4 border-b ${
                  isOpen ? "border-amber-600 text-amber-700" : "border-slate-200 hover:border-amber-500 hover:text-amber-700"
                }`}
            >
               {isOpen ? <Minus size={14} /> : <Plus size={14} />} 
               {isOpen ? "Ocultar Dados" : "Relatório Técnico"}
            </button>

            <AnimatePresence>
                {isOpen && (
                  <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden w-full"
                  >
                      <div className={`bg-slate-50/50 border border-slate-100 rounded-sm p-6 ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                         <ul className="space-y-4">
                            {step.details.map((detail: string, i: number) => (
                              <li key={i} className={`flex items-center gap-3 text-slate-600 text-xs font-mono font-medium ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                 <div className="w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0" />
                                 {detail}
                              </li>
                            ))}
                         </ul>
                      </div>
                  </motion.div>
                )}
            </AnimatePresence>
         </div>
      </div>
    </motion.div>
  );
}