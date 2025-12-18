"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Leaf,
  Microscope,
  Play,
  Scan,
  ShieldCheck,
  Sprout,
  Star,
  TrendingUp
} from "lucide-react";

/* =========================================================================
   DADOS E CONSTANTES
   ========================================================================= */

const PRODUCT_BENEFITS = [
  {
    title: "Bio-Ativação Solo",
    desc: "Reativa a microbiologia nativa em 72h.",
    icon: <Sprout size={24} />,
  },
  {
    title: "Proteção Sistêmica",
    desc: "Cria escudo imunológico contra pragas.",
    icon: <ShieldCheck size={24} />,
  },
];

type StatCardProps = {
  label: string;
  value: number;
  unit: string;
  subtext: string;
  delay?: number;
  color: string;
};

/* =========================================================================
   SUB-COMPONENTE: CARD DE DADOS ANIMADO (COUNTER)
   ========================================================================= */

const StatCard: React.FC<StatCardProps> = React.memo(
  ({ label, value, unit, subtext, delay = 0, color }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) =>
      Math.round(latest * 10) / 10
    );

    useEffect(() => {
      if (isInView) {
        animate(count, value, {
          duration: 2,
          ease: "easeOut",
          delay,
        });
      }
    }, [isInView, value, delay, count]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className="relative flex flex-col p-6 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:border-gray-200 transition-colors"
      >
        <div
          className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}
        >
          <TrendingUp size={48} />
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-mono">
          {label}
        </p>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-sm font-bold text-gray-400">+</span>
          <motion.span className={`text-5xl font-bold tracking-tighter ${color}`}>
            {rounded}
          </motion.span>
          <span className={`text-xl font-bold ${color}`}>{unit}</span>
        </div>

        <p className="text-sm text-gray-500 leading-tight">{subtext}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 2.5, ease: "circOut", delay }}
            className={`h-full ${color.replace("text-", "bg-")}`}
          />
        </div>
      </motion.div>
    );
  }
);

/* =========================================================================
   SUB-COMPONENTE: VISUAL OFFER SECTION ("Agricultura Visível")
   ========================================================================= */

