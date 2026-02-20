"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    setor: "",
    mensagem: "",
    aceitaTermos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio aqui
    console.log("Enviando...", formData);
  };

  return (
    // bg-slate-50 garante o entorno claro e pt-48 (padding-top) garante a separação da NavBar
    <div className="min-h-screen bg-slate-50 pt-40 pb-24 font-sans text-slate-900">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO DA PÁGINA */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            Terminal de <span className="text-cyan-600">Uplink</span>
          </h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            Canal de Comunicação Direta com a Engenharia Aetheris
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= COLUNA ESQUERDA (INFORMAÇÕES) ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CARD 1: BASE OPERACIONAL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-600">
                <MapPin size={24} />
                <h3 className="font-bold text-lg text-slate-900">Base Operacional</h3>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Coordenadas Físicas</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-1">Setor Industrial Neo-Alpha, Bloco 7G</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">Hyper-Zone, Distrito Federal — BR</p>
              <p className="text-[10px] font-mono text-slate-400">ID_CORP: 99.XXX.001/0001-TX</p>
            </motion.div>

            {/* CARD 2: FREQUÊNCIAS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-600">
                <Phone size={24} />
                <h3 className="font-bold text-lg text-slate-900">Frequências</h3>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Canais Abertos</p>
              
              <div className="space-y-3">
                <a href="tel:+5531995230000" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                  +55 31 99523-XXXX
                </a>
                <a href="mailto:protocol@aetheris.sys" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                  <Mail size={16} /> protocol@aetheris.sys
                </a>
              </div>
            </motion.div>

            {/* CARD 3: SEGURANÇA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                <ShieldCheck size={24} />
                <h3 className="font-bold text-lg">Protocolos</h3>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Segurança da Informação</p>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Criptografia Ponta-a-Ponta</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Monitoramento 24/7</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Processamento Privado</li>
              </ul>
            </motion.div>

          </div>

          {/* ================= COLUNA DIREITA (FORMULÁRIO BRANCO) ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-200 relative overflow-hidden"
          >
            {/* Detalhe visual no topo do formulário */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />

            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Iniciar Transmissão</h2>
              <p className="text-sm text-slate-500">Preencha os vetores de dados abaixo para que nossos engenheiros possam analisar sua demanda.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Identificação *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nome do Agente"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Organização</label>
                  <input 
                    type="text" 
                    placeholder="Corporação (Opcional)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nó de Rede *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="E-mail Corporativo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Link de Voz</label>
                  <input 
                    type="tel" 
                    placeholder="Telefone / WhatsApp"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Divisão de Interesse</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Selecione um Setor...</option>
                  <option value="agro">Genoma Agro</option>
                  <option value="animal">Bio-Zootecnia</option>
                  <option value="hydro">Divisão Hídrica</option>
                  <option value="parceiro">Parcerias / Revenda</option>
                  <option value="outros">Outros / Dúvidas Gerais</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Payload da Mensagem *</label>
                <textarea 
                  required
                  placeholder="Descreva detalhadamente sua solicitação técnica ou comercial..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all min-h-[150px] resize-none"
                />
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <input 
                  type="checkbox" 
                  id="termos"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                />
                <label htmlFor="termos" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                  Autorizo o processamento dos meus dados conforme a <a href="#" className="text-cyan-600 font-bold hover:underline">Diretiva de Privacidade Global</a> da Aetheris. Entendo que o tempo de resposta do sistema é de até 24h úteis.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-lg hover:-translate-y-1"
              >
                <Send size={18} /> Inicializar Uplink
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}