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
            src="/images/logowhite.png"
            alt="Logo X"
            width={250}
            height={250}
            className="opacity-100 select-none"
          />
        </div>

        {/* ================= COLUNA 2 — SOBRE NÓS ================= */}
        <div className="col-span-1">
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">
            Sobre nós
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Somos especialistas em soluções microbiológicas avançadas
            para agricultura, meio ambiente e sustentabilidade.
          </p>

          <p className="text-gray-400 text-sm mt-4">
            <strong>CNPJ:</strong> 38.130.594/0001-28
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            Rua Eli Moreira Duarte, 301<br />
            Granjas Alvorada — Juatuba/MG<br />
            CEP 35675-000
          </p>
        </div>

        {/* ================= LINKS RÁPIDOS ================= */}
        <div>
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">Links rápidos</h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="/produtos" className="hover:text-white transition">Produtos</a></li>
            <li><a href="/sobre" className="hover:text-white transition">Sobre nós</a></li>
            <li><a href="/contato" className="hover:text-white transition">Contato</a></li>
            <li><a href="/privacidade" className="hover:text-white transition">Política de privacidade</a></li>
            <li><a href="/termos" className="hover:text-white transition">Termos de uso</a></li>
            <li><a href="/fale-conosco" className="hover:text-white transition">Fale conosco</a></li>
          </ul>
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div>
          <h3 className="text-[#003B5C] text-2xl font-semibold mb-5">Redes sociais</h3>

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
            Receba novidades por e-mail
          </h3>

          <p className="text-gray-300 mb-4">
            Cadastre seu e-mail para receber promoções e conteúdos exclusivos.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3 w-full rounded-md bg-[#111] border border-gray-700 text-gray-200 focus:outline-none focus:border-[#003B5C]"
            />
            <button
              className="bg-[#003B5C] px-6 py-3 rounded-md font-semibold hover:bg-[#002840] transition"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-gray-400 text-sm mt-16 border-t border-gray-800 pt-6">
        © 2025 MicroOrganismos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
