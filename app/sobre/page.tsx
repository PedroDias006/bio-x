"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Globe2, Leaf, Sprout, Tractor } from "lucide-react";

/* =========================================================================
   DADOS CORPORATIVOS - PRIDE BIOSOLUTIONS
   ========================================================================= */
const AREAS_ATUACAO = [
  {
    name: "Agricultura Regenerativa",
    role: "Linha Pride Solos",
    bio: "Potencializamos a eficiência biológica do solo e a produtividade agrícola, nutrindo os sistemas existentes e favorecendo microbiotas benéficas.",
    // OTIMIZAÇÃO: Reduzido w=500, q=50 e forçado auto=format,compress
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format,compress&q=50&w=500&fit=crop"
  },
  {
    name: "Águas e Efluentes",
    role: "Linha Pride Clean",
    bio: "Tratamento focado no equilíbrio ecológico. Melhoramos a qualidade das águas e efluentes, promovendo ambientes aquáticos revitalizados.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format,compress&q=50&w=500&fit=crop"
  },
  {
    name: "Suinocultura e Avicultura",
    role: "Pride Swine & Chicken",
    bio: "Contribuição ativa para a redução de resíduos, controle de odores e melhoria expressiva do bem-estar animal nos galpões.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format,compress&q=50&w=500&fit=crop"
  },
  {
    name: "Bovinocultura",
    role: "Linha Pride Cattle",
    bio: "Aprimoramos a gestão de dejetos e a estabilidade do ambiente, apoiando uma produção mais saudável e sustentável na pecuária.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format,compress&q=50&w=500&fit=crop"
  }
];

const PRIDE_PILLARS = [
  { value: "100%", label: "Matérias-Primas Naturais", colSpan: "md:col-span-2 lg:col-span-1" },
  { value: "04", label: "Setores de Atuação", colSpan: "md:col-span-1 lg:col-span-1" },
  { value: "Eco", label: "Equilíbrio Ambiental", colSpan: "md:col-span-1 lg:col-span-1" },
  { value: "Prática", label: "Foco no Impacto Real", colSpan: "md:col-span-2 lg:col-span-1" },
];

/* =========================================================================
   ANIMAÇÕES REUTILIZÁVEIS (OTIMIZADAS PARA PERFORMANCE)
   ========================================================================= */
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  // OTIMIZAÇÃO: Curva mais rápida e leve
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PrideAboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
      
      {/* 1. HERO SECTION INSTITUCIONAL */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-24 pt-40 px-6 bg-slate-100">
        <div className="absolute inset-0 z-0">
          {/* OTIMIZAÇÃO: fetchPriority high para carregar rápido, w=1600 e forte compressão */}
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format,compress&q=60&w=1600&fit=crop" 
            alt="Laboratório e Campo Pride BioSolutions" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
              <Globe2 size={14} /> Gênese Corporativa
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-6">
                Ciência, Prática <br />
                <span className="text-slate-500">
                  e Sustentabilidade.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                A <strong className="font-bold text-slate-950">Pride BioSolutions Ltda.</strong> nasceu da urgência por soluções reais para agricultura, saneamento e pecuária. Transformamos ciência em impacto prático.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. O MANIFESTO PRIDE */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ willChange: "transform, opacity" }}
          >
            <Sprout size={40} className="text-slate-900 mx-auto mb-10 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight mb-10">
              "Identificamos que o caminho não era apenas introduzir micro-organismos ou insumos isolados, mas <strong className="font-black text-slate-950 underline decoration-slate-300 decoration-4 underline-offset-8">criar condições ideais para que os processos naturais prosperem.</strong>"
            </h2>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
              — O Propósito Pride
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO GRID DOS PILARES */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Nossa Abordagem</h3>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">Equilíbrio entre Produção e Ambiente</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PRIDE_PILLARS.map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className={`bg-slate-50 rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 ${stat.colSpan} flex flex-col justify-between`}
              >
                <h4 className="text-5xl md:text-6xl font-black text-slate-950 mb-6 tracking-tighter">
                  {stat.value}
                </h4>
                <div className="w-full h-px bg-slate-200 mb-6" />
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. OS TRÊS FUNDAMENTOS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: Leaf, title: "Matérias-Primas", desc: "Utilizamos derivados naturais e extratos vegetais selecionados, garantindo soluções que respeitam a biologia dos sistemas." },
              { icon: FlaskConical, title: "Ciência Avançada", desc: "Nossas formulações são baseadas em pesquisa e entendimento profundo de microbiologia, solo e comportamento animal." },
              { icon: Tractor, title: "Prática de Campo", desc: "A teoria testada na terra. Desenvolvemos soluções com aplicação simples e resultados comprovados pelo produtor no dia a dia." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. ÁREAS DE ATUAÇÃO COM CORES ORIGINAIS */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-800 pb-8">
            <div className="max-w-2xl">
              <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Escopo Global</h3>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Nossas Áreas de Atuação</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm md:text-right font-light leading-relaxed">
              Soluções tecnológicas que nutrem sistemas, otimizam o bem-estar animal e promovem a sustentabilidade em toda a cadeia.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {AREAS_ATUACAO.map((area, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 mb-8 border border-slate-800 group-hover:border-slate-500 transition-colors duration-500">
                  {/* OTIMIZAÇÃO: loading lazy e decoding async */}
                  <img 
                    src={area.image} 
                    alt={area.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                    style={{ willChange: "transform" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                     <h3 className="text-xl font-bold mb-1 text-white leading-tight">{area.name}</h3>
                     <p className="text-slate-300 text-xs font-bold uppercase tracking-[0.1em]">{area.role}</p>
                  </div>
                </div>
                
                <div>
                  <div className="w-8 h-px bg-slate-700 mb-4 group-hover:bg-white transition-colors" />
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {area.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. RESPONSABILIDADE & CALL TO ACTION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-slate-950 mb-6 tracking-tight">
              O Orgulho de Fazer a Diferença
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 mb-10 text-lg leading-relaxed font-light">
              O nome <strong>Pride</strong> reflete nossa responsabilidade de entregar tecnologias que restabelecem o equilíbrio entre produção, ambiente e eficiência econômica para um futuro próspero.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="/contato" className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                Junte-se à nossa Jornada <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}