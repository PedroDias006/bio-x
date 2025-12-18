"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Milk, ShieldAlert, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "saude-gado-full",
  name: "Bio-X Saúde do Gado®",
  headline: "Combate à Mastite e Perdas de Leite.",
  description: "Tecnologia natural que atua no controle de microrganismos patógenos e previne a mastite bovina, responsável por 70% das perdas totais na produção.",
  price: 199.90,
  image: "/images/produto-gado.png",
  backLink: "/saude-animal",
  certifications: "IBAMA / MMA 773325"
};

const FAQS = [
  { q: "O que é Mastite Bovina?", a: "É uma resposta inflamatória do tecido do úbere, causada por trauma ou infecções. Leva à diminuição da produção de leite e prejuízos enormes." },
  { q: "Como o produto atua no ambiente?", a: "Ele altera o processo de decomposição da matéria orgânica de oxidativo para fermentativo facultativo (aeróbio e anaeróbio). Isso acelera a decomposição e retira o substrato dos patógenos." },
  { q: "Qual a composição do produto?", a: "Sua fórmula contém microrganismos conhecidos como Lactobacilos e Leveduras, que equilibram a microbiota do local." },
];

export default function SaudeGadoPage() {
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
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Bovinos", rating: 5.0 })} className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-all">
                <ShoppingCart size={20} className="inline mr-2" /> Comprar Agora
            </button>
            <p className="mt-4 text-xs text-slate-500">Certificação: {PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center">
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. O PROBLEMA (MASTITE) */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="bg-red-50 border border-red-100 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                  <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2"><ShieldAlert size={28}/> Atenção: Mastite Bovina</h2>
                  <p className="text-red-800 mb-4 leading-relaxed">
                     A mastite é causada por infecções que geram danos ao tecido mamário. Ela é responsável por <strong>70% das perdas totais</strong> na produção de leite devido ao descarte e custos veterinários.
                  </p>
                  <p className="text-sm font-bold text-red-700">A principal causa? Ambiente contaminado e matéria orgânica acumulada.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center min-w-[250px]">
                  <Milk size={40} className="text-red-500 mx-auto mb-2" />
                  <p className="text-red-900 font-black text-3xl">-70%</p>
                  <p className="text-xs text-red-600 uppercase font-bold">Perda de Produção</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. MECANISMO DE AÇÃO (Folder) */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Como a Tecnologia Bio-X Atua?</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">Mudança de paradigma no controle ambiental da fazenda.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                  <h3 className="font-bold text-lg mb-2">Controle de Patógenos</h3>
                  <p className="text-sm text-slate-600">Reduz microrganismos causadores de doenças através da exclusão competitiva.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                  <h3 className="font-bold text-lg mb-2">Processo Fermentativo</h3>
                  <p className="text-sm text-slate-600">Passa o ambiente de oxidativo para fermentativo facultativo, acelerando a limpeza natural.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="w-12 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                  <h3 className="font-bold text-lg mb-2">Microbiota Benéfica</h3>
                  <p className="text-sm text-slate-600">Potencializa a flora positiva do ambiente com Lactobacilos e Leveduras.</p>
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