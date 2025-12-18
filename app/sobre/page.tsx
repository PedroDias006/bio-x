"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Dna, Globe, Leaf, Microscope } from "lucide-react";
import React, { useRef } from "react";

/* =========================================================================
   DADOS INSTITUCIONAIS (Purificados e Diretos)
   ========================================================================= */
const LEADERS = [
  {
    name: "Carlos Macedo",
    role: "CEO & Fundador",
    bio: "Visão estratégica focada em biotecnologia escalável.",
    img: "/images/team-carlos.jpg", 
  },
  {
    name: "Hugo Formiga",
    role: "Diretor de Operações",
    bio: "Engenharia de processos e eficiência logística.",
    img: "/images/team-hugo.jpg", 
  },
  {
    name: "Jadir Ferraz",
    role: "Diretor de Produto",
    bio: "P&D e inovação em microbiologia aplicada.",
    img: "/images/team-jadir.jpg", 
  },
];

const TIMELINE = [
  { year: "2009", title: "A Gênese", desc: "Início das pesquisas laboratoriais focadas no isolamento de cepas nativas brasileiras." },
  { year: "2015", title: "Tecnologia", desc: "Desenvolvimento do processo proprietário de estabilização bacteriana." },
  { year: "2020", title: "Campo", desc: "Expansão para grandes culturas: Soja e Milho com resultados consistentes." },
  { year: "2025", title: "Expansão", desc: "Atuação consolidada em 8 estados e novas linhas de pesquisa." },
];

const VALUES = [
  { title: "Ciência Aplicada", desc: "Não vendemos milagres. Vendemos biologia.", icon: <Microscope className="w-6 h-6" /> },
  { title: "Sustentabilidade Real", desc: "Regeneração do solo como ativo financeiro.", icon: <Leaf className="w-6 h-6" /> },
  { title: "Tecnologia Limpa", desc: "Alta produtividade sem passivo ambiental.", icon: <Globe className="w-6 h-6" /> },
  { title: "Genética", desc: "Seleção rigorosa de microrganismos de elite.", icon: <Dna className="w-6 h-6" /> },
];

/* =========================================================================
   COMPONENTES DE UI
   ========================================================================= */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function SobreNosPremium() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Efeito Parallax suave para elementos de fundo
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-[#050608] text-slate-200 font-sans selection:bg-cyan-900 selection:text-cyan-50 overflow-x-hidden">
      
      {/* ======================================================
          1. HERO MANIFESTO (Tipográfico e Imersivo)
      ====================================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
        
        {/* Background Atmosférico (CSS Puro + Framer) */}
        <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0e2a33,transparent_70%)]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
           {/* Linhas sutis de grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-200 uppercase">Institucional Bio-X</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
            Não somos apenas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-200">
              Insumos Agrícolas.
            </span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Somos engenheiros da vida microscópica. <br className="hidden md:block" />
              Nossa missão é desbloquear o potencial genético das lavouras através da inteligência biológica do solo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======================================================
          2. PILARES DE VALOR (Design Editorial)
      ====================================================== */}
      <section className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                Tecnologia aplicada <br />
                <span className="text-cyan-500 font-serif italic">ao resultado real.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A agricultura do futuro não é sobre adicionar mais químicos. É sobre restaurar a funcionalidade biológica do sistema. Na Bio-X, combinamos microbiologia de precisão com agronomia de campo para criar soluções que pagam a conta e regeneram o ativo.
              </p>
              <div className="flex gap-4">
                 <div className="h-px flex-1 bg-gradient-to-r from-cyan-900/50 to-transparent my-auto" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          3. LINHA DO TEMPO (Minimalista)
      ====================================================== */}
      <section className="py-32 px-6 bg-[#08090B]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl font-medium text-white">Nossa Trajetória</h2>
          </FadeIn>

          <div className="relative border-l border-white/10 ml-4 md:ml-[50%] space-y-16">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Marcador Central */}
                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-[#08090B] border-2 border-cyan-500 z-10" />
                
                {/* Espaçador para alternância */}
                <div className="hidden md:block w-1/2" />
                
                {/* Conteúdo */}
                <FadeIn delay={i * 0.1} className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <span className="text-cyan-500 font-mono text-sm tracking-widest font-bold">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          4. LIDERANÇA (Cards Premium)
      ====================================================== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-medium text-white">Quem faz acontecer</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((leader, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group relative">
                  {/* Container da Imagem */}
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-800 relative mb-6">
                    <img 
                      src={leader.img} 
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Info */}
                  <div className="border-l-2 border-cyan-900 pl-4 transition-colors group-hover:border-cyan-500">
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mt-1 mb-2">{leader.role}</p>
                    <p className="text-slate-500 text-sm">{leader.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          5. CTA INSTITUCIONAL (Discreto e Elegante)
      ====================================================== */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050608]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">
              Vamos construir o futuro <br/>
              da sua produtividade?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* BOTÃO WHATSAPP */}
              <a 
                href="https://wa.me/5531995235778?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20BIO-X."
                target="_blank"
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:bg-cyan-50"
              >
                Falar com um Especialista
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a 
                href="/portfolio" 
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5"
              >
                Conhecer nossas soluções
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}