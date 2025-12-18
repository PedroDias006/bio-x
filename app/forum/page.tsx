"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";
import {
   ArrowLeft // Importando o ícone de voltar
   ,

   MessageCircle,
   MoreVertical,
   Plus,
   Search,
   Send,
   Users
} from "lucide-react";
import Link from "next/link"; // Importando Link
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
  icon: string;
}

export default function ForumPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState<any>(null);
  const [topics, setTopics] = useState<Topic[]>([
    { id: "bio-x-solo", name: "Microbiologia do Solo", desc: "Discussões sobre ativação biológica e recuperação de solo.", icon: "🌱" },
    { id: "biorremediacao", name: "Sanaqua & Água", desc: "Técnicas de tratamento de efluentes e biorremediação.", icon: "💧" },
    { id: "gado-digestao", name: "Saúde Animal", desc: "Nutrição, conversão alimentar e manejo de pastagens.", icon: "🐄" },
    { id: "geral", name: "Lounge Bio-X", desc: "Apresentações, networking e conversas gerais.", icon: "💬" },
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
    <div className="flex h-screen bg-[#F0F2F5] overflow-hidden font-sans">
      
      {/* SIDEBAR (Lista de Tópicos) */}
      <aside className="w-80 bg-[#0B0C10] flex flex-col border-r border-white/5 hidden md:flex">
        
        {/* Header Sidebar COM BOTÃO VOLTAR */}
        <div className="p-6 border-b border-white/10">
           {/* Botão Voltar para a Home */}
           <div className="mb-6">
             <Link 
               href="/" 
               className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
             >
               <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10">
                 <ArrowLeft size={16} />
               </div>
               Voltar ao Site
             </Link>
           </div>

           <h2 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
              <Users className="text-cyan-500" /> Comunidade Bio-X
           </h2>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Buscar canais..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
              />
           </div>
        </div>

        {/* Lista de Canais */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
           <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Canais Abertos</p>
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all group ${
                   selectedTopic.id === topic.id 
                   ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                   : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                 <span className="text-lg group-hover:scale-110 transition-transform">{topic.icon}</span>
                 <div>
                    <span className="block font-medium text-sm">{topic.name}</span>
                 </div>
                 {selectedTopic.id === topic.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                 )}
              </button>
           ))}
        </div>

        {/* User Mini Profile */}
        {user && (
           <div className="p-4 border-t border-white/10 bg-[#08090C]">
              <div className="flex items-center gap-3">
                 <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full border border-white/10" />
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">{user.name}</p>
                    <p className="text-xs text-green-500 flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                    </p>
                 </div>
              </div>
           </div>
        )}
      </aside>

      {/* CHAT MAIN AREA */}
      <main className="flex-1 flex flex-col bg-white relative">
         
         {/* Chat Header */}
         <header className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shadow-sm z-10">
            
            {/* Botão Voltar (Visível Apenas no Mobile) */}
            <div className="md:hidden mr-4">
              <Link href="/">
                <ArrowLeft className="text-slate-600" />
              </Link>
            </div>

            <div className="flex items-center gap-3 flex-1">
               <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">
                  {selectedTopic.icon}
               </div>
               <div>
                  <h1 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-base">
                     {selectedTopic.name}
                  </h1>
                  <p className="text-xs text-gray-500 hidden md:block">{selectedTopic.desc}</p>
               </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
               <MoreVertical size={20} />
            </button>
         </header>

         {/* Messages Area */}
         <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
            {messages.length === 0 ? (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                     <MessageCircle size={40} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-400">Comece a conversa</h3>
                  <p className="text-sm text-gray-400 max-w-xs">Seja o primeiro a compartilhar conhecimento neste tópico.</p>
               </div>
            ) : (
               messages.map((msg, idx) => {
                  const isMe = msg.author === user?.name;
                  return (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-4 ${isMe ? "flex-row-reverse" : ""}`}
                     >
                        <img 
                           src={msg.avatar} 
                           alt={msg.author} 
                           className="w-10 h-10 rounded-full shadow-sm object-cover border-2 border-white" 
                        />
                        <div className={`max-w-[70%] ${isMe ? "items-end" : "items-start"} flex flex-col`}>
                           <div className="flex items-baseline gap-2 mb-1 px-1">
                              <span className="text-xs font-bold text-slate-700">{msg.author}</span>
                              <span className="text-[10px] text-gray-400">
                                 {msg.timestamp && !isNaN(Date.parse(msg.timestamp))
                                    ? format(new Date(msg.timestamp), "HH:mm")
                                    : ""}
                              </span>
                           </div>
                           <div 
                              className={`px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                 isMe 
                                 ? "bg-cyan-500 text-white rounded-tr-none" 
                                 : "bg-white text-slate-600 border border-gray-100 rounded-tl-none"
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
         <div className="p-4 bg-white border-t border-gray-100">
            <form 
               onSubmit={sendMessage}
               className="max-w-4xl mx-auto relative flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-cyan-100 focus-within:border-cyan-300 transition-all"
            >
               <button 
                  type="button"
                  className="p-2 text-gray-400 hover:text-cyan-500 hover:bg-white rounded-full transition-colors"
               >
                  <Plus size={20} />
               </button>
               
               <input
                  type="text"
                  placeholder={`Enviar mensagem em #${selectedTopic.name}...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-gray-400 text-sm"
               />
               
               <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-200"
               >
                  <Send size={18} className="ml-0.5" />
               </button>
            </form>
            <p className="text-center text-[10px] text-gray-300 mt-2">
               Pressione Enter para enviar
            </p>
         </div>

      </main>
    </div>
  );
}