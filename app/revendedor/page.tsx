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
   DADOS E VANTAGENS DO PARCEIRO AETHERIS
   ========================================================================= */
const BENEFITS = [
  {
    title: "Sistema Fusion 5-in-1",
    desc: "Enquanto a concorrência fragmenta o mercado, você entrega o ecossistema completo em um só produto. Valor agregado imbatível.",
    icon: Zap,
  },
  {
    title: "Território Blindado",
    desc: "Política comercial de canal exclusivo. Eliminamos a guerra de preços para garantir a margem de lucro da sua unidade.",
    icon: ShieldCheck,
  },
  {
    title: "Taxa de Retenção Alta",
    desc: "A eficiência molecular garante que o cliente finalize o ciclo e retorne para o re-deploy na próxima temporada.",
    icon: TrendingUp,
  },
  {
    title: "Intel de Campo",
    desc: "Acesso direto aos nossos engenheiros de bioma e ativos de marketing de alto impacto para sua força de vendas.",
    icon: Users,
  },
];

const STATS = [
  { value: "R$ 13 Bi", label: "TAM (Mercado Endereçável)", color: "text-cyan-400" },
  { value: "+329%", label: "Crescimento Exponencial 2025", color: "text-emerald-400" },
  { value: "R$ 70 Mi", label: "Forecast de Vendas 2026", color: "text-white" },
];

/* =========================================================================
   COMPONENTES DE ANIMAÇÃO
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

export default function AetherisPartnerPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION PARTNERSHIP (ESTILO CORPORATIVO HIGH-TECH) */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/plantacao-hero.jpg" 
             alt="Aetheris Field Operations" 
             fill 
             className="object-cover opacity-60 grayscale-[30%]"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <Briefcase size={14} /> Partner Nexus
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Expanda os Limites e <br/>
              <span className="text-cyan-600">Lidere o Mercado.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl font-medium">
              A Aetheris está recrutando parceiros estratégicos. Torne-se um distribuidor autorizado da tecnologia biológica que está redefinindo o teto produtivo global.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#formulario"
                className="group bg-slate-900 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-cyan-900/10 flex items-center justify-center gap-3 text-lg hover:-translate-y-1"
              >
                Solicitar Credenciamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                          {i}
                       </div>
                    ))}
                 </div>
                 <span className="text-xs font-bold text-slate-700">+150 Unidades Operacionais</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-5 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform rotate-3 z-0" />
             
             <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl border border-white/20 group z-10">
                <Image
                    src="/images/fundo-card-crescimento.jpg" 
                    alt="Data Analytics"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                <div className="relative z-20">
                    <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 backdrop-blur-md border border-cyan-500/20">
                        <LineChart size={24} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-tight">Market Intelligence</h3>
                        <p className="text-slate-400 text-sm">Forecast Aetheris 2026</p>
                    </div>
                    </div>
                    
                    <div className="space-y-6">
                    {STATS.map((stat, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">{stat.label}</span>
                            <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
                        </div>
                    ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <p className="text-[10px] text-slate-400 leading-relaxed text-center font-mono uppercase tracking-tighter">
                            A transição para bio-insumos é irreversível. Otimize seu portfólio agora.
                        </p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-24 bg-white relative border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <FadeInUp>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                     Vantagem Competitiva <br/> 
                     <span className="text-cyan-600">para sua Unidade de Vendas.</span>
                  </h2>
                  <p className="text-slate-600 text-lg">
                     Não entregamos apenas produtos; fornecemos um ecossistema de alta lucratividade validado por centenas de distribuidores.
                  </p>
               </FadeInUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {BENEFITS.map((benefit, index) => (
                  <FadeInUp key={index} delay={index * 0.1}>
                     <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 group h-full">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                           <benefit.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           {benefit.desc}
                        </p>
                     </div>
                  </FadeInUp>
               ))}
            </div>
         </div>
      </section>

      {/* 3. A SOLUÇÃO SINTÉTICA */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
         <div className="absolute inset-0 z-0 opacity-40">
            <Image 
                src="/images/fundo-solucao-vendas.jpg" 
                alt="Aetheris Tech" 
                fill 
                className="object-cover grayscale"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0" />

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
            >
               <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full" />
               <Image 
                  src="/images/agricultura-unica-product.png" 
                  alt="Aetheris Synthetic Unit"
                  width={500}
                  height={500}
                  className="relative z-10 object-contain drop-shadow-[0_20px_60px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-700"
               />
               
               <div className="absolute bottom-10 right-0 z-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-xs text-white">
                  <p className="text-cyan-400 font-bold text-lg mb-2 uppercase tracking-tighter">Eficiência Testada</p>
                  <div className="text-slate-300 text-sm font-mono space-y-2">
                     <p>CULTURA_ALPHA: <span className="text-white font-black">+24%</span></p>
                     <p>CULTURA_BETA: <span className="text-white font-black">+25%</span></p>
                     <p>CULTURA_GAMMA: <span className="text-white font-black">+29%</span></p>
                  </div>
               </div>
            </motion.div>

            <div className="text-white">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Globe2 size={14} /> Protocolo Exclusivo
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  A Biotecnologia que <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">redefine o mercado.</span>
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                  A **Aetheris Synthetic Unit** resolve os problemas críticos do produtor em um único deploy: reconfiguração de solo, proteção contra stress térmico e hiper-enraizamento.
               </p>
               
               <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm">Resíduo Zero: 100% Biocompatível.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm">Integração Ágil: Compatível com sistemas de spray vigentes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-sm">Versatilidade: Validado em 15+ matrizes biológicas.</span>
                  </li>
               </ul>

               <a 
                  href="#formulario" 
                  className="text-cyan-400 border-b-2 border-cyan-500/30 pb-1 hover:text-cyan-300 hover:border-cyan-400 transition-all inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest font-mono"
               >
                  Ver Ficha Técnica de Distribuição <ArrowRight size={16} />
               </a>
            </div>
         </div>
      </section>

      {/* 4. FORMULÁRIO DE CREDENCIAMENTO */}
      <section id="formulario" className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-slate-200">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500" />
               
               <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tighter">
                     Acesso à Rede de Parceiros
                  </h2>
                  <p className="text-slate-500 font-medium">
                     Nossa equipe de expansão analisará seu perfil operacional e responderá via canal seguro em até 24h.
                  </p>
               </div>

               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Responsável pela Unidade</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="Nome Completo" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Título da Corporação</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="Razão Social / Nome Fantasia" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">E-mail de Link</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="protocolo@empresa.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Comlink (WhatsApp)</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="+55 00 00000-0000" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Zona de Operação</label>
                     <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="Regiões / Estados de Atuação" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Relatório de Estrutura</label>
                     <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none h-32 resize-none" placeholder="Descreva brevemente sua capilaridade logística e força de vendas..." />
                  </div>

                  <button className="w-full bg-slate-950 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-cyan-500/20 text-lg flex items-center justify-center gap-3 hover:-translate-y-1 uppercase tracking-widest">
                     <Handshake size={20} /> Solicitar Parceria
                  </button>
               </form>
            </div>
         </div>
      </section>

    </div>
  );
}