"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { name: "Pride Solus", href: "/agricultura" },
  { name: "VitalPride", href: "/saude-animal" },
  { name: "Pride Clean", href: "/agua-meioambiente" },
  { name: "Nossa Gênese", href: "/sobre" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1240px]">
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`
          relative overflow-hidden rounded-[36px]
          border border-black/[0.07]
          bg-white/95 backdrop-blur-xl
          ${
            scrolled
              ? "shadow-[0_20px_50px_rgba(0,0,0,0.10),0_6px_20px_rgba(0,0,0,0.05)]"
              : "shadow-[0_12px_34px_rgba(0,0,0,0.08),0_3px_10px_rgba(0,0,0,0.04)]"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_28%,rgba(255,255,255,0.96)_100%)]" />
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-black/12 to-transparent" />
        <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

        <div className="relative flex items-center justify-between px-6 md:px-8 lg:px-10 h-[78px]">
          <Link
            href="/"
            className="flex items-center shrink-0 select-none outline-none focus:outline-none"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <motion.div
              whileHover={{ y: -1.5, scale: 1.02 }}
              transition={{ duration: 0.22 }}
              className="relative h-[68px] w-[250px] md:h-[82px] md:w-[310px] lg:h-[96px] lg:w-[380px]"
            >
              <Image
                src="/images/logo-pride-dark.png"
                alt="Pride Biosolutions"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="
                    group relative flex items-center justify-center
                    rounded-full px-4 py-2.5
                    text-[14px] font-medium tracking-[-0.01em]
                    text-neutral-800
                    outline-none focus:outline-none
                    focus-visible:outline-none
                    focus-visible:ring-0
                    active:bg-transparent
                    transition-all duration-300
                    select-none
                  "
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <span
                    className="
                      pointer-events-none absolute inset-0 rounded-full
                      border border-transparent
                      bg-transparent
                      transition-all duration-300
                      group-hover:border-black/[0.08]
                      group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                    "
                  />

                  <span
                    className="
                      pointer-events-none absolute left-1/2 bottom-[7px] h-[1.5px] w-0
                      -translate-x-1/2 rounded-full bg-black
                      transition-all duration-300
                      group-hover:w-[52%]
                    "
                  />

                  <span className="relative z-10 text-neutral-800">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contato"
                className="
                  rounded-full px-3 py-2
                  text-[14px] font-medium tracking-[-0.01em]
                  text-neutral-700 hover:text-black
                  outline-none focus:outline-none
                  focus-visible:outline-none focus-visible:ring-0
                  active:bg-transparent
                  transition-colors duration-300
                  select-none
                "
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Contato
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contato"
                className="
                  group relative flex items-center gap-2.5
                  rounded-full px-6 py-3
                  bg-black text-white
                  text-[14px] font-semibold tracking-[-0.01em]
                  outline-none focus:outline-none
                  focus-visible:outline-none focus-visible:ring-0
                  active:opacity-100 active:bg-black
                  shadow-[0_14px_30px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.14)]
                  transition-all duration-300
                  hover:shadow-[0_18px_38px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]
                  select-none
                "
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.03)_100%)]" />
                <span className="relative z-10">Especialista</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            className="lg:hidden flex items-center justify-center rounded-full border border-black/8 bg-white p-2.5 text-neutral-900 shadow-sm outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-black/[0.06]"
            >
              <div className="px-4 pb-4 pt-3">
                <div className="rounded-[28px] bg-white/95 p-2">
                  {NAV.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          flex items-center justify-between
                          rounded-2xl px-4 py-3.5
                          text-[15px] font-medium text-neutral-900
                          transition-all duration-300
                          hover:bg-neutral-100
                          outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                        "
                        style={{ WebkitTapHighlightColor: "transparent" }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="mt-2 grid gap-2 border-t border-black/[0.06] pt-3">
                    <Link
                      href="/contato"
                      onClick={() => setOpen(false)}
                      className="
                        rounded-2xl px-4 py-3
                        text-[15px] font-medium text-neutral-800
                        transition-all duration-300
                        hover:bg-neutral-100
                        outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                      "
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      Contato
                    </Link>

                    <Link
                      href="/contato"
                      onClick={() => setOpen(false)}
                      className="
                        group flex items-center justify-center gap-2
                        rounded-2xl bg-black px-4 py-3.5
                        text-[15px] font-semibold text-white
                        shadow-[0_12px_24px_rgba(0,0,0,0.16)]
                        transition-all duration-300
                        hover:shadow-[0_16px_30px_rgba(0,0,0,0.22)]
                        outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                      "
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      Falar com Especialista
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}