const VisualOfferSection: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(16, 185, 129, 0.03),
      transparent 80%
    )
  `;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full max-w-7xl mx-auto px-4 md:px-6 relative group"
    >
      <motion.div
        className="pointer-events-none absolute -inset-40 opacity-0 transition duration-500 group-hover:opacity-100 -z-10"
        style={{ background: spotlightBg }}
      />
      
      {/* Título da Seção */}
      <div className="text-center mb-16 relative z-10">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase shadow-sm"
         >
            <Scan size={14} /> Análise Visual de Campo
         </motion.div>
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
         >
            O que os olhos veem, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              o bolso sente.
            </span>
         </motion.h2>
         <p className="text-gray-500 max-w-2xl mx-auto">
            Não é mágica, é fisiologia vegetal. Veja os indicadores visuais que comprovam a eficácia do Bio-X antes mesmo da colheita.
         </p>
      </div>

      {/* --- BENTO GRID VISUAL --- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        
        {/* CARD 1: HERO IMAGE (EQUIPE + SOJA) - 8 COLUNAS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 relative h-[500px] rounded-[2.5rem] overflow-hidden border border-gray-200 group shadow-xl shadow-emerald-100/30"
        >
          <img 
            src="/images/equipe-biox-soja.jpg" 
            alt="Especialista Bio-X em campo" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-[30%] left-[40%] flex items-center gap-2"
          >
             <div className="relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
             </div>
             <div className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Engalhamento Lateral
             </div>
          </motion.div>

          <div className="absolute bottom-10 left-10 z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/90 border border-emerald-400 backdrop-blur-md mb-4 text-white">
              <ShieldCheck className="w-3 h-3 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase">Vigor Monitorado</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-lg">
               Arquitetura de Planta
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md font-medium">
              Note o fechamento das entrelinhas e a coloração verde-intenso. Sinais claros de fotossíntese maximizada e sanidade total.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: COLUNA LATERAL - 4 COLUNAS */}
        <div className="md:col-span-4 flex flex-col gap-6 h-[500px]">
           
           {/* Card Superior: Comparativo */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative flex-1 rounded-[2.5rem] overflow-hidden border border-gray-200 group shadow-md"
           >
              <img 
                src="/images/comparativo-batata.jpg" 
                alt="Comparação Batatas" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center justify-between mb-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Padrão</span>
                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase shadow-lg">Bio-X</span>
                 </div>
                 <h3 className="text-lg font-bold text-white">Padronização</h3>
              </div>
           </motion.div>

           {/* Card Inferior: Colheita */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="relative flex-1 rounded-[2.5rem] overflow-hidden border border-gray-200 group shadow-md"
           >
              <img 
                src="/images/colheita-batata.jpg" 
                alt="Colheita" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6">
                 <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="text-emerald-400 w-4 h-4" />
                    <span className="text-emerald-300 text-xs font-bold uppercase">Produtividade</span>
                 </div>
                 <h3 className="text-xl font-bold text-white">Volume Real</h3>
              </div>
           </motion.div>
        </div>
      </div>

      {/* --- DETALHAMENTO BIOLÓGICO --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
         {/* Detalhes ... */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start group"
         >
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
               <Sprout className="text-emerald-600 w-8 h-8" />
            </div>
            <div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  Sistema Radicular
                  <CheckCircle2 size={16} className="text-emerald-500" />
               </h4>
               <p className="text-sm text-gray-500 leading-relaxed">
                  Estimula o crescimento de raízes secundárias e pelos absorventes, aumentando a boca da planta para buscar água.
               </p>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 items-start group"
         >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
               <Leaf className="text-blue-600 w-8 h-8" />
            </div>
            <div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  Índice Foliar
                  <CheckCircle2 size={16} className="text-blue-500" />
               </h4>
               <p className="text-sm text-gray-500 leading-relaxed">
                  Folhas maiores e mais verdes (mais clorofila) garantem taxa fotossintética superior mesmo em dias nublados.
               </p>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 items-start group"
         >
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
               <CircleDot className="text-amber-600 w-8 h-8" />
            </div>
            <div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  Enchimento de Grão
                  <CheckCircle2 size={16} className="text-amber-500" />
               </h4>
               <p className="text-sm text-gray-500 leading-relaxed">
                  Translocação eficiente de nutrientes das folhas para os frutos/grãos nos estágios finais, aumentando o peso.
               </p>
            </div>
         </motion.div>

      </div>
    </div>
  );
});

/* =========================================================================
   SUB-COMPONENTE: PRODUCT HERO ("Tecnologia Regenerativa" - OTIMIZADO)
   ========================================================================= */

const ProductHeroSection: React.FC = React.memo(() => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="produto"
      className="relative py-32 md:py-48 px-6 bg-[#FAFAFA] overflow-hidden text-[#020617]"
    >
      {/* OTIMIZAÇÃO: Substituição de Blur Pesado por Gradiente Sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E0FF]/5 rounded-full blur-[80px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003B5C]/5 rounded-full blur-[80px] pointer-events-none opacity-50" />
      {/* REMOVIDO NOISE SVG DAQUI TAMBÉM */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full flex items-center justify-center perspective-1000"
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[480px] h-[600px] rounded-[3rem] bg-white shadow-2xl border border-white/50 cursor-pointer group will-change-transform"
          >
            <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-gray-100 translate-z-10">
              <img
                src="/images/fundo-produto.jpg"
                alt="Plantação"
                decoding="async"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <motion.div
              style={{ translateZ: 60 }}
              className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
            >
              {/* Otimizado: Sombra estática ao invés de animação pesada */}
              <div className="absolute bottom-20 w-32 h-8 bg-black/20 blur-xl rounded-[100%]" />
              <img
                src="/images/agricultura.png"
                alt="Bio-X"
                decoding="async"
                loading="lazy"
                className="w-72 md:w-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 group-hover:-translate-y-6"
              />
            </motion.div>
            <motion.div
              style={{ translateZ: 40 }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg z-50 flex justify-between items-center"
            >
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Concentração</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#003B5C]">10⁹</span>
                  <span className="text-xs text-gray-400 font-mono">UFC/mL</span>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Rendimento</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#003B5C]">10</span>
                  <span className="text-xs text-gray-400 font-mono">Hectares</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ translateZ: 80 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-8 bg-[#4ADE80] text-[#064E3B] p-3 rounded-full shadow-lg z-50"
            >
              <Leaf size={24} fill="currentColor" className="text-[#064E3B]" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#003B5C]/5 border border-[#003B5C]/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-[#003B5C] tracking-widest uppercase">
              Tecnologia Regenerativa 4.0
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-[#020617] mb-4 leading-[0.95] tracking-tight"
          >
            Mais que insumo. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#4ADE80]">
              Um legado.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">
              <span className="font-bold text-[#020617]">4.9/5</span> aprovado
              por +500 produtores
            </p>
          </motion.div>

          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
          >
             A Agricultura Única não apenas nutre a planta, ela <strong className="text-[#003B5C]">reprograma biologicamente</strong> o seu solo para atingir patamares produtivos nunca antes explorados.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {PRODUCT_BENEFITS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
              >
                <div className="mt-1 w-12 h-12 flex items-center justify-center rounded-lg bg-[#00E0FF]/10 text-[#003B5C] group-hover:bg-[#166534] group-hover:text-[#4ADE80] transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#020617] text-lg leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* BOTÃO GARANTIR LOTE AGORA (WPP) */}
            <a
              href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20lote%20atual%20de%20Agricultura%20%C3%9Anica."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#15803D] hover:bg-[#166534] overflow-hidden rounded-xl shadow-[0_20px_40px_-15px_rgba(21,128,61,0.5)] transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative flex items-center justify-center gap-3 text-white text-lg font-bold tracking-wide">
                GARANTIR LOTE ATUAL{" "}
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

/* =========================================================================
   SUB-COMPONENTE: SESSÃO DOCUMENTÁRIO (CINEMA MODE)
   ========================================================================= */
const DocumentarySection: React.FC = React.memo(() => {
   return (
      <section id="documentario" className="py-24 md:py-32 bg-[#020617] relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-[#4ADE80] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
            >
               <span className="text-[#4ADE80] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                  Produção Original
               </span>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  A Revolução em Detalhes
               </h2>
               <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
                  Veja como a Bio-X está transformando lavouras estagnadas em recordistas de produtividade.
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(74,222,128,0.1)] bg-black/50 relative group"
            >
               <video
                 src="/videos/documentario-biox.mp4" 
                 controls
                 className="w-full h-full object-cover"
               />
            </motion.div>
         </div>
      </section>
   )
});

/* =========================================================================
   COMPONENTE PRINCIPAL (DEFAULT EXPORT)
   ========================================================================= */

export default function AgriculturaMasterpiece() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);

  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
    <div
      ref={containerRef}
      className="bg-[#020617] text-white font-sans overflow-x-hidden antialiased selection:bg-[#00E0FF] selection:text-[#020617]"
    >
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4ADE80] to-[#22c55e] z-[100] origin-left shadow-[0_0_20px_rgba(74,222,128,0.5)]"
      />

      {/* 1. HERO - OTIMIZADO (SEM NOISE PESADO) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* REMOVIDO O NOISE DAQUI PARA PARAR O TRAVAMENTO */}
          <div className="absolute inset-0 bg-[#020617]/20 z-10 pointer-events-none" />
          <video
            src="/videos/agricultura-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-200 font-semibold">
                Bio-X Advanced Tech
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-white uppercase flex flex-col items-center gap-2 mb-8 tracking-tighter">
              <span className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <span className="tracking-widest font-light opacity-80">
                  BIO-X
                </span>
                <span className="text-white drop-shadow-2xl">AGRICULTURA</span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] via-[#86EFAC] to-[#4ADE80] bg-[200%_auto] animate-[shimmer_3s_infinite]">
                ÚNICA
              </span>
            </h1>

            <h2 className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
              A única tecnologia capaz de destravar o{" "}
              <span className="text-white font-medium border-b border-[#4ADE80]/50 pb-0.5">
                teto produtivo
              </span>{" "}
              da sua lavoura com inteligência biológica.
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
              {/* BOTÃO QUERO COMPRAR (WPP) */}
              <a
                href="https://wa.me/5531995235778?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20comprar%20o%20produto%20de%20Agricultura%20%C3%9Anica."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#4ADE80] text-[#020617] font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.6)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                  QUERO COMPRAR <ArrowRight size={20} />
                </span>
              </a>

              <a
                href="#documentario"
                className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                   <Play size={14} className="text-[#4ADE80] fill-[#4ADE80]" />
                </div>
                <span>DOCUMENTÁRIO</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 z-20 text-[#4ADE80]/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* AUTHORITY BAR - OTIMIZADA (LEVE, SEM SOMBRAS PESADAS, Z-INDEX CORRIGIDO) */}
      <div className="bg-[#0B1120] py-6 relative z-10 border-t border-white/5 shadow-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            Validado por:
          </span>
          <div className="text-2xl font-bold font-serif text-white tracking-widest opacity-80 hover:opacity-100 transition-opacity">
            UFV
          </div>
          <div className="text-2xl font-bold font-serif text-white tracking-widest opacity-80 hover:opacity-100 transition-opacity">
            FINEP
          </div>
          <div className="text-2xl font-bold font-serif text-white tracking-widest opacity-80 hover:opacity-100 transition-opacity">
            EMBRAPA
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden md:block border-l border-white/10 pl-6">
            Patente Nº 9283-BR
          </span>
        </div>
      </div>

      {/* 2. TECNOLOGIA REGENERATIVA */}
      <ProductHeroSection />

      {/* 3. AGRICULTURA VISÍVEL */}
      <section className="bg-white py-24 relative z-20">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-emerald-50/80 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
         </div>
         <VisualOfferSection />
      </section>

      {/* 4. PROVA SOCIAL */}
      <section
        id="prova"
        className="relative py-32 px-6 bg-[#F8FAFC] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header seção */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#15803D]/10 text-[#15803D] border border-[#15803D]/20">
                <Microscope size={14} />
                <span className="font-bold tracking-widest uppercase text-[10px]">
                  Relatório de Auditoria 2024
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#020617] tracking-tight leading-[1.1]">
                Resultados que desafiam <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15803D] to-[#4ADE80]">
                  a lógica convencional.
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Bento Grid de Prova */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="col-span-1 md:col-span-2 row-span-2 bg-[#020617] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4ADE80] opacity-20 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
              <img
                src="/images/agricultura.png"
                alt="Bio-X Agricultura Única Logo"
                className="absolute top-8 right-8 w-28 md:w-40 object-contain drop-shadow-lg"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-[#4ADE80]">
                  <BarChart3 />
                  <span className="font-mono uppercase tracking-widest text-xs">
                    Métrica Principal
                  </span>
                </div>
                <h3 className="text-2xl font-light text-gray-300 mb-2">
                  Produtividade Global
                </h3>
                <div className="flex items-end gap-4">
                  <span className="text-7xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                    +29,6
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#4ADE80] mb-2">
                    %
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3 mt-12 h-32 opacity-80">
                {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className={`flex-1 rounded-t-sm ${
                      i === 7 ? "bg-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.5)]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            <StatCard
              label="Eficiência Soja"
              value={29.1}
              unit="%"
              subtext="Incremento direto em sacas/ha."
              delay={0.2}
              color="text-[#16A34A]"
            />
            <StatCard
              label="Enraizamento"
              value={45.0}
              unit="%"
              subtext="Volume de massa radicular."
              delay={0.3}
              color="text-[#0D9488]"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.4 }}
              className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex items-center gap-6 group hover:border-emerald-100 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Leaf size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#020617] mb-2">
                  Recuperação de Solo
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Redução de adubação química em <strong className="text-[#059669]">até 15%</strong> na próxima safra.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 5. SESSÃO DOCUMENTÁRIO */}
      <DocumentarySection />

      {/* BOTÃO FLUTUANTE DE VOLTAR AO TOPO */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#4ADE80] rounded-full shadow-[0_10px_30px_rgba(74,222,128,0.4)] flex items-center justify-center text-[#020617] hover:bg-white hover:text-[#4ADE80] transition-colors duration-300"
          >
             <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Styles globais */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </div>
  );
}