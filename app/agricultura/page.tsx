"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Droplets,
  Globe2,
  Leaf,
  Microscope,
  Play,
  ShieldCheck,
  Sprout,
  Sun,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================================
   DADOS EXTRAÍDOS DO MATERIAL OFICIAL PRIDE
   ========================================================================= */

const FLYER_BENEFITS = [
  { title: "Saúde e Equilíbrio do Solo", desc: "Auxilia no condicionamento do solo e no manejo sustentável da matéria orgânica.", icon: Leaf },
  { title: "Mais Eficiência no Manejo", desc: "Contribui para melhores condições de manejo e maior eficiência operacional.", icon: Sprout },
  { title: "Nutrientes Disponíveis", desc: "Favorece o aproveitamento dos nutrientes presentes no solo e na matéria orgânica.", icon: Droplets },
  { title: "Produtividade Sustentável", desc: "Apoia o desenvolvimento das plantas e o potencial produtivo das culturas.", icon: Sun },
  { title: "Sustentabilidade em Ação", desc: "Solução alinhada às boas práticas agrícolas e à produção responsável.", icon: Globe2 },
];

const FLYER_APPLICATIONS = [
  { title: "Manejo do Solo", desc: "Auxilia no condicionamento do solo e no manejo da matéria orgânica.", icon: Sprout },
  { title: "Desenvolvimento das Culturas", desc: "Contribui para melhores condições para o desenvolvimento das plantas.", icon: Leaf },
  { title: "Eficiência no Uso de Recursos", desc: "Favorece o melhor aproveitamento dos nutrientes presentes no solo.", icon: Droplets },
  { title: "Produtividade e Qualidade", desc: "Apoia o potencial produtivo e a qualidade das culturas.", icon: Sun },
  { title: "Práticas Sustentáveis", desc: "Solução alinhada às boas práticas e à produção responsável.", icon: ShieldCheck },
  { title: "Equilíbrio Ambiental", desc: "Contribui para a sustentabilidade e o equilíbrio do sistema produtivo.", icon: Globe2 },
];

const FLYER_DIFFERENTIALS = [
  { title: "Compostos Orgânicos Funcionais", desc: "Formulação à base de compostos orgânicos e extratos vegetais.", icon: Leaf },
  { title: "Tecnologia de Alta Performance", desc: "Processos modernos que garantem qualidade e eficiência.", icon: Microscope },
  { title: "Resultados Consistentes", desc: "Solução desenvolvida para entregar resultados reais no campo.", icon: BarChart3 },
  { title: "Segurança e Confiança", desc: "Produto seguro para aplicação e alinhado às exigências do agronegócio.", icon: ShieldCheck },
  { title: "Sustentabilidade e Responsabilidade", desc: "Compromisso com o meio ambiente e com as futuras gerações.", icon: Globe2 },
];

const PROOF_CARDS = [
  {
    title: "Desenvolvimento Radicular",
    desc: "Leitura visual de resposta das plantas e raízes mais profundas e estruturadas.",
    image: "/images/agriculture-radicular.webp",
    icon: TrendingUp,
  },
  {
    title: "Vigor Vegetativo",
    desc: "Acompanhamento técnico em campo demonstrando a sanidade foliar das culturas.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    icon: Leaf,
  },
  {
    title: "Resultado na Colheita",
    desc: "Foco em produtividade, qualidade dos grãos e consistência ao longo de todo o ciclo.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    icon: BarChart3,
  },
];

/* =========================================================================
   PÁGINA PRINCIPAL
   ========================================================================= */
