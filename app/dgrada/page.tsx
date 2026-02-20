"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import {
   ArrowRight,
   CheckCircle2,
   ChevronDown,
   Microscope,
   ShoppingCart,
   Skull,
   Timer,
   Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* =========================================================================
   DADOS DO PRODUTO (AETHERIS D-GRADE)
   ========================================================================= */
const PRODUCT = {
  id: "dgrada-full",
  name: "D-Grade Pro™",
  headline: "Dissolução Molecular Total.",
  description: "Protocolo de limpeza autônoma. Nanobots biológicos identificam e liquefazem obstruções orgânicas em tubulações. Elimina bio-filmes e neutraliza gases tóxicos na fonte.",
  price: 249.90,
  image: "/images/produto-dgrada.png", 
  contextImage: "/images/dgrada-uso-pia.jpg",
  backLink: "/agua-meioambiente",
  certifications: "PROTOCOLO: BIO-HAZARD CLEAN / ISO-Z"
};

const FAQS = [
  { 
    q: "Compatibilidade com Agentes Clorados?", 
    a: "NEGATIVO. O uso simultâneo de cloro ou alvejantes causa falha crítica nos nanobots biológicos. Mantenha o ambiente quimicamente neutro durante o deploy." 
  },
  { 
    q: "Procedimento de Ativação?", 
    a: "Dissolva 1 unidade de carga em 200ml de H2O. Aguarde 60 minutos para o despertar metabólico dos agentes antes da inserção no sistema." 
  },
  { 
    q: "Janela de Operação Ideal?", 
    a: "Inicie o protocolo durante o ciclo noturno (após cessar o fluxo de efluentes), permitindo que os agentes operem sem interrupção hidráulica." 
  },
  { 
    q: "Escalabilidade de Dose?", 
    a: "Afirmativo. Para infraestruturas com ocupação > 5 usuários, dobre a carga viral benéfica por ponto de acesso." 
  },
];

export default function DGradePage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* 1. HERO COM EFEITO NEON */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background FX */}
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-6 inline-flex items-center gap-2 hover:text-purple-300 transition-colors">
               <ArrowRight size={14} className="rotate-180" /> Retornar ao Setor Hidro
            </Link>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-purple-500/30 bg-purple-950/30 text-purple-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
               <Zap size={12} className="text-purple-400" /> Bio-Active Unit
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
              {PRODUCT.headline}
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed border-l-2 border-purple-500/50 pl-6">
              {PRODUCT.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* CORREÇÃO DO TYPESCRIPT APLICADA AQUI */}
              <button 
                  onClick={() => addToCart(PRODUCT as any)}
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)] hover:-translate-y-1 transition-all"
              >
                  <ShoppingCart size={20} /> Inicializar Compra <span className="opacity-70 text-sm font-mono ml-2">| {PRODUCT.price} Credits</span>
              </button>
            </div>
            <p className="mt-4 text-[10px] font-mono text-purple-500/60 uppercase tracking-widest">
               License ID: {PRODUCT.certifications}
            </p>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center group">
             {/* Efeito de Scanner na imagem */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20 pointer-events-none" />
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10 relative grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 2. INSTRUÇÕES DE DEPLOY (Estilo Manual Técnico) */}
      <section className="py-24 bg-[#0B1120] border-y border-white/5 relative overflow-hidden">
         {/* Grid Line Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-16 text-center tracking-tight flex items-center justify-center gap-3">
               <CheckCircle2 className="text-purple-500"/> Protocolo de Ativação
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { step: "01", title: "Sintetizar", desc: "Dissolva a carga em 200ml de H2O pura. Evite contaminação cruzada." },
                 { step: "02", title: "Incubar", desc: "Aguarde 60 minutos. O tempo é crítico para o despertar metabólico dos agentes.", highlight: true },
                 { step: "03", title: "Injetar", desc: "Insira a solução no sistema alvo (ralos/fossa). Mantenha o fluxo estático por 8h." }
               ].map((item, i) => (
                  <div key={i} className={`p-8 rounded-2xl border relative group transition-all duration-300 ${item.highlight ? 'bg-purple-900/10 border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.1)]' : 'bg-[#151E32] border-white/5 hover:border-purple-500/30'}`}>
                     <div className="absolute -top-5 left-8 px-4 py-2 bg-[#020617] text-purple-400 border border-purple-500/30 rounded font-mono font-bold text-xl shadow-lg">
                        {item.step}
                     </div>
                     <h3 className="font-bold text-xl mt-4 mb-3 text-white">{item.title}</h3>
                     <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                     {item.highlight && <Timer size={20} className="absolute bottom-8 right-8 text-purple-500 animate-pulse" />}
                  </div>
               ))}
            </div>
            
            <div className="mt-12 p-6 bg-red-950/20 border border-red-500/30 rounded-xl flex items-start gap-4">
               <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                  <Skull className="text-red-500 shrink-0" size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-red-400 text-sm uppercase tracking-wider mb-1">Aviso de Risco Químico</h4>
                  <p className="text-xs text-red-300/70 leading-relaxed">
                     A introdução de agentes biocidas (Cloro/Água Sanitária) causará a morte imediata da colônia D-Grade. Mantenha o ambiente estéril de químicos corrosivos durante a operação.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. COMPOSIÇÃO TÉCNICA (Analítico) */}
      <section className="py-24 bg-[#020617]">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-10 text-white flex items-center justify-center gap-3">
               <Microscope className="text-purple-500" /> Análise Espectral da Fórmula
            </h3>
            
            <div className="bg-[#0B1120] border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                      "Saccharomyces boulardii [Strain-X]", 
                      "Lactobacillus rhamnosus [Active]", 
                      "Lactobacillus parafarraginis", 
                      "Lactobacillus casei", 
                      "Matriz de Sacarose [Pura]", 
                      "Veículo: Amido Polimerizado",
                      "H2O [Destilada]"
                  ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-[#151E32] rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                         <span className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">{item}</span>
                         <div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_#a855f7] transition-all" />
                      </div>
                  ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Status: ESTÁVEL</span>
                  <span>Pureza: 99.9%</span>
               </div>
            </div>
         </div>
      </section>

      {/* 4. FAQ (Terminal) */}
      <section className="py-24 bg-[#0B1120]">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-white tracking-tight">Base de Conhecimento</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-[#151E32] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/20 transition-all">
                     <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-200 hover:text-purple-400 transition-colors"
                     >
                        <span className="flex items-center gap-3">
                           <span className="text-purple-500/50 font-mono text-xs">LOG_0{i+1}</span> {faq.q}
                        </span>
                        <ChevronDown size={20} className={`transition-transform duration-300 text-slate-500 ${openFaq === i ? "rotate-180 text-purple-500" : ""}`} />
                     </button>
                     {openFaq === i && (
                        <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 bg-[#0F1623] font-mono">
                           <span className="text-purple-500 block mb-2">{">"} SYSTEM RESPONSE:</span>
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