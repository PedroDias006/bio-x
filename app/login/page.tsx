"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("/avatars/biox1.png");

  const handleLogin = () => {
    if (!name.trim()) return alert("Digite seu nome para entrar");
    localStorage.setItem("userData", JSON.stringify({ name, avatar }));
    router.push("/forum"); // redireciona para o fórum
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F7F6] text-[#0D746D] font-[Inter]">
      <h1 className="text-2xl font-bold mb-4">Acesse o Fórum BIO-X</h1>
      <input
        type="text"
        placeholder="Seu nome..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-md px-3 py-2 mb-4 text-black"
      />
      <button
        onClick={handleLogin}
        className="bg-[#0D746D] text-white px-5 py-2 rounded-lg hover:bg-[#0A5A52] transition"
      >
        Entrar
      </button>
    </div>
  );
}
