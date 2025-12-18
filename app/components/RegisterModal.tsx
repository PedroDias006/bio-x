"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe, Loader2, Lock, Mail, Phone, User, X } from "lucide-react";
import { useState } from "react";
import allCountries from "world-countries";

const COUNTRY_CODES = allCountries
  .filter((c) => c.idd?.root && c.idd?.suffixes?.length)
  .map((c) => {
    const code = `${c.idd.root}${c.idd.suffixes[0]}`;
    const flag = c.flag || "🌍";
    const name = c.translations?.por?.common || c.name.common;
    return { code, label: `${flag} ${code}` };
  })
  .sort((a, b) => a.code.localeCompare(b.code));

const AVATARS = [
  "/avatars/biox1.png",
  "/avatars/biox2.png",
  "/avatars/biox3.png",
  "/avatars/biox4.png",
  "/avatars/biox5.png",
];

export default function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [countryCode, setCountryCode] = useState("+55");
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !phone || !name) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }
    if (!acceptTerms) {
      setError("Você deve aceitar os termos para continuar.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          phone,
          countryCode,
          name,
          avatar,
          acceptedTerms: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        localStorage.setItem("userData", JSON.stringify({ name, email, avatar }));
        window.dispatchEvent(new Event("userLogin"));
        onClose();
      } else {
        setError("Erro ao cadastrar. Tente outro e-mail.");
      }
    } catch (err) {
      console.error(err);
      setError("Falha na conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // MUDANÇA: Fundo sólido (preto 90%), sem blur
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 overflow-y-auto"
        >
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // MANTIDO BLUR SÓ NO CARD
            className="relative w-full max-w-lg bg-[#0B0C10]/95 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-b-full" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <X size={20} />
            </button>

            <div className="p-8 pt-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-white mb-2 tracking-tight">
                  Criar Conta <span className="text-cyan-400">Bio-X</span>
                </h2>
                <p className="text-gray-400 text-sm font-light">
                  Junte-se à revolução biotecnológica.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="flex flex-col items-center mb-6">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Escolha seu Avatar</span>
                  <div className="flex gap-3 justify-center flex-wrap">
                    {AVATARS.map((a) => (
                      <motion.div
                        key={a}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAvatar(a)}
                        className={`relative w-12 h-12 rounded-full cursor-pointer transition-all border-2 ${
                          avatar === a
                            ? "border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] scale-110"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={a} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                        {avatar === a && (
                          <div className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-full p-0.5 border border-black">
                            <Check size={8} className="text-black stroke-[3]" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="md:col-span-2 relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <input
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                      />
                   </div>

                   <div className="md:col-span-2 relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                      />
                   </div>

                   <div className="md:col-span-2 flex gap-2">
                      <div className="relative w-1/3 group">
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Globe className="h-4 w-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                         </div>
                         <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-full h-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-2 text-white text-sm focus:outline-none focus:border-cyan-500/50 appearance-none cursor-pointer"
                         >
                            {COUNTRY_CODES.map((c) => (
                               <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                                  {c.label}
                               </option>
                            ))}
                         </select>
                      </div>
                      <div className="relative w-2/3 group">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                         </div>
                         <input
                           type="tel"
                           placeholder="Telefone"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                         />
                      </div>
                   </div>

                   <div className="md:col-span-2 relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                      />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center mt-0.5">
                         <input
                           type="checkbox"
                           checked={acceptTerms}
                           onChange={(e) => setAcceptTerms(e.target.checked)}
                           className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 transition-all checked:border-cyan-500 checked:bg-cyan-500"
                         />
                         <Check size={12} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                         Li e aceito os <a href="#" className="text-cyan-400 hover:underline">Termos de Uso</a> e <a href="#" className="text-cyan-400 hover:underline">Política de Privacidade</a> da Bio-X.
                      </span>
                   </label>

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
                </div>

                <button
                  type="submit"
                  disabled={loading || !acceptTerms}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    "Criar Conta"
                  )}
                </button>

                <div className="text-center">
                   <button
                     type="button"
                     onClick={onClose}
                     className="text-sm text-gray-500 hover:text-white transition-colors hover:underline"
                   >
                     Já tenho uma conta
                   </button>
                </div>

              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}