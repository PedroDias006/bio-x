"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Feather,
  Leaf,
  Minus,
  Plus,
  ShieldCheck,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { memo, useMemo, useRef, useState } from "react";

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
    iconName: "wind",
    details: [
      "Redução drástica na emissão de odores no galpão",
      "Melhoria contínua no manejo de resíduos e dejetos",
      "Fórmula 100% à base de derivados vegetais",
      "Praticidade total: sem exigência de registros complexos",
    ],
  },
  {
    id: "02",
    title: "Pride Chicken",
    subtitle: "Avicultura em Equilíbrio",
    desc: "Desenvolvido para ajudar a manter o equilíbrio do ambiente aviário. Contribui para a estabilidade do sistema, favorecendo o bem-estar das aves e reduzindo a carga de estresse ambiental.",
    img: "/images/aves.jpg",
    iconName: "feather",
    details: [
      "Controle natural da qualidade ambiental e do ar",
      "Apoio direto à sanidade e bem-estar do lote",
      "Redução de odores e manejo facilitado da cama de aviário",
      "Aplicação prática e totalmente livre de burocracias",
    ],
  },
  {
    id: "03",
    title: "Pride Cattle",
    subtitle: "Pecuária Saudável",
    desc: "Aditivo ambiental para sistemas de pecuária. Mantém o ambiente da fazenda mais equilibrado, favorecendo o conforto do gado e apoiando uma produção visivelmente mais saudável.",
    img: "/images/gado.jpg",
    iconName: "leaf",
    details: [
      "Estabilidade do ecossistema e ambiente de criação",
      "Promoção do conforto e bem-estar animal",
      "Composição baseada em ingredientes de origem vegetal",
      "Isento de complicações e exigências regulatórias",
    ],
  },
] as const;

type ProcessStepType = (typeof PROCESS_STEPS)[number];

function StepIcon({ name }: { name: ProcessStepType["iconName"] }) {
  if (name === "wind") return <Wind className="text-teal-600" size={24} />;
  if (name === "feather") return <Feather className="text-teal-600" size={24} />;
  return <Leaf className="text-teal-600" size={24} />;
}

/* =========================================================================
   ANIMAÇÃO REUTILIZÁVEL
   ========================================================================= */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function VitalsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], ["0%", "8%"]);

  const steps = useMemo(() => PROCESS_STEPS, []);

  return (
    <div
      ref={containerRef}
      className="bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden"
    >
      {/* BARRA DE PROGRESSO */}
      <motion.div
        style={{ scaleX, willChange: "transform" }}
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 z-[100] origin-left shadow-[0_0_18px_rgba(20,184,166,0.45)]"
      />

      {/* ======================================================
          1. HERO
      ====================================================== */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0A0A0A]">
        <motion.div
          style={{ y: yHero, willChange: "transform" }}
          className="absolute inset-0 z-0"
        >
          <video
            src="/videos/vitals-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/vitals-hero-poster.jpg"
            className="w-full h-full object-cover opacity-55 grayscale-[16%] contrast-110"
          />

          {/* overlay mais leve que backdrop forte */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42),rgba(0,0,0,0.5),rgba(0,0,0,0.7))]" />
        </motion.div>

        <div className="relative z-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-2 bg-black/70 px-4 py-1.5 rounded-full border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white font-bold">
                Linha Vitals
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6 text-white uppercase"
          >
            BEM-ESTAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-teal-500">
              AMBIENTAL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            Aditivos naturais que respeitam os processos biológicos para um sistema de criação sem estresse.
            <strong className="text-teal-400 font-bold block mt-2 font-mono uppercase tracking-widest text-sm">
              Praticidade sem burocracias regulatórias.
            </strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#solucoes"
              className="group relative px-10 py-5 bg-teal-500 text-white font-black rounded-sm overflow-hidden transition-all duration-300 hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.35)] flex items-center gap-2 uppercase text-xs tracking-widest"
            >
              VER SOLUÇÕES <ArrowRight size={16} />
            </a>

            <a
              href="#contato"
              className="px-10 py-5 bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center rounded-sm"
            >
              Falar com Especialista ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. STICKY SCROLL
      ====================================================== */}
      <section
        id="solucoes"
        className="relative bg-white py-24 md:py-32 px-6 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20 md:mb-24 md:max-w-3xl">
            <div className="w-12 h-1 bg-teal-500 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tighter">
              Soluções Diretas para <br />
              <span className="text-teal-600 font-mono uppercase italic text-3xl md:text-5xl">
                Cada Sistema.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Nossa linha foi desenhada com extratos vegetais específicos para atender as demandas únicas de manejo de suínos, aves e gado, promovendo salubridade sem complicações.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

            <div className="flex flex-col gap-28 md:gap-40">
              {steps.map((step, index) => (
                <StickyCard key={step.id} step={step} index={index} reducedMotion={!!reducedMotion} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3. IMPACTO
      ====================================================== */}
      <section className="py-24 md:py-32 px-6 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 uppercase tracking-tighter">
              Impacto no Manejo
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              A linha Vitals atua de forma contínua para garantir um ecossistema produtivo mais limpo, prático e focado no desenvolvimento animal.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <BenefitCard
                icon={<Wind size={32} strokeWidth={1.5} />}
                title="Qualidade do Ar"
                desc="Degradação natural acelerada da matéria orgânica, reduzindo drasticamente os odores no ambiente e melhorando a salubridade dos galpões."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <BenefitCard
                icon={<ShieldCheck size={32} strokeWidth={1.5} />}
                title="Bem-Estar Animal"
                desc="A redução de gases irritantes e a melhoria do sistema de criação diminuem o estresse do rebanho, favorecendo o crescimento saudável."
              />
            </Reveal>

            <Reveal delay={0.14}>
              <BenefitCard
                icon={<Leaf size={32} strokeWidth={1.5} />}
                title="Manejo Prático"
                desc="Formulação 100% natural. Solução extremamente prática para o produtor, totalmente isenta das complexidades burocráticas e regulatórias."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. CTA FINAL
      ====================================================== */}
      <section id="contato" className="py-24 md:py-32 px-6 flex justify-center bg-white">
        <div className="max-w-5xl w-full bg-[#050505] p-12 md:p-24 rounded-sm relative overflow-hidden text-center group shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[110px] -translate-y-1/2 translate-x-1/2" />

          <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Transforme a saúde da <span className="text-teal-400">sua criação.</span>
          </h2>

          <p className="relative z-10 text-slate-400 mb-12 max-w-xl mx-auto text-lg font-light">
            Garanta um ambiente livre de estresse, com redução de odores e salubridade, sem se preocupar com documentações complexas.
          </p>

          <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
            <a
              href="/contato"
              className="flex items-center justify-center gap-3 bg-teal-500 text-white px-12 py-5 rounded-sm font-black hover:bg-teal-400 transition-all duration-300 uppercase text-xs tracking-widest shadow-lg shadow-teal-500/30"
            >
              FALAR COM CONSULTOR <ArrowRight size={16} />
            </a>

            <a
              href="/produtos"
              className="flex items-center justify-center gap-3 border border-white/20 text-white px-12 py-5 rounded-sm font-bold hover:border-teal-400 hover:text-teal-400 bg-transparent transition-all duration-300 uppercase text-xs tracking-widest font-mono"
            >
              Conhecer os Produtos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================================
   BENEFIT CARD
   ========================================================================= */
const BenefitCard = memo(function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
});

