"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Definição de Tipos de Matéria
type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  desc: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // [SISTEMA] Inicializar protocolo de persistência local
  useEffect(() => {
    // MUDANÇA: Chave de armazenamento atualizada para a nova empresa
    const saved = localStorage.getItem("aetheris-containment-unit");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // [SISTEMA] Sincronizar inventário com o banco de dados local
  useEffect(() => {
    localStorage.setItem("aetheris-containment-unit", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  // Cálculo de Carga Total e Créditos
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalItems, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Erro de Sistema: useCart deve ser usado dentro de um CartProvider.");
  return context;
};