"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Minus, Plus, Shield, Target, Zap } from "lucide-react";
import { useRef, useState } from "react";

/* =========================================================================
   DADOS & CONFIGURAÇÕES (Com Detalhes Técnicos para o Clique)
   ========================================================================= */
const PROCESS_STEPS = [
  {
    id: "01",
    title: "Solo Ativado",
    subtitle: "A Base Biológica",
    desc: "A tecnologia BIO-X atua como uma 'chave de ignição' para o solo. Microrganismos desbloqueiam minerais e estruturam a terra para pastagens de alta densidade.",
    img: "/images/solo.jpg", 
    icon: <Zap className="text-amber-700" size={24} />,
    // Informações que aparecem ao clicar:
    details: [
      "Incremento de CTC: +30% (Retenção iônica)",
      "Solubilização de Fósforo: >85% de eficiência",
      "Descompactação biológica até 40cm de profundidade",
      "Aumento da atividade da enzima Beta-glicosidase"
    ]
  },
  {
    id: "02",
    title: "Nutrição Vegetal",
    subtitle: "O Veículo de Energia",
    desc: "Raízes profundas buscam nutrientes que adubos comuns não alcançam. O capim cresce com mais massa foliar e densidade proteica real (Brix elevado).",
    img: "/images/pasto.jpg",
    icon: <Target className="text-amber-700" size={24} />,
    details: [
      "Proteína Bruta (PB): Aumento para 22% na MS",
      "Relação Folha/Haste: Otimizada para pastejo",
      "Teor de Brix (Açúcar): Superior a 12°",
      "Resistência à seca: Raízes 2x mais profundas"
    ]
  },
  {
    id: "03",
    title: "Performance Animal",
    subtitle: "O Resultado Final",
    desc: "Gado com rúmen saudável converte pasto em peso (GMD) muito mais rápido. Acabamento de carcaça superior, pelagem lisa e imunidade blindada.",
    img: "/images/animal.jpg",
    icon: <Shield className="text-amber-700" size={24} />,
    details: [
      "GMD (Ganho Médio Diário): 1.2kg a pasto",
      "Conversão Alimentar: Melhora de 15%",
      "Rendimento de Carcaça: +2.5 pontos percentuais",
      "Redução de metano entérico (Sustentabilidade)"
    ]
  }
];

