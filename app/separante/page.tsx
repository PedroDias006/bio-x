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
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================================================================
   DADOS SANE ANT
   ========================================================================= */

const FLYER_BENEFITS = [
  {
    title: "Redução de Odores",
    desc: "Auxilia na redução de odores desagradáveis em sistemas com presença de matéria orgânica.",
    icon: Wind,
  },
  {
    title: "Melhoria da Transparência",
    desc: "Contribui para melhorar o aspecto visual da água e favorecer processos de clarificação.",
    icon: Droplets,
  },
  {
    title: "Sedimentação de Partículas",
    desc: "Apoia a sedimentação de partículas e a redução de sólidos em suspensão.",
    icon: Waves,
  },
  {
    title: "Fácil Aplicação",
    desc: "Formulação natural e prática para diferentes rotinas de tratamento e remediação ambiental.",
    icon: Settings,
  },
];

const FLYER_APPLICATIONS = [
  {
    title: "Lagoas de Estabilização",
    desc: "Auxilia em sistemas de tratamento que utilizam lagoas para estabilização e controle ambiental.",
    icon: Waves,
  },
  {
    title: "Efluentes Industriais",
    desc: "Pode ser utilizado no apoio ao tratamento de efluentes conforme as características da operação.",
    icon: Factory,
  },
  {
    title: "Efluentes Agroindustriais",
    desc: "Contribui para o manejo de efluentes com carga orgânica proveniente de processos agroindustriais.",
    icon: Recycle,
  },
  {
    title: "Lagos Ornamentais",
    desc: "Apoia a melhoria visual da água e o controle de odores em lagos e espelhos d’água.",
    icon: Sparkles,
  },
  {
    title: "Canais e Reservatórios",
    desc: "Aplicação voltada para ambientes aquáticos que exigem controle, equilíbrio e manutenção.",
    icon: Globe2,
  },
  {
    title: "Controle de Odores",
    desc: "Auxilia na redução de odores desagradáveis associados à matéria orgânica em decomposição.",
    icon: Wind,
  },
  {
    title: "Clarificação da Água",
    desc: "Favorece processos físicos e químicos que contribuem para maior transparência da água.",
    icon: Droplets,
  },
  {
    title: "Redução de Carga Orgânica",
    desc: "Apoia sistemas de tratamento na redução da carga orgânica e na estabilidade operacional.",
    icon: BarChart3,
  },
];

const FLYER_DIFFERENTIALS = [
  {
    title: "Remediação Ambiental Natural",
    desc: "Tecnologia desenvolvida para auxiliar na recuperação da qualidade da água por meio de processos naturais ou estimulados.",
    icon: Leaf,
  },
  {
    title: "Formulação Natural",
    desc: "Solução baseada em componentes naturais, com aplicação voltada para saneamento, lagoas e efluentes.",
    icon: ShieldCheck,
  },
  {
    title: "Apoio ao Tratamento",
    desc: "Favorece processos físicos e químicos que contribuem para a redução de matéria orgânica e sólidos em suspensão.",
    icon: Droplets,
  },
  {
    title: "Eficiência Operacional",
    desc: "Contribui para melhores condições operacionais e pode reduzir a necessidade de limpezas frequentes.",
    icon: Settings,
  },
];

const PROOF_CARDS = [
  {
    title: "Clarificação da Água",
    desc: "Apoio visual e operacional para sistemas que precisam melhorar transparência e reduzir sólidos em suspensão.",
    image: "/images/sanitation-prova-1.webp",
    icon: Droplets,
  },
  {
    title: "Controle de Carga Orgânica",
    desc: "Auxilia processos de tratamento em lagoas, efluentes industriais e agroindustriais.",
    image: "/images/sanitation-prova-2.webp",
    icon: BarChart3,
  },
  {
    title: "Remediação Ambiental",
    desc: "Tecnologia natural voltada para recuperar condições ambientais em águas e sistemas de saneamento.",
    image: "/images/sanitation-prova-3.webp",
    icon: Leaf,
  },
];

/* =========================================================================
   PÁGINA PRINCIPAL
   ========================================================================= */
