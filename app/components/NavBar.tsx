"use client";

import { useCart } from "@/app/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  Beef,
  ChevronDown,
  Droplets,
  Handshake,
  Info,
  Leaf,
  LogOut,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShoppingCart,
  User,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const pathname = usePathname(); 
  const { totalItems } = useCart();

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) setUser(JSON.parse(stored));

    const handleLogin = () => {
      const updated = localStorage.getItem("userData");
      if (updated) setUser(JSON.parse(updated));
    };
    window.addEventListener("userLogin", handleLogin);
    return () => window.removeEventListener("userLogin", handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    setShowDropdown(false);
  };

  const navLinks = [
    { 
      name: "Genoma Agro", 
      href: "/agricultura", 
      icon: <Leaf size={14} />, 
      parentColor: "group-hover:text-green-400",
      barColor: "bg-green-500",
      childHoverColor: "hover:text-green-400",
      childBorderColor: "hover:border-green-500",
      subItems: [
        { name: "Sintetização de Matéria", href: "/compostagem" } 
      ]
    },
    { 
      name: "Bio-Zootecnia", 
      href: "/saude-animal", 
      icon: <Beef size={14} />, 
      parentColor: "group-hover:text-amber-400",
      barColor: "bg-amber-500",
      childHoverColor: "hover:text-amber-400",
      childBorderColor: "hover:border-amber-500",
      subItems: [
        { name: "Blindagem Bovina", href: "/saudegado" },   
        { name: "Núcleo Aviário", href: "/saudeave" }, 
        { name: "Modulador Suíno", href: "/saudesuino" } 
      ]
    },
    { 
      name: "Divisão Hídrica", 
      href: "/agua-meioambiente", 
      icon: <Droplets size={14} />, 
      parentColor: "group-hover:text-cyan-400",
      barColor: "bg-cyan-500",
      childHoverColor: "hover:text-cyan-400",
      childBorderColor: "hover:border-cyan-500",
      subItems: [
        { name: "Protocolo D-Grade", href: "/dgrada" } 
      ]
    },
    { name: "Rede de Parceiros", href: "/revendedor", icon: <Handshake size={14} />, parentColor: "group-hover:text-emerald-400 text-emerald-500 font-bold", highlight: true },
    { name: "Nossa Gênese", href: "/sobre", icon: <Info size={14} />, parentColor: "group-hover:text-white" },
    { name: "Contato", href: "/contato", icon: <Phone size={14} />, parentColor: "group-hover:text-white" },
  ];

  if (pathname && pathname.startsWith("/forum")) {
    return null;
  }

  return (
    <>
      <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px]">
        <div className="relative bg-[#020617]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] overflow-visible">
          
          <div className="flex items-center justify-between px-6 md:px-8 h-20 relative z-20">
            {/* LOGO CORRIGIDA: Travando a altura para não estourar a barra */}
            <Link href="/" className="relative z-10 group shrink-0 flex items-center h-full">
              <Image 
                src="/images/logo-aetheris.png" 
                alt="AETHERIS" 
                width={120} 
                height={48} 
                className="h-10 md:h-12 w-auto object-contain" 
                priority 
                unoptimized 
              />
            </Link>

            <div className="hidden lg:flex flex-1 max-w-md mx-8 group">
              <div className="relative w-full transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </div>
                <input type="text" placeholder="Pesquisar protocolos..." className="w-full bg-white/5 border border-white/5 text-white text-sm rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:bg-white/10 focus:border-emerald-500/50 transition-all placeholder:text-slate-500" />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-6 mr-6 border-r border-white/10 pr-6 h-10">
                <Link href="/forum" className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-emerald-400 transition-colors group">
                  <MessageCircle size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Fórum</span>
                </Link>
                <Link href="/carrinho" className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-emerald-400 transition-colors group relative">
                  <div className="relative">
                      <ShoppingCart size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                      <AnimatePresence>
                        {totalItems > 0 && (
                          <motion.span
                            key={totalItems}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm border border-[#020617]"
                          >
                            {totalItems}
                          </motion.span>
                        )}
                      </AnimatePresence>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Carrinho</span>
                </Link>
              </div>

              <div>
                {user ? (
                  <div className="relative">
                    <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-1.5 py-1.5 pr-4 rounded-full border border-white/5 transition-all group">
                      <div className="relative">
                        <img src={user.avatar || "/avatars/default.png"} alt="avatar" className="w-9 h-9 rounded-full border border-white/10 group-hover:border-emerald-500/50 transition-colors object-cover" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#020617] rounded-full"></div>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider leading-none mb-0.5">Agente,</p>
                        <p className="text-sm font-bold text-white leading-none max-w-[80px] truncate">{user.name.split(" ")[0]}</p>
                      </div>
                      <ChevronDown size={14} className="text-slate-500 group-hover:text-white transition-colors ml-1" />
                    </button>
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute right-0 mt-2 w-56 bg-[#0B0C10] border border-white/10 rounded-2xl shadow-xl py-2 z-50 overflow-hidden">
                          <div className="px-4 py-3 border-b border-white/5 mb-2 bg-white/5">
                             <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Conta Conectada</p>
                             <p className="text-xs text-slate-300 truncate mt-1">{user.email}</p>
                          </div>
                          <Link href="/perfil" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                            <User size={16} /> Meu Perfil
                          </Link>
                          <Link href="/pedidos" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                            <ShoppingCart size={16} /> Meus Pedidos
                          </Link>
                          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left mt-2 border-t border-white/5">
                            <LogOut size={16} /> Sair da Conta
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button onClick={() => setShowLogin(true)} className="bg-white text-black hover:bg-emerald-50 text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-white/10">
                    Acessar Conta
                  </button>
                )}
              </div>
            </nav>

            <button className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 relative" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="hidden md:block border-t border-white/5 bg-black/20">
             <nav className="flex justify-center">
                {navLinks.map((link) => (
                   <div key={link.name} className="relative group">
                     {link.subItems ? (
                       <button className={`flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b-2 border-transparent transition-all duration-300 hover:bg-white/5 group-hover:border-white/20 ${link.parentColor}`}>
                          {link.icon}
                          {link.name}
                          <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
                       </button>
                     ) : (
                       <Link 
                          href={link.href}
                          className={`flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b-2 border-transparent transition-all duration-300 ${link.parentColor} hover:bg-white/5`}
                       >
                          {link.icon}
                          {link.name}
                       </Link>
                     )}

                     {link.subItems && (
                       <div className="absolute top-full left-0 mt-0 w-64 bg-[#020617] border border-white/10 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                          <div className={`h-1 w-full ${link.barColor}`} />
                          <div className="py-2">
                            {link.subItems.map((sub) => (
                              <Link 
                                key={sub.name} 
                                href={sub.href}
                                className={`block px-6 py-4 text-base text-slate-300 hover:bg-white/5 transition-all font-medium border-l-4 border-transparent ${link.childHoverColor} ${link.childBorderColor}`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                       </div>
                     )}
                   </div>
                ))}
             </nav>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden border-t border-white/10 bg-[#020617] overflow-hidden rounded-b-[2rem]">
                <div className="flex flex-col p-6 space-y-2">
                  {navLinks.map((link) => (
                     <div key={link.name}>
                        {link.subItems ? (
                          <div>
                            <button 
                              onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                              className={`flex items-center justify-between w-full gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors font-medium ${mobileSubmenu === link.name ? 'text-white' : 'text-slate-300'}`}
                            >
                              <div className="flex items-center gap-4">
                                <span>{link.icon}</span> 
                                {link.name}
                              </div>
                              <ChevronDown size={16} className={`transition-transform ${mobileSubmenu === link.name ? "rotate-180" : ""}`} />
                            </button>
                            
                            <AnimatePresence>
                              {mobileSubmenu === link.name && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }} 
                                  animate={{ height: "auto", opacity: 1 }} 
                                  exit={{ height: 0, opacity: 0 }} 
                                  className="overflow-hidden ml-10 border-l border-white/10"
                                >
                                  {link.subItems.map((sub) => (
                                    <Link 
                                      key={sub.name} 
                                      href={sub.href} 
                                      onClick={() => setMenuOpen(false)}
                                      className={`block pl-4 py-3 text-sm text-slate-400 transition-colors ${link.childHoverColor}`}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link 
                            href={link.href} 
                            onClick={() => setMenuOpen(false)} 
                            className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors font-medium text-slate-300 ${link.parentColor ? link.parentColor.replace('group-hover:', '') : ''}`}
                          >
                             <span>{link.icon}</span> 
                             {link.name}
                          </Link>
                        )}
                     </div>
                  ))}
                  
                  <div className="h-px bg-white/10 my-4" />
                  
                  <Link href="/carrinho" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 text-slate-300">
                     <ShoppingCart size={18} /> Carrinho ({totalItems})
                  </Link>
                  {user ? (
                     <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-500/10 text-red-400 w-full text-left">
                        <LogOut size={18} /> Sair da Conta
                     </button>
                  ) : (
                     <button onClick={() => { setShowLogin(true); setMenuOpen(false); }} className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl mt-2">
                        Acessar Conta
                     </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}