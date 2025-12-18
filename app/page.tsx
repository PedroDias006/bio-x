"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import {
   ArrowRight,
   BarChart3,
   Calculator,
   CheckCircle2,
   ChevronDown,
   DollarSign,
   Info,
   Layers,
   Leaf,
   MessageCircle,
   Scan,
   ShieldCheck,
   ShoppingCart,
   Sprout,
   Star,
   TestTube2,
   Timer,
   TrendingUp,
   Truck,
   Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

/* =========================================================================
   DADOS DOS PRODUTOS (COM CORES DEFINIDAS PARA O GLOW)
   ========================================================================= */
const PRODUCTS = [
  {
    id: 1,
    name: "Agricultura Única®",
    headline: "Bioativador de Solo",
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
    name: "Sanaqua®",
    headline: "Tratamento Hídrico",
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
    name: "Saúde do Gado®",
    headline: "Conversão Alimentar",
    desc: "Probiótico para ganho de peso acelerado.",
    img: "/images/saude-gado-product.png",
    price: 199.90,
    tag: "Performance",
    rating: 5.0,
    glowColor: "bg-amber-500/20",
    btnColor: "bg-amber-600 hover:bg-amber-700"
  },
  {
    id: 4,
    name: "Raiz Viva®",
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
    title: "Agricultura",
    subtitle: "Potencialize sua lavoura",
    link: "/agricultura",
    image: "/images/setor-agricultura.jpg", 
    logo: "/images/icone-agricultura.png", 
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Saneamento",
    subtitle: "Tratamento biológico",
    link: "/agua-meioambiente",
    image: "/images/setor-saneamento.jpg", 
    logo: "/images/icone-saneamento.png", 
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Saúde Animal",
    subtitle: "Nutrição e bem-estar",
    link: "/saude-animal",
    image: "/images/setor-animal.jpg", 
    logo: "/images/icone-saude-animal.png", 
    color: "from-amber-500 to-orange-600"
  }
];

