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
            alt="Logo Pride Biosolutions"
            width={200}
            height={80}
            className="opacity-100 select-none object-contain"
          />
        </div>

        {/* ================= COLUNA 2 — SOBRE NÓS ================= */}
        <div className="col-span-1">
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Sobre a Pride
          </h3>

          <p className="text-slate-500 leading-relaxed text-[15px]">
            Pioneiros em biologia natural e engenharia de biomas. Redefinimos o teto produtivo através da otimização molecular e sustentabilidade ativa.
          </p>

          <p className="text-slate-400 text-xs mt-5 uppercase tracking-wider font-semibold">
            ID_CORP: 99.XXX.001/0001-TX
          </p>

          <p className="text-slate-500 text-sm leading-relaxed mt-2">
            Setor Industrial Neo-Alpha, Bloco 7G<br />
            Hyper-Zone, Distrito Federal — BR<br />
            CEP 00000-000
          </p>
        </div>

        {/* ================= LINKS RÁPIDOS ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Links de Acesso
          </h3>

          <ul className="space-y-3 text-[15px] text-slate-500 font-medium">
            <li><a href="/produtos" className="hover:text-emerald-600 transition-colors">Linha de Produtos</a></li>
            <li><a href="/sobre" className="hover:text-emerald-600 transition-colors">Nossa Gênese</a></li>
            <li><a href="/contato" className="hover:text-emerald-600 transition-colors">Terminal de Uplink</a></li>
            <li><a href="/privacidade" className="hover:text-emerald-600 transition-colors">Protocolo de Privacidade</a></li>
            <li><a href="/termos" className="hover:text-emerald-600 transition-colors">Diretivas de Uso</a></li>
            <li><a href="/fale-conosco" className="hover:text-emerald-600 transition-colors">Suporte Técnico</a></li>
          </ul>
        </div>

        {/* ================= REDES SOCIAIS ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Frequências Sociais
          </h3>

          <div className="flex gap-3 text-lg">
            <a href="https://instagram.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#E1306C] hover:text-white transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/5531995235778" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-[#25D366] hover:text-white transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-slate-900 text-lg font-semibold mb-5 tracking-tight">
            Sincronizar Atualizações
          </h3>

          <p className="text-slate-500 text-[14px] mb-5 leading-relaxed">
            Registre-se no banco de dados para receber relatórios técnicos e atualizações do sistema.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="E-mail do Agente"
              className="px-4 py-3.5 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
            />
            <button
              className="bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
            >
              Conectar
            </button>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm mt-20 border-t border-slate-100 pt-8">
        <p>© 2026 Pride Biosolutions. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Protocolos Protegidos por Patente.</p>
      </div>
    </footer>
  );
}