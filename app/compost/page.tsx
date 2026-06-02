"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  CheckCircle2,
  Globe2,
  Leaf,
  Play,
  Recycle,
  RefreshCcw,
  ShieldCheck,
  Sprout,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================================
   DADOS EXTRAÍDOS DO MATERIAL OFICIAL PRIDE COMPOST
   ========================================================================= */

const FLYER_BENEFITS = [
  { title: "Transforma Resíduos", desc: "Favorece a transformação e estabilização da matéria orgânica.", icon: RefreshCcw },
  { title: "Reduz Odores", desc: "Auxilia na redução de odores ofensivos gerados no processo.", icon: Wind },
  { title: "Qualidade do Composto", desc: "Contribui para um composto mais estável, homogêneo e rico.", icon: Leaf },
  { title: "Processo Eficiente", desc: "Acelera a maturação e padroniza o resultado final.", icon: BarChart3 },
  { title: "Manejo Sustentável", desc: "Solução segura, natural e alinhada às práticas ESG.", icon: ShieldCheck },
];

const FLYER_APPLICATIONS = [
  { title: "Pilhas de Compostagem", desc: "Ideal para pilhas de diferentes materiais orgânicos.", icon: Sprout },
  { title: "Resíduos Agroindustriais", desc: "Auxilia no manejo de resíduos de origem vegetal e animal.", icon: Recycle },
  { title: "Compostagem de Esterco", desc: "Contribui para a estabilização e qualidade do composto final.", icon: Leaf },
  { title: "Resíduos Urbanos Verdes", desc: "Suporte ao processo de transformação de podas e orgânicos.", icon: Globe2 },
  { title: "Economia Circular", desc: "Transforma resíduos em recursos, gerando sustentabilidade.", icon: RefreshCcw },
];

const FLYER_DIFFERENTIALS = [
  { 
    title: "Compostos Funcionais", 
    desc: "Formulação à base de compostos orgânicos e extratos naturais.", 
    icon: Leaf,
    image: "/images/compost-diff-1.webp"
  },
  { 
    title: "Redução de Impactos", 
    desc: "Auxilia na redução de odores e no melhor equilíbrio do processo ambiental.", 
    icon: Wind,
    image: "/images/compost-diff-2.webp"
  },
  { 
    title: "Eficiência no Processo", 
    desc: "Favorece a decomposição e acelera a maturação da matéria orgânica.", 
    icon: BarChart3,
    image: "/images/compost-diff-3.webp"
  },
  { 
    title: "Segurança e Confiança", 
    desc: "Solução natural, segura e de fácil aplicação nas pilhas e leiras.", 
    icon: ShieldCheck,
    image: "/images/compost-diff-4.webp"
  },
];

const TRANSFORMATION_STEPS = [
  {
    label: "01",
    title: "Receber",
    desc: "Resíduos agroindustriais, esterco, podas e restos orgânicos entram em uma rotina de manejo estruturada.",
  },
  {
    label: "02",
    title: "Estabilizar",
    desc: "A tecnologia Pride auxilia o equilíbrio, reduz odores e acelera a decomposição homogênea da matéria.",
  },
  {
    label: "03",
    title: "Valorizar",
    desc: "O composto final torna-se um recurso rico, estável e perfeitamente alinhado à economia circular agrícola.",
  },
];

/* =========================================================================
   PÁGINA PRINCIPAL
   ========================================================================= */
