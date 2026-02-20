"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import {
   ArrowRight,
   Atom,
   ChevronDown,
   Cpu,
   Database,
   Flame,
   RefreshCw,
   ShoppingCart,
   Timer
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* =========================================================================
   DADOS DO PRODUTO (AETHERIS MATTER-DIVISION)
   ========================================================================= */
const PRODUCT = {
  id: "compostagem-full",
  name: "Aetheris Matter-X™",
  headline: "Reconfiguração de Matéria.",
  description: "Protocolo de aceleração de decaimento orgânico via fermentação sintética. Elimina compostos voláteis e reestrutura resíduos em substrato de alta densidade.",
  price: 159.90,
  image: "/images/produto-compostagem.png", // Mantido o path, assumindo que a imagem será trocada ou se adapta
  backLink: "/agricultura",
  certifications: "PROTOCOLO: ALPHA-773 / ISO-X"
};

const FAQS = [
  { 
    q: "Diferença do processo oxidativo padrão?", 
    a: "A decomposição natural é caótica e lenta. O Matter-X utiliza uma via fermentativa facultativa (anaeróbia controlada), processando a biomassa com 300% mais velocidade." 
  },
  { 
    q: "Neutralização de voláteis (Odores)?", 
    a: "Afirmativo. O algoritmo biológico quebra as cadeias de amônia e enxofre antes que se tornem gases perceptíveis, garantindo 'stealth mode' no processamento." 
  },
  { 
    q: "Matriz de Agentes (Composição)?", 
    a: "Cepas reengenheiradas de Saccharomyces boulardii-X, Lactobacillus rhamnosus (Versão Industrial), L. parafarraginis e catalisadores de sacarose." 
  },
  { 
    q: "Output final do sistema?", 
    a: "Gera um bio-substrato livre de patógenos, rico em carbono estruturado e pronto para injetar vitalidade em qualquer ecosistema agrícola." 
  },
];