export default function SaneAntPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
    <main
      ref={containerRef}
      className="bg-[#FBFBF9] text-[#1A1A1A] overflow-x-hidden font-sans selection:bg-[#4BB1D3]/20 selection:text-[#1A1A1A]"
    >
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#4BB1D3] z-[100] origin-left shadow-[0_0_15px_rgba(75,177,211,0.4)]"
      />

      {/* ======================================================
          1. HERO
      ====================================================== */}
      <section className="relative bg-[#07131D] pt-32 pb-32 md:pt-40 md:pb-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sanitation-hero-bg.webp"
            alt="Água e remediação ambiental"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131D]/70 via-[#07131D]/20 to-[#07131D]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07131D]/90 via-[#07131D]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12"
          >
            <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4 w-fit">
              <ShieldCheck
                size={18}
                className="text-[#4BB1D3]"
                strokeWidth={1.5}
              />
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#E0DED8]">
                Tecnologia de Remediação Ambiental Natural
              </span>
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl font-serif font-normal uppercase tracking-normal sm:tracking-wide leading-[1.05] sm:leading-[1.1] text-white mb-8">
              SANE <br />
              <span className="text-[#4BB1D3] italic">ANT</span>
            </h1>

            <p className="max-w-xl text-lg font-light leading-relaxed text-[#E0DED8] mb-12 border-l border-[#4BB1D3] pl-6">
              Solução natural desenvolvida para auxiliar na melhoria da
              qualidade da água e no tratamento de efluentes, favorecendo
              processos físicos e químicos que contribuem para a redução de
              matéria orgânica, odores e sólidos em suspensão.
            </p>

            <Link
              href="/contato"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#4BB1D3] px-6 py-5 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#07131D] transition-colors hover:bg-[#3A8EA8] shadow-lg sm:w-auto sm:px-10"
            >
              Falar com Engenharia <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Produto Direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:w-5/12 flex justify-center lg:justify-end w-full overflow-visible"
          >
            <Image
              src="/images/saneant.png"
              alt="Bombona Sane Ant"
              width={430}
              height={540}
              priority
              quality={90}
              className="w-[74vw] max-w-[300px] md:max-w-[350px] lg:w-[clamp(350px,28vw,430px)] lg:max-w-none h-auto object-contain drop-shadow-[0_35px_48px_rgba(0,0,0,0.82)] transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. BARRA FLUTUANTE DE BENEFÍCIOS
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
              <div
                key={item.title}
                className="flex flex-col border-l border-white/5 pl-6"
              >
                <item.icon
                  className="text-[#4BB1D3] mb-4"
                  size={28}
                  strokeWidth={1.5}
                />
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
          3. APLICAÇÕES
      ====================================================== */}
      <section className="py-24 md:py-32 bg-[#FBFBF9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#4BB1D3] mb-4">
              Principais Aplicações
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] leading-tight mb-6">
              Remediação natural <br />
              <span className="text-[#4BB1D3] italic">
                para água e efluentes.
              </span>
            </h2>
            <p className="text-base font-light leading-relaxed text-[#666666]">
              A Sane Ant pode ser aplicada em sistemas de saneamento, lagoas,
              efluentes industriais e agroindustriais, sempre conforme as
              características de cada aplicação.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[450px] relative rounded-sm overflow-hidden shadow-xl mb-16"
          >
            <Image
              src="/images/sanitation-panoramica.webp"
              alt="Sistema de tratamento e água"
              fill
              quality={75}
              sizes="(max-width: 1280px) 100vw, 1200px"
              loading="lazy"
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B29] to-transparent opacity-70" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#4BB1D3]">
                Saneamento • Lagoas • Efluentes • Reservatórios
              </p>
            </div>
          </motion.div>

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
                  <item.icon
                    className="text-[#0B1B29] group-hover:text-[#4BB1D3] transition-colors"
                    size={24}
                    strokeWidth={1.5}
                  />
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
          4. DIFERENCIAIS / BENEFÍCIOS ESPERADOS
      ====================================================== */}
      <section className="relative bg-[#0B1B29] py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#4BB1D3] mb-4">
              Benefícios Esperados
            </p>
            <h2 className="text-[#4BB1D3] text-4xl font-serif font-normal uppercase tracking-wide mb-6">
              Água mais <br /> equilibrada
            </h2>
            <p className="text-base font-light text-[#888888] leading-relaxed">
              A remediação ambiental é utilizada para recuperar a qualidade de
              águas e solos contaminados por processos naturais ou estimulados.
              A Sane Ant entra como apoio técnico nesse processo.
            </p>
          </div>

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
                  <item.icon
                    className="text-[#4BB1D3]"
                    size={36}
                    strokeWidth={1.5}
                  />
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
          5. PROVA VISUAL
      ====================================================== */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-[#4BB1D3] mb-4">
              Resultado Operacional
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide leading-tight text-[#1A1A1A]">
              Controle <span className="italic text-[#4BB1D3]">Visível.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <FirstProofIcon
                  className="mb-4 text-[#4BB1D3]"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-3xl font-serif uppercase tracking-wide text-white mb-2">
                  {PROOF_CARDS[0].title}
                </h3>
                <p className="text-sm font-light text-[#E0DED8] max-w-md">
                  {PROOF_CARDS[0].desc}
                </p>
              </div>
            </motion.div>

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
                    <h3 className="text-lg font-serif uppercase tracking-wide text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[11px] font-light text-[#888888] line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          6. DEPOIMENTO / VÍDEO
      ====================================================== */}
      <section
        id="depoimento"
        className="bg-[#FBFBF9] py-24 md:py-32 px-6 border-t border-[#E0DED8]"
      >
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12">
            <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-[#4BB1D3]/30 bg-white px-4 py-1.5 shadow-sm text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-[#0B1B29]">
              <Play size={12} fill="currentColor" className="text-[#4BB1D3]" />
              Aplicação em Sistema
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-[#1A1A1A] mb-6">
              Remediação em <br /> Operação.
            </h2>
            <p className="text-base font-light text-[#666666] leading-relaxed mb-8">
              A Sane Ant foi desenvolvida para apoiar sistemas de saneamento,
              lagoas, efluentes industriais, efluentes agroindustriais, canais e
              reservatórios, sempre respeitando a necessidade técnica de cada
              aplicação.
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