/* =========================================================================
   STICKY CARD
   ========================================================================= */
const StickyCard = memo(function StickyCard({
  step,
  index,
  reducedMotion,
}: {
  step: ProcessStepType;
  index: number;
  reducedMotion: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start"
    >
      <div className={`relative ${isReverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-100 shadow-2xl group">
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-teal-500 z-20" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-teal-500 z-20" />

          <Image
            src={step.img}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 540px"
            quality={72}
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.06] will-change-transform"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 bg-black/85 px-4 py-1 text-teal-400 font-mono text-[10px] border border-white/10 font-bold uppercase tracking-[0.2em] z-20">
            PRODUTO_{step.id}
          </div>
        </div>
      </div>

      <div className={`${isReverse ? "md:order-1 md:text-right" : "md:text-left"}`}>
        <div className={`flex items-center gap-4 mb-6 ${isReverse ? "md:justify-end" : ""}`}>
          <span className="text-5xl md:text-7xl font-black text-slate-100 select-none font-mono">
            {step.id}
          </span>
          <div className="p-3 bg-teal-50 rounded-full border border-teal-100 text-teal-600 shadow-sm">
            <StepIcon name={step.iconName} />
          </div>
        </div>

        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tighter">
          {step.title}
        </h3>

        <p className="text-teal-600 font-mono text-xs tracking-[0.3em] mb-8 uppercase font-bold">
          {step.subtitle}
        </p>

        <p className="text-slate-500 text-lg leading-relaxed font-light mb-8 max-w-xl">
          {step.desc}
        </p>

        <div className={`flex flex-col ${isReverse ? "items-end" : "items-start"}`}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-2 mb-4 border-b ${
              isOpen
                ? "border-teal-500 text-teal-600"
                : "border-slate-200 hover:border-teal-400 hover:text-teal-600"
            }`}
          >
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
            {isOpen ? "Ocultar Benefícios" : "Ver Benefícios"}
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden w-full"
              >
                <div
                  className={`bg-slate-50/70 border border-slate-100 rounded-sm p-6 ${
                    isReverse ? "text-right" : "text-left"
                  }`}
                >
                  <ul className="space-y-4">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 text-slate-600 text-sm font-medium ${
                          isReverse ? "flex-row-reverse" : ""
                        }`}
                      >
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
});