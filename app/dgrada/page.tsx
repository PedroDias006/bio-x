"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Beaker, CheckCircle2, ChevronDown, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRODUCT = {
  id: "dgrada-full",
  name: "Dgrada® Biodegradador",
  headline: "Bem Vindo ao Futuro: Tira Fedô e Desentope.",
  description: "Biotecnologia 100% natural que combina conhecimento técnico e microrganismos da biota brasileira. Elimina o mau cheiro, previne entupimentos e limpa fossas, caixas de gordura e biodigestores.",
  price: 249.90,
  image: "/images/produto-dgrada.png", 
  contextImage: "/images/dgrada-uso-pia.jpg",
  backLink: "/agua-meioambiente",
  certifications: "IBAMA / MMA 7733254"
};

const FAQS = [
  { q: "Posso usar água sanitária ou cloro junto com o Dgrada?", a: "Não. Produtos com ação desinfetante (cloro, água sanitária) anulam a ação do Dgrada pois matam os microrganismos. Evite usá-los no momento da aplicação." },
  { q: "Como devo preparar o produto?", a: "Em um copo com 200ml de água limpa, adicione 1 colher de sopa de Dgrada. Misture bem e aguarde 1 hora para ativar as bactérias antes de jogar no ralo ou vaso." },
  { q: "Qual o melhor horário para aplicar?", a: "Recomenda-se fazer o tratamento à noite, após encerrar todas as atividades domésticas, para que o produto aja por mais tempo sem enxágue." },
  { q: "Serve para residências com muitas pessoas?", a: "Sim. Para residências com mais de 5 moradores, recomenda-se dobrar a dose do Dgrada por ponto de aplicação." },
];

export default function DgradaPage() {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* 1. HERO COM IMAGEM DE FUNDO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image src="/images/fundo-dgrada.jpg" alt="Banheiro Limpo" fill className="object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href={PRODUCT.backLink} className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 inline-flex items-center gap-1 hover:underline">
               <ArrowRight size={14} className="rotate-180" /> Voltar
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-6">
               <CheckCircle2 size={14} /> 100% Natural
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              {PRODUCT.headline}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-cyan-500 pl-4">
              {PRODUCT.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                  onClick={() => addToCart({ ...PRODUCT, tag: "Saneamento", rating: 5.0 })}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg shadow-lg hover:-translate-y-1 transition-all"
              >
                  <ShoppingCart size={20} /> Comprar Agora - R$ {PRODUCT.price}
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500 font-medium">Produto Registrado: {PRODUCT.certifications}</p>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative flex justify-center">
             <Image src={PRODUCT.image} alt={PRODUCT.name} width={450} height={450} className="object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. INSTRUÇÕES DE USO (Baseado no Folder) */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Modo de Preparo Obrigatório</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 relative">
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                    <h3 className="font-bold text-lg mt-4 mb-2">Mistura</h3>
                    <p className="text-sm text-slate-600">Em um copo com 200ml de água limpa, adicione uma colher de sopa de Dgrada.</p>
                </div>
                <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 relative">
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                    <h3 className="font-bold text-lg mt-4 mb-2">Ativação (Crucial)</h3>
                    <p className="text-sm text-slate-600">Misture bem e <strong>aguarde por 1:00h</strong>. Esse tempo é necessário para "acordar" os microrganismos.</p>
                </div>
                <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 relative">
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                    <h3 className="font-bold text-lg mt-4 mb-2">Aplicação</h3>
                    <p className="text-sm text-slate-600">Aplique no ralo, vaso sanitário, pias ou pisos. Preferencialmente à noite.</p>
                </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0" />
                <div>
                    <h4 className="font-bold text-red-800 text-sm">Atenção: Incompatibilidade Química</h4>
                    <p className="text-xs text-red-700">Não aplicar produtos com ação desinfetante como: água sanitária, cloro e outros ao usar o Dgrada, caso contrário, sua ação será anulada.</p>
                </div>
            </div>
         </div>
      </section>

      {/* 3. COMPOSIÇÃO TÉCNICA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 flex items-center justify-center gap-2">
               <Beaker className="text-cyan-600" /> Composição Garantida
            </h3>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                     "Saccharomyces boulardii", 
                     "Lactobacillus rhamnosus", 
                     "Lactobacillus parafarraginis", 
                     "Lactobacillus casei", 
                     "Sacarose", 
                     "Amido de Milho",
                     "Água"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <CheckCircle2 size={16} className="text-cyan-500" /> 
                        <span className="text-sm font-bold text-slate-700">{item}</span>
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
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                     >
                        {faq.q}
                        <ChevronDown size={20} className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                     </button>
                     {openFaq === i && (
                        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
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