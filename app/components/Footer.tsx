"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-8 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14">

        {/* ================= COLUNA 1 — LOGO SOZINHA ================= */}
        <div className="flex justify-start items-start">
          <Image
            src="/images/logo-aetheris.png"
            alt="Logo Aetheris"
            width={250}
            height={250}
            className="opacity-100 select-none"
          />
        </div>

        {/* ================= COLUNA 2 — SOBRE NÓS ================= */}
        <div className="col-span-1">
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">
            Sobre a Aetheris
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Pioneiros em biologia sintética e engenharia de biomas. Redefinimos o teto produtivo através da otimização molecular e sustentabilidade ativa.
          </p>

          <p className="text-gray-400 text-sm mt-4">
            <strong>ID_CORP:</strong> 99.XXX.001/0001-TX
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            Setor Industrial Neo-Alpha, Bloco 7G<br />
            Hyper-Zone, Distrito Federal — BR<br />
            CEP 00000-000
          </p>
        </div>

        {/* ================= LINKS RÁPIDOS ================= */}
        <div>
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">Links de Acesso</h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="/produtos" className="hover:text-white transition">Matriz de Produtos</a></li>
            <li><a href="/sobre" className="hover:text-white transition">Nossa Gênese</a></li>
            <li><a href="/contato" className="hover:text-white transition">Terminal de Uplink</a></li>
            <li><a href="/privacidade" className="hover:text-white transition">Protocolo de Privacidade</a></li>
            <li><a href="/termos" className="hover:text-white transition">Diretivas de Uso</a></li>
            <li><a href="/fale-conosco" className="hover:text-white transition">Suporte Técnico</a></li>
          </ul>
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div>
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">Frequências Sociais</h3>

          <div className="flex gap-5 text-4xl">
            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-[#E1306C] hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-[#1877F2] hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-[#0A66C2] hover:scale-110 transition" />
            </a>
            <a href="https://wa.me/5531995235778" target="_blank">
              <FaWhatsapp className="text-[#25D366] hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">
            Sincronizar Atualizações
          </h3>

          <p className="text-gray-300 mb-4">
            Registre-se no banco de dados para receber relatórios técnicos e atualizações do sistema.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="E-mail do Agente"
              className="px-4 py-3 w-full rounded-md bg-[#111] border border-gray-700 text-gray-200 focus:outline-none focus:border-[#003B5C]"
            />
            <button
              className="bg-[#003B5C] px-6 py-3 rounded-md font-semibold hover:bg-[#002840] transition"
            >
              Conectar
            </button>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-gray-400 text-sm mt-16 border-t border-gray-800 pt-6">
        © 2026 Aetheris Genoma. Todos os direitos reservados. Protocolos Protegidos por Patente.
      </div>
    </footer>
  );
}