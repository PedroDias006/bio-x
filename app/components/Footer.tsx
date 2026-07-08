"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-900 py-16 px-6 md:px-8 mt-0 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">

        {/* ================= COLUNA 1 — LOGO SOZINHA ================= */}
        <div className="flex justify-start items-start">
          <Image
            src="/images/logo-pride-dark.png"
            alt="Logo Anthars Biotechnologies"
            width={200}
            height={80}
            className="opacity-100 select-none object-contain"
          />
        </div>

        {/* ================= COLUNA 2 — SOBRE NÓS ================= */}
        <div className="col-span-1">
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Sobre a Anthars
          </h3>

          <p className="text-slate-500 leading-relaxed text-[15px]">
            Plataforma corporativa de tecnologias orgânicas funcionais para agricultura, saneamento, compostagem e pecuária. Eficiência ambiental com visão global.
          </p>

          <p className="text-slate-400 text-xs mt-5 uppercase tracking-wider font-semibold">
            Atendimento técnico e comercial
          </p>

          <p className="text-slate-500 text-sm leading-relaxed mt-2">
            (34) 99939-4444<br />
            (31) 99761-1343<br />
            vendas@antharsbiotechnologies.com.br
          </p>
        </div>

        {/* ================= LINKS RÁPIDOS ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Links de Acesso
          </h3>

          <ul className="space-y-3 text-[15px] text-slate-500 font-medium">
            <li><a href="/agricultura" className="hover:text-emerald-600 transition-colors">Agro Ant™</a></li>
            <li><a href="/agua-meioambiente" className="hover:text-emerald-600 transition-colors">Separ Ant™</a></li>
            <li><a href="/compost" className="hover:text-emerald-600 transition-colors">Compost Ant™</a></li>
            <li><a href="/poultry-ant" className="hover:text-emerald-600 transition-colors">Poultry Ant™</a></li>
            <li><a href="/livestock-ant" className="hover:text-emerald-600 transition-colors">Livestock Ant™</a></li>
            <li><a href="/swine-ant" className="hover:text-emerald-600 transition-colors">Swine Ant™</a></li>
            <li><a href="/sobre" className="hover:text-emerald-600 transition-colors">Sobre a Anthars</a></li>
            <li><a href="/contato" className="hover:text-emerald-600 transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Redes Sociais
          </h3>

          <div className="flex gap-3 text-lg">
            <a href="https://instagram.com/antharsbiotechnologies" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#E1306C] hover:text-white transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com/company/antharsbiotechnologies" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/5531997611343" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#25D366] hover:text-white transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Receba Atualizações
          </h3>

          <p className="text-slate-500 text-[14px] mb-5 leading-relaxed">
            Cadastre-se para receber materiais técnicos, novidades de linha e conteúdos sobre manejo sustentável.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3.5 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
            />
            <button
              className="bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm mt-20 border-t border-slate-100 pt-8">
        <p>© 2026 Anthars Biotechnologies. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">@antharsbiotechnologies</p>
      </div>
    </footer>
  );
}
