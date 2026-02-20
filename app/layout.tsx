import "@/globals.css";
import type { Metadata } from "next";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import { CartProvider } from "./context/CartContext"; // 1. Importando o Provider

export const metadata: Metadata = {
  title: "AETHERIS",
  description: "Soluções vivas para um futuro sustentável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* 2. Envolvendo a aplicação inteira com o CartProvider */}
        <CartProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </CartProvider>
      </body>
    </html>
  );
}