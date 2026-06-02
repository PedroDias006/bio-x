"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Droplets,
  Factory,
  Globe2,
  Leaf,
  Play,
  Recycle,
  Settings,
  ShieldCheck,
  Waves,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================================
   DADOS EXTRAÍDOS DO MATERIAL OFICIAL PRIDE SANITATION
   ========================================================================= */

const FLYER_BENEFITS = [
  { title: "Redução de Odores", desc: "Auxilia na redução de odores, promovendo melhor conforto ambiental.", icon: Wind },
  { title: "Equilíbrio Ambiental", desc: "Contribui para o equilíbrio das condições ambientais e operacionais.", icon: Waves },
  { title: "Estabilização Orgânica", desc: "Favorece a estabilização da matéria orgânica sustentável.", icon: Droplets },
  { title: "Eficiência Operacional", desc: "Melhora a eficiência dos processos e qualidade das operações.", icon: Settings },
];

const FLYER_APPLICATIONS = [
  { title: "Estações de Tratamento", desc: "Apoia o manejo de lodo e efluentes em ETEs industriais e urbanas.", icon: Waves },
  { title: "Efluentes Industriais", desc: "Contribui para o equilíbrio de sistemas com alta matéria orgânica.", icon: Factory },
  { title: "Redução de Carga", desc: "Apoia a redução de carga orgânica e favorece a clarificação.", icon: Droplets },
  { title: "Controle de Odores", desc: "Atua ativamente na mitigação de odores ofensivos nos ambientes.", icon: Wind },
  { title: "Manejo de Resíduos", desc: "Solução adequada para diversos tipos de resíduos e subprodutos.", icon: Recycle },
  { title: "Sustentabilidade", desc: "Promove práticas sustentáveis e melhora o desempenho ambiental.", icon: Globe2 },
];

const FLYER_DIFFERENTIALS = [
  { title: "Compostos Funcionais", desc: "Formulação à base de compostos orgânicos naturais e extratos vegetais.", icon: Leaf },
  { title: "Tecnologia de Desempenho", desc: "Desenvolvido para entregar performance consistente em diferentes condições operacionais.", icon: Droplets },
  { title: "Segurança e Confiança", desc: "Solução segura, de fácil aplicação e alinhada às melhores práticas de operações.", icon: ShieldCheck },
  { title: "Eficiência e Economia", desc: "Melhora a eficiência operacional e contribui para a otimização de recursos.", icon: BarChart3 },
];

/* Caminhos das imagens locais a serem inseridas na pasta public/images/ */
const PROOF_CARDS = [
  {
    title: "Controle de Carga Orgânica",
    desc: "Apoio ao controle operacional de sistemas com alta presença de matéria orgânica.",
    image: "/images/sanitation-prova-1.webp",
    icon: BarChart3,
  },
  {
    title: "Clarificação Operacional",
    desc: "Suporte aos processos de estabilização, melhorando a leitura visual.",
    image: "/images/sanitation-prova-2.webp",
    icon: Droplets,
  },
  {
    title: "Estabilidade de Sistema",
    desc: "Equilíbrio para rotinas ambientais que exigem previsibilidade.",
    image: "/images/sanitation-prova-3.webp",
    icon: ShieldCheck,
  },
];

/* =========================================================================
   PÁGINA PRINCIPAL
   ========================================================================= */
