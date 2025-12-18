"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BiaChatAssistant() {
  if (typeof window === "undefined") return null;

  const [stage, setStage] = useState<"intro" | "compact" | "chat">("intro");
  const [animating, setAnimating] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bia", text: "Olá! 👋 Eu sou a BIA-X, sua assistente inteligente da BIO-X." },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (stage === "intro") {
      const timer = setTimeout(() => setStage("compact"), 4500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const reply =
        "Sou a BIA-X 🤖 — posso te ajudar com produtos, suporte técnico ou contato com um especialista!";
      setMessages((prev) => [...prev, { from: "bia", text: reply }]);
    }, 800);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 🌟 ANIMAÇÃO INICIAL */}
      {stage === "intro" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative flex items-center justify-center w-20 h-20 rounded-full shadow-2xl bg-gradient-to-r from-[#00C7C1] to-[#003B5C]"
        >
          {/* Texto animado BIA-X IA */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute whitespace-nowrap font-bold text-white text-xl tracking-wide"
          >
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              B
            </motion.span>
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              IA-X&nbsp;
            </motion.span>
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              IA
            </motion.span>
          </motion.div>
        </motion.div>
      )}

      {/* 🔵 BOTÃO COMPACTO */}
      <AnimatePresence mode="wait">
        {stage === "compact" && !animating && (
          <motion.button
            key="bia-button"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              setAnimating(true);
              setStage("chat");
              setTimeout(() => setAnimating(false), 400);
            }}
            className="flex items-center justify-center w-16 h-16 rounded-full 
                       bg-gradient-to-r from-[#00C7C1] to-[#003B5C] shadow-xl hover:scale-110 transition"
          >
            <span className="text-white text-2xl font-bold select-none">B</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 💬 JANELA DO CHAT */}
      <AnimatePresence mode="wait">
        {stage === "chat" && !animating && (
          <motion.div
            key="bia-chat"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4 }}
            className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-[#DCE4E3] flex flex-col overflow-hidden"
          >
            {/* 🟩 CABEÇALHO */}
            <div className="bg-gradient-to-r from-[#00C7C1] to-[#003B5C] text-white p-3 flex justify-between items-center">
              <p className="font-semibold text-sm leading-tight">BIA-X IA • BIO-X</p>
              <button
                onClick={() => {
                  setAnimating(true);
                  setStage("compact");
                  setTimeout(() => setAnimating(false), 400);
                }}
                className="text-white/80 hover:text-white"
              >
                ✖
              </button>
            </div>

            {/* 💭 MENSAGENS */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAF9]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-2xl text-sm shadow-md max-w-[75%] ${
                      msg.from === "bia"
                        ? "bg-[#E7F5F3] text-[#0D746D]"
                        : "bg-[#DCF8C6] text-[#003B5C]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* ✏️ CAMPO DE ENTRADA */}
            <div className="p-3 border-t border-[#E2EAE9] flex items-center gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#0D746D] outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-[#0D746D] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#0A5A52] transition"
              >
                Enviar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
