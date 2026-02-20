"use client";

import { useCart } from "@/app/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarrinhoPage() {
  const { items, removeFromCart, cartTotal, totalItems } = useCart();

  // Correção 1: Geração limpa e blindada do link do WhatsApp
  const messageText = `Olá, gostaria de finalizar meu pedido na Bio-X:\n\n${items
    .map((i) => `• ${i.quantity}x ${i.name}`)
    .join("\n")}\n\nTotal Estimado: R$ ${cartTotal.toFixed(2)}`;
    
  const checkoutMessage = encodeURIComponent(messageText);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors mb-4 text-sm font-medium">
            <ArrowLeft size={16} /> Continuar Comprando
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Seu Carrinho <span className="text-slate-300">({totalItems})</span>
          </h1>
        </header>

        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] border border-slate-200 shadow-sm text-center"
          >
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={48} className="text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Seu carrinho está vazio</h2>
            <p className="text-slate-500 mb-8 max-w-md">Parece que você ainda não adicionou nenhuma tecnologia biológica à sua safra.</p>
            <Link href="/" className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/30">
              Ver Produtos
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Lista de Produtos */}
            <div className="lg:col-span-8 space-y-6">
              <AnimatePresence>
                {items.map((item: any) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-cyan-100 transition-colors"
                  >
                    <div className="relative w-24 h-24 bg-slate-50 rounded-2xl p-2 shrink-0">
                      {/* Correção 2: Mudando de item.img para item.image */}
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={96} 
                        height={96} 
                        className="object-contain w-full h-full mix-blend-multiply"
                      />
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                      {/* Correção 3: Mudando de item.desc para item.description */}
                      <p className="text-sm text-slate-500 line-clamp-1">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Qtd</span>
                        <span className="text-lg font-bold text-slate-900">{item.quantity}</span>
                      </div>
                      <div className="text-right w-28">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Total</span>
                        <span className="text-xl font-extrabold text-cyan-600">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Remover item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-4">
              <div className="bg-[#0B1120] text-white p-8 rounded-[2.5rem] sticky top-32 shadow-2xl shadow-slate-900/20">
                <h3 className="text-2xl font-bold mb-8">Resumo do Pedido</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Frete</span>
                    <span className="text-emerald-400 font-bold">Grátis</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-medium">Total Estimado</span>
                    <span className="text-4xl font-extrabold tracking-tight text-white">
                      <span className="text-lg text-slate-500 font-normal mr-1">R$</span>
                      {cartTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/5531995235778?text=${checkoutMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 mb-6"
                >
                  Finalizar no WhatsApp <ArrowRight size={20} />
                </a>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 bg-white/5 p-3 rounded-xl">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>Pagamento seguro via Link ou Boleto</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 bg-white/5 p-3 rounded-xl">
                    <Truck size={16} className="text-cyan-400" />
                    <span>Entrega garantida em todo Brasil</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}