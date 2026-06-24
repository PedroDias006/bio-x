"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type NavItem = {
  name: string;
  href: string;
};

const MAIN_NAV = [
  { name: "Agricultura™", href: "/agricultura" },
  { name: "Compostagem™", href: "/compost" },
];

const SANEAMENTO_NAV = [
  { name: "SANE ANT™", href: "/separante" },
  { name: "SEPAR ANT™", href: "/agua-meioambiente" },
];

const ANIMAL_NAV = [
  { name: "Gado™", href: "/livestock-ant" },
  { name: "Suínos™", href: "/swine-ant" },
  { name: "Frangos™", href: "/poultry-ant" },
];

const END_NAV = [{ name: "Sobre", href: "/sobre" }];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [saneamentoOpen, setSaneamentoOpen] = useState(false);
  const [animalOpen, setAnimalOpen] = useState(false);

  const [mobileSaneamentoOpen, setMobileSaneamentoOpen] = useState(false);
  const [mobileAnimalOpen, setMobileAnimalOpen] = useState(false);

  const saneamentoRef = useRef<HTMLDivElement | null>(null);
  const animalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        saneamentoRef.current &&
        !saneamentoRef.current.contains(event.target as Node)
      ) {
        setSaneamentoOpen(false);
      }

      if (
        animalRef.current &&
        !animalRef.current.contains(event.target as Node)
      ) {
        setAnimalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) {
      setMobileSaneamentoOpen(false);
      setMobileAnimalOpen(false);
    }
  }, [open]);

  const DesktopNavLink = ({ item }: { item: NavItem }) => (
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
          rounded-full px-3.5 py-2.5
          text-[15px] font-semibold xl:text-[16px]
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

        <span className="relative z-10 text-neutral-800">{item.name}</span>
      </Link>
    </motion.div>
  );

  const DesktopDropdown = ({
    label,
    items,
    isOpen,
    setIsOpen,
    closeOther,
    dropdownRef,
    ariaLabel,
  }: {
    label: string;
    items: NavItem[];
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    closeOther: () => void;
    dropdownRef: RefObject<HTMLDivElement | null>;
    ariaLabel: string;
  }) => (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => {
        setIsOpen(true);
        closeOther();
      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        type="button"
        whileHover={{
          y: -2,
          scale: 1.01,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => {
          setIsOpen((prev) => !prev);
          closeOther();
        }}
        className="
          group relative flex items-center justify-center gap-1.5
          rounded-full px-3.5 py-2.5
          text-[15px] font-semibold xl:text-[16px]
          text-neutral-800
          outline-none focus:outline-none
          focus-visible:outline-none
          focus-visible:ring-0
          active:bg-transparent
          transition-all duration-300
          select-none
        "
        style={{ WebkitTapHighlightColor: "transparent" }}
        aria-expanded={isOpen}
        aria-label={ariaLabel}
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

        <span className="relative z-10 text-neutral-800">{label}</span>

        <ChevronDown
          size={15}
          className={`
            relative z-10 block shrink-0 text-neutral-800 transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="
              absolute left-1/2 top-[calc(100%-2px)] z-[1000] w-[190px]
              -translate-x-1/2 pt-3
            "
          >
            <div
              className="
                rounded-[22px]
                border border-black/[0.07]
                bg-white p-2
                shadow-[0_20px_45px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)]
              "
            >
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    group/item flex items-center justify-between
                    rounded-2xl px-4 py-3
                    text-[15px] font-semibold text-neutral-800
                    transition-all duration-300
                    hover:bg-neutral-100
                    outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                  "
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <span>{item.name}</span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-70"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MobileDropdown = ({
    label,
    items,
    isOpen,
    setIsOpen,
    closeOther,
    delay,
  }: {
    label: string;
    items: NavItem[];
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    closeOther: () => void;
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          closeOther();
        }}
        className="
          flex w-full items-center justify-between
          rounded-2xl px-4 py-4
          text-left text-[17px] font-semibold text-neutral-900
          transition-all duration-300
          hover:bg-neutral-100
          outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
        "
        style={{ WebkitTapHighlightColor: "transparent" }}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          size={19}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="ml-3 mt-1 grid gap-1 border-l border-black/[0.08] pl-3">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setIsOpen(false);
                    }}
                    className="
                      flex items-center justify-between
                      rounded-2xl px-4 py-3
                      text-[16px] font-semibold text-neutral-800
                      transition-all duration-300
                      hover:bg-neutral-100
                      outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                    "
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {item.name}
                    <ArrowRight size={15} className="opacity-60" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <header className="fixed top-[max(16px,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-[999] w-[96%] max-w-[1360px]">
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`
          relative rounded-[36px]
          border border-black/[0.07]
          bg-white shadow-[0_12px_34px_rgba(0,0,0,0.08),0_3px_10px_rgba(0,0,0,0.04)]
          ${
            scrolled
              ? "shadow-[0_20px_50px_rgba(0,0,0,0.10),0_6px_20px_rgba(0,0,0,0.05)]"
              : ""
          }
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_28%,rgba(255,255,255,1)_100%)] rounded-[36px]" />
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-black/12 to-transparent" />
        <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />

        <div className="relative flex items-center justify-between px-4 md:px-8 lg:px-10 h-[78px] z-50 rounded-[36px]">
          <div className="relative h-full flex w-[190px] shrink-0 items-center sm:w-[230px] md:w-[255px] xl:w-[270px]">
            <Link
              href="/"
              className="relative -left-2 md:left-0 flex items-center select-none outline-none focus:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.22 }}
                className="relative h-[72px] w-[190px] sm:h-[80px] sm:w-[230px] md:h-[88px] md:w-[255px] xl:h-[92px] xl:w-[270px]"
              >
                <Image
                  src="/images/logo-pride-dark.png"
                  alt="Anthars Biotechnologies"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </motion.div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-1 ml-auto mr-3">
            <DesktopNavLink item={MAIN_NAV[0]} />

            <DesktopDropdown
              label="Saneamento™"
              items={SANEAMENTO_NAV}
              isOpen={saneamentoOpen}
              setIsOpen={setSaneamentoOpen}
              closeOther={() => setAnimalOpen(false)}
              dropdownRef={saneamentoRef}
              ariaLabel="Abrir Saneamento"
            />

            <DesktopNavLink item={MAIN_NAV[1]} />

            <DesktopDropdown
              label="Linha Animal"
              items={ANIMAL_NAV}
              isOpen={animalOpen}
              setIsOpen={setAnimalOpen}
              closeOther={() => setSaneamentoOpen(false)}
              dropdownRef={animalRef}
              ariaLabel="Abrir Linha Animal"
            />

            {END_NAV.map((item) => (
              <DesktopNavLink key={item.name} item={item} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher className="shrink-0" />

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
                  text-[15px] font-semibold
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
                <span className="relative z-10">Contato</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            className="relative z-50 xl:hidden flex items-center justify-center rounded-full border border-black/8 bg-white p-2.5 text-neutral-900 shadow-sm outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
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
              className="xl:hidden overflow-hidden border-t border-black/[0.06] bg-white relative z-40 rounded-b-[36px]"
            >
              <div className="px-4 pb-4 pt-3">
                <div className="rounded-[28px] bg-white p-2">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <Link
                      href={MAIN_NAV[0].href}
                      onClick={() => setOpen(false)}
                      className="
                        flex items-center justify-between
                        rounded-2xl px-4 py-4
                        text-[17px] font-semibold text-neutral-900
                        transition-all duration-300
                        hover:bg-neutral-100
                        outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                      "
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      {MAIN_NAV[0].name}
                    </Link>
                  </motion.div>

                  <MobileDropdown
                    label="Saneamento™"
                    items={SANEAMENTO_NAV}
                    isOpen={mobileSaneamentoOpen}
                    setIsOpen={setMobileSaneamentoOpen}
                    closeOther={() => setMobileAnimalOpen(false)}
                    delay={0.04}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                  >
                    <Link
                      href={MAIN_NAV[1].href}
                      onClick={() => setOpen(false)}
                      className="
                        flex items-center justify-between
                        rounded-2xl px-4 py-4
                        text-[17px] font-semibold text-neutral-900
                        transition-all duration-300
                        hover:bg-neutral-100
                        outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                      "
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      {MAIN_NAV[1].name}
                    </Link>
                  </motion.div>

                  <MobileDropdown
                    label="Linha Animal"
                    items={ANIMAL_NAV}
                    isOpen={mobileAnimalOpen}
                    setIsOpen={setMobileAnimalOpen}
                    closeOther={() => setMobileSaneamentoOpen(false)}
                    delay={0.12}
                  />

                  {END_NAV.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: (4 + index) * 0.04,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          flex items-center justify-between
                          rounded-2xl px-4 py-4
                          text-[17px] font-semibold text-neutral-900
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

                  <div className="mt-2 grid gap-3 border-t border-black/[0.06] pt-3">
                    <LanguageSwitcher className="mx-auto w-full justify-center py-1" />

                    <Link
                      href="/contato"
                      onClick={() => setOpen(false)}
                      className="
                        group flex items-center justify-center gap-2
                        rounded-2xl bg-black px-4 py-3.5
                        text-[17px] font-semibold text-white
                        shadow-[0_12px_24px_rgba(0,0,0,0.16)]
                        transition-all duration-300
                        hover:shadow-[0_16px_30px_rgba(0,0,0,0.22)]
                        outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0
                      "
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      Contato
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