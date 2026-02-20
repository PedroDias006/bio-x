"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, ChevronDown, Info, ShieldAlert, ShoppingCart, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "swine-modulator-full",
  name: "Aetheris Swine-Modulator™",
  headline: "Otimização Metabólica e Supressão Viral.",
  description: "Tecnologia de modulação do Trato Gastrointestinal (TGI). Neutraliza microrganismos patógenos, gases amoniacais corrosivos e estabiliza o bem-estar das unidades biológicas.",
  price: 219.90,
  image: "/images/produto-suino.png",
  backLink: "/saude-animal",
  certifications: "PROTOCOLO: SWINE-SAFE / ID-773"
};

const FAQS = [
  { q: "Quais micotoxinas o sistema neutraliza?", a: "O Swine-Modulator atua no isolamento de Aflatoxina, Ocratoxina, Deoxinivalenol, Zearalenona, Fumonisina e toxinas T-2 produzidas por contaminação fúngica." },
  { q: "Mecanismo de estabilização do TGI?", a: "O algoritmo biológico equilibra a microbiota intestinal, eliminando instabilidades de fluxo (diarreias) e reduzindo drasticamente a taxa de unidades em refugagem." },
  { q: "Protocolos de implementação?", a: "Sistema versátil: pode ser injetado via interface hídrica (água), nebulização de instalações, descontaminação de matrizes e suporte neonatal." },
  { q: "Controle de bio-assinaturas ambientais?", a: "Afirmativo. Reduz expressivamente a exalação de Amônia (NH3), desestabilizando o ciclo de procriação de vetores e insetos no aviário/granja." },
];

export default function SwineModulatorPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      
      {/* 1. HERO - SWINE INTERFACE */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-rose-50/30 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-rose-600 mb-6 flex items-center gap-2 hover:text-rose-500 transition-colors">
              <ArrowRight size={14} className="rotate-180" /> Retornar ao Setor Bio-Z
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-none tracking-tighter uppercase">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-2 border-rose-500 pl-6 font-light">{PRODUCT.description}</p>
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Suínos", rating: 4.8 })} className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-rose-600 text-white font-bold rounded-sm shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                <ShoppingCart size={18} /> Iniciar Deploy Unidade
            </button>
            <p className="mt-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest">{PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center group">
             <div className="absolute inset-0 bg-rose-500/5 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10 contrast-125" />
          </motion.div>
        </div>
      </section>

      {/* 2. MATRIZ DE PERFORMANCE */}
      <section className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-black text-center mb-16 text-slate-900 uppercase tracking-[0.2em]">Data Analysis: Performance Sistêmica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-slate-50 rounded-sm border border-slate-200 group hover:border-rose-500/30 transition-all">
                  <h3 className="font-bold text-sm uppercase tracking-widest text-slate-800 mb-6 flex items-center gap-3">
                    <TrendingUp className="text-rose-500"/> Output de Crescimento
                  </h3>
                  <ul className="space-y-4 text-slate-500 text-xs font-mono uppercase tracking-wider">
                     <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1 shrink-0" /> Upgrade no desenvolvimento imunitário central.</li>
                     <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1 shrink-0" /> Otimização do Índice de Conversão Alimentar (ICA).</li>
                     <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1 shrink-0" /> Incremento real no GMD (Ganho Médio Diário).</li>
                     <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1 shrink-0" /> Minimização de refugagem e perda de massa crítica.</li>
                  </ul>
               </div>
               <div className="p-8 bg-rose-950/5 rounded-sm border border-rose-100 group hover:border-rose-500/30 transition-all">
                  <h3 className="font-bold text-sm uppercase tracking-widest text-rose-900 mb-6 flex items-center gap-3">
                    <ShieldAlert className="text-rose-600"/> Protocolo de Blindagem Sanitária
                  </h3>
                  <ul className="space-y-4 text-rose-800 text-xs font-mono uppercase tracking-wider">
                     <li className="flex gap-3 items-start"><CheckCircle2 size={14} className="text-rose-600 shrink-0"/> Redução da dependência de antibióticos sintéticos.</li>
                     <li className="flex gap-3 items-start"><CheckCircle2 size={14} className="text-rose-600 shrink-0"/> Supressão de instabilidades TGI (Diarreias).</li>
                     <li className="flex gap-3 items-start"><CheckCircle2 size={14} className="text-rose-600 shrink-0"/> Neutralização de Bio-Assinaturas Gasosas (NH3).</li>
                     <li className="flex gap-3 items-start"><CheckCircle2 size={14} className="text-rose-600 shrink-0"/> Combate a Micotoxinas Industriais (Aflatoxinas).</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 3. APLICAÇÃO E KERNEL BIOLÓGICO */}
      <section className="py-24 bg-[#F9FAFB] border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase">Protocolos de Interface</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-[10px] font-mono">
                  {["Interface Hídrica", "Sanitização de Célula", "Deploy de Matrizes", "Neonatal Wellness"].map((item, i) => (
                     <div key={i} className="p-4 bg-white rounded-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-3 uppercase tracking-widest shadow-sm">
                        <Activity size={14} className="text-rose-600" /> {item}
                     </div>
                  ))}
               </div>
               
               <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-rose-500" />
                  <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                    <Zap size={14} className="text-rose-500" /> Kernel Tecnológico:
                  </h4>
                  <p className="text-xs text-slate-500 font-mono leading-relaxed">
                    S. boulardii [MOD-X], L. rhamnosus [V-IND], L. parafarraginis, L. casei [SYNTH], Sacarose de Alta Pureza, H2O Destilada.
                  </p>
               </div>
            </div>
            
            <div className="bg-rose-900 text-white rounded-sm p-10 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <Info size={40} className="text-rose-400 mb-6 relative z-10" />
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter relative z-10 text-rose-100">Alerta de Micotoxinas</h3>
                <p className="text-xs text-rose-200 font-light leading-relaxed relative z-10 uppercase tracking-wider">
                    Vetores fúngicos Aspergillus e Fusarium geram subprodutos tóxicos que degradam o ROI da operação. O Swine-Modulator atua na mitigação desses danos em nível celular.
                </p>
            </div>
         </div>
      </section>

      {/* 4. BASE DE DADOS (FAQ) */}
      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tighter">Support & Documentation</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-sm overflow-hidden group hover:border-rose-500/20 transition-all">
                     <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 font-mono text-xs uppercase tracking-widest">
                        <span className="flex items-center gap-3">
                           <span className="text-rose-500 opacity-50">L-0{i+1}</span> {faq.q}
                        </span>
                        <ChevronDown size={18} className={`transition-transform duration-300 text-rose-600 ${openFaq === i ? "rotate-180" : ""}`} />
                     </button>
                     {openFaq === i && (
                        <div className="p-8 pt-0 text-xs text-slate-500 border-t border-slate-100 bg-white font-sans leading-relaxed">
                           <span className="text-rose-600 font-bold block mb-2 font-mono">ANALYSIS_RESULT:</span>
                           {faq.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}