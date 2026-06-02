"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BarChart3,
  Beef,
  Droplets,
  Feather,
  Leaf,
  PiggyBank,
  Recycle,
  ShieldCheck,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================================
   DADOS EXTRAÍDOS DOS PANFLETOS OFICIAIS (SWINE & CATTLE)
   ========================================================================= */

const ANIMAL_LINES = [
  {
    id: "cattle",
    title: "PRIDE CATTLE",
    subtitle: "Sustainable Livestock Performance",
    animal: "Bovinocultura",
    headline: "Tecnologia que transforma manejo em resultados.",
    desc: "Soluções inteligentes e sustentáveis para uma pecuária mais produtiva, saudável e rentável. Tecnologias de base orgânica para otimizar processos e promover melhores condições ambientais e operacionais.",
    photo: "/images/cattle.webp",
    icon: Beef,
    benefits: [
      { title: "Sustentabilidade", desc: "Redução de impactos ambientais e geração de valor.", icon: Leaf },
      { title: "Ambientes Saudáveis", desc: "Controle de odores e melhoria da qualidade do ar.", icon: Wind },
      { title: "Manejo Inteligente", desc: "Transformação orgânica com eficiência e segurança.", icon: Recycle },
      { title: "Desempenho", desc: "Ambientes equilibrados resultam em mais produtividade.", icon: BarChart3 },
    ],
    applications: [
      { title: "Ambiência e Conforto", desc: "Melhoria do conforto térmico e bem-estar animal." },
      { title: "Manejo de Dejetos", desc: "Estabilização orgânica, reduzindo volume e odores." },
      { title: "Qualidade da Água", desc: "Apoio ao manejo de reservatórios e sistemas." },
      { title: "Performance Sustentável", desc: "Animais mais confortáveis e maiores desempenhos." },
    ],
  },
  {
    id: "swine",
    title: "PRIDE SWINE",
    subtitle: "Sustainable Production Performance",
    animal: "Suinocultura",
    headline: "Inteligência ambiental para uma produção mais eficiente.",
    desc: "A Pride Swine é uma solução tecnológica desenvolvida para auxiliar no manejo sustentável das instalações suinícolas, promovendo melhores condições ambientais, redução de odores e maior eficiência.",
    photo: "/images/swine.webp",
    icon: PiggyBank,
    benefits: [
      { title: "Redução de Odores", desc: "Auxilia na redução de odores ofensivos nas instalações.", icon: Wind },
      { title: "Melhores Condições", desc: "Favorece o equilíbrio do ambiente para os animais.", icon: Leaf },
      { title: "Manejo Sustentável", desc: "Contribui para a gestão das instalações e dejetos.", icon: ShieldCheck },
      { title: "Fácil Aplicação", desc: "Solução prática e compatível com as rotinas da granja.", icon: Droplets },
    ],
    applications: [
      { title: "Água de Bebida", desc: "Uso diário para apoio ao manejo da qualidade da água." },
      { title: "Nebulização", desc: "Aplicação no ar para melhores condições do ambiente." },
      { title: "Pisos e Instalações", desc: "Apoio ao manejo da ambiência." },
      { title: "Manejo de Dejetos", desc: "Gestão dos resíduos e redução de odores." },
    ],
  },
  {
    id: "poultry",
    title: "PRIDE POULTRY",
    subtitle: "Sustainable Poultry Performance",
    animal: "Avicultura",
    headline: "Ambiência em equilíbrio para lotes mais saudáveis.",
    desc: "Apoia o controle de odores, a estabilidade da cama de aviário e a qualidade ambiental dos galpões, favorecendo o bem-estar animal e otimizando a rotina de manejo dos produtores.",
    photo: "/images/poultry.webp",
    icon: Feather,
    benefits: [
      { title: "Qualidade do Ar", desc: "Apoia a redução de amônia e odores no galpão.", icon: Wind },
      { title: "Cama de Aviário", desc: "Auxilia na estabilização e controle de umidade.", icon: Leaf },
      { title: "Bem-estar Animal", desc: "Conforto ambiental que reflete em performance.", icon: ShieldCheck },
      { title: "Segurança", desc: "Formulações seguras e de alta tecnologia.", icon: BarChart3 },
    ],
    applications: [
      { title: "Tratamento de Cama", desc: "Aplicação direta para estabilização orgânica." },
      { title: "Nebulização", desc: "Melhoria contínua da qualidade do ar." },
      { title: "Gestão de Resíduos", desc: "Apoio no pós-lote e compostagem." },
      { title: "Ambiência Geral", desc: "Equilíbrio sustentável do galpão." },
    ],
  },
];

