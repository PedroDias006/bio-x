"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Feather, Leaf, Minus, Plus, ShieldCheck, Wind } from "lucide-react";
import Image from "next/image"; // <-- Componente otimizado do Next.js adicionado aqui
import { useRef, useState } from "react";

/* =========================================================================
   DADOS & CONFIGURAÇÕES (LINHA VITALS)
   ========================================================================= */
const PROCESS_STEPS = [
  {
    id: "01",
    title: "Pride Swine",
    subtitle: "Suinocultura Sustentável",
    desc: "Aditivo natural voltado ao bem-estar e ao equilíbrio ambiental em sistemas de criação de suínos. Auxilia no manejo de resíduos, contribuindo para um ambiente com menor odor e muito mais salubridade.",
    img: "/images/suinos.jpg", 
    icon: <Wind className="text-teal-600" size={24} />,
    details: [
      "Redução drástica na emissão de odores no galpão",
      "Melhoria contínua no manejo de resíduos e dejetos",
      "Fórmula 100% à base de derivados vegetais",
      "Praticidade total: sem exigência de registros complexos"
    ]
  },
  {
    id: "02",
    title: "Pride Chicken",
    subtitle: "Avicultura em Equilíbrio",
    desc: "Desenvolvido para ajudar a manter o equilíbrio do ambiente aviário. Contribui para a estabilidade do sistema, favorecendo o bem-estar das aves e reduzindo a carga de estresse ambiental.",
    img: "/images/aves.jpg",
    icon: <Feather className="text-teal-600" size={24} />,
    details: [
      "Controle natural da qualidade ambiental e do ar",
      "Apoio direto à sanidade e bem-estar do lote",
      "Redução de odores e manejo facilitado da cama de aviário",
      "Aplicação prática e totalmente livre de burocracias"
    ]
  },
  {
    id: "03",
    title: "Pride Cattle",
    subtitle: "Pecuária Saudável",
    desc: "Aditivo ambiental para sistemas de pecuária. Mantém o ambiente da fazenda mais equilibrado, favorecendo o conforto do gado e apoiando uma produção visivelmente mais saudável.",
    img: "/images/gado.jpg",
    icon: <Leaf className="text-teal-600" size={24} />,
    details: [
      "Estabilidade do ecossistema e ambiente de criação",
      "Promoção do conforto e bem-estar animal",
      "Composição baseada em ingredientes de origem vegetal",
      "Isento de complicações e exigências regulatórias"
    ]
  }
];

type ProcessStepType = typeof PROCESS_STEPS[0];

