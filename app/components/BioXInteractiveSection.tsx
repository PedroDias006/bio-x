"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AetherisInteractiveSection() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [activeTopic, setActiveTopic] = useState<any>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ======= SONS =======
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const expandSound = useRef<HTMLAudioElement | null>(null);
  const collapseSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    hoverSound.current = new Audio("/sounds/hover.mp3");
    clickSound.current = new Audio("/sounds/click.mp3");
    expandSound.current = new Audio("/sounds/expand.mp3");
    collapseSound.current = new Audio("/sounds/collapse.mp3");
  }, []);

  const play = (audio: HTMLAudioElement | null) => {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // ======= PARTICULAS =======
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    let particles: any[] = [];
    const maxParticles = open ? 120 : 40;

    class Particle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      alpha: number;

      constructor() {
        this.x = canvas!.width / 2;
        this.y = canvas!.height / 2;
        this.speedX = (Math.random() - 0.5) * (open ? 3 : 1);
        this.speedY = (Math.random() - 0.5) * (open ? 3 : 1);
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.9 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.006;
      }

      draw() {
        ctx!.globalAlpha = this.alpha;
        ctx!.fillStyle = "#06b6d4"; // Aetheris Cyan
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    let frameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < maxParticles) particles.push(new Particle());

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      particles = particles.filter((p) => p.alpha > 0);

      frameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  // ======= TOPICOS (AETHERIS DATA) =======
  const topics = [
    {
      title: "Origem Genética",
      desc: "A Aetheris nasce da necessidade de reescrever o código de ecossistemas degradados, combinando inteligência de dados com microbiologia de campo.",
      img: "/images/cards/raiz.jpg",
      points: [
        "Arquitetura construída por bio-engenheiros",
        "Protocolos criados a partir da análise de dados reais",
        "Compreensão sintética dos desafios do bioma",
        "Tecnologia aplicada via algoritmos de precisão",
        "Visão integrada à rotina operacional do produtor",
      ],
      indicators: [
        { label: "Sincronia Operacional", value: "100%", bar: "100%" },
        { label: "Relevância Prática", value: "95%", bar: "95%" },
        { label: "Velocidade de Deploy", value: "90%", bar: "90%" },
      ],
    },
    {
      title: "Core Científico",
      desc: "Desenvolvimento baseado em engenharia molecular avançada e validação rigorosa de cada nanovetor biológico utilizado.",
      img: "/images/cards/ciencia.jpg",
      points: [
        "Pesquisa contínua em biologia sintética",
        "Isolamento de cepas de performance extrema",
        "Validação em laboratórios de biossegurança",
        "Protocolos auditáveis por IA",
        "Esquadrão técnico multidisciplinar",
        "Tecnologia baseada em Data Science",
      ],
      indicators: [
        { label: "Rigor Analítico", value: "98%", bar: "98%" },
        { label: "Taxa de Sobrevivência (Cepa)", value: "92%", bar: "92%" },
        { label: "Precisão Genômica", value: "96%", bar: "96%" },
      ],
    },
    {
      title: "Regeneração Ativa",
      desc: "Tecnologias que não apenas preservam, mas otimizam e expandem o limite de suporte dos sistemas biológicos hospedeiros.",
      img: "/images/cards/sustentabilidade.jpg",
      points: [
        "Reconfiguração ativa do substrato",
        "Estímulo à biodiversidade molecular",
        "Substituição de dependências químicas",
        "Ciclagem autônoma de energia",
        "Impacto ambiental negativo (Carbon Negative)",
        "Promove evolução de biomas estáticos",
      ],
      indicators: [
        { label: "Recuperação de Área", value: "93%", bar: "93%" },
        { label: "Estabilidade do Sistema", value: "90%", bar: "90%" },
        { label: "Redução de Entropia", value: "85%", bar: "85%" },
      ],
    },
    {
      title: "Telemetria Global",
      desc: "Milhares de data points coletados em operações reais, reforçando a eficiência do protocolo em qualquer variável ambiental.",
      img: "/images/cards/campo.jpg",
      points: [
        "Testes executados em múltiplas matrizes de solo",
        "Resultados rastreados via satélite",
        "Comparativos rigorosos com zonas Legacy (Controle)",
        "Aumento escalável de output produtivo",
        "Alta estabilidade contra stress térmico",
        "Evidências computadas em 15+ culturas",
      ],
      indicators: [
        { label: "Eficiência de Interface", value: "94%", bar: "94%" },
        { label: "Consistência de Dados", value: "91%", bar: "91%" },
        { label: "Aumento de Yield Médio", value: "+12%", bar: "82%" },
      ],
    },
  ];

  return (
   <section
  className="
    relative w-full min-h-[760px]
    flex items-center justify-center
    overflow-visible py-20
    bg-cover bg-center bg-no-repeat
  "
  style={{

  }}
>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* LOGO */}
      <div className="relative z-20 flex flex-col items-center mt-[-35px]">
        <motion.img
          src="/images/logo-aetheris.png" // MUDANÇA: Atualize a imagem da logo
          className="w-[260px] cursor-pointer select-none drop-shadow-[0_0_35px_rgba(6,182,212,0.5)]"
          onMouseEnter={() => {
            setHover(true);
            play(hoverSound.current);
          }}
          onMouseLeave={() => setHover(false)}
          onClick={() => {
            play(clickSound.current);
            open ? play(collapseSound.current) : play(expandSound.current);
            setOpen(!open);
          }}
          animate={{ scale: hover ? 1.1 : open ? 1.05 : 1 }}
          transition={{ duration: 0.25 }}
        />

        <motion.button
          onClick={() => {
            play(clickSound.current);
            open ? play(collapseSound.current) : play(expandSound.current);
            setOpen(!open);
          }}
          className="mt-6 px-9 py-3 text-base font-bold tracking-widest uppercase rounded-full 
                     bg-white/10 hover:bg-white/20 border border-white/30 
                     text-white transition backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          animate={{ opacity: hover || open ? 1 : 0 }}
        >
          {open ? "Fechar Interface" : "Acessar Núcleo"}
        </motion.button>
      </div>

      {/* TOPICOS */}
      {open && (
        <>
          <div className="absolute top-[18%] w-full flex justify-between px-[14%] z-10 pointer-events-auto">
            <TopicCard
              data={topics[0]}
              direction="left"
              setActiveTopic={setActiveTopic}
              index={1}
            />
            <TopicCard
              data={topics[1]}
              direction="right"
              setActiveTopic={setActiveTopic}
              index={2}
            />
          </div>

          <div className="absolute bottom-[18%] w-full flex justify-between px-[14%] z-10 pointer-events-auto">
            <TopicCard
              data={topics[2]}
              direction="left"
              setActiveTopic={setActiveTopic}
              index={3}
            />
            <TopicCard
              data={topics[3]}
              direction="right"
              setActiveTopic={setActiveTopic}
              index={4}
            />
          </div>
        </>
      )}

      {/* SIDE PANEL */}
      <AnimatePresence>
        {activeTopic && (
          <ScientificSidePanel
            data={activeTopic}
            close={() => setActiveTopic(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ======= CARD ======= */
function TopicCard({ data, setActiveTopic, index }: any) {
  return (
    <motion.div
      onClick={() => setActiveTopic(data)}
      className="
        w-[210px] py-4 px-6
        flex items-center justify-center
        text-[14px] font-bold tracking-wider uppercase cursor-pointer select-none
        bg-white/10
        border border-[#06b6d4]/40
        text-white
        rounded-sm backdrop-blur-lg
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]
      "
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: 0.06 * index, 
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 25px rgba(6,182,212,0.50)",
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6,182,212,0.15)",
      }}
      whileTap={{
        scale: 0.96,
      }}
    >
      {data.title}
    </motion.div>
  );
}

/* ======= PAINEL LATERAL SUPER LEVE ======= */
function ScientificSidePanel({ data, close }: any) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "linear" }}
        onClick={close}
      >
        <motion.div
          className="
            w-[440px] max-w-[90%] h-full bg-[#020617] 
            shadow-[20px_0_50px_rgba(0,0,0,0.8)] border-r border-white/10 overflow-y-auto
            will-change-transform
          "
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -24, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* FOTO */}
          <div className="w-full h-[240px] overflow-hidden rounded-b-sm border-b border-white/5 relative">
            <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10" />
            <img src={data.img} className="w-full h-full object-cover grayscale contrast-125" />
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
              {data.title}
            </h2>

            <p className="text-slate-400 text-sm font-mono leading-relaxed mb-8">
              {data.desc}
            </p>

            <ul className="space-y-3 mb-10">
              {data.points?.map((p: string, i: number) => (
                <li
                  key={i}
                  className="text-slate-300 text-xs font-mono uppercase tracking-wide flex items-start gap-3"
                >
                  <span className="text-cyan-500 mt-[2px] shadow-[0_0_10px_cyan]">■</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="space-y-6 mb-12">
              {data.indicators?.map((ind: any, i: number) => (
                <div key={i}>
                  <div className="flex justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span>{ind.label}</span>
                    <span className="text-cyan-400 font-black">
                      {ind.value}
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-900 rounded-sm overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_10px_cyan]"
                      initial={{ width: 0 }}
                      animate={{ width: ind.bar }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full py-4 rounded-sm bg-white/5 hover:bg-cyan-600 border border-white/10 hover:border-cyan-500 text-white font-bold uppercase tracking-widest text-xs transition-all shadow-lg"
              onClick={close}
            >
              Encerrar Processo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}