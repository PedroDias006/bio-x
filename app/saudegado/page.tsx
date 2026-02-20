"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { Activity, ArrowRight, ChevronDown, Milk, ShieldAlert, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "bovine-shield-full",
  name: "Aetheris Bovine-Shield™",
  headline: "Protocolo de Blindagem e Yield Leiteiro.",
  description: "Biotecnologia avançada para neutralização de patógenos ambientais. Previne anomalias mamárias e reduz em até 70% as perdas produtivas causadas por contaminações externas.",
  price: 199.90,
  image: "/images/produto-gado.png",
  backLink: "/saude-animal",
  certifications: "PROTOCOLO: BIO-DEFENSE / ID-3325"
};

const FAQS = [
  { q: "O que é o distúrbio mamário bovino?", a: "Trata-se de uma falha inflamatória no tecido do úbere, geralmente causada por vetores bacterianos externos. Resulta em queda brusca no output de leite e compromete a integridade da unidade biológica." },
  { q: "Mecanismo de Reconfiguração Ambiental?", a: "O sistema altera a cinética de decomposição da biomassa de oxidativa para fermentativa controlada. Isso elimina o substrato necessário para a replicação de patógenos de alta periculosidade." },
  { q: "Matriz de Agentes Biológicos?", a: "A fórmula utiliza cepas isoladas de Lactobacilos e Leveduras sintetizadas para estabilizar a microbiota e suprimir o biofilme bacteriano nocivo." },
];

export default function BovineShieldPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. HERO - BOVINE INTERFACE */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-amber-600 mb-6 flex items-center gap-2 hover:text-amber-500 transition-colors">
              <ArrowRight size={14} className="rotate-180" /> Retornar ao Setor Bio-Z
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter uppercase">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-2 border-amber-500 pl-6 font-light">{PRODUCT.description}</p>
            
            {/* CORREÇÃO DO TYPESCRIPT APLICADA AQUI */}
            <button onClick={() => addToCart(PRODUCT as any)} className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-amber-600 text-white font-bold rounded-sm shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                <ShoppingCart size={18} /> Solicitar Carga de Unidades
            </button>
            
            <p className="mt-6 text-[10px] font-mono text-slate-400 uppercase tracking-widest">{PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center group">
             <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10 contrast-125" />
          </motion.div>
        </div>
      </section>

      {/* 2. ANÁLISE DE RISCO (CONTROLE DE PATÓGENOS) */}
      <section className="py-20 bg-white border-y border-slate-100">
         <div className="max-w-6xl mx-auto px-6">
            <div className="bg-red-950/5 border border-red-500/20 p-10 rounded-sm flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1">
                  <h2 className="text-xl font-black text-red-900 mb-4 flex items-center gap-3 uppercase tracking-wider">
                    <ShieldAlert size={24} className="text-red-600"/> Alerta de Vetor: Mastite
                  </h2>
                  <p className="text-slate-600 mb-4 leading-relaxed font-light">
                    Infecções bacterianas no tecido mamário representam a falha sistêmica mais crítica na produção leiteira, causando <strong>70% do déficit operacional</strong> do setor por descarte de produto e custos de intervenção.
                  </p>
                  <p className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-[0.2em]">Causa Identificada: Instabilidade Microbiótica Ambiental.</p>
               </div>
               <div className="bg-white p-8 rounded-sm shadow-2xl border border-slate-100 text-center min-w-[280px] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
                  <Milk size={32} className="text-red-500 mx-auto mb-4" />
                  <p className="text-red-900 font-black text-5xl tracking-tighter">-70%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-2 font-mono text-xs">Output Rate Loss</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. MECANISMO DE SUPRESSÃO (AÇÃO) */}
      <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Vetor de Intervenção Aetheris</h2>
               <p className="text-slate-500 max-w-2xl mx-auto font-light">Reprogramação do micro-ecossistema de ordenha.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm group hover:border-amber-500/50 transition-all">
                  <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-sm flex items-center justify-center mb-6 font-mono font-bold text-lg">01</div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Exclusão Competitiva</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Neutraliza patógenos através da saturação do ambiente com agentes benéficos dominantes.</p>
               </div>
               <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm group hover:border-amber-500/50 transition-all">
                  <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-sm flex items-center justify-center mb-6 font-mono font-bold text-lg">02</div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Reset de Decomposição</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Transição forçada para via fermentativa facultativa, higienizando o substrato orgânico da fazenda.</p>
               </div>
               <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm group hover:border-amber-500/50 transition-all">
                  <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-sm flex items-center justify-center mb-6 font-mono font-bold text-lg">03</div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-3 text-slate-900 font-mono">Otimização da Flora</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Inoculação sistemática de Lactobacilos de elite para estabilizar a saúde dérmica e ambiental.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. BASE DE CONHECIMENTO (FAQ) */}
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
                           <span className="text-amber-600 font-bold block mb-2 font-mono">SYSTEM_LOG_ANALYSIS:</span>
                           {faq.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER CALL-TO-ACTION TÉCNICO */}
      <section className="py-16 bg-slate-900 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-3 mb-6 font-mono text-[10px] text-amber-500 uppercase tracking-[0.4em]">
                <Activity size={14} className="animate-pulse" /> Status do Link: Ativo
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Pronto para blindar sua produção?</h2>
            <div className="flex justify-center gap-4">
                <a href="/contato" className="bg-white text-black px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-colors">Falar com Engenharia</a>
                <a href="/carrinho" className="border border-white/20 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:border-amber-500 transition-colors">Deploy Imediato</a>
            </div>
         </div>
      </section>
    </div>
  );
}