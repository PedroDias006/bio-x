"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, ChevronDown, ShoppingCart, Sun, Wind, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "avian-core-full",
  name: "Aetheris Avian-Core™",
  headline: "Estabilização Biômica e Uniformidade.",
  description: "Sistema de controle de amônia e otimização metabólica. Essencial para ambiência avançada, supressão de patógenos aéreos e descontinuação de aditivos sintéticos.",
  price: 189.90,
  image: "/images/produto-aves.png",
  backLink: "/saude-animal",
  certifications: "PROTOCOLO: AVIAN-SAFE / ID-773"
};

const FAQS = [
  { q: "Impacto na Conversão de Massa?", a: "O sistema estabiliza a microbiota do TGI, maximizando a extração de aminoácidos e resultando em um upgrade real na eficiência alimentar do lote." },
  { q: "Otimização do Substrato (Cama)?", a: "O Avian-Core acelera a digestão da matéria orgânica no piso, neutralizando a liberação de gases sulfurosos e mantendo a umidade abaixo do nível crítico." },
  { q: "Protocolo de Nebulização Ativa?", a: "Sim. O deploy via nebulização satura o ambiente com agentes benéficos, purificando o ar e reduzindo a pressão de infecção sem estressar as unidades." },
  { q: "Eficiência de Custos Operacionais?", a: "Afirmativo. A redução drástica na necessidade de intervenções químicas e medicamentosas gera um ROI positivo imediato por ciclo." }
];

export default function AvianCorePage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. HERO - AVIAN INTERFACE */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-amber-600 mb-6 flex items-center gap-2 hover:text-amber-500 transition-colors">
              <ArrowRight size={14} className="rotate-180" /> Retornar ao Setor Bio-Z
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-none tracking-tighter uppercase">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-2 border-amber-500 pl-6 font-light">{PRODUCT.description}</p>
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Avian", rating: 4.9 })} className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-amber-600 text-white font-bold rounded-sm shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                <ShoppingCart size={18} /> Iniciar Deploy Lote
            </button>
            <p className="mt-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest">{PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center group">
             <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10 contrast-125 brightness-105" />
          </motion.div>
        </div>
      </section>

      {/* 2. TELEMETRIA DE RESULTADOS */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-black text-center mb-16 text-slate-900 uppercase tracking-[0.2em]">Otimização de Ambiência</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="group">
                  <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:border-amber-500/50 transition-colors shadow-sm"><Wind size={28} /></div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Neutralização NH3</h3>
                  <p className="text-xs text-slate-500 leading-relaxed px-4">Supressão total de vapores amoniacais e controle de vetores alados.</p>
               </div>
               <div className="group">
                  <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:border-amber-500/50 transition-colors shadow-sm"><Sun size={28} /></div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Status do Substrato</h3>
                  <p className="text-xs text-slate-500 leading-relaxed px-4">Manutenção de piso hidrofóbico, prevenindo lesões podais e dérmicas.</p>
               </div>
               <div className="group">
                  <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:border-amber-500/50 transition-colors shadow-sm"><Activity size={28} /></div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Sobrevivência de Lote</h3>
                  <p className="text-xs text-slate-500 leading-relaxed px-4">Incremento na taxa de viabilidade e redução drástica de refugagem.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. MATRIZ DE OPERAÇÃO */}
      <section className="py-24 bg-[#F1F5F9]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-900 rounded-sm p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl" />
               <h2 className="text-3xl font-black text-white mb-10 tracking-tighter uppercase">Protocolos de Injeção</h2>
               <div className="space-y-6">
                  {[
                     { title: "Saturação Ambiental", desc: "Nebulização sistemática para controle de patógenos em suspensão." },
                     { title: "Interface Hídrica", desc: "Inoculação via água de bebida para blindagem do TGI." },
                     { title: "Sanitização de Turno", desc: "Higienização molecular entre ciclos de alojamento." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-6 p-5 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-amber-600 text-black rounded-sm flex items-center justify-center font-mono font-bold shrink-0 text-xs">0{i+1}</div>
                        <div>
                           <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                           <p className="text-xs text-slate-400 font-light">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="space-y-8">
                <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm relative">
                    <div className="absolute top-0 left-10 w-12 h-1 bg-amber-500" />
                    <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter flex items-center gap-3">
                        <Zap size={20} className="text-amber-500" /> Composição do Kernel
                    </h3>
                    <ul className="grid grid-cols-1 gap-4 text-xs font-mono text-slate-600 uppercase tracking-widest">
                        <li className="flex items-center gap-3 p-2 bg-slate-50 rounded"><CheckCircle2 size={14} className="text-amber-600"/> S. boulardii [MOD-X]</li>
                        <li className="flex items-center gap-3 p-2 bg-slate-50 rounded"><CheckCircle2 size={14} className="text-amber-600"/> L. rhamnosus [V-IND]</li>
                        <li className="flex items-center gap-3 p-2 bg-slate-50 rounded"><CheckCircle2 size={14} className="text-amber-600"/> L. parafarraginis</li>
                        <li className="flex items-center gap-3 p-2 bg-slate-50 rounded"><CheckCircle2 size={14} className="text-amber-600"/> L. casei [SYNTH]</li>
                        <li className="flex items-center gap-3 p-2 bg-slate-50 rounded"><CheckCircle2 size={14} className="text-amber-600"/> Matriz de H2O e Sacarose</li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* 4. SUPORTE TÉCNICO */}
      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tighter">Dados de Engenharia</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-sm overflow-hidden transition-all hover:border-amber-500/30">
                     <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 font-mono text-xs uppercase tracking-widest">
                        {faq.q} <ChevronDown size={18} className={`transition-transform duration-300 text-amber-600 ${openFaq === i ? "rotate-180" : ""}`} />
                     </button>
                     {openFaq === i && (
                        <div className="p-6 pt-0 text-xs text-slate-500 border-t border-slate-100 bg-white font-sans leading-relaxed">
                           <span className="text-amber-600 font-bold block mb-2">ANALYSIS_LOG:</span>
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