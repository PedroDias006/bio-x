"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
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
    // bg-slate-50 garante o entorno claro e pt-40 garante a separação da NavBar
    <div className="min-h-screen bg-slate-50 pt-40 pb-24 font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO DA PÁGINA - MONOCROMÁTICO */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 tracking-tighter uppercase">
            Fale com nossos <span className="text-slate-950 underline decoration-slate-300 decoration-4 underline-offset-8">Especialistas</span>
          </h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            Canal de atendimento direto com a equipe técnica da Pride
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= COLUNA ESQUERDA (INFORMAÇÕES) ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CARD 1: SEDE OPERACIONAL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-slate-950">
                <MapPin size={24} />
                <h3 className="font-bold text-lg">Sede Operacional</h3>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Endereço Principal</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-1">Pólo Industrial de Biotecnologia, Galpão 3</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">Ribeirão Preto, São Paulo — BR</p>
              <p className="text-[10px] font-mono text-slate-400">CNPJ: 00.000.000/0001-00</p>
            </motion.div>

            {/* CARD 2: CANAIS DE ATENDIMENTO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-slate-950">
                <Phone size={24} />
                <h3 className="font-bold text-lg">Contatos</h3>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Canais de Atendimento</p>
              
              <div className="space-y-3">
                <a href="tel:+5516999999999" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-slate-900 hover:text-slate-950 transition-colors">
                  +55 16 99999-9999
                </a>
                <a href="mailto:contato@pride.com.br" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-slate-900 hover:text-slate-950 transition-colors">
                  <Mail size={16} /> contato@pride.com.br
                </a>
              </div>
            </motion.div>

            {/* CARD 3: SEGURANÇA E PRIVACIDADE (DARK THEME PRETO) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4 text-slate-100">
                <ShieldCheck size={24} />
                <h3 className="font-bold text-lg">Privacidade</h3>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Proteção de Dados</p>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Atendimento Sigiloso</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Conformidade com LGPD</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Respeito à Propriedade</li>
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
            {/* Detalhe visual preto no topo do formulário */}
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-950" />

            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Envie sua Mensagem</h2>
              <p className="text-sm text-slate-500">Preencha os dados abaixo para que nossos consultores possam entender melhor a sua necessidade.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Propriedade / Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Nome da Fazenda ou Empresa"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Linha de Interesse</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Selecione um Produto ou Setor...</option>
                  <option value="solos">Pride Solos (Agricultura e Cultivo)</option>
                  <option value="vitals">Linha Vitals (Aves, Suínos, Gado)</option>
                  <option value="clean">Pride Clean (Lagos e Efluentes)</option>
                  <option value="parceiro">Seja um Distribuidor / Revenda</option>
                  <option value="outros">Outros / Dúvidas Gerais</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Sua Mensagem *</label>
                <textarea 
                  required
                  placeholder="Descreva brevemente como podemos ajudar sua propriedade ou negócio..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all min-h-[150px] resize-none"
                />
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <input 
                  type="checkbox" 
                  id="termos"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-pointer"
                />
                <label htmlFor="termos" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                  Concordo em receber comunicações da Pride. Seus dados estão seguros conosco e não serão compartilhados com terceiros. Entendo que o tempo de resposta é de até 24h úteis.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-950 hover:bg-slate-800 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-lg hover:-translate-y-1"
              >
                <Send size={18} /> Enviar Mensagem
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}