export default function MatterXPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background FX */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-mono font-bold uppercase text-amber-500 mb-6 flex items-center gap-2 hover:text-amber-400 transition-colors">
              <ArrowRight size={14} className="rotate-180" /> Retornar ao Lab
            </Link>
            
            <div className="inline-block px-3 py-1 mb-4 rounded border border-amber-500/20 bg-amber-950/30 text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              Matter Reprogramming Unit
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              {PRODUCT.headline}
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed border-l-2 border-amber-500/50 pl-6">
              {PRODUCT.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               {/* AQUI ESTÁ A CORREÇÃO: Passando o PRODUCT diretamente para não dar erro de tipagem com a 'tag' */}
               <button 
                 onClick={() => addToCart(PRODUCT as any)} 
                 className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(217,119,6,0.3)] transition-all flex items-center justify-center gap-3"
               >
                 <ShoppingCart size={20} /> Adquirir Unidade
               </button>
               <div className="px-6 py-4 border border-white/10 rounded-xl text-xs font-mono text-slate-500 flex items-center justify-center">
                  {PRODUCT.certifications}
               </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center group">
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10 relative grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </div>
      </section>

      {/* 2. CICLO DE PROCESSAMENTO (Visual Técnico) */}
      <section className="py-24 bg-[#0B1120] border-y border-white/5">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-12 tracking-tight">Fluxo de Reciclagem Molecular</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
               {[
                 { step: "Input Orgânico", icon: <Database size={16}/> }, 
                 { step: "Digestão Enzimática", icon: <RefreshCw size={16}/> }, 
                 { step: "Processamento Matter-X", icon: <Cpu size={16} className="text-amber-400"/> }, 
                 { step: "Output Estabilizado", icon: <Atom size={16}/> }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className={`px-6 py-4 rounded-xl border font-bold text-sm shadow-lg flex items-center gap-3 transition-all duration-300 ${i === 2 ? 'bg-amber-950/40 border-amber-500/50 text-amber-400 shadow-amber-900/20' : 'bg-[#151E32] border-white/5 text-slate-300 hover:border-slate-600'}`}>
                        {item.icon}
                        {item.step}
                     </div>
                     {i < 3 && <ArrowRight className="text-slate-700 hidden md:block" />}
                  </div>
               ))}
            </div>
            <p className="mt-12 text-slate-500 text-xs font-mono uppercase tracking-widest">
              O sistema Matter-X intervém na Fase 3, otimizando o tempo de ciclo em 60%.
            </p>
         </div>
      </section>

      {/* 3. TECNOLOGIA E COMPOSIÇÃO */}
      <section className="py-24 bg-[#020617]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-amber-500 rounded-full" />
                  <span className="text-amber-500 font-mono text-sm font-bold uppercase">Tech Specs</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Engenharia de Decomposição</h2>
               <p className="mb-8 text-slate-400 leading-relaxed">
                 Abandonamos o processo oxidativo lento do século passado. O Matter-X introduz vetores de fermentação de alta performance que "digerem" a matéria em nível celular.
               </p>

               <ul className="space-y-6">
                  <li className="flex gap-5 items-start group">
                     <div className="bg-[#151E32] p-3 rounded-xl text-amber-500 border border-white/5 group-hover:border-amber-500/30 transition-colors">
                        <Timer size={24}/>
                     </div>
                     <div>
                        <strong className="block text-white text-lg mb-1">Overclocking Temporal</strong>
                        <span className="text-sm text-slate-500">Reduz drasticamente o tempo de latência da decomposição.</span>
                     </div>
                  </li>
                  <li className="flex gap-5 items-start group">
                     <div className="bg-[#151E32] p-3 rounded-xl text-amber-500 border border-white/5 group-hover:border-amber-500/30 transition-colors">
                        <Flame size={24}/>
                     </div>
                     <div>
                        <strong className="block text-white text-lg mb-1">Densidade Energética</strong>
                        <span className="text-sm text-slate-500">Incremento de carbono ativo no composto final.</span>
                     </div>
                  </li>
                  <li className="flex gap-5 items-start group">
                     <div className="bg-[#151E32] p-3 rounded-xl text-amber-500 border border-white/5 group-hover:border-amber-500/30 transition-colors">
                        <Database size={24}/>
                     </div>
                     <div>
                        <strong className="block text-white text-lg mb-1">Sanitização de Dados</strong>
                        <span className="text-sm text-slate-500">Eliminação de patógenos (vírus/bugs) do código biológico.</span>
                     </div>
                  </li>
               </ul>
            </div>
            
            <div className="bg-[#0B1120] p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
                <h3 className="font-bold text-xl mb-6 text-white flex items-center gap-2">
                   <Cpu size={20} className="text-amber-500"/> Composição do Kernel
                </h3>
                <div className="grid grid-cols-1 gap-4">
                   {[
                     "Saccharomyces boulardii [Mod-X]", 
                     "Lactobacillus rhamnosus [Ind-V2]", 
                     "Lactobacillus parafarraginis", 
                     "Lactobacillus casei [Core]"
                   ].map((bac, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 bg-[#151E32] rounded-xl text-sm font-mono text-slate-300 border border-white/5 hover:border-amber-500/30 transition-colors">
                           <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" /> 
                           {bac}
                       </div>
                   ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 text-xs text-slate-600 font-mono">
                   *Todos os agentes são estabilizados em matriz de sacarose de alta pureza.
                </div>
            </div>
         </div>
      </section>

      {/* 4. FAQ (Terminal Style) */}
      <section className="py-24 bg-[#0B1120]">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-white tracking-tight">Arquivos de Suporte</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-[#151E32] border border-white/5 rounded-xl overflow-hidden transition-all hover:border-amber-500/20">
                     <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-200 hover:text-amber-400 transition-colors">
                        <span className="flex items-center gap-3">
                           <span className="text-amber-500/50 font-mono text-xs">0{i+1}.</span> {faq.q}
                        </span>
                        <ChevronDown size={20} className={`text-slate-500 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-amber-500" : ""}`} />
                     </button>
                     {openFaq === i && (
                        <div className="p-6 pt-0 text-sm text-slate-400 border-t border-white/5 font-mono leading-relaxed">
                           <span className="text-amber-500 block mb-2">{">"} RESPOSTA DO SISTEMA:</span>
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