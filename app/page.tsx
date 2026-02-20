"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import {
   ArrowRight,
   CheckCircle2,
   ChevronDown,
   Layers,
   Leaf,
   ShieldCheck,
   ShoppingCart,
   Sprout,
   Star,
   TestTube2,
   Truck,
   Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* =========================================================================
   DADOS DOS PRODUTOS (COM CORES DEFINIDAS PARA O GLOW)
   ========================================================================= */
const PRODUCTS = [
  {
    id: 1,
    name: "Aetheris Alpha™",
    headline: "Bioativador Molecular",
    desc: "Desbloqueia fósforo e estrutura a microbiota.",
    img: "/images/agricultura-unica-product.png",
    price: 189.90,
    tag: "Mais Vendido",
    rating: 4.9,
    glowColor: "bg-emerald-500/20",
    btnColor: "bg-emerald-600 hover:bg-emerald-700"
  },
  {
    id: 2,
    name: "Hydro-Synth™",
    headline: "Engenharia Hídrica",
    desc: "Redução de carga orgânica em efluentes.",
    img: "/images/sanaqua-product.png",
    price: 209.90,
    tag: "Tecnologia",
    rating: 4.8,
    glowColor: "bg-cyan-500/20",
    btnColor: "bg-cyan-600 hover:bg-cyan-700"
  },
  {
    id: 3,
    name: "Bovine-Shield™",
    headline: "Conversão Alimentar",
    desc: "Otimização para ganho de peso acelerado.",
    img: "/images/saude-gado-product.png",
    price: 199.90,
    tag: "Performance",
    rating: 5.0,
    glowColor: "bg-amber-500/20",
    btnColor: "bg-amber-600 hover:bg-amber-700"
  },
  {
    id: 4,
    name: "Root-Genesis™",
    headline: "Enraizador Potente",
    desc: "Expansão radicular para culturas rápidas.",
    img: "/images/raiz-viva-product.png",
    price: 179.90,
    tag: "Essencial",
    rating: 4.7,
    glowColor: "bg-rose-500/20",
    btnColor: "bg-rose-600 hover:bg-rose-700"
  },
];

/* =========================================================================
   DADOS DAS CATEGORIAS
   ========================================================================= */
const SECTORS = [
  {
    title: "Genoma Agro",
    subtitle: "Potencialize sua lavoura",
    link: "/agricultura",
    image: "/images/setor-agricultura.jpg", 
    logo: "/images/icone-agricultura.png", 
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Divisão Hydro",
    subtitle: "Tratamento biológico",
    link: "/agua-meioambiente",
    image: "/images/setor-saneamento.jpg", 
    logo: "/images/icone-saneamento.png", 
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Bio-Zootecnia",
    subtitle: "Nutrição e bem-estar",
    link: "/saude-animal",
    image: "/images/setor-animal.jpg", 
    logo: "/images/icone-saude-animal.png", 
    color: "from-amber-500 to-orange-600"
  }
];

