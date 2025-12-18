"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BioXInteractiveSection() {
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
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
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
        ctx!.fillStyle = "#45f2ff";
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

  // ======= TOPICOS =======
  const topics = [
    {
      title: "Raiz no Agro",
      desc: "A BIO-X nasce do campo, construída por produtores que conhecem profundamente a realidade agrícola e os desafios do solo brasileiro.",
      img: "/images/cards/raiz.jpg",
      points: [
        "Fundação construída por produtores experientes",
        "Soluções criadas a partir da vivência no campo",
        "Compreensão real dos desafios do solo brasileiro",
        "Tecnologia aplicada de forma prática e eficiente",
        "Visão biológica integrada à rotina do produtor",
      ],
      indicators: [
        { label: "Conexão com o produtor", value: "100%", bar: "100%" },
        { label: "Relevância prática", value: "95%", bar: "95%" },
        { label: "Aplicabilidade imediata", value: "90%", bar: "90%" },
      ],
    },
    {
      title: "Base Científica",
      desc: "Desenvolvimento científico avançado com microbiologia, análises laboratoriais e validação rigorosa de cada cepa utilizada.",
      img: "/images/cards/ciencia.jpg",
      points: [
        "Pesquisa contínua em microbiologia aplicada",
        "Isolamento e cultivo de cepas de alta performance",
        "Validação em laboratório e ambientes controlados",
        "Protocolos científicos auditáveis",
        "Equipe técnica multidisciplinar",
        "Tecnologia baseada em evidências",
      ],
      indicators: [
        { label: "Rigor científico", value: "98%", bar: "98%" },
        { label: "Taxa de validação", value: "92%", bar: "92%" },
        { label: "Precisão das análises", value: "96%", bar: "96%" },
      ],
    },
    {
      title: "Sustentabilidade",
      desc: "Tecnologias que regeneram o solo, aumentam biodiversidade microbiana e reduzem dependência de insumos tradicionais.",
      img: "/images/cards/sustentabilidade.jpg",
      points: [
        "Regeneração ativa do solo",
        "Estímulo à biodiversidade microbiana",
        "Redução de insumos químicos",
        "Ciclagem natural de nutrientes",
        "Baixo impacto ambiental",
        "Promove agricultura regenerativa",
      ],
      indicators: [
        { label: "Regeneração do solo", value: "93%", bar: "93%" },
        { label: "Sustentabilidade do sistema", value: "90%", bar: "90%" },
        { label: "Redução de impacto", value: "85%", bar: "85%" },
      ],
    },
    {
      title: "Validação em Campo",
      desc: "Resultados reais comprovados em propriedades rurais, reforçando a eficiência microbiológica em diversos tipos de solo.",
      img: "/images/cards/campo.jpg",
      points: [
        "Testes realizados em múltiplas regiões",
        "Resultados acompanhados por técnicos",
        "Comparativos com áreas controle",
        "Aumento real de produtividade",
        "Alta estabilidade dos resultados",
        "Evidências coletadas em diferentes culturas",
      ],
      indicators: [
        { label: "Eficiência em campo", value: "94%", bar: "94%" },
        { label: "Consistência dos resultados", value: "91%", bar: "91%" },
        { label: "Aumento médio de produtividade", value: "+12%", bar: "82%" },
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
          src="/images/logo-biox.png"
          className="w-[260px] cursor-pointer select-none drop-shadow-[0_0_35px_rgba(69,242,255,0.5)]"
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
          className="mt-6 px-9 py-3 text-base font-semibold rounded-full 
                     bg-white/10 hover:bg-white/20 border border-white/30 
                     text-white transition backdrop-blur-sm"
          animate={{ opacity: hover || open ? 1 : 0 }}
        >
          {open ? "Recolher" : "Expandir"}
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
            />
            <TopicCard
              data={topics[1]}
              direction="right"
              setActiveTopic={setActiveTopic}
            />
          </div>

          <div className="absolute bottom-[18%] w-full flex justify-between px-[14%] z-10 pointer-events-auto">
            <TopicCard
              data={topics[2]}
              direction="left"
              setActiveTopic={setActiveTopic}
            />
            <TopicCard
              data={topics[3]}
              direction="right"
              setActiveTopic={setActiveTopic}
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
function TopicCard({ data, direction, setActiveTopic, index }: any) {
  return (
    <motion.div
      onClick={() => setActiveTopic(data)}
      className="
        w-[210px] py-4 px-6
        flex items-center justify-center
        text-[16px] font-semibold cursor-pointer select-none
        bg-white/25
        border border-[#45F2FF]/40
        text-[#003B5C]
        rounded-xl backdrop-blur-md
        shadow-[0_8px_22px_rgba(0,0,0,0.15)]
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
        delay: 0.06 * index, // stagger real, leve e suave
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 22px rgba(69,242,255,0.30)",
        borderColor: "#45F2FF",
        backgroundColor: "rgba(255,255,255,0.35)",
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
        className="fixed inset-0 bg-black/35 z-[80] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "linear" }}
        onClick={close}
      >
        <motion.div
          className="
            w-[440px] max-w-[90%] h-full bg-white 
            shadow-xl border-r border-gray-200 overflow-y-auto
            will-change-transform
          "
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -24, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }} // material ease-out
          onClick={(e) => e.stopPropagation()}
        >
          {/* FOTO */}
          <div className="w-full h-[240px] overflow-hidden rounded-b-2xl">
            <img src={data.img} className="w-full h-full object-cover" />
          </div>

          <div className="p-7">
            <h2 className="text-3xl font-bold text-[#0D746D] mb-3">
              {data.title}
            </h2>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
              {data.desc}
            </p>

            <ul className="space-y-2 mb-8">
              {data.points?.map((p: string, i: number) => (
                <li
                  key={i}
                  className="text-gray-700 text-[15px] flex items-start gap-2"
                >
                  <span className="text-[#0D746D] mt-[2px]">•</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="space-y-5 mb-10">
              {data.indicators?.map((ind: any, i: number) => (
                <div key={i}>
                  <div className="flex justify-between text-gray-700 text-sm mb-1 font-medium">
                    <span>{ind.label}</span>
                    <span className="text-[#0D746D] font-semibold">
                      {ind.value}
                    </span>
                  </div>

                  <div className="w-full h-[7px] bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00C6FF] to-[#00F7A4]"
                      initial={{ width: 0 }}
                      animate={{ width: ind.bar }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="px-6 py-2 rounded-lg bg-[#0D746D] hover:bg-[#095A52] text-white font-medium transition shadow-md"
              onClick={close}
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
