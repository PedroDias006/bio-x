"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Briefcase,
    CheckCircle2,
    Globe2,
    Handshake,
    LineChart,
    ShieldCheck,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";
import Image from "next/image";

/* =========================================================================
   DADOS E BENEFÍCIOS
   ========================================================================= */
const BENEFITS = [
  {
    title: "Produto 5 em 1",
    desc: "Enquanto a concorrência empurra 5 frascos, você vende a solução completa em um só. Argumento de venda imbatível.",
    icon: Zap,
  },
  {
    title: "Margem Protegida",
    desc: "Política comercial rigorosa. Acabe com a guerra de preços e garanta a rentabilidade da sua revenda.",
    icon: ShieldCheck,
  },
  {
    title: "Alta Recorrência",
    desc: "Resultados visíveis na primeira safra garantem que o produtor volte para comprar mais a cada ciclo.",
    icon: TrendingUp,
  },
  {
    title: "Suporte Técnico",
    desc: "Acesso direto aos nossos agrônomos e materiais de marketing de alta conversão para sua equipe.",
    icon: Users,
  },
];

const STATS = [
  { value: "R$ 13 Bi", label: "Mercado Endereçável (TAM)", color: "text-emerald-400" },
  { value: "+329%", label: "Crescimento Projetado 2025", color: "text-cyan-400" },
  { value: "R$ 70 Mi", label: "Meta de Vendas 2026", color: "text-white" },
];

/* =========================================================================
   COMPONENTES
   ========================================================================= */
const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function ResellerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION B2B */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/plantacao-hero.jpg" 
             alt="Background Agro Business" 
             fill 
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
               <Briefcase size={14} /> Área do Parceiro
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
              Cultive Sucesso e <br/>
              <span className="text-emerald-600">Domine seu Território.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl font-medium">
              Junte-se à elite do agronegócio. Torne-se um distribuidor autorizado Bio-X e leve a tecnologia biológica de alta performance que está redefinindo a produtividade no campo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#formulario"
                className="group bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 text-lg hover:-translate-y-1"
              >
                Quero ser Revendedor <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-600 font-bold">
                          {i}
                       </div>
                    ))}
                 </div>
                 <span className="text-xs font-bold text-slate-700">Junte-se a +150 parceiros</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-5 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 rounded-3xl blur-2xl transform rotate-6 z-0" />
             
             <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl border border-white/10 group z-10">
                <Image
                   src="/images/fundo-card-crescimento.jpg" 
                   alt="Crescimento Agro"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-[#020617]/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 backdrop-blur-sm border border-emerald-500/20">
                        <LineChart size={24} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Visão de Crescimento</h3>
                        <p className="text-slate-300 text-sm">Projeção Bio-X 2024-2026</p>
                    </div>
                    </div>
                    
                    <div className="space-y-6">
                    {STATS.map((stat, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 last:border-0 last:pb-0">
                            <span className="text-sm text-slate-300 font-medium">{stat.label}</span>
                            <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
                        </div>
                    ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-xs text-slate-300 leading-relaxed text-center font-medium">
                            O mercado de bioinsumos é o que mais cresce no agro global. Garanta sua fatia desse mercado de R$ 13 Bilhões.
                        </p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. POR QUE ESCOLHER A BIO-X? */}
      <section className="py-24 bg-white relative border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <FadeInUp>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                     Por que os maiores distribuidores <br/> 
                     <span className="text-emerald-600">escolhem a Bio-X?</span>
                  </h2>
                  <p className="text-slate-600 text-lg">
                     Não oferecemos apenas produtos. Oferecemos um modelo de negócio validado, rentável e escalável.
                  </p>
               </FadeInUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {BENEFITS.map((benefit, index) => (
                  <FadeInUp key={index} delay={index * 0.1}>
                     <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group h-full">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                           <benefit.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                           {benefit.desc}
                        </p>
                     </div>
                  </FadeInUp>
               ))}
            </div>
         </div>
      </section>

      {/* 3. A SOLUÇÃO (IMERSIVA COM FUNDO) */}
      <section className="py-24 relative overflow-hidden">
         {/* FUNDO DA SEÇÃO SOLUÇÃO (NOVO) */}
         <div className="absolute inset-0 z-0">
            <Image 
               src="/images/fundo-solucao-vendas.jpg" // CERTIFIQUE-SE DE TER ESSA IMAGEM
               alt="Tecnologia Bio-X" 
               fill 
               className="object-cover"
            />
            {/* Overlay escuro para destacar o texto branco */}
            <div className="absolute inset-0 bg-[#020617]/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
         </div>

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Lado Esquerdo: Imagem Produto */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative flex justify-center"
            >
               <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full transform scale-90" />
               <Image 
                  src="/images/agricultura-unica-product.png" 
                  alt="Produto Bio-X"
                  width={500}
                  height={500}
                  className="relative z-10 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
               
               {/* Badge Flutuante (Dark Mode Style para contrastar com o fundo escuro) */}
               <div className="absolute bottom-10 right-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl max-w-xs text-white">
                  <p className="text-emerald-400 font-bold text-lg mb-2">+ Produtividade</p>
                  <p className="text-slate-300 text-sm font-medium space-y-1">
                     Soja: <span className="text-white font-black">+24%</span> <br/>
                     Trigo: <span className="text-white font-black">+25%</span> <br/>
                     Batata: <span className="text-white font-black">+29%</span>
                  </p>
               </div>
            </motion.div>

            {/* Lado Direito: Texto (Branco para ler sobre o fundo escuro) */}
            <div className="text-white">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                  <Globe2 size={14} /> Tecnologia Exclusiva
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                  Uma solução que se <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">vende sozinha.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light drop-shadow-sm">
                  O <strong>Bio-X Agricultura Única</strong> resolve as maiores dores do produtor em um único passo: recompõe nutrientes, blinda contra stress hídrico e explode o enraizamento.
               </p>
               
               <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm font-light">Tecnologia 100% natural sem resíduos químicos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm font-light">Compatível com o manejo atual (sem mudar a rotina da fazenda).</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm font-light">Resultados comprovados em +15 culturas diferentes.</span>
                  </li>
               </ul>

               <a 
                  href="#formulario" 
                  className="text-emerald-400 border-b-2 border-emerald-500/30 pb-1 hover:text-emerald-300 hover:border-emerald-400 transition-all inline-flex items-center gap-2 font-bold"
               >
                  Ver ficha técnica completa <ArrowRight size={16} />
               </a>
            </div>
         </div>
      </section>

      {/* 4. FORMULÁRIO DE APLICAÇÃO */}
      <section id="formulario" className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-slate-200">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400" />
               
               <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                     Pronto para crescer com a Bio-X?
                  </h2>
                  <p className="text-slate-600 font-medium">
                     Preencha o formulário abaixo. Nossa equipe de expansão analisará seu perfil e entrará em contato em até 24h.
                  </p>
               </div>

               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nome Completo</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm" placeholder="Seu nome" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nome da Empresa / Revenda</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm" placeholder="Sua empresa" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-mail Corporativo</label>
                        <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm" placeholder="contato@empresa.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">WhatsApp</label>
                        <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm" placeholder="(00) 00000-0000" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase ml-1">Região de Atuação</label>
                     <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm" placeholder="Cidade / Estado" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase ml-1">Mensagem (Opcional)</label>
                     <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-sm h-32 resize-none" placeholder="Conte um pouco sobre sua estrutura atual..." />
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 hover:-translate-y-1">
                     <Handshake size={20} /> Solicitar Parceria
                  </button>
               </form>
            </div>
         </div>
      </section>

    </div>
  );
}