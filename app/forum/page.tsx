"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";
import {
   Activity,
   ArrowLeft,
   Cpu,
   Globe,
   Hash,
   MoreHorizontal,
   Plus,
   Radio,
   Search,
   Send,
   Users
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

interface Message {
  text: string;
  author: string;
  avatar: string;
  roomId: string;
  timestamp: string;
}

interface Topic {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export default function AetherisForum() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState<any>(null);
  const [topics, setTopics] = useState<Topic[]>([
    { id: "genoma-agro", name: "GENOMA AGRO", desc: "Protocolos de reprogramação de solo e engenharia genética vegetal.", icon: <Cpu size={18} /> },
    { id: "hydro-sys", name: "HYDRO SYS", desc: "Sistemas de purificação molecular e tratamento de efluentes.", icon: <Activity size={18} /> },
    { id: "bio-animal", name: "BIO ANIMAL", desc: "Otimização metabólica e nutrição sintética para pecuária.", icon: <Radio size={18} /> },
    { id: "nexus-geral", name: "NEXUS GERAL", desc: "Canal aberto para networking e troca de dados não classificados.", icon: <Globe size={18} /> },
  ]);
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      const userData = JSON.parse(stored);
      setUser(userData);
      socket.emit("registerUser", userData);
      socket.emit("joinRoom", selectedTopic.id);
    }

    socket.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.emit("leaveRoom", selectedTopic.id);
      socket.off("message");
    };
  }, [selectedTopic]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !user) return;
    
    const msg: Message = {
      text: input,
      author: user.name,
      avatar: user.avatar,
      roomId: selectedTopic.id,
      timestamp: new Date().toISOString(),
    };
    socket.emit("chatMessage", msg);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden font-sans text-slate-300">
      
      {/* SIDEBAR (Lista de Tópicos) */}
      <aside className="w-80 bg-[#0B1121] flex flex-col border-r border-white/5 hidden md:flex">
        
        {/* Header Sidebar COM BOTÃO VOLTAR */}
        <div className="p-6 border-b border-white/5">
           {/* Botão Voltar para a Home */}
           <div className="mb-8">
             <Link 
               href="/" 
               className="inline-flex items-center gap-2 text-cyan-500/70 hover:text-cyan-400 transition-colors text-xs font-mono uppercase tracking-widest group"
             >
               <div className="p-1.5 rounded border border-cyan-500/20 bg-cyan-950/20 group-hover:border-cyan-500/50 transition-colors">
                 <ArrowLeft size={14} />
               </div>
               Encerrar Sessão
             </Link>
           </div>

           <h2 className="text-white font-bold text-lg flex items-center gap-3 mb-4 tracking-tight">
              <Users className="text-cyan-500" /> Rede Neural
           </h2>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Escanear Frequências..." 
                className="w-full bg-[#020617] border border-white/10 rounded-sm py-2 pl-9 pr-4 text-xs font-mono text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
              />
           </div>
        </div>

        {/* Lista de Canais */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
           <p className="px-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4 font-mono">Canais Criptografados</p>
           {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                   if (selectedTopic.id !== topic.id) {
                      socket.emit("leaveRoom", selectedTopic.id);
                      socket.emit("joinRoom", topic.id);
                      setSelectedTopic(topic);
                      setMessages([]);
                   }
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg text-left transition-all group border border-transparent ${
                   selectedTopic.id === topic.id 
                   ? "bg-cyan-950/20 text-cyan-400 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
                   : "text-slate-500 hover:bg-white/5 hover:text-white"
                }`}
              >
                 <span className={`text-lg transition-transform ${selectedTopic.id === topic.id ? "text-cyan-500" : "group-hover:text-cyan-400"}`}>{topic.icon}</span>
                 <div>
                    <span className="block font-bold text-xs tracking-wider font-mono">{topic.name}</span>
                 </div>
                 {selectedTopic.id === topic.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan] animate-pulse" />
                 )}
              </button>
           ))}
        </div>

        {/* User Mini Profile */}
        {user && (
           <div className="p-4 border-t border-white/5 bg-[#050B14]">
              <div className="flex items-center gap-3">
                 <div className="relative">
                    <img src={user.avatar} alt="User" className="w-10 h-10 rounded bg-slate-800 border border-white/10" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#0B1121] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                 </div>
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate font-mono">{user.name}</p>
                    <p className="text-[10px] text-emerald-500 flex items-center gap-1 uppercase tracking-wider">
                       Conectado
                    </p>
                 </div>
              </div>
           </div>
        )}
      </aside>

      {/* CHAT MAIN AREA */}
      <main className="flex-1 flex flex-col bg-[#050B14] relative shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.5)]">
         
         {/* Chat Header */}
         <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0B1121]/50 backdrop-blur-md z-10">
            
            {/* Botão Voltar (Visível Apenas no Mobile) */}
            <div className="md:hidden mr-4">
              <Link href="/">
                <ArrowLeft className="text-slate-400" />
              </Link>
            </div>

            <div className="flex items-center gap-4 flex-1">
               <div className="w-10 h-10 bg-cyan-950/30 rounded border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  {selectedTopic.icon}
               </div>
               <div>
                  <h1 className="font-bold text-white flex items-center gap-2 text-sm md:text-base tracking-wide font-mono uppercase">
                     <span className="text-cyan-500">#</span> {selectedTopic.name}
                  </h1>
                  <p className="text-xs text-slate-500 hidden md:block font-mono">{selectedTopic.desc}</p>
               </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded text-slate-500 hover:text-white transition-colors">
               <MoreHorizontal size={20} />
            </button>
         </header>

         {/* Messages Area */}
         <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B1121] via-[#020617] to-[#020617]">
            {messages.length === 0 ? (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                     <Hash size={48} className="text-slate-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono tracking-widest uppercase">Sem Dados</h3>
                  <p className="text-sm text-slate-400 max-w-xs font-mono">Inicie o protocolo de transmissão neste canal.</p>
               </div>
            ) : (
               messages.map((msg, idx) => {
                  const isMe = msg.author === user?.name;
                  return (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: isMe ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex gap-4 ${isMe ? "flex-row-reverse" : ""}`}
                     >
                        <img 
                           src={msg.avatar} 
                           alt={msg.author} 
                           className="w-10 h-10 rounded bg-slate-800 object-cover border border-white/10" 
                        />
                        <div className={`max-w-[70%] ${isMe ? "items-end" : "items-start"} flex flex-col`}>
                           <div className="flex items-baseline gap-2 mb-1 px-1">
                              <span className={`text-xs font-bold font-mono uppercase tracking-wider ${isMe ? "text-cyan-400" : "text-white"}`}>
                                 {isMe ? "Você" : msg.author}
                              </span>
                              <span className="text-[10px] text-slate-600 font-mono">
                                 {msg.timestamp && !isNaN(Date.parse(msg.timestamp))
                                    ? format(new Date(msg.timestamp), "HH:mm:ss")
                                    : ""}
                              </span>
                           </div>
                           <div 
                              className={`px-6 py-4 text-sm leading-relaxed border ${
                                 isMe 
                                 ? "bg-cyan-950/20 text-cyan-100 border-cyan-500/30 rounded-l-xl rounded-br-xl shadow-[0_0_15px_rgba(6,182,212,0.05)]" 
                                 : "bg-[#0F172A] text-slate-300 border-white/5 rounded-r-xl rounded-bl-xl"
                              }`}
                           >
                              {msg.text}
                           </div>
                        </div>
                     </motion.div>
                  );
               })
            )}
            <div ref={messagesEndRef} />
         </div>

         {/* Input Area */}
         <div className="p-6 bg-[#0B1121] border-t border-white/5">
            <form 
               onSubmit={sendMessage}
               className="max-w-5xl mx-auto relative flex items-center gap-2 bg-[#020617] border border-white/10 rounded px-2 py-2 focus-within:border-cyan-500/50 transition-all shadow-inner"
            >
               <button 
                  type="button"
                  className="p-2 text-slate-500 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors"
               >
                  <Plus size={20} />
               </button>
               
               <input
                  type="text"
                  placeholder={`Inserir comando em #${selectedTopic.name}...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 text-sm font-mono"
               />
               
               <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(8,145,178,0.5)]"
               >
                  <Send size={16} className="ml-0.5" />
               </button>
            </form>
            <div className="text-center mt-3 flex items-center justify-center gap-2 opacity-30">
                <div className="w-1 h-1 rounded-full bg-cyan-500 animate-ping"/>
                <p className="text-[10px] text-cyan-500 font-mono uppercase tracking-widest">
                   Conexão Segura Estabelecida
                </p>
            </div>
         </div>

      </main>
    </div>
  );
}