"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useLanguage, type Language } from "@/app/i18n/LanguageContext";

const LANGUAGES: Language[] = ["es", "en", "pt"];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const id = useId();

  return (
    <div
      data-no-translate
      className={`
        inline-flex items-center gap-1 rounded-full border border-black/10
        bg-white/95 p-1 shadow-[0_8px_20px_rgba(0,0,0,0.06)]
        ${className}
      `}
      aria-label="Selecionar idioma"
    >
      {LANGUAGES.map((item) => {
        const isActive = language === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            aria-pressed={isActive}
            className={`
              relative h-8 min-w-9 rounded-full px-2.5 text-[12px] font-bold
              tracking-[0.08em] transition-colors duration-200
              ${isActive ? "text-white" : "text-neutral-500 hover:text-black"}
            `}
          >
            {isActive && (
              <motion.span
                layoutId={`language-switcher-active-${id}`}
                className="absolute inset-0 rounded-full bg-black"
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </button>
        );
      })}
    </div>
  );
}