const FEATURE_POINTS = [
   { title: "Bio-Catalisador", desc: "Nutrição ativa de alta absorção.", icon: Leaf },
   { title: "Condicionador Sintético", desc: "Melhora estrutura e retenção de água.", icon: Layers },
   { title: "Vetor Radicular", desc: "Expansão radicular agressiva.", icon: Sprout },
   { title: "Inoculante", desc: "Fixação biológica de nitrogênio.", icon: TestTube2 },
   { title: "Bio-Blindagem", desc: "Blindagem natural contra patógenos.", icon: ShieldCheck },
];

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function AetherisHome() {
  const { addToCart } = useCart();
  const produtosRef = useRef<HTMLDivElement>(null);
  const scrollToProdutos = () => produtosRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-500/20 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION COM VÍDEO FULL SCREEN */}
      <section className="relative w-full overflow-hidden h-screen flex items-center justify-center">
        
        {/* VÍDEO DE FUNDO */}
        <div className="absolute inset-0 z-0">
           <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
           >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
           </video>
           {/* Overlay escuro para garantir que o texto branco fique legível sobre qualquer vídeo */}
           <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* MUDANÇA: Adicionado mt-20 para compensar visualmente o NavBar no topo */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 animate-pulse backdrop-blur-md shadow-sm">
               <Zap size={14} fill="currentColor" /> Baixo Risco + Alto Retorno
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-tight drop-shadow-2xl">
              Amplifique o Rendimento <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 drop-shadow-md">& Otimize o ROI.</span>
            </h1>
            
            <p className="text-white text-lg md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium drop-shadow-lg">
              O investimento no protocolo Aetheris representa apenas <strong className="text-cyan-300">~4%</strong> do custo da lavoura, mas pode gerar até <strong className="text-cyan-300">28% de aumento</strong> no seu lucro líquido.
            </p>
            
            <div className="flex justify-center">
               <button onClick={scrollToProdutos} className="group bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-full transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-3 text-lg hover:-translate-y-1 w-full sm:w-auto">
                 Conheça o Aetheris Alpha <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
           <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. PRINCIPAIS ÁREAS */}
      <section className="py-16 md:py-24 bg-white relative z-10 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Divisões Estratégicas:</h2>
               <p className="text-slate-500">Tecnologia especializada para cada desafio do campo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {SECTORS.map((sector, index) => (
                  <Link href={sector.link} key={index} className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer">
                     <Image src={sector.image} alt={sector.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                     <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-3">
                           <Image src={sector.logo} alt={`Ícone ${sector.title}`} width={48} height={48} className="object-contain" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{sector.title}</h3>
                        <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 delay-100">
                           {sector.subtitle}
                        </p>
                        <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${sector.color} text-white text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 group-hover:gap-4 transition-all duration-300`}>
                           Ver Categoria <ArrowRight size={14} />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 3. SESSÃO DESTAQUE DO PRODUTO (5 EM 1) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image src="/images/fundo-tecnologia-dark.jpg" alt="Fundo Tecnologia Dark" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               <FadeInUp>
                  <div className="mb-8 md:mb-12">
                     <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                        <Zap size={16} className="text-emerald-400" /> Tecnologia Multifuncional
                     </span>
                     <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                        O Poder de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">5 Protocolos</span> <br />
                        em 1 Única Unidade.
                     </h2>
                     <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg font-light drop-shadow-sm">
                        Esqueça a complexidade de múltiplos insumos. O Aetheris Alpha entrega um manejo completo, simplificado e mais potente em uma só aplicação.
                     </p>
                  </div>
                  <div className="space-y-3 mb-12">
                     {FEATURE_POINTS.map((feature, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-default backdrop-blur-sm">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm shadow-emerald-500/10">
                              <feature.icon size={24} />
                           </div>
                           <div>
                              <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2 drop-shadow-sm">
                                 {feature.title}
                                 <CheckCircle2 size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors drop-shadow-sm">{feature.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
                  <div>
                     <a href="https://wa.me/5531995235778" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-1 w-full sm:w-auto">
                        QUERO SIMPLIFICAR MEU MANEJO <ArrowRight size={22} />
                     </a>
                  </div>
               </FadeInUp>
               <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} className="relative flex items-center justify-center lg:justify-end">
                  <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-emerald-500/30 blur-[80px] rounded-full" />
                     <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-1/2 h-2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm" />
                     <Image src="/images/agricultura-unica-product.png" alt="Galão Aetheris Alpha" width={500} height={500} className="object-contain drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] z-20 relative" />
                     <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 z-30">
                        <div className="relative flex items-center justify-center w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-[0_0_50px_rgba(16,185,129,0.4)] border-4 border-white/10 backdrop-blur-md p-2">
                           <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-50" />
                           <div className="text-center text-white flex flex-col items-center justify-center h-full relative z-10">
                              <span className="text-5xl md:text-9xl font-black leading-none tracking-tighter drop-shadow-lg">5</span>
                              <span className="text-lg md:text-3xl font-bold uppercase tracking-widest leading-none mt-1">Em 1</span>
                              <span className="text-[9px] md:text-xs uppercase tracking-wider opacity-80 mt-2 bg-black/20 px-3 py-1 rounded-full">Ação Completa</span>
                           </div>
                        </div>
                     </motion.div>
                     <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-10 right-0 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-5 rounded-2xl z-10 shadow-lg flex items-center gap-3 hidden md:flex">
                        <div className="bg-amber-500/20 p-2 rounded-full">
                           <Star size={20} className="text-amber-400 fill-amber-400" />
                        </div>
                        <div>
                           <p className="text-white font-bold text-sm leading-none">Preferido por Engenheiros</p>
                           <p className="text-xs text-slate-300 mt-1">Eficiência molecular testada</p>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. VITRINE DE PRODUTOS (DESIGN PREMIUM - ATUALIZADO) */}
      <section ref={produtosRef} className="py-20 md:py-28 px-6 bg-white relative z-10 border-t border-slate-100">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-20 max-w-4xl mx-auto">
               <FadeInUp>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-4">
                     <ShoppingCart size={14} /> Portfólio Oficial Aetheris
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                     Soluções para uma <br/> <span className="text-cyan-600">Safra de Alta Performance.</span>
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">Tecnologia de ponta em cada unidade. Escolha o protocolo ideal para o seu desafio.</p>
               </FadeInUp>
            </div>
            
            {/* GRID DE PRODUTOS PREMIUM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
               {PRODUCTS.map((product, index) => (
                  <FadeInUp key={product.id} delay={index * 0.1}>
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="group flex flex-col h-full bg-[#F8FAFC] rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-cyan-200"
                     >
                        <div className="flex justify-between items-start mb-6 relative z-20">
                           <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border shadow-sm bg-white ${product.tag === 'Mais Vendido' ? 'text-emerald-700 border-emerald-200' : 'text-slate-600 border-slate-200'}`}>
                              {product.tag}
                           </span>
                           <div className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
                              <Star size={12} fill="currentColor" /> {product.rating}
                           </div>
                        </div>

                        <div className="relative h-[300px] md:h-[350px] w-full flex items-center justify-center mb-8 z-10 group-hover:scale-105 transition-transform duration-700">
                           <div className={`absolute inset-0 ${product.glowColor} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform scale-75`} />
                           <Image 
                             src={product.img} 
                             alt={product.name} 
                             fill 
                             className="object-contain drop-shadow-xl z-10"
                           />
                        </div>

                        <div className="text-center mt-auto relative z-20">
                           <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{product.name}</h3>
                           <p className="text-cyan-600 font-bold text-xs uppercase tracking-wider mb-3">{product.headline}</p>
                           <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">{product.desc}</p>
                           
                           <div className="flex items-baseline justify-center gap-1 mb-6 text-slate-900">
                              <span className="text-sm font-semibold">R$</span>
                              <span className="text-4xl font-extrabold tracking-tight">{product.price.toString().split('.')[0]}</span>
                              <span className="text-lg font-bold text-slate-400">,{product.price.toFixed(2).split('.')[1]}</span>
                              <span className="text-xs text-slate-400 font-medium ml-1">/ha</span>
                           </div>

                           <button 
                             onClick={() => addToCart(product)}
                             className={`w-full text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95 ${product.btnColor}`}
                           >
                              <ShoppingCart size={18} /> 
                              Adicionar
                           </button>
                        </div>
                     </motion.div>
                  </FadeInUp>
               ))}
            </div>
         </div>
      </section>

      {/* 5. SELOS DE GARANTIA */}
      <section className="py-20 bg-white border-t border-slate-100">
         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp>
               <div className="flex items-start gap-5 p-6 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                     <Leaf size={28} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-slate-900 mb-2">100% Biológico & Seguro</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">Tecnologia livre de químicos agressivos. Seguro para aplicadores, animais e o meio ambiente.</p>
                  </div>
               </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
               <div className="flex items-start gap-5 p-6 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-cyan-200 transition-colors">
                  <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                     <CheckCircle2 size={28} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-slate-900 mb-2">Qualidade Certificada</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">Produzido em laboratório de última geração com certificação ISO 9001.</p>
                  </div>
               </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
               <div className="flex items-start gap-5 p-6 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-purple-200 transition-colors">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                     <Truck size={28} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-slate-900 mb-2">Logística Refrigerada</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">Envio expresso em embalagens térmicas para garantir a viabilidade dos microrganismos.</p>
                  </div>
               </div>
            </FadeInUp>
         </div>
      </section>

    </div>
  );
}