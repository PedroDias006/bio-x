"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Factory,
  Feather,
  Leaf,
  LineChart,
  Recycle,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
  {
    icon: Wheat,
    title: "Conversão",
    text: "Busca por melhor eficiência alimentar.",
  },
  {
    icon: BarChart3,
    title: "Desempenho",
    text: "Foco em produtividade e uniformidade.",
  },
  {
    icon: ShieldCheck,
    title: "Sanidade",
    text: "Maior estabilidade em ambientes produtivos.",
  },
  {
    icon: LineChart,
    title: "Previsibilidade",
    text: "Redução de variações operacionais.",
  },
  {
    icon: Factory,
    title: "Escala",
    text: "Aderência a grandes operações integradas.",
  },
];

const APPLICATIONS = [
  "Frango de corte",
  "Matrizes",
  "Sistemas integrados",
  "Conversão alimentar",
  "Estabilidade sanitária",
  "Produtividade em escala",
];

const DIFFERENTIALS = [
  {
    number: "01",
    title: "Eficiência alimentar",
    text: "Solução voltada para melhor aproveitamento nutricional e maior consistência produtiva.",
  },
  {
    number: "02",
    title: "Uniformidade dos lotes",
    text: "Apoia operações que buscam estabilidade, previsibilidade e melhor padronização de desempenho.",
  },
  {
    number: "03",
    title: "Ambientes produtivos",
    text: "Contribui para maior equilíbrio em sistemas intensivos, reduzindo variações operacionais.",
  },
  {
    number: "04",
    title: "Alta escala",
    text: "Pensado para operações avícolas integradas, granjas industriais e sistemas de grande volume.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Avaliar",
    text: "Entendimento da operação, tipo de produção, desafios sanitários, ambiência e objetivos produtivos.",
  },
  {
    step: "02",
    title: "Aplicar",
    text: "Indicação técnica conforme sistema avícola, fase produtiva, estrutura e escala da operação.",
  },
  {
    step: "03",
    title: "Padronizar",
    text: "Acompanhamento para reduzir variações, melhorar previsibilidade e apoiar resultados consistentes.",
  },
];