export default function PrideSanitationPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Ícone encapsulado para evitar erro de sintaxe do JSX
  const FirstProofIcon = PROOF_CARDS[0].icon;

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
    <main ref={containerRef} className="bg-[#FBFBF9] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#4BB1D3]/20 selection:text-[#1A1A1A]">
      
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#4BB1D3] z-[100] origin-left shadow-[0_0_15px_rgba(75,177,211,0.4)]"
      />

      {/* ======================================================
          1. HERO INOVADOR (LAYOUT INDUSTRIAL)
      ====================================================== */}
      <section className="relative bg-[#07131D] pt-32 pb-32 md:pt-40 md:pb-48 px-6">
        {/* Background Técnico Otimizado - Degradês reduzidos para a imagem brilhar mais */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sanitation-hero-bg.webp"
            alt="Estação de Tratamento"
            fill
            priority // Única imagem da página que deve ter priority
            sizes="100vw"
            quality={75} // Qualidade aumentada levemente pois agora ela aparece mais
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          {/* Sombreamento lateral para garantir leitura do texto e sombras de topo/base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131D]/70 via-[#07131D]/20 to-[#07131D]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07131D]/90 via-[#07131D]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Textos Esquerda */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12"
          >
            <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4 w-fit">
              <ShieldCheck size={18} className="text-[#4BB1D3]" strokeWidth={1.5} />
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#E0DED8]">
                Tecnologia Ambiental
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-normal uppercase tracking-wide leading-[1.1] text-white mb-8">
              Manejo Ambiental <br />
              <span className="text-[#4BB1D3] italic">Sustentável.</span>
            </h1>
            
            <p className="max-w-lg text-lg font-light leading-relaxed text-[#E0DED8] mb-12 border-l border-[#4BB1D3] pl-6">
              A Pride Sanitation auxilia no controle de carga orgânica, clarificação e mitigação de odores para operações que exigem estabilidade contínua.
            </p>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#4BB1D3] px-10 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#07131D] transition-colors hover:bg-[#3A8EA8] shadow-lg"
            >
              Falar com Engenharia <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Produto Direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-5/12 flex justify-center lg:justify-end w-full"
          >
            <Image
              src="/images/sanitation-produto.webp"
              alt="Bombona Pride Sanitation"
              width={420}
              height={520}
              priority
              quality={85} // Qualidade maior para o produto
              className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. BARRA FLUTUANTE DE BENEFÍCIOS (GLASSMORPHISM)
      ====================================================== */}
      <section className="relative z-20 px-6 -mt-20 md:-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-[#0B1B29]/80 backdrop-blur-xl border border-white/10 rounded-sm p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {FLYER_BENEFITS.map((item) => (
              <div key={item.title} className="flex flex-col border-l border-white/5 pl-6">
                <item.icon className="text-[#4BB1D3] mb-4" size={28} strokeWidth={1.5} />
                <h3 className="text-sm font-serif uppercase tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[11px] font-light leading-relaxed text-[#888888]">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          3. APLICAÇÕES (PAINEL PANORÂMICO + LINHAS)
      ====================================================== */}
      <section className="py-24 md:py-32 bg-[#FBFBF9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] leading-tight mb-6">
              Integração Operacional <br />
              <span className="text-[#4BB1D3] italic">Sem Burocracia.</span>
            </h2>
          </div>

          {/* Imagem Widescreen Otimizada (Alinhada à base com object-bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[450px] relative rounded-sm overflow-hidden shadow-xl mb-16"
          >
            <Image
              src="/images/sanitation-panoramica.webp"
              alt="Infraestrutura Industrial"
              fill
              quality={75}
              sizes="(max-width: 1280px) 100vw, 1200px"
              loading="lazy"
              className="object-cover object-bottom" /* <-- Ajuste do enquadramento para focar na água */
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B29] to-transparent opacity-70" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#4BB1D3]">
                Compatibilidade Industrial
              </p>
            </div>
          </motion.div>

          {/* Cards em Linha (Estilo Dashboard) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {FLYER_APPLICATIONS.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-6 p-6 bg-white border border-[#E0DED8] rounded-sm hover:border-[#4BB1D3] hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 shrink-0 bg-[#FBFBF9] border border-[#E0DED8] flex items-center justify-center rounded-sm group-hover:bg-[#0B1B29] group-hover:border-[#0B1B29] transition-colors">
                  <item.icon className="text-[#0B1B29] group-hover:text-[#4BB1D3] transition-colors" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-serif uppercase tracking-widest text-[#1A1A1A] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-[#666666]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          4. DIFERENCIAIS (LAYOUT STICKY / SCROLL LATERAL)
      ====================================================== */}
      <section className="relative bg-[#0B1B29] py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          
          {/* Título Fixo na Tela */}
          <div className="md:w-1/3 md:sticky md:top-32">
            <h2 className="text-[#4BB1D3] text-4xl font-serif font-normal uppercase tracking-wide mb-6">
              Matéria <br /> Prima
            </h2>
            <p className="text-base font-light text-[#888888] leading-relaxed">
              Desenvolvida com foco em biotecnologia orgânica para garantir a estabilidade do sistema sem uso de agentes agressivos.
            </p>
          </div>

          {/* Blocos de Conteúdo Roláveis */}
          <div className="md:w-2/3 flex flex-col gap-8">
            {FLYER_DIFFERENTIALS.map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#07131D] border border-white/5 p-10 md:p-12 rounded-sm hover:border-[#4BB1D3]/50 transition-colors"
              >
                <div className="flex items-center gap-6 mb-6 border-b border-white/5 pb-6">
                  <item.icon className="text-[#4BB1D3]" size={36} strokeWidth={1.5} />
                  <h4 className="text-xl font-serif uppercase tracking-wider text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm font-light leading-relaxed text-[#E0DED8]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          5. PROVA VISUAL (GRID ASSIMÉTRICO MODERNO OTIMIZADO)
      ====================================================== */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide leading-tight text-[#1A1A1A]">
              Impacto <span className="italic text-[#4BB1D3]">Visível.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Foto Gigante Esquerda */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative h-[400px] md:h-[600px] rounded-sm overflow-hidden group bg-black"
            >
              <Image
                src={PROOF_CARDS[0].image}
                alt={PROOF_CARDS[0].title}
                fill
                loading="lazy"
                quality={60}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B29] via-[#0B1B29]/40 to-transparent opacity-90" />
              <div className="absolute bottom-10 left-10 right-10">
                <FirstProofIcon className="mb-4 text-[#4BB1D3]" size={32} strokeWidth={1.5} />
                <h3 className="text-3xl font-serif uppercase tracking-wide text-white mb-2">{PROOF_CARDS[0].title}</h3>
                <p className="text-sm font-light text-[#E0DED8] max-w-md">{PROOF_CARDS[0].desc}</p>
              </div>
            </motion.div>

            {/* Fotos Menores Direita */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {PROOF_CARDS.slice(1).map((card, index) => (
                <motion.div 
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-[200px] md:h-[288px] rounded-sm overflow-hidden group bg-black"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    loading="lazy"
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B29] to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-serif uppercase tracking-wide text-white mb-1">{card.title}</h3>
                    <p className="text-[11px] font-light text-[#888888] line-clamp-2">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          6. DEPOIMENTO LADO-A-LADO (SIDE-BY-SIDE)
      ====================================================== */}
      <section id="depoimento" className="bg-[#FBFBF9] py-24 md:py-32 px-6 border-t border-[#E0DED8]">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-5/12">
            <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-[#4BB1D3]/30 bg-white px-4 py-1.5 shadow-sm text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-[#0B1B29]">
              <Play size={12} fill="currentColor" className="text-[#4BB1D3]" />
              Estudo de Caso
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] mb-6">
              A Solução em <br /> Operação.
            </h2>
            <p className="text-base font-light text-[#666666] leading-relaxed mb-8">
              Acompanhe a aplicação e o desempenho real da tecnologia Pride Sanitation no suporte à infraestrutura de estações e controle de efluentes.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#0B1B29] hover:text-[#4BB1D3] transition-colors border-b border-[#0B1B29] hover:border-[#4BB1D3] pb-1"
            >
              Consultar Especialista <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="overflow-hidden rounded-sm border border-[#E0DED8] bg-black shadow-xl relative">
              {/* OTIMIZADO: preload="none" economiza banda até o play */}
              <video
                src="/videos/sanitation-hero.mp4"
                controls
                preload="none"
                poster="/images/sanitation-poster.webp"
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
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#4BB1D3] rounded-sm shadow-lg flex items-center justify-center text-[#0B1B29] hover:bg-[#3A8EA8] transition-colors duration-300"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}