export default function VitalsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* BARRA DE PROGRESSO */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 z-[100] origin-left shadow-[0_0_20px_rgba(20,184,166,0.5)]"
      />

      {/* ======================================================
          1. HERO: BEM-ESTAR AMBIENTAL
      ====================================================== */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0A0A0A]">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
          <video
            src="/videos/vitals-hero.mp4" 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-60 grayscale-[20%] contrast-110"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white font-bold">Linha Vitals</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6 text-white uppercase">
            BEM-ESTAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-teal-500">
              AMBIENTAL
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Aditivos naturais que respeitam os processos biológicos para um sistema de criação sem estresse. 
            <strong className="text-teal-400 font-bold block mt-2 font-mono uppercase tracking-widest text-sm">Praticidade sem burocracias regulatórias.</strong>
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="#solucoes" className="group relative px-10 py-5 bg-teal-500 text-white font-black rounded-sm overflow-hidden transition-all hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center gap-2 uppercase text-xs tracking-widest">
              VER SOLUÇÕES <ArrowRight size={16} />
            </a>
            <a href="#contato" className="px-10 py-5 bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors font-mono text-xs uppercase tracking-widest flex items-center justify-center rounded-sm backdrop-blur-md">
              Falar com Especialista ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. STICKY SCROLL: AS 3 SOLUÇÕES
      ====================================================== */}
      <section id="solucoes" className="relative bg-white py-32 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:max-w-3xl">
             <div className="w-12 h-1 bg-teal-500 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tighter">
              Soluções Diretas para <br /><span className="text-teal-600 font-mono uppercase italic text-3xl md:text-5xl">Cada Sistema.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Nossa linha foi desenhada com extratos vegetais específicos para atender as demandas únicas de manejo de suínos, aves e gado, promovendo salubridade sem complicações.
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
          3. IMPACTO NO MANEJO (FOCO EM BENEFÍCIOS REAIS)
      ====================================================== */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 uppercase tracking-tighter">Impacto no Manejo</h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              A linha Vitals atua de forma contínua para garantir um ecossistema produtivo mais limpo, prático e focado no desenvolvimento animal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <Wind size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualidade do Ar</h3>
              <p className="text-slate-600 leading-relaxed">
                Degradação natural acelerada da matéria orgânica, reduzindo drasticamente os odores no ambiente e melhorando a salubridade dos galpões.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bem-Estar Animal</h3>
              <p className="text-slate-600 leading-relaxed">
                A redução de gases irritantes e a melhoria do sistema de criação diminuem o estresse do rebanho, favorecendo o crescimento saudável.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Manejo Prático</h3>
              <p className="text-slate-600 leading-relaxed">
                Formulação 100% natural. Solução extremamente prática para o produtor, totalmente isenta das complexidades burocráticas e regulatórias.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. CTA FINAL
      ====================================================== */}
      <section id="contato" className="py-32 px-6 flex justify-center bg-white">
        <div className="max-w-5xl w-full bg-[#050505] p-12 md:p-24 rounded-sm relative overflow-hidden text-center group shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
           
           <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
           <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
           <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
             Transforme a saúde da <span className="text-teal-400">sua criação.</span>
           </h2>
           <p className="relative z-10 text-slate-400 mb-12 max-w-xl mx-auto text-lg font-light">
             Garanta um ambiente livre de estresse, com redução de odores e salubridade, sem se preocupar com documentações complexas.
           </p>
           
           <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
              <a href="/contato" className="flex items-center justify-center gap-3 bg-teal-500 text-white px-12 py-5 rounded-sm font-black hover:bg-teal-400 transition-all duration-300 uppercase text-xs tracking-widest shadow-lg shadow-teal-500/30">
                 FALAR COM CONSULTOR <ArrowRight size={16} />
              </a>
              <a href="/produtos" className="flex items-center justify-center gap-3 border border-white/20 text-white px-12 py-5 rounded-sm font-bold hover:border-teal-400 hover:text-teal-400 bg-transparent transition-all duration-300 uppercase text-xs tracking-widest font-mono">
                 Conhecer os Produtos
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
         {/* Container da imagem precisa ser relative para o next/image com layout fill funcionar */}
         <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-100 shadow-2xl group">
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-teal-500 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-teal-500 z-20" />
            
            {/* Tag otimizada Image do Next.js */}
            <Image 
                src={step.img} 
                alt={step.title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110"
            />
            
            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur px-4 py-1 text-teal-400 font-mono text-[10px] border border-white/10 font-bold uppercase tracking-[0.2em] z-20">
                PRODUTO_0{step.id}
            </div>
         </div>
      </div>

      <div className={`${index % 2 !== 0 ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
         <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
             <span className="text-5xl md:text-7xl font-black text-slate-100 select-none font-mono">0{step.id}</span>
             <div className="p-3 bg-teal-50 rounded-full border border-teal-100 text-teal-600 shadow-sm">
                {step.icon}
             </div>
         </div>
         
         <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tighter">{step.title}</h3>
         <p className="text-teal-600 font-mono text-xs tracking-[0.3em] mb-8 uppercase font-bold">{step.subtitle}</p>
         
         <p className="text-slate-500 text-lg leading-relaxed font-light mb-8 max-w-xl">
            {step.desc}
         </p>

         <div className={`flex flex-col ${index % 2 !== 0 ? 'items-end' : 'items-start'}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-2 mb-4 border-b ${
                  isOpen ? "border-teal-500 text-teal-600" : "border-slate-200 hover:border-teal-400 hover:text-teal-600"
                }`}
            >
               {isOpen ? <Minus size={14} /> : <Plus size={14} />} 
               {isOpen ? "Ocultar Benefícios" : "Ver Benefícios"}
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
                              <li key={i} className={`flex items-center gap-3 text-slate-600 text-sm font-medium ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                 <div className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0" />
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