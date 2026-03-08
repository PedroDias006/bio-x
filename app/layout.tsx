import "@/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Importação da fonte
import ClientLayoutWrapper from "./ClientLayoutWrapper";

// 2. Configuração da fonte
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Garante que o texto apareça rápido enquanto a fonte carrega
});

export const metadata: Metadata = {
  title: "AETHERIS",
  description: "Soluções vivas para um futuro sustentável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* 3. Aplicação da fonte na tag body */}
      <body className={inter.className}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}