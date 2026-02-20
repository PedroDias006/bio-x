"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2, Lock, Mail, UserPlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) setError("");
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("userData", JSON.stringify(data.user));
        window.dispatchEvent(new Event("userLogin"));
        onClose();
      } else {
        setError(data.error || "Credenciais inválidas.");
      }
    } catch (err) {
      console.error(err);
      setError("Falha na conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!open && !showRegister) return null;

  return (
    <>
      <AnimatePresence>
        {open && !showRegister && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // MUDANÇA: Removi o 'backdrop-blur' e aumentei a opacidade do preto
            // Isso esconde o vídeo atrás e libera o processador
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90"
          >
            <div className="absolute inset-0" onClick={onClose} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              // MANTIVE O BLUR AQUI (No card é leve)
              className="relative w-full max-w-md bg-[#0B0C10]/90 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Glow Otimizado (Estático) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-b-full" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif text-white mb-2 tracking-tight">
                    Bem-vindo à <span className="text-cyan-400">Aetheris</span>
                  </h2>
                  <p className="text-gray-400 text-sm font-light">
                    Acesse seu terminal de controle biotecnológico.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-mail</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                        placeholder="agente@aetheris.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Senha</label>
                        <a href="#" className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors">Esqueceu?</a>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-2 overflow-hidden"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        Autenticar Acesso <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0B0C10] px-2 text-gray-500">Ou continue com</span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowRegister(true)}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                        <UserPlus size={16} className="text-cyan-500" />
                    </span>
                    <span className="text-sm">Não tem credenciais? <span className="text-cyan-400 font-bold group-hover:underline underline-offset-4">Criar agora</span></span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showRegister && (
        <RegisterModal
          open={showRegister}
          onClose={() => setShowRegister(false)}
        />
      )}
    </>
  );
}