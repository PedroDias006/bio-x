"use client";

import { motion } from "framer-motion";

export default function AetherisProtocol() {

  const steps = [
    { title: "Deploy de Bioma", desc: "Tecnologia molecular aplicada diretamente às necessidades estruturais do ecossistema." },
    { title: "Core Científico", desc: "Algoritmos genéticos, pesquisa contínua e rigor analítico em ambientes controlados." },
    { title: "Regeneração Ativa", desc: "Nanovetores biológicos que estabilizam e reconfiguram a matriz orgânica do substrato." },
    { title: "Telemetria de Campo", desc: "Métricas de alta performance comprovadas em múltiplas zonas de operação." },
  ];

  return (
    <section className="relative py-32 bg-[#010A16] text-white flex flex-col items-center">
      
      {/* TÍTULO CENTRAL */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        O Protocolo Aetheris
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-zinc-300 text-center mt-4 max-w-2xl"
      >
        Um pipeline lógico, validado e desenvolvido para otimizar o código biológico e o output produtivo.
      </motion.p>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-10 mt-24 max-w-6xl px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group relative bg-[#031C29] border border-[#00FFA9]/20 rounded-3xl p-8 shadow-xl hover:shadow-[0_0_20px_rgba(0,255,169,0.25)] transition duration-300"
          >
            
            {/* DECORAÇÃO SUPERIOR */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#00FFA9]/20 blur-xl rounded-full" />

            <h3 className="text-xl font-semibold text-[#00FFA9] mb-4 group-hover:scale-105 transition">
              {step.title}
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {step.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}