export default function PrideCompostPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Estado para a galeria interativa de diferenciais
  const [activeDiff, setActiveDiff] = useState(0);
  // Estado para o fluxo de transformação
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="bg-[#F5F2E9] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#D4A017]/20 selection:text-[#111A14]">
      
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4A017] z-[100] origin-left shadow-[0_0_15px_rgba(212,160,23,0.4)]"
      />

      {/* ======================================================
          1. HERO EXCLUSIVO (EDITORIAL SPLIT LAYOUT)
      ====================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col lg:flex-row overflow-hidden bg-[#111A14]">
        
        {/* === LADO ESQUERDO: TEXTO E COR SÓLIDA === */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 lg:pl-12 xl:pl-24 pt-32 pb-12 lg:py-20 relative z-20 bg-[#111A14]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4A017]/30 px-5 py-2 rounded-sm bg-white/5 backdrop-blur-md">
              <Recycle size={14} className="text-[#D4A017]" strokeWidth={2} />
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                Pride Biosolutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-normal uppercase tracking-wide leading-[1.05] text-white mb-8">
              PRIDE <br />
              <span className="text-[#D4A017]">COMPOST</span>
            </h1>

            <p className="text-lg md:text-xl font-light leading-relaxed text-[#E0DED8] mb-12 border-l-2 border-[#D4A017] pl-6">
              Transformação orgânica inteligente. Resultados que geram valor.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-4 rounded-sm bg-[#D4A017] px-10 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#111A14] transition-all hover:bg-[#B88A14] shadow-lg w-fit"
            >
              Falar com Engenharia <ArrowRight size={16} />
            </Link>

            {/* Produto aparece aqui embaixo no Mobile */}
            <div className="mt-16 flex justify-center lg:hidden relative z-30">
              <Image
                src="/images/compost-produto.webp"
                alt="Bombona Pride Compost"
                width={280}
                height={380}
                priority
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>
        </div>

        {/* === LADO DIREITO: IMAGEM FOTOGRÁFICA === */}
        <div className="w-full lg:w-[55%] relative min-h-[50vh] lg:h-auto z-0 flex flex-col justify-end">
          {/* Background Otimizado */}
          <div className="absolute inset-0">
            <Image
              src="/images/compost-hero-bg.webp"
              alt="Composto Orgânico"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              quality={70}
              className="object-cover opacity-60 mix-blend-luminosity lg:mix-blend-normal"
            />
            {/* Gradientes para fusão invisível entre as telas e base */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#111A14] via-[#111A14]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111A14]/40 to-transparent lg:hidden" />
          </div>

          {/* Benefícios Integrados na base da Imagem */}
          <div className="relative z-20 w-full p-6 lg:p-12 bg-gradient-to-t from-[#111A14] via-[#111A14]/90 to-transparent pt-32 lg:pt-48 mt-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-left md:text-center">
              {FLYER_BENEFITS.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-start md:items-center group"
                >
                  <item.icon className="text-[#D4A017] mb-4 transition-transform duration-500 group-hover:-translate-y-2" size={28} strokeWidth={1.5} />
                  <h4 className="text-[11px] font-serif uppercase tracking-widest text-white mb-2 leading-relaxed">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-light leading-relaxed text-[#888888] md:px-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* === PRODUTO FLUTUANTE NO DESKTOP (QUEBRA A DIVISÃO DA TELA) === */}
        <motion.div
          className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, y: "-40%" }}
          animate={{ opacity: 1, scale: 1, y: "-50%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/compost-produto.webp"
            alt="Bombona Pride Compost"
            width={400}
            height={500}
            priority
            quality={85}
            className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

      </section>

      {/* ======================================================
          2. CICLO DE TRANSFORMAÇÃO (PIPELINE INTERATIVO)
      ====================================================== */}
      <section className="py-24 md:py-32 bg-[#F5F2E9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#888888] mb-4">
              A Lógica da Operação
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] leading-tight">
              De resíduo a recurso, <br />
              <span className="text-[#D4A017] italic">com inteligência.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]">
            {TRANSFORMATION_STEPS.map((step, index) => {
              const isActive = hoveredStep === index;
              const isAnyActive = hoveredStep !== null;
              const isLast = index === TRANSFORMATION_STEPS.length - 1;

              return (
                <div key={step.label} className="flex-1 flex flex-col lg:flex-row items-stretch">
                  {/* Card Interativo */}
                  <motion.div
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    layout
                    className={`
                      relative flex-1 p-8 md:p-10 rounded-sm border transition-all duration-500 cursor-default overflow-hidden
                      ${isActive ? 'bg-[#111A14] border-[#111A14] shadow-2xl scale-[1.02] z-20' : 'bg-white border-[#E0DED8]'}
                      ${isAnyActive && !isActive ? 'opacity-50 scale-[0.98]' : 'opacity-100'}
                    `}
                    style={{ flexGrow: isActive ? 1.5 : 1 }}
                  >
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <p className={`font-mono text-sm font-black mb-8 transition-colors ${isActive ? 'text-[#D4A017]' : 'text-[#888888]'}`}>
                          {step.label}
                        </p>
                        <h3 className={`text-2xl md:text-3xl font-serif uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-[#1A1A1A]'}`}>
                          {step.title}
                        </h3>
                      </div>
                      
                      <motion.p 
                        className={`mt-6 text-sm font-light leading-relaxed transition-colors ${isActive ? 'text-[#E0DED8]' : 'text-[#666666]'}`}
                      >
                        {step.desc}
                      </motion.p>
                    </div>

                    {/* Fundo Decorativo no Hover */}
                    <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4A017] rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-20' : 'opacity-0'}`} />
                  </motion.div>

                  {/* Seta Conectora (Escondida no mobile) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center w-12 shrink-0">
                      <ArrowRight className="text-[#D4A017] opacity-50" size={24} strokeWidth={1} />
                    </div>
                  )}
                  {/* Seta Conectora Mobile */}
                  {!isLast && (
                    <div className="flex lg:hidden items-center justify-center h-8 shrink-0 my-2">
                      <ArrowRight className="text-[#D4A017] opacity-50 rotate-90" size={24} strokeWidth={1} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          3. TECNOLOGIA QUE TRANSFORMA (O LADO DIREITO SUPERIOR DO PANFLETO)
      ====================================================== */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Bloco de Texto Esquerdo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:w-5/12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] leading-[1.2] mb-8">
                Tecnologia que transforma matéria orgânica <br />
                <span className="text-[#D4A017] italic">em soluções sustentáveis.</span>
              </h2>
              <p className="text-base font-light leading-relaxed text-[#666666] mb-12 border-l-2 border-[#D4A017] pl-6">
                A Pride Compost é uma solução tecnológica desenvolvida para otimizar os processos de transformação e estabilização da matéria orgânica, favorecendo o manejo sustentável, a redução de odores e a valorização dos compostos orgânicos.
              </p>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-4 rounded-sm bg-[#111A14] px-10 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#D4A017] transition-colors hover:bg-[#1A241D] shadow-lg"
              >
                Detalhes da Formulação <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Imagem Panorâmica Direita */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-7/12 relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/compost-pilhas.webp"
                alt="Pilhas de Compostagem"
                fill
                quality={75}
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#111A14]/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Grade de Aplicações Infográfico */}
          <div className="mt-32">
            <h3 className="text-lg font-serif uppercase tracking-widest text-[#111A14] mb-12 text-center border-b border-[#E0DED8] pb-4">
              Aplicações
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {FLYER_APPLICATIONS.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F5F2E9] border border-[#E0DED8] flex items-center justify-center mb-6 group-hover:border-[#D4A017] transition-colors">
                    <item.icon className="text-[#111A14] group-hover:text-[#D4A017] transition-colors" size={28} strokeWidth={1.2} />
                  </div>
                  <h4 className="text-[11px] font-serif uppercase tracking-widest text-[#1A1A1A] mb-3 leading-relaxed">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-light leading-relaxed text-[#666666]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. DIFERENCIAIS EM FOCO (HOVER GALLERY INTERATIVA)
      ====================================================== */}
      <section className="py-32 bg-[#111A14] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#D4A017] text-3xl md:text-4xl font-serif font-normal uppercase tracking-widest mb-6">
              Diferenciais Pride
            </h2>
            <p className="text-base font-light text-[#888888] max-w-2xl">
              Passe o mouse sobre os diferenciais para visualizar o impacto operacional no campo.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-auto lg:h-[500px]">
            
            {/* Lista Interativa Esquerda */}
            <div className="lg:w-5/12 flex flex-col justify-center gap-2">
              {FLYER_DIFFERENTIALS.map((item, index) => {
                const isActive = activeDiff === index;
                return (
                  <div 
                    key={item.title}
                    onMouseEnter={() => setActiveDiff(index)}
                    className={`
                      p-6 rounded-sm border-l-4 cursor-pointer transition-all duration-300
                      ${isActive ? 'bg-[#1A241D] border-[#D4A017]' : 'bg-transparent border-transparent hover:bg-white/5'}
                    `}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <item.icon className={isActive ? 'text-[#D4A017]' : 'text-[#888888]'} size={24} strokeWidth={1.5} />
                      <h3 className={`text-sm font-serif uppercase tracking-wider ${isActive ? 'text-white' : 'text-[#888888]'}`}>
                        {item.title}
                      </h3>
                    </div>
                    {/* Apenas mostra a descrição se estiver ativo no desktop, ou sempre no mobile */}
                    <p className={`text-xs font-light text-[#E0DED8] leading-relaxed mt-2 lg:transition-all lg:duration-300 ${isActive ? 'lg:opacity-100 lg:h-auto' : 'lg:opacity-0 lg:h-0 overflow-hidden'}`}>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Imagem Principal Direita (Muda com o Hover) */}
            <div className="lg:w-7/12 relative h-[300px] lg:h-full rounded-sm overflow-hidden bg-black shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiff}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={FLYER_DIFFERENTIALS[activeDiff].image}
                    alt={FLYER_DIFFERENTIALS[activeDiff].title}
                    fill
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111A14] via-transparent to-transparent opacity-90" />
                  
                  {/* Badge na Imagem */}
                  <div className="absolute bottom-8 left-8 bg-[#D4A017] px-4 py-2 rounded-sm shadow-lg">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#111A14]">
                      {FLYER_DIFFERENTIALS[activeDiff].title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          5. DEPOIMENTO LADO-A-LADO
      ====================================================== */}
      <section id="depoimento" className="bg-[#F5F2E9] py-24 md:py-32 px-6 border-t border-[#E0DED8]">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-5/12">
            <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-[#D4A017]/30 bg-white px-4 py-1.5 shadow-sm text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-[#111A14]">
              <Play size={12} fill="currentColor" className="text-[#D4A017]" />
              Resultado em Campo
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] mb-6">
              O impacto visual <br /> <span className="text-[#D4A017] italic">e biológico.</span>
            </h2>
            <p className="text-base font-light text-[#666666] leading-relaxed mb-8">
              Acompanhe a aplicação prática da tecnologia Pride Compost e visualize a diferença na estrutura, umidade e padronização do composto final.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#111A14] hover:text-[#D4A017] transition-colors border-b border-[#111A14] hover:border-[#D4A017] pb-1"
            >
              Consultar Especialista <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="overflow-hidden rounded-sm border border-[#E0DED8] bg-black shadow-xl relative">
              <video
                src="/videos/compost-hero.mp4"
                controls
                preload="none" 
                poster="/images/compost-poster.webp"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          BOTÃO FLUTUANTE DE VOLTAR AO TOPO
      ====================================================== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#D4A017] rounded-sm shadow-lg flex items-center justify-center text-[#111A14] hover:bg-[#B88A14] transition-colors duration-300"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}