const FEATURE_POINTS = [
   { title: "Biofertilizante", desc: "Nutrição ativa de alta absorção.", icon: Leaf },
   { title: "Condicionador de Solo", desc: "Melhora estrutura e retenção de água.", icon: Layers },
   { title: "Enraizador", desc: "Expansão radicular agressiva.", icon: Sprout },
   { title: "Inoculante", desc: "Fixação biológica de nitrogênio.", icon: TestTube2 },
   { title: "Imunizador", desc: "Blindagem natural contra patógenos.", icon: ShieldCheck },
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

export default function BioXHome() {
  const { addToCart } = useCart();
  
  // -- ESTADOS DA CALCULADORA --
  const [area, setArea] = useState("");
  const [custoAtual, setCustoAtual] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [simulation, setSimulation] = useState({
    lucroAtual: 0,
    investimentoBioX: 0,
    lucroComBioX: 0,
    lucroExtra: 0,
    roi: 0,
    percentIncrease: 0
  });

  const produtosRef = useRef<HTMLDivElement>(null);
  const scrollToProdutos = () => produtosRef.current?.scrollIntoView({ behavior: "smooth" });

  const formatCurrencyInput = (value: string) => {
    let v = value.replace(/\D/g, "");
    v = (Number(v) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    return v === "0,00" ? "" : v;
  };

  const formatNumberInput = (value: string) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const parseToFloat = (str: string) => {
    if (!str) return 0;
    return parseFloat(str.replace(/\./g, "").replace(",", "."));
  };

  const formatMoney = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleSimular = () => {
    if (!area || !custoAtual || !faturamento) return;
    setCalculating(true);
    setShowResult(false);

    setTimeout(() => {
      const areaVal = parseToFloat(area);
      const custoVal = parseToFloat(custoAtual);
      const fatVal = parseToFloat(faturamento);
      const precoBioX = 189.90;

      const lucroAtualTotal = (fatVal - custoVal) * areaVal;
      const novoFaturamento = fatVal * 1.10; 
      const novoCusto = (custoVal + precoBioX);
      const lucroBioXTotal = (novoFaturamento - novoCusto) * areaVal;

      const lucroExtraTotal = lucroBioXTotal - lucroAtualTotal;
      const investimentoTotalBioX = precoBioX * areaVal;
      const roiCalculado = (lucroExtraTotal / investimentoTotalBioX) * 100;
      const percentIncrease = lucroAtualTotal > 0 ? ((lucroExtraTotal / lucroAtualTotal) * 100) : 0;

      setSimulation({
        lucroAtual: lucroAtualTotal,
        investimentoBioX: investimentoTotalBioX,
        lucroComBioX: lucroBioXTotal,
        lucroExtra: lucroExtraTotal,
        roi: roiCalculado,
        percentIncrease: percentIncrease
      });

      setCalculating(false);
      setShowResult(true);
    }, 1000);
  };

  const whatsAppLink = `https://wa.me/5531995235778?text=Ol%C3%A1%2C%20fiz%20uma%20simula%C3%A7%C3%A3o%20no%20site.%20Minha%20%C3%A1rea%20%C3%A9%20de%20${area}%20hectares%20e%20o%20simulador%20mostrou%20um%20potencial%20de%20lucro%20extra%20de%20${formatMoney(simulation.lucroExtra)}.%20Gostaria%20de%20saber%20mais.`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-500/20 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0">
           <Image src="/images/novo-hero.jpg" alt="Lavoura Clara" fill className="object-cover scale-105" priority />
           <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-6 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 animate-pulse backdrop-blur-md shadow-sm">
               <Zap size={14} fill="currentColor" /> Baixo Risco + Alto Retorno
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-none drop-shadow-2xl">
              Amplifique seus Lucros <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 drop-shadow-md">& Reduza Custos.</span>
            </h1>
            <p className="text-white text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-lg">
              O custo do Bio-X representa apenas <strong className="text-cyan-300">~4%</strong> do custo da lavoura, mas pode gerar até <strong className="text-cyan-300">28% de aumento</strong> no seu lucro líquido.
            </p>
            <button onClick={scrollToProdutos} className="group bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center lg:justify-start gap-3 text-base md:text-lg hover:-translate-y-1 w-full lg:w-auto">
              Conheça a Agricultura Única <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-1 shadow-2xl relative overflow-hidden group">
             <div className="bg-white rounded-[1.8rem] p-6 md:p-8 relative z-10 h-full flex flex-col">
                <div className="text-center mb-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                      <Leaf size={14} className="text-emerald-600" /> Agricultura Única Transforma
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2">
                      Calcule conosco o quanto você irá economizar usando Agricultura Única
                   </h3>
                   <p className="text-slate-500 font-medium text-xs md:text-sm">Siga o passo a passo 👇</p>
                </div>

                {!showResult ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
                     <div className="absolute left-[15px] top-4 bottom-20 w-0.5 bg-slate-100 -z-10" />
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0 shadow-sm">1</div>
                        <div className="flex-1 space-y-2">
                           <label className="text-sm font-bold text-slate-900 block">Qual o tamanho da sua área?</label>
                           <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 transition-all focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/50">
                              <Scan size={18} className="text-slate-400 shrink-0" />
                              <input type="text" value={area} onChange={(e) => setArea(formatNumberInput(e.target.value))} className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-bold text-base" placeholder="Ex: 1.000 ha" />
                           </div>
                           <p className="text-[10px] text-slate-500">Usado para calcular o volume total.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0 shadow-sm">2</div>
                        <div className="flex-1 space-y-3">
                           <label className="text-sm font-bold text-slate-900 block">Como são seus números hoje?</label>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                 <span className="text-[10px] text-slate-500 uppercase font-bold">Custo (R$/ha)</span>
                                 <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/50">
                                    <DollarSign size={14} className="text-red-400 shrink-0" />
                                    <input type="text" value={custoAtual} onChange={(e) => setCustoAtual(formatCurrencyInput(e.target.value))} className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-bold" placeholder="4.500,00" />
                                 </div>
                              </div>
                              <div className="space-y-1">
                                 <span className="text-[10px] text-slate-500 uppercase font-bold">Ganho Bruto (R$/ha)</span>
                                 <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/50">
                                    <DollarSign size={14} className="text-green-500 shrink-0" />
                                    <input type="text" value={faturamento} onChange={(e) => setFaturamento(formatCurrencyInput(e.target.value))} className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-bold" placeholder="6.000,00" />
                                 </div>
                              </div>
                           </div>
                           <p className="text-[10px] text-slate-500">Média da sua última safra ou estimativa.</p>
                        </div>
                     </div>
                     <div className="pt-2">
                        <button onClick={handleSimular} disabled={calculating} className="w-full bg-[#0B1120] hover:bg-emerald-700 text-white font-black py-4 rounded-xl transition-all flex justify-center items-center gap-2 text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                           {calculating ? <Timer className="animate-spin" /> : <Calculator strokeWidth={3} />} {calculating ? "Calculando..." : "COMPARAR RESULTADOS"}
                        </button>
                     </div>
                  </div>
                ) : (
                  <div className="relative z-10 animate-in zoom-in-95 duration-500 space-y-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-center items-center text-center grayscale opacity-80">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Padrão Fazenda</p>
                           <p className="text-lg font-bold text-slate-700">{formatMoney(simulation.lucroAtual)}</p>
                           <p className="text-[9px] text-slate-400 mt-1">Lucro Líquido</p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-1.5 bg-emerald-100 rounded-bl-xl">
                              <TrendingUp size={12} className="text-emerald-700" />
                           </div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Com Agricultura Única</p>
                           <p className="text-xl font-black text-emerald-800">{formatMoney(simulation.lucroComBioX)}</p>
                           <p className="text-[9px] text-emerald-600/70 mt-1">Lucro Otimizado</p>
                        </div>
                     </div>
                     <div className="bg-[#0B1120] border border-emerald-500/20 rounded-2xl p-6 text-center relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
                        <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 relative z-10">Lucro Líquido Adicional</p>
                        <p className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md relative z-10 break-all">
                           + {formatMoney(simulation.lucroExtra)}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                           <CheckCircle2 size={12} className="text-emerald-400" />
                           <span className="text-[10px] text-slate-300 font-medium">Investimento Bio-X já pago</span>
                        </div>
                     </div>
                     <div className="bg-slate-50 border-l-2 border-emerald-500 rounded-r-xl p-4 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-900 block mb-1.5 flex items-center gap-2">
                           <Info size={14} className="text-emerald-600" /> Entenda a matemática:
                        </strong>
                        No <strong>Padrão Fazenda</strong>, parte do seu adubo fica travado no solo e não vira grão. 
                        Com a <strong>Agricultura Única</strong>, a biologia libera esse adubo pago. 
                        O valor acima é <strong>dinheiro novo</strong> no seu bolso, já descontando o custo do produto (R$ 189/ha).
                     </div>
                     <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                           <span className="flex items-center gap-1"><BarChart3 size={14}/> Potencial de Crescimento</span>
                           <span className="bg-emerald-200 px-2 py-0.5 rounded text-emerald-900">+{simulation.percentIncrease.toFixed(1)}% LUCRO</span>
                        </div>
                        <div className="space-y-3">
                           <div>
                              <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                                 <span>Padrão Fazenda</span>
                                 <span>100%</span>
                              </div>
                              <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                 <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-slate-400" />
                              </div>
                           </div>
                           <div>
                              <div className="flex justify-between text-[10px] text-emerald-700 font-bold mb-1">
                                 <span>Com Bio-X</span>
                                 <span>{100 + parseFloat(simulation.percentIncrease.toFixed(1))}%</span>
                              </div>
                              <div className="h-2.5 bg-emerald-100 rounded-full overflow-hidden relative">
                                 <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="absolute top-0 left-0 h-full bg-emerald-400" />
                                 <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-emerald-600 w-full" />
                              </div>
                              <p className="text-[9px] text-emerald-600 mt-1 text-right">Seu lucro salta de um patamar para outro superior.</p>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button onClick={() => setShowResult(false)} className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl transition-all">Refazer</button>
                        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-2/3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs font-black uppercase tracking-wide py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">
                           <MessageCircle size={16} /> Faça Parte da Inovação
                        </a>
                     </div>
                  </div>
                )}
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
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Principais Áreas:</h2>
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
                        O Poder de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">5 Produtos</span> <br />
                        em 1 Único Galão.
                     </h2>
                     <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg font-light drop-shadow-sm">
                        Esqueça a complexidade de múltiplos insumos. A Agricultura Única® entrega um manejo completo, simplificado e mais potente em uma só aplicação.
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
                     <Image src="/images/agricultura-unica-product.png" alt="Galão Bio-X Agricultura Única" width={500} height={500} className="object-contain drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] z-20 relative" />
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
                           <p className="text-white font-bold text-sm leading-none">Preferido por Agrônomos</p>
                           <p className="text-xs text-slate-300 mt-1">Eficiência comprovada</p>
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
                     <ShoppingCart size={14} /> Loja Oficial Bio-X
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                     Soluções para uma <br/> <span className="text-cyan-600">Safra Recorde.</span>
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">Tecnologia de ponta em cada frasco. Escolha a solução ideal para o seu desafio.</p>
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
                        {/* Tags e Avaliação */}
                        <div className="flex justify-between items-start mb-6 relative z-20">
                           <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border shadow-sm bg-white ${product.tag === 'Mais Vendido' ? 'text-emerald-700 border-emerald-200' : 'text-slate-600 border-slate-200'}`}>
                              {product.tag}
                           </span>
                           <div className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
                              <Star size={12} fill="currentColor" /> {product.rating}
                           </div>
                        </div>

                        {/* Área da Imagem (Floating & Glowing) */}
                        <div className="relative h-[300px] md:h-[350px] w-full flex items-center justify-center mb-8 z-10 group-hover:scale-105 transition-transform duration-700">
                           {/* Glow de Fundo */}
                           <div className={`absolute inset-0 ${product.glowColor} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform scale-75`} />
                           
                           <Image 
                             src={product.img} 
                             alt={product.name} 
                             fill 
                             className="object-contain drop-shadow-xl z-10"
                           />
                        </div>

                        {/* Informações do Produto */}
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