export default function SaudeAnimalLight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      
      {/* BARRA DE PROGRESSO */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 z-[100] origin-left shadow-[0_0_20px_rgba(217,119,6,0.5)]"
      />

      {/* ======================================================
          1. HERO PECUÁRIA
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-stone-50">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <video
            src="/videos/saude-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-lg border border-white/50">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold">Protocolo V.25 Ativo</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 text-white drop-shadow-xl shadow-black/50">
            PRECISÃO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300 drop-shadow-sm">
              ZOOTÉCNICA
            </span>
          </h1>

          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-12 drop-shadow-md">
            Transformamos pastagens comuns em sistemas de alta conversão alimentar. 
            <strong className="text-white font-semibold block mt-2"> Sem mágica. Pura biotecnologia.</strong>
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="/carrinho" className="group relative px-8 py-4 bg-amber-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-amber-700 hover:shadow-xl hover:scale-105 shadow-lg shadow-black/20">
              <span className="relative flex items-center gap-2">INICIAR PROTOCOLO <ArrowRight size={18} /></span>
            </a>
            <a href="#sticky-scroll" className="px-8 py-4 bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors font-mono text-sm flex items-center justify-center rounded-lg backdrop-blur-md">
              ANÁLISE TÉCNICA ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. STICKY SCROLL TECH (INTERATIVO)
      ====================================================== */}
      <section id="sticky-scroll" className="relative bg-white py-32 px-6 border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              O Ciclo da <br /><span className="text-amber-700 italic font-serif">Produtividade.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Um processo de três etapas desenhado para maximizar a transferência de energia do solo para a carcaça.
            </p>
          </div>

          <div className="relative">
            {/* Linha conectora vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-200/0 via-amber-200/50 to-amber-200/0 hidden md:block" />

            <div className="flex flex-col gap-40">
              {PROCESS_STEPS.map((step, index) => (
                <StickyCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3. COMPARATIVO "SCANNER"
      ====================================================== */}
      <section className="py-32 px-6 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Raio-X do Ganho</h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Compare visualmente a diferença estrutural entre um sistema convencional e um sistema ativado com BIO-X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
            {/* LADO A: CONVENCIONAL */}
            <div className="relative group overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-inner h-[400px] md:h-full">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500 z-20" />
               <img src="/images/antes.jpg" className="w-full h-full object-cover grayscale transition-opacity duration-500" />
               
               <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />

               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-red-200 text-red-600 font-bold text-xs uppercase tracking-widest shadow-sm">
                     Sistema Convencional
                  </div>
                  <div className="mt-6 text-center bg-white/80 p-4 rounded-xl backdrop-blur-md shadow-lg border border-white">
                     <span className="block text-4xl font-bold text-slate-400">-15%</span>
                     <span className="text-xs text-slate-500 font-bold uppercase">Eficiência Fotossintética</span>
                  </div>
               </div>
            </div>

            {/* LADO B: BIO-X */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-amber-500/30 bg-white shadow-2xl shadow-amber-900/10 h-[400px] md:h-full">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-600 z-20 shadow-[0_0_20px_rgba(217,119,6,0.6)]" />
               <img src="/images/depois.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               
               <div className="absolute top-0 w-full h-[2px] bg-amber-500 shadow-[0_0_20px_#d97706] animate-scan opacity-80" />

               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-amber-600/30">
                     Sistema BIO-X
                  </div>
                  <div className="mt-6 text-center bg-white/90 p-4 rounded-xl backdrop-blur-md shadow-xl border border-amber-100">
                     <span className="block text-4xl font-bold text-slate-900">+29.1%</span>
                     <span className="text-xs text-amber-700 font-bold uppercase flex items-center justify-center gap-1">
                        <Zap size={10} fill="currentColor" /> Produtividade Validada
                     </span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. CTA FINAL
      ====================================================== */}
      <section className="py-32 px-6 flex justify-center bg-white border-t border-stone-200">
        <div className="max-w-5xl w-full bg-stone-50 border border-stone-200 p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden text-center group shadow-2xl shadow-stone-300/50">
           
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
           
           <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">
             Pronto para a <span className="text-amber-700">Evolução do Rebanho?</span>
           </h2>
           <p className="relative z-10 text-slate-500 mb-12 max-w-lg mx-auto text-lg">
             Não deixe sua produtividade estagnada. Fale com nossos especialistas técnicos e implemente o protocolo BIO-X.
           </p>
           
           <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
              <a href="/carrinho" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-lg font-bold hover:bg-amber-700 transition-colors duration-300 shadow-lg">
                 ADQUIRIR AGORA <ArrowRight size={20} />
              </a>
              <a href="/contato" className="flex items-center justify-center gap-3 border-2 border-stone-200 text-slate-700 px-10 py-5 rounded-lg font-bold hover:border-amber-700 hover:text-amber-700 bg-white transition-colors duration-300">
                 FALAR COM CONSULTOR
              </a>
           </div>
        </div>
      </section>

    </div>
  );
}

/* =========================================================================
   SUB-COMPONENTES (Sticky Card Light - EXPANDABLE)
   ========================================================================= */
function StickyCard({ step, index }: { step: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start" // items-start para não esticar
    >
      {/* Imagem (Tech Frame Light) */}
      <div className={`relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
         <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shadow-2xl shadow-stone-200 group">
            {/* Cantoneiras Tech (Douradas/Amber) */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-600 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-600 z-20" />
            
            <img 
               src={step.img} 
               alt={step.title} 
               className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-1 text-amber-800 font-mono text-xs border border-amber-200 font-bold rounded shadow-md">
               FIG_0{step.id}
            </div>
         </div>
      </div>

      {/* Conteúdo */}
      <div className={`${index % 2 !== 0 ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
         <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
             <span className="text-5xl md:text-7xl font-bold text-stone-200 select-none">{step.id}</span>
             <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-amber-700 shadow-sm">
                {step.icon}
             </div>
         </div>
         
         <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">{step.title}</h3>
         <p className="text-amber-700 font-mono text-sm tracking-widest mb-6 uppercase font-bold">{step.subtitle}</p>
         
         <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
            {step.desc}
         </p>

         {/* BOTÃO EXPANSÍVEL (ACCORDION) */}
         <div className={`flex flex-col ${index % 2 !== 0 ? 'items-end' : 'items-start'}`}>
            <button 
               onClick={() => setIsOpen(!isOpen)}
               className={`flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 transition-all pb-1 mb-4 ${
                  isOpen ? "border-amber-600 text-amber-700" : "border-slate-200 hover:border-amber-500 hover:text-amber-700"
               }`}
            >
               {isOpen ? <Minus size={16} /> : <Plus size={16} />} 
               {isOpen ? "FECHAR DETALHES" : "DETALHES TÉCNICOS"}
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
                     <div className={`bg-amber-50/50 border border-amber-100 rounded-xl p-6 shadow-sm ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                        <ul className="space-y-3">
                           {step.details.map((detail: string, i: number) => (
                              <li key={i} className={`flex items-center gap-3 text-slate-700 text-sm font-medium ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                 <CheckCircle2 size={16} className="text-amber-600 shrink-0" />
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