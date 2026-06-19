"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Headset,
  Recycle,
  ShieldCheck,
  Sprout,
  Wind,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Importação Dinâmica do Carrossel (Só carrega quando o usuário chegar perto dele)
const AppleCarouselPro = dynamic(() => import("@/app/components/AppleCarouselPro"), {
  ssr: false,
  loading: () => (
    <div className="h-[460px] w-full animate-pulse bg-slate-200/50 rounded-[28px] max-w-[1400px] mx-auto mt-8"></div>
  ),
});

const NOVIDADES_CARDS = [
  {
    id: 1,
    tag: "AGRO ANT™",
    title: "Soluções inteligentes para uma agricultura produtiva e sustentável.",
    img: "/images/folders/agricultura1.webp",
  },
  {
    id: 2,
    tag: "COMPOST ANT™",
    title: "Tecnologia que transforma matéria orgânica em recursos de alto valor.",
    img: "/images/folders/espe-pride.png",
  },
  {
    id: 3,
    tag: "SEPAR ANT™",
    title: "Manejo ambiental avançado para operações industriais.",
    subtitle: "Redução de odores, estabilização orgânica e eficiência operacional.",
    img: "/images/sanitation-hero-bg.webp",
  },
  {
    id: 4,
    tag: "LIVESTOCK ANT™",
    title: "Performance ambiental para a pecuária moderna.",
    subtitle: "Ambiência, resíduos e performance operacional para bovinocultura.",
    img: "/images/livestock-hero-bg.webp",
  },
  {
    id: 5,
    tag: "POULTRY ANT™",
    title: "Ambiência em equilíbrio para aviários modernos.",
    subtitle: "Apoio ao controle de odores, cama de aviário e conforto ambiental.",
    img: "/images/poultry-showcase.webp",
  },
  {
    id: 6,
    tag: "SWINE ANT™",
    title: "Inteligência ambiental para granjas mais eficientes.",
    subtitle: "Manejo de instalações, dejetos e redução de odores na suinocultura.",
    img: "/images/swine-showcase.webp",
  },
];

const SECTORS = [
  {
    title: "Agro Ant™",
    subtitle: "Manejo do solo, culturas e recursos para uma agricultura mais produtiva.",
    link: "/agricultura",
    image: "/images/pride-agriculturebg.webp",
    logo: "/images/icone-agr.png",
  },
  {
    title: "Separ Ant™",
    subtitle: "Manejo ambiental para efluentes, odores, resíduos e operações sustentáveis.",
    link: "/agua-meioambiente",
    image: "/images/sanitationbg.webp",
    logo: "/images/icone-sane.png",
  },
  {
    title: "Compost Ant™",
    subtitle: "Transformação orgânica inteligente para compostos mais estáveis e valorizados.",
    link: "/compost",
    image: "/images/compostbg.webp",
    logo: "/images/icone-compost.png",
  },
  {
    title: "Livestock Ant™",
    subtitle: "Performance ambiental e ambiência para bovinocultura moderna.",
    link: "/livestock-ant",
    image: "/images/livestockbg.webp",
    logo: "/images/icone-livestock.png",
  },
  {
    title: "Poultry Ant™",
    subtitle: "Ambiência, cama de aviário e estabilidade ambiental para aves.",
    link: "/poultry-ant",
    image: "/images/poultry.webp",
    logo: "/images/icone-poultry.png",
  },
  {
    title: "Swine Ant™",
    subtitle: "Manejo sustentável de granjas, instalações, dejetos e odores.",
    link: "/swine-ant",
    image: "/images/swine.webp",
    logo: "/images/icone-swine.png",
  },
];