export default function PrideAgriculturePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredDiff, setHoveredDiff] = useState<number | null>(null);

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
    <main ref={containerRef} className="bg-[#FBFBF9] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A1A1A]">
      
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[100] origin-left shadow-[0_0_15px_rgba(212,175,55,0.4)]"
      />

      {/* ======================================================
          1. HERO & BENEFÍCIOS
      ====================================================== */}
      <section className="relative bg-[#0B140F] pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/colheita-batata.jpg"
            alt="Colheita Pride Agriculture"
            fill
            priority
            quality={85}
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B140F]/70 via-[#0B140F]/30 to-[#0B140F]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B140F]/80 via-[#0B140F]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 md:mb-32 pt-10">
            {/* Bloco de Textos */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl lg:w-1/2"
            >
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[12px] font-sans font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                  Pride Biosolutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-normal uppercase tracking-wide leading-[1.1] text-white mb-8 drop-shadow-lg">
                PRIDE <br />
                <span className="text-[#D4AF37]">AGRICULTURE</span>
              </h1>
              
              <p className="max-w-md text-xl md:text-2xl font-light leading-relaxed text-[#E0DED8]">
                Tecnologia que potencializa sua produção de forma sustentável.
              </p>
            </motion.div>

            {/* Imagem do Produto (Bombona flutuante) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2 flex justify-center lg:justify-end w-full relative"
            >
              <Image
                src="/images/agricultura.png"
                alt="Bombona Pride Agriculture"
                width={450}
                height={550}
                priority
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
              />
            </motion.div>
          </div>

          {/* Grid Infográfico */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 border-t border-white/10 pt-16">
            {FLYER_BENEFITS.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <item.icon className="text-[#D4AF37] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" size={42} strokeWidth={1} />
                <h3 className="text-sm font-serif uppercase tracking-widest text-white mb-4 leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-[11px] font-light leading-relaxed text-[#888888]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Eficiência no Presente. Sustentabilidade no Futuro.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          2. SOLUÇÕES INTELIGENTES
      ====================================================== */}
      <section className="py-24 md:py-32 bg-[#FBFBF9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:w-5/12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] leading-[1.2] mb-8">
                Soluções Inteligentes <br />
                para uma agricultura <br />
                <span className="text-[#D4AF37] italic">mais produtiva e sustentável.</span>
              </h2>
              <p className="text-base font-light leading-relaxed text-[#666666] mb-12 border-l-2 border-[#D4AF37] pl-6">
                A Pride Agriculture é uma solução tecnológica desenvolvida para auxiliar no manejo sustentável do solo e das culturas, promovendo melhores condições para o desenvolvimento das plantas e maior eficiência no uso dos recursos.
              </p>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-4 rounded-sm bg-[#1A2E25] px-10 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:bg-[#112019] shadow-lg"
              >
                Solicitar Especificação Técnica <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-7/12 relative w-full h-[400px] md:h-[600px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200"
                alt="Plantação verde Pride"
                fill
                quality={85}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2E25]/10 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="mt-32">
            <h3 className="text-lg font-serif uppercase tracking-widest text-[#1A2E25] mb-12 text-center border-b border-[#E0DED8] pb-4">
              Aplicações
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
              {FLYER_APPLICATIONS.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <item.icon className="text-[#1A2E25] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#D4AF37]" size={36} strokeWidth={1.2} />
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
          3. DIFERENCIAIS PRIDE (GRÁFICO CRESCENTE INTERATIVO)
      ====================================================== */}
      <section className="py-24 bg-[#FBFBF9] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2E25] rounded-sm p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
          >
            {/* Detalhes Dourados */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-serif font-normal uppercase tracking-widest mb-16 border-b border-white/10 pb-6 inline-block relative z-10">
              Diferenciais Pride
            </h2>

            {/* Container do Gráfico */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-4 min-h-[450px] relative z-10">
              {FLYER_DIFFERENTIALS.map((item, index) => {
                const isHovered = hoveredDiff === index;
                const isAnyHovered = hoveredDiff !== null;
                
                // Alturas crescentes simulando um gráfico (aplicado apenas em telas grandes)
                const desktopHeights = [
                  "lg:h-[280px]",
                  "lg:h-[320px]",
                  "lg:h-[360px]",
                  "lg:h-[400px]",
                  "lg:h-[440px]",
                ];

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setHoveredDiff(index)}
                    onMouseLeave={() => setHoveredDiff(null)}
                    className={`
                      relative flex-1 flex flex-col justify-between p-6 md:p-8 
                      bg-gradient-to-t from-[#0B140F] to-[#14241D] 
                      border-t-2 rounded-t-sm transition-all duration-500 cursor-default origin-bottom
                      ${desktopHeights[index]} 
                      ${isAnyHovered && !isHovered ? "opacity-30 blur-[2px] scale-95" : "opacity-100"}
                      ${isHovered ? "scale-105 z-20 shadow-[0_-10px_40px_rgba(212,175,55,0.15)] border-[#D4AF37]" : "scale-100 border-white/5"}
                    `}
                  >
                    <div>
                      <item.icon 
                        className={`mb-6 transition-colors duration-500 ${isHovered ? 'text-[#D4AF37]' : 'text-white/40'}`} 
                        size={38} 
                        strokeWidth={1} 
                      />
                      <h4 className={`text-sm font-serif uppercase tracking-wider mb-3 leading-relaxed transition-colors duration-500 ${isHovered ? 'text-[#D4AF37]' : 'text-white'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs font-light leading-relaxed transition-colors duration-500 ${isHovered ? 'text-[#E0DED8]' : 'text-[#888888]'}`}>
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Linha base indicando preenchimento na cor de destaque */}
                    <div className={`w-full h-1 mt-6 transition-colors duration-500 rounded-full ${isHovered ? 'bg-[#D4AF37]' : 'bg-white/10'}`} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          4. PROVA VISUAL
      ====================================================== */}
      <section className="relative bg-[#0B140F] py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide leading-tight text-white mb-6">
              A força da raiz ao <span className="italic text-[#D4AF37]">fruto.</span>
            </h2>
            <p className="text-lg font-light leading-relaxed text-[#888888]">
              Registros visuais do desenvolvimento vegetal, confirmando a eficiência estrutural entregue pelas soluções Pride no campo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_CARDS.map((card, index) => (
              <motion.article 
                key={card.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-sm bg-black"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B140F] via-[#0B140F]/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <card.icon className="mb-4 text-[#D4AF37]" size={32} strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif uppercase tracking-wide text-white mb-3">{card.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-[#E0DED8]">{card.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          5. DEPOIMENTO / VÍDEO
      ====================================================== */}
      <section id="depoimento" className="bg-[#FBFBF9] py-24 md:py-32 px-6 border-t border-[#E0DED8]">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-16 max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-sm border border-[#D4AF37]/30 bg-white px-5 py-2 shadow-sm text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#1A2E25]">
              <Play size={14} fill="currentColor" className="text-[#D4AF37]" />
              Resultado em Vídeo
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] mb-6">
              Quem aplica no campo.
            </h2>
            <p className="text-lg font-light text-[#666666] leading-relaxed">
              Acompanhe a experiência real com a tecnologia Pride Biosolutions na prática.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm border border-[#E0DED8] bg-black shadow-2xl relative">
            <video
              src="/videos/depoimento-pride.mp4"
              controls
              preload="none"
              poster="/images/depoimento-poster.jpg"
              className="aspect-video w-full object-cover"
            />
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
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#D4AF37] rounded-sm shadow-lg flex items-center justify-center text-[#1A1A1A] hover:bg-[#C9A66B] transition-colors duration-300"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}