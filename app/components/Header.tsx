"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AVATARS = [
  "/avatars/biox1.png",
  "/avatars/biox2.png",
  "/avatars/biox3.png",
  "/avatars/biox4.png",
  "/avatars/biox5.png",
];

export default function Header() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Campos do modal
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);

  const handleLogin = async () => {
    if (!email || !phone || !name) return alert("Preencha todos os campos!");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, name, avatar }),
      });
      const data = await res.json();

      if (data.success) {
        setUser(data.user);
        setShowLogin(false);
      } else {
        alert("Erro ao autenticar.");
      }
    } catch (err) {
      console.error(err);
      alert("Falha de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔝 HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-[#E2EAE9]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="/logo-biox.png"
              alt="BIO-X"
              className="w-9 h-9 rounded-md"
            />
            <span className="font-bold text-[#0D746D] text-lg tracking-tight">
              BIO-X Microorganismos
            </span>
          </motion.div>

          {/* Navegação */}
          <nav className="flex gap-5 items-center text-sm font-medium text-[#0D746D]">
            <button onClick={() => router.push("/")} className="hover:text-[#0A5A52] transition">
              Início
            </button>
            <button onClick={() => router.push("/produtos")} className="hover:text-[#0A5A52] transition">
              Produtos
            </button>
            <button onClick={() => router.push("/sobre")} className="hover:text-[#0A5A52] transition">
              Sobre
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/forum")}
              className="ml-4 bg-[#0D746D] text-white px-4 py-2 rounded-lg hover:bg-[#0A5A52] shadow-sm transition"
            >
              Fórum
            </motion.button>

            {/* Login ou Perfil */}
            {user ? (
              <div className="flex items-center gap-2 bg-[#E7F5F3] px-3 py-1 rounded-full border border-[#CDE6E3]">
                <img src={user.avatar} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-semibold text-[#0D746D]">
                  {user.name}
                </span>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-3 bg-[#00C7C1] hover:bg-[#00b6ad] text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* 🪟 MODAL DE LOGIN */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-[400px] max-w-[90%] p-6 text-[#0D746D]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                Entrar no BIO-X
              </h2>

              <input
                type="email"
                placeholder="E-mail"
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nome de exibição"
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <p className="text-sm font-semibold mb-2">Escolha seu avatar:</p>
              <div className="flex gap-3 flex-wrap justify-center mb-4">
                {AVATARS.map((a) => (
                  <img
                    key={a}
                    src={a}
                    alt="avatar"
                    onClick={() => setAvatar(a)}
                    className={`w-12 h-12 rounded-full cursor-pointer border-2 transition ${
                      avatar === a
                        ? "border-[#0D746D] scale-110"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-[#0D746D] text-white py-2 rounded-lg hover:bg-[#0A5A52] transition font-semibold"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>

              <button
                onClick={() => setShowLogin(false)}
                className="mt-3 w-full text-sm text-[#0D746D]/80 hover:underline"
              >
                Cancelar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
