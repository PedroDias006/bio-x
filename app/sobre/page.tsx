"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Fingerprint, Globe2, Microscope, ShieldCheck } from "lucide-react";

/* =========================================================================
   DADOS CORPORATIVOS COM IMAGENS REAIS
   ========================================================================= */
const BOARD_MEMBERS = [
  {
    name: "Dra. Helena Rostova",
    role: "Chief Executive Officer (CEO)",
    bio: "Ex-diretora de biotecnologia em conglomerados europeus. Lidera a visão estratégica global da Aetheris na transição para a agricultura regenerativa sintética.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Arthur Valente",
    role: "Chief Science Officer (CSO)",
    bio: "Ph.D. em Genética Molecular. Detentor de 12 patentes em bio-otimização celular. Comanda o R&D (Pesquisa e Desenvolvimento) nos laboratórios Alpha.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Eng. Marcelo Diniz",
    role: "Chief Operating Officer (COO)",
    bio: "Mestre em Agronomia de Precisão. Especialista em escalar a produção em biorreatores de alta densidade e garantir a integração exata no campo.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

const GLOBAL_STATS = [
  { value: "2.4M+", label: "Hectares Operados", colSpan: "md:col-span-2 lg:col-span-1" },
  { value: "04", label: "Polos de R&D (Globais)", colSpan: "md:col-span-1 lg:col-span-1" },
  { value: "18", label: "Patentes Moleculares", colSpan: "md:col-span-1 lg:col-span-1" },
  { value: "99.9%", label: "Pureza Cepal Certificada", colSpan: "md:col-span-2 lg:col-span-1" },
];

/* =========================================================================
   ANIMAÇÕES REUTILIZÁVEIS
   ========================================================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AetherisCorporateAbout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* 1. HERO SECTION INSTITUCIONAL (HIGH-END) */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-24 pt-40 px-6">
        {/* Imagem de Fundo de Alta Qualidade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop" 
            alt="Infraestrutura Aetheris" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradiente branco suave que "apaga" a imagem na parte inferior para mesclar com a página */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Globe2 size={14} /> Presença Global. Impacto Molecular.
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
                A Engenharia da <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-500">
                  Nova Biologia.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Redefinimos o teto produtivo do agronegócio mundial através de nanovetores biológicos de ultra-alta precisão.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O MANIFESTO CORPORATIVO (TIPOGRAFIA ELEGANTE) */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <Microscope size={40} className="text-cyan-600 mx-auto mb-10 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight mb-10">
              "Não acreditamos que o futuro da produção alimentar dependa de máquinas maiores ou químicos mais agressivos. O futuro já está escrito no código genético da terra; <strong className="font-black text-cyan-700">nós apenas o otimizamos.</strong>"
            </h2>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
              — Diretriz Executiva, Aetheris Corp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO GRID DE NÚMEROS GLOBAIS (ESTILO APPLE/VERCEL) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Aetheris em Números</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Escala e Precisão Absoluta</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {GLOBAL_STATS.map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className={`bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 ${stat.colSpan} flex flex-col justify-between`}
              >
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 mb-6 tracking-tighter">
                  {stat.value}
                </h4>
                <div className="w-full h-px bg-slate-100 mb-6" />
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. INFRAESTRUTURA E QUALIDADE (CORPORATE CARDS) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: Fingerprint, title: "Isolamento Genômico", desc: "Laboratórios de nível de biossegurança BSL-3 garantem a seleção exclusiva das cepas mais agressivas e eficientes do mercado global." },
              { icon: BarChart3, title: "Telemetria de Dados", desc: "Cada lote produzido é monitorado por inteligência artificial, cruzando dados climáticos e de solo para prever a viabilidade em campo." },
              { icon: ShieldCheck, title: "Compliance e ISO", desc: "Operação estritamente regulamentada pelas normas internacionais de biotecnologia. Qualidade auditada em todas as etapas da cadeia." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 mb-8 group-hover:bg-cyan-50 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CONSELHO EXECUTIVO (C-LEVEL BOARD) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow de fundo corporativo escuro */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900 z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Liderança Global</h3>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Conselho de Administração</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm md:text-right font-light leading-relaxed">
              Guiando a Aetheris Corp através da interseção entre ciência rigorosa, escalabilidade industrial e excelência operacional.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {BOARD_MEMBERS.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                {/* Imagem do Executivo usando tag <img> normal para evitar erros do next.config */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-800 mb-8 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  />
                  {/* Gradiente escuro em baixo da foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.1em] mb-4">{member.role}</p>
                  <div className="w-8 h-px bg-white/20 mb-4 group-hover:bg-cyan-500 transition-colors" />
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. INVESTOR / COMPLIANCE CALL TO ACTION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Transparência e Conformidade Institucional
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mb-10 text-lg leading-relaxed font-light">
              Acesse nosso portal de governança para relatórios de sustentabilidade (ESG), laudos laboratoriais independentes e diretrizes de compliance global.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button className="bg-slate-900 text-white hover:bg-cyan-700 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-cyan-700/20 hover:-translate-y-1 flex items-center gap-3 mx-auto">
                Portal de Relações Corporativas <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}