export default function PoultryAntPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/poultry.webp"
            alt="Poultry Ant"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/64" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(214,184,54,0.22),transparent_34%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-6 pb-10 pt-[140px] md:px-10 lg:px-16 lg:pt-[155px]">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-[790px]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d6b836]" />
                <span className="text-[11px] font-black uppercase tracking-[0.36em] text-[#d6b836]">
                  Anthars Animal Performance
                </span>
              </div>

              <h1 className="font-serif text-[56px] leading-[0.9] tracking-[-0.045em] text-white sm:text-[74px] md:text-[92px] lg:text-[108px]">
                POULTRY
                <br />
                <span className="text-[#d6b836]">ANT</span>
              </h1>

              <div className="mt-7 max-w-[680px] border-l-2 border-[#d6b836] pl-6">
                <p className="text-[18px] font-medium leading-relaxed text-white/88 md:text-[22px]">
                  Linha voltada à avicultura, com foco em desempenho, conversão
                  alimentar, estabilidade sanitária e produtividade em sistemas
                  de alta escala.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-3 rounded-[6px] bg-[#d6b836] px-8 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#e4c84a]"
                >
                  Falar com engenharia
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#aplicacoes"
                  className="inline-flex items-center justify-center rounded-[6px] border border-white/20 bg-white/5 px-8 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  Ver aplicações
                </a>
              </div>
            </motion.div>

            {/* BOMBONA */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
              className="relative flex min-h-[360px] items-center justify-center lg:min-h-[560px]"
            >
              <div className="absolute h-[320px] w-[320px] rounded-full bg-[#d6b836]/18 blur-[95px] md:h-[470px] md:w-[470px]" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 w-[290px] sm:w-[360px] md:w-[430px] lg:w-[520px]"
              >
                <Image
                  src="/images/bombona-poultry-ant.png"
                  alt="Bombona Poultry Ant"
                  width={850}
                  height={850}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.65)]"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* BENEFÍCIOS DO HERO */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="mt-12 border-t border-white/12 pt-8 lg:mt-4"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {BENEFITS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[18px] border border-white/8 bg-black/25 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b836]/35 hover:bg-black/40"
                  >
                    <Icon
                      size={28}
                      className="mb-5 text-[#d6b836] transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mb-3 font-serif text-[15px] font-black uppercase tracking-[0.08em] text-white">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-relaxed text-white/55">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-l-4 border-[#d6b836] bg-gradient-to-r from-[#d6b836]/20 to-transparent px-6 py-5 text-[18px] font-black text-white md:text-[21px]">
              Performance sustentável para a avicultura do futuro.
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCO DE ATUAÇÃO */}
      <section
        id="aplicacoes"
        className="relative bg-[#f5f1e8] px-6 py-24 text-[#101510] md:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1250px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#b79822]">
              Foco de atuação
            </p>

            <h2 className="max-w-[620px] font-serif text-[42px] leading-[0.98] tracking-[-0.04em] md:text-[62px]">
              Avicultura industrial.
            </h2>

            <p className="mt-6 max-w-[580px] text-[17px] leading-relaxed text-black/60 md:text-[19px]">
              Aplicação em operações de frango de corte, matrizes e sistemas
              integrados de produção.
            </p>

            <Link
              href="/contato"
              className="mt-8 inline-flex items-center gap-3 rounded-[6px] bg-[#0b1d13] px-7 py-4 text-[12px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Solicitar orientação técnica
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/poultry-showcase.webp"
                alt="Aplicações Poultry Ant"
                width={900}
                height={620}
                className="h-[360px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#d6b836]">
                  Poultry Ant™
                </p>
                <h3 className="max-w-[560px] text-[30px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
                  Eficiência e previsibilidade para a cadeia avícola.
                </h3>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {APPLICATIONS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[18px] border border-black/8 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-md"
                >
                  <BadgeCheck size={18} className="shrink-0 text-[#b79822]" />
                  <span className="text-[14px] font-bold text-black/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden bg-[#07140d] px-6 py-24 md:px-10 lg:px-16">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#d6b836]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1300px]">
          <div className="mb-14 max-w-[760px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#d6b836]">
              Diferenciais Anthars
            </p>

            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.04em] text-white md:text-[62px]">
              Mais previsibilidade para sistemas avícolas de alta escala.
            </h2>

            <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-white/58">
              Uma linha pensada para conectar conversão alimentar, desempenho,
              sanidade, uniformidade e produtividade em uma mesma estratégia.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {DIFFERENTIALS.map((item) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="min-h-[300px] border border-white/10 bg-black/24 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b836]/35 hover:bg-black/38"
              >
                <p className="mb-12 text-[13px] font-black tracking-[0.2em] text-[#d6b836]">
                  {item.number}
                </p>

                <h3 className="mb-5 text-[25px] font-black tracking-[-0.04em] text-white">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-white/55">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-full bg-white/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-[#f8f6f0] px-6 py-24 text-[#101510] md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-14 max-w-[780px] text-center">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#b79822]">
              Processo técnico
            </p>

            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.04em] md:text-[62px]">
              Da conversão alimentar à previsibilidade produtiva.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {PROCESS.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
              >
                <span className="absolute right-6 top-4 font-serif text-[78px] leading-none text-black/[0.04]">
                  {item.step}
                </span>

                <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-full bg-[#07140d] text-white">
                  <Sparkles size={21} />
                </div>

                <h3 className="mb-4 text-[28px] font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-relaxed text-black/58">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="relative bg-black px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[32px] sm:col-span-2">
              <Image
                src="/images/poultry.webp"
                alt="Produção avícola"
                width={1000}
                height={520}
                className="h-[310px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-7 left-7">
                <Factory className="mb-4 text-[#d6b836]" size={34} />
                <h3 className="max-w-[620px] text-[34px] font-black leading-[1] tracking-[-0.04em] text-white">
                  Avicultura industrial com mais eficiência e controle.
                </h3>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
              <Recycle className="mb-7 text-[#d6b836]" size={34} />
              <h3 className="mb-3 text-[25px] font-black tracking-[-0.04em]">
                Conversão
              </h3>
              <p className="text-[15px] leading-relaxed text-white/58">
                Busca por melhor eficiência alimentar e aproveitamento produtivo.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
              <Feather className="mb-7 text-[#d6b836]" size={34} />
              <h3 className="mb-3 text-[25px] font-black tracking-[-0.04em]">
                Uniformidade
              </h3>
              <p className="text-[15px] leading-relaxed text-white/58">
                Apoio à estabilidade, previsibilidade e redução de variações operacionais.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#d6b836]">
              Impacto na cadeia avícola
            </p>

            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.04em] text-white md:text-[62px]">
              Eficiência, desempenho e sanidade em sistemas de alta escala.
            </h2>

            <p className="mt-6 text-[18px] leading-relaxed text-white/62">
              A linha Poultry Ant™ apoia operações que buscam melhor conversão
              alimentar, maior produtividade, estabilidade sanitária e
              previsibilidade em ambientes produtivos intensivos.
            </p>

            <div className="mt-8 border-l-4 border-[#d6b836] bg-gradient-to-r from-[#d6b836]/20 to-transparent px-6 py-5 text-[19px] font-black text-white md:text-[22px]">
              Performance sustentável para a avicultura do futuro.
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#07140d] px-6 py-24 text-center md:px-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#d6b836]/12 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[900px]">
          <Feather className="mx-auto mb-7 text-[#d6b836]" size={48} />

          <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.04em] text-white md:text-[68px]">
            Poultry Ant™ para uma avicultura mais eficiente, previsível e
            sustentável.
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[18px] leading-relaxed text-white/62">
            Fale com um especialista Anthars para entender a aplicação ideal em
            frango de corte, matrizes e sistemas integrados de produção.
          </p>

          <Link
            href="/contato"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[13px] font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:scale-[1.03] hover:bg-neutral-200"
          >
            Entrar em contato
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}