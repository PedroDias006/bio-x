"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Info, ShieldAlert, ShoppingCart, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "saude-suinos-full",
  name: "Saúde Única Suínos®",
  headline: "Redução de Antibióticos e Diarreia.",
  description: "Tecnologia 100% natural que modula o Trato Gastrointestinal (TGI). Reduz microrganismos patógenos, gases ofensivos (Amônia) e melhora o bem-estar animal.",
  price: 219.90,
  image: "/images/produto-suino.png",
  backLink: "/saude-animal",
  certifications: "IBAMA / MMA 7733254"
};

const FAQS = [
  { q: "Quais micotoxinas ele ajuda a controlar?", a: "Auxilia no combate a Aflatoxina, Ocratoxina, Deoxinivalenol, Zearalenona, Fumonisina e toxinas T-2, produzidas por fungos como Aspergillus e Fusarium." },
  { q: "Como atua na diarreia?", a: "Atua no equilíbrio da microbiota intestinal e modulação do TGI, reduzindo expressivamente a diarreia e a refugagem." },
  { q: "Onde posso aplicar o produto?", a: "É versátil: pode ser usado na água de bebida, na limpeza das instalações, no banho das matrizes e para o bem-estar dos leitões." },
  { q: "Reduz odores na granja?", a: "Sim, há uma redução perceptível na liberação de Amônia (NH3) no ambiente, o que também diminui o número de moscas e insetos." },
];

export default function SaudeSuinosPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-rose-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-bold uppercase text-rose-600 mb-4 flex items-center gap-1 hover:underline">
              <ArrowRight size={14} className="rotate-180" /> Voltar
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">{PRODUCT.headline}</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-rose-500 pl-4">{PRODUCT.description}</p>
            <button onClick={() => addToCart({ ...PRODUCT, tag: "Suinocultura", rating: 4.8 })} className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg transition-all">
                <ShoppingCart size={20} className="inline mr-2" /> Comprar Agora
            </button>
            <p className="mt-4 text-xs text-slate-500">Certificação: {PRODUCT.certifications}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center">
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS TÉCNICOS */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Benefícios Comprovados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                  <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2"><TrendingUp className="text-rose-500"/> Performance</h3>
                  <ul className="space-y-3 text-slate-600 text-sm">
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Aumento no desenvolvimento do Sistema Imune.</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Melhora da C.A. (Conversão Alimentar).</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Incremento positivo no GPD.</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500"/> Diminuição significativa da refugagem e mortalidade.</li>
                  </ul>
               </div>
               <div className="p-8 bg-rose-50 rounded-3xl border border-rose-100">
                  <h3 className="font-bold text-xl text-rose-800 mb-4 flex items-center gap-2"><ShieldAlert className="text-rose-600"/> Proteção Sanitária</h3>
                  <ul className="space-y-3 text-rose-700 text-sm font-medium">
                     <li className="flex gap-2"><CheckCircle2 size={16}/> Redução no uso de medicamentos e antibióticos.</li>
                     <li className="flex gap-2"><CheckCircle2 size={16}/> Redução expressiva na diarreia.</li>
                     <li className="flex gap-2"><CheckCircle2 size={16}/> Controle de Amônia e moscas.</li>
                     <li className="flex gap-2"><CheckCircle2 size={16}/> Combate a micotoxinas (Aflatoxina, Zearalenona, etc).</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 3. APLICAÇÃO E COMPOSIÇÃO */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Versatilidade de Uso</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {["Água de Bebida", "Limpeza das Instalações", "Banho das Matrizes", "Bem-estar dos Leitões"].map((item, i) => (
                     <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-rose-500" /> {item}
                     </div>
                  ))}
               </div>
               
               <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Composição Técnica:</h4>
                  <p className="text-sm text-slate-600">Saccharomyces boulardii, Lactobacillus rhamnosus, Lactobacillus parafarraginis, Lactobacillus casei, sacarose, água.</p>
               </div>
            </div>
            
            <div className="bg-rose-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                <Info size={48} className="text-rose-500 mb-4" />
                <h3 className="text-xl font-bold text-rose-900 mb-2">Micotoxinas</h3>
                <p className="text-sm text-rose-800">
                    Os fungos Aspergillus, Fusarium e Claviceps produzem toxinas prejudiciais. O uso diário do Saúde Única ajuda a eliminar esses problemas de saúde e desempenho.
                </p>
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