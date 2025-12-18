"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Leaf, ShoppingCart, Timer, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "compostagem-full",
  name: "Bio-X Compostagem®",
  headline: "Por um Futuro Sustentável.",
  description: "Acelera a decomposição via fermentação, reduz odores ofensivos e equilibra a microbiota do composto. Transforme resíduos em fertilizante rico.",
  price: 159.90,
  image: "/images/produto-compostagem.png",
  backLink: "/agricultura",
  certifications: "IBAMA / MMA 7733254"
};

const FAQS = [
  { q: "Qual a diferença da compostagem comum para a com Bio-X?", a: "A convencional é oxidativa (aeróbia). Com Bio-X, o processo se torna fermentativo facultativo (aeróbio e anaeróbio), o que é mais rápido e eficiente." },
  { q: "Reduz o mau cheiro?", a: "Sim! Reduz expressivamente os odores ofensivos (amônia, sulfídrico) gerados no processo de decomposição natural." },
  { q: "Qual a composição do produto?", a: "Saccharomyces boulardii, Lactobacillus rhamnosus, Lactobacillus parafarraginis, Lactobacillus casei, sacarose e água." },
  { q: "Quais os benefícios para o adubo final?", a: "Gera um incremento positivo na qualidade final do composto e reduz microrganismos patógenos." },
];

export default function CompostagemPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-bold uppercase text-emerald-600 mb-4 flex items-center gap-1 hover:underline">
              <ArrowRight size={14} className="rotate-180" /> Voltar
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-emerald-500 pl-4">{PRODUCT.description}</p>
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Compostagem", rating: 4.8 })} className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all">
                <ShoppingCart size={20} className="inline mr-2" /> Comprar Agora
            </button>
            <p className="mt-4 text-xs text-slate-500">Certificação: {PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center">
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. CICLO DA MATÉRIA ORGÂNICA (Visual do Folder) */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Ciclo da Matéria Orgânica</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
               {["Alimentos / Refeições", "Restos de Alimentos", "Pilha de Compostagem", "Fertilização"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className="px-6 py-4 bg-emerald-50 rounded-2xl border border-emerald-100 font-bold text-emerald-800 shadow-sm">
                        {step}
                     </div>
                     {i < 3 && <ArrowRight className="text-emerald-300 hidden md:block" />}
                  </div>
               ))}
            </div>
            <p className="mt-8 text-slate-500 text-sm">O Bio-X atua na etapa de Pilha de Compostagem, acelerando o retorno ao solo.</p>
         </div>
      </section>

      {/* 3. TECNOLOGIA E COMPOSIÇÃO */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-extrabold text-slate-900 mb-6">A Ciência por Trás</h2>
               <p className="mb-6 text-slate-600">
                  A compostagem convencional ocorre em fases oxidativas. O Bio-X Compostagem introduz uma via fermentativa que é mais eficiente e menos odorífera.
               </p>
               <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1"><Timer size={20}/></div>
                     <div>
                        <strong className="block text-slate-900">Aceleração</strong>
                        <span className="text-sm text-slate-600">Reduz o tempo de decomposição.</span>
                     </div>
                  </li>
                  <li className="flex gap-4 items-start">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1"><Zap size={20}/></div>
                     <div>
                        <strong className="block text-slate-900">Qualidade</strong>
                        <span className="text-sm text-slate-600">Incremento positivo no composto final.</span>
                     </div>
                  </li>
                  <li className="flex gap-4 items-start">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1"><Leaf size={20}/></div>
                     <div>
                        <strong className="block text-slate-900">Equilíbrio</strong>
                        <span className="text-sm text-slate-600">Redução de patógenos na microbiota.</span>
                     </div>
                  </li>
               </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-slate-900">Composição (Biotecnologia 100% Natural)</h3>
                <div className="grid grid-cols-1 gap-3">
                    {["Saccharomyces boulardii", "Lactobacillus rhamnosus", "Lactobacillus parafarraginis", "Lactobacillus casei"].map((bac, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg text-sm font-medium text-emerald-800">
                            <CheckCircle2 size={16} /> {bac}
                        </div>
                    ))}
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