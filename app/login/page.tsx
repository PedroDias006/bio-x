"use client";
import { ScanFace, ShieldCheck } from "lucide-react"; // Ícone opcional para dar o tom tech
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AetherisLogin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("/avatars/biox1.png");

  const handleLogin = () => {
    if (!name.trim()) return alert("Erro: Identificação obrigatória.");
    localStorage.setItem("userData", JSON.stringify({ name, avatar }));
    router.push("/forum"); // Redireciona para o Uplink
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-slate-200 font-mono selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Efeito de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Ícone Animado (Simulando Scanner) */}
      <div className="mb-6 relative z-10">
        <div className="w-16 h-16 rounded border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center animate-pulse">
           <ScanFace className="text-cyan-500" size={32} />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2 text-white tracking-widest uppercase relative z-10">
        Aetheris<span className="text-cyan-500">_Uplink</span>
      </h1>
      
      <p className="text-[10px] text-slate-500 mb-8 uppercase tracking-[0.3em] relative z-10">
         Acesso Restrito // Nível 5
      </p>

      <div className="w-full max-w-xs relative z-10 space-y-4">
        <input
          type="text"
          placeholder="INSIRA ID DO AGENTE..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#0B1121] border border-white/10 rounded px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all text-center tracking-wider text-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
        />
        
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-[#020617] font-bold px-5 py-3 rounded transition-all duration-300 uppercase tracking-widest shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] flex items-center justify-center gap-2"
        >
          <ShieldCheck size={18} /> Estabelecer Link
        </button>
      </div>

      <p className="mt-8 text-[10px] text-slate-700 relative z-10">
         Protocolo de Segurança v9.0.2 • Criptografia Ativa
      </p>
    </div>
  );
}