const PLATFORM_MODULES = [
  { title: "Ambiência", desc: "Redução de odores, conforto ambiental e saúde do ar.", icon: Wind },
  { title: "Resíduos", desc: "Manejo de dejetos, compostagem e estabilização orgânica.", icon: Recycle },
  { title: "Água", desc: "Suporte a reservatórios, bebedouros e linhas hídricas.", icon: Droplets },
  { title: "Performance", desc: "Eficiência operacional e ganho zootécnico indireto.", icon: BarChart3 },
];

/* =========================================================================
   PÁGINA PRINCIPAL
   ========================================================================= */
export default function PrideLivestockPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Estado para controlar a vitrine dinâmica de animais
  const [activeId, setActiveId] = useState("cattle");

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const activeLine = useMemo(
    () => ANIMAL_LINES.find((line) => line.id === activeId) ?? ANIMAL_LINES[0],
    [activeId]
  );

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
    <main ref={containerRef} className="bg-[#FBFBF9] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A1A1A]">
      
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[100] origin-left shadow-[0_0_15px_rgba(212,175,55,0.4)]"
      />

     {/* ======================================================
          1. HERO EXCLUSIVO (TRÍADE / PLATFORM SHOWCASE)
      ====================================================== */}
      <section className="relative w-full flex min-h-[auto] flex-col items-center overflow-hidden bg-[#0A0A0A] px-6 pb-14 pt-32 lg:min-h-[100svh] lg:flex-row lg:px-12 lg:py-0">
        
        {/* === BACKGROUND IMAGE (NOVO) === */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/livestock-hero-bg.webp"
            alt="Fundo Pecuária Pride"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-60" /* Opacidade ajustada para a foto aparecer bem */
          />
          {/* Sombra estratégica: protege o texto na esquerda, clareia na direita e escurece a base */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 opacity-90" />
        </div>

        {/* Luz de Fundo (Ambient Glow) Dourada */}
        <div className="absolute top-1/2 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] opacity-10 blur-[110px] pointer-events-none z-0 sm:h-[600px] sm:w-[600px] lg:h-[1000px] lg:w-[1000px] lg:blur-[150px]" />

        {/* === LADO ESQUERDO: TEXTO E CTA === */}
        <div className="w-full lg:w-1/2 relative z-20 flex flex-col justify-center lg:pr-12 xl:pl-12 mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/30 px-5 py-2 rounded-sm bg-white/5 backdrop-blur-md">
              <ShieldCheck size={14} className="text-[#D4AF37]" strokeWidth={2} />
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Pride Biosolutions
              </span>
            </div>
            
            <h1 className="text-[3rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-normal uppercase tracking-normal sm:tracking-wide leading-[1.05] text-white mb-8 drop-shadow-lg">
              LIVESTOCK <br />
              <span className="text-[#D4AF37]">PLATFORM</span>
            </h1>
            
            <p className="max-w-lg text-lg md:text-xl font-light leading-relaxed text-[#E0DED8] mb-12 border-l-2 border-[#D4AF37] pl-6 drop-shadow-md">
              Três linhas exclusivas com tecnologias de base orgânica para apoiar ambiência, manejo de dejetos e performance sustentável na pecuária moderna.
            </p>

            <Link
              href="#vitrine"
              className="inline-flex w-full items-center justify-center gap-4 rounded-sm bg-[#D4AF37] px-6 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all hover:bg-[#B88A14] shadow-[0_0_30px_rgba(212,175,55,0.2)] sm:w-fit sm:px-10"
            >
              Explorar Linhas de Produção <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* === LADO DIREITO: O TALENTO ESPECIAL (PILARES ASSIMÉTRICOS) === */}
        <div className="relative z-10 mt-12 flex h-[340px] w-full items-center justify-center sm:h-[420px] lg:mt-0 lg:h-[100svh] lg:w-1/2">
          
          <div className="grid h-full w-full max-w-2xl grid-cols-3 gap-3 py-8 md:gap-5 lg:py-32">
            
            {/* Pilar 1: Cattle */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[80%] my-auto rounded-sm overflow-hidden border border-white/10 shadow-2xl group cursor-default"
            >
              <Image src="/images/cattle-showcase.webp" fill quality={75} className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="Cattle" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 w-full flex flex-col items-center">
                <Beef className="text-[#D4AF37] mb-2" size={24} strokeWidth={1.5} />
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md">Cattle</span>
              </div>
            </motion.div>

            {/* Pilar 2: Swine (Destacado no centro) */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: -20 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[95%] my-auto rounded-sm overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] z-10 group cursor-default"
            >
              <Image src="/images/swine-showcase.webp" fill quality={75} className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" alt="Swine" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 w-full flex flex-col items-center">
                <PiggyBank className="text-[#D4AF37] mb-2" size={28} strokeWidth={1.5} />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md">Swine</span>
              </div>
            </motion.div>

            {/* Pilar 3: Poultry */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[75%] my-auto rounded-sm overflow-hidden border border-white/10 shadow-2xl group cursor-default"
            >
              <Image src="/images/poultry-showcase.webp" fill quality={75} className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="Poultry" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 w-full flex flex-col items-center">
                <Feather className="text-[#D4AF37] mb-2" size={24} strokeWidth={1.5} />
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md">Poultry</span>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ======================================================
          2. PLATAFORMA PECUÁRIA (MÓDULOS GLOBAIS)
      ====================================================== */}
      <section className="bg-[#FBFBF9] py-24 px-6 border-b border-[#E0DED8]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] mb-4">
              Soluções completas para <br />
              <span className="text-[#D4AF37] italic">cada desafio da pecuária.</span>
            </h2>
            <p className="text-sm font-light text-[#666666] uppercase tracking-widest">
              Performance Sustentável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_MODULES.map((item, index) => (
              <motion.article 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[#E0DED8] p-8 rounded-sm hover:border-[#D4AF37] transition-colors group"
              >
                <item.icon className="mb-6 text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors" size={32} strokeWidth={1.2} />
                <h3 className="text-sm font-serif uppercase tracking-widest text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-[#666666]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          3. VITRINE INTERATIVA (O GRANDE DIFERENCIAL DESTA PÁGINA)
      ====================================================== */}
      <section id="vitrine" className="bg-[#0A0A0A] py-24 md:py-32 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          
          {/* Seletor de Animais */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {ANIMAL_LINES.map((line) => {
              const selected = activeId === line.id;
              return (
                <button
                  key={line.id}
                  onClick={() => setActiveId(line.id)}
                  className={`inline-flex items-center gap-3 rounded-full border px-6 py-3 text-xs font-sans font-semibold uppercase tracking-widest transition-all duration-300 ${
                    selected
                      ? "border-[#D4AF37] bg-[#D4AF37] text-[#0A0A0A] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      : "border-white/20 bg-transparent text-[#888888] hover:border-white/50 hover:text-white"
                  }`}
                >
                  <line.icon size={16} strokeWidth={selected ? 2 : 1.5} />
                  {line.animal}
                </button>
              );
            })}
          </div>

          {/* Container da Vitrine com AnimatePresence */}
          <div className="relative min-h-[800px] lg:min-h-[600px] bg-[#121212] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLine.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col lg:flex-row"
              >
                
                {/* Lado Esquerdo: Conteúdo e Benefícios */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <div className="w-6 h-px bg-[#D4AF37]" />
                    <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                      {activeLine.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-white mb-6">
                    {activeLine.title}
                  </h3>
                  <p className="text-base font-light text-[#E0DED8] leading-relaxed mb-10">
                    <span className="text-[#D4AF37] font-serif italic mr-2">{activeLine.headline}</span>
                    {activeLine.desc}
                  </p>

                  {/* Grid de Benefícios (Extraídos do Flyer) */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10">
                    {activeLine.benefits.map((benefit) => (
                      <div key={benefit.title} className="flex flex-col">
                        <benefit.icon className="text-[#D4AF37] mb-3" size={24} strokeWidth={1.5} />
                        <h4 className="text-[11px] font-serif uppercase tracking-widest text-white mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-[10px] font-light text-[#888888] leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center gap-3 border border-[#D4AF37] bg-transparent text-[#D4AF37] px-8 py-4 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[#D4AF37] hover:text-[#0A0A0A] w-fit"
                  >
                    Detalhes Técnicos <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Lado Direito: Imagem e Aplicações */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                  <Image
                    src={activeLine.photo}
                    alt={activeLine.title}
                    fill
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center opacity-80"
                  />
                  {/* Gradientes para mesclar a imagem perfeitamente com o fundo escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent lg:bg-gradient-to-r lg:from-[#121212] lg:via-[#121212]/50 lg:to-transparent" />
                  
                  {/* Selo Tecnologia Orgânica */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#0A0A0A]/80 backdrop-blur-sm">
                    <p className="text-[8px] font-sans font-semibold uppercase text-center tracking-widest text-[#D4AF37]">
                      Tecnologia <br/> Orgânica <br/> Funcional
                    </p>
                  </div>

                  {/* Box de Aplicações sobre a imagem */}
                  <div className="absolute bottom-8 left-8 right-8 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 p-6 rounded-sm">
                    <h5 className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#E0DED8] mb-4 border-b border-white/10 pb-2">
                      Aplicações Recomendadas
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                      {activeLine.applications.map((app) => (
                        <li key={app.title} className="flex items-start gap-3">
                          <BadgeCheck className="text-[#D4AF37] shrink-0 mt-0.5" size={14} />
                          <div>
                            <span className="block text-[10px] font-serif uppercase tracking-wider text-white">
                              {app.title}
                            </span>
                            <span className="block text-[9px] font-light text-[#888888] mt-0.5">
                              {app.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ======================================================
          4. CALL TO ACTION FINAL
      ====================================================== */}
      <section className="bg-[#1A1A1A] py-24 md:py-32 px-6 text-center border-t border-black">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          <ShieldCheck className="text-[#D4AF37] mb-6" size={48} strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-serif font-normal uppercase tracking-wide text-white mb-6">
            Eficiência hoje, <br />
            <span className="text-[#D4AF37] italic">Legado amanhã.</span>
          </h2>
          <p className="text-lg font-light text-[#888888] leading-relaxed mb-12 max-w-2xl">
            Da ambiência ao resíduo, a Pride organiza soluções para operações
            que precisam unir bem-estar animal, eficiência, segurança e responsabilidade
            ambiental na mesma rotina.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-4 rounded-sm bg-[#D4AF37] px-12 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition-colors hover:bg-[#B88A14] shadow-lg"
          >
            Agendar Reunião Técnica <ArrowRight size={16} />
          </Link>
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
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#D4AF37] rounded-sm shadow-lg flex items-center justify-center text-[#1A1A1A] hover:bg-[#B88A14] transition-colors duration-300"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}
