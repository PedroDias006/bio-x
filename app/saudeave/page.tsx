"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, ShoppingCart, Sun, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "saude-aves-full",
  name: "Saúde Única Aves®",
  headline: "Cama Seca e Lotes Uniformes.",
  description: "Reduz a mortalidade, controla a amônia e melhora a conversão alimentar. Essencial para ambiência, sanidade e redução de antibióticos.",
  price: 189.90,
  image: "/images/produto-aves.png",
  backLink: "/saude-animal",
  certifications: "IBAMA 7733254"
};

const FAQS = [
  { q: "Como ajuda na Conversão Alimentar (CA)?", a: "O produto equilibra a microbiota intestinal, melhorando a absorção de nutrientes e resultando em um incremento positivo no GPD." },
  { q: "Qual o benefício para a cama do aviário?", a: "Ele promove uma 'Cama Sempre Seca' ao acelerar a decomposição da matéria orgânica, reduzindo a umidade e a liberação de amônia." },
  { q: "Posso aplicar nos galpões com as aves dentro?", a: "Sim, a nebulização dos galpões é uma das formas indicadas de uso, melhorando a ambiência e reduzindo patógenos aéreos." },
  { q: "Reduz custos de produção?", a: "Sim, através da baixa expressiva no uso de medicamentos, antibióticos e produtos químicos para controle de insetos." }
];

export default function SaudeAvesPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-bold uppercase text-amber-600 mb-4 flex items-center gap-1 hover:underline">
              <ArrowRight size={14} className="rotate-180" /> Voltar
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-amber-500 pl-4">{PRODUCT.description}</p>
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Avicultura", rating: 4.9 })} className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg transition-all">
                <ShoppingCart size={20} className="inline mr-2" /> Comprar Agora
            </button>
            <p className="mt-4 text-xs text-slate-500">Certificação: {PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center">
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. RESULTADOS DO CATÁLOGO */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Benefícios da Tecnologia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all">
                  <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4"><Wind size={32} /></div>
                  <h3 className="font-bold text-lg mb-2">Redução de Amônia</h3>
                  <p className="text-sm text-slate-600">Redução perceptível na liberação de NH3 e no número de moscas.</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all">
                  <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4"><Sun size={32} /></div>
                  <h3 className="font-bold text-lg mb-2">Cama Sempre Seca</h3>
                  <p className="text-sm text-slate-600">Ambiente mais saudável, reduzindo problemas de calo e respiratórios.</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all">
                  <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4"><ShieldCheck size={32} /></div>
                  <h3 className="font-bold text-lg mb-2">Menos Mortalidade</h3>
                  <p className="text-sm text-slate-600">Consequente decréscimo na mortalidade e diminuição da refugagem.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. ONDE APLICAR */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-amber-100 rounded-3xl p-10">
               <h2 className="text-3xl font-extrabold text-amber-900 mb-6">Versatilidade de Uso</h2>
               <div className="space-y-4">
                  {[
                     { title: "Nebulização dos Galpões", desc: "Controle ambiental e redução de patógenos aéreos." },
                     { title: "Água de Bebida", desc: "Saúde intestinal (TGI) e imunidade." },
                     { title: "Limpeza das Instalações", desc: "Higienização profunda entre lotes." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-amber-200">
                        <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">{i+1}</div>
                        <div>
                           <h4 className="font-bold text-slate-900">{item.title}</h4>
                           <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Composição Técnica</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> Saccharomyces boulardii</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> Lactobacillus rhamnosus</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> Lactobacillus parafarraginis</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> Lactobacillus casei</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> Sacarose e Água</li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 bg-white">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-slate-900">Dúvidas Frequentes</h2>
            <div className="space-y-4">
               {FAQS.map((faq, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                     <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between p-5 text-left font-bold text-slate-800">
                        {faq.q} <ChevronDown size={20} className={openFaq === i ? "rotate-180" : ""} />
                     </button>
                     {openFaq === i && <div className="p-5 pt-0 text-sm text-slate-600 border-t border-slate-200">{faq.a}</div>}
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}