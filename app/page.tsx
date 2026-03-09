"use client";

import AppleCarouselPro from "@/app/components/AppleCarouselPro";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beef,
  Dna,
  Droplets,
  Headset,
  Leaf,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const NOVIDADES_CARDS = [
  {
    id: 1,
    tag: "ESPECIALISTA DA PRIDE",
    title: "Compre com a ajuda de um engenheiro agrônomo online ou no campo.",
    img: "/images/espe-pride.png",
  },
  {
    id: 2,
    tag: "VEM PARA O BIOLÓGICO",
    title: "É muito fácil mudar do químico tradicional para a biotecnologia.",
    img: "/images/transicao-bio.png",
  },
  {
    id: 3,
    tag: "PRIDE INTELLIGENCE",
    title: "Explore a Biologia Molecular Avançada.",
    subtitle: "Venha saber mais sobre como o Pride Alpha transforma sua safra.",
    img: "/images/agricultura-unica-product.png",
  },
  {
    id: 4,
    tag: "DIAS DE CAMPO",
    title: "Participe das sessões de inovação no campo.",
    subtitle: "Saiba como aproveitar ao máximo o potencial genético da sua lavoura.",
    img: "/images/evento-campo.png",
  },
];

const SECTORS = [
  {
    title: "Genoma Agro",
    subtitle: "Biotecnologia de precisão para lavouras de alto rendimento.",
    link: "/agricultura",
    image: "/images/setor-agri.jpg",
    logo: "/images/icone-agri.png",
  },
  {
    title: "Divisão Hydro",
    subtitle: "Saneamento biológico e recuperação de ecossistemas.",
    link: "/agua-meioambiente",
    image: "/images/setor-sanea.jpg",
    logo: "/images/icone-saneamento.png",
  },
  {
    title: "Bio-Zootecnia",
    subtitle: "Nutrição avançada e modulação imunológica animal.",
    link: "/saude-animal",
    image: "/images/setor-ani.jpg",
    logo: "/images/icone-saude.png",
  },
];