// LINKS DE IMAGENS CORRIGIDOS E ESTÁVEIS (100% AGRO)
const ACTIVE_REGIONS = [
  {
    id: "MA",
    name: "Maranhão",
    top: "25%",
    left: "73%",
    forte: "Expansão de Soja e Milho (Polo Matopiba)",
    img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "PI",
    name: "Piauí",
    top: "33%",
    left: "80%",
    forte: "Alta tecnologia em Soja e Algodão",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "TO",
    name: "Tocantins",
    top: "42%",
    left: "65%",
    forte: "Soja e Integração Lavoura-Pecuária",
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "RO",
    name: "Rondônia",
    top: "40%",
    left: "27%",
    forte: "Pecuária de Corte intensiva e Soja",
    img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "BA",
    name: "Bahia",
    top: "44%",
    left: "83%",
    forte: "Referência global em Algodão e Soja",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MT",
    name: "Mato Grosso",
    top: "48%",
    left: "47%",
    forte: "Maior produtor nacional de Soja e Milho",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MG",
    name: "Minas Gerais",
    top: "60%",
    left: "75%",
    forte: "Liderança em Café e forte produção de Grãos",
    img: "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "ES",
    name: "Espírito Santo",
    top: "61%",
    left: "90%",
    forte: "Referência em Café Conilon e Pimenta",
    img: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MS",
    name: "Mato Grosso do Sul",
    detail: "Foco: Ponta Porã",
    top: "64%",
    left: "50%",
    forte: "Polo de Soja, Milho e Pecuária Integrada",
    img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "SP",
    name: "São Paulo",
    top: "70%",
    left: "65%",
    forte: "Potência em Cana-de-açúcar e Citricultura",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "SC",
    name: "Santa Catarina",
    top: "83%",
    left: "66%",
    forte: "Excelência em Suinocultura, Aves e Cereais",
    img: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const divisoesRef = useRef<HTMLDivElement>(null);
  const [activeMapRegion, setActiveMapRegion] = useState<string | null>(null);

  const scrollToDivisoes = () =>
    divisoesRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-black text-slate-900 font-sans selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION 100% FULL SCREEN (HACK SAFARI iOS) */}
      <section 
        className="relative w-full flex flex-col overflow-hidden bg-black"
        style={{ 
          height: "100lvh", /* Força a altura exata da tela */
          minHeight: "-webkit-fill-available" /* Hack supremo que o Safari obedece cegamente */
        }}
      >
        {/* CONTAINER DO VÍDEO */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
            <Image 
              src="/images/hero-poster.jpg" 
              alt="Preload" 
              fill 
              priority 
              quality={80} 
            />
          </div>

          <video
            src="/videos/hero-background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              backgroundImage: "url('/images/hero-poster.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#000000",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
            className="opacity-40"
          />
        </div>

        {/* CONTAINER DOS TEXTOS */}
        <div 
          className="relative z-10 w-[96%] max-w-[1240px] mx-auto px-4 md:px-8 lg:px-10 flex flex-col justify-between flex-1"
          style={{
            paddingTop: "max(130px, env(safe-area-inset-top) + 90px)",
            paddingBottom: "max(40px, env(safe-area-inset-bottom) + 20px)"
          }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full mt-2 text-left"
          >
            <h1 className="font-[family-name:var(--font-titulo)] text-3xl md:text-5xl lg:text-[40px] xl:text-[46px] lg:ml-[30px] font-normal tracking-normal text-white leading-tight lg:whitespace-nowrap">
              Inovações naturais para um futuro sustentável.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center mt-auto"
          >
            <p className="text-slate-200 text-base md:text-xl lg:text-[22px] mb-8 max-w-5xl font-semibold leading-relaxed drop-shadow-lg">
              Tecnologia de base orgânica para agricultura, saneamento, compostagem e pecuária. Soluções inteligentes que melhoram o manejo, reduzem impactos e geram valor produtivo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <button
                onClick={scrollToDivisoes}
                className="bg-white text-slate-900 hover:bg-slate-200 font-bold px-8 py-3.5 rounded-full transition-colors flex items-center justify-center text-sm uppercase tracking-wider w-full sm:w-auto shadow-lg"
              >
                Áreas de Atuação
              </button>

              <Link
                href="/contato"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-full transition-colors flex items-center justify-center text-sm uppercase tracking-wider w-full sm:w-auto shadow-lg"
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAIXA DE AUTORIDADE */}
      <section className="bg-black border-b border-white/5 py-3 md:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 md:gap-16 lg:gap-24 opacity-80 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <Sprout className="w-4 h-4 md:w-6 md:h-6" /> Agro Ant™
            </div>
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <Droplets className="w-4 h-4 md:w-6 md:h-6" /> Separ Ant™
            </div>
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <Recycle className="w-4 h-4 md:w-6 md:h-6" /> Compost Ant™
            </div>
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <ShieldCheck className="w-4 h-4 md:w-6 md:h-6" /> Livestock Ant™
            </div>
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <Wind className="w-4 h-4 md:w-6 md:h-6" /> Poultry Ant™
            </div>
            <div className="flex items-center gap-2 shrink-0 text-emerald-500 font-bold text-xs sm:text-base md:text-xl">
              <Headset className="w-4 h-4 md:w-6 md:h-6" /> Swine Ant™
            </div>
          </div>
        </div>
      </section>

     {/* DIVISÕES - CARDS MENORES E RESPONSIVOS */}
<section
  ref={divisoesRef}
  className="py-14 md:py-18 bg-white relative z-10 border-t border-black/[0.04]"
>
  <div className="max-w-6xl mx-auto px-5 md:px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-[30px] md:text-[44px] leading-[1.04] tracking-[-0.045em] font-semibold text-slate-900 mb-3">
          Linhas Anthars.{" "}
          <span className="text-slate-500 font-medium">
            Soluções para cada desafio.
          </span>
        </h2>

        <p className="text-[15px] md:text-[17px] text-slate-500 leading-relaxed font-normal max-w-2xl">
          Seis frentes tecnológicas conectadas por uma mesma lógica:
          compostos orgânicos funcionais, aplicação prática e responsabilidade ambiental.
        </p>
      </motion.div>

      <Link
        href="/sobre"
        className="hidden md:flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors tracking-wide text-[14px] pb-1 group"
      >
        Conheça a Anthars{" "}
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {SECTORS.map((sector, index) => (
        <Link
          key={index}
          href={sector.link}
          className="
            group relative flex flex-col overflow-hidden rounded-[24px]
            h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px]
            bg-[#F5F5F7]
            transition-all duration-500
            shadow-[0_4px_18px_rgba(0,0,0,0.035)]
            hover:shadow-[0_16px_34px_rgba(0,0,0,0.08)]
            border border-black/[0.03]
          "
        >
          <div className="relative z-20 px-6 pt-6 md:px-7 md:pt-7 flex-shrink-0">
            <div className="mb-4 inline-flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full bg-white shadow-[0_7px_20px_rgba(0,0,0,0.07)] border border-black/[0.05]">
              <Image
                src={sector.logo}
                alt={`Ícone ${sector.title}`}
                width={30}
                height={30}
                className="object-contain brightness-0 opacity-90"
              />
            </div>

            <h3 className="text-[23px] md:text-[25px] font-semibold tracking-[-0.02em] leading-tight text-neutral-900 mb-2">
              {sector.title}
            </h3>

            <p className="text-[13px] md:text-[14px] leading-[1.45] text-neutral-500 max-w-[92%]">
              {sector.subtitle}
            </p>

            <div className="mt-4 flex items-center gap-1.5 text-[13px] md:text-[14px] font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
              Explorar detalhes{" "}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>

          <div className="relative flex-1 mt-5 overflow-hidden rounded-b-[24px] min-h-[120px]">
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-9 md:hidden flex justify-center">
      <Link
        href="/sobre"
        className="inline-flex items-center gap-2 text-emerald-600 font-medium transition-colors text-[15px] group"
      >
        Conheça a Anthars{" "}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  </div>
</section>

      {/* MAPA 3D BRANCO */}
      <section className="py-24 bg-[#F5F5F7] relative z-10 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-[34px] md:text-[52px] leading-[1.02] tracking-[-0.05em] font-semibold text-slate-900 mb-4">
                Presença Nacional.{" "}
                <span className="text-slate-500 font-medium">
                  De ponta a ponta.
                </span>
              </h2>
              <p className="text-[17px] md:text-[19px] text-slate-500 leading-relaxed font-normal max-w-2xl">
                Nossa tecnologia orgânica funcional atua com excelência nos principais polos
                agrícolas do Brasil. Interaja com o mapa para visualizar nossa
                área de cobertura.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.02] flex flex-col lg:flex-row min-h-[650px]">
            {/* Lista lateral */}
            <div className="w-full lg:w-[32%] p-10 md:p-14 bg-white z-10 shadow-[20px_0_40px_rgba(0,0,0,0.02)] rounded-t-[40px] lg:rounded-tr-none lg:rounded-l-[40px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Raio de Atuação
              </div>
              <h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">
                11 Estados Estratégicos.
              </h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-2">
                {ACTIVE_REGIONS.map((region) => (
                  <div
                    key={`list-${region.id}`}
                    className="group flex flex-col cursor-default"
                  >
                    <span className="text-[15px] font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">
                      {region.name}
                    </span>
                    {region.detail && (
                      <span className="text-[12px] text-slate-400 mt-0.5 font-medium">
                        {region.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa gigante */}
            <div 
              className="w-full lg:w-[68%] py-16 px-4 md:px-12 relative bg-[#FBFBFD] flex items-center justify-center rounded-b-[40px] lg:rounded-bl-none lg:rounded-r-[40px]"
              onClick={() => setActiveMapRegion(null)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-b-[40px] lg:rounded-bl-none lg:rounded-r-[40px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>

              <div className="relative w-full max-w-[560px] aspect-[947/951] mx-auto z-10">
                <div className="absolute inset-0">
                  <Image
                    src="/images/mapa-brasil.png"
                    alt="Mapa do Brasil"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-contain opacity-60 select-none pointer-events-none"
                    unoptimized
                  />

                  {ACTIVE_REGIONS.map((region) => {
                    const leftPos = parseInt(region.left);
                    const isRightEdge = leftPos >= 70;
                    const isLeftEdge = leftPos <= 30;

                    return (
                      <motion.div
                        key={`map-${region.id}`}
                        className="absolute group/node z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 hover:z-50"
                        style={{ top: region.top, left: region.left }}
                        whileHover={{ y: -8, scale: 1.15 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMapRegion(activeMapRegion === region.id ? null : region.id);
                        }}
                      >
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 scale-[2.5]" />

                        <div className="relative bg-white border border-slate-200 shadow-[0_3px_10px_rgba(0,0,0,0.05)] rounded-full px-2 py-[5px] md:px-2.5 md:py-1 flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer group-hover/node:shadow-[0_10px_18px_rgba(0,0,0,0.10)] group-hover/node:border-emerald-500/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.45)]" />
                          <span className="text-[9px] md:text-[10px] font-bold text-slate-800 select-none tracking-tight">
                            {region.id}
                          </span>
                        </div>

                        {/* CARD COM ALINHAMENTO DINÂMICO */}
                        <div 
                          className={`absolute bottom-full mb-4 transition-all duration-300 w-[240px] z-50 ${
                            activeMapRegion === region.id 
                              ? "opacity-100 translate-y-0 pointer-events-auto" 
                              : "opacity-0 translate-y-3 pointer-events-none group-hover/node:opacity-100 group-hover/node:translate-y-0"
                          } ${
                            isRightEdge 
                              ? "right-[-16px]" 
                              : isLeftEdge 
                                ? "left-[-16px]" 
                                : "left-1/2 -translate-x-1/2"
                          }`}
                        >
                          <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
                            <div className="relative w-full h-28 bg-slate-200">
                              <img
                                src={region.img}
                                alt={region.name}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              <span className="absolute bottom-3 left-4 text-white font-bold text-[16px] tracking-tight drop-shadow-md">
                                {region.name}
                              </span>
                            </div>

                            <div className="p-4 flex flex-col bg-white">
                              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 mb-1.5">
                                Polo Agrícola
                              </span>
                              <span className="text-[13px] font-medium text-slate-700 leading-snug">
                                {region.forte}
                              </span>

                              {region.detail && (
                                <div className="mt-3 border-t border-slate-100 pt-3">
                                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {region.detail}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className={`absolute top-full border-[8px] border-transparent border-t-white ${
                            isRightEdge 
                              ? "right-[8px]" 
                              : isLeftEdge 
                                ? "left-[8px]" 
                                : "left-1/2 -translate-x-1/2"
                          }`} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVIDADES */}
      <section className="pt-24 pb-16 bg-[#F5F5F7] relative z-10 border-t border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 px-6 md:px-12"
          >
            <h2 className="text-[34px] md:text-[52px] leading-[1.02] tracking-[-0.05em] font-semibold text-slate-900">
              As novidades.{" "}
              <span className="text-slate-500 font-medium">
                O que há de mais avançado no agro.
              </span>
            </h2>
          </motion.div>

          <AppleCarouselPro
            fadeColorClassName="from-[#F5F5F7]"
            sidePaddingClassName="pl-6 md:pl-12 pr-6"
            gapClassName="gap-6"
            scrollPaddingPx={56}
            autoHideControls
            focusEffect
            trackClassName="hide-scrollbar cursor-grab no-select"
          >
            {NOVIDADES_CARDS.map((card) => (
              <Link
                href="/contato"
                key={card.id}
                className="
                  shrink-0 snap-center relative flex flex-col
                  w-[315px] md:w-[400px] lg:w-[420px]
                  h-[460px] md:h-[540px] lg:h-[560px]
                  rounded-[28px] bg-white
                  transition-all duration-500
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                  group/card
                  border border-black/[0.03]
                "
              >
                <div className="relative z-20 px-7 pt-7 md:px-8 md:pt-8 bg-white rounded-t-[28px]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.02em] text-neutral-500 mb-2">
                    {card.tag}
                  </p>

                  <h3 className="text-[22px] md:text-[28px] font-semibold tracking-[-0.01em] leading-[1.15] text-neutral-900">
                    {card.title}
                  </h3>

                  {"subtitle" in card && card.subtitle && (
                    <p className="text-[14px] md:text-[16px] leading-[1.4] text-neutral-500 mt-2">
                      {card.subtitle}
                    </p>
                  )}
                </div>

                <div className="relative flex-grow mt-2 overflow-hidden rounded-b-[28px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover/card:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </AppleCarouselPro>
        </div>
      </section>

      {/* PLATAFORMA ANTHARS */}
      <section className="py-24 bg-[#050505] relative z-10 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Anthars Technology Platform
            </p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Transformando <span className="text-emerald-500">Ambientes</span>,
              <br />
              Gerando Valor.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sprout className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>
              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Tecnologia Orgânica de Precisão
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Formulações à base de compostos orgânicos e extratos naturais
                para apoiar processos produtivos mais estáveis e eficientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Headset className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>
              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Engenharia Agronômica Dedicada
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Suporte técnico para orientar aplicações em lavouras, granjas,
                operações ambientais, compostagem e pecuária.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Recycle className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>
              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Soluções Ambientais de Amplo Espectro
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Tecnologias desenhadas para reduzir odores, estabilizar matéria
                orgânica, otimizar recursos e elevar a sustentabilidade operacional.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p className="text-slate-300 text-lg md:text-xl font-medium">
              Fale com um especialista Anthars e encontre a linha ideal para sua operação.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 text-xs md:text-sm uppercase tracking-widest"
            >
              Falar com um especialista <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