const ACTIVE_REGIONS = [
  {
    id: "MA",
    name: "Maranhão",
    top: "25%",
    left: "73%",
    forte: "Expansão de Soja e Milho (Polo Matopiba)",
    img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "PI",
    name: "Piauí",
    top: "33%",
    left: "80%",
    forte: "Alta tecnologia em Soja e Algodão",
    img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "TO",
    name: "Tocantins",
    top: "42%",
    left: "65%",
    forte: "Soja e Integração Lavoura-Pecuária",
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "RO",
    name: "Rondônia",
    top: "40%",
    left: "27%",
    forte: "Pecuária de Corte intensiva e Soja",
    img: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "BA",
    name: "Bahia",
    top: "44%",
    left: "83%",
    forte: "Referência global em Algodão e Soja",
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MT",
    name: "Mato Grosso",
    top: "48%",
    left: "47%",
    forte: "Maior produtor nacional de Soja e Milho",
    img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MG",
    name: "Minas Gerais",
    top: "60%",
    left: "75%",
    forte: "Liderança em Café e forte produção de Grãos",
    img: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "ES",
    name: "Espírito Santo",
    top: "61%",
    left: "90%",
    forte: "Referência em Café Conilon e Pimenta",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "MS",
    name: "Mato Grosso do Sul",
    detail: "Foco: Ponta Porã",
    top: "64%",
    left: "50%",
    forte: "Polo de Soja, Milho e Pecuária Integrada",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
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
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const divisoesRef = useRef<HTMLDivElement>(null);

  const scrollToDivisoes = () =>
    divisoesRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white leading-[1.1]">
              A EVOLUÇÃO DO AGRO.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Biotecnologia avançada para maximizar a rentabilidade da sua safra.
              Resultados reais baseados em ciência aplicada.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToDivisoes}
                className="bg-white text-slate-900 hover:bg-slate-200 font-bold px-10 py-4 rounded-full transition-colors flex items-center justify-center text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                Ver Divisões
              </button>

              <Link
                href="/contato"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-bold px-10 py-4 rounded-full transition-colors flex items-center justify-center text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAIXA DE AUTORIDADE - CORRIGIDA PARA MOBILE */}
      <section className="bg-black border-b border-white/5 py-8 md:py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Resultados Comprovados Em
          </p>
          {/* Ajuste de gaps e tamanhos de fonte para não quebrar no celular */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-16 lg:gap-24 opacity-80">
            <div className="flex items-center gap-1.5 md:gap-2 text-emerald-500 font-bold text-sm sm:text-base md:text-xl">
              <Sprout className="w-4 h-4 md:w-6 md:h-6" /> Soja & Milho
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-emerald-500 font-bold text-sm sm:text-base md:text-xl">
              <Leaf className="w-4 h-4 md:w-6 md:h-6" /> Cana-de-Açúcar
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-emerald-500 font-bold text-sm sm:text-base md:text-xl">
              <Beef className="w-4 h-4 md:w-6 md:h-6" /> Pecuária Intensiva
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-emerald-500 font-bold text-sm sm:text-base md:text-xl">
              <Droplets className="w-4 h-4 md:w-6 md:h-6" /> Saneamento
            </div>
          </div>
        </div>
      </section>

      {/* DIVISÕES */}
      <section
        ref={divisoesRef}
        className="py-20 bg-white relative z-10 border-t border-black/[0.04]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-[34px] md:text-[52px] leading-[1.02] tracking-[-0.05em] font-semibold text-slate-900 mb-4">
                Nossas divisões.{" "}
                <span className="text-slate-500 font-medium">
                  Protocolos hiper-especializados.
                </span>
              </h2>
              <p className="text-[17px] md:text-[19px] text-slate-500 leading-relaxed font-normal max-w-2xl">
                Desenvolvemos biotecnologia avançada para resolver os maiores
                gargalos produtivos do mercado global.
              </p>
            </div>

            <Link
              href="/sobre"
              className="hidden md:flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors tracking-wide text-[15px] pb-2 group"
            >
              Conheça nossa gênese{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SECTORS.map((sector, index) => (
              <Link
                key={index}
                href={sector.link}
                className="
                  group relative flex flex-col overflow-hidden rounded-[32px]
                  h-[540px] md:h-[600px] bg-[#F5F5F7]
                  transition-all duration-500
                  shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  border border-black/[0.03]
                "
              >
                <div className="relative z-20 px-8 pt-10 md:px-10 md:pt-12 flex-shrink-0">
                  <div className="mb-7 inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.07)] border border-black/[0.05]">
                    <Image
                      src={sector.logo}
                      alt={`Ícone ${sector.title}`}
                      width={
                        sector.title === "Genoma Agro"
                          ? 28
                          : sector.title === "Divisão Hydro"
                          ? 45
                          : sector.title === "Bio-Zootecnia"
                          ? 42
                          : 38
                      }
                      height={
                        sector.title === "Genoma Agro"
                          ? 28
                          : sector.title === "Divisão Hydro"
                          ? 42
                          : sector.title === "Bio-Zootecnia"
                          ? 42
                          : 38
                      }
                      className="object-contain brightness-0 opacity-90"
                    />
                  </div>

                  <h3 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] leading-tight text-neutral-900 mb-3">
                    {sector.title}
                  </h3>

                  <p className="text-[15px] md:text-[17px] leading-[1.45] text-neutral-500 max-w-[95%]">
                    {sector.subtitle}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 text-[15px] font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    Explorar detalhes{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                <div className="relative flex-grow mt-8 overflow-hidden rounded-b-[32px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden flex justify-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium transition-colors text-[15px] group"
            >
              Conheça nossa gênese{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* MAPA 3D BRANCO - COM CARDS DE INTELIGÊNCIA GEOGRÁFICA (AGORA É A 3ª SESSÃO APÓS DIVISÕES) */}
      <section className="py-24 bg-[#F5F5F7] relative z-10 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-[34px] md:text-[52px] leading-[1.02] tracking-[-0.05em] font-semibold text-slate-900 mb-4">
                Presença Nacional.{" "}
                <span className="text-slate-500 font-medium">
                  De ponta a ponta.
                </span>
              </h2>
              <p className="text-[17px] md:text-[19px] text-slate-500 leading-relaxed font-normal max-w-2xl">
                Nossa biotecnologia atua com excelência nos principais polos
                agrícolas do Brasil. Interaja com o mapa para visualizar nossa
                área de cobertura.
              </p>
            </div>
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
            <div className="w-full lg:w-[68%] py-16 px-4 md:px-12 relative bg-[#FBFBFD] flex items-center justify-center rounded-b-[40px] lg:rounded-bl-none lg:rounded-r-[40px]">
              <div className="absolute inset-0 overflow-hidden rounded-b-[40px] lg:rounded-bl-none lg:rounded-r-[40px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>

              <div className="relative w-full max-w-[560px] aspect-[947/951] mx-auto z-10">
                <div className="absolute inset-0">
                  <Image
                    src="/images/mapa-brasil.png"
                    alt="Mapa do Brasil"
                    fill
                    className="object-contain opacity-60 select-none pointer-events-none"
                    unoptimized
                  />

                  {ACTIVE_REGIONS.map((region) => (
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
                    >
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 scale-[2.5]" />

                      <div className="relative bg-white border border-slate-200 shadow-[0_3px_10px_rgba(0,0,0,0.05)] rounded-full px-2 py-[5px] md:px-2.5 md:py-1 flex items-center justify-center gap-1 transition-all duration-300 cursor-pointer group-hover/node:shadow-[0_10px_18px_rgba(0,0,0,0.10)] group-hover/node:border-emerald-500/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.45)]" />
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-800 select-none tracking-tight">
                          {region.id}
                        </span>
                      </div>

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 pointer-events-none group-hover/node:opacity-100 transition-all duration-300 translate-y-3 group-hover/node:translate-y-0 w-[240px] z-50">
                        <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
                          <div className="relative w-full h-28 bg-slate-200">
                            <img
                              src={region.img}
                              alt={region.name}
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVIDADES (AGORA É A 4ª SESSÃO) */}
      <section className="pt-24 pb-16 bg-[#F5F5F7] relative z-10 border-t border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 px-6 md:px-12">
            <h2 className="text-[34px] md:text-[52px] leading-[1.02] tracking-[-0.05em] font-semibold text-slate-900">
              As novidades.{" "}
              <span className="text-slate-500 font-medium">
                O que há de mais avançado no agro.
              </span>
            </h2>
          </div>

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
                    className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>
              </Link>
            ))}
          </AppleCarouselPro>
        </div>
      </section>

      {/* BIOTECNOLOGIA PRIDE */}
      <section className="py-24 bg-[#050505] relative z-10 overflow-hidden border-t border-white/5">
        {/* Efeito de Luz de Fundo (Glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Cabeçalho da Sessão */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Biotecnologia Pride
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Maximizando a <span className="text-emerald-500">Safra</span>,
              <br />
              Regenerando o Futuro.
            </h2>
          </div>

          {/* Grid de Cards 3D Neon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Efeito 3D do Ícone */}
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Dna className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>

              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Biotecnologia de Precisão
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Protocolos biológicos hiper-especializados baseados em biologia
                molecular avançada para otimizar resultados de cultivo.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Headset className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>

              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Engenharia Agronômica Dedicada
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Suporte consultivo de engenheiros agrônomos experientes, online
                e no campo, focado na maximização da safra.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.35)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sprout className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] relative z-10" />
              </div>

              <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4 tracking-tight leading-snug">
                Soluções Biológicas de Amplo Espectro
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Protocolos que restauram a saúde do solo e promovem um
                agronegócio regenerativo e sustentável.
              </p>
            </motion.div>
          </div>

          {/* Call to Action Final */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p className="text-slate-300 text-lg md:text-xl font-medium">
              Fale com um Especialista Pride e transforme sua produção.
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